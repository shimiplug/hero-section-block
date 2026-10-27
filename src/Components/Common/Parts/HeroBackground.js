/**
 * Background layer of the hero.
 *
 * Kept as a separate element (rather than a background on the section itself) so
 * the overlay gradient in `style.scss` can sit between the image and the content.
 *
 * @param {Object} props
 * @param {string} props.imageUrl Resolved image URL, empty for no image.
 */
const HeroBackground = ({ imageUrl = '' }) => <div
	className='bph-hero__bg'
	style={{ backgroundImage: imageUrl ? `url("${imageUrl}")` : '' }}
	aria-hidden='true'
/>;
export default HeroBackground;
