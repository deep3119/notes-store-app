import {React ,useEffect,useState} from 'react';
// import list from '../list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

const Freebook = ({mode , localhost}) => {

  const [note, setNote] = useState([]);
  useEffect(() => {
    const getNote = async () => {
      try {
        console.log(localhost)
        const response = await axios.get(`http://${localhost}:5001/note`);
        const data = response.data.filter((data) => data.price === 50);
        setNote(data);
        console.log(data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getNote();
  }, []);

  // const filterData = list.filter((data) => data.categeroy === "Free");
  const filterData = note;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={`container my-5 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div>
          <h3>Free Offered Courses</h3>
          <h5>Eat Sleep <span style={{color:'#d63384'}}>Learn</span> Repeat</h5>
          <p>To get all Courses in our Course option. click on the Course option and get our all Fantastic Course And all Course are Freely Available.</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item)=>(
              <Cards item={item} mode={mode} key={item.id} />
            )
            )}
          </Slider>
        </div>
      </div>
    </>
  )
}


export default Freebook
