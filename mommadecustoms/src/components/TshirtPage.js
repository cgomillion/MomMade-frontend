import { Component } from 'react';
import TshirtTable from './tshirtTable';

export default class Tshirts extends Component {
    

   render() {
       
        return (
            <TshirtTable 
            tshirts = {this.props.tshirts} 
            />)
    }
};