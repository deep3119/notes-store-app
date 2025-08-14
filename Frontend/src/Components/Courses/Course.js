import React, { useEffect, useState } from 'react'
// import list from '../list.json';
import Cards from '../Home/Cards.js';
import { Link } from 'react-router-dom';
import axios from "axios";

const Course = ({ mode, localhost }) => {
  const [note, setNote] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const getNote = async () => {
      try {

        const response = await axios.get(`http://${localhost}:5001/note`);
        // console.log(response.data);
        setNote(response.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getNote();
  }, [localhost]);


  const filteredNotes = note.filter(item => {
    const categoryMatch = category === 'All' ||
      (item.categeroy && item.categeroy === category);

    const searchMatch = item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <div className={`${mode==="light"?"lighto":"darko"} container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h2 className={`text-center my-2`}>We're delighted to have you <span style={{ color: '#d63384' }}>Here! :)</span></h2>
          <p className={`text-center my-2`}>
            <span style={{ color: '#d63384' }}> Active Listening:</span> During a lecture, students actively listen to the instructor, paying attention to key points, explanations, and examples.
            <br /> <span style={{ color: '#d63384' }}>Capture Key Points: </span> As the lecture progresses, students jot down important information, such as main concepts, definitions, formulas, and examples, in their notes.</p>
          <h3>Eat Sleep <span style={{ color: '#d63384' }}>Learn</span> Repeat</h3>
          <Link to="/">
            <button style={{ backgroundColor: '#d63384', fontWeight: '500', color: 'white', border: '1px solid #d63384' }} className='btn my-2'>
              Back
            </button>
          </Link>
        </div>
        <div className="my-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes by name..."
            className="form-control"
            style={{
              maxWidth: '400px',
              borderRadius: '10px',
              transition: 'all 0.3s ease-in-out',
              padding: '10px 15px',
              border: '1px solid #ccc',
              backgroundColor: mode === 'light' ? '#fff' : '#495057',
              color: mode === 'light' ? '#000' : '#fff',
            }}
          />

          <select
          style={{
              maxWidth: '400px',
              borderRadius: '10px',
              transition: 'all 0.3s ease-in-out',
              padding: '10px 15px',
              border: '1px solid #ccc',
              backgroundColor: mode === 'light' ? '#fff' : '#495057',
              color: mode === 'light' ? '#000' : '#fff',
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="All">All</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>

        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {
            filteredNotes.length > 0 ? (
              filteredNotes.map((item) => (
                <Cards item={item} mode={mode} key={item.id} />
              ))
            ) : (
              <p className="text-center my-4">No notes found.</p>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Course
