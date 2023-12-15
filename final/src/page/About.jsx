import "./About.css";
function About() {
    return (
      <div className="about-page">
        <h1 className="about-page__title">Facts about craft beer</h1>
        {/* <p className="about-page__paragraph">
          
        </p>
        
        <p className="about-page__paragraph">
         
        </p> */}
        <p className="about-page__paragraph">
          Craft beer is a beer that is brewed using traditional methods and ingrediants, 
          but with an emphasis on innovation, quality, and small-batch production. 
          Unlike mass-produced beer, craft beer is typically made by independent brewers 
          who have a passion for creating unique and high-quality beers with distinct flavors and aromas.
          Craft beer is often brewed in small quantities and sold locally, 
          allowing for a greater degree of creativity and experimentation in the brewing process.
          The craft beer movement has gained popularity in recent years,
          with many people seeking out new and interesting flavors and supporting small, independent breweries.

          
        </p>
        
        {/* <p className="about-page__paragraph">
          
        </p> */}
        <h2 className="about-page__title about-page__title--secondary">
          What's the difference between beer and craft beer?
        </h2>
        <p className="about-page__paragraph">
        One of the main differences between beer and craft beer is the brewing process. 
        Large-scale breweries use automated systems and standardized recipes to produce consistent and uniform beer, 
        while craft breweries often brew beer by hand, 
        experimenting with different ingredients and techniques to create unique flavors and styles.


        </p>
       
      </div>
    );
  }
  
  export default About;