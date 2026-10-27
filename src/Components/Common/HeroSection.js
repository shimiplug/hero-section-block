import { getHeroClassName, getHeroData, getHeroStyles } from '../../utils/attributes';
import HeroActions from './Parts/HeroActions';
import HeroBackground from './Parts/HeroBackground';
import HeroContent from './Parts/HeroContent';

/**
 * The hero markup, shared by the editor and the frontend.
 *
 * Purely presentational: it takes normalized attributes and an already resolved
 * `imageUrl`. Resolving that URL is the caller's job — `Edit` reads it from the
 * `core` store, the frontend gets it from `render.php` — which is what lets this
 * component render identically in both places.
 *
 * @param {Object} props
 * @param {Object} props.attributes Raw block attributes.
 * @param {string} props.imageUrl   Resolved background image URL.
 */
const HeroSection = ({ attributes, imageUrl = '' }) => {
	const data = getHeroData(attributes);
	const { overlay } = getHeroStyles(attributes);

	return <section className={getHeroClassName(attributes)} style={{ '--overlay': overlay }}>
		<HeroBackground imageUrl={imageUrl} />

		<div className='bph-hero__container'>
			<HeroContent title={data.title} des={data.des}>
				<HeroActions btn={data.btn} />
			</HeroContent>
		</div>
	</section>;
};
export default HeroSection;
