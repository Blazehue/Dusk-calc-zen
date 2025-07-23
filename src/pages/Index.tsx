import Calculator from '@/components/Calculator';
import DarkModeToggle from '@/components/DarkModeToggle';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

const Index = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-screen transition-colors duration-300 relative z-10 w-full">
        <DarkModeToggle />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Advanced Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern, full-featured calculator with memory functions, scientific operations, and beautiful dark mode support.
            </p>
          </div>

          <div className="flex justify-center">
            <Calculator />
          </div>

          {/* Features */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border">
                <h3 className="font-semibold mb-2">Basic Operations</h3>
                <p className="text-sm text-muted-foreground">Addition, subtraction, multiplication, division, and more</p>
              </div>
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border">
                <h3 className="font-semibold mb-2">Memory Functions</h3>
                <p className="text-sm text-muted-foreground">MC, MR, M+, M- for storing and recalling values</p>
              </div>
              <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border">
                <h3 className="font-semibold mb-2">Scientific Functions</h3>
                <p className="text-sm text-muted-foreground">Square root, exponents, π, percentage, and rounding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Index;
