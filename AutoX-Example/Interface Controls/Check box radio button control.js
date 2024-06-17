"ui";

ui.layout(
  <vertical padding="16">
    <checkbox id="cb1" text="Checkbox" />
    <checkbox id="cb2" checked="true" text="Checked checkbox" />
    <radiogroup>
      <radio text="Radio box 1" />
      <radio text="Radio box 2" />
      <radio text="Radio box 3" />
    </radiogroup>
    <radiogroup mariginTop="16">
      <radio text="Radio box 1" />
      <radio text="Radio box 2" />
      <radio text="Checked radio box 3" checked="true" />
    </radiogroup>
  </vertical>
);

ui.cb1.on("check", (checked) => {
  if (checked) {
    toast("The first box is checked");
  } else {
    toast("The first box is unchecked");
  }
});