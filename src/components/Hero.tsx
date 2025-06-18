
import { Button } from "@/components/ui/button";
import { Play, Shield, Clock } from "lucide-react";

export const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Assista Tudo Sem Travar: 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}+85.000 Conteúdos
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Filmes, séries e canais ao vivo no seu dispositivo favorito. 
                Instale, assista e aproveite em HD, Full HD e 4K!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield size={16} />
                <span>Liberação Imediata</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Clock size={16} />
                <span>Suporte 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Play size={16} />
                <span>Qualidade 4K</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPlans}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 px-8"
              >
                Assine Agora - A partir de R$ 19,90
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-purple-600 hover:bg-white hover:text-gray-900 py-6 px-8"
              >
                Ver Demonstração
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              ✓ Sem contrato de fidelidade • ✓ Cancele quando quiser • ✓ Garantia de 7 dias
            </p>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="Smart TV exibindo streaming"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Assista em qualquer dispositivo</p>
                <p className="text-sm opacity-90">TV, celular, tablet, notebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
