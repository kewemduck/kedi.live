const express = require("express");
const ejs = require("ejs");
const app = express();
app.listen(process.env.PORT || 3000)
console.log("Server is running on port 3000");

app.engine(".ejs", ejs.__express);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(`${__dirname}/views/`));

app.get("/", (req, res) => {
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

app.get("/dc", (req, res) => {
    res.redirect("https://discord.gg/6pf7ntfQxq")
});