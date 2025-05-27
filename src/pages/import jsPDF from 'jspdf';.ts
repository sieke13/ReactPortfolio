import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePortfolioPDF = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 10;

  // Get all relevant sections
  const sections = document.querySelectorAll('.pdf-section');
  let currentY = margin;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    
    // Capture section as canvas
    const canvas = await html2canvas(section as HTMLElement, {
      width: section.clientWidth * 2,
      height: section.clientHeight * 2,
      logging: false,
      useCORS: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate image dimensions to fit page width while maintaining aspect ratio
    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Check if the image fits on the current page
    if (currentY + imgHeight > pageHeight - margin) {
      // Add a new page if it doesn't fit
      pdf.addPage();
      currentY = margin;
    }
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
    currentY += imgHeight + 10; // Add some space between sections
  }

  // Save the PDF
  pdf.save('Gerardo_Avendano_Portfolio.pdf');
};