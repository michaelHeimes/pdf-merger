jQuery( document ).ready(function($) {
		
const { PDFDocument, StandardFonts, rgb } = PDFLib;


async function merge() {
  const url1 = '/wp-content/themes/pdf-merger/assets/pdfs/Spirit_AeroSystems_Sustainability_Report_2020.pdf'

  const firstDonorPdfBytes = await fetch(url1).then(res => res.arrayBuffer())
  //const secondDonorPdfBytes = await fetch(url2).then(res => res.arrayBuffer())

  const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
  //const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)

  const pdfDoc = await PDFDocument.create();

  const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])
  const [secondDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [5])

  pdfDoc.addPage(firstDonorPage)
  pdfDoc.insertPage(1, secondDonorPage)

  const pdfBytes = await pdfDoc.save()
  
  download(pdfBytes, "merged-pdf.pdf", "application/pdf");
  
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