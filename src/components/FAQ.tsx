import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum tentang ChatCoaster dan bagaimana platform ini dapat membantu bisnis Anda.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
