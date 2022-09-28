import React from 'react'
import Foot from '../components/Foot'

import Head from '../components/Head'
import Main from '../components/Main'
import Side from '../components/Side'


export default function Dashboard ({currentUser}) {
    return (
        <div className='grid-container'>
            <Head currentUser={currentUser} />
            <Side />            
            <Main />
            <Foot />
        </div>
    )
}