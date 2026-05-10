import React from 'react'
import { motion } from 'framer-motion'
// import Scroll from '@/components/ui/Scroll'
import { Link } from 'react-router-dom'
import './pragyatha.css'
const Pragyatha = () => {
  return (
    <div className='pragyatha-page praygatha'>
      {/* <Scroll /> */}

      <motion.div className='bg-black text-white text-center text-[30px] md:text-[50px] lg:text-[100px] font-bold p-10'
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }} >Pragyatha : Timeline</motion.p>
      </motion.div>
      <div className='text-white bg-black px-12 md:px-18 lg:px-32'>
        <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1
          }}>Pragyatha 2k24 is a state-level entrepreneurial fest that brings together technology and entrepreneurship, offering a platform for engineers, innovators, and startups to unlock their potential and pursue their ambitions.</motion.p></div>
      <section className="education" id="education">

        <div className="timeline-items">




          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Pragyatha'24</h3>
              <p>Current Pragyatha - 2k24 : Running<br /> 29th November to 1st December</p>
              <div className='my-8'>
                <Link to="/" className='bg-white p-4 my-4 rounded-xl'>Know more</Link>
              </div>
            </div>


          </div>


          {/* <!-------------------------------------------------------- Timeline - item2 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Pragyatha'23</h3>
              <p>Pragyatha 2k23, a state-level entrepreneurial fest where technology and
                 entrepreneurship blend. This platform is designed for engineers,
                 innovators, and start-ups to realize their potential and ambition.</p>
              <button className='bg-white p-4 my-4'><a href="http://meriise.org/pragyatha23.html" target='_blank'>Know more</a></button>
            </div>

          </div>



          {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Pragyatha'22</h3>
              <p>Welcome to Pragyatha 22, an exhilarating state-level entrepreneurial fest
                 where technology meets vision! Pragyatha has always been a platform for aspiring
                  entrepreneurs,
                 innovative engineers, and start-up enthusiasts to showcase their potential,</p>
              <button className='bg-white p-4 m-4'><a href="http://meriise.org/pragyatha22.html#" target='_blank'>Know more</a></button>
            </div>

          </div>


          {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2019</div>
            <div className="timeline-content">
              <h3 className='font-bold'>Pragyatha'19</h3>
              <p>A main event comprising of 3 stages shall be held which includes the following things....</p>
              <button className='bg-white p-4 my-4'><a href="http://meriise.org/prag.html" target='_blank'>Know more</a></button>
            </div>

          </div>


          {/* <!-------------------------------------------------------- Timeline - item4 -------------------------------------------------------------> */}

        </div>
      </section>
      <div>
        <div className='bg-white w-full h-2'></div>
      </div>
      {/* <Footer /> */}

    </div>
  )
}

export default Pragyatha