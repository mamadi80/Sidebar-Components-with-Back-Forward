import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnAnEntity from "../actions/clickOnEntity";
import clickOnButton from "../actions/clickOnButton";

const goToHome = async() => {
	// await clickOnManageEntitiesItem();
	// await clickOnAnEntity(0);
	await clickOnButton('Home');
}
export default goToHome;
