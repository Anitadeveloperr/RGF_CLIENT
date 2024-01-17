/* eslint-disable react/prop-types */
import './ImageCard.css'
import { useState } from "react";
import { FaRegWindowClose } from "@react-icons/all-files/fa/FaRegWindowClose";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const ImageCard = ({data}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( data.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === data.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }
    return (
        <div>

      {openModal && 
        <div className='sliderWrap'>
          <FaRegWindowClose className='btnClose' onClick={handleCloseModal}  />
          <FaArrowLeft  className='btnPrev' onClick={prevSlide} />
          <FaArrowRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={`https://rgf.onrender.com/${data[slideNumber].path}`} alt='' />
          </div>
        </div>
      }


      <div className='galleryWrap'>
        {
          data && data.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={`https://rgf.onrender.com/${slide.path}`} alt='' />
                <FaSearch className='hoverIcon'/>
              </div>
            )
          })
        }
      </div>

    </div>
    );
};

export default ImageCard;