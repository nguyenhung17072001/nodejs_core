const Course = require('../models/Course')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class CourseControllers {
    // [Get] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then((course)=> {
            //console.log(course)
            res.render('courses/show', {
                course: mongooseToObject(course)
            })
        })
        .catch(next)

    }

    // [Get] /courses/create
    create(req, res, next) {
        res.render('courses/create');

    }
    //[POST] /courses/store
    store(req, res, next) {
        res.json(req.body);
    
    }



}

module.exports = new CourseControllers;

