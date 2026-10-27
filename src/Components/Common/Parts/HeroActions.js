/**
 * Call-to-action row.
 *
 * Renders the primary button. Additional buttons should be added here as extra
 * children of `.bph-hero__actions`; `style.scss` already carries a
 * `.bph-btn--secondary` variant for them.
 *
 * @param {Object}  props
 * @param {Object}  props.btn        Normalized button data.
 * @param {string}  props.btn.text   Button label.
 * @param {string}  props.btn.link   Sanitized href.
 * @param {boolean} props.btn.newTab Whether to open in a new tab.
 */
const HeroActions = ({ btn }) => <div className='bph-hero__actions'>
	<a
		className='bph-btn bph-btn--primary'
		href={btn?.link}
		target={btn?.newTab ? '_blank' : undefined}
		rel={btn?.newTab ? 'noopener noreferrer' : undefined}
	>
		{btn?.text}
	</a>
</div>;
export default HeroActions;
