var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '#current-user-prof',
  template: _.template(tmpl.currentUser),
  initialize: function () {
    this.render();
  },
  render: function () {
    var markup = this.template(this.model);
    this.$el.html(markup);
    return this;
  },
});
