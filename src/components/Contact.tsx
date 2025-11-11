import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco e agende uma consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border bg-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-burgundy text-burgundy-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <CardTitle className="text-xl text-foreground">Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Entre em contato por telefone</p>
              <Button
                variant="link"
                className="text-burgundy hover:text-burgundy/80 mt-2"
                asChild
              >
                <a href="tel:+5500000000000">Ligar Agora</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-burgundy text-burgundy-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <CardTitle className="text-xl text-foreground">E-mail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Envie-nos uma mensagem</p>
              <Button
                variant="link"
                className="text-burgundy hover:text-burgundy/80 mt-2"
                asChild
              >
                <a href="mailto:contato@braztolotto.com.br">Enviar E-mail</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-burgundy text-burgundy-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <CardTitle className="text-xl text-foreground">Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Visite nosso escritório</p>
              <Button
                variant="link"
                className="text-burgundy hover:text-burgundy/80 mt-2"
              >
                Ver Endereço
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
