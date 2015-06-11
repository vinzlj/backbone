require('scripts/initialize');

var coucou = require('scripts/components/coucou');
var yo = coucou.hello();

$('#content').html(yo);

var App = {
    init: function init() {
        console.log('App initialized.');
        console.log(Backbone.View);
    }
};

console.log(Backbone.View);

module.exports = App;
window.App = App;
