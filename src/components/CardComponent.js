import { Card } from "antd";
import React from "react";
import '../styles/card.css';
const CardComponent = ({ data }) => {
    return (
        <Card className="cardStyle">
        {data}
        </Card>
    );
}
export default CardComponent;