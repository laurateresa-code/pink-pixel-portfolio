import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Laura Teresa | Desenvolvedora Júnior</title>
        <meta name="description" content="Portfólio de Laura Teresa - Desenvolvedora Júnior apaixonada por criar experiências digitais bonitas e funcionais. Confira meus projetos e habilidades." />
        <meta property="og:title" content="Laura Teresa | Desenvolvedora Júnior" />
        <meta property="og:description" content="Portfólio de Laura Teresa - Desenvolvedora Júnior. Veja meus projetos e entre em contato." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
