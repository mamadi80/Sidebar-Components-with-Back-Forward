import {screen} from "@testing-library/react";
import {expect} from "chai";

const EditEntityBoxExists = async() => {
	const tBox = await screen.findAllByRole('textbox');
	expect(tBox).to.exist;
}
export default EditEntityBoxExists;
