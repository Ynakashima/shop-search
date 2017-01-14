import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleHidden(product) {
      product.toggleProperty('hidden');
      console.log(">>>>toggleHidden button works!", product);
      product.save();
    }
  }
});
