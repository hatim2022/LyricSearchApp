import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Lyrics extends Component {
state = {
  track:{},
  lyrics:{}
};

componentDidMount(){
  axios.get(`http://localhost:8080/api/track/${this.props.match.params.id}`)
  .then(res => { 
     this.setState({lyrics: res.data.lyrics}); 

     return axios.get(`http://localhost:8080/api/track/${this.props.match.params.id}`);
     })
     .then(res => {
       this.setState({track: res.data});
       console.log(res.data)
     })
  .catch(err => console.log(err))
}

  render() {
    const {track,lyrics} = this.state;
    if(track === undefined || 
      lyrics === undefined || 
      Object.keys(track).length === 0 || 
      Object.keys(lyrics).length === 0 ){
        return <Spinner/>
    }else{
     return (
     <React.Fragment>
     <Link to="/" className="btn btn-dark btn-sm mb-4">
        Go Back
     </Link>
     <div className='card'>
      <h5 className="card-header">
        {track.track_name} by{' '}
        <span className="text-secondary">{track.artist_name}</span>
      </h5>
      <div className="card-body">
        <p className="card-text">{lyrics}</p>
      </div>
     </div>
     
      <ul className="list-group mt-3">
       <li className="list-group-item">
        <strong> Album Name </strong>: {track.album_name}
       </li>
      </ul>
     </React.Fragment>
     );
    }
}
}

export default Lyrics;
