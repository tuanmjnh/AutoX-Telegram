"ui";

/**
* By Da Zhang
* This script is for entertainment only and does not contain any destructive properties
*/
ui.statusBarColor("#AA0000");

var Quin = 32552732;

ui.layout(
    <frame background="#AA0000">
	    <vertical align="top" paddingTop="5" margin="10">
		    <text id="oops" color="#FFFFFF" gravity="center" size="20">Oops, your files have been encrypted!</text>
		    <text id="text" bg="#FFFFFF" gravity="left" color="#000000" size="15" marginTop="15" h="425"></text>
		    <button id="payment" text="Payment" margin="20 0 0 0"/>
		    <button id="decrypt" text="Decrypt"/>
	    </vertical>
    </frame>
);
ui.text.text("What happened to my phone? \nI have encrypted some of your important files. \n" +
	"Photos, pictures, documents, compressed files, audio, video files, apk files, etc. Almost all types of files are encrypted and cannot be opened normally. \n" +
	"This is fundamentally different from general file damage. You can look for ways to recover the files online. I can guarantee that without our decryption service, even if God comes, these documents cannot be recovered. \n\n" +
	"Is there a way to recover these documents?\nOf course there is a way to recover them. It can only be recovered through our decryption service. I guarantee with my personality that I can provide safe and effective recovery services. \n" +
	"But this is charged and cannot be postponed indefinitely. \nPlease click the <Decrypt> button to recover some documents for free. Please rest assured that I will never cheat you. \n" +
	"But if you want to recover all the documents, you need to pay a fee. \nCan you pay a fixed amount at any time to recover them? Of course not. The longer you postpone payment, the worse it is for you. \n" +
	"It is best to pay the fee within 3 days. After three days, the fee will be doubled. \nAlso, if you do not pay within a week, you will never be able to recover. \n" +
"By the way, I forgot to tell you that for poor people who have not paid for more than half a year, there will be an event to recover for free. Whether it is your turn depends on your luck.");
ui.oops.click(() => toast("Fuck you!"));
ui.oops.longClick(() => {
    var thisjoke="This is a joke : )";
    if(ui.oops.text() != thisjoke){
    	ui.oops.text(thisjoke);
    }else{
    	ui.oops.text("Oops, your files have been encrypted!");
    }
    return true;
});
ui.text.click(() => ui.text.append("。"));
ui.text.longClick(() => {
    ui.text.setText("\n"+ui.text.getText())
    return true;
});
ui.payment.click(() => {
	try{
		app.startActivity({
			action:"android.intent.action.VIEW",
			data:"mqqapi://card/show_pslcard?&uin=" + Quin
		});
		toast("Please payment by QQ");
	}catch(e){
		toast("Payment Error");
	}
});
ui.payment.longClick(() => {
	toast("You are silly b!");
	return true;
});
ui.decrypt.click(() => {
	toast("Decrypt Error");
	activity.finish();
});
ui.decrypt.longClick(() => {
	toast("You can't decrypt!");
	return true;
});
