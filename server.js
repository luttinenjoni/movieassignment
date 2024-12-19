import express from 'express'
import { pgPool } from './pg_connection.js'

const app = express()

app.listen(3001, () => {
    console.log("Server is running now!")
})


app.get("/movies", (req, res) => {
    res.send('movies here')
})

app.get("/movie_review", (req, res) => {
    res.send('reviews here')
})

app.get("/genres", (req, res) => {
    res.send('genres here')
})

app.get("/users", (req, res) => {
    res.send('users here')
})