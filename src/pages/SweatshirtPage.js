
import SweatshirtTable from '../components/sweatshirtTable';

 const Sweatshirts = (props) => {
        return (
            <>
            <h1>Sweatshirts</h1>
            <SweatshirtTable 
            sweatshirts = {props.sweatshirts} 
            />
            </>
        )
};

export default Sweatshirts