import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <img
            src={logo}
            alt="Braz & Tolotto Advogados Associados"
            className="w-64 h-64 mx-auto object-contain"
          />
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Direito com seriedade, empatia e compromisso. Estamos prontos para atender você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Entre em Contato
            </Button>
            <Button
              onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground transition-none"
            >
              Conheça Nossas Áreas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
