import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


//Import API
import userMap from './../../API/usersMap';




const items = [];
export default class GridList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        userMap.getUser(this.props.page).then(res => {
            res.data.data.forEach(item =>{

                items.push(<TableRow key={item.id}>
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.first_name}</TableRowColumn>
                    <TableRowColumn>{item.last_name}</TableRowColumn>
                    <TableRowColumn><Avatar src={item.avatar}/></TableRowColumn>
                </TableRow>);


            });
        });
    }

    componentDidUpdate(){


    }
    render() {

        return (
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
                        {items}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
