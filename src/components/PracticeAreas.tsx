import { Scale, Users, Briefcase, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  {
    icon: Scale,
    title: "Direito Previdenciário",
    description: "Aposentadorias, benefícios, revisões e planejamento previdenciário com expertise e dedicação.",
  },
  {
    icon: Users,
    title: "Direito Civil",
    description: "Contratos, indenizações, responsabilidade civil e demais questões do direito civil.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Defesa de direitos trabalhistas, rescisões, verbas e ações judiciais trabalhistas.",
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Divórcios, guarda, pensão alimentícia, inventários e questões sucessórias.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  <area.icon size={24} />
                </div>
                <CardTitle className="text-xl text-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
