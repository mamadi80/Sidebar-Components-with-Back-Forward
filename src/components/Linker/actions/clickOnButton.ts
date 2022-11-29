import userEvent from "@testing-library/user-event";
import buttonElement from "../element/buttonElement";

const clickOnButton = async(name : string, index?: number) => {
	if (index == null)
		await userEvent.click(buttonElement(name));
	else
		await userEvent.click(buttonElement(name, index));
}
export default clickOnButton;
