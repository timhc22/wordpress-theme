<?php use Roots\Sage\Nav\NavWalker; ?>

<header class="navigation js-navigation">
    <div class="container">
        <div class="navigation__header">
            <a href="<?= esc_url(home_url('/')); ?>" class="logo"><?php bloginfo('name'); ?></a>
        </div>

        <nav class="navigation__nav">
            <input type="checkbox" id="nav" class="js-nav-checkbox noselect" /><label for="nav"></label>
            <?php
            if (has_nav_menu('primary_navigation')) :
                wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new NavWalker(), 'menu_class' => 'nav navbar-nav']);
            endif;
            ?>
<!--            <ul>-->
<!--                <li><a href="/">Home</a></li>-->
<!--                <li>-->
<!--                    <a href="#">Work</a>-->
<!--                    <label for="sub-dropdown" class="toggle-sub" onclick><img class="down-arrow" src="./images/down-arrow.png"></label>-->
<!--                    <input type="checkbox" id="sub-dropdown" class="js-nav-checkbox">-->
<!--                    <ul class="navigation__subnav">-->
<!--                        <li><a href="/web">Web</a></li>-->
<!--                        <li><a href="/print">Print</a></li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--                <li><a href="/service">Service</a></li>-->
<!--                <li><a href="#">Blog</a></li>-->
<!--                <li><a href="#">Contact</a></li>-->
<!--            </ul>-->
        </nav>
    </div>
</header>