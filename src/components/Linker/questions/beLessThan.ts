import {expect} from "chai";
import getPeopleSize from "../element/getPeopleSize";
import getSizeInManageEntities from "../element/getSizeInManageEntities";

const beLessThan = (num2 : number) => async() => {
	const num1 = await getSizeInManageEntities();
	expect(num1).to.be.lessThan(num2);
}
export default beLessThan;
