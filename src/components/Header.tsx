
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StreamMax
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex">
            <Button onClick={() => scrollToSection('planos')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Assine Agora
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('planos')} className="block px-3 py-2 text-gray-700">
                Planos
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="block px-3 py-2 text-gray-700">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="block px-3 py-2 text-gray-700">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('faq')} className="block px-3 py-2 text-gray-700">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('planos')} className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600">
                Assine Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
