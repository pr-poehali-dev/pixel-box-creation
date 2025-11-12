import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BuyPage = () => {
  const marketplaces = [
    {
      name: "Wildberries",
      url: "https://www.wildberries.ru/",
      logo: "🛍️",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "OZON",
      url: "https://www.ozon.ru/",
      logo: "🛒",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "i PIXEL BOX",
      url: "#",
      logo: "🎨",
      color: "from-pink-600 to-orange-600",
      isOfficial: true,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Где купить наборы
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Выберите удобную для вас площадку для покупки наборов i PIXEL BOX
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketplaces.map((marketplace) => (
            <Card
              key={marketplace.name}
              className={`p-8 text-center pixel-border hover:scale-105 transition-transform bg-gradient-to-br ${marketplace.color}`}
            >
              <div className="text-6xl mb-4">{marketplace.logo}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {marketplace.name}
              </h3>
              {marketplace.isOfficial && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full text-white">
                    <Icon name="Star" size={16} />
                    Официальный сайт
                  </span>
                </div>
              )}
              <Button
                asChild
                variant="secondary"
                className="w-full mt-4"
              >
                <a href={marketplace.url} target="_blank" rel="noopener noreferrer">
                  Перейти на сайт
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-card pixel-border">
          <h2 className="text-2xl font-bold mb-4">Что входит в набор?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Icon name="Package" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Основа для мозаики</h4>
                <p className="text-sm text-muted-foreground">
                  Холст или подрамник выбранного размера
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Palette" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Набор элементов</h4>
                <p className="text-sm text-muted-foreground">
                  ЛЕГО детали, стразы или краски по типу мозаики
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Image" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Схема сборки</h4>
                <p className="text-sm text-muted-foreground">
                  Подробная инструкция с макетом
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Wrench" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Инструменты</h4>
                <p className="text-sm text-muted-foreground">
                  Всё необходимое для создания мозаики
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BuyPage;
