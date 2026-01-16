import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 text-primary/20 animate-pulse-soft">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-primary/20 animate-pulse-soft" style={{ animationDelay: "-1.5s" }}>
        <Sparkles className="w-6 h-6" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Disponível para oportunidades</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Olá, eu sou{" "}
            <span className="text-gradient">Laura Teresa</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Desenvolvedora Júnior apaixonada por criar experiências digitais
            bonitas e funcionais
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Entre em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              Saiba mais sobre mim
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-border hover:border-primary/50 transition-colors"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
