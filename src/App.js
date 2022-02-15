import './App.css';


const list = [{
  title: "React",
  url: 'https://reactjs.org/',
  author: 'Jordan Walk',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: "Redux",
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
}];


class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const duygu = new Developer('Duygu', 'Cavusoglu');
console.log(duygu.getName());

const gizem = new Developer('Gizem', 'Cavusoglu');
console.log(gizem.getName());


function App() {
  return (
    <div>
      <h1>My hacker stories</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type="text"/>
      <hr/>
      <List/>
       <hr/>
      <List/>
    </div>
  );
}

function List() {

    // list.map(item => {
    //     return <div key={item.objectID}>
    //       <span>
    //         <a href={item.url}>{item.title}</a>
    //       </span>
    //       <span>{item.author}</span>
    //       <span>{item.num_comments}</span>
    //       <span>{item.points}</span>
    //     </div>
    //   })
  const duygu = new Developer('Duygu', 'Cavusoglu');
  const gizem = new Developer('Gizem', 'Cavusoglu');
  return (
    <div>
      {duygu.getName()}
      <br/>
      {gizem.getName()}
    </div>
  )
}
export default App;
