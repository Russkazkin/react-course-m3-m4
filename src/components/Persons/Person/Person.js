import React, {Component} from "react";
import styles from './Person.module.sass';
import styled from 'styled-components';

const StyledDiv = styled.div`
  @media (max-width: 767px) {
    width: 90%;
  }
`;

class Person extends Component {
    render() {
        const {name, age, click, changed, children} = this.props;
        return (
            <StyledDiv className={'card ' + styles.Person}>
                <div className="card-body">
                    <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
                    <p>{children}</p>
                    <input className="form-control" onChange={changed} value={name}/>
                </div>
            </StyledDiv>
        );
    }
}

export default Person;