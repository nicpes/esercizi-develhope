const order = {};

let city = order?.customer?.address?.city ?? "City is required";

console.log(city);
