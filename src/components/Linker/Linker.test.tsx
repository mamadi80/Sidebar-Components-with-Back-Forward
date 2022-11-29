import { render, screen } from '@testing-library/react';
import chai, {expect} from "chai";
import userEvent from '@testing-library/user-event';
import Linker from "../Linker";
import ManageEntities from "../ManageEntities";
import EditEntity from "../EditEntity";
import ChangeLanguage from "../ChangeLanguage";
import Home from "../Home";
import {ContextProvider} from "../../Context";
import React from "react";

const linkMappings = [
	{path: '/' , component: <Home/>},
	{path: 'ManageEntities' , component: <ManageEntities/>},
	{path: 'ManageEntities/EditEntity/:id' , component: <EditEntity/>},
	{path: 'ChangeLanguage' , component: <ChangeLanguage/>},
]


describe('routing tests',() => {

	beforeEach(() => {
		render(<ContextProvider>
			<Linker linkMappings={linkMappings}/>
		</ContextProvider>);
	})

	async function GoToManageEntities() {
		await userEvent.click(screen.getByText('Manage Entities'));
	}

	async function GoToEditEntities(index: number = -1, name: string = '') {
		await GoToManageEntities();
		if (name !== '') {
			await userEvent.click(screen.getByText(name));
		}
		else if (index >= 0) {
			const allRows = await screen.findAllByRole('row');
			await userEvent.click(allRows[index]);
		}
	}


	it('clicking on Change Language', async() => {
		await userEvent.click(screen.getByText('Change Language'));
		const linkElement = await screen.findByRole('heading', {level: 1});
		expect(linkElement.textContent).to.contain('Language Changed');
	});
	it('Clicking on Manage Entities', async() => {
		await GoToManageEntities();
		const linkElement = await screen.findByRole('heading', {level: 1});
		expect(linkElement.textContent).to.equal('Entities');
	});
	it('Checking Manage Entity page entities', async() => {
		await GoToManageEntities();
		const linkElement = await screen.findAllByRole('row');
		expect(linkElement[1].textContent).to.contain('Kent');
	});
	it('Go to EditEntity page by clicking on an entity', async () => {
		// await GoToEditEntities(-1 , 'Kent' );
		// const linkElement = await screen.findByRole('img');
		await GoToManageEntities();
		const linkElement = await screen.findAllByRole('row');
		await userEvent.click(linkElement[1]);
		const tBox = await screen.findByRole('textbox');
		expect(tBox).to.exist;
	});
	it('Go to EditEntity page by clicking on an entity1-1', async () => {
		await GoToEditEntities(-1 , 'Kent' );
		const tBox = await screen.findByRole('textbox');
		expect(tBox).to.exist;
	});
	it('Go to EditEntity page by clicking on an entity1-2', async () => {
		await GoToEditEntities(1);
		const tBox = await screen.findByRole('textbox');
		expect(tBox).to.exist;
	});
	it('Manage Entities Back test', async() => {
		await GoToManageEntities();
		await userEvent.click(screen.getByText('Back'));
		const linkElement = screen.getByText('Change Language')
		expect(linkElement).to.exist;
	});
	it('EditEntity test, change Kent to Abbas and observe it in Manage Entity page', async () => {
		await GoToEditEntities(-1 , 'Kent');
		const tBox = await screen.findByRole('textbox');
		await userEvent.clear(tBox);
		await userEvent.type(tBox, 'Abbas');
		await userEvent.click(screen.getByText('Back'));
		const linkElement = await screen.findByText('Abbas');
		expect(linkElement.textContent).to.exist;
	});
	it('Go to Home page from EditEntity page', async () => {
		await GoToEditEntities(1);
		await userEvent.click(screen.getByRole('button', { name: /Home/i }));
		const linkElement = screen.getByText('Change Language')
		expect(linkElement).to.exist;
	});
});

