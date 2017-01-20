import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.get('store').query('product', {name: param });
  }
});
