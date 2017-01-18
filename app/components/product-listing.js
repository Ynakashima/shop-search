import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },

    toggleHidden(product) {
      product.toggleProperty('hidden');
      console.log(">>>>toggleHidden button works!", product);
      product.save();
    }
  }
});
