import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=> res.json())
        .then(data=>setCategory(data))
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <div>
            {
                category.map(c=> <p key={c.id}>
                    <Link>{c.category}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;