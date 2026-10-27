import { clamp, sanitizeHref, toString } from './sanitize';

/**
 * Attribute normalization layer.
 *
 * The block is server rendered and hydrated on the client, so a post can hold
 * attributes saved by any previous version of the plugin. Rather than sprinkling
 * optional chaining through the components, every consumer reads attributes
 * through the helpers below. They fill in missing keys with the values the block
 * has always behaved as if it had, which keeps old content rendering exactly the
 * way it did before.
 *
 * When a new feature adds an attribute, give it a default here that reproduces
 * today's behaviour and existing posts keep working untouched.
 */

/*
 * `alignment` and `colors` are declared in block.json but nothing reads them —
 * they have never affected a render. They stay declared so attributes saved by
 * existing posts round-trip untouched; wiring them up now would change how
 * already-published heroes look, so a future feature should introduce its own
 * attribute rather than repurposing these.
 */

/** Overlay strength used before it became configurable. */
export const DEFAULT_OVERLAY = 0.55;

/** Base class of the hero element. */
export const HERO_BASE_CLASS = 'bph-hero';

/**
 * Normalizes the `data` attribute (content).
 *
 * @param {Object} attributes Raw block attributes.
 * @return {{title: string, des: string, imageId: number, btn: {text: string, link: string, newTab: boolean}}} Normalized content.
 */
export const getHeroData = (attributes) => {
	const data = attributes?.data || {};
	const btn = data?.btn || {};

	return {
		title: toString(data?.title),
		des: toString(data?.des),
		imageId: Number(data?.imageId) || 0,
		btn: {
			text: toString(btn?.text),
			link: sanitizeHref(btn?.link),
			// A missing `newTab` stays falsy: that is what shipped builds rendered.
			// New blocks get `true` from the block.json default of the whole
			// `data` object, so only partially written attributes land here.
			newTab: !!btn?.newTab
		}
	};
};

/**
 * Normalizes the `styles` attribute (presentation).
 *
 * Colors intentionally fall back to an empty string rather than a hard-coded
 * value: `Style` skips empty declarations, so the stylesheet in `style.scss`
 * stays in charge and nothing is overridden with a colour the user never chose.
 *
 * @param {Object} attributes Raw block attributes.
 * @return {{title: string, des: string, overlay: number, btn: {color: string, bg: string}}} Normalized styles.
 */
export const getHeroStyles = (attributes) => {
	const styles = attributes?.styles || {};
	const btn = styles?.btn || {};

	return {
		title: toString(styles?.title),
		des: toString(styles?.des),
		overlay: clamp(styles?.overlay, 0, 1, DEFAULT_OVERLAY),
		btn: {
			color: toString(btn?.color),
			bg: toString(btn?.bg)
		}
	};
};

/**
 * Builds the class list for the hero element.
 *
 * `bph-hero--bg-image` is applied unconditionally because that is what every
 * published hero already renders with, and `style.scss` hangs the light-on-dark
 * colour scheme off it. A future layout option should add a further modifier
 * here instead of replacing these.
 *
 * @param {Object} attributes Raw block attributes.
 * @return {string} Space separated class list.
 */
export const getHeroClassName = (attributes) => { // eslint-disable-line no-unused-vars
	return [HERO_BASE_CLASS, `${HERO_BASE_CLASS}--bg-image`].join(' ');
};
