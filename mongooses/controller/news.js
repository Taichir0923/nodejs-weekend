const News = require('../model/news');
const Comment = require('../model/comment');
const comment = require('../model/comment');
class NewsController {
    async registerNews(req, res) {
        const { title } = req.body;
        try {
            const news = new News({
                title: title,
                publishedBy: req.user._id
            });

            const result = await news.save();
            res.json({
                message: 'success',
                result: result
            })
        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }

    async getSingleNews(req, res) {
        const { id } = req.params;
        try {
            News.findById(id)
                .lean()
                .populate('publishedBy' , "firstname lastname")
                .populate('comments')
                .exec((err , result) => {
                if(!err){
                    res.json(result);
                } else {
                    throw new Error("aldaa arlaa")
                }
            })
        } catch (err) {

        }
    }

    async newComment(req, res){
        const {comment} = req.body;
        const {id} = req.params;
        try {
            const new_comment = new Comment({
                comment: comment,
                writtenBy: req.user._id,
                news: id
            });
            const result = await new_comment.save();
            const updateNews = await News.findById(result.news);
            updateNews.addComment(result._id);
            await updateNews.save();
            res.json('done!');
        } catch (err) {

        }
    }
}

module.exports = new NewsController();