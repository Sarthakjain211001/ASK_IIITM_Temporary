import React from 'react'

export default function Profile() {
    return (
        <div>
        <div className="container rounded bg-white mt-5 ">
<div className="row">
    {/* <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
    </div> */}
    <div className="col-md-5 border-right" style={{"marginRight":"10rem"}}>
        
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Personal Details</h4>
            </div>
            <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" /></div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="last name"/></div>
            </div><br/>
            {/* <div className="row mt-3"> */}
                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" /></div>
                <br/>
                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" /></div>
                <br/>
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" /></div>
            {/* </div> */}<br/>
            <div className="row ">
                <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" placeholder="city" /></div>    
                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state"/></div>
            </div><br/>
    </div>
    <div className="col-md-5 border-right">
        
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Professional Details</h4>
            </div>
            {/* <div className="row mt-2"> */}
                <div className="col-md-12"><label className="labels">Current position</label><textarea className="form-control" id="yourComment" rows="3" placeholder="example: SDE at Amazon(2017-present)"></textarea></div>
                <br/>
                <div className="col-md-12"><label className="labels">Previous Work Experience</label><textarea className="form-control" id="yourComment" rows="3" placeholder="example: SDE at TCS(2015-2016)"></textarea></div>
            {/* </div> */}<br/>
            {/* <div className="row mt-3"> */}
                <div className="col-md-12"><label className="labels">Educational details</label><textarea className="form-control" id="yourComment" rows="3" placeholder="enter your education details"></textarea></div>
                <br/>
                <div className="col-md-12"><label className="labels">Skills</label><textarea className="form-control" id="yourComment" rows="3" placeholder="enter your skills"></textarea></div>
                <br/>
                {/* <div className="col-md-12"><label className="labels">Achievements/Accomplishments</label><input type="text" className="form-control" placeholder="enter your achievements" /></div> */}
                <div className="col-md-12"><label className="labels">Achievements/Accomplishments</label><textarea className="form-control" id="yourComment" rows="3" placeholder="enter your achievements"></textarea></div>     
            {/* </div> */}<br/>
            
        </div>
    </div>
    <br/>
    <div className="text-center mb-2"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
    
</div>

</div>
            
        
    )
}

