var $ = require('jquery');
var Backbone = require('backbone');
// Backbone ne tente pas un require('jquery'), il exige le global.  Bizarre…
Backbone.$ = $;
