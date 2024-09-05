import React, { Component } from 'react'
import Slide from './slide'
import Leftarrow from './left-arrow'
import Rightarrow from './right-arrow'
import haq from '../../images/haq2.jpg'
import lontario from '../../images/lOntario2.jpg'
import tempe from '../../images/tempe2.jpg'
import usvi from '../../images/usvi3.jpg'
import ohio from '../../images/ohio2.jpg'

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        ohio,
        usvi,
        haq,
        lontario, 
        tempe,
      ],
      text:[
        'l',
        'o',
        'l',
        'o',
        'asd'
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">
        
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} >
                 
                </Slide>
                

              ))
            }
        </div>
          <Leftarrow
            goToPrevSlide={this.goToPrevSlide}
          />
          <Rightarrow
            goToNextSlide={this.goToNextSlide}
          />
      </div>
    );
  }
}

export default Slider;