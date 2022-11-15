import type { Component } from 'solid-js';
import Inventory from './components/Inventory';
import { OpenAPI, InventoryService, Item } from "../clover";
import { HydrationScript } from 'solid-js/web';



const App: Component = () => {
  return (
	<html lang="en">
		<head>
			<title>Edgy Veggies</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
			<HydrationScript/>
		</head>
		<body>
			<div id="app">
				<Inventory />
			</div>
		</body>
		<script type="module" src="js/entry-client.js" async></script>
	</html>
    
  );
};

export default App;