import express from "express";
import config from "./config.json";
import bodyParser from "body-parser";
import fs from "node:fs/promises";
import to from "await-to-js";

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/frontend"));
app.use(bodyParser.urlencoded());

app.post("/upload", upload.array("files", 12), async (req: any, res, next) => {
  const { user } = req.body;
  if (!config.paths.includes(user)) {
    res.status(400).send({ error: "usuario no registrado" });
  }

  await to(fs.rmdir(`${__dirname}/frontend/${user}`));
  const [err] = await to(fs.mkdir(`${__dirname}/frontend/${user}`));
  if (err) {
    console.log("> Error creating folder === ", err);
  }

  for (const file of req.files) {
    await fs.copyFile(
      file.path,
      `${__dirname}/frontend/${user}/${file.originalname}`
    );
  }
  // req.files is array of `photos` files
  console.log("> 14 index.ts === req.user", req.body);
  console.log("> 14 index.ts === req.files", req.files);
  // req.body will contain the text fields, if there were any
  res.status(200).send({});
});

app.listen(3000, () => {
  console.log("> 10 index.ts === config", config);
  console.log("Server running on port 3000");
});
