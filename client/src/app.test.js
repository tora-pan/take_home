import Button from "./components/button/Button";
import Table from "./components/table/Table";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App", () => {
  test("Confirm that App contains a Button and Table child component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Button />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Table />)).toEqual(true);
  });
});
