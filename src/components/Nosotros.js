import React, { useEffect, useState } from 'react';

import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
} from "react-router-dom";

const Nosotros = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        //fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations', {mode: 'no-cors'});

        const users = await data.json();
        setTeam(users.civilizations);
    };

    return (
        <div>
            <h1>Nosotros</h1>
            {/* <ul>
                {
                    team.map(member => (
                        <li key={member.id}>
                            <Link to={`/nosotros/${member.id}`}>
                                {member.name} - {member.expansion}
                            </Link>
                        </li>
                        ))
                }
            </ul> */}
        </div>
    )
}

export default Nosotros
