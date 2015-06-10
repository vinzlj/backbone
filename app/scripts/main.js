require('initialize');

var $ = require('jquery');

var coucou = require('coucou');
var yo = coucou.hello();

$('#content').html(yo);
