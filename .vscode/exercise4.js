fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
  })
  .catch(function(err) { 
    console.log(err);
  });