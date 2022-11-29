import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import {screen} from "@testing-library/react";

const getNthElement = async(index : number) => {
	const Element = await screen.findAllByRole('row');
	return Element[index];
}
export default getNthElement;
