fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
     const completedTodo = todos.filter(todos => todos.completed==true);
     let idTimes = completedTodo.reduce(function(obj,name){
        obj[name.userId] = obj[name.userId] ? ++obj[name.userId] : 1;
        return obj;
     },[])
     console.log(idTimes)
  })
  .catch(function(err) { 
    console.log(err);
  });