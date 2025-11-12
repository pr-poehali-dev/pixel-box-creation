import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const AdminPage = () => {
  const [galleryImages] = useState<string[]>([]);
  const [instructions, setInstructions] = useState("Инструкция по использованию редактора...");
  const [contacts, setContacts] = useState("Контактная информация...");

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Панель администратора
        </h1>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
            <TabsTrigger value="instructions">Инструкции</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Управление галереей</h2>
              {galleryImages.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Image" size={64} className="mx-auto mb-4 opacity-50" />
                  <p>В галерее пока нет изображений</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Gallery ${index}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="instructions" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Редактирование инструкций</h2>
              <div className="space-y-4">
                <Textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="min-h-[300px]"
                  placeholder="Введите текст инструкции..."
                />
                <Button className="w-full">
                  <Icon name="Save" size={20} className="mr-2" />
                  Сохранить изменения
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Редактирование контактов</h2>
              <div className="space-y-4">
                <Textarea
                  value={contacts}
                  onChange={(e) => setContacts(e.target.value)}
                  className="min-h-[300px]"
                  placeholder="Введите контактную информацию..."
                />
                <Button className="w-full">
                  <Icon name="Save" size={20} className="mr-2" />
                  Сохранить изменения
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
