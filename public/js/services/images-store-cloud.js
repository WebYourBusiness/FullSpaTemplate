const data = new Data();
const imagesStoreCloud = {};

data.getCloudinaryParams()
	.then((params) => {
		imagesStoreCloud.params = {
			CLOUDINARY_URL: params.data.CLOUDINARY_URL,
			CLOUDINARY_UPLOAD_PRESET: params.data.CLOUDINARY_UPLOAD_PRESET
		}
	});
