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
    'search',
    'React'
    );

    const handleSearch = e => {
      setSearchTerm(e.target.value);
    };

    const searchedStories = stories.filter(story =>
      story.title.toLowerCase()
      .includes(searchTerm.toLowerCase())
      );

      return (
        <div>
      <h1>My hacker stories</h1>

      <InputWithLabel
        id='search'
        value ={searchTerm}
        onInputChange={handleSearch}
        >
        <strong>Search</strong>
      </InputWithLabel>
      <hr/>
      <List list={searchedStories}/>
      <hr/>
    </div>
  );
};

// const Search = ( { search, onSearch} ) => {
  //   return (
    //     <>
    //       <label htmlFor='search'>Search:</label>
    //       <input id='search' type="text" value ={search} onChange={onSearch}/>
    //     </>
    //   );
    // };


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

const InputWithLabel = ({ id, value, type='text', onInputChange, isFocused, children, }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
  <>
    <label htmlFor="{id}">{children}</label>
    &nbsp;
    <input
      ref={inputRef}
      id={id}
      type='text'
      value={value}
      autoFocus={isFocused}
      onChange={onInputChange}
    />
  </>
  )
};


export default App;
