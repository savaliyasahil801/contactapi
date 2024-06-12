var model = require('../model/Model');

exports.addcon = async (req, res) => {
    try{
        var data = await model.create(req.body);
        res.status(200).json({
            message: data,
            status: "data add successfully"
        })
    }
    catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.viewcon = async (req,res) => {
    try{
        var data = await model.find();
        res.status(200).json({
            status: "data view success",
            message: data
        })
    }
    catch{
        res.status(200).json({
            status: 200,
            message: "data not found"
        })
    }
}

exports.updatecon = async (req,res) => {
    try{
        var id = req.params.id
        var data = await model.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status: "data update success",
            message: data
        })
    }
    catch{
        res.status(200).json({
            status: 200,
            message: "data not update"
        })
    }
}


exports.deletecon = async (req,res) => {
    try{
        var id = req.params.id
        var data = await model.findByIdAndDelete(id);
        res.status(200).json({
            status: "data delete success",
            message: data
        })
    }
    catch{
        res.status(200).json({
            status: 200,
            message: "data not delete"
        })
    }
}

exports.searchcon = async(req,res) => {
    try{
        var data = await model.find({name: req.body.name});
        res.status(200).json({
            status: "data search success",
            message: data
        })
    }
    catch{
        res.status(200).json({
            status: 200,
            message: "data not found"
        })
    }
}