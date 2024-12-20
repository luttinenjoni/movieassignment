import express from 'express'
import { pgPool } from './pg_connection.js'
import { json } from 'stream/consumers'

const app = express()

app.listen(3001, () => {
    console.log("Server is running now!")
})

try{
    console.log('Database connected')
       
}catch(e){
    console.log(e.message); 
}

app.get("/movies", async(req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM movies');
        res.json(result.rows);
           
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

app.get("/movie_review", (req, res) => {
    res.send('reviews here')
})

app.get("/genres", async(req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM genres');
        res.json(result.rows);
           
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

app.get("/users", async (req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM users');
        res.json(result.rows);
           
    }catch(e){
        res.status(400).json({e: e.message});
    }
})