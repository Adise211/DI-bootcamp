
import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const hongKong  = 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
const macao = 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'
const japan = 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'
const lasVegas = 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'

class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={hongKong} />
                    <p className="legend">hong-Kong</p>
                </div>
                <div>
                    <img src={macao} />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={lasVegas} />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        );
    }
});


ReactDOM.render(
  <DemoCarousel />,
  document.querySelector('.demo-carousel')
)
