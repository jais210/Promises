import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {search, getPlanets} from './actions';
import {Planet} from './Planet';

const App = ({items}) =>  {
  const allPlanets = items.map((planet, index) => {
    return(
      <li key={index}>
        <Planet name={planet.name} dens={planet.dens} />
      </li>
    );
  })
  return (
    <Grid >
      <Row>
        
          <div>
            <h1>Hello! I am a planet</h1>
            <p>If you know me, please touch next button</p>
          </div>
        
        <Col>
          <Button 
            onClick={() => getPlanets()}
            >
            CHECK
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>{ items.length!=0 ? 
            <ul>{allPlanets}</ul>
                  :
                  <br/>
                }
            </div>    
        </Col>
      </Row>
    </Grid>
  );
}

const mapToProps = ({items}) => ({items})
export default connect(mapToProps)(App);
