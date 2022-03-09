fetch('https://m7rj8l69qk.execute-api.us-east-1.amazonaws.com/Live/getcount')
.then(function(response)
{
  return response.json()
})
.then(function(CounterInJSON)
{
  console.log(CounterInJSON.body.VisitorCount);
  document.querySelector("#VisitorCount").innerHTML = "Total Visitors: " + CounterInJSON.body.VisitorCount;
});