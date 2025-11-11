import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">
            Braz & Tolotto
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Equipe
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors"
            >
              Equipe
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="w-full bg-primary text-primary-foreground hover:bg-accent"
            >
              Contato
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
