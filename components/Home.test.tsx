import "jsdom-global/register";
import React from "react";
import Enzyme, { mount, shallow, ShallowWrapper } from "enzyme";
import HomePage from "./Home";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props?: {}, state?: {}) => {
	const wrapper = shallow(<HomePage {...props} />);
	if (state) wrapper.setState(state);

	return wrapper;
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

test("renders decrement button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "decrement-button");
	expect(button.length).toBe(1);
});

test("renders counter display", () => {
	const wrapper = setup();
	const counter = findByTestAttr(wrapper, "counter-display");
	expect(counter.length).toBe(1);
});

test("counter starts at 0", () => {
	const wrapper = mount(<HomePage />);
	const initialCounterState = wrapper.state("counter");
	expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
	const counter = 7;
	const wrapper = setup(null, { counter });
	const button = findByTestAttr(wrapper, "increment-button");
	button.simulate("click");
	const counterDisplay = findByTestAttr(wrapper, "counter-display");

	expect(counterDisplay.text()).toContain(`${counter + 1}`);
});

test("clicking button decrements counter display", () => {
	const counter = 7;
	const wrapper = setup(null, { counter });
	const button = findByTestAttr(wrapper, "decrement-button");
	button.simulate("click");
	const counterDisplay = findByTestAttr(wrapper, "counter-display");

	expect(counterDisplay.text()).toContain(`${counter - 1}`);
});
