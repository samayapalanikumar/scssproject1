import React from 'react';
import {dummydata} from './dummydata';
import Card from './components/card/card';


 export const dummydata = [
        {
            Name : "Mahesh Kumar",
            Role : "Jr.Software Developer",
            User: "Add User 1",
            Describe: "Web developer with a strong background in developing award-winning applications for a diverse clientele.1+ years of industry experience includes programming, debugging, and wireframes.",
          },
          {
            Name : "Dhinesh kumar",
            Role : "Software Developer",
            User: "Add User 2",
            Describe:"Web developer with a strong background in developing award-winning applications for a diverse clientele.3+ years of industry experience includes programming, debugging, and wireframes.",
        },
        {
            Name : "Ajith Kumar",
            Role : "Sr.Software Developer",
            User: "Add User 3",
            Describe:"Web developer with a strong background in developing award-winning applications for a diverse clientele.5+ years of industry experience includes programming, debugging, and wireframes.",
        }
]

const renderedData = dummydata.map(item => (
    <div key={item.User}>
        <h2>{item.Name}</h2>
        <p>{item.Role}</p>
        <button>{item.User}</button>
        <p>{item.Describe}</p>
    </div>
));

return (
    <div>
        {renderedData}
    </div>
);
