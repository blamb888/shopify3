// Put your application javascript here
const axios = require('axios');

console.log('🛠️ Creating a product metafield...');
console.log('🛠️ Checking url...');
let url = "https://bf39dff873081d5f3188b06656b3cbc1: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@brandon-lambs-store.myshopify.com/admin/products/6693539938454/metafields.json";

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
