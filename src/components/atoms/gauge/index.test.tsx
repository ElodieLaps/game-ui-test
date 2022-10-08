import { render } from "@testing-library/react";
import Gauge from ".";

const FULL_HEALTH_GAUGE = (
  <Gauge
    type="HEALTH"
    label="health points"
    maxValue={100}
    currentValue={100}
  />
);
const HALF_HEALTH_GAUGE = (
  <Gauge type="HEALTH" label="health points" maxValue={100} currentValue={50} />
);
const LOW_HEALTH_GAUGE = (
  <Gauge type="HEALTH" label="health points" maxValue={100} currentValue={15} />
);
const DEATH_HEALTH_GAUGE = (
  <Gauge type="HEALTH" label="health points" maxValue={100} currentValue={0} />
);
const MANA_GAUGE = (
  <Gauge type="MANA" label="health points" maxValue={100} currentValue={100} />
);
const EXPERIENCE_GAUGE = (
  <Gauge
    type="EXPERIENCE"
    label="health points"
    maxValue={100}
    currentValue={100}
  />
);

describe("Gauge Atom", () => {
  it('renders "health points" as label', () => {
    const { getByText } = render(FULL_HEALTH_GAUGE);
    expect(getByText("health points")).toBeDefined();
  });

  it('renders "50 / 100" pts values', () => {
    const { container: gauge } = render(HALF_HEALTH_GAUGE);
    const gaugeValues = gauge.getElementsByClassName("gauge__values");
    expect(gaugeValues[0].outerHTML).toContain(
      '<p class="gauge__values">50 <span>/ 100 pts</span></p>'
    );
  });

  it("renders a death state gauge", () => {
    const { getAllByRole } = render(DEATH_HEALTH_GAUGE);
    expect(getAllByRole("death")[0].outerHTML).toContain(
      '<span role="death"> 💀 Mort</span>'
    );
  });

  it("renders a gauge with 15% width", () => {
    const { container: gauge } = render(LOW_HEALTH_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveStyle({ width: "15%" });
  });

  it("renders a green gauge", () => {
    const { container: gauge } = render(FULL_HEALTH_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveClass("gauge__current__green");
    expect(gaugeCurrent[0].classList.length).toBe(2);
  });

  it("renders an orange gauge", () => {
    const { container: gauge } = render(HALF_HEALTH_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveClass("gauge__current__orange");
    expect(gaugeCurrent[0].classList.length).toBe(2);
  });

  it("renders a red gauge", () => {
    const { container: gauge } = render(LOW_HEALTH_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveClass("gauge__current__red");
    expect(gaugeCurrent[0].classList.length).toBe(2);
  });

  it("renders a blue gauge", () => {
    const { container: gauge } = render(MANA_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveClass("gauge__current__blue");
    expect(gaugeCurrent[0].classList.length).toBe(2);
  });

  it("renders a purple gauge", () => {
    const { container: gauge } = render(EXPERIENCE_GAUGE);
    const gaugeCurrent = gauge.getElementsByClassName("gauge__current");
    expect(gaugeCurrent[0]).toHaveClass("gauge__current__purple");
    expect(gaugeCurrent[0].classList.length).toBe(2);
  });
});
