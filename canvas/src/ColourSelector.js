import React, {Component} from "react";

class ColourSelector extends Component {

    onColourSelectorChange(event){
        console.log(event.target.value);
    }
    render() {

        const {hex="#228B22" } = this.props;

        return(
            <div>
                <input 
                 type="color"
                 defaultValue={hex}
                 onChange={this.onColourSelectorChange}
                 />
            </div>
        )
    }
}

ColourSelector.defaultProps={
    hex:"#228B22"
}

export default ColourSelector;