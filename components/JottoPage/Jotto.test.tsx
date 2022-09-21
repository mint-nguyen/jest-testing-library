import "jsdom-global/register";
import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import JottoPage from "./Jotto";
import { findByTestAttr } from "../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props?: {}) => {
	return shallow(<JottoPage {...props} />);
};

test("first renders word found state to be false", () => {
	const wrapper = mount(<JottoPage />);
	const wordFoundState = wrapper.state("wordFound");
	expect(wordFoundState).toBe(false);
});

test("first renders no congrats msg when word is not found", () => {
	const wrapper = setup();
	const congratsMsg = findByTestAttr(wrapper, "congrats-msg");
	expect(congratsMsg.length).toBe(0);
});

test("renders text when word found is true", () => {});
