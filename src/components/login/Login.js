import React, { useEffect } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/UserAction'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import config from '../../config'

function Login(props) {
    const dispatch = useDispatch()
    const history = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const user = useSelector((state) => state.userSignin)
    const { userInfo, error } = user

    const onSubmit = (data) => {
        dispatch(login(data))
    }

    useEffect(() => {
        if (userInfo) {
            history('/')
        }
    })

    return (
        <div class="login-page">
            <h2> ĐĂNG NHẬP </h2>
            <form onSubmit={handleSubmit(onSubmit)} class="form-login">
                <input {...register('email')} placeholder="Email" required></input>
                <input {...register('password')} placeholder="Password" type="password" required></input>

                <input type="submit" value="Đăng Nhập"></input>
                {error ? <h2>{error}</h2> : <></>}
            </form>
            <div className="toRegister">
                <p>Bạn chưa có tài khoản?</p>
                <Link to={config.routes.register}> Đăng ký</Link>
            </div>
        </div>
    )
}

export default Login
