import { useBlockProps } from '@wordpress/block-editor';

import useAttachmentImage from '../../hooks/useAttachmentImage';
import HeroSection from '../Common/HeroSection';
import Style from '../Common/Style';
import Settings from './Settings/Settings';

/**
 * Editor view of the block.
 *
 * Resolves the background image from the Media Library and hands the URL to the
 * shared `HeroSection`, so the preview matches the frontend exactly.
 */
const Edit = (props) => {
	const { attributes, setAttributes, clientId } = props;

	const { imageUrl } = useAttachmentImage(attributes?.data?.imageId);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div {...useBlockProps()}>
			<Style attributes={attributes} id={`block-${clientId}`} />

			<HeroSection attributes={attributes} imageUrl={imageUrl} />
		</div>
	</>;
};
export default Edit;
