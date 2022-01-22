import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from './AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        // window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/register', 'POST', {...form})
            console.log('Data', data)
            message(data.message)
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    return (
        <div>
            <div>
                <h1>Авторизация</h1>
                <div>
                    <div>
                        <div>
                            <input
                                placeholder="Введите email"
                                id="email"
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div>
                            <input
                                placeholder="Введите пароль"
                                id="password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Пароль</label>
                        </div>

                    </div>
                </div>
                <div>
                    <button
                        style={{marginRight: 10}}
                        disabled={loading}
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                    <button
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    )
}