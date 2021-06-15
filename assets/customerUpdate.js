const Shopify = require('shopify-api-node');
const API_KEY = "bf39dff873081d5f3188b06656b3cbc1";
const SECRET = "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";
const CUSTOMER_ID = "5328530178198";
const CUSTOMER_ID2 = "5173186330774";
const REGISTERED_USER = "5332411875478";
const BOBBY_D = "5332394836118";
const SHOP_NAME = 'brandon-lambs-store'

console.log('🛠️ Updating customer marketing opt-in state...');
console.log('🛠️ Creating shopify variable...');

const shopify = new Shopify({
  shopName: `${SHOP_NAME}`,
  apiKey: `${API_KEY}`,
  password: `${SECRET}`
});

console.log('🛠️ Updating marketing permissions...');
console.log('🛠️ Printing customer information...');

async function customerUpdate() {
  shopify.customer
    .update(CUSTOMER_ID, { accepts_marketing: "false" })
    .then((customer) => console.log(customer))
    .catch((err) => console.error(err));

  shopify.customer
    .list({ limit: 5 })
    .then((customer) => console.log(customer))
    .catch((err) => console.error(err));
}

customerUpdate();

console.log('✔️ Everything looks good. Congratulations on updating your customer information!🎉');
