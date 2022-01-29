jQuery( document ).ready(function($) {
		
const { PDFDocument, StandardFonts, rgb } = PDFLib;


async function merge() {
	
	const pdfDoc = await PDFDocument.create();
	
	const sourceUrl = '/wp-content/themes/pdf-merger/assets/pdfs/Spirit_AeroSystems_Sustainability_Report_2020.pdf';
	
	const sourcePdfBytes = await fetch(sourceUrl).then(res => res.arrayBuffer());
	
	const sourcePdfDoc = await PDFDocument.load(sourcePdfBytes);  
  
	const [cover] = await pdfDoc.copyPages(sourcePdfDoc, [0]);
	pdfDoc.addPage(cover);		
	
      var selected = new Array();
	  var addedPages = new Array();
        var chks = document.getElementsByTagName("INPUT");
 
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
                addedPages.push(chks[i].value);
            }
        }
 
        //Display the selected CheckBox values.
        if (selected.length > 0) {
            //alert("Selected values: " + selected.join(","));
            //inputValues = [selected.join(", ")];
            //inputPages = Object.assign([], selected);
            //console.log(inputPages);
            
			// var inputValues = [2, 3, 4];
            
		 	const introSection = await pdfDoc.copyPages(sourcePdfDoc, Object.assign([], selected));
		 	
		 	
/*
		 	selected.forEach(
		 		element => console.log('page' + element)
		 	);
*/	
		 	
		 	
		 	//let addedPageName = 'page'+addedPage;
		 	
		 	
/*
		 	addedPage.forEach(
			 	addedPageName = ('page'+addedPage)
			)
			
					 	console.log(addedPageName);
*/

			const [page2, page3] = introSection;		

			$.each(addedPages, (inx, addedPage) => {
				let pageNum = 'page'+addedPage;
				console.log(addedPage);

				pdfDoc.addPage(page2);
			});
		 	

/*
		 	selected.forEach(
		 		element => pdfDoc.addPage(addedPage)
		 	);
*/
			
/*
			pdfDoc.addPage(two);
			pdfDoc.addPage(three);
			pdfDoc.addPage(four);
*/
		
			const pdfBytes = await pdfDoc.save();
			
			download(pdfBytes, "merged-pdf.pdf", "application/pdf");           
            
        }	

        if (selected.length < 1) {
            alert("Please check chapters or sections before creating your report.");
        }
	
	

  
}



/*
	function getFileBuffer(file) {
		var deferred = jQuery.Deferred();
		var reader = new FileReader();
		reader.onloadend = function (e) {
			deferred.resolve(e.target.result);
		};
		reader.onerror = function (e) {
			deferred.reject(e.target.error);
		};
		reader.readAsArrayBuffer(file);
		return deferred.promise();
	}
	
	async function merge() {
		var arr = [];
		var pdfs = document.getElementById("file").files;
		
		$.each(pdfs, (inx, pdf) => {
			arr.push(pdf.arrayBuffer());
		});
		
		var buffer = await Promise.all(arr);
		
		console.log(buffer);
		
		var tt = await mergePdfs(buffer);
		
		download(tt, "pdf-lib_creation_example.pdf", "application/pdf");
	}
	
	async function mergePdfs(pdfsToMerges) {
		const mergedPdf = await PDFDocument.create();
		const actions = pdfsToMerges.map(async (pdfBuffer) => {
			const pdf = await PDFDocument.load(pdfBuffer);
			const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
			copiedPages.forEach((page) => {
				console.log("page", page.getWidth(), page.getHeight());
				// page.setWidth(210);
				page.setWidth(page.getWidth());
				page.setHeight(page.getHeight());
				mergedPdf.addPage(page);
			});
		});
		await Promise.all(actions);
		const mergedPdfFile = await mergedPdf.save();
		return mergedPdfFile;
	}
	
	
	
	var createPDF = function (imgData) {
	var doc = new jsPDF();
	doc.output("datauri");
	};
*/
	
	
// 	Create and Download
	$(document).on('click', '#create-download', function(){
		merge();
	});
	
});