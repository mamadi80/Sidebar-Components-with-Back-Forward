import {screen} from "@testing-library/react";
import {expect} from "chai";

type EntityType = {
	name: string;
	age: number;
}

const nthEntityEquals = (index: number, entity: EntityType ) => async() => { // todo comment nthEntityEquals(index, {name, age, url})
		index ++;
		const linkElement = await screen.findAllByRole('row');
		expect(linkElement[index].textContent).to.contain(entity.name+entity.age);
}
export default nthEntityEquals;
