<?php
/**
 * Plugin Name: Easy Everything Slider
 * Plugin URI: http://andrea-campos.com/easy-everything-slider
 * Description: Add a slider containing any HTML content to your posts and pages via shortcode
 * Version: 1.0
 * Author: Andrea Campos
 * Author URI: http://andrea-campos.com
 * License: GPL2
 */
/*  Copyright 2015 Andrea Campos  (email : andrea@andrea-campos.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

//[easy_slider_container]
function easy_slider_func( $atts, $content = null ){
    $pre_content = '<div class="easy-slider-nav">
<a href="#" class="easy-prev">Previous</a>
<a href="#" class="easy-showall">Show all</a>
<a href="#" class="easy-next">Next</a>
</div>
<div class="easy-everything-slider">';
    $post_content = "</div>";
    return $pre_content . do_shortcode($content) . $post_content;
}
add_shortcode( 'easy_slider_container', 'easy_slider_func' );

//[easy_slide id=""]
function easy_slide_func( $atts, $content = null ) {
    $a = shortcode_atts( array(
         'id' => '',
    ), $atts );
    $pre_content = '<div id="' . $a['id'] . '" class="easy-slider-child">';
    $post_content = '</div>';
    return $pre_content . do_shortcode($content) . $post_content;
}
add_shortcode( 'easy_slide', 'easy_slide_func' );

//enqueue JS file
function easy_everything_enqueue() {
  wp_enqueue_script( 'easy-everything-slider-js', plugins_url( 'easyeverythingslider.js', __FILE__ ), array('jquery'), '', true );
}
add_action( 'wp_enqueue_scripts', 'easy_everything_enqueue' );

// add button to post/page editor
function add_easy_slider_button() {
    global $typenow;
    // check user permissions
    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
    return;
    }
    // verify the post type
    if( ! in_array( $typenow, array( 'post', 'page' ) ) )
        return;
    // check if WYSIWYG is enabled
    if ( get_user_option('rich_editing') == 'true') {
        add_filter("mce_external_plugins", "easy_slider_add_tinymce_plugin");
        add_filter('mce_buttons', 'easy_slider_register_button');
    }
}
add_action('admin_head', 'add_easy_slider_button');

function easy_slider_add_tinymce_plugin($plugin_array) {
    $plugin_array['easy_slider_button'] = plugins_url( 'easysliderbutton.js', __FILE__ );
    return $plugin_array;
}

function easy_slider_register_button($buttons) {
   array_push($buttons, "easy_slider_button");
   return $buttons;
}
