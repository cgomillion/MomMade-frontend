import { Component } from 'react';
import TshirtTable from '../components/tshirtTable';

export default class Tshirts extends Component {
    constructor(props) {
        super(props)

        
    }

   render() {
       
        return (
            <TshirtTable 
            tshirts = {this.props.tshirts} 
            />)
    }
};