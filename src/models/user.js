var $ = require('jquery');
var Backbone = require("backbone");
var Campaigns = require('../collections/campaigns');

var User = module.exports = Backbone.Model.extend({
  __name__: 'User',

  urlRoot: '/user',

  defaults: {
      name: '',
      email: ''
  }
});