import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name'],
  name: null,
  actions: {
    filterBySearch(param) {
      console.log("in Controller:", param);
      if (param !== '') {
        // return
        // var self = this;
        return this.get('store').query('product', { name: param}).then(function(results){
          console.log(results);
          // self.get('store').push(results);
        });
        // this.set('product', productsReturned);
      } else {
        return this.get('store').findAll('product');
      }
    }
  }

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
