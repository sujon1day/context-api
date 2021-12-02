import React, { useContext } from 'react';
import { categoryContext } from '../App';

const CategoryDetail = () => {
    const category = useContext(categoryContext)
    return (
        <div style={{border: "1px solid gray", padding: "3rem"}}>
            <h4>This is CategoryDetail</h4>
            <h4>Count: {category}</h4>
        </div>
    );
};

export default CategoryDetail;