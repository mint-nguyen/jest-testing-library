import React from "react";
import Enzyme, { shallow } from "enzyme";
import Home from "../pages/index";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
	const wrapper = shallow(<Home />);
	const homeComponent = wrapper.find("[data-test='component-home']");
	expect(homeComponent.length).toBe(1);
});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking button increments counter display", () => {});
