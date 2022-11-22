import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"
import connect from './db.js'


const app=express()
const port=3000
app.use(bodyParser.json())
var tempStorage=[]

app.get('/saveItem', async (req, res) => {
    let db = await connect() 
    let cursor = await db.collection("saveItem").find()
    let results = await cursor.toArray()
    res.json(results)
   })