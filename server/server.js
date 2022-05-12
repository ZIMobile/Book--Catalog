import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const Books = require("./data/books");

function delay(request, response, next) {
  const timeout = setTimeout(() => {
    next();
    clearTimeout(timeout);
  }, 2000);
}

dotenv.config();
const app = express();

app.use(cors());
app.use(delay);

const port = process.env.PORT;

app.get("/books", paginatedResults(Books), (req, res) => {
  res.json(res.result);
});

function paginatedResults(data) {
  return async (req, res, next) => {
    const result = {};
    let filteredData = data;

    const searchValue = req.query.search || "";
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (searchValue) {
      filteredData = data.filter((d) => {
        return d.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    }

    const paginatedData = filteredData.slice(startIndex, endIndex);
    result.paginatedData = paginatedData;
    result.total = filteredData.length;
    res.result = result;
    next();
  };
}

app.listen(port, () => {
  console.log(`Catalog app listening on port ${port}!`);
});
