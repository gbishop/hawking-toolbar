const htbPrefPrefix = "extensions.hawking.";
function htbGetPrefs() {
	return 
}

function htbSetPref(name,value,type){
	var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	if(!prefs) return;
	if(type=='Int')
		prefs.setIntPref(htbPrefPrefix+name,value);
	else if(type=='Bool')
		prefs.setBoolPref(htbPrefPrefix+name,value);
	else if(type=='Char')
		prefs.setCharPref(htbPrefPrefix+name,value);
}

function htbGetPref(name){
	var prefix = htbPrefPrefix;
	var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	if(!prefs) return "";
	var gotten = "";
	if (prefs.getPrefType(prefix+name) == prefs.PREF_STRING){
		gotten = prefs.getCharPref(prefix+name);
	}
	else if (prefs.getPrefType(prefix+name) == prefs.PREF_BOOL){
		gotten = prefs.getBoolPref(prefix+name);
	}
	else if (prefs.getPrefType(prefix+name) == prefs.PREF_INT){
		gotten = prefs.getIntPref(prefix+name);
	}
	return gotten;
}

//@line 38 "/cygdrive/c/builds/tinderbox/Fx-Mozilla1.8-release/WINNT_5.2_Depend/mozilla/browser/components/preferences/security.js"

var classHawkingPane = {
  _pane: null,

  //init function called by XUL file upon pane load
  init : function() {
    this._pane = document.getElementById("paneHawking");
	//this._populatePrefPane();
	//alert("hawking pane loaded");
  },

  test:function(){
	var pref= htbGetPref("borderHighlightColor");
	alert(pref);
  },
};


function captureMoveEvent(ev){
	if(!ev){
		alert('nope');
		return;
	}
	alert(String.fromCharCode(ev.which));
	//htbSetPref("moveEvent",String.fromCharCode(event.which),"Char");
	//alert('hei');
}

var htbCapturing = false;
var htbCaptureWhich = "";
var htbCaptureTimeout;

function htbSetCapturing(b){
	//b should be boolean
	htbCapturing = b;
}


function htbCaptureEventMove(ev){
	var ebut = document.getElementById("htbEngageButton");
	var mbut = document.getElementById("htbMoveButton");
	if(ebut.disabled || mbut.disabled) return;
	ebut.disabled =true;
	mbut.disabled =true;
	mbut.label = "Capturing Move...";

	ev.preventDefault();
	ev.stopPropagation();
	htbSetCapturing(true);
	htbCaptureWhich = "move";
	htbCaptureTimeout = setTimeout("htbNothingCaptured();", 5000);
	return false;
}
function htbCaptureEventEngage(ev){
	var ebut = document.getElementById("htbEngageButton");
	var mbut = document.getElementById("htbMoveButton");
	if(ebut.disabled || mbut.disabled) return;
	ebut.disabled =true;
	mbut.disabled =true;
	ebut.label = "Capturing Engage...";

	ev.preventDefault();
	ev.stopPropagation();
	htbSetCapturing(true);
	htbCaptureWhich = "engage";
	htbCaptureTimeout = setTimeout("htbNothingCaptured();", 5000);
	return false;
}

function htbNothingCaptured(){
	alert("No event was captured");
	htbResetCapture();
}


function htbCaptureEventPref(ev){
	if(!htbCapturing)return true;
	var act = "";
	var prefClick; //moveAct, engageAct (either true for a click or false for a keypress)
	var prefVal; //moveVal, engageVal (either the button number, or the keycode)
	var otherClick;
	var otherVal;
	if(htbCaptureWhich=="move"){
		prefClick = "moveAct";
		prefVal = "moveVal";
		otherClick = "engageAct";
		otherVal = "engageVal";
	}
	else if(htbCaptureWhich=="engage"){
		prefClick = "engageAct";
		prefVal = "engageVal";
		otherClick = "moveAct";
		otherVal = "moveVal";
	}
	else{
		return true;
	}
	knackerEvent(ev);
	otherClick = htbGetPref(otherClick);
	otherVal = htbGetPref(otherVal);
	var etype = ev.type;//either 'click' or 'keydown'
	if(etype=="click"){
		var button = ev.button;
		if(otherClick && button==otherVal){
			//trying to set it as the same preference, do not allow!
			htbDoneCapturing();
			alert("You are already using this key");
			return false;
		}
		//they clicked. was it right/left?
		htbSetPref(prefClick, true, "Bool");
		htbSetPref(prefVal, button, "Int"); //usually 0 for left, 1 for middle, 2 for right
		htbDoneCapturing();
		return false;
	}
	else if(etype=="keydown"){
		//this should be the only other kind, but just in case...
		//now figure out which button was pressed (don't worry about shift/ctrl)
		var key = ev.which;
		if(!otherClick && key==otherVal){
			//trying to set it as the same preference, do not allow!
			htbDoneCapturing();
			alert("You are already using this key");
			return false;
		}
		htbSetPref(prefClick, false, "Bool");
		htbSetPref(prefVal, key, "Int"); //store keycode of key pressed
		htbDoneCapturing();
		return false;
	}
	return true;
}

function htbDoneCapturing(){
	clearTimeout(htbCaptureTimeout);
	htbResetCapture();
}
//htbSetPref("name", "value", "type");
//htbGetPref("name")

function htbResetCapture(){
	htbSetCapturing(false);//done capturing
	var isMove = (htbCaptureWhich=="move");
	htbCaptureWhich = "";
	var trans = htbTranslateAction(isMove);
	if(isMove && $("VisualMoveEvent")){
		$("VisualMoveEvent").value = trans;
	}
	else if(!isMove && $("VisualEngageEvent")){
		$("VisualEngageEvent").value = trans;
	}
	document.getElementById("htbEngageButton").disabled =false;
	document.getElementById("htbMoveButton").disabled =false;
	document.getElementById("htbMoveButton").label = "Set 'Move' Action";
	document.getElementById("htbEngageButton").label = "Set 'Engage' Action";	
}

function htbTranslateAction(isMove){
	//this function should tranlate the preferences into a 
	//description of what the move and engage actions are currently set at
	var prefClick; //true if it was a mouseclick, false if keyboard
	var prefVal; //value of the action event
	var translated = "";
	if(isMove){
		prefClick = "moveAct";
		prefVal = "moveVal";
	}
	else{
		prefClick = "engageAct";
		prefVal = "engageVal";
	}
	var isClick = htbGetPref(prefClick); //boolean
	var val = htbGetPref(prefVal); //integer value
	if(isClick){
		if(val==0)
			translated = "Left Click";
		else if(val==1)
			translated = "Middle Click";
		else if(val==2)
			translated = "Right Click";
		else
			translated = "Unknown Click";
	}
	else{
		translated = String.fromCharCode(val);
	}	
	return translated;
}

function htbFillActions(){
	var trans = htbTranslateAction(true);
	if($("VisualMoveEvent")){
		$("VisualMoveEvent").value = trans;
	}
	trans = htbTranslateAction(false);
	if($("VisualEngageEvent")){
		$("VisualEngageEvent").value = trans;
	}
}