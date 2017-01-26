import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{
      image: "https://img.shopstyle-cdn.com/xim/70/15/70156366a205f534541f164bffce6027.jpg",
      name: "Women's Leith Racerback Shift Dress",
      retailer: "Nordstrom",
      price: "$49",
      url: "https://api.shopstyle.com/action/apiVisitRetailer?id=449426570&pid=uid8025-37880445-57",
      bought: true
    }, {
      image: "https://img.shopstyle-cdn.com/pim/34/fd/34fdf7e57ca3a94cd65869978b30d020_xlarge.jpg",
      name: "Self-Portrait - Guipure Lace And Crepe Midi Dress - Black",
      retailer: "NET-A-Porter",
      price: "$510",
      url: "https://api.shopstyle.com/action/apiVisitRetailer?id=526135184&pid=uid8025-37880445-57",
      bought: false
    }, {
      image: "https://img.shopstyle-cdn.com/pim/5c/1d/5c1d91a81269f171eddc18e81797f05d_xlarge.jpg",
      name: "re:named Off Shoulder Dress",
      retailer: "shopbop.com",
      price: "$72",
      url: "https://api.shopstyle.com/action/apiVisitRetailer?id=528690753&pid=uid8025-37880445-57"
    }];
  }
});
