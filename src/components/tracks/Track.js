import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Track = (props) => {
  const { track } = props;
  return (
      <div className="col-md-6">
        <div className='card mb-4 shadow-sm'>
           <div className='card-body'>
             <h5 className="fifty-chars">{track.artist_name}</h5>
             <p className="card-text">
              <strong><i className="fas fa-play"></i> Track : </strong> 
               {track.name} 
              <br/>
              <strong><i className="fas fa-compact-disc"></i> Album : </strong> 
              {track.album_name}
             </p>
             <Link to={`lyrics/track/${track.id}`} className="btn btn-dark btn-block btn-full-width">
              <i className='fas fa-chevron-right'></i> View Lyrics / Play Song
             </Link>
           </div>
        </div>
      </div>
  )
}

export default Track;