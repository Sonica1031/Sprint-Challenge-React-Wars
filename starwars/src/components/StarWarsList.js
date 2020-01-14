import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row } from "reactstrap";
import StarWarsCard from './StarWarsCard';

const StarWarsList = () => {
    const [starWarsData, setStarWarsData] = useState([]);

useEffect(() =>{
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
          console.log(res);
        setStarWarsData(res.data.results);
        console.log(starWarsData);
      })
      .catch(err => {
        console.log('Error Code:', err);
      })
  }, []);

  return (
    <Container className="starwars">
      <Row>
        {starWarsData.map(array => {
            return(
            <StarWarsCard
              key={array.id}
              name={array.name}
              height={array.height}
              mass={array.mass}
              hair_color={array.hair_color}
              skin_color={array.skin_color}
              eye_color={array.eye_color}
              birth_year={array.birth_year}
              gender={array.gender}
              homeworld={array.homeworld}
            />
            );
        })}
      </Row>
    </Container>
  );
    }
  export default StarWarsList;
