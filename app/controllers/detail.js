var args = arguments[0] || {};
var book = args.toJSON();
var model = args;
$.author.value = book.author || 'No author';
$.title.value = book.title || 'No title';

var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.detail.close();
}

function updateBook(e) {
	dialogs.confirm({message: 'Are you sure you want to make changes?', callback: function() {
		model.save({title: $.title.value, author: $.author.value});
	}});
}

function deleteBook(e) {
	dialogs.confirm({message: 'Are you sure you want to delete this book?', callback: function() {
		model.destroy();
		$.detail.close();
	}});
}
