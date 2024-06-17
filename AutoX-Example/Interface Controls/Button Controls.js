"ui";

ui.layout(
  <vertical padding="16">
    <button text="Normal button" w="auto" />
    <button text="Colored button" style="Widget.AppCompat.Button.Colored" w="auto" />
    <button text="Borderless button" style="Widget.AppCompat.Button.Borderless" w="auto" />
    <button text="Borderless colored button" style="Widget.AppCompat.Button.Borderless.Colored" w="auto" />
    <button text="Long button" w="*" />
    <button id="click_me" text="Click me" w="auto" />
  </vertical>
);

ui.click_me.on("click", () => {
  toast("I was clicked");
});

ui.click_me.on("long_click", () => {
  toast("I was long pressed");
});