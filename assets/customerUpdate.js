const Shopify = require('shopify-api-node');
const API_KEY = "bf39dff873081d5f3188b06656b3cbc1";
const SECRET = "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";
const CUSTOMER_ID = "5328530178198";
const CUSTOMER_ID2 = "5173186330774";

console.log('🛠️ Updating customer marketing opt-in state...');
console.log('🛠️ Creating shopify variable...');

const shopify = new Shopify({
  shopName: 'brandon-lambs-store',
  apiKey: `${API_KEY}`,
  password: `${SECRET}`
});

async function customerUpdate() {
  shopify.customer
    .update(CUSTOMER_ID2, { accepts_marketing: "true" })
    .then((customer) => console.log(customer))
    .catch((err) => console.error(err));

  console.log('🛠️ Updating marketing permissions...');
  console.log('🛠️ Printing customer information...');

  shopify.customer
    .list({ limit: 5 })
    .then((customer) => console.log(customer))
    .catch((err) => console.error(err));

  console.log('✔️ Everything looks good. Congratulations on updating your customer information!🎉');

}

customerUpdate();
