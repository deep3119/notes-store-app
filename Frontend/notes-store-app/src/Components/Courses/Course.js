import React, { useEffect, useState } from 'react'
// import list from '../list.json';
import Cards from '../Home/Cards.js';
import { Link } from 'react-router-dom';
import axios from "axios";

const Course = ({ mode , localhost }) => {
  const [note, setNote] = useState([]);
  useEffect(() => {
    const getNote = async () => {
      try {

        const response = await axios.get(`http://${localhost}:5001/note`);
        console.log(response.data);
        setNote(response.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getNote();
  }, []);
  const allData = note;
  // const allData = list;
  return (
    <>
      <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h2 className={`text-center my-2`}>We're delighted to have you <span style={{ color: '#d63384' }}>Here! :)</span></h2>
          <p className={`text-center my-2`}>
            <span style={{ color: '#d63384' }}> Active Listening:</span> During a lecture, students actively listen to the instructor, paying attention to key points, explanations, and examples.
            <br /> <span style={{ color: '#d63384' }}>Capture Key Points: </span> As the lecture progresses, students jot down important information, such as main concepts, definitions, formulas, and examples, in their notes.</p>
          <h3>Eat Sleep <span style={{ color: '#d63384' }}>Learn</span> Repeat</h3>
          <Link to="/">
            <a href="" style={{ backgroundColor: '#d63384', fontWeight: '500', color: 'white', border: '1px solid #d63384' }} className='btn my-2'>Back</a>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {
            allData.map((item) => (
              <Cards item={item} mode={mode} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
