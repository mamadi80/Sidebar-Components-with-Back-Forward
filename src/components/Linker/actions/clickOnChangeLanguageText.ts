import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

const clickOnChangeLanguageText = () => {
	userEvent.click(screen.getByText('Change Language'));
}

export default clickOnChangeLanguageText;
