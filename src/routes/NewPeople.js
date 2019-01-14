import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { newPeopleCSS as css } from '../style';
import Person from '../components/Person';

class NewPeople extends Component {
  state = {
    randoms: [],
  }

  static propTypes = {
    addPerson: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.getPeople();
  }

  callApi = key => axios.get(key)

  getPeople = () => {
    const API_KEY = 'https://randomuser.me/api/?results=10';
    const json = this.callApi(API_KEY);
    return json.then(res => this.setState({ randoms: res.data.results }));
  }

  // evenPersonStyling = arr =>

  render() {
    const { randoms } = this.state;
    const { addPerson } = this.props;
    return (
      <section style={css.section}>
        {randoms.map(person => <Person person={person} addPerson={addPerson} />)}
      </section>
    );
  }
}

export default NewPeople;
