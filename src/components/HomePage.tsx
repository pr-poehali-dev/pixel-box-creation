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
      <div className="container mx-auto max-w-7xl">
        <div className="relative min-h-[700px] flex items-center justify-center">
          <Card
            className="absolute top-0 left-0 w-[45%] h-[45%] bg-gradient-to-br from-purple-600 to-blue-600 cursor-pointer hover:scale-105 transition-transform duration-300 pixel-border flex items-center justify-center p-6 md:p-8"
            onClick={() => handleCategoryClick("lego")}
          >
            <h3 className="text-xl md:text-3xl font-bold text-white text-center">
              ЛЕГО наборы
            </h3>
          </Card>

          <Card
            className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-gradient-to-br from-pink-600 to-red-600 cursor-pointer hover:scale-105 transition-transform duration-300 pixel-border flex items-center justify-center p-6 md:p-8"
            onClick={() => handleCategoryClick("coloring")}
          >
            <h3 className="text-xl md:text-3xl font-bold text-white text-center">
              Раскраски
            </h3>
          </Card>

          <Card
            className="absolute top-0 right-0 w-[45%] h-[45%] bg-gradient-to-br from-yellow-500 to-orange-500 cursor-pointer hover:scale-105 transition-transform duration-300 pixel-border flex items-center justify-center p-6 md:p-8"
            onClick={() => handleCategoryClick("round")}
          >
            <h3 className="text-xl md:text-3xl font-bold text-white text-center">
              Круглые стразы
            </h3>
          </Card>

          <Card
            className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-gradient-to-br from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 pixel-border flex items-center justify-center p-6 md:p-8"
            onClick={() => handleCategoryClick("square")}
          >
            <h3 className="text-xl md:text-3xl font-bold text-white text-center">
              Квадратные стразы
            </h3>
          </Card>

          <div className="relative z-10 text-center">
            <div className="mb-8">
              <img
                src="https://cdn.poehali.dev/files/c287d062-ca49-4bbe-b7ac-f93f16c5e23c.png"
                alt="i PIXEL BOX Logo"
                className="w-48 h-48 md:w-56 md:h-56 mx-auto pixel-glow"
                style={{ filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))" }}
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text drop-shadow-lg">
              i PIXEL BOX
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground mb-10 drop-shadow-md">
              Профессиональный редактор для создания мозаики
            </p>
            
            <Button
              size="lg"
              className="text-xl px-10 py-7 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/50 transition-all"
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