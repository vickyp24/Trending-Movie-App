import React, { useEffect, useReducer } from "react";
import "../App.css";
import Navigation from "./Navbar";
import Movie from "./Movies";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      posts: [] // to be deleted
    }
    // this.filterItem = this.filterItem.bind(this);
  }

  componentDidMount() {
    // Fetch data
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => {
      this.setState({ posts: data });
      // console.log(this.state.posts)
    })
  }
/*
  filterItem(input) {
    let results = this.state.posts;
    let filteredResults = results.filter((post) => post.title.includes(input));
    this.setState({ posts: filteredResults });
  }*/

   filterItem = (input) => {
    let results = this.state.posts;
    let filteredResults = results.filter((post) => post.title.includes(input));
    this.setState({ posts: filteredResults });
  }

  render() {
    return (
      <div className = "App">
        <Navigation search = {Navigation} />
        <Search search={this.filterItem} />
        <p className="App-intro">Top Ranked Movies</p>
        <ul>
        {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
