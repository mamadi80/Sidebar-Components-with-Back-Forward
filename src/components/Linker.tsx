import React from "react";
import {Route, Routes} from "react-router-dom";
import {MemoryRouter as Router} from "react-router-dom";

type linkMapping = {
	path: string;
	component: any;
}

export default function Linker({linkMappings} : {linkMappings: linkMapping[]}) {
	const routes = linkMappings.map((linkMap) => {
		return <Route path={linkMap.path} element={linkMap.component}></Route>;
	})
	return (
		<Router>
			<Routes>
				{routes}
			</Routes>
		</Router>
	);
}
// todo comment folder structure
