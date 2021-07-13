require('dotenv').config();
const Shopify = require('shopify-api-node');

const {
  createTimestamp
} = require('./createTimestamp');

console.log('🛠️ Searching Shopify database for customer email..');
console.log('🛠️ Will create new customer if results are empty...');

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.SECRET
});

async function createCustomer(customer_email) {

  let timestamp = createTimestamp();

  let customer_search = await shopify.customer
    .search( {email: customer_email} )
    .catch((err) => console.error(err));

  if(customer_search.length === 0) {
    console.log("customer search came up nill")
    let new_customer = await shopify.customer
      .create({
        email: customer_email,
        tags: [ "MailUnsubscribe", `${timestamp}` ]
      })
      .catch((err) => console.error(err));
    console.log("new customer created")
    console.log(new_customer);
    let customer_id = new_customer.id
    console.log(customer_id);
  } else {
    console.log("customer search returned this:")
    console.log(customer_search);
    let customer_id = customer_search[0].id;
    console.log(customer_id)

      let updated_customer = await shopify.customer
        .update(customer_id, { accepts_marketing: "false" })
        .catch((err) => console.error(err));
        console.log("this is the update method");
        console.log(updated_customer);
  }

}

const YOSHIE_EMAIL = process.env.YOSHIE_EMAIL;
const BRANDON_EMAIL = process.env.BRANDON_EMAIL;
const BRANDON_EMAIL_FS = process.env.BRANDON_EMAIL_FS;
const BOBBY_D_EMAIL = process.env.BOBBY_D_EMAIL;
const RU_EMAIL = process.env.RU_EMAIL;

createCustomer('brandon+to@flagship.cc');

module.exports = { createCustomer }
