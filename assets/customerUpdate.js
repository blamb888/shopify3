require('dotenv').config();
const Shopify = require('shopify-api-node');

console.log('🛠️ Updating customer marketing opt-in state...');
console.log('🛠️ Creating shopify variable...');

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.SECRET
});

console.log('🛠️ Updating marketing permissions...');
console.log('🛠️ Printing customer information...');

async function customerUpdate() {
  shopify.customer
    .update(process.env.CUSTOMER_ID, { accepts_marketing: "false" })
    .then((customer) => console.log(customer))
    .catch((err) => console.error(err));
}

customerUpdate();

console.log('✔️ Everything looks good. Congratulations on updating your customer information!🎉');
