import './App.css';

const title = "React";
const welcome = {
  greeting: "Hello",
  title: "React"
}
function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
    <h1>{welcome.greeting} {getTitle('me')}!</h1>
    <label htmlFor='search'>Search:</label>
    <input id='search' type='text'/>
    </div>
  );
}

export default App;
