import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

const clickOnManageEntitiesItem = async() => { // todo comment why async?
	await userEvent.click(screen.getByText('Manage Entities'));
}

export default clickOnManageEntitiesItem;
