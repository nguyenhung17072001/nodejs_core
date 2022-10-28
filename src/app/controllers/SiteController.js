const Course = require('../models/Course')

class NewsControllers {
    // [Get] /news
    index(req, res) {
        /* res.json({
            name: 'test'
        }) */
        //res.render('home');
        Course.find({}, (err, courses)=> {
            if(!err) {
                res.json(courses);
                
            } else {
                res.status(400).json({error: "Có lỗi"})
            }
        })
    }
}

module.exports = new NewsControllers;

