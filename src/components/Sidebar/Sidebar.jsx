import React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import {BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import './Sidebar.scss';

const sidebarVariants = {
    closed : {y: -1500, opacity: 1, transition : {duration : 0.4, when: "afterChildren", delay: 0.1}}, 
    open : {y: 0, opacity: 1, transition : {duration : 0.4, delayChildren: 0.3, staggerChildren: 0.1}}
}

const navlinkVariants = {
    closed : {x : - 20, opacity : 0, transition: {duration : 0.2}},
    open : {x: 0, opacity : 1, transition : {duration : 0.2}}
}

//const navlinks = ["Home", "About", "Portfolio", "Testimonials", "Contact"];

const socialsVariants = {
    closed : {y : - 20, opacity : 0, transition: {duration : 0.2}},
    open : {y: 0, opacity : 1, transition : {duration : 0.2}}
}

export class Sidebar extends Component{

    render(){
        return(
            <motion.div
                className="app__sidebar"
                variants={sidebarVariants}
                initial = "closed"
                animate = {this.props.openState? "open": "closed"}
            >
                <motion.ul className="app__sidebar-nav">
                    {
                    /*navlinks.map((navlink, index) => (
                        <motion.li 
                            variants={navlinkVariants} 
                            content = {navlink} 
                            index = {index} 
                            key= {`link-${navlink}`}>
                                <a href={`#${navlink}`}>{navlink}</a> 
                        </motion.li>
                    ))*/ 
                    }

                    <motion.li 
                        variants={navlinkVariants} >
                        <a href='#about' className='page-scroll' onClick={this.props.toggle}>
                            À Propos
                        </a>
                    </motion.li>
                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#expertise' className='page-scroll' onClick={this.props.toggle}>
                            Expertise
                        </a>
                    </motion.li>

                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#showcase' className='page-scroll' onClick={this.props.toggle}>
                            Videos
                        </a>
                    </motion.li>

                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#features' className='page-scroll' onClick={this.props.toggle}>
                            Qualités
                        </a>
                    </motion.li>
                        {/*
                        <li>
                        <a href='#portfolio' className='page-scroll' >
                            Gallery
                        </a>
                        </li>
                        */}
                        
                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#testimonials' className='page-scroll' onClick={this.props.toggle}>
                            Témoignages
                        </a>
                    </motion.li>
                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#team' className='page-scroll' onClick={this.props.toggle}>
                            Équipe
                        </a>
                    </motion.li>
                    <motion.li
                        variants={navlinkVariants} 
                        >
                        <a href='#contact' className='page-scroll' onClick={this.props.toggle}>
                            Contact
                        </a>
                    </motion.li>

                </motion.ul>

                <motion.div 
                    className='app__sidebar-socials'
                    variants={socialsVariants}
                >
                    <motion.a href="https://www.facebook.com/" className="sidebar-fb-icon">
                        <FaFacebookF size = {30}/>
                    </motion.a>
                    <motion.a href="https://www.instagram.com/" className='sidebar-insta-icon'>
                        <BsInstagram size = {30}/>
                    </motion.a>
                    <motion.a href="https://www.youtube.com/" className='sidebar-yb-icon'>
                        <BsYoutube size = {30}/>
                    </motion.a>
                </motion.div>
                {/* <motion.div
                    variants={paragraphVariants}
                >hahahahahahhaha</motion.div>
                <motion.div
                    variants={paragraphVariants}
                >hahahahahahhaha</motion.div>
                <motion.div
                    variants={paragraphVariants}
                >hahahahahahhaha</motion.div>
                <motion.div
                    variants={paragraphVariants}
                >hahahahahahhaha</motion.div> */}
            </motion.div>
        )
    }
}