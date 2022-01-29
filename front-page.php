<?php 
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 */

get_header(); ?>
	
	<div class="content">
	
		<div class="inner-content">
			<input type="file" id="file" multiple />
			<input type="button" value="Merge"/>
	
		    <main class="main" role="main">
			    <div class="grid-container">
				    <div class="grid-x grid-padding-x">
					    
					    <div class="cell">
						    <header class="article-header">
								<h1 class="page-title"><?php the_title(); ?></h1>
							</header> <!-- end article header -->
						</div>
				    
					    <div class="cell small-12 medium-6 large-4">
				
						    <section class="entry-content" itemprop="text">
							    <?php the_content(); ?>
							</section> <!-- end article section -->								
						    
							<form>
								<div class="choice all">
									<div class="grid-x align-middle">
										<div class="cell shrink">
											<input type="checkbox" id="addAll" name="Add All" value="addAll">
										</div>
										<div class="cell auto">
											<label for="all">Add All PDFs to Report</label>
										</div>
									</div>
								</div>
							</form>							
						    
					    </div>		
					    
					    <div class="cell small-12 medium-6 large-4">
						    
							<form>
								
								<div class="choice all-cats">
									<div class="grid-x align-middle">
										<input type="checkbox" id="category1" name="Category 1" value="category1">
										<label for="category1">Category 1</label>
									</div>
								</div>
								
								<div class="choice">
									<div class="grid-x align-middle">
										<input type="checkbox" id="cat1sec1" name="Category 1" value="category1">
										<label for="cat1sec1">Cat 1 Section 1</label>
									</div>
								</div>
								
								<div class="choice">
									<div class="grid-x align-middle">
										<input type="checkbox" id="category1" name="Category 1" value="category1">
										<label for="cat1sec2">Cat 1 Section 2</label>
									</div>
								</div>	
														
							</form>						
						    
					    </div>	
					    
					    <div class="cell text-center">
						    <div class="grid-x grid-padding-x align-center align-middle">
								<div class="cell shrink"><button id="create-download" type="submit">Create &amp; Download</button></div>
								<div class="cell shrink"><button id="reset-options" type="reset">Clear Form</button></div>
						    </div>
					    </div>	
					    
				    </div>
			    </div>	
			    				
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