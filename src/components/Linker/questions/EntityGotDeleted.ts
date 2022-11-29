import {expect} from "chai";
import getNthElement from "../element/GetNthElement";

const EntityGotDeleted = (Element1: HTMLElement, index:number) => async() => {
	const Element2 = await getNthElement(index);
	expect(Element1.textContent).to.not.equal(Element2.textContent);
}
export default EntityGotDeleted;
