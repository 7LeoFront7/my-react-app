import React, { useState } from 'react';

function App(){
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('TEXT IN INPUT')



  return (
    <div className='App'>
      <h1>{likes}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )


  function increment(){
    setLikes(likes + 1)
  }

  function decrement(){
    setLikes(likes - 1)
  }

function addLike(){
  likes += 1
  console.log(likes)
}

function disLike(){
  likes -= 1
  console.log(likes)
}

}

export default App;
