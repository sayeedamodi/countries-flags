import React from "react" ; 
import countries from "../countries";
import Card from "./Card";


function createCard(emojis) {
    return (
        <Card 
    id={emojis.id}
    flag={emojis.flag}
    country={emojis.country}
    description={emojis.description}/>
    )
}

function App() {
 return (
    <div>

    <h1>
        <span>Countries and their flags</span>
      </h1>

    <div className="cardContainer">
    {countries.map(createCard)};
    </div>
    </div>

 ) ;
}

export default App ; 