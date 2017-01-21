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
          // self.get('store').push(results);
        });
        // this.set('product', productsReturned);
      } else {
        return this.get('store').findAll('product');
      }
    }
  },

  // filterResults: function() {
  //   return this.get('products').filterBy('name', true);
  // }.property('@products.@each.name')

  // queryParams: ['name'],
  // name: null,
  //
  // filteredProducts: Ember.computed('name', 'model', function() {
  //   var name = this.get('name');
  //   var products = this.get('model');
  //
  //   return products.filterBy('name', name);
  //
  // })
});
