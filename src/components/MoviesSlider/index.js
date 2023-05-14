// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {Movies} = props
  const {thumbnailUrl, videoUrl} = Movies
  console.log(Movies)
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={thumbnailUrl} alt="thumbnail" />
        </div>
      </Slider>
    </div>
  )
}
export default MoviesSlider
