import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-green-100">
            Мы поможем выбрать идеальное растение и ответим на все вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-green-800 border-green-700 text-white">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" className="text-white" size={28} />
              </div>
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-100 mb-4">Звоните с 9:00 до 21:00</p>
              <p className="text-xl font-bold">+7 (495) 123-45-67</p>
            </CardContent>
          </Card>

          <Card className="bg-green-800 border-green-700 text-white">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <Icon name="MessageCircle" className="text-white" size={28} />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-100 mb-4">
                Быстрые ответы в мессенджере
              </p>
              <Button
                variant="outline"
                className="border-green-300 text-green-300 hover:bg-green-700"
              >
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-800 border-green-700 text-white">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-white" size={28} />
              </div>
              <CardTitle>Наш адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-100 mb-4">Приходите к нам в питомник</p>
              <p className="font-medium">Москва, ул. Садовая, 15</p>
              <p className="text-sm text-green-200">Пн-Вс: 10:00-20:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
            <p className="text-green-100 mb-6">
              Наши эксперты помогут выбрать растения, подходящие именно для
              ваших условий
            </p>
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-green-50"
            >
              <Icon name="Users" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
