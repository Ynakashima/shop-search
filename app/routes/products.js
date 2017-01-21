import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true,
      replace: true
    }
  },
  
  model(params) {
    return this.store.query('product', params);
  }
});
