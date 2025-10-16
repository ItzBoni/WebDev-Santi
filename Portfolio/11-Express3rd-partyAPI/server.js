const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const axios = require("axios");
const FormData = require("form-data");
const dotenv = require("dotenv");
const path = require("path");
const { error } = require("console");
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.ejs", { data: null, error: null });
})

// axios post
app.get("/retrieveCityInfo", (req, res) => {
  const location = req.query.cityName;
  console.log(location);

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(location) + "&appid=e7a298c6c06fec6cea46c1cd4591c467&units=metric";
  console.log(url);
  // GET requests do not have a body. Call axios.get with the URL (or use params).
  axios.get(url)
    .then((response) => {
      const data = response.data;

      // Accept both geocoding (array) and weather (object) responses.
      if (Array.isArray(data) && data.length > 0) {
        return res.render('index', { data: data, error: null });
      }
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        return res.render('index', { data: data, error: null });
      }
      console.log('No results');
      return res.status(404).render('index', { data: null, error: 'No results' });
    })
    .catch((err) => {
  console.log(err.code + ': ' + err.message);
  console.log(err.stack);
  res.status(500).render('index', { data: null, error: 'No results' });
    });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
