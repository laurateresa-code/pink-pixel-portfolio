import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Laura Teresa. Todos os direitos reservados.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Feito com{" "}
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />{" "}
            e muito café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
