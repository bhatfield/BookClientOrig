var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.add.close();
}

function saveBook(e) {
	dialogs.confirm({message: 'Are you sure you want to save?', callback: function() {
		Alloy.Collections.book.create({title: $.title.value, author: $.author.value});
		$.title.value = $.author.value = '';
	}});
}