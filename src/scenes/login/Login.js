import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card} from '../../features/card/Card';
import { login, selectRole, selectAuthToken } from './loginSlice';
import { Redirect } from 'react-router-dom';

export function Login({history}) {
    const dispatch = useDispatch();
    const userRole = useSelector(selectRole);
    const authToken = useSelector(selectAuthToken);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (userRole) {
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('authToken', authToken);
        }
    }, [userRole, authToken]);

    if (userRole === 'user') {
        return (
            <Redirect push to="/stories-create" />
        );
    }
    else if (userRole === 'Admin') {
        return (
            <Redirect push to="/stories-list" />
        );
    }

    return (
        <Card title="Sign In">
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="E-mail Address"
                    type="email" />
            </div>
                    
            <div className="form-group">
                <input className="form-control" onChange={event => setPassword(event.target.value)} placeholder="Password" type="password"/>
            </div>

            <div className="row">
                <div className="col">
                <label>Admin?</label>
                <label className="switch" style={{display: 'block'}}>
                    <input checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                </div>
                <div className="col">
                    <label style={{display: 'block', visibility: 'hidden'}}>Submit</label>
                    <button className="btn btn-info float-right" onClick={() => dispatch(login(email, password, isAdmin)) }>Submit</button>
                </div>
            </div>

            
        </Card>
    );

}