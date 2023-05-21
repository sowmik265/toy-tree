import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyToy = () => {
    //     const {user} = useContext(AuthContext);
    //     const [myToys,setMyToys]=useState([])
    //     const url = `http://localhost:5000/toy?email=${user?.email}`
    //     useEffect(()=>{
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data=>console.log(data))
    //     },[])

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/toy?email=${user?.email}`;
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [url])
    
    
    return (
        <div>

        </div>
    );
};

export default MyToy;