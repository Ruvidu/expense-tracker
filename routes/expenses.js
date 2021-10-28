const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const schema = mongoose.Schema

const expenseSchema = new schema({
    name: String,
    exDate: String,
    cost: Number
})

const expenseModel = mongoose.model('expenses',expenseSchema)

router.get('/test' , (req,res)=>{
    res.end('Hello world')
})

router.post('/addexpense', (req,res)=>{
    const newExpense = new expenseModel({
        name: req.body.name,
        exDate: req.body.exDate,
        cost: req.body.cost
    })
    newExpense.save(function(err){
        
        console.log(err)
        if(!err){
            res.send('New Expense added successfully')
        }else{
            res.send(err)
        }
    })
})

router.get('/getexpenses' , (req,res)=>{
    expenseModel.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/deleteexpense' , (req,res)=>{
    expenseModel.findOneAndDelete({_id:req.body.id} , (err)=>{
        if(!err){
            res.send('Expense Deleted')
        }else{
            res.send(err)
        }
    })
})

router.post('/updateexpense', (req,res)=>{
    expenseModel.findOneAndUpdate({_id:req.body.exId},{
        name:req.body.exName,
        cost:req.body.exCost,
        exDate:req.body.exDate
    },(err)=>{
        if(!err){
            res.send("Expense updated successfully")
        }else{
            res.send(err)
        }

    })
})

router.post

module.exports = router