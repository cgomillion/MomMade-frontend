import { Component } from 'react';
import SweatshirtTable from '../components/sweatshirtTable';

export default class Sweatshirts extends Component {
    constructor(props) {
        super(props)

        
    }

   render() {
       
        return (
            <SweatshirtTable 
            sweatshirts = {this.props.sweatshirts} 
            />)
    }
};