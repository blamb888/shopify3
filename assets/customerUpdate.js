require('dotenv').config();
const Shopify = require('shopify-api-node');

console.log('🛠️ Updating customer marketing opt-in state...');
console.log('🛠️ Creating shopify variable...');

const {
  createCustomer,
  createTimestamp
} = require('./createCustomer');

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.SECRET
});

const YOSHIE_EMAIL = process.env.YOSHIE_EMAIL;
const BRANDON_EMAIL = process.env.BRANDON_EMAIL;
const BRANDON_EMAIL_FS = process.env.BRANDON_EMAIL_FS;
const BOBBY_D_EMAIL = process.env.BOBBY_D_EMAIL;
const RU_EMAIL = process.env.RU_EMAIL;

console.log('🛠️ Updating marketing permissions...');
console.log('🛠️ Printing customer information...');

async function customerUpdate() {
// START------------------ ORIGINAL CODE W/O CUSTOMER CREATION
// Get customer information (ID) from email
  // let customer = await shopify.customer
  //   .search( {email: YOSHIE_EMAIL} )
  //   .catch((err) => console.error(err));
// Parse the ID
  // console.log(typeof customer);
  // let customer_id = customer[0].id;
  // console.log(customer_id);
// END------------------- ORIGINAL CODE W/O CUSTOMER CREATION

//START------------------ UPDATED CODE WITH CUSTOMER CREATION


//END ------------------ UPDATED CODE WITH CUSTOMER CREATION




// CODE TO UPDATE MARKETING STATUS
  await shopify.customer
  .update(customer_id, { accepts_marketing: "false" })
  .catch((err) => console.error(err));
  console.log("this is the update method");
  console.log(customer);
}

customerUpdate();

console.log('✔️ Everything looks good. Congratulations on updating your customer information!🎉');
