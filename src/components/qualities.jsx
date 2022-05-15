import { motion } from 'framer-motion';
import './qualities.css';

export const Qualities = (props) => {
  return (
    <div id='features' className='app__qualities'>
      <div className='app__qualities-title'>
          <h2>Nos Qualités</h2>
          <div/>
      </div>

      <div className="app__qualities-row">
        {props.data
              ? props.data.map((d, i) => (
                  <motion.div key={`${d.title}-${i}`} className='app__quality-container'
                    whileHover={{scale : 1.1, transition : {duration: 0.2}}}
                  >
                    {' '}

                    <div className="app__quality-icon-wrapper"> 
                      <div className="app__quality-icon">
                          <img src={d.imgUrl} alt="img" />
                      </div>
                    </div>

                    
                    

                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </motion.div>
                ))
              : 'Loading...'}
      </div>

    </div>
  )
}
