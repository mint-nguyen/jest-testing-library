import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Home from "../pages/index";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props?: {}, state?: null) => {
	return shallow(<Home {...props} />);
};

const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
	return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
	const wrapper = setup();
	const homeComponent = findByTestAttr(wrapper, "component-home");
	expect(homeComponent.length).toBe(1);
});

test("renders increment button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "increment-button");
	expect(button.length).toBe(1);
});

test("renders counter display", () => {
	const wrapper = setup();
	const counter = findByTestAttr(wrapper, "counter-display");
	expect(counter.length).toBe(1);
});

test("clicking button increments counter display", () => {});
