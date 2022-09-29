import React from 'react'

export default function Homepage () {
    return (
        <div className='home-page'>
            <div className='home-title'>
                <h1>Home</h1>
            </div>
            <div className='cards-container'>
                <div className='card'>
                    <h2>Lorem ipsum dolor</h2>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. </p>
                </div>
                <div className='card'>
                    <h2>Venenatis urna cursus</h2>
                    <p>eget nunc scelerisque viverra mauris in. Gravida in fermentum et sollicitudin ac. Massa tincidunt nunc pulvinar sapien et ligula. Est velit egestas dui id ornare arcu odio ut. Massa vitae tortor condimentum lacinia quis vel.  </p>
                </div>
                <div className='card'>
                    <h2>Senectus et netus et  </h2>
                    <p>Ornare suspendisse sed nisi lacus. Sodales ut etiam sit amet. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pretium lectus quam id leo in vitae turpis.</p>
                </div>
                <div className='card'>
                    <h2>Habitasse platea  </h2>
                    <p>dictumst vestibulum rhoncus est. Fames ac turpis egestas sed tempus. Nulla facilisi morbi tempus iaculis. Maecenas volutpat blandit aliquam etiam erat. Nisl rhoncus mattis rhoncus urna neque.</p>
                </div>
            </div>
            <div className='about-container'>
                <h1>About</h1>
                <ul className='about-list'>
                    <li><a href='/'>Lorem</a></li>
                    <li><a href='/'>Ipsum</a></li>
                    <li><a href='/'>Dolor</a></li>
                </ul>
            </div>
        </div>
    )
}