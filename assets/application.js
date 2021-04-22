// Put your application javascript here
const axios = require('axios');

console.log('metafields');

let url = "https://bf39dff873081d5f3188b06656b3cbc1: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@brandon-lambs-store.myshopify.com/admin/products/6685493887126/metafields.json";

console.log(url);

function createMetafield() {

  number = axios.get(url).then(response => console.log(response.data.metafields[0].value));

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


}

// function axiosTest() {
//      return axios.get(url).then(response => console.log(response.data.metafields[0].value));
// }

// createMetafield();
axiosTest();
