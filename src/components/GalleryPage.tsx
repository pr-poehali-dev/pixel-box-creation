import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const GalleryPage = () => {
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (uploadPreview && galleryImages.length < 20) {
      setGalleryImages([...galleryImages, uploadPreview]);
      setUploadPreview(null);
      setShowUploadDialog(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Галерея работ
        </h1>

        <div className="text-center mb-8">
          <Button
            size="lg"
            onClick={() => setShowUploadDialog(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Icon name="Upload" size={20} className="mr-2" />
            Поделиться своими достижениями
          </Button>
        </div>

        {galleryImages.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="Image" size={64} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground">
              Галерея пуста. Будьте первым, кто поделится своей работой!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <Card key={index} className="overflow-hidden pixel-border hover:scale-105 transition-transform">
                <img
                  src={img}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </Card>
            ))}
          </div>
        )}

        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить работу в галерею</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {uploadPreview ? (
                  <img src={uploadPreview} alt="Preview" className="max-h-64 mx-auto" />
                ) : (
                  <div>
                    <Icon name="Upload" size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-muted-foreground mb-4">
                      Выберите изображение вашей работы
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="gallery-upload"
                />
                <label htmlFor="gallery-upload">
                  <Button variant="outline" asChild>
                    <span>Выбрать файл</span>
                  </Button>
                </label>
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!uploadPreview}
                className="w-full"
              >
                Добавить в галерею
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryPage;
