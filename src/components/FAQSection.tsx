import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как долго длится доставка?",
      answer:
        "Доставка по Москве занимает 1-2 дня, по России — 3-7 дней в зависимости от региона. Мы отправляем растения только в специальных контейнерах с контролем температуры.",
    },
    {
      question: "Что делать, если растение пришло поврежденным?",
      answer:
        "У нас действует 100% гарантия качества. Если растение пришло поврежденным или погибло в течение 7 дней после доставки, мы заменим его бесплатно или вернем деньги.",
    },
    {
      question: "Нужно ли пересаживать растение после получения?",
      answer:
        "Не обязательно. Все растения поставляются в качественном грунте и подходящих горшках. Пересадка понадобится только через 6-12 месяцев по мере роста растения.",
    },
    {
      question: "Предоставляете ли вы инструкции по уходу?",
      answer:
        "Да! К каждому растению прилагается подробная инструкция по уходу с рекомендациями по поливу, освещению и подкормке. Также вы можете получить консультацию наших экспертов.",
    },
    {
      question: "Можно ли заказать растение в подарок?",
      answer:
        "Конечно! Мы предлагаем красивую подарочную упаковку и можем добавить поздравительную открытку. Укажите это при оформлении заказа.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы о наших растениях
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
