import { useEffect, useRef } from "react";
import { Code2, Heart, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Foco em boas práticas e legibilidade",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado Contínuo",
    description: "Sempre buscando novos conhecimentos",
  },
  {
    icon: Target,
    title: "Organização",
    description: "Estrutura e planejamento em cada projeto",
  },
  {
    icon: Heart,
    title: "Dedicação",
    description: "Comprometida com a qualidade",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 section-animate">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Olá! Sou a <strong className="text-primary">Laura Teresa</strong>, 
                uma desenvolvedora júnior apaixonada por tecnologia e design. 
                Estou no início da minha jornada na programação, mas isso não me 
                impede de entregar trabalhos de qualidade.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Acredito que ser júnior é uma oportunidade única de aprender 
                com humildade, fazer perguntas e absorver conhecimento de 
                profissionais mais experientes. Estou sempre em busca de 
                melhorar minhas habilidades e entregar o melhor código possível.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Meu foco atual está em desenvolvimento front-end, criando 
                interfaces bonitas, responsivas e acessíveis. Cada projeto é 
                uma oportunidade de aprender algo novo!
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="section-animate p-6 rounded-2xl bg-card border border-border card-hover"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
