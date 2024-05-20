import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Container, Row , Col} from 'react-bootstrap'
import Pizza from "../components/pizza"
import {getAllPizzas} from "../Actions/pizzaAction";
import Loader from '../components/loader';
import Error from '../components/error';

const Home = () => {
  const dispatch= useDispatch();
  const pizzaState= useSelector(state=>state.getAllPizzaReducer)
  const { loading, pizzas ,error} = pizzaState;
  useEffect(()=>{dispatch(getAllPizzas())}, [dispatch])
  return (
    <>
    <Container>
      {loading?(<Loader />)
             : error ? (<Error>Error while fetching data</Error>):(<Row>
             {pizzas.map((pizza)=>(
               
              <Col md={4}>
                
                <Pizza pizza={pizza} />
              </Col>
              ))}
          </Row>
     ) }     
    </Container>
     
    </>
  );
};

export default Home;
