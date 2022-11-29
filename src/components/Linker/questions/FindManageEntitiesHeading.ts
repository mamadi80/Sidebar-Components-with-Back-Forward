import {expect} from "chai";
import findFirstHeading from "../element/findFirstHeading";

const findManageEntitiesHeading = async() => {
	const linkElement = await findFirstHeading();
	expect( linkElement.textContent).to.equal('Entities');
}
export default findManageEntitiesHeading;
