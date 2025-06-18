
import { Shield, Clock, CreditCard } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sua Segurança é Nossa Prioridade
          </h2>
          <p className="text-xl text-gray-600">
            Compre com total tranquilidade e confiança
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Garantia de 7 Dias
            </h3>
            <p className="text-gray-600">
              Não gostou? Devolvemos seu dinheiro sem perguntas ou complicações
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Acesso Imediato
            </h3>
            <p className="text-gray-600">
              Liberação automática após pagamento confirmado, sem espera
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Pagamento Seguro
            </h3>
            <p className="text-gray-600">
              Processamento criptografado e protegido pelas melhores tecnologias
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 mb-8">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwNjZjYyIvPjx0ZXh0IHg9IjQwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGF5UGFsPC90ZXh0Pjwvc3ZnPg==" alt="PayPal" className="h-6" />
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwOGI4ZCIvPjx0ZXh0IHg9IjQwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UElYPC90ZXh0Pjwvc3ZnPg==" alt="PIX" className="h-6" />
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2ViMDAxYiIvPjx0ZXh0IHg9IjQwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmlzYTwvdGV4dD48L3N2Zz4=" alt="Visa" className="h-6" />
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2ZmNTkwMCIvPjx0ZXh0IHg9IjQwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFzdGVyQ2FyZDwvdGV4dD48L3N2Zz4=" alt="MasterCard" className="h-6" />
          </div>
          <p className="text-sm text-gray-500">
            Pagamentos processados com segurança SSL 256-bits
          </p>
        </div>
      </div>
    </section>
  );
};
