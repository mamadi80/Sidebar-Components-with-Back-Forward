import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type EntityType = {
	name: string;
	age: number;
}

const typeIntoTextBox = async(entity : EntityType) => {
	const tBox = await screen.findAllByRole('textbox');
	await userEvent.clear(tBox[0]);
	await userEvent.clear(tBox[1]);
	await userEvent.type(tBox[0], entity.name);
	await userEvent.type(tBox[1], entity.age.toString());
}
export default typeIntoTextBox;
