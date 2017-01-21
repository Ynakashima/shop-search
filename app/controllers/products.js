import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name'],
  name: null,
  actions: {
    filterBySearch(params) {
      console.log("in Controller:", params);
      if (params !== '') {
        // return
        // var self = this;
        return this.get('store').query('product', { name: params}).then(function(params){
          console.log(params);
        });
      } else {
        return this.get('store').findAll('product');
      }
    }
  },

});
