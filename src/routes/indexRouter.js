const express=require("express");
const router=express.Router();
const productsDb=require('../db/products.json')


router.get('/',(req,res)=>{
    res.render("client/index")
})

router.get('/About',(req,res)=>{
    res.render("client/about")
})

router.get('/Contact',(req,res)=>{
    res.render("client/contact-us")
})

router.get('/Products',(req,res)=>{
    const products=productsDb
    console.log(products)
    res.render("client/shope",{products})
})

module.exports=router