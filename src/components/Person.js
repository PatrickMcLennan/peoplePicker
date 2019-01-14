import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Person extends PureComponent {
  static propTypes = {
    person: PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }),
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
      }),
      dob: PropTypes.shape({
        age: PropTypes.number.isRequired,
      }),
      email: PropTypes.string.isRequired,
    }),
    addPerson: PropTypes.func.isRequired,
  }

  render() {
    const { person, addPerson } = this.props;
    return (
      <Random>
        <img src={person.picture.large} alt={person.name.first} />
        <figcaption>
          <h5>
            <span> Name: </span>
            {person.name.first}
            {' '}
            {person.name.last}
          </h5>
          <h5>
            <span> City: </span>
            {person.location.city}
            {','}
            {' '}
            {person.location.state}
          </h5>
          <h5>
            <span> Age: </span>
            {person.dob.age}
          </h5>
          <h5>
            <span> Email: </span>
            {person.email}
          </h5>
          <button onClick={() => addPerson(person)}>Pick Me</button>
        </figcaption>
      </Random>
    );
  }
}

const Random = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border: 1px solid red;
  cursor: pointer;
  transform: scale(1);
  box-shadow: 1rem 1rem 5rem rgba(0,0,0,.25),
               inset .5rem .5rem 5rem rgba(0,0,0,.25);
  transition: all .3s ease-in-out;
  padding: 1.5vh;

  > img {
    flex: 0 0 30vw;
    align-self: stretch;
    object-fit: cover;
    border-radius: 5%;
    box-shadow: 1rem 1rem .5rem black,
    border-radius: 2.5%;
    transform: scale(1);
    transition: all .5s;
  }

  > figcaption {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: stretch;

    & > *:not(button) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: 1;
      justify-content: space-between;
      color:  white;
      text-transform: uppercase;
      font-weight: 100;
      font-size: 2.75rem;
      letter-spacing: .2rem;
    }

    & > * span {
      margin-left: 4vh;
      font-weight: 300;
    }

    > button {
      margin: 2.5vh 10%;
      height: 5vh;
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: .25rem;
      color: white;
      background: none;
      border: 1px solid red;
      transform: scale(1);
      cursor: pointer;

      & button:active {
        transform: scale(.9)
      }
      & button:hover {
        font-style: italic;
      }
    }
  }

  &:hover {
    transform: scale(1.02)
  }

  &:hover img {
    margin: .25vh 0;
    transform: scaleX(1.08);
  }

`;

export default Person;
