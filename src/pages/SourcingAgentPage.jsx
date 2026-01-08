import React from "react";
import Card from "../components/Card";
import "./SourcingAgentPage.css";

const SourcingAgentPage = () => {
  const cardData = [
    { icon: 'fa fa-pencil-square-o', description: 'You will get totally transparent & satisfied work.' },
    { icon: 'fa fa-globe', description: 'Sourcing multiple products from different states.' },
    { icon: 'fa fa-eye', description: 'Personal watch on shipment since day 1 to manufacturing.' },
    { icon: 'fa fa-check-circle', description: 'We ensure about the quality of products & services.' },
    { icon: 'fa fa-university', description: 'We will be negotiate with banks behalf of you.' },
    { icon: 'fa fa-clock-o', description: 'You will get on time delivery of your consignment.' }
  ];

  const productCategories = [
    {
      title: "Paper-Based Packaging Products",
      icon: "📦",
      badges: ["Eco-Conscious", "Food-Safe", "Brand-Customizable"],
      products: [
        "Kraft paper bags",
        "Corrugated boxes",
        "Food-grade wraps",
        "Retail paper bags"
      ],
      markets: "🇺🇸 USA, 🇬🇧 UK, 🇩🇪 Germany (retailers, food chains) | 🇦🇪 UAE, 🇸🇦 Saudi Arabia (retail/distribution)"
    },
    {
      title: "Sugarcane Bagasse Tableware",
      icon: "🌱",
      badges: ["Biodegradable", "Compostable", "Disposable Solutions"],
      products: [
        "Plates",
        "Trays",
        "Lunch boxes",
        "Catering disposables"
      ],
      markets: "🇪🇺 EU (Germany, France) | 🇺🇸 USA, 🇨🇦 Canada (eco-restaurants) | 🇶🇦 Qatar, 🇦🇪 Dubai (green hospitality)"
    },
    {
      title: "Dried Herbs & Botanical Ingredients",
      icon: "🌿",
      badges: ["Organic", "Premium-Quality", "Culinary & Wellness Grade"],
      products: [
        "Dried basil, oregano, rosemary, thyme, mint, bay leaves",
        "Spice blends",
        "Botanical extracts"
      ],
      markets: "🇺🇸 USA, 🇩🇪 Germany, 🇳🇱 Netherlands (food processors, supplements) | 🇬🇧 UK, 🇫🇷 France (culinary & herbal tea brands) | 🇯🇵 Japan, 🇦🇪 UAE (health products, hospitality)"
    }
  ];

  return (
    <div className="sourcing-agent-page">
      <div className="sourcing-container">
        {/* Page Header */}
        <div className="page-header" data-aos="fade-up">
          <h1 className="page-title">Sourcing Agent</h1>
          <p className="page-subtitle">We fulfill buyer needs, delivering orders on time with excellence and precision.</p>
        </div>

        {/* How We Work Section */}
        <div className="how-we-work-section" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <h2 className="section-title">How We Work</h2>
              <div className="work-description">
                As a sourcing agent, our core responsibility revolves around meticulously managing all tasks essential for meeting our buyers' requirements and delivering their orders within specified timelines. Our approach is characterized by a commitment to understanding each client's unique needs, allowing us to provide personalized solutions that surpass expectations.
              </div>
            </div>
            <div className="col-lg-6 col-md-12 offset-lg-1">
              <ul className="work-list">
                <li>We find manufacturer as per buyer requirement.</li>
                <li>We negotiate and fix deal in suitable price range.</li>
                <li>We arrange transportation and handle full consignment.</li>
                <li>We can source products from multiple suppliers.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Portfolio Section */}
        <div className="product-portfolio-section" data-aos="fade-up">
          <h2 className="portfolio-title">Our Product Portfolio</h2>
          <p className="portfolio-subtitle">Premium export products meeting international standards</p>

          <div className="product-grid">
            {productCategories.map((category, index) => (
              <div key={index} className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="product-header">
                  <h3>
                    <span className="product-icon">{category.icon}</span>
                    {category.title}
                  </h3>
                </div>

                <div className="badge-container">
                  {category.badges.map((badge, idx) => (
                    <span key={idx} className="badge">{badge}</span>
                  ))}
                </div>

                <strong style={{ color: '#333', fontSize: '16px', display: 'block', marginBottom: '12px' }}>
                  Products:
                </strong>
                <ul className="product-list">
                  {category.products.map((product, idx) => (
                    <li key={idx}>{product}</li>
                  ))}
                </ul>

                <div className="market-section">
                  <strong>Target Markets:</strong>
                  <p>{category.markets}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section" data-aos="fade-up">
          <h2 className="benefits-title">What Is Your Benefit?</h2>
          <p className="benefits-subtitle">Partner with us for transparent and reliable sourcing solutions</p>

          <div className="benefits-grid">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingAgentPage;