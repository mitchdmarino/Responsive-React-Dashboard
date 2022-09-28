import React from 'react'
import { useState } from 'react'
import Foot from '../components/Foot'

import Head from '../components/Head'
import Main from '../components/main/Main'
import Side from '../components/Side'


export default function Dashboard ({currentUser}) {
    const [main, setMain] = useState('balance')
    return (
        <div className='grid-container'>
            <Head currentUser={currentUser} />
            <Side />            
            <Main content={main}/>
            <Foot />
        </div>
    )
}