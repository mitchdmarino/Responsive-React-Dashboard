import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Foot from '../components/Foot'
import Head from '../components/Head'
import Main from '../components/main/Main'
import Side from '../components/Side'


export default function Dashboard ({currentUser, setCurrentUser}) {
    const [main, setMain] = useState('balance')
    
    
    return (
        <div className='grid-container'>
            <Head currentUser={currentUser} />
            <Side setMain={setMain}/>            
            <Main content={main} currentUser={currentUser}/>
            <Foot />
        </div>
    )
}