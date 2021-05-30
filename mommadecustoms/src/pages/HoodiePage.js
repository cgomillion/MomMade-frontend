import { Component } from 'react';
import HoodieTable from '../components/hoodieTable';

export default class Hoodies extends Component {
    constructor(props) {
        super(props)

        
    }

   render() {
       
        return (
            <HoodieTable 
                hoodies = {this.props.hoodies} 
            />)
    }
};