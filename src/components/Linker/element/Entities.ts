import {screen} from "@testing-library/react";

const entities = () => {
	return screen.getAllByRole('row');
}
export default entities;
