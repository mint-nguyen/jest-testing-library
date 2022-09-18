import React from "react";
import ReactDOM from "react-dom";
import Home from ".";
import Enzyme from "enzyme";
import { EnzymeAdapter } from "enzyme";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("render without crashing", () => {
	// const div = document.createElement("div");
	// ReactDOM.render(Home, div);
	// ReactDOM.unmountComponentAtNode(div);
});
