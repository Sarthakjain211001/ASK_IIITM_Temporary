import React from 'react'
import { Link } from 'react-router-dom'

export default function Write_a_comment() {
    return (
        <div>
            <div className="container " style={{ "margin": "0 auto", "width": "55%" }}>
            <h4>Write your comment here:</h4>
                <textarea class="form-control mx-5 my-2" style={{ "width": "30rem" }} id="yourComment" rows="3"></textarea>
                <button type="button" class="btn btn-primary mx-5 my-2">Post the comment</button>
                <Link to="/question"><button type="button" class="btn btn-primary my-2">Cancel</button></Link>
            </div>
          
        </div>

    )
}
