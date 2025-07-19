import './Services.css';
import mealboximg from '../assets/logos/mealbox.png';
import cateringImg from '../assets/logos/catering.png';
import Header from '../components/Header';

const Services = () => {
  

  return (
    <div className="home">
      <Header />
      <section className="service-content">
        <h1 className='service-title'>Our Services</h1>
        {/* at the top center of the page below the nav */}
        <div className='service-items'>
          {/* Meal Box Section */}
          {/* Meal Box Section */}
          <div className='service-item-container'>
            <div>
              <img src={mealboximg} alt='Meal Box' />
            </div>
            <div className='service-item-description'>
              <h3 className='service-item-title'>Meal Box</h3>
              <p className='service-item-tagline'>Hearty, flavorful, aromatic, wholesome.</p>
              <p>
                Perfect for small gatherings, office lunches, or personal occasions,
                our South Indian vegetarian meal boxes bring you the same Sujatha Catering quality
                in a convenient, ready-to-eat format. Each meal box is carefully packed with balanced
                portions, freshly prepared items, and authentic flavors that reflect our culinary heritage.
              </p>
            </div>
          </div>

          {/* Catering Section */}
          <div className='service-item-container'>
            <div>
              <img src={cateringImg} alt='Catering' />
            </div>
            <div className='service-item-description'>
              <h3 className='service-item-title'>Catering</h3>
              <p className='service-item-tagline'>Delicious, traditional, generous, satisfying.</p>
              <p>
                Catering service provides a full-service, end-to-end dining experience. We cater for
                breakfast, lunch, and dinner, offering four tiers of curated menus: Basic, Classic, Luxury,
                and Premium. Whether it's a simple family event or an elegant wedding celebration,
                we tailor our service to match your needs—combining traditional South Indian flavors
                with elegant presentation, impeccable hygiene, and seamless execution.
              </p>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Services;
