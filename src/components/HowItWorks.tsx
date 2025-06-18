
import { CreditCard, Download, Play } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "1. Escolha seu Plano",
      description: "Selecione o plano ideal para você e faça o pagamento seguro"
    },
    {
      icon: Download,
      title: "2. Instale o App",
      description: "Baixe o aplicativo no seu dispositivo e use os dados de acesso"
    },
    {
      icon: Play,
      title: "3. Assista Agora",
      description: "Comece a assistir imediatamente seus conteúdos favoritos"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Em apenas 3 passos simples você já está assistindo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
