import renderer from "react-test-renderer";
import Link from "./Link";
import Enzyme, { EnzymeAdapter } from "enzyme";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("changes the class when hovered", () => {
	const component = renderer.create(
		<Link page="http://www.facebook.com">Facebook</Link>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
