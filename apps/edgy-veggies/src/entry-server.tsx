import express from "express"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { renderToStringAsync } from "solid-js/web";
import App from "./App";


const app = express(); 
const port = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicPath = join(__dirname, "..", "client");
console.log("public path", publicPath);

app.use(express.static(publicPath));

app.get("*", async (req, res) => {
    let html;
    try {
      html = await renderToStringAsync(() => <App />);
    } catch (err) {
      console.error(err);
    } finally {
        res.setHeader("Content-Type", "text/html");
      res.end(html);
    }
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));