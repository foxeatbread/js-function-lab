fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
     const uncompletedTodos = todos.filter(todos => todos.completed==false).map(todo => {return {title: `${todo.userID}-${todo.title} `,};});
     console.log(uncompletedTodos)
  })
  .catch(function(err) { 
    console.log(err);
  });