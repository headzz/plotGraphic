export const justifyContent = (align = "flex-start") => {
  return `justify-content: ${align}`;
};

export const checkAlign = (props) => {
  if (props.center) {
    return justifyContent("center");
  }

  if (props.right) {
    return justifyContent("flex-end");
  }

  if (props.spaceBetween) {
    return justifyContent("space-between");
  }

  return justifyContent();
};
