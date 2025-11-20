import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Daftar Gratis",
      description: "Isi info bisnis dasar, cuma butuh 2-3 menit. Langsung bisa mulai!"
    },
    {
      number: "2",
      title: "Pasang Asisten Chat",
      description: "Hubungkan ke WhatsApp, Instagram, atau channel favoritmu. Setup otomatis."
    },
    {
      number: "3",
      title: "Isi Toko Digital",
      description: "Upload produk, foto, harga. Toko online profesional langsung siap."
    },
    {
      number: "4",
      title: "Pantau & Kelola",
      description: "Cek dashboard untuk lihat order, omzet, dan edit jawaban asisten."
    },
    {
      number: "5",
      title: "Nikmati Hasilnya",
      description: "Bisnis jalan otomatis, omzet naik, kamu lebih santai!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Cara Kerja yang Sederhana
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mulai jualan otomatis dalam 5 langkah mudah
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft">
                  {step.number}
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 flex items-center gap-2">
                    {step.title}
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
