
import { Shield, Zap, Globe, Headphones, Download, Star } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Globe,
      title: "+85.000 Conteúdos",
      description: "Filmes, séries, canais e documentários atualizados diariamente"
    },
    {
      icon: Zap,
      title: "Qualidade 4K",
      description: "Assista em HD, Full HD e 4K sem travamentos"
    },
    {
      icon: Download,
      title: "Instalação Simples",
      description: "Compatível com Smart TV, celular, tablet e notebook"
    },
    {
      icon: Headphones,
      title: "Suporte 24h",
      description: "Atendimento via WhatsApp todos os dias da semana"
    },
    {
      icon: Shield,
      title: "Liberação Imediata",
      description: "Acesso liberado automaticamente após o pagamento"
    },
    {
      icon: Star,
      title: "Sem Fidelidade",
      description: "Cancele quando quiser, sem multas ou burocracias"
    }
  ];

  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o StreamMax?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A melhor experiência de streaming com tecnologia de ponta e suporte excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
