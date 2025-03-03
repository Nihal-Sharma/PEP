const Hospitals = require('../Model/model')

async function create (req ,res){
    try{
        await Hospitals.create({
            name : req.body.name,
            city : req.body.city,
            img : req.body.img,
            spec : req.body.spec,
            rating : req.body.rating,
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
    const _id = req.query.city;
    const data = await Hospitals.find({city : city})
    return res.json(data)
}

async function update(req,res){}

async function details(req,res){}



module.exports = {create , del , getAll , update , details , getbycity}