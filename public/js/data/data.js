'use strict';

class Data {

	getCloudinaryParams() {
		return ajaxRequester.get('../../cloudinary-image-store.json')
	}
}
