import { useRef, useCallback } from "react";
import { Download } from "lucide-react";

interface BuilderCardDownloadProps {
  name: string;
  number: number;
}

export const BuilderCardDownload = ({ name, number }: BuilderCardDownloadProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formattedNum = String(number).padStart(4, "0");
  const code = `ETD-2026-${formattedNum}`;

  const drawCard = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 800;
    const h = 480;
    canvas.width = w * 2; // 2x for retina
    canvas.height = h * 2;
    ctx.scale(2, 2);

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "#1a1f33");
    bg.addColorStop(0.5, "#1e2640");
    bg.addColorStop(1, "#141928");
    ctx.fillStyle = bg;
    ctx.roundRect(0, 0, w, h, 20);
    ctx.fill();

    // Subtle dot pattern
    ctx.fillStyle = "rgba(200, 160, 60, 0.06)";
    for (let x = 0; x < w; x += 20) {
      for (let y = 0; y < h; y += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Top decorative line
    const lineGrad = ctx.createLinearGradient(40, 0, w - 40, 0);
    lineGrad.addColorStop(0, "rgba(200, 160, 60, 0)");
    lineGrad.addColorStop(0.5, "rgba(200, 160, 60, 0.3)");
    lineGrad.addColorStop(1, "rgba(200, 160, 60, 0)");
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 60);
    ctx.lineTo(w - 40, 60);
    ctx.stroke();

    // Header
    ctx.fillStyle = "rgba(200, 170, 80, 0.8)";
    ctx.font = "11px system-ui, sans-serif";
    ctx.letterSpacing = "3px";
    ctx.fillText("知识之门 · ENTER THE DOOR", 44, 46);

    // "Builder Identity Card" subtitle
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.font = "10px system-ui, sans-serif";
    ctx.letterSpacing = "1px";
    ctx.fillText("BUILDER IDENTITY CARD", w - 210, 46);

    // Award circle
    ctx.beginPath();
    ctx.arc(w - 70, 42, 16, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(200, 160, 60, 0.3)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "rgba(200, 160, 60, 0.7)";
    ctx.font = "14px system-ui";
    ctx.fillText("★", w - 76, 47);

    // Label "建设者"
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("建设者", 44, 110);

    // Name
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.font = "bold 36px system-ui, serif";
    ctx.fillText(name, 44, 160);

    // Number
    ctx.fillStyle = "rgba(200, 160, 60, 0.9)";
    ctx.font = "bold 22px system-ui, serif";
    ctx.fillText(`第 ${number} 位`, 44, 210);
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
    ctx.font = "14px system-ui, sans-serif";
    ctx.fillText("申请者", 44 + ctx.measureText(`第 ${number} 位`).width + 12, 210);

    // Divider
    const divGrad = ctx.createLinearGradient(44, 0, w - 44, 0);
    divGrad.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    divGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.strokeStyle = divGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(44, 250);
    ctx.lineTo(w - 44, 250);
    ctx.stroke();

    // Quote
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "italic 15px system-ui, serif";
    ctx.fillText(""门永远开着。你的到来，让这扇门更加明亮。"", 44, 290);

    ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
    ctx.font = "italic 13px system-ui, serif";
    ctx.fillText("知识不属于任何人，它属于所有需要它的人。", 44, 320);

    ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
    ctx.font = "italic 13px system-ui, serif";
    ctx.fillText("愿你在这里找到志同道合的伙伴，一起做一件想做一辈子的事。", 44, 350);

    // Bottom divider
    const btmGrad = ctx.createLinearGradient(44, 0, w - 44, 0);
    btmGrad.addColorStop(0, "rgba(200, 160, 60, 0)");
    btmGrad.addColorStop(0.5, "rgba(200, 160, 60, 0.2)");
    btmGrad.addColorStop(1, "rgba(200, 160, 60, 0)");
    ctx.strokeStyle = btmGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(44, 390);
    ctx.lineTo(w - 44, 390);
    ctx.stroke();

    // Code
    ctx.fillStyle = "rgba(200, 160, 60, 0.5)";
    ctx.font = "11px monospace";
    ctx.fillText(code, 44, 430);

    // URL
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.font = "10px system-ui, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("enter-the-door.lovable.app", w - 44, 430);
    ctx.textAlign = "left";

    // Unique watermark (subtle)
    ctx.fillStyle = "rgba(200, 160, 60, 0.03)";
    ctx.font = "bold 80px system-ui, serif";
    ctx.textAlign = "center";
    ctx.fillText(formattedNum, w / 2, h / 2 + 30);
    ctx.textAlign = "left";
  }, [name, number, code, formattedNum]);

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawCard(canvas);
    const link = document.createElement("a");
    link.download = `知识之门_建设者卡_${name}_${formattedNum}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [drawCard, name, formattedNum]);

  return (
    <div>
      <canvas ref={canvasRef} className="hidden" />
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        <Download size={16} />
        导出我的建设者身份卡
      </button>
    </div>
  );
};
