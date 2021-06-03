
import TshirtTable from '../components/tshirtTable';

 const Tshirts = (props) => {
   
        return (
            <>
            <h1>T-Shirts</h1>
            <TshirtTable 
            tshirts = {props.tshirts} 
            />
            </>
        )
};

export default Tshirts