import React from 'react';

export default function footer(props) {
    const currentDate = props.currentDate;
  return (
    <div>
      <footer id ="footer"
            className='footer'
      >{ currentDate } <a id="impressum"> | ©CrudeMovieDb</a></footer>
    </div>
  )
}