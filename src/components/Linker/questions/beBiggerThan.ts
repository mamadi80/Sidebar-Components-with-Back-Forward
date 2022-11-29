import {expect} from "chai";
import getPeopleSize from "../element/getPeopleSize";
import getSizeInManageEntities from "../element/getSizeInManageEntities";

const beBiggerThan = (num2 : number) => async() => {
	const num1 = await getSizeInManageEntities();
	expect(num1).to.be.greaterThan(num2);
}
export default beBiggerThan;
