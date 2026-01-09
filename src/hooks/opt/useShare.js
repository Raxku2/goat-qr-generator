import { useCallback } from "react";
import { useQRStore } from "../../store";

export function useShareSvgImage(svgString, options = {}) {
  const {
    fileName = "qr_code.png",
    title = "Shared QR Code",
    text = "Check this out!",
    size = 1024,
    background = "#ffffff", // 👈 white bg by default
  } = options;

  const { qrSize } = useQRStore();

  const share = useCallback(async () => {
    if (!svgString) {
      alert("No QR Code Generated");
      return;
    }

    try {
      let svg = svgString;

      // Ensure width / height
      if (!svg.includes("width") || !svg.includes("height")) {
        svg = svg.replace(
          "<svg",
          `<svg width="${qrSize}" height="${qrSize}"`
        );
      }

      const svgBlob = new Blob([svg], {
        type: "image/svg+xml;charset=utf-8",
      });

      const url = URL.createObjectURL(svgBlob);
      const img = new Image();

      img.onload = async () => {
        const canvas = document.createElement("canvas");
        canvas.width = qrSize;
        canvas.height = qrSize;

        const ctx = canvas.getContext("2d");

        // ✅ WHITE BACKGROUND
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, qrSize, qrSize);

        ctx.drawImage(img, 0, 0, qrSize, qrSize);

        canvas.toBlob(async (pngBlob) => {
          URL.revokeObjectURL(url);
          if (!pngBlob) return;

          const file = new File([pngBlob], fileName, {
            type: "image/png",
          });

          if (navigator.canShare?.({ files: [file] })) {
            await navigator.share({
              title,
              text,
              files: [file],
            });
          } else {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(file);
            a.download = file.name;
            a.click();
            URL.revokeObjectURL(a.href);
          }
        }, "image/png");
      };

      img.src = url;
    } catch (err) {
      console.error(err);
      alert("Sharing failed");
    }
  }, [svgString, fileName, title, text, size, qrSize, background]);

  return share;
}
