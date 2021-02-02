const e = require('express')
const express = require('express')
const router = express.Router()

router.get('/test',(req,res)=>{
    res.json({'msg':'wefwregt'})
}) 

module.exports = router;