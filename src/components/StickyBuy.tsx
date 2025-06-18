
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyBuy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const shouldShow = scrolled > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-4 shadow-2xl">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-white/70 hover:text-white"
        >
          <X size={16} />
        </button>
        
        <div className="space-y-3">
          <div>
            <p className="font-semibold">🔥 Oferta Especial!</p>
            <p className="text-sm opacity-90">A partir de R$ 19,90/mês</p>
          </div>
          
          <Button 
            onClick={scrollToPlans}
            className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
          >
            Assinar Agora
          </Button>
        </div>
      </div>
    </div>
  );
};
