import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const [password, setPassword] = useState("");

  const handleAdminClick = () => {
    setShowAdminDialog(true);
  };

  const handlePasswordSubmit = () => {
    if (password === "12345") {
      setShowAdminDialog(false);
      setPassword("");
      onNavigate("admin");
    } else {
      alert("Неверный пароль");
    }
  };

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "editor", label: "Редактор" },
    { id: "gallery", label: "Галерея" },
    { id: "instructions", label: "Инструкция" },
    { id: "buy", label: "Купить набор" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id)}
                className="text-sm md:text-base"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={handleAdminClick}
              className="text-sm md:text-base"
            >
              Админ панель
            </Button>
          </div>
        </div>
      </nav>

      <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Вход в админ панель</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
            />
            <Button onClick={handlePasswordSubmit} className="w-full">
              Войти
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
