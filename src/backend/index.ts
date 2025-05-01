import express from "express";

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/frontend"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
