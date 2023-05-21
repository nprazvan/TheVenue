import { it, expect } from "vitest";
import React from "react";

import { ListItem } from "@material-ui/core";

import { renderItem } from "./RenderItem";

it("should return the desired result", () => {
  const item = { where: "Test", value: "test" };

  const result = renderItem(item);

  expect(result).toBe(
    <ListItem
      button
      onClick={() => {
        alert(item.where);
      }}
      key={item.where}
    >
      {item.value}
    </ListItem>
  );
});
