import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { searchValue : '' };
    }

    render() {
        return (
            <form className = 'search-bar row' onSubmit = { (event) => { event.preventDefault(); this.props.onSearchTerm(this.state.searchValue)} }>
                <div className = 'col-md-11'>
                    <input type="text" className="form-control" placeholder="Search a Video..." 
                        onChange = { event => this.setState({ searchValue : event.target.value }) }/>
                </div>
                <div className="col-md-1">
                    <button type="submit" className = "btn btn-primary search-button">Search</button>
                </div>
                <br/>
            </form>
        );
    }
    
}

export default SearchBar;

