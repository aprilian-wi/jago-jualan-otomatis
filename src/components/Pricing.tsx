import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Rocket } from "lucide-react";

const Pricing = () => {
  return (
    <section id="harga" className="py-16 md:py-24 bg-gradient-to-br from-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Harga Terjangkau untuk UMKM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mulai dari paket gratis untuk coba fitur dasar
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <Card className="p-8 border-2 hover:shadow-medium transition-all duration-300 animate-slide-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Paket Gratis</h3>
                <p className="text-muted-foreground">Coba fitur dasar dulu</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">1 Channel chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Fitur AI Chat basic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Dashboard sederhana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Toko digital basic</span>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Mulai Gratis
              </Button>
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 border-2 border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:shadow-glow transition-all duration-300 animate-slide-in relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Paling Populer
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Paket Lengkap</h3>
                <p className="text-muted-foreground">Untuk bisnis yang serius</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold">Multi-channel unlimited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold">AI Chat premium + broadcast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold">Dashboard lengkap + analitik</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold">Toko digital profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold">Support prioritas</span>
                </div>
              </div>

              <Button variant="accent" size="lg" className="w-full group">
                <Rocket className="group-hover:scale-110 transition-transform" />
                Hubungi untuk Harga
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Butuh konsultasi atau info lebih lanjut?
          </p>
          <Button variant="secondary" size="lg">
            WhatsApp: 0822-9999-3245
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
