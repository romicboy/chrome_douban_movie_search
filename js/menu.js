var selection = chrome.contextMenus.create({
	"title" : "豆瓣电影搜索",
	"contexts" : [ "selection" ],
	"onclick" : function(info, tab) {
		window.open("http://movie.douban.com/subject_search?search_text="
				+ info.selectionText);
	}
});