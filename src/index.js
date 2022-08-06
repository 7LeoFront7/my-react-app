import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let likes = 0;




const root = ReactDOM.createRoot(
  document.getElementById('root'));

root.render(
 
    <div>
      <div className='likes'>{likes}</div>
      <button onClick={addLike()} className='btn-like'>Like</button>
      <button onClick={disLike()} className='btn-dislike'>Dislike</button>
    </div>
);


function addLike(){
  likes += 1
  console.log(likes)
}

function disLike(){
  likes -= 1
  console.log(likes)
}


