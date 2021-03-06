const express = require('express');
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
    name: "Leo",
    avatar: "https://github.com/leonardocostag.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = []

// req, res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {

    const job = req.body
    job.createdAt = Date.now()

    jobs.push(job)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;