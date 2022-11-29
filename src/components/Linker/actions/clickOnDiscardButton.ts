import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

const clickOnDiscardButton = async() => {
	await userEvent.click(screen.getByRole('button', {name: 'Discard'}));
}
export default clickOnDiscardButton;
