=== Hero Section for Block Editor ===
Contributors: camelplug26
Tags: hero-section, gutenberg, block-editor, banner, landing-page
Requires at least: 5.0
Tested up to: 7.0
Stable tag: 1.0.0
Requires PHP: 7.2
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.txt

Create responsive and customizable hero sections using the WordPress block editor.

== Description ==

Hero Section for Block Editor is a lightweight WordPress plugin that allows you to create clean, responsive hero sections directly inside the Gutenberg editor.

The plugin is designed to follow WordPress best practices and integrates seamlessly with the block editor, making it easy to add hero banners with headings, background images, and call-to-action buttons without writing any code.

All images are selected from the WordPress Media Library, ensuring compatibility with WordPress.org plugin guidelines.

= Key Features =
* Fully responsive hero sections.
* Background images selected from the Media Library.
* Custom headings and descriptions.
* Call-to-action button support.
* Lightweight and performance-friendly.
* SEO-friendly structure.
* No external or remote dependencies.

== Installation ==

1. Upload the plugin folder to the `/wp-content/plugins/` directory, or install the plugin directly from the WordPress Plugins screen.
2. Activate the plugin through the “Plugins” menu in WordPress.
3. Open the Block Editor and insert the **Hero Section** block.

== Development / Build ==

This plugin uses modern JavaScript tooling and follows WordPress block development standards.

= Source Code =
The original, human-readable source code is located in the `src/` directory.

= Build Instructions =
1. Make sure Node.js and npm are installed.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to generate the production files in the `build/` directory.
4. Run `npm run test` to check the build against the compatibility fixtures in `tests/`.

= Tools Used =
* React / JSX
* @wordpress/scripts (Webpack, Babel)

== Frequently Asked Questions ==

= How do I add a Hero Section? =
Open the WordPress Block Editor, click the block inserter, and search for “Hero Section”.

= Does the plugin use external images or scripts? =
No. All images are selected from the WordPress Media Library, and no external or remote assets are loaded.

== Screenshots ==

1. Hero Section block settings in the editor.

== Changelog ==

= 1.0.0 =
* Initial release.

== Upgrade Notice ==

= 1.0.0 =
Initial release of the plugin.
