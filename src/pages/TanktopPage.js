
import TanktopTable from '../components/tanktopTable';

 const Tanktops = (props) => {
   
        return (
            <>
            <h1>Tank Tops</h1>
            <TanktopTable 
                tanktops = {props.tanktops} 
            />
            </>
        )
};

export default Tanktops