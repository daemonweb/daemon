import express from "express"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { renderToStream } from "solid-js/web";
import App from "./App";


const app = express(); 
const port = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicPath = join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => renderToStream(() => <App />).pipe(res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));