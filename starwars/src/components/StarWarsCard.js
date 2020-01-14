import React from 'react';
import StarWarsList from './StarWarsList';
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const StarWarsCard = props => {
    return(
        <Card>
        <CardBody className="starwars-list">
          <CardTitle>name: {props.name}</CardTitle>
          <CardSubtitle>height: {props.height}</CardSubtitle>
          <CardSubtitle>mass: {props.mass}</CardSubtitle>
          <CardSubtitle>hair_color: {props.hair_color}</CardSubtitle>
          <CardSubtitle>skin_color: {props.skin_color}</CardSubtitle>
          <CardSubtitle>eye_color: {props.eye_color}</CardSubtitle>
          <CardSubtitle>birth_year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>homeworld: {props.homeworld}</CardSubtitle>
        </CardBody>
      </Card>
    );
}

export default StarWarsCard;
