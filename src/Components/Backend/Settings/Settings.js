import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

/**
 * Inspector panels, split into a General (content) and a Style tab.
 *
 * A new group of settings belongs in one of the two existing tab components, or
 * as a third entry in `generalStyleTabs` with a matching branch below.
 */
const Settings = ({ attributes, setAttributes }) => {
	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel wp-block-hero-section-hero-section' activeClass='activeTab' tabs={generalStyleTabs}>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
					</>
				}
			</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;
