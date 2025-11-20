import { Clock, MessageCircle, TrendingDown } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: MessageCircle,
      title: "Chat Membludak",
      description: "Banyak pesan numpuk, susah balas semua, peluang hilang"
    },
    {
      icon: Clock,
      title: "Waktu Habis",
      description: "Urus chat dan pesanan manual bikin capek dan nggak efisien"
    },
    {
      icon: TrendingDown,
      title: "Omzet Stagnan",
      description: "Kewalahan kelola bisnis, susah scale up dan nambah pelanggan"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pernah Merasakan Hal Ini Saat Jualan Online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jangan khawatir, ChatCoaster hadir sebagai solusi!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border group animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
