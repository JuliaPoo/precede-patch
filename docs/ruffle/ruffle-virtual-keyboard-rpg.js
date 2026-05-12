    function pressKey(kEvent, kName, kCode, kNumber) {
        if(document.querySelector("ruffle-player") != null) {
            var ruffleSelector = "ruffle-player";
        } else if(document.querySelector("ruffle-embed") != null) {
            var ruffleSelector = "ruffle-embed";
        } else if(document.querySelector("#player") != null) {
            var ruffleSelector = "#player";
        } else {
            return false;
        }
        document.querySelector(ruffleSelector).focus();
        document.querySelector(ruffleSelector).dispatchEvent(new KeyboardEvent(kEvent, { key: kName, code: kCode, keyCode: kNumber, which: kNumber, bubbles: true }));
        return false;
    }

    function addKeyboard() {
        var html = `<style>
        #virtualKb {
            position: fixed;
            width: 100%;
            height: 260px;
            left: 0px;
            bottom: 0px;
            z-index: 9999;
            background-color: transparent;
            pointer-events: none;
            opacity: 0.2;
        }
        #keyboardLeft {
            position: absolute;
            top: -50px;
            left: 50px;
        }
        #keyboardRight {
            position: absolute;
            top: -50px;
            right: 50px;
        }
        #arrowKeys {
            position: relative;
            width: auto;
            height: auto;
        }
        #upKey, #downKey, #leftKey, #rightKey, #spaceBar {
            position: absolute;
            border: none; 
            background-color: transparent;
            font-weight: bold;
            font-size: 18px;
            padding: 0px;
            pointer-events: all;
            cursor: pointer;
        }
        #upKey, #downKey, #leftKey, #rightKey {
            border-radius: 5px;
            width: 140px;
            height: 140px;
        }
        #upKey {
            top: 0px;
            left: 150px;
			background-image: url("ruffle/key_up.png");
			user-select: none;
        }
        #downKey {
            top: 150px;
            left: 150px;
			background-image: url("ruffle/key_down.png");
			user-select: none;
        }
        #leftKey {
            top: 150px;
            left: 0px;
			background-image: url("ruffle/key_left.png");
			user-select: none;
        }
        #rightKey {
            top: 150px;
            left: 300px;
			background-image: url("ruffle/key_right.png");
			user-select: none;
        }
        #spaceBar {
            width: 290px;
            height: 140px;
            top: 150px;
            right: 0px;
			background-image: url("ruffle/key_space.png");
			user-select: none;
        }
        </style>
        <div id="virtualKb">
            <div id="keyboardLeft">
                <div id="arrowKeys">
                    <button id="upKey"></button>
                    <button id="leftKey"></button>
                    <button id="downKey"></button>
                    <button id="rightKey"></button>
                </div>
            </div>
            <div id="keyboardRight">
                <button id="spaceBar"></button>
            </div>
        </div>`;
        var el = document.createElement("div");
        el.id = "virtualKbContainer";
        el.innerHTML = html;
        document.body.insertBefore(el, document.body.childNodes[0]);
        var buttons = [
            { id: "#upKey", keyName: "ArrowUp", keyCode: "ArrowUp", keyNumber: 38 },
            { id: "#leftKey", keyName: "ArrowLeft", keyCode: "ArrowLeft", keyNumber: 37 },
            { id: "#downKey", keyName: "ArrowDown", keyCode: "ArrowDown", keyNumber: 40 },
            { id: "#rightKey", keyName: "ArrowRight", keyCode: "ArrowRight", keyNumber: 39 },
            { id: "#spaceBar", keyName: " ", keyCode: "Space", keyNumber: 32 }
        ];
        for(var button of buttons) {
            document.querySelector(button.id).addEventListener("touchstart", pressKey.bind(null, 'keydown', button.keyName, button.keyCode, button.keyNumber), false);
            document.querySelector(button.id).addEventListener("touchend", pressKey.bind(null, 'keyup', button.keyName, button.keyCode, button.keyNumber), false);
        }
    } 
	
function getIsMobile() {
	 if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || (navigator.userAgent.indexOf("Nintendo") !== -1) || (navigator.userAgent.indexOf("Blackberry") !== -1)) {
                return true;
            } else {
                return false;
            }
}

if (getIsMobile())	{
	addKeyboard();
	}
