"ui";

ui.layout(
    <vertical>
        <text textSize="18sp" textColor="#000000" margin="20" textStyle="bold">
            User survey on Auto.js
        </text>
        <ScrollView>
            <vertical>
                <text textSize="16sp" margin="8">1. How old are you?</text>
                <input text="18" inputType="number" margin="0 16" />
                <text textSize="16sp" margin="8">2. Have you used other similar software (Script Wizard, Keyboard Wizard, etc.)?</text>
                <radiogroup margin="0 16">
                    <radio text="Never used" />
                    <radio text="Used" />
                    <radio text="Used, not easy to use" />
                    <radio text="Cannot use without Root permission" />
                </radiogroup>
                <text textSize="16sp" margin="8">3. What do you usually use Auto.js for? (multiple choices)</text>
                <checkbox text="Game assistance" marginLeft="16" />
                <checkbox text="Like" marginLeft="16" />
                <checkbox text="Daily life work assistance" marginLeft="16" />
                <checkbox text="Practice programming" marginLeft="16" />
                <checkbox text="Automated testing" marginLeft="16" />
                <linear>
                    <checkbox text="Other" marginLeft="16" />
                    <input w="*" margin="0 16" />
                </linear>
                <text textSize="16sp" margin="8">4. Which of the following icons do you prefer?</text>
                <radiogroup margin="0 16">
                    <radio />
                    <img w="100" h="100" margin="0 16" src="http://www.autojs.org/assets/uploads/profile/3-profileavatar.png" />
                    <radio />
                    <img w="100" h="100" margin="0 16" src="http://www.autojs.org/assets/uploads/files/1511945512596-autojs_logo.png" />
                </radiogroup>
                <text textSize="16sp" margin="8">5. When did you start using Auto.js?</text>
                <datepicker margin="4 16" datePickerMode="spinner" />
                <text textSize="16sp" margin="8">6. Have you used the following Auto.js forum?</text>
                <webview id="webview" h="300" margin="0 16" />
                <radiogroup marginLeft="16" marginTop="16">
                    <radio text="Never used" />
                    <radio text="Used" />
                    <radio text="Used, not easy to use" />
                </radiogroup>
                <linear gravity="center">
                    <button margin="16">Submit</button>
                    <button margin="16">Cancel</button>
                </linear>
            </vertical>
        </ScrollView>
    </vertical>
)

ui.webview.loadUrl("http://www.autojs.org");