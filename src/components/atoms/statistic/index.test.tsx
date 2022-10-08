import { render } from "@testing-library/react";
import Statistic from ".";

const DEFAULT_STATISTIC = (
  <Statistic label="Attack damages" maxValue={15} currentValue={15} />
);

const BUFFED_STATISTIC = (
  <Statistic label="Attack damages" maxValue={15} currentValue={20} />
);

const NERFED_STATISTIC = (
  <Statistic label="Attack damages" maxValue={15} currentValue={10} />
);

describe("Statistic Atom", () => {
  it('renders "Attack damages" label ', () => {
    const { container: statistic } = render(DEFAULT_STATISTIC);
    const statisticLabel = statistic.getElementsByClassName("statistic__label");
    expect(statisticLabel[0]).toHaveTextContent("Attack damages");
  });

  it('renders "pts" unit', () => {
    const { getByText } = render(DEFAULT_STATISTIC);
    expect(getByText("pts")).toBeDefined();
  });

  it('renders "20" current value ', () => {
    const { getByText } = render(BUFFED_STATISTIC);
    expect(getByText("20")).toBeDefined();
  });

  it("default component renders a component with a default black value", () => {
    const { container: statistic } = render(DEFAULT_STATISTIC);
    const statisticValue = statistic.getElementsByClassName("statistic__value");
    expect(statisticValue[0]).toHaveClass("statistic__value__default");
    expect(statisticValue[0].classList.length).toBe(2);
  });

  it("default component renders a component with a green buffed value", () => {
    const { container: statistic } = render(BUFFED_STATISTIC);
    const statisticValue = statistic.getElementsByClassName("statistic__value");
    expect(statisticValue[0]).toHaveClass("statistic__value__buffed");
    expect(statisticValue[0].classList.length).toBe(2);
  });

  it("default component renders a component with a nerfed red value", () => {
    const { container: statistic } = render(NERFED_STATISTIC);
    const statisticValue = statistic.getElementsByClassName("statistic__value");
    expect(statisticValue[0]).toHaveClass("statistic__value__nerfed");
    expect(statisticValue[0].classList.length).toBe(2);
  });
});
