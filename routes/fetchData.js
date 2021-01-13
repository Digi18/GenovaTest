const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dotEnv = require('dotenv').config();

const dburl = process.env.URL;

router.get('/products',(req,res) => {

    MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {
     
        if(err){
            console.log("error",err);
        }
        else{
            const coll = client.db("Genova").collection("MyProducts");
            coll.find({}).toArray((err,result) => {

                if(err){
                    console.log("Error",err);
                }
                else{
                    output = result.map(r => ({'name':r.name,'price':r.price,
                             'product_image':r.product_image}));

                    res.json(output);

                    client.close(); 
                }
            });
          }
     });
});

module.exports = router;
