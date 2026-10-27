import { __ } from '@wordpress/i18n';
import { BaseControl, ColorPicker, PanelBody, RangeControl } from '@wordpress/components';

import { DEFAULT_OVERLAY } from '../../../../utils/attributes';
import { updateData } from '../../../../utils/functions';

/**
 * Presentation settings.
 *
 * Colours are written into the `styles` attribute and turned into a scoped
 * stylesheet by `Components/Common/Style`. Leaving a colour unset is meaningful:
 * the rule is omitted and `style.scss` takes over.
 */
const Style = ({ attributes, setAttributes }) => {
	const { styles = {} } = attributes || {};

	const setStyle = (value, ...path) => setAttributes({ styles: updateData(styles, value, ...path) });

	return <>
		<PanelBody className='bPlPanelBody' title={__('Hero section Content', 'hero-section')} initialOpen={false}>
			<div style={{ marginBottom: '15px' }}>{__('Title Color', 'hero-section')}</div>
			<ColorPicker value={styles?.title} onChange={val => setStyle(val, 'title')} />

			<div style={{ marginBottom: '15px' }}>{__('Description Color', 'hero-section')}</div>
			<ColorPicker value={styles?.des} onChange={val => setStyle(val, 'des')} />

			<div style={{ marginBottom: '15px' }}>{__('Button Color', 'hero-section')}</div>
			<ColorPicker value={styles?.btn?.color} onChange={val => setStyle(val, 'btn', 'color')} />

			<div style={{ marginBottom: '15px' }}>{__('Button Background', 'hero-section')}</div>
			<ColorPicker value={styles?.btn?.bg} onChange={val => setStyle(val, 'btn', 'bg')} />
		</PanelBody>

		<PanelBody className='bPlPanelBody' title={__('Background', 'hero-section')} initialOpen={false}>
			<BaseControl help={__('Darkens the background image so the text stays readable.', 'hero-section')}>
				<RangeControl
					label={__('Overlay strength', 'hero-section')}
					value={undefined === styles?.overlay ? DEFAULT_OVERLAY : styles.overlay}
					onChange={val => setStyle(undefined === val ? DEFAULT_OVERLAY : val, 'overlay')}
					min={0}
					max={1}
					step={0.05}
				/>
			</BaseControl>
		</PanelBody>
	</>;
};
export default Style;
