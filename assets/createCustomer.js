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

  const timestamp = createTimestamp();

  const customer_search_array = await shopify.customer
    .search( {email: customer_email} )
    .catch((err) => console.error(err));
  const customer_search = customer_search_array[0];

  if(customer_search.length === 0) {
    console.log("customer search came up nill")
    const new_customer = await shopify.customer
      .create({
        email: customer_email,
        tags: [ "MailUnsubscribe", `${timestamp}` ]
      })
      .catch((err) => console.error(err));
    console.log("new customer created")
    console.log(new_customer);
    const customer_id = new_customer.id
    console.log("This is the customer ID from the if: " + customer_id);
  } else {
    console.log("customer search returned this:")
    console.log(customer_search);
    const customer_id = customer_search.id;
    console.log("This is the customer ID from the Else: "+ customer_id);
      // Grab existing tags from customer_search object
      const existing_tags = customer_search.tags;
      console.log("This is the existing_tags var: " + existing_tags);
      // Add existing tags to tags array in update method
      const updated_customer = await shopify.customer
        .update(customer_id, {
          accepts_marketing: "false",
          tags: [ `${existing_tags}`, "MailUnsubscribe", `${timestamp}` ]
        })
        .catch((err) => console.error(err));
        console.log("This is the update method");
        console.log(updated_customer);
  }

}

const YOSHIE_EMAIL = process.env.YOSHIE_EMAIL;
const BRANDON_EMAIL = process.env.BRANDON_EMAIL;
const BRANDON_EMAIL_FS = process.env.BRANDON_EMAIL_FS;
const BOBBY_D_EMAIL = process.env.BOBBY_D_EMAIL;
const RU_EMAIL = process.env.RU_EMAIL;

createCustomer(BRANDON_EMAIL_FS);

module.exports = { createCustomer }
