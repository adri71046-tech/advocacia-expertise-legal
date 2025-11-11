const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Braz & Tolotto</h3>
          <p className="text-primary-foreground/80">Advogados Associados</p>
          <div className="text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Braz & Tolotto. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
