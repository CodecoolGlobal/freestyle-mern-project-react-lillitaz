import React from 'react';

export default function footer(props) {
    const currentDate = props.currentDate;
  return (
    <div>
      <footer id ="footer"
            className='footer'
      >{ currentDate } <p id="impressum"> | ©CrudeMovieDb</p></footer>
    </div>
  )
}