import React from 'react';
import './App.css';

// class Developer {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const duygu = new Developer('Duygu', 'Cavusoglu');
// console.log(duygu.getName());

// const gizem = new Developer('Gizem', 'Cavusoglu');
// console.log(gizem.getName());


const App = () => {
  const stories = [{
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
  const handleSearch = e => {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>My hacker stories</h1>
      <Search onSearch={handleSearch}/>
      <hr/>
      <List list={stories}/>
    </div>
  );
};

const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = e => {
    setSearchTerm(e.target.value);
    props.onSearch(e);
  };
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input id='search' type="text" onChange={handleChange}/>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = props => (
    props.list.map(item => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
    ))
)
export default App;
