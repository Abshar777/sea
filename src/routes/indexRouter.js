const express=require("express");
const router=express.Router();
const productsDb=require('../db/products.json')
const volunteerDB=require('../db/volenteer.json');   


router.get('/',(req,res)=>{
    res.render("client/index")
})

router.get('/About',(req,res)=>{
    const volenteer=volunteerDB
    res.render("client/about",{volenteer:volenteer.teams})
})

router.get('/Contact',(req,res)=>{
    res.render("client/contact-us")
})

router.get('/Products',(req,res)=>{
    const products=productsDb
    res.render("client/shope",{products})
})

module.exports=router