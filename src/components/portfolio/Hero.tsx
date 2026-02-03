import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  isPopped: boolean;
}

const Hero = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles only on client-side mount
    const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40, // 40px to 120px
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10, // 10s to 20s
      isPopped: false,
    }));
    setBubbles(newBubbles);
  }, []);

  const handlePop = (id: number) => {
    setBubbles(prev => prev.map(b => 
      b.id === id ? { ...b, isPopped: true } : b
    ));
    
    // Remove bubble from DOM after animation completes to keep DOM light
    setTimeout(() => {
       setBubbles(prev => prev.filter(b => b.id !== id));
    }, 600);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background"
    >
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto"> 
          {/* Bubbles need pointer-events-auto to be clickable, 
              but parent is none to avoid blocking scroll if bubbles cover everything (though they are small) 
          */}
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="bubble-wrapper"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            >
              <div
                className={`bubble ${bubble.isPopped ? 'bubble-pop' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePop(bubble.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Static Background Gradients (subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-500/5 blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pointer-events-none">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium animate-fade-in transition-all duration-1000 bg-primary/10 border-primary/20 text-primary backdrop-blur-sm pointer-events-auto">
            <Sparkles className="w-4 h-4" />
            <span>Disponível para oportunidades</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in transition-colors duration-1000 text-foreground pointer-events-auto" style={{ animationDelay: "0.1s" }}>
            Olá, eu sou{" "}
            <span className="transition-all duration-1000 text-gradient">
              Laura Teresa
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in transition-colors duration-1000 text-muted-foreground pointer-events-auto" style={{ animationDelay: "0.2s" }}>
            Desenvolvedora Júnior
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in pointer-events-auto" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Entre em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="transition-all duration-300 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              Saiba mais sobre mim
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
