import express from 'express'
import { pgPool } from './pg_connection.js'
import { json } from 'stream/consumers'

const app = express()
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log("Server is running now!")
})

try{
    console.log('Database connected')
       
}catch(e){
    console.log(e.message); 
}

//getting all movies
app.get("/movies", async(req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM movies');
        res.json(result.rows);
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

//getting all reviews
app.get("/movie_review", (req, res) => {
    res.send('reviews here')
})

//getting all genres
app.get("/genres", async(req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM genres');
        res.json(result.rows);
           
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

//getting all users
app.get("/users", async (req, res) => {
    try{
        const result =  await pgPool.query('SELECT * FROM users');
        res.json(result.rows);
           
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

//adding new movie
app.post("/movies", async(req, res) => {

    const mname = req.body.movie_name
    const year = req.body.release_year
    const genre = req.body.genre_name

    try{
        await pgPool.query(
            'INSERT INTO movies (movie_name, release_year, genre_name) VALUES ($1, $2, $3)', 
            [mname, year, genre]
        );
        res.end();
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

//deleting any movie by id
app.delete("/movies", async(req, res) => {

    const movieid = req.body.movie_id

    try{
        await pgPool.query(
            'DELETE FROM movies WHERE movie_id = $1', 
            [movieid]
        );
        res.end();
    }catch(e){
        res.status(400).json({e: e.message});
    }
})

//add new genre to genres table
app.post("/genres", async(req, res) => {

    const genre = req.body.genres

    try{
        await pgPool.query(
            'INSERT INTO genres (genre_name) VALUES ($1)', 
            [genre]
        );
        res.end();
    }catch(e){
        res.status(400).json({e: e.message});
    }
})