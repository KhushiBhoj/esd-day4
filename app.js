const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Heroku, now deployed");
})

app.listen(process.env.PORT || port, () => {
    console.log("listening 8080...");
});