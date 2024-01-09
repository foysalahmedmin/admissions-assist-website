/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
const cluster = require("cluster");
const os = require("os");
require("dotenv").config();
const compression = require("express-compression");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "5000mb" }));
app.use(express.urlencoded({ extended: true, limit: "5000mb" }));
app.use(express.static("../dist"));

app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const numCpu = os.cpus()?.length;

const PORT = 3005;

if (cluster?.isMaster) {
  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker} with ${code} & Signal killed`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} with worker ${process.pid}`);
  });
}
