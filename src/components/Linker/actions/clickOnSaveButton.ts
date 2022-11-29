import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

const clickOnSaveButton = async() => {
	await userEvent.click(screen.getByRole('button', {name: 'Save'}));
}
export default clickOnSaveButton;
