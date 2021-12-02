import React, { useContext } from 'react';
import { categoryContext } from '../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    

    return (
        <div style={{border: "1px solid gray", padding: "3rem"}}>
            <h2>This is Header</h2>
            <h2>Count: {category}</h2>
            <button onClick={() => setCategory(category + 1)}>Update Count</button>
        </div>
    );
};

export default Header;