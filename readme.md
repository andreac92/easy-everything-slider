# Easy Everything Slider Readme

This plugin allows you to insert sliders into your posts and pages via shortcode. Each slide can contain any HTML content, and is linkable through a hashtagged URL. Optionally, you can provide an additional navigational menu to link to each individual slide.

Note: Requires jQuery

## Installing the plugin
Upload the "Easy Everything Slider Plugin" folder to the `/wp-content/plugins` directory, then activate the plugin in the **Plugins** menu of Wordpress.

## Adding a Slider to a Post/Page
Look for the **Add a slider** button on the editor toolbar of your post or page. Click this, and fill in the number of slides you want in the slider (you can add/remove slides later).

Each slide is indicated by the shortcode `[easy_slide id="slideX"] [/easy_slide]` where `X` is the slide number. This id is the name of the slide that will go in the hashtagged url as such: `your-site.com/#slideX`. You can change each id to anything you want, or leave as is.

Replace `SLIDE NUMBER X CONTENT HERE` with the content you want for each slide -- images, text, html elements, other shortcodes, etc. You can delete a slide by deleting the entire enclosing `[easy_slide]` shortcodes, and you can add a slide by adding in another `[easy_slide]` set as shown. Just make sure the `[easy_slider_container]` shortcodes enclose all the slides.

## Adding the Optional Nav Menu
You can have another navigational menu that links to each slide individually. You can either create a Wordpress menu or create a menu a bit more manually with HTML. 

### With a Wordpress menu
Create a wordpress menu, or add to an existing one by placing the page/post on which the slider appears into the menu. In the **CSS** field for the post/page, add the class `easy-side-menu`. Make sure this menu appears ONLY on the same page your slider does.

Indented underneath the page/post for your slider, drag "links" to the menu, one for each slide (make sure they're sublinks to your page/post). The title of the link is whatever you want to name your slide. The url will be the slide's id from the shortcode with a hashtag, such as #slide2. 

### With HTML
This method gives you more flexibility to use images/icons for your menu. Wherever you want the menu to appear (you can add it in the post/page editor or in a theme file), add an unordered list with the class `easy-side-menu`. The list items will be anchor tags that link to the slide id from the shortcode, with a hashtag. Below is an example:
```html
<ul class="easy-side-menu">
  <li><a href="#slide1"><img src="icon1.png"></a></li>
  <li><a href="#slide2"><img src="icon2.png"></a></li>
  <li><a href="#slide3"><img src="icon3.png"></a></li>
</ul>
```

## Styling the Slider
You can style the slider container with the class `easy-everything-slider`, and the slides with the class `easy-slider-child`.

The next/previous/show all are contained in a div with class `easy-slider-nav`. Each link is an anchor tag, with the classes `easy-prev`, `easy-next` and `easy-showall` respectively.

Disabled previous/next links are styled with class `disabled-nav-link`, and highlighted menu items in the optional menu are styled with `easy-highlight`.

## Without Wordpress
You can use this slider without Wordpress, and have more flexibility by editing the HTML/code for your own needs if you want. See the code at its Codepen page.
