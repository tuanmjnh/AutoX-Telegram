"ui";

ui.layout(
  <vertical>
    <appbar>
      <toolbar id="toolbar" title="Card Layout" />
    </appbar>
    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
      cardElevation="1dp" gravity="center_vertical">
      <vertical padding="18 8" h="auto">
        <text text="Write operating system homework" textColor="#222222" textSize="16sp" />
        <text text="Tomorrow's 1st to 2nd period" textColor="#999999" textSize="14sp" />
      </vertical>
      <View bg="#f44336" h="*" w="10" />
    </card>
    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
      cardElevation="1dp" gravity="center_vertical">
      <vertical padding="18 8" h="auto">
        <text text="Fix ui mode bug" textColor="#222222" textSize="16sp" />
        <text text="Indefinite" textColor="#999999" textSize="14sp" />
      </vertical>
      <View bg="#ff5722" h="*" w="10" />
    </card>
    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
      cardElevation="1dp" gravity="center_vertical">
      <vertical padding="18 8" h="auto">
        <text text="Release Auto.js 5.0.0 official version" textColor="#222222" textSize="16sp" />
        <text text="January 2019" textColor="#999999" textSize="14sp" />
      </vertical>
      <View bg="#4caf50" h="*" w="10" />
    </card>
    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
      cardElevation="1dp" gravity="center_vertical">
      <vertical padding="18 8" h="auto">
        <text text="Complete graduation design and thesis" textColor="#222222" textSize="16sp" />
        <text text="April 2019" textColor="#999999" textSize="14sp" />
      </vertical>
      <View bg="#2196f3" h="*" w="10" />
    </card>
  </vertical>
);