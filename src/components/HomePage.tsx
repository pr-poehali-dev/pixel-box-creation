import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onMosaicTypeSelect: (type: string) => void;
}

const HomePage = ({ onNavigate, onMosaicTypeSelect }: HomePageProps) => {
  const handleCategoryClick = (type: string) => {
    onMosaicTypeSelect(type);
    onNavigate("editor");
  };

  const categories = [
    { id: "lego", label: "ЛЕГО наборы", position: "top-left", gradient: "from-purple-600 to-blue-600" },
    { id: "coloring", label: "Раскраски", position: "bottom-left", gradient: "from-pink-600 to-red-600" },
    { id: "round", label: "Круглые стразы", position: "top-right", gradient: "from-yellow-500 to-orange-500" },
    { id: "square", label: "Квадратные стразы", position: "bottom-right", gradient: "from-cyan-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 grid grid-cols-2 gap-4 md:gap-8">
            {categories.map((cat) => {
              const positionClasses = {
                "top-left": "row-start-1 col-start-1",
                "bottom-left": "row-start-2 col-start-1",
                "top-right": "row-start-1 col-start-2",
                "bottom-right": "row-start-2 col-start-2",
              };

              return (
                <Card
                  key={cat.id}
                  className={`${positionClasses[cat.position as keyof typeof positionClasses]} 
                    bg-gradient-to-br ${cat.gradient} cursor-pointer 
                    hover:scale-105 transition-transform duration-300 
                    pixel-border flex items-center justify-center p-4 md:p-8`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <h3 className="text-lg md:text-2xl font-bold text-white text-center">
                    {cat.label}
                  </h3>
                </Card>
              );
            })}
          </div>

          <div className="relative z-10 text-center bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg pixel-border">
            <div className="mb-6">
              <img
                src="https://cdn.poehali.dev/files/c287d062-ca49-4bbe-b7ac-f93f16c5e23c.png"
                alt="i PIXEL BOX Logo"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto pixel-glow"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              i PIXEL BOX
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Профессиональный редактор для создания мозаики
            </p>
            
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => onNavigate("editor")}
            >
              Создать мозаику
            </Button>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground space-x-4">
          <button
            onClick={() => onNavigate("privacy")}
            className="hover:text-primary transition-colors underline"
          >
            Политика конфиденциальности
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate("terms")}
            className="hover:text-primary transition-colors underline"
          >
            Пользовательское соглашение
          </button>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
