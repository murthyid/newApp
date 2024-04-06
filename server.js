const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//routes
const userRoute = require("./routes/UserRoute");

const port = process.env.PORT || 3500;
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h2>Welcome to first app</h2>");
});
app.use("/api/users", userRoute);

app.listen(port, () => console.log(`server listnening on ${port}`));
