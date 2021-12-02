import React, { useContext } from 'react';
import { categoryContext } from '../App';
import Categories from './Categories';

const Home = () => {
    const count = useContext(categoryContext)
    return (
        <div style={{border: "1px solid gray", padding: "3rem"}}>
            <h2>This is Home</h2>
            <h2>Count: {count}</h2>
            <Categories />
        </div>
    );
};

export default Home;