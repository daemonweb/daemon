import type { Component } from "solid-js";
import { HydrationScript, NoHydration } from "solid-js/web";
//import { Link, RouteHOC, RouterContext } from "./router";
import Inventory from "./components/Inventory";

// import stub as main package to allowing fetch as you load


const App: Component = () => {
  return (
    <html lang="en">
      <head>
        <title>🔥 Solid SSR 🔥</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <HydrationScript />
      </head>
      <body>

        <Inventory />

        
      
      </body>
      <script type="module" src="/entry-client.js"></script>  
    </html>
  );
};

export default App;