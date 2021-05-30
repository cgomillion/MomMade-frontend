import { Component } from 'react';
import TanktopTable from '../components/tanktopTable';

export default class Hoodies extends Component {
    constructor(props) {
        super(props)

        
    }

   render() {
       
        return (
            <TanktopTable 
                tanktops = {this.props.tanktops} 
            />)
    }
};