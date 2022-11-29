import "./App.css";
import {ContextProvider} from "./Context";
import React from "react";
import Linker from "./components/Linker";
import linkMappings from "./components/LinkerPropsData";

function App() {
	return (
		<div>
			<React.StrictMode>
				<ContextProvider>
					<Linker linkMappings={linkMappings}/>
				</ContextProvider>
			</React.StrictMode>
		</div>
	);
}

export default App;
