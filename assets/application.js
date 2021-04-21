// Put your application javascript here
const axios = require('axios');

console.log('metafields');

let url = "https://brandon-lambs-store.myshopify.com/admin/products/bf39dff873081d5f3188b06656b3cbc1/metafields.json";

console.log(url);

// const metafield = JSON.stringify({
//   "metafield": {
//     "namespace": "global",
//     "key": "test",
//     "value": +1,
//     "value_type": "integer"
//   }
// })


const data = {
  "metafield": {
    "namespace": "global",
    "key": "test",
    "value": +1,
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
