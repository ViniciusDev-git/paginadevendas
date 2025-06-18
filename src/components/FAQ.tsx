
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o StreamMax?",
      answer: "O StreamMax é um serviço de streaming que oferece acesso a milhares de filmes, séries e canais ao vivo. Após a assinatura, você recebe os dados de acesso e pode assistir em qualquer dispositivo conectado à internet."
    },
    {
      question: "Posso assistir em quantos dispositivos?",
      answer: "Depende do seu plano: Básico (2 dispositivos), Premium (4 dispositivos) e Família (6 dispositivos). Você pode fazer login em quantos dispositivos quiser, mas a reprodução simultânea é limitada pelo plano."
    },
    {
      question: "Funciona em Smart TV?",
      answer: "Sim! O StreamMax é compatível com Smart TVs Samsung, LG, Sony e outras marcas. Também funciona em TV Box, Chromecast, celulares, tablets e computadores."
    },
    {
      question: "A qualidade é boa? Trava muito?",
      answer: "Oferecemos qualidade HD, Full HD e 4K com servidores estáveis. A qualidade depende da sua conexão de internet - recomendamos pelo menos 10 Mbps para uma experiência ideal."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos PIX, cartão de crédito e débito. O pagamento é processado de forma segura e o acesso é liberado automaticamente após a confirmação."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não há contrato de fidelidade. Você pode cancelar a qualquer momento entrando em contato conosco pelo WhatsApp."
    },
    {
      question: "Tem conteúdo adulto?",
      answer: "O conteúdo adulto está disponível apenas no plano Família e pode ser bloqueado através do controle parental."
    },
    {
      question: "E se eu não gostar do serviço?",
      answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem complicações."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o StreamMax
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-lg border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou sua resposta?
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre o StreamMax."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
