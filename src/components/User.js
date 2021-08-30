import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const [village, setVillage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const village = await data.json();
            setVillage(village);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <h3>{village.name}</h3>
            <h4>{village.team_bonus}</h4>
        </div>
    )
}

export default User
