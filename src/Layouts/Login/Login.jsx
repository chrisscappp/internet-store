import React from 'react'
import '../../access/style/style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@material-ui/core/Grid";
import {getData} from "../../api/get/getData";
import {useDispatch} from "react-redux";
import {setLogin, setUserAboba} from "../../Redux/Actions/LoginAction";

const Login = () => {
    const dispatch = useDispatch()
    const [user, setUser] = React.useState({
        name: '',
        password: ''
    })

    const userAuthorization = (event) => {
        event.preventDefault()
        if (user.name === "alex" && user.password === '123') {
            getData('/users').then((res) => {
                dispatch(setLogin(true))
                dispatch(setUserAboba(res.data))
            })
        }
    }

    return (
        <>
            <Grid className="login-form">
                <Grid className="login-form-wrapper">
                    <Card sx={{maxWidth: 600}} className="login-form-container">
                        <CardContent>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email"
                                           className="form-control"
                                           id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Мыло..."
                                           onChange={(event) => setUser({...user, name: event.target.value.toLowerCase()})}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        onChange={(event) => setUser({...user, password: event.target.value.toLowerCase()})}
                                    >
                                    </input>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary login-submit-button"
                                    onClick={userAuthorization}
                                >
                                    Submit
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Login