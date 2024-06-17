"ui";

var InputLayout = (function () {
  //Inherited from ui.Widget
  util.extend(InputLayout, ui.Widget);

  function InputLayout() {
    ui.Widget.call(this);
    this.defineAttr("hint", (view, attr, value, defineSetter) => {
      view._hint.setText(value);
    });
    this.defineAttr("text", (view, attr, value, defineSetter) => {
      view._input.setText(value);
    });
  }
  InputLayout.prototype.render = function () {
    return (
      <vertical>
        <text id="_hint" textSize="16sp" margin="4" textColor="gray" />
        <input id="_input" margin="0 16" />
      </vertical>
    );
  }
  InputLayout.prototype.getInput = function () {
    return this.view._input.getText();
  };
  ui.registerWidget("input-layout", InputLayout);
  return InputLayout;
})();

ui.layout(
  <vertical>
    <input-layout id="name" hint="Please enter your name" />
    <input-layout id="age" hint="Please enter your age" text="18" />
    <button id="ok" text="Confirm" />
  </vertical>
);

ui.ok.on("click", function () {
  toast("Name is: " + ui.name.widget.getInput() + ", Age is: " + ui.age.widget.getInput());
});