
const express = require("express");


const PORT = process.env.PORT || 3001;
const app = express();
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("db"));

app.use(apiRouter);
app.use(htmlRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));