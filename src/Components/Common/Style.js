import { getHeroStyles } from '../../utils/attributes';

/**
 * Builds a single `selector { prop: value }` rule, skipping empty values so an
 * unset colour falls through to `style.scss` instead of emitting `color:undefined`.
 *
 * @param {string} selector CSS selector.
 * @param {Object} declarations Property/value pairs.
 * @return {string} A CSS rule, or an empty string when nothing is set.
 */
const rule = (selector, declarations) => {
	const body = Object.entries(declarations)
		.filter(([, value]) => '' !== value && undefined !== value && null !== value)
		.map(([property, value]) => `${property}:${value};`)
		.join('');

	return body ? `${selector}{${body}}` : '';
};

/**
 * Per-instance stylesheet.
 *
 * Rules are scoped by the block's wrapper id and written flat (`#id .class`)
 * rather than nested, which matches the specificity of the nested form while
 * also working in browsers without CSS nesting support.
 *
 * @param {Object} props
 * @param {Object} props.attributes Raw block attributes.
 * @param {string} props.id         Wrapper element id.
 */
const Style = ({ attributes, id }) => {
	const styles = getHeroStyles(attributes);
	const mainSl = `#${id}`;

	const css = [
		rule(`${mainSl} .bph-hero__title`, { color: styles.title }),
		rule(`${mainSl} .bph-hero__subtitle`, { color: styles.des }),
		rule(`${mainSl} .bph-btn--primary`, { color: styles.btn.color, background: styles.btn.bg })
	].join('');

	return <style dangerouslySetInnerHTML={{ __html: css }} />;
};
export default Style;
