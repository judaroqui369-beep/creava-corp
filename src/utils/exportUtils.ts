import confetti from 'canvas-confetti';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import { DesignDocument } from '../types';

export async function exportArtboardToPng(element: HTMLElement, fileName: string = 'creava-diseno.png') {
  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
    });
    
    downloadFile(dataUrl, fileName);
    triggerCelebration();
    return true;
  } catch (error) {
    console.error('Error al exportar PNG:', error);
    throw error;
  }
}

export async function exportArtboardToJpeg(element: HTMLElement, fileName: string = 'creava-diseno.jpg', quality: number = 0.95) {
  try {
    const dataUrl = await toJpeg(element, {
      quality,
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: '#ffffff'
    });
    
    downloadFile(dataUrl, fileName);
    triggerCelebration();
    return true;
  } catch (error) {
    console.error('Error al exportar JPEG:', error);
    throw error;
  }
}

export async function exportArtboardToSvg(element: HTMLElement, fileName: string = 'creava-diseno.svg') {
  try {
    const dataUrl = await toSvg(element);
    downloadFile(dataUrl, fileName);
    triggerCelebration();
    return true;
  } catch (error) {
    console.error('Error al exportar SVG:', error);
    throw error;
  }
}

export function exportProjectToJson(doc: DesignDocument) {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(doc, null, 2));
  const fileName = `${doc.title.toLowerCase().replace(/\s+/g, '-')}-creava.json`;
  downloadFile(dataStr, fileName);
  triggerCelebration();
}

export function printArtboard(element: HTMLElement) {
  toPng(element, { pixelRatio: 2 }).then((dataUrl) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Imprimir Diseño - Creava</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; }
              img { max-width: 100%; max-height: 100vh; object-fit: contain; }
              @media print {
                body { margin: 0; }
                img { width: 100%; height: auto; }
              }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" onload="window.print();window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  });
}

function downloadFile(dataUrl: string, fileName: string) {
  const downloadLink = document.createElement('a');
  downloadLink.href = dataUrl;
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export function triggerCelebration() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#8B3DFF', '#00C4CC', '#FF5E3A', '#FFB800', '#10B981']
  });
}
