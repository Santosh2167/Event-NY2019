import React, {Component} from "react";

class ColourSelector extends Component {

    state={hex:this.props.hex}

    onColourSelectorChange=(event)=>{
        this.setState({hex:event.target.value});
        console.log(this.state.hex)
    }
    
        

    componentDidUpdate(){
        console.log(this.state.hex);
    }
    render() {

        const {hex="#228B22" } = this.state;

        return(
            <div>
                <input 
                 type="color"
                 value={hex}
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