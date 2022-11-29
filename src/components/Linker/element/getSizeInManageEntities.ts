import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import {screen} from "@testing-library/react";

const getSizeInManageEntities = async() => {
	const Element = await screen.findAllByRole('row');
	return Element.length;
}
export default getSizeInManageEntities;
