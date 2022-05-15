import { motion } from "framer-motion";
import { Component } from "react";

import { images } from "../../assets";

import './expertise.scss';


class Expertise extends Component{

    render(){
        return(
          <div id="expertise" className="app__expertise">
            <div className='app__expertise-title'>
                <h2>Notre Expertise</h2>
                <div/>
            </div>

            <div className="app__expertise-items">
                <motion.div className="app__expertise-item"
                    whileHover={{scale : 1.05, boxShadow: {},  transition : {duration: 0.2}}}
                >
                    <div className="app__expertise-item-media-wrapper">
                        <img src={images.Maconnerie} alt="" />
                    </div>  

                    <div className="app__expertise-item-text-wrapper">
                        <div>
                            <h2>Maçonnerie générale</h2>
                            <div/>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci minus officiis. Dicta consequatur at expedita doloremque voluptates. Quibusdam, vel fugit? Temporibus sint modi soluta perferendis fuga perspiciatis, numquam asperiores?</p>
                    </div>
                </motion.div>

                <motion.div className="app__expertise-item"
                    whileHover={{scale : 1.05, boxShadow: {},  transition : {duration: 0.2}}}
                >
                    <div className="app__expertise-item-media-wrapper">
                        <img src={images.Voirie} alt="" />
                    </div>  

                    <div className="app__expertise-item-text-wrapper">
                        <div>
                            <h2>Tous travaux de voirie</h2>
                            <div/>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci minus officiis. Dicta consequatur at expedita doloremque voluptates. Quibusdam, vel fugit? Temporibus sint modi soluta perferendis fuga perspiciatis, numquam asperiores?</p>
                    </div>
                </motion.div>

                <motion.div className="app__expertise-item"
                    whileHover={{scale : 1.05, boxShadow: {},  transition : {duration: 0.2}}}
                >
                    <div className="app__expertise-item-media-wrapper">
                        <img src={images.GenieCivile} alt="" />
                    </div>  

                    <div className="app__expertise-item-text-wrapper">
                        <div>
                            <h2>Génie civile</h2>
                            <div/>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci minus officiis. Dicta consequatur at expedita doloremque voluptates. Quibusdam, vel fugit? Temporibus sint modi soluta perferendis fuga perspiciatis, numquam asperiores?</p>
                    </div>
                </motion.div>

                <motion.div className="app__expertise-item"
                    whileHover={{scale : 1.05, boxShadow: {},  transition : {duration: 0.2}}}
                >
                    <div className="app__expertise-item-media-wrapper">
                        <img src={images.CorpsEtat} alt="" />
                    </div>  

                    <div className="app__expertise-item-text-wrapper">
                        <div>
                            <h2>Tous corps d'état</h2>
                            <div/>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci minus officiis. Dicta consequatur at expedita doloremque voluptates. Quibusdam, vel fugit? Temporibus sint modi soluta perferendis fuga perspiciatis, numquam asperiores?</p>
                    </div>
                </motion.div>
                </div>
            </div>
        )
    }   
}

export default Expertise;