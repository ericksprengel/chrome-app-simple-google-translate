
var context = "selection";
var title = "Translate...";
var id = chrome.contextMenus.create({
		"title": title,
		"contexts":[context],
        "onclick": function(info, tab) {
			console.log(info);
			window.open("http://translate.google.com/#auto/pt/" + info.selectionText);
		}
	});