
class NewsControllers {
    // [Get] /news
    index(req, res) {
        res.render('home');
    }
}

module.exports = new NewsControllers;

