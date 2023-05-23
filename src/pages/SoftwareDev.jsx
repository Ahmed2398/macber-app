import React, {useState} from 'react'
import Projects from '../components/Projects/Projects';

const SoftwareDev = () => {
    const [popupcontent, setpopupcontent] = useState([]);
    const changecontent=(project)=>{
        setpopupcontent([project]);
    }
  return (

    <>
  <Projects/>
    </>
  )
}

export default SoftwareDev
