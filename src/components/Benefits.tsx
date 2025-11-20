import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Hemat Waktu 2-3 Jam/Hari",
      description: "80% chat dan order ditangani otomatis. Kamu lebih santai, bisnis tetap jalan."
    },
    {
      icon: TrendingUp,
      title: "Omzet Naik 2-3x Lipat",
      description: "Balas cepat bikin closing lebih gampang. Banyak pengguna terbukti omzet meningkat drastis."
    },
    {
      icon: Users,
      title: "Mudah Dipakai Siapa Saja",
      description: "Setup semudah scan QR code. Interface seperti chat WA, bahkan pemula langsung paham."
    },
    {
      icon: Shield,
      title: "Aman & Kolaborasi Tim",
      description: "Data terlindungi, CS bisa pantau dan edit jawaban asisten secara real-time."
    }
  ];

  return (
    <section id="manfaat" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Manfaat Pakai ChatCoaster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap yang bikin bisnis UMKM-mu naik kelas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
