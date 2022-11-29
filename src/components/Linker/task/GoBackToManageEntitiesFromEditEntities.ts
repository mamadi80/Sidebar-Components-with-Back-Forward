import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnEntity from "../actions/clickOnEntity";
import clickOnButton from "../actions/clickOnButton";

const goBackToManageEntitiesFromEditEntities = async() => {
	await clickOnManageEntitiesItem();
	await clickOnEntity(1);
	await clickOnButton('Back');
}
export default goBackToManageEntitiesFromEditEntities;
