import React, {Component} from 'react';

//Components
import Header from './../../components/header/Header'


import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
//Import API
import userMap from './../../API/usersMap';

let pages = null;
const items = [];
const itemsList = [];
export default class App extends Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.state = {

            value: 1,
            itemList: []

        }


    }
    componentDidMount(){
        //Load list

        console.log('Mount called');
        userMap.getUser(this.state.value).then(res => {
            res.data.data.forEach(item =>{
                itemsList.push(<TableRow key={item.id}>
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.first_name}</TableRowColumn>
                    <TableRowColumn>{item.last_name}</TableRowColumn>
                    <TableRowColumn><Avatar src={item.avatar}/></TableRowColumn>
                </TableRow>);


            });
        });

        userMap.getUser(1).then(res => {
            let pageCounter = 1;
            pages = res.data.total_pages;

            for (let i = 0; i < pages; i++ ) {
                items.push(<MenuItem value={pageCounter + i} key={i} primaryText={`Página ${pageCounter + i}`} />);
            }
        }).then(() =>{

            this.setState({
                value: 1

            });

        });


    }


    handleChange = (event, index, value) => {

        itemsList.length = 0;

        console.log('here calleasdd');
        this.setState({value});
    };


    componentDidUpdate() {
        console.log('update called');
        userMap.getUser(this.state.value).then(res => {
            res.data.data.forEach(item =>{
                itemsList.push(<TableRow key={item.id}>
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.first_name}</TableRowColumn>
                    <TableRowColumn>{item.last_name}</TableRowColumn>
                    <TableRowColumn><Avatar src={item.avatar}/></TableRowColumn>
                </TableRow>);


            });
        });

    };

    render() {
        console.log(itemsList);
        return (
            <div className="App">
                <Header/>
                <div className="UserList">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Nome</TableHeaderColumn>
                                <TableHeaderColumn>Sobrenome</TableHeaderColumn>
                                <TableHeaderColumn>Foto</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {itemsList}
                        </TableBody>
                    </Table>
                </div>
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    {items}
                </DropDownMenu>
            </div>
        );
    }
}

