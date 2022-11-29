import {screen} from "@testing-library/react";
import {expect} from "chai";

const beInHomePage = () => {
	const linkElement = screen.getByText('Change Language');
	expect(linkElement).to.exist;
}
export default beInHomePage;
