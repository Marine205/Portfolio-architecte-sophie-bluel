const multer = require('multer')

const MIME_TYPE = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
	'image/webp': 'webp',
}

const storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './images')
	},
	filename:  (req, file, callback) => {
		const filename = file.originalname.split(' ').join('_')
		const filenameArray = filename.split('.')
		filenameArray.pop()
		const filenameWithoutExtention = filenameArray.join('.')
			const extension = MIME_TYPE[file.mimetype]
		callback(null, filenameWithoutExtention + Date.now() + '.' + extension)
	}
})

// Only accept images: anything else would be served back from /images
const fileFilter = (req, file, callback) => callback(null, file.mimetype in MIME_TYPE)

module.exports = multer({storage, fileFilter}).single('image')
