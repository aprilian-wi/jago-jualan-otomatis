import { Bot, Package, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Asisten Chat Pintar",
      subtitle: "AI Chat Assistant 24/7",
      description: "Asisten virtual yang jawab chat pelanggan otomatis sepanjang hari. Dipasang di WhatsApp, Instagram DM, Facebook Messenger, Telegram, atau web chat.",
      features: [
        "Jawab chat otomatis 24/7",
        "Proses pesanan langsung",
        "Hitung ongkir otomatis",
        "Broadcast promosi massal",
        "Integra multi-channel"
      ],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Package,
      title: "Pengelola Pesanan",
      subtitle: "Order Management System",
      description: "Dashboard sederhana untuk kelola semua pesanan dari berbagai channel. Lihat omset, buat laporan, dan pantau bisnis dari satu tempat.",
      features: [
        "Dashboard terpusat",
        "Laporan penjualan otomatis",
        "Tracking pesanan real-time",
        "Multi-supplier support",
        "Analitik bisnis lengkap"
      ],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: ShoppingBag,
      title: "Toko Digital",
      subtitle: "Digital Store Builder",
      description: "Buat toko online profesional tanpa coding. Lengkap dengan katalog produk, keranjang belanja, dan tampilan mobile-friendly.",
      features: [
        "Setup cepat tanpa coding",
        "Katalog produk unlimited",
        "Mobile-friendly design",
        "Shareable link ke sosmed",
        "Integrasi pembayaran"
      ],
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section id="layanan" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tiga Layanan Utama ChatCoaster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk kelola bisnis online dalam satu platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 border-2 hover:border-accent transition-all duration-300 bg-gradient-to-br ${service.gradient} group animate-slide-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
