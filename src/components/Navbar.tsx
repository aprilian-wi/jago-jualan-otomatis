import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="ChatCoaster Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#layanan" className="text-foreground hover:text-accent transition-colors">
              Layanan
            </a>
            <a href="#manfaat" className="text-foreground hover:text-accent transition-colors">
              Manfaat
            </a>
            <a href="#testimoni" className="text-foreground hover:text-accent transition-colors">
              Testimoni
            </a>
            <a href="#harga" className="text-foreground hover:text-accent transition-colors">
              Harga
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Masuk</Button>
            <Button variant="accent">Coba Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-in">
            <a href="#layanan" className="block text-foreground hover:text-accent transition-colors">
              Layanan
            </a>
            <a href="#manfaat" className="block text-foreground hover:text-accent transition-colors">
              Manfaat
            </a>
            <a href="#testimoni" className="block text-foreground hover:text-accent transition-colors">
              Testimoni
            </a>
            <a href="#harga" className="block text-foreground hover:text-accent transition-colors">
              Harga
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost">Masuk</Button>
              <Button variant="accent">Coba Gratis</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
