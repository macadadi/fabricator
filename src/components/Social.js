import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './about.css'


const Social =()=>{
	return(
		 <center>
<h4 className='tsocial'>Follow Us </h4>
<div class="social-container">
      <a href="https://www.youtube.com/c/jamesqquick"
        className=" social twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>


   
      <a href="https://www.youtube.com/c/jamesqquick"
        className="social facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://www.youtube.com/c/jamesqquick"
        className=" social youtube">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>


      <a href="https://www.youtube.com/c/jamesqquick"
        className=" social instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
</center>)
}

export default Social