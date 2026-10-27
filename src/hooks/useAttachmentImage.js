import { useSelect } from '@wordpress/data';

/**
 * Resolves a Media Library attachment to a displayable image URL.
 *
 * Editor-only: it reads the `core` data store, which is not registered on the
 * frontend. The frontend gets its URL from `render.php` instead, so this hook is
 * never reached there — but it still guards against a missing store so the block
 * degrades to "no image" rather than throwing.
 *
 * @param {number} imageId Attachment ID, `0` for none.
 * @return {{imageUrl: string, isResolving: boolean}} Resolved URL and loading state.
 */
const useAttachmentImage = (imageId) => {
	const id = Number(imageId) || 0;

	return useSelect(
		(select) => {
			if (!id) {
				return { imageUrl: '', isResolving: false };
			}

			const core = select('core');

			if (!core) {
				return { imageUrl: '', isResolving: false };
			}

			// Wait for the request to settle so the preview does not flicker.
			const isResolving = !core.hasFinishedResolution('getMedia', [id]);

			if (isResolving) {
				return { imageUrl: '', isResolving: true };
			}

			const media = core.getMedia(id);

			const imageUrl =
				media?.source_url ||
				media?.media_details?.sizes?.full?.source_url ||
				media?.media_details?.sizes?.large?.source_url ||
				'';

			return { imageUrl, isResolving: false };
		},
		[id]
	);
};

export default useAttachmentImage;
