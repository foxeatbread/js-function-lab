fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const profiles = responseBody;
     const completedTodo = profiles.filter(profiles => profiles.completed==true);
     completedTodo.forEach( todo => {
      console.log(`${todo.title} - ${todo.completed}`)
    });
  })
  .catch(function(err) { 
    console.log(err);
  });