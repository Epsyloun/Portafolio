import React from 'react'
import waves from '@images/waves.svg'

function TitleSection({title, subtitle, wavesFlag}) {
  return (
    <>
    {wavesFlag ? <img src={waves} alt="waves" />
    :
    null}
    <div className='projects__title'>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    </>
  );
}

export default TitleSection;