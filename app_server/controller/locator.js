module.exports.homepage=function(req,res)
{
    res.render('home',{title:'Movie Review'});
};
module.exports.locationinfo=function(req,res)
{
    res.render('location',{title:'Location'});
};
module.exports.addReview=function(req,res)
{
    res.render('review',{title:'Review'});
};