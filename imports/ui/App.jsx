import React, { Component } from "react";
import Home from "./Home";
import Posts from "./Posts";
import NewPost from "./NewPost";
import PostDetail from "./PostDetail";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";


var myVar = setInterval(myTimerStart, 1000);

function myTimerStart() {
  var d = new Date();
  var startTime = d.toLocaleTimeString();
  return startTime;
}

var mynewVar = setInterval(myTimerEnds,1000);
function myTimerEnds() {
  var d = new Date();
  var endTime = d.toLocaleTimeString();
  return endTime;
}

function generateID() {
  var number = Math.random();
  number.toString(10);
  var postId = number.toString(10).substr(2, 7);
  return postId;
}



class App extends Component {
  state = {
    inputTitle: "",
    inputContent: "",
    deletedData: "",
    infos: [
      {
        title: "Improve visibility",
        postId: "8782031",
        content: "Welcome to world of happiness",
        startTime:"10:06:36 AM",
        endTime:11,
      },
      {
        title: "Business as Unusual",
        postId: "2320381",
        content: "Welcome to world of happiness",
        startTime:"11:06:36 AM",
        endTime:12
      }
    ],
    flag: true
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value =  target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  };
  getFirstInfo = () => {
    let data = {
      title: this.state.inputTitle,
      category: this.state.selectOption,
      postId: generateID(),
      content: this.state.inputContent,
      startTime: myTimerStart(),
      endTime:myTimerEnds()
    };
    this.state.infos.push(data);
    this.setState({
      infos: [...this.state.infos],
      flag: true
    });
    console.log(this.state.infos);
  };
 

  deletefirstInfo = postId => {
    const infos = this.state.infos.filter(info => info.postId !== postId);
    console.log(infos);
    this.setState({
      infos,
      flag: true
    });
  };

 
  inputContent = e => {
    this.setState({
      inputContent: e.target.value
    });
  };
  inputTitle = e => {
    this.setState({
      inputTitle: e.target.value
    });
  };

  render() {
    console.log("test", this.props.history);
    return (
      <Router>
        <div className="App">
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/posts">Projects </Link>
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/posts"
                render={props => (
                  <Posts
                    {...props}
                    infos={this.state.infos}
                    deletefirstInfo={this.deletefirstInfo}
                    timeIn = {this.myTimerStart}
                    timeOut = {this.myTimerEnds}
                    editInfo={this.editInfo}
                  />
                )}
              />

              <Route
                exact
                path="/posts/newpost"
                render={props => (
                  <NewPost
                    {...props}
                    getFirstInfo={this.getFirstInfo}
                    handleChange={this.handleChange}
                    inputTitle={this.inputTitle}
                    inputContent={this.inputContent}
                    deletefirstInfo={this.deletefirstInfo}
                    infos={this.state.infos}
                  />
                )}
              />
              <Route
                exact
                path="/posts/:postId"
                render={props => (
                  <PostDetail
                    {...props}
                    infos={this.state.infos}
                    deletefirstInfo={this.deletefirstInfo}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
