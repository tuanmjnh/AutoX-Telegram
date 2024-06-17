"ui";

showLoginUI();
ui.statusBarColor("#000000")

//Show login interface
function showLoginUI() {
   ui.layout(
      <frame>
         <vertical h="auto" align="center" margin="0 50">
            <linear>
               <text w="56" gravity="center" color="#111111" size="16">Username</text>
               <input id="name" w="*" h="40" />
            </linear>
            <linear>
               <text w="56" gravity="center" color="#111111" size="16">Password</text>
               <input id="password" w="*" h="40" password="true" />
            </linear>
            <linear gravity="center">
               <button id="login" text="Login" />
               <button id="register" text="Register" />
            </linear>
         </vertical>
      </frame>
   );

   ui.login.on("click", () => {
      toast("Your username is" + ui.name.text() + " Password is" + ui.password.text());
   });
   ui.register.on("click", () => showRegisterUI());
}

//Show registration interface
function showRegisterUI() {
   ui.layout(
      <frame>
         <vertical h="auto" align="center" margin="0 50">
            <linear>
               <text w="56" gravity="center" color="#111111" size="16">Username</text>
               <input w="*" h="40" />
            </linear>
            <linear>
               <text w="56" gravity="center" color="#111111" size="16">Password</text>
               <input w="*" h="40" password="true" />
            </linear>
            <linear>
               <text w="56" gravity="center" color="#111111" size="16">Email</text>
               <input w="*" h="40" inputType="textEmailAddress" />
            </linear>
            <linear gravity="center">
               <button>OK</button>
               <button id="cancel">Cancel</button>
            </linear>
         </vertical>
      </frame>
   );
   ui.cancel.on("click", () => showLoginUI());
}