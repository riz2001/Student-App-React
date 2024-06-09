import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
  return (
    <div>
        <NavBar/>
         <h1 align="center">ADD DETAILS</h1>
         <br></br>
        <div class="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" />
                        <br></br>
                    </div>
          
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ADMISSION NO</label>
                        <input type="text" className="form-control" />
                        <br></br>
                    </div>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">ROLL NO</label>
                    <input type="text" className="form-control" />
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PARENT NAME</label>
                    <input type="text" className="form-control" />
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">COLLEGE NAME</label>
                    <input type="text" className="form-control" />
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DOB</label>
                    <input type="date" name="dob" id="dob" className="form-control"/>
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="email" name="email" id="email" className="form-control"/>
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="password" name="password" id="password" className="form-control" />
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                    <input type="password" name="password" id="password" className="form-control" />
                    <br></br>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                    
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-12">
                        <center>
                        <button className="btn btn-success">REGISTER</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default AddStudent