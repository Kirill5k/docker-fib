import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import valueService from "./services/valuesService";
import keys from "./keys";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req, res) => res.json({status: "app running"}));

app.get("/values", (req, res) =>
  valueService.getAll().then(values => res.json({values}))
);
app.get("/values/current", (req, res) =>
  valueService.getCurrent().then(values => res.json({values}))
);
app.post("/values", ({body}, res) =>
  valueService
    .calculate(parseInt(body.index))
    .then(() => res.status(201).json({status: "created"}))
    .catch(({ status = 500, message }) => res.status(status).send(message))
);

app.listen(keys.serverPort, () => console.log(`listening on ${keys.serverPort}`));
