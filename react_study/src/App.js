import logo from './logo.svg';
import './App.css';

const topics = [
  {id:1, title:'html', body:'html is ...'},
  {id:2, title:'css', body:'css is ...'},
  {id:3, title:'js', body:'js is ...'}
]

function Header(props) {
  console.log('props', props.title)
  return (
    <div>
      <header>
        <h1>
          <a href="/">{props.title}</a>
        </h1>
      </header>
    </div>
  );
}

function Nav() {
  const lis = [
    <li><a href="/read/1">html</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, web"></Article>
    </div>
  );
}

export default App;
