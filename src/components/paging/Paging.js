import React, { Component } from 'react';


//Import Ui components
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



export default class Paging extends Component {


    constructor(props){
        super(props);




    }



    render() {
        console.log(this.props.value);
        return (

            <div className="Paging">
                <DropDownMenu maxHeight={300} value={this.props.value} onChange={this.props.handleChange}>
                    <MenuItem primaryText="hello"/>
                </DropDownMenu>
                <button onClick={this.props.name}>Hello</button>
            </div>
        );
    }
}



