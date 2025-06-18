
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Incrível! Cancelei minha TV a cabo e não me arrependo. A qualidade é excelente e o preço muito justo."
    },
    {
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "O suporte é excepcional! Qualquer dúvida eles respondem na hora pelo WhatsApp. Super recomendo!"
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Uso há 6 meses e nunca tive problemas. Funciona perfeitamente na Smart TV e no celular."
    },
    {
      name: "Ana Costa",
      location: "Brasília, DF",
      rating: 5,
      text: "A variedade de conteúdo é impressionante! Filmes, séries, canais... tudo que eu queria em um só lugar."
    },
    {
      name: "Roberto Lima",
      location: "Salvador, BA",
      rating: 5,
      text: "Instalação super fácil e rápida. Em 5 minutos já estava assistindo. Valeu cada centavo!"
    },
    {
      name: "Patricia Souza",
      location: "Curitiba, PR",
      rating: 5,
      text: "A qualidade 4K é impressionante! Assisto em casa e quando viajo pelo celular. Perfeito!"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 50.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
          </div>
          <p className="text-gray-600">
            Baseado em mais de 10.000 avaliações verificadas
          </p>
        </div>
      </div>
    </section>
  );
};
