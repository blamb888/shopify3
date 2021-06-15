// Put your application javascript here
require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const SECRET = process.env.SECRET;
const PRODUCT = process.env.PRODUCT;

console.log('🛠️ Creating a product metafield...');
console.log('🛠️ Checking url...');
let url = `https://${API_KEY}:${SECRET}@brandon-lambs-store.myshopify.com/admin/products/${PRODUCT}/metafields.json`;

console.log(`✔️ URL: ${url}`);

async function createMetaField() {

  await axios.get(url)
  .then(function(response) {
    if(response.status === 200 && response.data.metafields[0]!== undefined) {
      number = response.data.metafields[0].value;
    } else {
      number = 0;
    };
  })

  console.log('🧰 Checking current value of product metafield...');
  console.log(`✔️ Current metafield count: ${number}`);
  console.log('🧰 Axios should return Status: 201...');

  const data = {
    "metafield": {
      "namespace": "global",
      "key": "test",
      "value": number += 1,
      "value_type": "integer"
    }
  };

  axios.post(url, data)
  .then((res) => {
    console.log(`Status: ${res.status}`);
    console.log('Body: ', res.data);
  }).catch((err) => {
    console.error(err);
  });

  console.log('✔️ Everything looks good. Congratulations on creating or updating your metafield value!🎉');
}

  createMetaField();
