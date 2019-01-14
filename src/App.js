import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Greeting from './routes/Greeting';
import MyPeople from './routes/MyPeople';
import NewPeople from './routes/NewPeople';
import Header from './components/Header';

class App extends Component {
  state = {
    people: [],
  }

  addPerson = (person) => {
    const { people } = this.state;
    this.setState({ people: [...people, person] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Greeting} />
            <Route exact path="/myPeople" component={MyPeople} />
            <Route eaxct path="/newPeople" render={routeProps => (<NewPeople {...routeProps} addPerson={this.addPerson} />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
