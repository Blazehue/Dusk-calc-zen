import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type CalculatorState = {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForOperand: boolean;
  memory: number;
};

const Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
    memory: 0,
  });

  const calculate = useCallback((firstOperand: number, secondOperand: number, operation: string): number => {
    switch (operation) {
      case '+': return firstOperand + secondOperand;
      case '-': return firstOperand - secondOperand;
      case '×': return firstOperand * secondOperand;
      case '÷': return secondOperand !== 0 ? firstOperand / secondOperand : 0;
      case 'xy': return Math.pow(firstOperand, secondOperand);
      default: return secondOperand;
    }
  }, []);

  const inputNumber = useCallback((num: string) => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: num,
          waitingForOperand: false,
        };
      }
      
      return {
        ...prev,
        display: prev.display === '0' ? num : prev.display + num,
      };
    });
  }, []);

  const inputDot = useCallback(() => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: '0.',
          waitingForOperand: false,
        };
      }
      
      if (prev.display.indexOf('.') === -1) {
        return {
          ...prev,
          display: prev.display + '.',
        };
      }
      
      return prev;
    });
  }, []);

  const clear = useCallback(() => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
      memory: 0,
    });
  }, []);

  const clearEntry = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: '0',
    }));
  }, []);

  const performOperation = useCallback((nextOperation: string) => {
    setState(prev => {
      const inputValue = parseFloat(prev.display);

      if (prev.previousValue === null) {
        return {
          ...prev,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForOperand: true,
        };
      }

      if (prev.operation && prev.waitingForOperand) {
        return {
          ...prev,
          operation: nextOperation,
        };
      }

      const currentValue = prev.previousValue || 0;
      const newValue = calculate(currentValue, inputValue, prev.operation || '');

      return {
        ...prev,
        display: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForOperand: true,
      };
    });
  }, [calculate]);

  const performEquals = useCallback(() => {
    setState(prev => {
      const inputValue = parseFloat(prev.display);

      if (prev.previousValue !== null && prev.operation) {
        const newValue = calculate(prev.previousValue, inputValue, prev.operation);
        return {
          ...prev,
          display: String(newValue),
          previousValue: null,
          operation: null,
          waitingForOperand: true,
        };
      }

      return prev;
    });
  }, [calculate]);

  const toggleSign = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: prev.display.charAt(0) === '-' ? prev.display.slice(1) : '-' + prev.display,
    }));
  }, []);

  const percentage = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: String(parseFloat(prev.display) / 100),
    }));
  }, []);

  const squareRoot = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: String(Math.sqrt(parseFloat(prev.display))),
    }));
  }, []);

  const addPi = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: String(Math.PI),
      waitingForOperand: true,
    }));
  }, []);

  const roundToDecimals = useCallback((decimals: number) => {
    setState(prev => ({
      ...prev,
      display: parseFloat(prev.display).toFixed(decimals),
    }));
  }, []);

  // Memory functions
  const memoryClear = useCallback(() => {
    setState(prev => ({ ...prev, memory: 0 }));
  }, []);

  const memoryRecall = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: String(prev.memory),
      waitingForOperand: true,
    }));
  }, []);

  const memoryPlus = useCallback(() => {
    setState(prev => ({
      ...prev,
      memory: prev.memory + parseFloat(prev.display),
    }));
  }, []);

  const memoryMinus = useCallback(() => {
    setState(prev => ({
      ...prev,
      memory: prev.memory - parseFloat(prev.display),
    }));
  }, []);

  const formatDisplay = (value: string) => {
    if (value.length > 12) {
      const num = parseFloat(value);
      if (Math.abs(num) >= 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
      }
    }
    return value;
  };

  return (
    <Card className="w-full max-w-sm mx-auto bg-gradient-surface border-0 shadow-2xl">
      {/* Display */}
      <div className="p-6 pb-4">
        <div className="bg-calc-display text-calc-display-text p-4 rounded-lg text-right text-3xl font-mono min-h-[60px] flex items-center justify-end shadow-inner">
          {formatDisplay(state.display)}
        </div>
        {state.memory !== 0 && (
          <div className="text-xs text-muted-foreground mt-1 text-right">M</div>
        )}
      </div>

      {/* Button Grid */}
      <div className="p-6 pt-0 grid grid-cols-4 gap-3">
        {/* Row 1: Memory & Clear functions */}
        <Button
          onClick={memoryClear}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          MC
        </Button>
        <Button
          onClick={memoryRecall}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          MR
        </Button>
        <Button
          onClick={memoryMinus}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          M-
        </Button>
        <Button
          onClick={memoryPlus}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          M+
        </Button>

        {/* Row 2: Clear & Advanced functions */}
        <Button
          onClick={clear}
          className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold"
          size="lg"
        >
          AC
        </Button>
        <Button
          onClick={clearEntry}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          CE
        </Button>
        <Button
          onClick={percentage}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          %
        </Button>
        <Button
          onClick={() => performOperation('÷')}
          className="bg-calc-operator hover:bg-calc-operator-hover text-calc-operator-text font-semibold"
          size="lg"
        >
          ÷
        </Button>

        {/* Row 3: Scientific functions */}
        <Button
          onClick={squareRoot}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold text-sm"
          size="lg"
        >
          √x
        </Button>
        <Button
          onClick={() => performOperation('xy')}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold text-sm"
          size="lg"
        >
          x^y
        </Button>
        <Button
          onClick={addPi}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          π
        </Button>
        <Button
          onClick={() => performOperation('×')}
          className="bg-calc-operator hover:bg-calc-operator-hover text-calc-operator-text font-semibold"
          size="lg"
        >
          ×
        </Button>

        {/* Row 4: Numbers 7-9 */}
        <Button
          onClick={() => inputNumber('7')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          7
        </Button>
        <Button
          onClick={() => inputNumber('8')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          8
        </Button>
        <Button
          onClick={() => inputNumber('9')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          9
        </Button>
        <Button
          onClick={() => performOperation('-')}
          className="bg-calc-operator hover:bg-calc-operator-hover text-calc-operator-text font-semibold"
          size="lg"
        >
          −
        </Button>

        {/* Row 5: Numbers 4-6 */}
        <Button
          onClick={() => inputNumber('4')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          4
        </Button>
        <Button
          onClick={() => inputNumber('5')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          5
        </Button>
        <Button
          onClick={() => inputNumber('6')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          6
        </Button>
        <Button
          onClick={() => performOperation('+')}
          className="bg-calc-operator hover:bg-calc-operator-hover text-calc-operator-text font-semibold"
          size="lg"
        >
          +
        </Button>

        {/* Row 6: Numbers 1-3 */}
        <Button
          onClick={() => inputNumber('1')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          1
        </Button>
        <Button
          onClick={() => inputNumber('2')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          2
        </Button>
        <Button
          onClick={() => inputNumber('3')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          3
        </Button>
        <Button
          onClick={toggleSign}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold"
          size="lg"
        >
          +/−
        </Button>

        {/* Row 7: 0, decimal, rounding, equals */}
        <Button
          onClick={() => inputNumber('0')}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press col-span-1"
          size="lg"
        >
          0
        </Button>
        <Button
          onClick={inputDot}
          className="bg-calc-number hover:bg-calc-number-hover text-calc-number-text font-semibold animate-press"
          size="lg"
        >
          .
        </Button>
        <Button
          onClick={() => roundToDecimals(2)}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold text-sm"
          size="lg"
        >
          R2
        </Button>
        <Button
          onClick={performEquals}
          className="bg-gradient-primary text-calc-operator-text font-semibold shadow-lg"
          size="lg"
        >
          =
        </Button>

        {/* Row 8: R0 (Round to 0 decimals) */}
        <Button
          onClick={() => roundToDecimals(0)}
          className="bg-calc-function hover:bg-calc-function-hover text-calc-function-text font-semibold text-sm col-span-4"
          size="lg"
        >
          R0 (Round to dollars)
        </Button>
      </div>
    </Card>
  );
};

export default Calculator;