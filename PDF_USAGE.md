# Portfolio PDF Resume Generation

## Overview

The PDF generation functionality has been removed from this project as requested. Now, instead of generating PDFs programmatically, you can use the HTML template files directly for manual conversion.

## HTML Templates

There are two HTML template files available:

1. `cv-template.html` - The main HTML template for your CV/resume
2. `cv-template-pdf.html` - A version optimized for PDF conversion

## How to Use

To create a PDF from the HTML template:

1. Open the HTML file in a modern browser (Chrome or Edge recommended)
2. Use the browser's print functionality (Ctrl+P or Cmd+P)
3. Select "Save as PDF" option
4. Configure the page settings to ensure proper A4 formatting:
   - Paper size: A4
   - Margins: None
   - Scale: 100%
   - Background graphics: Enabled
5. Save the file to your desired location

## Tips for Perfect PDF Output

1. Make sure to enable "Background graphics" in the print settings to preserve colors and styling
2. If you make changes to the HTML template, test the PDF output to ensure proper formatting
3. The templates are designed to fit A4 paper size (210mm x 297mm)
4. Page breaks are strategically placed to ensure proper section division when printed

## Customizing the Templates

You can customize these templates by editing the HTML files directly. Key areas to modify:

- Personal information (name, title, contact information)
- Experience and projects sections
- Skills and education details
- Profile photo (located at `public/assets/FB_IMG_1745735360797.jpg`)

The CSS styles are embedded within the HTML files for simplicity and portability.
