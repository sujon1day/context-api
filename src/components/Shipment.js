import React, { useContext } from 'react';
import { categoryContext } from '../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext)
    return (
        <div style={{border: "1px solid gray", padding: "3rem"}}>
            <h2>This is Shipment</h2>
            <h2>Count: {category}</h2>
            <button onClick={() => setCategory(category + 1)}>Update State</button>
        </div>
    );
};

export default Shipment;