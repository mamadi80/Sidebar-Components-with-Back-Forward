import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

const clickOnBackButton = async() => {
	await userEvent.click(screen.getByRole('button', {name: 'Back'}));
}
export default clickOnBackButton;
