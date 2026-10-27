import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, URLInput } from '@wordpress/block-editor';
import { Button, PanelBody, Spinner, TextControl, ToggleControl } from '@wordpress/components';

import useAttachmentImage from '../../../../hooks/useAttachmentImage';
import { updateData } from '../../../../utils/functions';

/**
 * Content settings.
 *
 * Every control writes through `updateData`, so a nested key can be set without
 * the caller having to rebuild the surrounding objects — and keys missing from
 * older saved attributes are created on write.
 */
const General = ({ attributes, setAttributes }) => {
	const { data = {} } = attributes || {};

	const setData = (value, ...path) => setAttributes({ data: updateData(data, value, ...path) });

	// Only the attachment ID is stored; the URL is resolved for the preview.
	const imageId = Number(data?.imageId) || 0;
	const { imageUrl, isResolving } = useAttachmentImage(imageId);

	return <PanelBody className='bPlPanelBody' title={__('Hero Section Data', 'hero-section')} initialOpen={false}>
		<TextControl
			label={__('Title', 'hero-section')}
			value={data?.title || ''}
			onChange={val => setData(val, 'title')}
		/>

		<TextControl
			label={__('Description', 'hero-section')}
			value={data?.des || ''}
			onChange={val => setData(val, 'des')}
		/>

		<TextControl
			label={__('Button Text', 'hero-section')}
			value={data?.btn?.text || ''}
			onChange={val => setData(val, 'btn', 'text')}
		/>

		{/* WP recommended URL control */}
		<div style={{ marginTop: 12 }}>
			<div style={{ fontSize: 12, opacity: 0.85, marginBottom: 6 }}>
				{__('Button URL', 'hero-section')}
			</div>

			<URLInput
				value={data?.btn?.link || ''}
				onChange={url => setData((url || '').trim(), 'btn', 'link')}
			/>

			<p style={{ marginTop: 6, fontSize: 12, opacity: 0.85 }}>
				{__('Prefer internal links where possible.', 'hero-section')}
			</p>
		</div>

		<div style={{ marginTop: 12 }}>
			<ToggleControl
				label={__('Open button in a new tab', 'hero-section')}
				checked={!!data?.btn?.newTab}
				onChange={val => setData(!!val, 'btn', 'newTab')}
			/>
		</div>

		{/* Image Upload / Select (Media Library only) */}
		<div style={{ marginTop: 16 }}>
			<div style={{ fontSize: 12, opacity: 0.85, marginBottom: 6 }}>
				{__('Background Image', 'hero-section')}
			</div>

			<MediaUploadCheck
				fallback={
					<p style={{ fontSize: 12, opacity: 0.85, margin: 0 }}>
						{__('You do not have permission to upload media.', 'hero-section')}
					</p>
				}
			>
				<MediaUpload
					allowedTypes={['image']}
					value={imageId || undefined}
					onSelect={(media) => {
						// MediaUpload can return an object or an array depending on settings.
						const item = Array.isArray(media) ? media?.[0] : media;

						// Store only the ID so the URL always comes from the Media Library.
						setData(Number(item?.id) || 0, 'imageId');
					}}
					render={({ open }) => (
						<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
							<Button variant='primary' onClick={open}>
								{imageId ? __('Change Image', 'hero-section') : __('Upload / Select Image', 'hero-section')}
							</Button>

							{imageId ? (
								<Button variant='secondary' isDestructive onClick={() => setData(0, 'imageId')}>
									{__('Remove', 'hero-section')}
								</Button>
							) : null}

							{/* Preview */}
							{imageId ? (
								<div style={{ display: 'flex', alignItems: 'center', minHeight: 56 }}>
									{isResolving ? (
										<Spinner />
									) : imageUrl ? (
										<img
											src={imageUrl}
											alt={__('Selected background image', 'hero-section')}
											loading='lazy'
											style={{
												width: 56,
												height: 56,
												objectFit: 'cover',
												borderRadius: 6,
												border: '1px solid rgba(0,0,0,0.12)'
											}}
										/>
									) : null}
								</div>
							) : null}
						</div>
					)}
				/>
			</MediaUploadCheck>

			<p style={{ marginTop: 8, fontSize: 12, opacity: 0.85 }}>
				{__('Select an image from the Media Library. External image URLs are not used.', 'hero-section')}
			</p>
		</div>
	</PanelBody>;
};
export default General;
