import {screen} from "@testing-library/react";

const buttonElement = (name: string, index?: number) => {
	if (index== null)
		return screen.getByRole('button', {name});
	else {
		return screen.getAllByRole('button', {name})[index];
	}
}
export default buttonElement;
