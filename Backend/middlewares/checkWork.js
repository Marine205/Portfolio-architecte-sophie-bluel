module.exports = (req, res, next) => {
	const title = req.body?.title?.trim();
	const categoryId = parseInt(req.body?.category);
	const userId = req.auth.userId;
	if (title && categoryId > 0 && userId > 0 && req.file) {
		const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
		req.work = {title, categoryId, userId, imageUrl}
		next()
	} else {
		return res.status(400).json({error: new Error("Bad Request")})
	}
}
