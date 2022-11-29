import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnAnEntity from "../actions/clickOnEntity";
import typeIntoTextBox from "../actions/typeIntoTextBox";
import clickOnButton from "../actions/clickOnButton";

type EntityType = {
	name: string;
	age: number;
}

const editEntityWithValues = (index: number, entity: EntityType) => async() => {
	// await clickOnManageEntitiesItem();
	await clickOnAnEntity(index);
	await typeIntoTextBox(entity);
	await clickOnButton('Save');
}
export default editEntityWithValues;
