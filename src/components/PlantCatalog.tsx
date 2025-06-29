import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PlantCatalog = () => {
  const plants = [
    {
      id: 1,
      name: "Монстера Деликатесная",
      price: "2 990 ₽",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop&auto=format",
      care: "Легкий уход",
      light: "Полутень",
    },
    {
      id: 2,
      name: "Фикус Лирата",
      price: "3 490 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format",
      care: "Средний уход",
      light: "Яркий свет",
    },
    {
      id: 3,
      name: "Сансевиерия",
      price: "1 790 ₽",
      image:
        "https://images.unsplash.com/photo-1593691509543-394d5ad6b8a5?w=400&h=400&fit=crop&auto=format",
      care: "Очень легкий",
      light: "Любое освещение",
    },
    {
      id: 4,
      name: "Пальма Арека",
      price: "4 290 ₽",
      image:
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=400&fit=crop&auto=format",
      care: "Средний уход",
      light: "Яркий свет",
    },
    {
      id: 5,
      name: "Потос Золотистый",
      price: "1 490 ₽",
      image:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&h=400&fit=crop&auto=format",
      care: "Легкий уход",
      light: "Полутень",
    },
    {
      id: 6,
      name: "Драцена Маргината",
      price: "2 790 ₽",
      image:
        "https://images.unsplash.com/photo-1586093218069-d3b0d3866bff?w=400&h=400&fit=crop&auto=format",
      care: "Легкий уход",
      light: "Полутень",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог растений
          </h2>
          <p className="text-xl text-gray-600">
            Выберите идеальное растение для вашего дома
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Icon
                    name="Heart"
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                    size={20}
                  />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{plant.name}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon name="Leaf" size={16} />
                    <span>{plant.care}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Sun" size={16} />
                    <span>{plant.light}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    {plant.price}
                  </span>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Icon name="ShoppingCart" size={16} />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Показать больше растений
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlantCatalog;
