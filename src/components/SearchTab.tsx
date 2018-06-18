import * as React from 'react';
import {FormGroup,FormControl} from 'react-bootstrap'

class SearchTab extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
        
    }
    
    render() {
      
       return (
                <form>
                <FormGroup>                
                    <FormControl
                        type="text"                        
                        placeholder="Enter Model/Parts Search Param"
                        />                    
                    </FormGroup>
                </form>

    );
    }
 }
 export default SearchTab;
 