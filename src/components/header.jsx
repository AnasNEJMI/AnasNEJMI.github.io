import { motion } from 'framer-motion/dist/framer-motion'

const titleVariants = {
  closed : {y : 20, opacity : 0, transition: {duration : 0.5}},
  open : {y: 0, opacity : 1, transition : {duration : 0.5}}
}

const subtitleVariants = {
  closed : {y : 20, opacity : 0, transition: {duration : 0.5}},
  open : {y: 0, opacity : 1, transition : {duration : 0.5, delay : 0.5}}
}

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <motion.h1
                  variants={titleVariants}
                  initial = "closed"
                  animate = "open"
                >
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </motion.h1>
                <motion.p
                  variants={subtitleVariants}
                  initial = "closed"
                  animate = "open"
                >{props.data ? props.data.paragraph : 'Loading'}</motion.p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  À Propos De Nous
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
