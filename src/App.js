import React from 'react';
import logo from './logo.svg';
import Comments from './components/Comments/Comments';
import Posts from './components/Posts/Posts';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';

 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
          <nav>
            <ul className="formatLinks">
              <li style={{display:'inline-block',margin:'20px'}}><NavLink to="/">Home</NavLink></li>
              <li style={{display:'inline-block',margin:'20px'}}><NavLink to="/comments">Comments</NavLink></li>
              <li style={{display:'inline-block',margin:'20px'}}><NavLink to="/posts">Posts</NavLink></li>
            </ul>
          </nav>
      </header>
      
  <Route path="/" render={()=> <h2> Welcome to API calling SPA Application ! </h2>} exact />
      <Route path="/comments" component={Comments} exact />
      <Route path="/posts" component={Posts} exact />      
    </div>
    </BrowserRouter>
  );
}

export default App;
