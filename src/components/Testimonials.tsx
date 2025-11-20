import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Irmayanti",
      business: "Nura Aksesoris",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Share produk ke sosmed gampang banget! Asisten bantu jawab chat biar nggak kewalahan—jualan makin lancar dan pelanggan puas!",
      rating: 5
    },
    {
      name: "Abhimantra",
      business: "Coffee On Monday",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Orderan cepat closing, omzet naik besar tanpa balas manual terus-menerus. ChatCoaster benar-benar game changer!",
      rating: 5
    },
    {
      name: "Dewa Nata",
      business: "Jasa Karikatur Jogja",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      text: "Dashboard bantu cek order dan omset instan, jarang perlu balas sendiri lagi. Bisnis jadi lebih terorganisir!",
      rating: 5
    },
    {
      name: "Gilbert Suryanto",
      business: "Dropshipper",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      text: "Kelola pesanan dari banyak channel jadi praktis, untungnya lebih banyak dari dulu. Sangat recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Kata Mereka yang Sudah Pakai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni nyata dari pengguna ChatCoaster yang bisnisnya naik kelas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-sm text-card-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
