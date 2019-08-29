import React from 'react'

const Location = () => {
    return (
        <div className='location_wrapper'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583023891965!2d77.53232771430406!3d12.934500019192171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES+University!5e0!3m2!1sen!2sin!4v1564291114187!5m2!1sen!2sin" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0"  
                    allowFullScreen></iframe>
        
        <div className='location_tag'>
                <div>Location</div> 
        </div>

        </div>
    )
}

export default Location
