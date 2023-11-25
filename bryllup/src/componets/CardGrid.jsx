import React from 'react';
import Card from 'react-bootstrap/Card';


const CardGrid = ({ cards }) => {
    return (
        <div className={"cardGrid"}>
            {cards.map((card, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default CardGrid;
