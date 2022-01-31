document.addEventListener("DOMContentLoaded", function() {
		
	const { PDFDocument, StandardFonts, rgb } = PDFLib;  
	let choices = document.querySelectorAll('input[type="checkbox"]');
	
	function showDownLoadCard() {
		
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
	        
	        let fadeInLoader = function() {
		        let loader = document.getElementById('loader');
		        loader.classList.add('show');		        
	        }
	        fadeInLoader();
	        	        
			const pdfBytes = await pdfDoc.save();
			
	        let downloadingText = function(e) {
		        let dlText = document.getElementById('loading-text');
		        dlText.innerHTML = "downloading your report...";		        
	        }
	        downloadingText();
			
			let fadeOutLoader = async function(e) {
				await pdfDoc.save();
		        let loader = document.getElementById('loader');
		        loader.classList.remove('show');		        
	        }
	        setTimeout(function(e) {
	        	fadeOutLoader();
	        }, 1000);
			
			download(pdfBytes, "merged-pdf.pdf", "application/pdf");
	
		} else {
			alert("Please check chapters or sections before creating your report.");
		}
	
	};
	
	
	// Select Entire Report
	let wholeReportBtn = document.getElementById('addAll');
	wholeReportBtn.onclick = function() {
		for (let choice of choices) {
			choice.checked = this.checked;
		}
	}
	
	// Clear Form
	let clearBtn = document.getElementById('clear-options');
		for (let choice of choices) {
			choice.checked != this.checked;
		}

	// Select All Buttons for each choice block
	let allBtns = document.querySelectorAll('.choice-block .all-sections input');
	for (let i = 0; i < allBtns.length; i++) {
		allBtns[i].onclick = function() {
			let choiceBlock = this.closest('.choice-block');
			let childCheckboxes = choiceBlock.querySelectorAll('input[type="checkbox"]');
			for (let childCheckbox of childCheckboxes) {
				childCheckbox.checked = this.checked;
	    	}
		}
	}   	
	
// 	Create and Download
	document.getElementById('create-download').onclick = function(e) {
		e.preventDefault();
		merge();
	}
	
});