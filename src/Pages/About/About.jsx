import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_1.jpg'
import StoryImage from '../../Images/about1.jpg'
import VisionImage from '../../Images/about2.jpg'
import MissionImage from '../../Images/about3.jpg'
import './About.css'


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Animi ea accusamus perspiciatis vitae nulla sed deserunt repudiandae optio, quae eum.
      </Header>

      <section className="about__story" >
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore consectetur!
               </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore commodi at animi
               exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda dolorum ipsum quaerat quasi, minima sed iure soluta vel? Voluptates,
                voluptatum earum?
                </p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda consectetur!
               </p>
          </div>

        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore consectetur!
               </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore commodi at animi
               exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda dolorum ipsum quaerat quasi, minima sed iure soluta vel? Voluptates,
                voluptatum earum?
                </p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda consectetur!
               </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>



      
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore consectetur!
               </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore commodi at animi
               exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda dolorum ipsum quaerat quasi, minima sed iure soluta vel? Voluptates,
                voluptatum earum?
                </p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi, inventore nam 
              quasi odit praesentium, cumque sequi aspernatur officiis nisi repellat nesciunt aliquam 
               sed consequatur facilis, harum labore exercitationem ut minus officia hic pariatur quo illo sit ad possimus, consequatur beatae
                ullam assumenda consectetur!
               </p>
          </div>

        </div>
      </section>


    </>
  )
}

export default About