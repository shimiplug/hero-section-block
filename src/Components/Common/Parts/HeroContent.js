/**
 * Text column of the hero.
 *
 * `children` renders after the copy, which is where the actions go today and
 * where any future element (badge, meta list, form) can be slotted in without
 * touching this component.
 *
 * @param {Object}          props
 * @param {string}          props.title Heading text.
 * @param {string}          props.des   Supporting text.
 * @param {React.ReactNode} props.children Rendered below the copy.
 */
const HeroContent = ({ title = '', des = '', children }) => <div className='bph-hero__content'>
	<h1 className='bph-hero__title'>{title}</h1>

	<p className='bph-hero__subtitle'>{des}</p>

	{children}
</div>;
export default HeroContent;
