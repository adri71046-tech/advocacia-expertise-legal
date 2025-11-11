import teamPhoto from "@/assets/team.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const lawyers = [
  {
    name: "Vitor Henrique Braz da Silva",
    oab: "OAB/PR 117.686",
    qualifications: [
      "Mestrando em Direito Processual e Cidadania",
      "Especialista em Direito Civil e Direito de Família",
    ],
  },
  {
    name: "Gustavo Tolotto de Souza",
    oab: "OAB/PR 129.400",
    qualifications: [
      "Técnico em Contabilidade",
      "Especialista em Direito Previdenciário e Trabalhista",
    ],
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <img
            src={teamPhoto}
            alt="Advogados Vitor Braz e Gustavo Tolotto"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{lawyer.name}</CardTitle>
                <p className="text-burgundy font-semibold">{lawyer.oab}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lawyer.qualifications.map((qual, qIndex) => (
                    <li key={qIndex} className="text-muted-foreground flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      {qual}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
