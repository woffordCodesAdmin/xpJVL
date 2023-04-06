require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("RoutesInitialized()");
});
mongoose.connect();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("connected 2monGo.");
});
// ----------------------- [Middleware]

app.get("/", (req, res) => {});
// ---------------> [Dashboard]

app.get("/sneakers", (req, res) => {});
// ---------------> [All Sneakers]

app.get("/sneakers/new", (req, res) => {});
// ---------------> [New]

app.post("/sneakers", (req, res) => {});
// ----------------> [Create]

app.get("/sneakers/:id/edit", (req, res) => {});
// ---------------> [Edit]

app.put("/sneakers/:id", (req, res) => {});
// ---------------> [Update]

app.delete("/sneakers/:id", (req, res) => {});
// ---------------> [Delete]

app.get("/sneakers/seed", (req, res) => {});
// ---------------> [Seed]

app.get("sneakers/:id", (req, res) => {});
// ---------------> [Show]

app.listen(PORT, () => {
  console.log(`Currently Listening on PORT ${PORT}`);
});
