import { render } from '@testing-library/react';
import Linker from "../Linker";
import ManageEntities from "../ManageEntities";
import EditEntity from "../EditEntity";
import ChangeLanguage from "../ChangeLanguage";
import Home from "../Home";
import {ContextProvider} from "../../Context";
import React from "react";
import Actor from "../../testLibraries/Actor";
import User from "../../testLibraries/User";
import GoToManageEntities from "./task/GoToManageEntities";
import FindManageEntitiesHeading from "./questions/FindManageEntitiesHeading";
import GoToChangeLanguage from "./task/GoToChangeLanguage";
import FindChangeLanguageHeading from "./questions/FindChangeLanguageHeading";
import nthEntityEquals from "./questions/ContainValueInEntityRows";
import GoToEditEntities from "./task/GoToEditEntities";
import GoBack from "./task/GoBack";
import BeInHomePage from "./questions/BeInHomePage";
import editEntityWithValues from "./task/RewriteEntityValues";
import editEntityWithValuesThenDiscard from "./task/RewriteEntityValuesThenDiscard";
import GoToHome from "./task/GoToHome";
import GoBackToManageEntitiesFromEditEntities from "./task/GoBackToManageEntitiesFromEditEntities";
import createNewEntity from "./task/CreateNewEntity";
import DeleteAnEntity from "./task/DeleteAnEntity";
import beBiggerThan from "./questions/beBiggerThan";
import beLessThan from "./questions/beLessThan";
import EditEntityBoxExists from "./questions/EditEntityBoxExists";
import goToManageEntities from "./task/GoToManageEntities";
import goToEditEntities from "./task/GoToEditEntities";

const linkMappings = [
	{path: '/' , component: <Home/>},
	{path: 'ManageEntities' , component: <ManageEntities/>},
	{path: 'ManageEntities/EditEntity/:id' , component: <EditEntity/>},
	{path: 'ChangeLanguage' , component: <ChangeLanguage/>},
]

const TestComponent = () => {
	return(<Linker linkMappings={linkMappings}/>);
};

describe('routing tests',() => {
	let user: Actor;

	beforeEach(() => {
		user = new User('Mamadi');
		// render(<Context.Provider value={{items: [],setItems:() => null, resetItems: () => {}}}>
		// 		<TestComponent />
		// </Context.Provider>); // todo comment remove comment
		render(<ContextProvider>
			<TestComponent />
		</ContextProvider>);
	})

	it('Display ManageEntities page', async() => {
		await user
			.attemptsTo(GoToManageEntities)
			.expectsTo(FindManageEntitiesHeading)
			.run();
	});

	it('Display ChangeLanguage page', async() => {
		await user
			.attemptsTo(GoToChangeLanguage)
			.expectsTo(FindChangeLanguageHeading)
			.run();
	});

	it('Initial values must be in displayed entities', async() => {
		await user
			.attemptsTo(GoToManageEntities)
			.expectsTo(nthEntityEquals(0, {name:'Kent',age: 35}))
			.run();
	});

	it('Go to EditEntity page by clicking on an entity', async () => {
		await user
			.attemptsTo([GoToManageEntities,GoToEditEntities(1)])
			.expectsTo(EditEntityBoxExists)
			.run();
	});

	it('Back button test', async() => {
		await user
			.attemptsTo([GoToManageEntities,GoBack])
			.expectsTo(BeInHomePage)
			.run();
	});

	it('Edit entity and save it', async () => {
		const index = 0;
		const entity = {name:'Gholi',age:400};
		await user
			.attemptsTo([GoToManageEntities,editEntityWithValues(index, entity)])
			.expectsTo(nthEntityEquals(index, entity))
			.run();
	});

	it('Edit entity and discard it', async () => {
		const index = 2;
		const entity = {name:'Hossein',age:20};
		await user
			.attemptsTo([GoToManageEntities,editEntityWithValuesThenDiscard(index, entity)])
			.expectsTo(nthEntityEquals(index, {name:'Jason',age:45}))
			.run();
	});

	it('Go to Home page from EditEntity page', async () => {
		await user
			.attemptsTo([goToManageEntities,goToEditEntities(0),GoToHome])
			.expectsTo(BeInHomePage)
			.run();
	});

	it('Create new Entity', async () => {
		const entity = {name:'Mamad', age:22};
		const size1 = 3;
		await user
			.attemptsTo([GoToManageEntities,createNewEntity(entity)])
			.expectsTo(beBiggerThan(size1))
			.run();
	});

	it('Delete an Entity', async () => {
		const index = 2;
		const size1 = 4;
		await user
			.attemptsTo([GoToManageEntities,DeleteAnEntity(index)])
			.expectsTo(beLessThan(size1))
			.run();
	});

});
