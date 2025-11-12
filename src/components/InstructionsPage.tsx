import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InstructionsPage = () => {
  const instructions = [
    {
      icon: "Upload",
      title: "Загрузите изображение",
      description: "Выберите фотографию или картинку, которую хотите превратить в мозаику",
    },
    {
      icon: "Settings",
      title: "Настройте параметры",
      description: "Выберите тип мозаики, ориентацию и размер вашей будущей работы",
    },
    {
      icon: "Move",
      title: "Отредактируйте композицию",
      description: "Используйте масштабирование, поворот и отражение для идеального результата",
    },
    {
      icon: "Download",
      title: "Сохраните результат",
      description: "Скачайте готовый макет и начните создавать вашу мозаику",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Как пользоваться редактором
        </h1>

        <div className="space-y-6">
          {instructions.map((item, index) => (
            <Card key={index} className="p-6 pixel-border hover:scale-102 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 pixel-border">
          <h2 className="text-2xl font-bold mb-4">Полезные советы</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="mt-1 flex-shrink-0 text-primary" />
              <span>Используйте изображения с высоким разрешением для лучшего качества</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="mt-1 flex-shrink-0 text-primary" />
              <span>Контрастные изображения дают более выразительную мозаику</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="mt-1 flex-shrink-0 text-primary" />
              <span>Экспериментируйте с масштабом, чтобы выделить важные детали</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="mt-1 flex-shrink-0 text-primary" />
              <span>Сохраняйте несколько вариантов и выбирайте лучший</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default InstructionsPage;
