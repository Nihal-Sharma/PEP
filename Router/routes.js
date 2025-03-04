const express = require('express');
const { create , del , getAll , update , details ,getbycity  , getDetails}  = require('../Controller/HospitalController');

const Router = express.Router();

Router.route("/hospitals/create")
.post(create)

Router.route("/hospitals/getAll")
.get(getAll)

Router.route("/hospitals")
.get(getbycity)

Router.route("/hospitals/delete")
.delete(del)

Router.route("/hospitals/update")
.put(update)

Router.route("/hospitals/details")
.post(details)

Router.route("/hospitals/getDetails")
.post(getDetails)
.get((req,res)=>{res.json("hello")})



module.exports = Router;