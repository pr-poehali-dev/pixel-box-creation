import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsPage = () => {
  const contacts = [
    {
      icon: "Mail",
      title: "Email",
      value: "info@ipixelbox.ru",
      link: "mailto:info@ipixelbox.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (343) 000-00-00",
      link: "tel:+73430000000",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Екатеринбург, Россия",
      link: null,
    },
  ];

  const social = [
    { icon: "Send", name: "Telegram", link: "#" },
    { icon: "Instagram", name: "Instagram", link: "#" },
    { icon: "Youtube", name: "YouTube", link: "#" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Контакты
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Свяжитесь с нами любым удобным способом
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact) => (
            <Card key={contact.title} className="p-6 text-center pixel-border hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon as any} size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-primary hover:underline"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{contact.value}</p>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 pixel-border mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Социальные сети</h2>
          <div className="flex justify-center gap-4">
            {social.map((item) => (
              <Button
                key={item.name}
                variant="outline"
                size="lg"
                asChild
                className="w-16 h-16"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
                  <Icon name={item.icon as any} size={24} />
                </a>
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-card pixel-border">
          <h2 className="text-2xl font-bold mb-4">О компании</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong>ИП Пегушин</strong>
            </p>
            <p>ОГРН: 111222333</p>
            <p>г. Екатеринбург, Россия</p>
            <p className="mt-6">
              i PIXEL BOX - профессиональный редактор для создания пиксельной мозаики.
              Мы помогаем превратить ваши любимые фотографии в уникальные произведения искусства.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactsPage;
