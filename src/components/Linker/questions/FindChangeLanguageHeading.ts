import {expect} from "chai";
import findFirstHeading from "../element/findFirstHeading";

const findChangeLanguageHeading = async() => {
	const linkElement = await findFirstHeading()
	expect(linkElement.textContent).to.equal('Language Changed');
}
export default findChangeLanguageHeading;
