const Hospitals = require('../Model/model')

async function create (req ,res){
    try{
        await Hospitals.create({
            name : req.body.name,
            city : req.body.city,
            img : req.body.img,
            spec : req.body.spec,
            rating : req.body.rating,
            desc : "",
           noDoctor : '',
        noDepartment : ''
        })
        return res.json("Hospital Added")
    }
    catch(err){
        console.log(err)
    }
    
}

async function del (req ,res){
    const _id = req.query._id;
    try{
        await Hospitals.deleteOne({_id : _id})
        return res.json("Deleted")
    }
    catch(err){console.log(err)}
}


async function getAll (req ,res){
    const data = await Hospitals.find({})
   
    return res.json(data)
}
async function getbycity (req ,res){
    const city = req.query.city;
    const data = await Hospitals.find({city : city})
    return res.json(data)
}

async function update(req,res){
    const _id = req.query._id;
    
    const data = await Hospitals.updateOne({_id : _id}, {$set :{
            name : req.body.name,
            city : req.body.city,
            img : req.body.img,
            spec : req.body.spec,
            rating : req.body.rating,
    }})
    
    return res.json("Done")
}

async function details(req,res){
    const _id = req.query._id;
    
    await Hospitals.updateOne({_id : _id} , {$set : {
        desc : req.body.desc,
        noDoctor : req.body.noDoctor,
        noDepartment : req.body.noDepartment
    }})
    return res.json("Updated")
}

async function getDetails(req, res){

    const data = await Hospitals.findOne({_id : req.body._id})
    return res.json(data)
}



module.exports = {create , del , getAll , update , details , getbycity , getDetails}