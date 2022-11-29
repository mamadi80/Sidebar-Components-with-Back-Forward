import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnButton from "../actions/clickOnButton";
import typeIntoTextBox from "../actions/typeIntoTextBox";

type EntityType = {
	name: string;
	age : number;
}

const createNewEntity = (entity: EntityType) => async() => {
	// await clickOnManageEntitiesItem();
	await clickOnButton('New Entity');
	await typeIntoTextBox(entity);
	await clickOnButton('Save');
}
export default createNewEntity;
