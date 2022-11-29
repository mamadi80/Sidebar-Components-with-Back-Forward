import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnBackButton from "../actions/clickOnBackButton";
import clickOnButton from "../actions/clickOnButton";

const GoBack =  async() => {
	// await clickOnManageEntitiesItem();
	await clickOnButton('Back');
}
export default GoBack;
