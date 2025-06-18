
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Plans = () => {
  const plans = [
    {
      name: "Básico",
      price: "19,90",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Acesso a todos os canais",
        "Qualidade HD",
        "2 dispositivos simultâneos",
        "Suporte via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "29,90",
      period: "/mês",
      description: "O mais escolhido",
      features: [
        "Acesso completo",
        "Qualidade 4K",
        "4 dispositivos simultâneos",
        "Suporte prioritário 24h",
        "Filmes lançamentos",
        "Canais internacionais"
      ],
      popular: true
    },
    {
      name: "Família",
      price: "39,90",
      period: "/mês",
      description: "Para toda família",
      features: [
        "Acesso ilimitado",
        "Qualidade 4K",
        "6 dispositivos simultâneos",
        "Suporte VIP 24h",
        "Conteúdo adulto",
        "Controle parental",
        "Backup de canais"
      ],
      popular: false
    }
  ];

  const handlePlanSelect = (planName: string) => {
    // Here you would typically integrate with a payment processor
    const whatsapp = "5511999999999"; // Replace with actual WhatsApp number
    const message = `Olá! Gostaria de contratar o plano ${planName} do StreamMax.`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-xl text-gray-600">
            Todos os planos incluem acesso imediato e garantia de 7 days
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-600 shadow-2xl' : 'shadow-lg'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full py-6 text-lg ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Escolher {plan.name}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Sem fidelidade • Cancele quando quiser
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Dúvidas sobre qual plano escolher?
          </p>
          <Button variant="outline" size="lg">
            Fale com um Consultor
          </Button>
        </div>
      </div>
    </section>
  );
};
