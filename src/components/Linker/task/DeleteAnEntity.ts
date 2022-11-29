import clickOnManageEntitiesItem from "../actions/clickOnManageEntitiesItem";
import clickOnButton from "../actions/clickOnButton";

const DeleteAnEntity = (index: number) => async() => {
	// await clickOnManageEntitiesItem();
	await clickOnButton('Delete', index);
}
export default  DeleteAnEntity;
