import { createRoot } from 'react-dom/client';

import './style.scss';
import HeroSection from './Components/Common/HeroSection';
import Style from './Components/Common/Style';

/**
 * Hydrates every hero rendered by `render.php`.
 *
 * The background image URL is resolved server side and handed over on
 * `data-image-url`; the frontend never talks to the REST API for it.
 */
document.addEventListener('DOMContentLoaded', () => {
	const heroSectionEls = document.querySelectorAll('.wp-block-hero-section-hero-section');

	heroSectionEls.forEach((heroSectionEl) => {
		let attributes = {};

		try {
			attributes = JSON.parse(heroSectionEl.dataset.attributes || '{}') || {};
		} catch (error) {
			attributes = {};
		}

		const imageUrl = heroSectionEl.dataset.imageUrl || '';

		createRoot(heroSectionEl).render(
			<>
				<Style attributes={attributes} id={heroSectionEl.id} />

				<HeroSection attributes={attributes} imageUrl={imageUrl} />
			</>
		);

		heroSectionEl?.removeAttribute('data-attributes');
		heroSectionEl?.removeAttribute('data-image-url');
	});
});
