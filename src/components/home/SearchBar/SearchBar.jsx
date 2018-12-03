import React,{Component} from 'react';

export default class SearchBar extends Component{


    state = {
        query:''
    }


    fetchResults(e){
        e.preventDefault();
        let {query} =  this.state;
        
        console.log(query);
        
    }

    setQuery(e){
        this.setState({query : e.target.value});
    }


    render(){

        return (

            <React.Fragment>
                <form onSubmit={this.fetchResults.bind(this)} className="d-flex justify-content-between">
                <input type="text" className="form-control" placeholder="Enter song title..." onChange={this.setQuery.bind(this)}></input>
                <button type="submit" className="btn btn-danger ml-1"><i className="fas fa-search"></i></button>
                </form>
            </React.Fragment>


        )

    }

}
