import React from 'react'
import '../../access/style/style.css'

const Login = () => {
    return (
        <form>
            <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                           value="email@example.com">

                    </input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword">

                    </input>
                </div>
            </div>
        </form>
    )
}

export default Login