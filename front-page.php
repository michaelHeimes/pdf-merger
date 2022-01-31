<?php 
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 */

get_header(); ?>
	
	<div class="content">
	
		<div class="inner-content">
<!--
			<input type="file" id="file" multiple />
			<input type="button" value="Merge"/>
-->
	
		    <main class="main" role="main">
			    <form id="report-generator">
				    <div class="grid-container">
					    <div class="grid-x grid-padding-x">
						    
						    <div class="cell">
							    <header class="article-header">
									<h1 class="page-title"><?php the_title(); ?></h1>
								</header> <!-- end article header -->
							</div>
					    
						    <section class="cell small-12 medium-6 large-4">
					
							    <div class="entry-content" itemprop="text">
								    <?php the_content(); ?>
								</div> <!-- end article section -->								
							    
								<div class="choice all-choices">
									<div class="grid-x align-middle">
										<div class="cell shrink">
											<input type="checkbox" id="addAll" name="Add All" value="addAll">
										</div>
										<div class="cell auto">
											<label for="all">Add All PDFs to Report</label>
										</div>
									</div>
								</div>
							    
						    </section>		
						    
						    <section class="choice-block first-chapter-block cell small-12 medium-6 large-4">
	
								<div class="choice all-sections">
									<input type="checkbox" id="cat1-all" name="First Chapter" value="all-first-chapter">
									<label for="cat1-all">First Chapter</label>
								</div>
								
								<div class="options">

									<div class="choice">
										<input type="checkbox" id="cat1sec1" name="About Spirit AeroSystems" value="cat1sec1">
										<label for="cat1sec2">About Spirit AeroSystems</label>
									</div>
									
									<div class="choice">
										<input type="checkbox" id="cat1sec2" name="Message from Our President and CEP" value="cat1sec2">
										<label for="cat1sec3">Message from Our President and CEP</label>
									</div>	
		
									<div class="choice">
										<input type="checkbox" id="cat1sec3" name="2020 Impact Highlights" value="cat1sec3">
										<label for="cat1sec4">2020 Impact Highlights</label>
									</div>	
									
								</div>
	
						    </section>	

						    <section class="choice-block second-chapter-block cell small-12 medium-6 large-4">
	
								<div class="choice all-sections">
									<input type="checkbox" id="cat2-all" name="Second Chapter" value="all-second-chapter">
									<label for="cat1-all">Second Chapter</label>
								</div>
								
								<div class="options">

									<div class="choice">
										<input type="checkbox" id="cat2sec1" name="Decade of Action" value="cat2sec1">
										<label for="cat2sec1">Decade of Action</label>
									</div>
									
									<div class="choice">
										<input type="checkbox" id="cat2sec2" name="Spirit's Values and Sustainability Strategy" value="cat2sec2">
										<label for="cat2sec2">Spirit's Values and Sustainability Strategy</label>
									</div>
									
									<div class="choice">
										<input type="checkbox" id="cat2sec3" name="Aerospace Innovation Centre" value="cat2sec3">
										<label for="cat2sec3">Aerospace Innovation Centre</label>
									</div>	
		
									<div class="choice">
										<input type="checkbox" id="cat2sec4" name="Materiality and United Nations Sustainable Development Goals" value="cat2sec4">
										<label for="cat2sec4">Materiality and United Nations Sustainable Development Goals</label>
									</div>	

									<div class="choice">
										<input type="checkbox" id="cat2sec5" name="Sustainability Targets" value="cat2sec5">
										<label for="cat2sec5">Sustainability Targets</label>
									</div>	
									
								</div>
	
						    </section>	
						    
						    <div class="form-buttons cell text-center">
							    <div class="grid-x grid-padding-x align-center align-middle">
									<div class="cell shrink"><button id="create-download" type="submit">Create &amp; Download</button></div>
									<div class="cell shrink"><button id="reset-options" type="reset">Clear Form</button></div>
							    </div>
						    </div>	
						    
					    </div>
				    </div>	
			    </form>
			    				
			</main> <!-- end #main -->

		    <?php get_sidebar(); ?>
		    
		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>
<!--

		const pdf1Url = '/wp-content/themes/pdf-merger/assets/pdfs/test-pdf-page-1.pdf'
		const pdf2Url = '/wp-content/themes/pdf-merger/assets/pdfs/test-pdf-page-2.pdf'
		
		const pdf1Bytes = await fetch(pdf1Url).then(res => res.arrayBuffer())
		const pdf2Bytes = await fetch(pdf2Url).then(res => res.arrayBuffer())
-->


<!--
Select All In Each Category

Introduction	
-->
<!--
document.getElementById('cat1-all').onclick = function() {
	console.log("loaded");
    const childCheckboxes = document.querySelectorAll('.introduction .options input[type="checkbox"]');
    for (var childCheckbox of childCheckboxes) {
        childCheckbox.checked = this.checked;
    }
}
-->

<!--
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

		} else {
			alert("Please check chapters or sections before creating your report.");
		}
-->