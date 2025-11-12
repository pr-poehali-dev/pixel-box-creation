import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

const PrivacyPage = ({ onNavigate }: PrivacyPageProps) => {
  return (
    <div className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => onNavigate("home")}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад на главную
        </Button>

        <Card className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Политика конфиденциальности
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">i Pixel Box</p>
              <p>г. Екатеринбург, ИП Пегушин, ОГРН 111222333</p>
              <p>Дата вступления в силу: 25 октября 2023 г.</p>
            </div>

            <p>
              Мы в i Pixel Box (далее — «Мы», «Сервис») ценим ваше доверие и стремимся защищать ваши 
              персональные данные. Эта Политика конфиденциальности объясняет, какую информацию мы собираем, 
              для каких целей используем и как обеспечиваем ее безопасность.
            </p>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Собираемая информация</h2>
              <p>
                Мы можем собирать следующие типы информации:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Персональные данные (имя, email, телефон)</li>
                <li>Техническая информация (IP-адрес, тип браузера)</li>
                <li>Загруженные изображения для обработки</li>
                <li>Информация об использовании сервиса</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Использование информации</h2>
              <p>
                Собранная информация используется для:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Предоставления и улучшения наших услуг</li>
                <li>Обработки ваших изображений в редакторе</li>
                <li>Связи с вами по вопросам сервиса</li>
                <li>Анализа использования платформы</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Защита данных</h2>
              <p>
                Мы применяем современные технологии защиты для обеспечения безопасности ваших данных. 
                Доступ к персональной информации имеют только уполномоченные сотрудники.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Ваши права</h2>
              <p>
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Запрашивать доступ к своим персональным данным</li>
                <li>Требовать исправления неточной информации</li>
                <li>Запрашивать удаление ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Контакты</h2>
              <p>
                По вопросам конфиденциальности обращайтесь:
              </p>
              <p className="mt-2">Email: info@ipixelbox.ru</p>
              <p>Телефон: +7 (343) 000-00-00</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm">
                Настоящая Политика конфиденциальности может быть изменена. 
                Актуальная версия всегда доступна на нашем сайте.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;
