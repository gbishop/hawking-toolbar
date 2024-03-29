/* 
 * Cross-browser event handling, by Scott Andrew
 */
function addEvent(element, eventType, lamdaFunction, useCapture) {
     if (element.addEventListener) {
        element.addEventListener(eventType, lamdaFunction, useCapture);
        return true;
    } else if (element.attachEvent) {
        var r = element.attachEvent('on' + eventType, lamdaFunction);
        return r;
    } else {
        return false;
    }
}

/* 
 * Kills an event's propagation and default action
 */
function knackerEvent(eventObject) {
    if (eventObject && eventObject.stopPropagation) {
        eventObject.stopPropagation();
    }
    if (window.event && window.event.cancelBubble ) {
        window.event.cancelBubble = true;
    }
    
    if (eventObject && eventObject.preventDefault) {
        eventObject.preventDefault();
    }
    if (window.event) {
        window.event.returnValue = false;
    }
}

/* 
 * Safari doesn't support canceling events in the standard way, so we must
 * hard-code a return of false for it to work.
 */
function cancelEventSafari() {
    return false;        
}

function htbCountRealChildren(parent){
	var count = 0;
	if(parent && parent.childNodes){
		for(var i=0; i<parent.childNodes.length; i++){
			if(parent.childNodes[i].nodeName!="#text" && parent.childNodes[i].nodeName!="#comment")
				count++;
		}
	}
	return count;
}

function htbGetFirstRealChild(parent){
	if(parent && parent.childNodes){
		for(var i=0; i<parent.childNodes.length; i++){
			if(parent.childNodes[i].nodeName!="#text" && parent.childNodes[i].nodeName!="#comment")
				return parent.childNodes[i];
		}
	}
	return false;
}
