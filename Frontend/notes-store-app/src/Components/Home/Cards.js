import React from 'react';
import '../../Style/Card.css';

const Cards = ({item , mode}) => {
    return (
        <>
            <div className={`Cards container my-3 text-${mode==='light'?'dark':'light'}`}>
                <div className={`card bg-${mode} text-${mode==='light'?'dark':'light'}`}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}<span style={{marginLeft:"10px"}} className="badge text-bg-danger">{item.categeroy}</span></h5>
                            <p className="card-text">{item.title}</p>
                            <div className="d-flex justify-content-between">
                            <button href="#" style={{padding: '0px 10px',margin:'5px 0',borderRadius: '37px'}}>{item.price}</button>
                            <button href="#" style={{border:'2px solid',fontWeight:'500'}} className={`btn btn-outline-${mode==='light'?'dark':'light'}`}>Read more</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Cards
