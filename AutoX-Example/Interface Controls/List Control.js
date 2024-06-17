"ui";

ui.layout(
  <frame>
    <list id="list">
      <vertical>
        <text id="name" textSize="16sp" textColor="#000000" text="Name: {{name}}" />
        <text id="age" textSize="16sp" textColor="#000000" text="Age: {{age}}" />
        <button id="deleteItem" text="Delete" />
      </vertical>
    </list>
  </frame>
);

var items = [
  { name: "Xiaoming", age: 18 }, { name: "Xiaohong", age: 30 },
  { name: "Xiaodong", age: 19 }, { name: "Xiaoqiang", age: 31 },
  { name: "Xiaoman", age: 20 }, { name: "Xiaoyi", age: 32 },
  { name: "Xiaohe", age: 21 }, { name: "Xiao Er", age: 1 },
  { name: "Xiao Xian", age: 22 }, { name: "Xiao San", age: 2 },
  { name: "Xiao Wei", age: 23 }, { name: "Xiao Si", age: 3 },
  { name: "Xiao Huang", age: 24 }, { name: "Xiao Wu", age: 4 },
  { name: "Xiao Jian", age: 25 }, { name: "Xiao Liu", age: 5 },
  { name: "Xiao La", age: 26 }, { name: "Xiao Qi", age: 6 },
  { name: "Xiao Ha", age: 27 }, { name: "Xiao Ba", age: 7 },
  { name: "Xiao A", age: 28 }, { name: "Xiao Jiu", age: 8 },
  { name: "Xiao Pa", age: 29 }, { name: "Xiao Shi", age: 9 }
];

ui.list.setDataSource(items);

ui.list.on("item_click", function (item, i, itemView, listView) {
  toast("The name of the person clicked is: " + item.name + ", and the age is: " + item.age);
});

ui.list.on("item_bind", function (itemView, itemHolder) {
  itemView.deleteItem.on("click", function () {
    let item = itemHolder.item;
    toast("The name of the person deleted is: " + item.name + ", and the age is: " + item.age);
    items.splice(itemHolder.position, 1);
  });
})