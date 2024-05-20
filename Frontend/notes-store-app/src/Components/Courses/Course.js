import React, { useEffect, useState } from 'react'
// import list from '../list.json';
import Cards from '../Home/Cards.js';
import { Link } from 'react-router-dom';
import axios from "axios";

const Course = ({ mode }) => {
  const [note, setNote] = useState([]);
  useEffect(() => {
    const getNote = async () => {
      try {

        const response = await axios.get("http://localhost:5001/note");
        console.log(response.data);
        setNote(response.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getNote();
  }, []);
  // const allData = list;
  const allData = note;
  return (
    <>
      <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h2 className={`text-center my-2`}>We're delighted to have you <span style={{ color: '#d63384' }}>Here! :)</span></h2>
          <p className={`text-center my-2`}>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore, deserunt! Quaerat vitae, labore dolor, perspiciatis
            esse corporis molestiae, corrupti nihil possimus id velit maiores non nemo nostrum
            ratione sed quo earum cumque delectus. Dignissimos atque
            sequi adipisci ipsa amet quasi pariatur
            corporis doloribus nostrum molestiae.</p>
          <Link to="/">
            <a href="" style={{ backgroundColor: '#d63384', fontWeight: '500', color: 'white', border: '1px solid #d63384' }} className='btn my-2'>Back</a>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
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
