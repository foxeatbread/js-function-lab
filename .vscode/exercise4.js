fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
     const completedID = todos.filter(todos => todos.completed==true).map(todo => `${todo.userID}`);
     const completedTodoNum = completedID.reduce((initialValue) =>{return initialValue+1},0)
     console.log(completedTodoNum)
  })
  .catch(function(err) { 
    console.log(err);
  });