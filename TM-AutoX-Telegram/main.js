"ui";

var utils = require('./utils.js')
var color = "#009688";

ui.layout(
  <drawer id="drawer">
    <vertical>
      <appbar>
        <toolbar id="toolbar" title="TM AutoX-Telegram" />
        <tabs id="tabs" />
      </appbar>
      <viewpager id="viewpager">
        <frame>
          <vertical padding="16">
            <list id="appsClaim">
              <checkbox id="c" text="{{this.v}}" checked="{{this.c}}" />
            </list>
            {/* <checkbox id="cb2" checked="true" text="Checked checkbox" /> */}
          </vertical>
        </frame>
        <frame>
          <vertical padding="16">
            <list id="appsTap">
              <checkbox id="c" text="{{this.v}}" checked="{{this.c}}" />
            </list>
            {/* <checkbox id="cb2" checked="true" text="Checked checkbox" /> */}
          </vertical>
        </frame>
      </viewpager>
    </vertical>
    <vertical layout_gravity="left" bg="#ffffff" w="280">
      <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
      <list id="menu">
        <horizontal bg="?selectableItemBackground" w="*">
          <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
          <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
        </horizontal>
      </list>
    </vertical>
  </drawer>
);

//Create options menu (upper right corner)
ui.emitter.on("create_options_menu", menu => {
  menu.add("Settings");
  menu.add("About");
});
//Listen for option menu clicks
ui.emitter.on("options_item_selected", (e, item) => {
  switch (item.getTitle()) {
    case "Set":
      toast("Not set yet");
      break;
    case "About":
      alert("About", "Auto.js interface template v1.0.0");
      break;
  }
  e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//Set the title of the sliding page
ui.viewpager.setTitles(["Claim", "Tap"]);
//Link the sliding page with the tab bar
ui.tabs.setupWithViewPager(ui.viewpager);

//Enable the side pull menu to be opened in the upper left corner of the toolbar
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  {
    title: "Option 1",
    icon: "@drawable/ic_android_black_48dp"
  },
  {
    title: "Option 2",
    icon: "@drawable/ic_settings_black_48dp"
  },
  {
    title: "Option 3",
    icon: "@drawable/ic_favorite_black_48dp"
  },
  {
    title: "Exit",
    icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
  switch (item.title) {
    case "Exit":
      ui.finish();
      break;
  }
})
var storage = storages.create("apps")

// Claim
var jsFilesClaim = files.listDir(utils.rootApps, function (name) {
  return name.endsWith(".js") && files.isFile(files.join(utils.rootApps, name))
})
jsFilesClaim = jsFilesClaim.map(x => { return { t: 1, k: x, v: utils.removeExtension(x), c: false } })

// Tap
var jsFilesTap = files.listDir(utils.rootApps, function (name) {
  return name.endsWith(".js") && files.isFile(files.join(utils.rootApps, name))
})
jsFilesTap = jsFilesTap.map(x => { return { t: 2, k: x, v: utils.removeExtension(x), c: false } })

var apps = storage.get("apps", { claim: jsFilesClaim, tap: jsFilesTap });


// ui.apps.setDataSource(apps);

// ui.apps.on("item_bind", function (itemView, itemHolder) {
//   //Binding check box event
//   itemView.c.on("check", function (checked) {
//     let item = itemHolder.item;
//     item.c = checked;
//   });
// });

// // ui.apps.on("item_click", function (item, i, itemView, listView) {
// //   itemView.c.checked = !itemView.c.checked;
// // });

// //Save apps when leaving this interface
// ui.emitter.on("pause", () => {
//   storage.put("apps", apps);
// });

log(apps)