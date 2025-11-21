import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Apa itu ChatCoaster?",
    answer: "Platform pengelolaan pesanan berbasis AI dengan fitur utama: Order Management, AI Chat Assistant, dan Digital Store. Membantu bisnis menangani pesanan lebih cepat, mengelola chat pelanggan, dan memiliki toko online profesional.",
  },
  {
    question: "Apakah cocok untuk semua jenis bisnis?",
    answer: "Ya, sangat cocok untuk berbagai bisnis seperti Online Shop, F&B (makanan & minuman), Travel Agent, dan lainnya karena fitur otomasi pesanan dan AI Chat-nya.",
  },
  {
    question: "Bagaimana AI menangani pesanan pelanggan?",
    answer: "AI Chat otomatis menerima & memproses pesanan dari WhatsApp, Instagram DM, Facebook Messenger, Telegram, dan WebChat. AI bisa mengenali produk, alamat, hitung ongkir, dan lacak status pesanan secara real-time.",
  },
  {
    question: "Bisa kirim pesan promosi?",
    answer: "Bisa! Lewat fitur Broadcast Campaign, Anda dapat mengirim promosi, update produk, atau penawaran spesial secara otomatis ke banyak pelanggan sekaligus melalui berbagai channel.",
  },
  {
    question: "Bagaimana cara kerja Live Chat?",
    answer: "Menggunakan fitur AI & Agent Collaboration: AI menangani pertanyaan umum/kompleks secara otomatis, sementara tim CS manusia bisa memantau secara real-time dan mengambil alih jika diperlukan.",
  },
  {
    question: "Apakah ada fitur analisis data?",
    answer: "Ada! Fitur AI Insight Data memberikan analisis tren produk populer, riwayat transaksi pelanggan, dan laporan performa penjualan untuk mendukung keputusan bisnis.",
  },
  {
    question: "Bagaimana cara mulai menggunakan ChatCoaster?",
    answer: "Langsung klik Daftar Sekarang untuk mencoba. Jika butuh bantuan atau konsultasi, tinggal Hubungi Kami.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Pertanyaan yang{" "}
            <span style={{ background: 'linear-gradient(to right, #20CB98, #20CB98)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sering Ditanyakan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan umum tentang ChatCoaster dan bagaimana platform ini dapat membantu bisnis Anda.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-medium hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
