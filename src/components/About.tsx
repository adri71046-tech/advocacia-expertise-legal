const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nosso Compromisso
          </h2>
          <div className="w-20 h-1 bg-burgundy mx-auto"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso compromisso é oferecer soluções jurídicas responsáveis, sempre com empenho e profissionalismo.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            O escritório Braz & Tolotto Advogados Associados atua com seriedade, ética e dedicação na defesa dos interesses de seus clientes, oferecendo atendimento personalizado e soluções jurídicas eficazes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
