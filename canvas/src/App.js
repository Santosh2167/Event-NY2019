import React, {Component} from "react";
import ColourSelector from "./ColourSelector";

class App extends Component {

    render(){

        return(
            <div>
               <h1> Below is the paint board </h1>
               <ColourSelector
                hex = "#ffff00"/>
                <ColourSelector/>
                <ColourSelector
                hex="#00ff00"/>
            </div>
        )
    }
}

export default App;