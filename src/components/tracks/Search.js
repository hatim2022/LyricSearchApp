import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'
import '../../App.css'

class Search extends Component {
state = {
   trackTitle: ''
}

findTrack = (dispatch,e) => {
  e.preventDefault();

  axios.post('http://localhost:8080/api/tracks', {
    name: this.state.trackTitle
  })
  .then((res) => {
    console.log(res.data)
    dispatch({
      type: 'SEARCH_TRACKS',
      payload: res.data
    });
    this.setState({track_list: res.data}); 
   })
.catch(err => console.log(err)) 

}

onChange(e){
    this.setState({trackTitle: e.target.value});
}

render() {
    return (
    <Consumer>
        {value => {
          const { dispatch } = value;
         return (
             <div className="card card-body mb-4 p-4">
             <h1 className="display-4 text-center">
               <i className="fas fa-music"/> Search For A Song
             </h1>
             <p className="lead text-center">Get the lyrics for any song </p>
             <form onSubmit={this.findTrack.bind(this,dispatch)}>
               <div className='form-group'>
                <input
                   type="text" 
                   className="form-control form-control-lg"
                   placeholder="song title..."
                   name="trackTitle"
                   value={this.state.trackTitle}
                   onChange={this.onChange.bind(this)}
                   
                />
               </div>  
               <button className="btn btn-primary btn-lg btn-block mb-5 btn-full-width" type="submit">
                   Get Track Lyrics
               </button>
             </form>
             </div>
         )
        }}
    </Consumer>
    )
}
}

export default Search;