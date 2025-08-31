export const BrandsSection = () => {
  const brands = [
    "Jaguar", "Saint-Gobain", "Century Ply", "BOSCH", "SIEMENS", "Hetlich",
    "Greenlam Laminates", "SAMSUNG"
  ];

  return (
    <section className="py-16 bg-livspace-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-livspace-dark mb-2">
            Winning collaborations that produce winning designs.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="h-16 flex items-center justify-center">
                <span className="text-lg font-semibold text-livspace-text-muted">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};