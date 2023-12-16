import { render } from "@testing-library/vue";
import { BasicDataCatalogBrowser } from "./data-catalog-browser.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicDataCatalogBrowser);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
