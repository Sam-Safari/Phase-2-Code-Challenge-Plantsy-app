import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom";

describe("CreatePlant Tests", () => {
  beforeEach(() => {
    global.setFetchResponse(global.basePlants);
  });

  test("displays all plants on startup", async () => {
    await act(async () => {
      render(<App />);
    });

    const plantItems = await screen.findAllByTestId("plant-item");
    expect(plantItems).toHaveLength(global.basePlants.length);

    const plantNames = plantItems.map((item) =>
      item.querySelector("h4").textContent
    );
    const basePlantNames = global.basePlants.map((plant) => plant.name);
    expect(plantNames).toEqual(basePlantNames);

    const plantImages = plantItems.map((item) =>
      item.querySelector("img").src.split("/").pop()
    );
    const basePlantImages = global.basePlants.map((plant) =>
      plant.image.split("/").pop()
    );
    expect(plantImages).toEqual(basePlantImages);

    const plantPrices = plantItems.map(
      (item) => item.querySelector("p").textContent
    );
    const basePlantPrices = global.basePlants.map(
      (plant) => "Price: " + plant.price.toString()
    );
    expect(plantPrices).toEqual(basePlantPrices);
  });

  test("plants aren't hardcoded", async () => {
    global.setFetchResponse(global.alternatePlants);

    await act(async () => {
      render(<App />);
    });

    const plantItems = await screen.findAllByTestId("plant-item");
    expect(plantItems).toHaveLength(global.alternatePlants.length);

    const plantNames = plantItems.map((item) =>
      item.querySelector("h4").textContent
    );
    const altPlantNames = global.alternatePlants.map((plant) => plant.name);
    expect(plantNames).toEqual(altPlantNames);
  });
});
