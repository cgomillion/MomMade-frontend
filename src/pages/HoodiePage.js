
import HoodieTable from '../components/hoodieTable';

 const Hoodies = (props) => {
    
 
       
        return (
            <>
            <h1>Hoodies</h1>
            <HoodieTable 
                hoodies = {props.hoodies} 
            />
            </>
            
            
            )
            

    
};

export default Hoodies