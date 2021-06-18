require('dotenv').config();
const Shopify = require('shopify-api-node');

console.log('🛠️ Updating customer marketing opt-in state...');
console.log('🛠️ Creating shopify variable...');

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.SECRET
});

const customer_email = 'loki@hotmail.co.jp';

console.log('🛠️ Updating marketing permissions...');
console.log('🛠️ Printing customer information...');

async function customerUpdate() {
// Get customer information (ID) from email
  let customer = await shopify.customer
    .search( {email: customer_email} )
    .catch((err) => console.error(err));
// Parse the ID
  console.log(typeof customer);
  let customer_id = customer[0].id;
  console.log(customer_id);


  await shopify.customer
  .update(customer_id, { accepts_marketing: "true" })
  .catch((err) => console.error(err));
  console.log(customer);
}

customerUpdate();

console.log('✔️ Everything looks good. Congratulations on updating your customer information!🎉');
