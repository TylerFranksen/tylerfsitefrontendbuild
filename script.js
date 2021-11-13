fetch('https://m7rj8l69qk.execute-api.us-east-1.amazonaws.com/Live/getcount')
.then(function(response) {
  return response.text();
}).then(function(data) {
  console.log("Total Visitors: " + data);
}).catch(function() {
  console.log("Booo");
});