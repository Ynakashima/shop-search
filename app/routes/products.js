import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true,
      replace: true
    }
  },
  // model: function(param) {
  //   return this.get('store').query('product', {name: param });
  // }

  model(params) {
    return this.store.query('product', params);
  }
});
