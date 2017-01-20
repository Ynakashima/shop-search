import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      console.log("I'm in filter entry");
      let filterInputValue = this.get('value');
      console.log(filterInputValue);
      let filterAction = this.get('filter');

      filterAction(filterInputValue).then(function(filterResults){ console.log(filterResults);
        this.set('results', filterResults);

    });

    }
  }


});
