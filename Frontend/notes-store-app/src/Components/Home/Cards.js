import React from 'react';
import '../../Style/Card.css';

const Cards = ({ item, mode }) => {
    return (
        <>
            <div className={`Cards container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
                <div style={{ border: '2px solid' }} className={`card bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
                    <img style={{height:'250px', width:"100%"}} src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <hr className={`m-0 py-2 w-100 text-${mode=== 'light' ? 'dark' : 'light'}`}/>
                        <h5 className="card-title">{item.name}<span style={{ marginLeft: "10px" }} className="badge text-bg-danger">{item.categeroy}</span></h5>
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between">
                            <a href={item.file} target="_blank" rel="noopener noreferrer" download>
                                <button style={{ border: '2px solid', fontWeight: '500' }} className={`btn btn-primary`}>Download</button>
                            </a>
                            <a href={item.link} target="_blank">
                                <button style={{ border: '2px solid', fontWeight: '500' }} className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'}`}>Read more</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cards
