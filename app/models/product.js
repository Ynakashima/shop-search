import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  retailer: DS.attr('string'),
  price: DS.attr('number'),
  hidden: DS.attr('boolean')
});
