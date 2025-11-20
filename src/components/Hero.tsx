import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <div className="inline-block">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI Chat untuk UMKM Indonesia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Bisnis <span className="text-accent">Meluncur Tinggi</span> Tanpa Kewalahan
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              ChatCoaster bantu kelola chat pelanggan, pesanan, dan toko online secara otomatis. 
              Seperti naik roller coaster—lancar, cepat, dan omzet meluncur tinggi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" className="group">
                <MessageSquare className="group-hover:scale-110 transition-transform" />
                Coba Gratis Sekarang
              </Button>
              <Button size="lg" variant="outline">
                Hubungi Kami
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-accent h-5 w-5" />
                <span className="text-sm font-semibold text-primary">2-3x Omzet Naik</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="text-accent h-5 w-5" />
                <span className="text-sm font-semibold text-primary">24/7 Otomatis</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
              alt="ChatCoaster Dashboard"
              className="relative rounded-2xl shadow-medium w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-medium p-4 animate-slide-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Pendapatan Hari Ini</p>
                  <p className="text-lg font-bold text-primary">Rp 2.450.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
