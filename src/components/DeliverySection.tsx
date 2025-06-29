import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  const deliveryFeatures = [
    {
      icon: "Package",
      title: "Защитная упаковка",
      description:
        "Специальные контейнеры и амортизирующие материалы защищают растения от повреждений",
    },
    {
      icon: "Thermometer",
      title: "Контроль температуры",
      description:
        "Термо-пакеты поддерживают оптимальную температуру во время транспортировки",
    },
    {
      icon: "Droplets",
      title: "Увлажнение корней",
      description:
        "Корневая система остается влажной благодаря специальным гидрогелям",
    },
    {
      icon: "Truck",
      title: "Бережная доставка",
      description: "Курьеры обучены правильному обращению с живыми растениями",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как мы доставляем живые растения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждое растение упаковывается индивидуально с максимальной заботой о
            его сохранности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon}
                    className="text-green-600"
                    size={28}
                  />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Гарантия качества
              </h3>
              <p className="text-gray-700 mb-6">
                Если растение пришло поврежденным или погибло в течение 7 дней
                после доставки, мы заменим его бесплатно или вернем деньги.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600"
                    size={20}
                  />
                  <span className="text-sm text-gray-700">
                    Замена в течение 7 дней
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="RefreshCw" className="text-green-600" size={20} />
                  <span className="text-sm text-gray-700">Возврат денег</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&auto=format"
                alt="Упаковка растений"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
