document.addEventListener('DOMContentLoaded', function () {
		
	const { PDFDocument, StandardFonts, rgb } = PDFLib;  
	
	async function merge() {
		
		const pdfDoc = await PDFDocument.create();
		
		const sourceUrl = '/wp-content/themes/pdf-merger/assets/pdfs/Spirit_AeroSystems_Sustainability_Report_2020.pdf';
		
		const sourcePdfBytes = await fetch(sourceUrl).then(res => res.arrayBuffer());
		
		const sourcePdfDoc = await PDFDocument.load(sourcePdfBytes);  
	  
		const [cover] = await pdfDoc.copyPages(sourcePdfDoc, [0]);
		pdfDoc.addPage(cover);		
		
		
	   
	
	
	
		if (document.querySelectorAll('input[type="checkbox"]:checked').length ) {
			
	        if( document.getElementById('cat1sec1').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [2]);
		        pdfDoc.addPage(page1);	        
	        }
	        if( document.getElementById('cat1sec2').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [3]);
		        pdfDoc.addPage(page1);	        
	        }        
	        if( document.getElementById('cat1sec3').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [4]);
		        pdfDoc.addPage(page1);
	        }

	        
	        if( document.getElementById('cat2sec1').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [5]);
				pdfDoc.addPage(page1);
	        }
	        if( document.getElementById('cat2sec2').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [6]);
		        pdfDoc.addPage(page1);	        
	        }
	        if( document.getElementById('cat2sec3').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [7]);
		        pdfDoc.addPage(page1);	        
	        }        
	        if( document.getElementById('cat2sec4').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [8]);
		        let [page2] = await pdfDoc.copyPages(sourcePdfDoc, [9]);
		        pdfDoc.addPage(page1);
		        pdfDoc.addPage(page2);
	        }
	        if( document.getElementById('cat2sec5').checked ) {
		        let [page1] = await pdfDoc.copyPages(sourcePdfDoc, [10]);
		        pdfDoc.addPage(page1);
	        }
	        	        
			const pdfBytes = await pdfDoc.save();
			
			download(pdfBytes, "merged-pdf.pdf", "application/pdf");
	
		} else {
			alert("Please check chapters or sections before creating your report.");
		}
	
	};

	// Select All Buttons
/*
	var doc = document.getElementById("test");
	var notes = null;
	for (var i = 0; i < doc.childNodes.length; i++) {
	    if (doc.childNodes[i].className == "4") {
	      notes = doc.childNodes[i];
	      break;
	    }        
	}
*/

	
	// Introduction
	document.getElementById('cat1-all').onclick = function() {
		console.log("loaded");
	    const childCheckboxes = document.querySelectorAll('.introduction .options input[type="checkbox"]');
	    for (var childCheckbox of childCheckboxes) {
	        childCheckbox.checked = this.checked;
	    }
	}

        
   	
	
// 	Create and Download
	
	document.getElementById('create-download').onclick = function(e) {
		e.preventDefault();
		merge();
	}
	
}, false);