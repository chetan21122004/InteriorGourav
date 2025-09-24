import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Modern kitchen interior"
              className="w-full rounded-lg shadow-medium"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Download home interior guide
            </h2>
            <p className="text-lg text-brand-gray mb-8">
              Don't forget to consider these fundamental design guidelines to 
              know before you start interior designing!
            </p>
            <Button 
              variant="gold" 
              size="lg" 
              className="btn-professional bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-white shadow-elegant focus-ring flex items-center space-x-2"
              onClick={() => window.open("https://wa.me/918210827736?text=Hi%20Kumar%20Gaurav,%20I'd%20like%20to%20download%20the%20home%20interior%20design%20guide", "_blank")}
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD NOW</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};