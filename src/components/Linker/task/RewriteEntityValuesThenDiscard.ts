import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnAnEntity from "../actions/clickOnEntity";
import typeIntoTextBox from "../actions/typeIntoTextBox";
import clickOnButton from "../actions/clickOnButton";

type EntityType = {
	name: string;
	age: number;
}

const RewriteEntityValuesThenDiscard = (index: number, entity: EntityType) => async() => {
	// await clickOnManageEntitiesItem();
	await clickOnAnEntity(index);
	await typeIntoTextBox(entity);
	await clickOnButton('Discard');
}
export default RewriteEntityValuesThenDiscard;
