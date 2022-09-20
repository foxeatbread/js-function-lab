fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(responseBody => {
     const todos = responseBody;
     const todoTitles = todos.map( todo => {
        return {
            title: `${todo.title} `,
        };
      });
      todoTitles.forEach(titles => {
        console.log(`${titles.title}`)
      });
  })
  .catch(function(err) { 
    console.log(err);
  });