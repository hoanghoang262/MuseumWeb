export const randomColors = () => {
  const colors = [
    "#8884d8",
    "#83a6ed",
    "#8dd1e1",
    "#82ca9d",
    "#d0ed57",
    "#ffc658",
    "#ffa6a6",
    "#ffc2a6",
    "#58d6fc",
    "#585dfc",
    "#9f58fc",
    "#d858fc",
    "#fc58e9",
    "#fc58af",
    "#fc5871",
    "#86fc58",
    "#58fc97"
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
