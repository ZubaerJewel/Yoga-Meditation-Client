import React from 'react';
import './Service.css'


const Service = () => {
     return (
          <div className='text-success mt-lg-4 pt-3 container'>
               <h1 className=' text-center fw-semibold '> Awesome Service!</h1>
               <div className="row">
                    <div className="col-lg-6">
                         <div className=' row d-flex align-items-center mt-5'>
                              <div className='  col-lg-6 aos-init aos-animate' data-aos="fade-down"
                              data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className='adminImg img-fluid rounded' src="https://i.ibb.co/kHJy20m/Zubaer-Hossain.jpg" alt="" />
                              </div>
                              <div className=' col-lg-6'>
                                   <h2 className=' mt-4'>Admin This Website</h2>
                                   <p>My purpose is to assist and provide useful and relevant responses based on the input I receive. If you have any specific questions or need assistance with anything, feel free to ask! I am here to assist and provide information on a wide range of topics to the best of my knowledge and abilities. </p>
                                   <h3 className='mt-2'>Zubaer Jewel</h3>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                    <div className=' row d-flex align-items-center mt-5'>
                              <div className='  col-lg-6 aos-init aos-animate' data-aos="fade-up"
                              data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className=' adminImg img-fluid rounded' src="https://i.ibb.co/kHJy20m/Zubaer-Hossain.jpg" alt="" />
                              </div>
                              <div className=' col-lg-6'>
                                   <h2 className=' mt-4'>Admin This Website</h2>
                                   <p>My purpose is to assist and provide useful and relevant responses based on the input I receive. If you have any specific questions or need assistance with anything, feel free to ask! I am here to assist and provide information on a wide range of topics to the best of my knowledge and abilities. </p>
                                   <h3 className='mt-2'>Zubaer Jewel</h3>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Service;