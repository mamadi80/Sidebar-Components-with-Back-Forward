import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnEntity from "../actions/clickOnEntity";

const GoToEditEntities = (index: number) => async() => {
	// await clickOnManageEntitiesItem();
	await clickOnEntity(index);
}
export default GoToEditEntities;
