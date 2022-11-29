import Home from "./Home";
import ManageEntities from "./ManageEntities";
import EditEntity from "./EditEntity";
import ChangeLanguage from "./ChangeLanguage";

const linkMappings = [
	{path: '/' , component: <Home/>},
	{path: 'ManageEntities' , component: <ManageEntities/>},
	{path: 'ManageEntities/EditEntity/:id' , component: <EditEntity/>},
	{path: 'ChangeLanguage' , component: <ChangeLanguage/>},
]

export default linkMappings;
