import {screen} from "@testing-library/react";

const findFirstHeading = () => {
	return screen.findByRole('heading', {level: 1});
}
export default findFirstHeading;
