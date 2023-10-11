import React from 'react';
import './MediaAdsForm.css'
import { Link, useNavigate } from 'react-router-dom';


const MediaAdsForm = () => {

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/submit')
        setTimeout(() => {
            navigate('/ads')
        }, 600)
    }


    return (
        <div className='create-main'>
            <p>Create Text & Media</p>
            <div className='container'>
                <form className="row g-3 needs-validation" onSubmit={onSubmitHandler} >
                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">Heading 01</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder='Add a heading that would make users interested' required />
                        <div className="col mt-5" >
                            <label htmlFor="validationCustom01" className="form-label">Heading 02</label>
                            <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Description 01</label>
                        <div className="input-group">
                            <textarea className="form-control" placeholder='Add primary text to help users understand more about your products services' rows={6} aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <div className="col-4 mt-2 ">
                        <label htmlFor="validationCustom01" className="form-label">Landscape Marketing Image (1.9:1)</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-4 mt-2 ">
                        <label htmlFor="validationCustom01" className="form-label">Portrait Marketing Image (4:5)</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-4 mt-3 ">
                        <label htmlFor="validationCustom01" className="form-label">Portrait Marketing Image (4:5)</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-12 mt-3 ">
                        <label htmlFor="validationCustom01" className="form-label">Video URL</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="validationCustom01" className="form-label">Video URL</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="validationCustom01" className="form-label">Video URL</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01" />
                    </div>
                    <div className="col-12 mt-3">
                        <label htmlFor="validationCustom01" className="form-label">Video URL</label>
                        <input type="text" className="form-control" placeholder='Add a heading that would make users interested' id="validationCustom01"  />
                    </div>
                    <div className='submitBtn mt-3'>
                        <Link to={'/ads'} style={{ backgroundColor: '#80e5ff' }} type="button" className="btn btn-light">Back</Link>
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MediaAdsForm