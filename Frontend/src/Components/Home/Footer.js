import React, { useState } from 'react';
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(props) {
  const [showJobsModal, setShowJobsModal] = useState(false);
  const [showContributeModal, setShowContributeModal] = useState(false);

  return (
    <>
      <div className={`bg-${props.mode} py-4`}>
        <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <div className="row py-2">
            <div className="col">
              <nav className="d-flex justify-content-center">
                <Link to="/about" className={`mx-4 fw-normal text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>About us</Link>
                <Link to="/contact" className={`mx-4 fw-normal text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Contact</Link>

                {/* Jobs button */}
                <button
                  onClick={() => setShowJobsModal(true)}
                  className={`btn btn-link fw-normal mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Jobs
                </button>

                {/* Contribute Your Notes button */}
                <button
                  onClick={() => setShowContributeModal(true)}
                  className={`btn btn-link mx-4 fw-normal text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Contribute Your Notes
                </button>
              </nav>
            </div>
          </div>

          <div className="row py-2">
            <div className="col">
              <ul className='m-0 p-0 d-flex justify-content-center'>
                {[{ icon: <FaTwitter />, link: "https://x.com" },
                { icon: <FaYoutube />, link: "https://www.youtube.com" },
                { icon: <FaFacebookF />, link: "https://www.facebook.com" }].map((item, idx) => (
                  <li key={idx} style={{ listStyle: 'none' }}>
                    <a
                      style={{ fontSize: '25px' }}
                      href={item.link}
                      target='_blank'
                      rel="noreferrer"
                      className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row py-2">
            <div className="col">
              © 2021 - All rights reserved by Notes Store
            </div>
          </div>
        </div>
      </div>

      {/* === Jobs Modal === */}
      {showJobsModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }}
        >
          <div className={`rounded shadow p-4 bg-${props.mode}`} style={{ maxWidth: '500px', width: '100%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className={`mb-0 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Join Our Team</h4>
              <button className="btn btn-sm btn-danger" onClick={() => setShowJobsModal(false)}>Close</button>
            </div>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              We’re always looking for talented, passionate individuals to join our growing team. Whether you're a developer, designer, content creator, or marketer — there's a place for you here.
            </p>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} mb-3`}>
              <strong>📧 Email your resume:</strong> <a href="mailto:contact@notesstore.com">contact@notesstore.com</a>
            </p>
            <button className="btn btn-primary w-100" onClick={() => window.open('mailto:contact@notesstore.com')}>
              Send Resume
            </button>
          </div>
        </div>
      )}

      {/* === Contribute Your Notes Modal === */}
      {showContributeModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }}
        >
          <div className={`rounded shadow p-4 bg-${props.mode}`} style={{ maxWidth: '500px', width: '100%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className={`mb-0 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Contribute Your Notes</h4>
              <button className="btn btn-sm btn-danger" onClick={() => setShowContributeModal(false)}>Close</button>
            </div>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              Help fellow students by sharing your notes! Upload your notes and become a part of the NotesStore community.
            </p>
            <ul className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <li>📚 Easy upload process</li>
              <li>👩‍🏫 Share notes from any subject</li>
              <li>🌟 Gain recognition as a contributor</li>
            </ul>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              Interested? Email your notes or contact us at: <strong>contribute@notesstore.com</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
