const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

// DB Connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(e => console.log("DB GOT OOpssss"));

// Middlewares

app.use(bodyParser.json()); // to use middlewares
app.use(cookieParser()); // to use middlewares
app.use(cors()); // to use middlewares

// My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", orderRoute);
// PORT
const port = process.env.PORT || 8000;
// Starting a server
app.listen(port, () => console.log(`Server is running on port ${port}`));
