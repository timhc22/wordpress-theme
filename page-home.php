<div id="owl-example" class="owl-carousel owl-theme js-owl-full-width">
    <div> <img src="http://lorempixel.com/400/200/fashion/1"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/2"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/3"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/4"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/5"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/6"> </div>
    <div> <img src="http://lorempixel.com/400/200/fashion/7"> </div>
</div>

<script type="text/javascript">
    jQuery(document).ready(function($) {
        $("#owl-example").owlCarousel({
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });
    });
</script>


<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>