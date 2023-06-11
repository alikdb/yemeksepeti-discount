export default function _getFifty() {

  return fetch('https://disco.deliveryhero.io/product-listing/api/v1/components', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "language_code": "tr_TR",
      "location": {
        "point": {
          "latitude": 36.9177568,
          "longitude": 30.6989997
        },
        "timezone": "Europe/Istanbul"
      },
      "vendor_id": "cre4",
      "include_fields": [
        "feed"
      ],
      "include_component_types": [
        "multi_list"
      ],
      "customer_id": "trnhsy47",
      "platform": "web",
      "include_unavailable_products": "false",
      "is_darkstore": true,
      "brand": "yemeksepeti",
      "country_code": "tr",
      "limit": 100,
      "offset": 0,
      "category_id": "4abb2559-5b1c-4ca2-a103-908521e6653f"
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });

}
