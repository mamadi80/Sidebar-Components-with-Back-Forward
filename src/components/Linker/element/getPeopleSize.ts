import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import {screen} from "@testing-library/react";

const getPeopleSize = async() => {
	await clickOnManageEntitiesItem();
	const Element = await screen.findAllByRole('row');
	return Element.length;
}
export default getPeopleSize;
