const fetchData = () => { 
fetch('https://jsonplaceholder.typicode.com/todos/160')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        
      })
};

fetchData()
dmmyjson