import { render } from '@testing-library/react';
import React, { Component } from 'react'  ;
import {Route,Redirect}  from 'react-router-dom' 
import auth from './auth'
 export const ProtectedRoute = ({component:Component,...rest})=>{
     return(
         <Route {...rest} render={
             (props)=>{
                 
                var authstatus =  localStorage.getItem('isauthenticated')
                 if(authstatus ==='true'){
                console.log(authstatus)
                 
                 return <Component {...props}/>
             }
             else{
                    return <Redirect to={
                        {
                            pathname:"/",
                            state:{
                               from:props.location
                            }
                        }
                    }/> 
             }
            }
         }
         />
         )
     
 }