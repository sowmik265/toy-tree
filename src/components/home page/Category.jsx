
import React, { useEffect, useState } from 'react';
import CategoryTab from './CategoryTab';

const Category = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            total - {toys.length}
            {
                toys.map(toy => 
                   <CategoryTab toy={toy}></CategoryTab>
                )
            }





        </div>
    );
};

export default Category;