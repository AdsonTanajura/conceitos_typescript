import express, { response } from "express";
import { heloWord } from "./routes";

const app = express();

app.get('/', heloWord);

app.listen(3333);

//export default app;