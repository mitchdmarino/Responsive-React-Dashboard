import React from 'react'
import Foot from '../components/Foot'

import Head from '../components/Head'
import Main from '../components/Main'
import Side from '../components/Side'


export default function Dashboard () {
    return (
        <div className='grid-container'>
            <Head />
            <Side />            
            <Main />
            <Foot />
        </div>
    )
}