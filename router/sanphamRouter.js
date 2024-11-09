var express = require('express')
var sanpham = require('../model/sanpham')
var app = express.Router();

//them sanpham
app.post('/sanpham',async(req,res)=>{
    const name = req.body.name;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const status = req.body.status;
    const image = req.body.image;
    const description = req.body.description;
    const id_danhmuc = req.body.id_danhmuc
    const data ={ name, quantity,price,status,image,description,id_danhmuc}
    const u = new sanpham(data);
    try {
        await u.save();
        res.send(u);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = app;