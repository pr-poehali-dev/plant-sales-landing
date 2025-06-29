import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Живые растения
              <span className="text-green-600 block">с доставкой</span>
              <span className="text-gray-700">на дом</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональная упаковка и быстрая доставка живых растений.
              Гарантируем сохранность каждого листочка!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                <Icon name="ShoppingCart" size={20} />
                Выбрать растения
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                <Icon name="Truck" size={20} />
                Как мы доставляем
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-green-600" size={24} />
                <span className="text-gray-700 font-medium">100% гарантия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-green-600" size={24} />
                <span className="text-gray-700 font-medium">
                  Доставка 1-2 дня
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=800&fit=crop&auto=format"
                alt="Красивые комнатные растения"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 rounded-2xl p-4 shadow-lg">
              <Icon name="Leaf" className="text-white" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
