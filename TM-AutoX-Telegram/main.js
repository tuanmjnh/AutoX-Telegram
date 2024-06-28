"ui";

// importClass(org.opencv.core.Mat);
// importClass(org.opencv.imgcodecs.Imgcodecs);
// importClass(java.lang.System);

// Import necessary modules
// var floaty = require("floaty");
// Ensure you have the necessary permission for drawing overlays
// if (!floaty.checkPermission()) {
//   floaty.requestPermission();
//   exit();
// }

var utils = require("./utils.js");
var color = "#009688";
console.log(`width: ${device.width} - height: ${device.height}`)
ui.layout(
  <drawer id="drawer">
    <vertical>
      {/* Toolbar */}
      <appbar>
        <toolbar id="toolbar" title="TM AutoX-Telegram" />
        <tabs id="tabs" />
      </appbar>
      {/* Main content */}
      <viewpager id="viewpager" layout_width="match_parent" layout_height="0dp" layout_weight="1">
        <frame>
          <ScrollView>
            <vertical padding="16">
              <list id="appsClaim">
                <checkbox id="c" text="{{this.v}}" checked="{{this.c}}" />
              </list>
            </vertical>
          </ScrollView>
        </frame>
        <frame>
          <ScrollView>
            <vertical padding="16">
              <list id="appsTap">
                <checkbox id="c" text="{{this.v}}" checked="{{this.c}}" />
              </list>
            </vertical>
          </ScrollView>
        </frame>
      </viewpager>
      {/* Footer */}
      <linear orientation="horizontal" gravity="center" layout_width="match_parent" layout_height="wrap_content">
        <button id="btnStart" text="Start" layout_weight="1" />
        {/* <button id="button2" text="Button 2" layout_weight="1" />
        <button id="button3" text="Button 3" layout_weight="1" /> */}
      </linear>
    </vertical>
    {/* Footer */}
    {/* <linear orientation="horizontal" gravity="center" layout_width="match_parent" layout_height="wrap_content">
      <button id="button1" text="Button 1" layout_weight="1" />
      <button id="button2" text="Button 2" layout_weight="1" />
      <button id="button3" text="Button 3" layout_weight="1" />
    </linear> */}
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
//Color button
ui.btnStart.setBackgroundColor(colors.parseColor("#0397d9"));
ui.btnStart.setTextColor(android.graphics.Color.parseColor("#ffffff"));

//Create options menu (upper right corner)
ui.emitter.on("create_options_menu", menu => {
  menu.add("Settings")
  menu.add("About")
});
//Listen for option menu clicks
ui.emitter.on("options_item_selected", (e, item) => {
  switch (item.getTitle()) {
    case "Set":
      toast("Not set yet")
      break
    case "About":
      alert("About", "Auto.js interface template v1.0.0")
      break
  }
  e.consumed = true
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
      ui.finish()
      break
  }
});

// var packageName = getPackageName("Telegram");
// console.log(packageName);//org.telegram.messenger

var storage = storages.create("apps");

// Claim
var jsFilesClaim = files.listDir(utils.rootAppsClaim, function (name) {
  return name.endsWith(".js") && files.isFile(files.join(utils.rootAppsClaim, name))
});
jsFilesClaim = jsFilesClaim.map(x => { return { t: 1, k: x, v: utils.removeExtension(x), c: false, p: utils.rootAppsClaim } });

// Tap
var jsFilesTap = files.listDir(utils.rootAppsTap, function (name) {
  return name.endsWith(".js") && files.isFile(files.join(utils.rootAppsTap, name))
});
jsFilesTap = jsFilesTap.map(x => { return { t: 2, k: x, v: utils.removeExtension(x), c: false, p: utils.rootAppsTap } });

// log({ claim: jsFilesClaim, tap: jsFilesTap })
// storage.remove("apps");
// storage.put("apps", { claim: jsFilesClaim, tap: jsFilesTap })

var apps = storage.get("apps", { claim: jsFilesClaim, tap: jsFilesTap });
utils.pushIfNotExist(apps.claim, jsFilesClaim, 'k')
utils.pushIfNotExist(apps.tap, jsFilesTap, 'k')
// log(apps)

ui.appsClaim.setDataSource(apps.claim);

ui.appsClaim.on("item_bind", function (itemView, itemHolder) {
  //Binding check box event
  itemView.c.on("check", function (checked) {
    let item = itemHolder.item
    item.c = checked
  })
});

ui.appsTap.setDataSource(apps.tap);

ui.appsTap.on("item_bind", function (itemView, itemHolder) {
  //Binding check box event
  itemView.c.on("check", function (checked) {
    let item = itemHolder.item
    item.c = checked
  });
});
// ui.appsClaim.on("item_click", function (item, i, itemView, listView) {
//   itemView.c.checked = !itemView.c.checked
// })

//Save apps when leaving this interface
ui.emitter.on("pause", () => {
  storage.put("apps", apps);
});

var isStart = false;
var engine = null;
ui.btnStart.on("click", () => {
  if (isStart) {
    isStart = false;
    var floatyWindowEngine = engine.getEngine();
    if (floatyWindowEngine) floatyWindowEngine.forceStop();
    // ui.btnStart.setEnabled(true);
    ui.btnStart.setText("Start");
    ui.btnStart.setBackgroundColor(colors.parseColor("#0397d9"));
  } else {
    isStart = true;
    // ui.btnStart.setEnabled(false);
    ui.btnStart.setText("Stop");
    ui.btnStart.setBackgroundColor(colors.parseColor("#d65801"));
    storage.put("apps", apps);
    engine = engines.execScriptFile('./floatyWindow.js');
  }
});
