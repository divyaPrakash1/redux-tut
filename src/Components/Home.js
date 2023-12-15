import React from 'react';

// import './../Styles/Home.scss'

// import "./../Styles/Home.scss";


const Home = () => {
    return (
        <div>

            <div className='add-to-cart'>
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" alt="sdfsd" />
            </div>

            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='image-wrapper item' >
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
