import React from 'react'
import { Link } from 'react-router-dom'

export default function Opportunities() {
    return (
        <div>
            <h3 className="mx-4 my-3">Opportunities</h3>
            <div className="container">
            <div className="row">
                <div className="col-8">
            <div style={{ /*"border": "3px solid black",*/ /*"marginLeft": "4rem",*/ /*"marginRight": "13rem",*/ "marginTop": "3rem", "marginBottom": "3rem"}}>
                <div class="card">
                    <div class="card-body">
                        <h4>Opportunity title</h4>
                        <p><b>Author : UserName</b></p>
                        <p style={{"margin":"0px"}}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                        <p style={{"margin":"0px"}}>Location : Bangalore</p>
                        <p style={{"margin":"0px"}}>Experience : 0 yrs</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h4>Opportunity title</h4>
                        <p><b>Author : UserName</b></p>
                        <p style={{"margin":"0px"}}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                        <p style={{"margin":"0px"}}>Location : Bangalore</p>
                        <p style={{"margin":"0px"}}>Experience : 0 yrs</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h4>Opportunity title</h4>
                        <p><b>Author : UserName</b></p>
                        <p style={{"margin":"0px"}}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                        <p style={{"margin":"0px"}}>Location : Bangalore</p>
                        <p style={{"margin":"0px"}}>Experience : 0 yrs</p>
                    </div>
                </div>

                </div>
                </div>
                <div className="col-4" style={{"position":"sticky"}}>
                    <div>
                    <h5 style={{"marginTop":"40px", "marginLeft":"3rem", "marginBottom":"2rem"}}>Write your Opportunity here:</h5>
                    
                  <textarea class="form-control mx-5 my-2" style={{ "width": "20rem"}} id="postOpp" rows="15"></textarea>
                <button type="button" class="btn btn-primary mx-5 my-2">Post the Opportunity</button>
                
            
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
