import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { searchValue : '' };
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Search a Video..." 
                    onChange = { event => this.setState({ searchValue : event.target.value }) }/>
                <br/>
            </div>
        );
    }
    
}

export default SearchBar;

