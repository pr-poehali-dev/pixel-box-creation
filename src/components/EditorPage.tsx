import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface EditorPageProps {
  initialMosaicType?: string;
}

const EditorPage = ({ initialMosaicType = "lego" }: EditorPageProps) => {
  const [mosaicType, setMosaicType] = useState(initialMosaicType);
  const [orientation, setOrientation] = useState("landscape");
  const [size, setSize] = useState("");
  const [base, setBase] = useState("canvas");
  const [image, setImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [rotation, setRotation] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const legoSizes = {
    landscape: ["51x76 см.", "76x102 см.", "102x128 см.", "128x153 см.", "153x179 см.", "179x204 см.", "204x230 см.", "230x256 см.", "256x281 см.", "281x307 см."],
    portrait: ["76x51 см.", "102x76 см.", "128x102 см.", "153x128 см.", "179x153 см.", "204x179 см.", "230x204 см.", "256x230 см.", "281x256 см.", "307x281 см."],
    square: ["51x51 см.", "76x76 см.", "102x102 см.", "128x128 см.", "153x153 см.", "179x179 см.", "204x204 см.", "230x230 см.", "256x256 см.", "281x281 см."],
  };

  const otherSizes = {
    landscape: ["Формат А4 (210x297)", "Формат А3 (297x420)", "Формат А2 (420x594)", "Формат А1 (594x841)", "Формат А0 (841x1189)", "20x30 см.", "30x40 см.", "40x50 см.", "40x60 см.", "50x70 см.", "60x80 см.", "70x90 см.", "80x120", "90x120", "100x120"],
    portrait: ["Формат А4 (297x210)", "Формат А3 (420x297)", "Формат А2 (594x420)", "Формат А1 (841x594)", "Формат А0 (1189x841)", "30x20 см.", "40x30 см.", "50x40 см.", "60x40 см.", "70x50 см.", "80x60 см.", "90x70 см.", "120x80 см.", "120x90 см.", "120x100 см."],
    square: ["20x20 см.", "30x30 см.", "40x40 см.", "50x50 см.", "60x60 см.", "70x70 см.", "80x80 см.", "90x90 см.", "100x100 см.", "110x110 см.", "120x120 см."],
  };

  const getSizeOptions = () => {
    const sizesMap = mosaicType === "lego" ? legoSizes : otherSizes;
    return sizesMap[orientation as keyof typeof sizesMap] || sizesMap.landscape;
  };

  const getAspectRatio = () => {
    if (orientation === "landscape") return 297 / 210;
    if (orientation === "portrait") return 210 / 297;
    return 1;
  };

  useEffect(() => {
    const sizes = getSizeOptions();
    setSize(sizes[0]);
  }, [mosaicType, orientation]);

  const getCanvasDimensions = () => {
    const maxWidth = 625;
    const maxHeight = 625;
    const aspectRatio = getAspectRatio();

    let width, height;

    if (orientation === "square") {
      width = height = Math.min(maxWidth, maxHeight);
    } else if (orientation === "landscape") {
      width = maxWidth;
      height = width / aspectRatio;
      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }
    } else {
      height = maxHeight;
      width = height * aspectRatio;
      if (width > maxWidth) {
        width = maxWidth;
        height = width / aspectRatio;
      }
    }

    return { width, height };
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgSrc = event.target?.result as string;
        const img = new Image();
        img.onload = () => {
          const { width: canvasWidth, height: canvasHeight } = getCanvasDimensions();
          const scaleX = canvasWidth / img.width;
          const scaleY = canvasHeight / img.height;
          const initialScale = Math.max(scaleX, scaleY);
          
          setImage(imgSrc);
          setScale(initialScale);
          setPosition({ x: 0, y: 0 });
        };
        img.src = imgSrc;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.onload = () => {
        const { width: canvasWidth, height: canvasHeight } = getCanvasDimensions();
        const scaleX = canvasWidth / img.width;
        const scaleY = canvasHeight / img.height;
        const initialScale = Math.max(scaleX, scaleY);
        setScale(initialScale);
        setPosition({ x: 0, y: 0 });
      };
      img.src = image;
    }
  }, [orientation, mosaicType]);

  const handleCanvasClick = () => {
    if (!image) {
      fileInputRef.current?.click();
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setScale((prev) => Math.max(0.1, Math.min(5, prev + delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (image) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSave = async () => {
    if (!image || !canvasRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvasRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const img = new Image();
    img.src = image;
    
    img.onload = () => {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const drawX = (canvas.width - drawWidth) / 2 + position.x;
      const drawY = (canvas.height - drawHeight) / 2 + position.y;
      
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `mosaic-${Date.now()}.png`;
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    };
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Редактор i PIXEL BOX
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Select value={mosaicType} onValueChange={setMosaicType}>
            <SelectTrigger>
              <SelectValue placeholder="Тип мозаики" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lego">ЛЕГО</SelectItem>
              <SelectItem value="coloring">Раскраска</SelectItem>
              <SelectItem value="round">Круглые стразы</SelectItem>
              <SelectItem value="square">Квадратные стразы</SelectItem>
            </SelectContent>
          </Select>

          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger>
              <SelectValue placeholder="Ориентация" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="landscape">Альбомная</SelectItem>
              <SelectItem value="portrait">Книжная</SelectItem>
              <SelectItem value="square">Квадратная</SelectItem>
            </SelectContent>
          </Select>

          <Select value={size} onValueChange={setSize}>
            <SelectTrigger>
              <SelectValue placeholder="Размер" />
            </SelectTrigger>
            <SelectContent>
              {getSizeOptions().map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {mosaicType !== "lego" && (
            <Select value={base} onValueChange={setBase}>
              <SelectTrigger>
                <SelectValue placeholder="Основа" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="canvas">Холст</SelectItem>
                <SelectItem value="frame">Подрамник</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
          <div className="flex items-center justify-center bg-card rounded-lg p-8 min-h-[650px]">
            <div
              ref={canvasRef}
              className="relative bg-muted/20 pixel-border cursor-pointer overflow-hidden"
              style={{
                width: `${getCanvasDimensions().width}px`,
                height: `${getCanvasDimensions().height}px`,
              }}
              onClick={handleCanvasClick}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="absolute"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1}) rotate(${rotation}deg)`,
                    transformOrigin: "center",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-50%",
                    marginTop: "-50%",
                    maxWidth: "none",
                  }}
                  draggable={false}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Icon name="Upload" size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Нажмите для загрузки изображения</p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale((s) => Math.min(5, s + 0.1))}
              title="Увеличить"
            >
              <Icon name="ZoomIn" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale((s) => Math.max(0.1, s - 0.1))}
              title="Уменьшить"
            >
              <Icon name="ZoomOut" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setFlipV(!flipV)}
              title="Отразить по вертикали"
            >
              <Icon name="FlipVertical" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setFlipH(!flipH)}
              title="Отразить по горизонтали"
            >
              <Icon name="FlipHorizontal" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setRotation((r) => (r + 90) % 360)}
              title="Повернуть на 90°"
            >
              <Icon name="RotateCw" size={20} />
            </Button>
          </div>
        </div>

        {image && (
          <div className="mt-6 text-center">
            <Button
              size="lg"
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Создать варианты мозаики
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorPage;