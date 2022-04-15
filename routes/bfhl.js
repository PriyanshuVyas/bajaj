const express = require('express')
const isNumber = require('../utils/Utils')
const router = express.Router();


router.post(
    '/bfhl',
    (req,res)=>{
        var response = {
            is_success: false
			user_id:"Priyanshu_vyas_23022002",
            roll_number:"0827IT191088",
            email:"vyas.priyanshu23@gmail.com",
            numbers: [],
            alphabets: [],
            
        };
        try{
            const {data} = req.body;
            if(!data){
                throw new Error("data not found!");
            }

            const nums = [];
            const alphabets = [];
            for (const item of data){
                if(isNumber(item)){
                    nums.push(item);
                } else {
                    alphabets.push(item);
                }
            }
            response.numbers = nums;
            response.alphabets = alphabets
            response.is_success = true;
            res.json(response);
        }catch(err){
            response.error = err.message;
            res.status(500).json(response);
        }
    }
)
module.exports = router;