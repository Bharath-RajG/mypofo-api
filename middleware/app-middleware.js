module.exports.logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

module.exports.notFound = (req,res,next) => {
    res.status(404).json({message:'URL not found'})
}

module.exports.error = (err,req,res,next)=>{
   console.log(err)
    res.status(500).json({message: err.msg})
}