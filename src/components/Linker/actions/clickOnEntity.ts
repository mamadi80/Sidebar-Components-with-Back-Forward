import userEvent from "@testing-library/user-event";
import entities from "../element/Entities";

const clickOnEntity = async (index: number) => {
	index ++;
	const linkElement = await entities();
	await userEvent.click(linkElement[index]);
}
export default clickOnEntity;
