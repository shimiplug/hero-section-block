<?php
/**
 * Server rendered wrapper for the Hero Section block.
 *
 * Only the wrapper is printed here; `view.js` hydrates it on the client. The
 * background image is resolved server side so the frontend does not need the
 * `core-data` store — the editor resolves the same attachment through it.
 *
 * @package HeroSection
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$id = wp_unique_id( 'heroSectionBlock-' );

$hero_section_image_id  = isset( $attributes['data']['imageId'] ) ? absint( $attributes['data']['imageId'] ) : 0;
$hero_section_image_url = $hero_section_image_id ? wp_get_attachment_image_url( $hero_section_image_id, 'full' ) : '';

$hero_section_wrapper_args = array(
	'id'              => $id,
	'data-attributes' => wp_json_encode( $attributes ),
);

if ( $hero_section_image_url ) {
	$hero_section_wrapper_args['data-image-url'] = esc_url( $hero_section_image_url );
}

$hero_section_wrapper_attributes = get_block_wrapper_attributes( $hero_section_wrapper_args );
?>
<div <?php echo wp_kses_post( $hero_section_wrapper_attributes ); ?>></div>
