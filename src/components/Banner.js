import './banner.css'
import slide1 from './slide1.png'
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import Welding from './Welding'

function Banner(argument) {
	return(<div>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slide1} alt="First "/>
      <div class="carousel-caption d-none d-md-block">
      <h3>work done in Moranga </h3>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide2} alt="Second se"/>
      <div class="carousel-caption d-none d-md-block">
      <h3>work done in kiambu </h3>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide3} alt="Third "/>
      <div class="carousel-caption d-none d-md-block">
      <p>work done in Nairobi</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<Welding />

		</div>)
}
export default Banner