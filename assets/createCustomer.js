require('dotenv').config();
const Shopify = require('shopify-api-node');

console.log('🛠️ Searching Shopify database for customer email..');
console.log('🛠️ Will create new customer if results are empty...');

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

async function createCustomer() {
  let customer_search = await shopify.customer
    .search( {email: BRANDON_EMAIL_FS} )
    .catch((err) => console.error(err));

  console.log(customer_search);

  if(customer_search.length === 0) {
    console.log("customer search came up nill")
    let new_customer = await shopify.customer
      .create({
        email: BRANDON_EMAIL_FS,
        tags: "MailUnsubscribe"
      })
      .catch((err) => console.error(err));
    console.log("new customer created")
    console.log(new_customer);
  } else {
    console.log("customer search returned this:")
    console.log(customer_search);
  }

}

createCustomer();
