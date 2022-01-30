jQuery( document ).ready(function($) {
		
	const { PDFDocument, StandardFonts, rgb } = PDFLib;  

	document.getElementById('cat1-all').onclick = function() {
		console.log("loaded");
	    const childCheckboxes = document.querySelectorAll('.introduction .options input[type="checkbox"]');
	    for (var childCheckbox of childCheckboxes) {
	        childCheckbox.checked = this.checked;
	    }
	}
	
	async function merge() {
		
		const pdfDoc = await PDFDocument.create();
		
		const sourceUrl = '/wp-content/themes/pdf-merger/assets/pdfs/Spirit_AeroSystems_Sustainability_Report_2020.pdf';
		
		const sourcePdfBytes = await fetch(sourceUrl).then(res => res.arrayBuffer());
		
		const sourcePdfDoc = await PDFDocument.load(sourcePdfBytes);  
	  
		const [cover] = await pdfDoc.copyPages(sourcePdfDoc, [0]);
		pdfDoc.addPage(cover);		
		
		
	   
	
	
	
		if (document.querySelectorAll('input[type="checkbox"]:checked').length ) {
			
	        if( document.getElementById('cat1sec1').checked ) {
		        const [cat1Sec1Page1] = await pdfDoc.copyPages(sourcePdfDoc, [2]);
		        pdfDoc.addPage(cat1Sec1Page1);	        
	        }
	        if( document.getElementById('cat1sec2').checked ) {
		        const [cat1Sec1Page2] = await pdfDoc.copyPages(sourcePdfDoc, [3]);
		        pdfDoc.addPage(cat1Sec1Page2);	        
	        }        
	        if( document.getElementById('cat1sec3').checked ) {
		        const [cat1Sec1Page3] = await pdfDoc.copyPages(sourcePdfDoc, [4]);
		        pdfDoc.addPage(cat1Sec1Page3);
	        }
	        
			const pdfBytes = await pdfDoc.save();
			
			download(pdfBytes, "merged-pdf.pdf", "application/pdf");
	
		} else {
			alert("Please check chapters or sections before creating your report.");
		}
	
	};



        
   	
	
// 	Create and Download
	$(document).on('click', '#create-download', function(e){
		e.preventDefault();
		merge();
	});
	
});