const express = require("express");
const path = require("path");
const axios = require("axios");

const getTweets = async (user) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=20`,
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANyA8QAAAAAA8PwwB3%2FVtJhpPZUcyKotVnaPdFw%3DLRtwTbOJqJbzDso0bPqp2tLgqGylloVT6rZF4S2KIaAp6iyvGV'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.get("/api/tweets/:user", async (req, res) => {
    res.json(await getTweets(req.params.user));
});

app.listen(port, () => console.log(`App running on port ${port}`));
