import { MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <span className="text-xl font-bold">ChatCoaster</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              AI Chat Assistant untuk UMKM Indonesia. Bisnis meluncur tinggi tanpa kewalahan!
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-bold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#layanan" className="hover:text-accent transition-colors">Asisten Chat Pintar</a></li>
              <li><a href="#layanan" className="hover:text-accent transition-colors">Pengelola Pesanan</a></li>
              <li><a href="#layanan" className="hover:text-accent transition-colors">Toko Digital</a></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-bold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#manfaat" className="hover:text-accent transition-colors">Manfaat</a></li>
              <li><a href="#testimoni" className="hover:text-accent transition-colors">Testimoni</a></li>
              <li><a href="#harga" className="hover:text-accent transition-colors">Harga</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/6282299993245" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  0822-9999-3245
                </a>
              </li>
              <li>
                <a href="mailto:info@chatcoaster.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  info@chatcoaster.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 ChatCoaster. All rights reserved. Made with 💚 for UMKM Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
