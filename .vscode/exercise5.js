fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
     const answer = todos.reduce((acc,todo) => {
        todo.completed
        ?acc
        :acc.push({userId:todo.userId,title:todo.title})
        return acc;
     },[])
     console.log(answer)
  })
  .catch(function(err) { 
    console.log(err);
  });