/**
 * Value sanitizers shared by the editor and the frontend.
 *
 * Everything here must be safe to call with `undefined`, so attributes saved by
 * older versions of the block never break a render.
 */

const SAFE_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];
const RELATIVE_PREFIXES = ['/', '#', '?'];

/**
 * Normalizes a user supplied URL into something safe to put in `href`.
 *
 * Relative URLs (`/about`, `#section`, `?q=1`) are kept as-is. Absolute URLs are
 * only kept when they use a protocol from `SAFE_PROTOCOLS`. Anything else — an
 * empty value, a malformed URL, a `javascript:` payload — falls back to `#`,
 * which is the value the block has always shipped as its default.
 *
 * @param {string} raw Raw link value.
 * @return {string} A safe href.
 */
export const sanitizeHref = (raw = '') => {
	const value = String(raw || '').trim();

	if (!value) {
		return '#';
	}

	if (RELATIVE_PREFIXES.some(prefix => value.startsWith(prefix))) {
		return value;
	}

	try {
		const url = new URL(value);

		return SAFE_PROTOCOLS.includes(url.protocol) ? url.href : '#';
	} catch {
		return '#';
	}
};

/**
 * Returns `value` when it is a non-empty string, otherwise `fallback`.
 *
 * @param {*}      value    Candidate value.
 * @param {string} fallback Value to use when the candidate is unusable.
 * @return {string} A usable string.
 */
export const toString = (value, fallback = '') => 'string' === typeof value ? value : fallback;

/**
 * Coerces a value into a number inside `[min, max]`.
 *
 * @param {*}      value    Candidate value.
 * @param {number} min      Lower bound.
 * @param {number} max      Upper bound.
 * @param {number} fallback Value to use when the candidate is not numeric.
 * @return {number} A number inside the given range.
 */
export const clamp = (value, min, max, fallback) => {
	const number = Number(value);

	if (!Number.isFinite(number)) {
		return fallback;
	}

	return Math.min(Math.max(number, min), max);
};
