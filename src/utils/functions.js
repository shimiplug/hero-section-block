import { produce } from 'immer';

/**
 * Immutably sets a deeply nested value on an attribute object.
 *
 * Used by the inspector controls so a nested update stays a one-liner:
 * `setAttributes({ data: updateData(data, value, 'btn', 'text') })`.
 * Missing intermediate objects are created on the way down, which means a
 * control can write to a key that older saved attributes never had.
 *
 * @param {Object}    attr  Object to update.
 * @param {*}         value New value.
 * @param {...string} props Path to the key being set.
 * @return {Object} A new object with the value applied.
 */
export const updateData = (attr, value, ...props) => {
	if (props.length === 0) {
		return value;
	}

	const [currentProp, ...remainingProps] = props;

	if (remainingProps.length === 0) {
		return produce(attr, draft => {
			draft[currentProp] = value;
		});
	}

	return produce(attr, draft => {
		if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
			draft[currentProp] = {};
		}

		draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
	});
};
