import React from 'react';
import Card from 'react-bootstrap/Card';

const CardGrid = ({ items }) => {
    return (
        <div className={"cardGrid"}>
            {items.map((item, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default CardGrid;
