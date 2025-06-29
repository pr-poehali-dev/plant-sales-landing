import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "10,000+",
      label: "Довольных клиентов",
    },
    {
      icon: "Package",
      number: "50,000+",
      label: "Доставленных растений",
    },
    {
      icon: "Star",
      number: "4.9/5",
      label: "Средняя оценка",
    },
    {
      icon: "Award",
      number: "3",
      label: "Года на рынке",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name={stat.icon} className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
