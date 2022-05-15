import { Component } from 'react';
import './showcase.scss';

class Showcase extends Component{

    render(){
        return(
          <div id="showcase" className="app__showcase">
            <div className='app__showcase-title'>
                <h2>Nos Vidéos</h2>
                <div/>
            </div>
            
            <div className="app__showcase-items">
                <div className='app__showcase-item'>
                    <div className="app__showcase-item-video">
                        <iframe
                        src={`https://www.youtube.com/embed/zbqSPHhvLrM`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                    </div>

                    <div className='app__showcase-item-text'>
                        <div>
                            <h2>Présentation</h2>
                            <div/>
                        </div>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente quis nobis labore. Facilis, deleniti! Ipsam maxime magnam dolor consequuntur, adipisci molestiae, blanditiis doloribus porro aliquid at sequi sint quia?</p>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}

export default Showcase;