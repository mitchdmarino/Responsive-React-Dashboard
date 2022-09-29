import React from 'react'
import { useState } from 'react'


import Foot from '../components/Foot'
import Head from '../components/Head'
import Main from '../components/main/Main'
import Side from '../components/Side'


export default function Dashboard ({currentUser, setCurrentUser}) {
    const [main, setMain] = useState('balance')
    const [isSideExpanded, setIsSideExpanded] = useState(false)

    
    return (
        <div className='grid-container'>
            <Head currentUser={currentUser} isSideExpanded={isSideExpanded} setIsSideExpanded={setIsSideExpanded} />
            <Side setMain={setMain} isSideExpanded={isSideExpanded} setIsSideExpanded={setIsSideExpanded}/>            
            <Main content={main} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Foot />
        </div>
    )
}