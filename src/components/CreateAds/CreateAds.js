import React, { useState } from 'react';
import './CreateAds.css';
import textImg from '../../assets/textImg.png'
import mediaImg from '../../assets/mediaImg.png'
import { useNavigate } from 'react-router-dom';



const CreateAds = () => {

    const [checkBoxText, setCheckBoxText] = useState(false);
    const [checkBoxMedia, setcheckBoxMedia] = useState(false);
    const [isSelected, setisSelected] = useState(false);
    const navigate = useNavigate();


    const checkBoxTextHandler = () => {
        setCheckBoxText((checkBoxText) => !checkBoxText)
    }

    const checkBoxMediaHandler = () => {
        setcheckBoxMedia((checkBoxMedia) => !checkBoxMedia)
    }


    const onSelectFormHandler = () => {
        if (checkBoxText === true && checkBoxMedia === true) {
            navigate('/mediaAds')
        }
        else if (checkBoxMedia === true) {
            navigate('/mediaAds')
        }
        else if (checkBoxText === true) {
            navigate('/textAds')
        }
        else {
            setisSelected(true)
            setTimeout(() => {
                setisSelected(false);
            }, 500)
        }
    }


    return (
        <div className='create-main'>
            <p>Create Ads</p>
            <div className='create-inner'>
                <div className={`${isSelected ? 'card-group left-card active' : 'card-group left-card'}`} onClick={checkBoxTextHandler}>
                    <div className="card">
                        <form>
                            <div className="mb-3 form-check">
                                <input type="checkbox" checked={checkBoxText} className="form-check-input" id="exampleCheck1" />
                            </div>
                        </form>
                        <div className="card-body">
                            <img src={textImg} className="card-img-top" alt="..." />
                        </div>
                        <small className="card-title text-center">Create</small>
                        <h5 className="card-title text-center">Text Ad</h5>
                    </div>
                </div>
                <div className={`${isSelected ? 'card-group right-card active' : 'card-group right-card'}`} onClick={checkBoxMediaHandler}>
                    <div className="card">
                        <form>
                            <div className="mb-3 form-check">
                                <input type="checkbox" checked={checkBoxMedia} className="form-check-input" id="exampleCheck1" />
                            </div>
                        </form>
                        <div className="card-body">
                            <img src={mediaImg} className="card-img-top" alt="..." />
                        </div>
                        <small className="card-title text-center">Create</small>
                        <h5 className="card-title text-center">Media Ad</h5>
                    </div>
                </div>
            </div>
            <div className='nextBtn'>
                <button onClick={onSelectFormHandler} type="button" className="btn">Next</button>
            </div>
        </div>
    )
}

export default CreateAds