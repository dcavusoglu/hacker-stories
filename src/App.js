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

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}


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

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search'
  );

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase()
    .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My hacker stories</h1>
      <Search search ={searchTerm} onSearch={handleSearch}/>
      <hr/>
      <List list={searchedStories}/>
    </div>
  );
};

const Search = ( { search, onSearch} ) => {
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input id='search' type="text" value ={search} onChange={onSearch}/>
    </div>
  );
};

const List = ({ list }) =>
    list.map(item => <Item key={item.objectID} item = {item}/>);
    const Item = ( {item} ) => (
        <div>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      );

export default App;
