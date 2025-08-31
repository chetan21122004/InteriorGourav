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
            <Button variant="gold" size="lg" className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>DOWNLOAD NOW</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};