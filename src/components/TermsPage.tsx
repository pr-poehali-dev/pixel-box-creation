import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

const TermsPage = ({ onNavigate }: TermsPageProps) => {
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
            Пользовательское соглашение
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">I Pixel Box</p>
              <p>г. Екатеринбург, ИП Пегушин, ОГРН 111222333</p>
            </div>

            <p>
              Настоящее Соглашение определяет условия использования веб-сайта и услуг I Pixel Box 
              (далее — «Сервис»). Владельцем и администратором Сервиса является Индивидуальный 
              предприниматель Пегушин (ИП Пегушин).
            </p>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Принятие условий</h2>
              <p>
                Начиная использование любого раздела нашего Сайта, вы подтверждаете, что полностью 
                ознакомились и безоговорочно принимаете все условия настоящего Соглашения. Если вы 
                не согласны с каким-либо из пунктов, пожалуйста, немедленно прекратите использование 
                Сайта и наших услуг.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Использование сервиса</h2>
              <p>
                Сервис предоставляет инструменты для создания пиксельной мозаики из ваших изображений. 
                Вы обязуетесь:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Загружать только изображения, на которые имеете права</li>
                <li>Не использовать сервис в незаконных целях</li>
                <li>Не нарушать права интеллектуальной собственности третьих лиц</li>
                <li>Не перегружать серверы сервиса чрезмерными запросами</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Интеллектуальная собственность</h2>
              <p>
                Все права на дизайн, логотипы, программное обеспечение и контент сайта принадлежат 
                ИП Пегушин. Изображения, загруженные пользователями, остаются их собственностью.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Ограничение ответственности</h2>
              <p>
                Сервис предоставляется "как есть". Мы не несем ответственности за:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Временную недоступность сервиса</li>
                <li>Качество обработанных изображений</li>
                <li>Потерю данных вследствие технических сбоев</li>
                <li>Ущерб, причиненный использованием сервиса</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Изменения условий</h2>
              <p>
                Мы оставляем за собой право изменять условия настоящего Соглашения. Продолжение 
                использования сервиса после внесения изменений означает ваше согласие с новыми условиями.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Контактная информация</h2>
              <p>
                По вопросам, связанным с настоящим Соглашением, обращайтесь:
              </p>
              <p className="mt-2">Email: info@ipixelbox.ru</p>
              <p>Телефон: +7 (343) 000-00-00</p>
              <p>Адрес: г. Екатеринбург, Россия</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm">
                Настоящее Пользовательское соглашение вступает в силу с момента начала использования 
                сервиса и действует бессрочно.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;
