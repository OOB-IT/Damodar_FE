import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import JsonData from "../data/data.json";
import mainHoney from "../asset/product/mainHoney.jpg";
import ghee from "../asset/product/ghee (1).jpg";
import millets from "../asset/product/millets.jpg";
import snacks from "../asset/product/dry snacks.jpg";
import paper from "../asset/product/cup.jpg";
import sbt from "../asset/product/sugarcane bagasse compartment meal tray.jpg";
import furniture from "../asset/product/wooden bed.jpg";
import fertilizer from "../asset/product/vermicompost smooth and natural.jpg";
import axios from "axios";
import { baseUrl } from "../utils/config";

const ProductsContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IntroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  flex: 1;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const IntroDescription = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
  max-height: 400px; /* Limit the height */
  overflow-y: auto; /* Enable vertical scrolling */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1); /* Inner shadow for effect */
  border-radius: 10px; /* Round corners */
  padding: 20px; /* Add padding inside the box */
  background-color: #f9f9f9; /* Light background color */
  position: relative; /* Position for shading effect */

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ScrollableContent = styled.div`
  position: relative; /* Position for shading effect */
`;

const TopFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10px; /* Reduced height for top fade effect */
  background: linear-gradient(
    to bottom,
    rgba(249, 249, 249, 1),
    rgba(249, 249, 249, 0)
  );
`;

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(
    to top,
    rgba(249, 249, 249, 1),
    rgba(249, 249, 249, 0)
  );
`;

const PortfolioFilters = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;

const PortfolioFilterItem = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 10px 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  transition: all 0.3s;
  padding: 8px 20px;
  border-radius: 10px;

  &:hover,
  &.filter-active {
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    color: #fff;
  }
`;

const PortfolioContainer = styled.div`
  padding: 150px 0 0 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */

  @media (max-width: 768px) {
    justify-content: flex-start; /* Align items to the start for mobile view */
  }
`;

const PortfolioItem = styled.div`
  margin: auto auto 20px auto;
  max-width: 350px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2 ease-in-out;
  }
`;
const PortfolioImgWrapper = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
  text-align: center;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s;
`;

const PortfolioInfo = styled.div`
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 3;
  right: 15px;
  transition: all 0.3s;
  background: rgba(55, 81, 126, 0.8);
  padding: 10px 15px;
`;

const PortfolioTitle = styled.h4`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0px;
`;

const PortfolioType = styled.p`
  color: #f9fcfe;
  font-size: 14px;
  margin-bottom: 0;
`;

const Products = () => {
  const productData = {
    a2ghee: {
      pId: 1,
      pUrlParam: "a2ghee",
      productTypeTitle: "A-2 Cow Ghee",
      productTypeImgPath: ghee,
      pMetaDesc: "",
      productTypeDesc: `### A-2 Pure Cow Ghee - The Essence of Health from India

        #### Experience the Authentic Taste and Wellness of A-2 Pure Cow Ghee
        
        As a leading exporter from India, we proudly present our A-2 Pure Cow Ghee to the world. Sourced from indigenous A-2 cows, our ghee is a rich, golden treasure crafted using traditional methods to retain its natural goodness. 
        
        ### Health Benefits of A-2 Pure Cow Ghee
        
        1. *Rich in Nutrients*: Packed with essential vitamins A, D, E, and K, our ghee supports overall health and wellbeing.
        2. *Boosts Immunity*: The presence of butyric acid strengthens the immune system.
        3. *Aids Digestion*: Promotes healthy digestion and reduces inflammation in the digestive tract.
        4. *Heart Health*: Contains healthy fats that help in maintaining cardiovascular health.
        5. *Weight Management*: Helps in burning body fat by enhancing metabolism.
        
        ### Customized Packaging for Your Needs
        
        Understanding the diverse needs of our global customers, we offer customized packaging solutions to suit your requirements. Whether you need bulk packaging for commercial use or smaller, convenient packages for individual consumers, we've got you covered.
        
        ### Contact Us
        
        To place an order or for any inquiries, please reach out to us. We're here to assist you with any specific needs or questions you may have.
        
        **Message Us ** to discover the finest quality A-2 Pure Cow Ghee, straight from India to your doorstep.`,
    },
    honey: {
      pId: 2,
      pUrlParam: "honey",
      productTypeTitle: "Natural & raw honey",
      productTypeImgPath: mainHoney,
      pMetaDesc: "",
      productTypeDesc: `### Natural and Raw Honey - Pure Nectar from India

        #### Introducing the Pure Essence of Nature: Natural and Raw Honey
        
        As a premier exporter from India, we are delighted to offer the world our exquisite Natural and Raw Honey. Harvested from the untouched forests and pristine farms of India, our honey is a testament to purity and natural goodness, free from additives and processing.
        
        ### Health Benefits of Natural and Raw Honey
        
        1. *Rich in Antioxidants*: Our honey is packed with antioxidants that help in reducing oxidative stress and improving overall health.
        2. *Boosts Immunity*: Its natural antibacterial and antiviral properties enhance immune function.
        3. *Promotes Digestive Health*: Acts as a prebiotic, supporting good gut bacteria and improving digestion.
        4. *Natural Energy Source*: Provides an instant energy boost with its natural sugars and carbohydrates.
        5. *Soothes Sore Throats*: Known for its soothing effect on sore throats and coughs.
        
        ### Customized Packaging for Your Needs
        
        Understanding the diverse needs of our global clientele, we offer customized packaging solutions tailored to your requirements. Whether you need bulk packaging for commercial purposes or smaller, convenient jars for retail, we provide flexible options to suit your specific needs.
        
        ### Contact Us
        
        For orders or any inquiries, feel free to reach out to us. We are here to cater to your specific requirements and answer any questions you might have.
        
        *Message Us* today to experience the finest quality Natural and Raw Honey, delivered from the heart of India to your home.`,
    },
    lentils: {
      pId: 3,
      pUrlParam: "lentils",
      productTypeTitle: "Lentils & Cereals",
      productTypeImgPath: millets,
      pMetaDesc: "",
      productTypeDesc: `### Premium Quality Lentils and Cereals - From India to the World

        #### Discover the Rich Variety of Indian Lentils and Cereals
        
        As a leading exporter from India, we take pride in offering a diverse range of high-quality lentils and cereals to the global market. Cultivated in the fertile soils of India and carefully selected, our products bring the authentic taste and nutritional benefits of Indian agriculture to your table.
        
        ### Types of Lentils and Their Health Benefits
        
        1. *Red Lentils (Masoor Dal)*
           - *Benefits*: High in protein and fiber, supports heart health, and aids digestion.
           
        2. *Green Gram (Moong Dal)*
           - *Benefits*: Rich in antioxidants, helps with weight management, and improves digestion.
           
        3. *Black Gram (Urad Dal)*
           - *Benefits*: Boosts energy, promotes bone health, and aids in muscle building.
           
        4. *Chickpeas (Chana Dal)*
           - *Benefits*: Excellent source of protein, supports heart health, and aids in blood sugar control.
           
        5. *Pigeon Peas (Toor Dal)*
           - *Benefits*: High in dietary fiber, supports digestive health, and boosts energy levels.
        
        ### Types of Cereals and Their Health Benefits
        
           
        1. *Wheat (Whole Wheat, Durum Wheat)*
           - *Benefits*: High in fiber, supports cardiovascular health, and aids in weight management.
           
        2. *Millets (Ragi, Bajra, Jowar)*
           - *Benefits*: Rich in minerals, aids in controlling blood sugar levels, and supports weight loss.
           
        3. *Barley*
           - *Benefits*: High in fiber, supports heart health, and helps in managing cholesterol levels.
          
        
        ### Customized Packaging for Your Needs
        
        We understand the diverse needs of our global customers and offer customized packaging solutions to meet your specific requirements. Whether you need bulk packaging for commercial use or smaller, convenient packs for individual consumption, we have flexible options to suit your needs.
        
        ### Contact Us
        
        For orders or any inquiries, please reach out to us. We are here to address your specific requirements and answer any questions you may have.
        
        *Message Us* today to explore the finest quality lentils and cereals from India, delivered right to your doorstep.`,
    },
    snacks: {
      pId: 4,
      pUrlParam: "snacks",
      productTypeTitle: "Snacks & Namkeens",
      productTypeImgPath: snacks,
      pMetaDesc: "",
      productTypeDesc: `### Authentic Indian Snacks and Namkeens - A Taste of Tradition

        #### Savor the Flavors of India: Premium Snacks and Namkeens
        
        As a premier exporter from India, we are excited to bring the delightful and diverse range of Indian snacks and namkeens to the global market. Our products are crafted using traditional recipes and the finest ingredients, ensuring an authentic taste that celebrates India's rich culinary heritage.
        
        ### Types of Snacks and Namkeens and Their Health Benefits
        
        1. *Spicy Mix (Mixture)*
           - *Benefits*: A crunchy blend of lentils, nuts, and spices that provides a quick energy boost and is rich in protein.
        
        2. *Sev (Crispy Noodles)*
           - *Benefits*: Made from chickpea flour, sev is a great source of protein and fiber.
        
        3. *Bhujia (Crispy Gram Flour Snacks)*
           - *Benefits*: High in protein and a perfect snack for quick energy.
        
        4. *Papdi (Crispy Fried Wafers)*
           - *Benefits*: A light and crispy snack that is low in calories and can be enjoyed guilt-free.
        
        5. *Chakli (Spiral Snacks)*
           - *Benefits*: Made from rice flour and lentil flour, chakli is a good source of complex carbohydrates and protein.
        
        6. *Murukku (Twisted Savory Snack)*
           - *Benefits*: Rich in protein and fiber, made from urad dal and rice flour.
        
        7. *Samosa (Savory Stuffed Pastry)*
           - *Benefits*: Filled with spiced vegetables or lentils, providing a nutritious and satisfying snack option.
        
        And much more....
        
        ### Health Benefits of Indian Snacks and Namkeens
        
        - *Nutrient-Rich*: Many of our snacks are made from lentils, chickpea flour, and various grains, offering a high protein and fiber content.
        - *Energy Boost*: These snacks are perfect for providing a quick energy boost, making them ideal for in-between meals.
        - *Digestive Health*: Several items include ingredients that support digestive health, such as spices and herbs known for their digestive properties.
        - *Heart Health*: Many snacks contain healthy fats from nuts and seeds, which are beneficial for cardiovascular 
        
        ### Contact Us
        
        To place an order or for any inquiries, please feel free to reach out to us. We are here to cater to your specific needs and answer any questions you may have.
        
        *Message Us* today to experience the finest quality Indian snacks and namkeens, delivered from India to your home.`,
    },
    paper: {
      pId: 5,
      pUrlParam: "paper",
      productTypeTitle: "Paper packaging products",
      productTypeImgPath: paper,
      pMetaDesc: "",
      productTypeDesc: `### Eco-Friendly Paper Packaging Products - Sustainable Solutions from India

       #### Introducing Our Range of High-Quality Paper Packaging Products
       
       As a leading exporter from India, we are proud to offer a diverse selection of eco-friendly paper packaging products to the global market. Our products are crafted with precision and care, using sustainable materials to meet the growing demand for environmentally conscious packaging solutions.
       
       ### Types of Paper Packaging Products
       
       1. *Paper Bags*
          - *Description*: Available in various sizes and designs, our paper bags are sturdy, recyclable, and perfect for retail, grocery, and gift purposes.
       
       2. *Paper Boxes*
          - *Description*: Ideal for packaging gifts, food items, and consumer goods, our paper boxes come in customizable shapes and sizes to meet your specific needs.
       
       3. *Corrugated Boxes*
          - *Description*: Designed for durability, our corrugated boxes are perfect for shipping and storage, offering superior protection for goods during transit.
       
       4. *Paper Pouches*
          - *Description*: These versatile pouches are excellent for packaging snacks, spices, and other dry goods. They are available with various closure options, including zip locks and heat seals.
       
       5. *Paper Cups and Plates*
          - *Description*: Our biodegradable paper cups and plates are perfect for eco-friendly events, offering a sustainable alternative to plastic disposables.
       
       6. *Tissue Paper and Wrapping Paper*
          - *Description*: Soft, high-quality tissue paper and wrapping paper, available in various colors and patterns, ideal for gift wrapping and protective packaging.
       
       ### Customized Packaging Solutions
       
       We understand that each business has unique packaging requirements. Therefore, we offer customized packaging solutions tailored to your specific needs. Whether it's printing your brand logo, designing unique shapes, or selecting specific materials, our team is ready to provide packaging that aligns perfectly with your brand identity.
       
       ### Inquiry for More Details
       
       For orders or any inquiries regarding our paper packaging products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.
       
       *Message Us* today to explore the finest quality paper packaging products from India, designed to meet your sustainability goals and packaging needs.`,
    },
    sbt: {
      pId: 6,
      pUrlParam: "sbt",
      productTypeTitle: "Sugarcane bagasse tableware",
      productTypeImgPath: sbt,
      pMetaDesc: "",
      productTypeDesc: `### Eco-Friendly Sugarcane Bagasse Tableware - Sustainable Solutions from India

       #### Introducing Our Range of Premium Sugarcane Bagasse Tableware
       
       As a leading exporter from India, we are delighted to offer a comprehensive range of eco-friendly sugarcane bagasse tableware products to the global market. Made from the byproducts of sugarcane processing, our tableware is a sustainable and biodegradable alternative to conventional plastic and Styrofoam products, contributing to a greener planet.
       
       ### Types of Sugarcane Bagasse Tableware Products
       
       1. *Plates*
          - *Description*: Available in various sizes and shapes (round, square, compartmentalized), our bagasse plates are sturdy, leak-proof, and ideal for serving meals at events, restaurants, and takeaways.
       
       2. *Bowls*
          - *Description*: Our bagasse bowls come in different capacities, perfect for soups, salads, and desserts. They are microwave and freezer safe, ensuring versatility in use.
       
       3. *Cups*
          - *Description*: Durable and heat-resistant, our bagasse cups are perfect for hot and cold beverages. They come in a range of sizes to suit different drink types.
       
       4. *Clamshell Containers*
          - *Description*: Ideal for takeout and food delivery, these clamshell containers are sturdy, secure, and keep food fresh. Available in various sizes and compartment options.
       
       5. *Trays*
          - *Description*: Our serving trays are robust and versatile, suitable for both food service and display purposes.
       
       6. *Cutlery*
          - *Description*: Complement your tableware with our bagasse forks, knives, and spoons, which are strong and convenient for any meal.
       
       And much more...
       
       ### Health and Environmental Benefits
       
       - *Biodegradable*: Fully compostable and biodegradable, reducing landfill waste and environmental impact.
       - *Sustainable*: Made from renewable sugarcane fibers, promoting sustainable agricultural practices.
       - *Non-Toxic*: Free from harmful chemicals and coatings, ensuring safe use for food and beverages.
       - *Microwave and Freezer Safe*: Versatile for various food storage and heating needs.
       
       ### Customized Packaging Solutions
       
       We understand that each business has unique packaging requirements. Hence, we offer customized packaging solutions tailored to your specific needs. Whether you need branded packaging, specific sizes, or special designs, our team is ready to provide solutions that perfectly match your brand identity and operational needs.
       
       ### Inquiry for More Details
       
       For orders or any inquiries regarding our sugarcane bagasse tableware products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.
       
       *Message Us* today to explore the finest quality sugarcane bagasse tableware from India, designed to meet your sustainability goals and packaging needs.`,
    },
    fertilizer: {
      pId: 7,
      pUrlParam: "fertilizer",
      productTypeTitle: "Vermicompost fertilizer",
      productTypeImgPath: fertilizer,
      pMetaesc: "",
      productTypeDesc: `### Premium Vermicompost Fertilizer - Sustainable Agriculture Solutions from India

       #### Introducing Our High-Quality Vermicompost Fertilizer
       
       As a leading exporter from India, we are proud to offer our top-grade vermicompost fertilizer to the global market, with a special focus on Middle Eastern countries. Our vermicompost is produced using organic waste and earthworms, resulting in a nutrient-rich, eco-friendly fertilizer that promotes healthy soil and robust plant growth.
       
       ### Features and Benefits of Vermicompost Fertilizer
       
       1. *Nutrient-Rich*: Our vermicompost is rich in essential nutrients like nitrogen, phosphorus, potassium, and micronutrients, ensuring comprehensive plant nutrition.
       2. *Soil Health*: Enhances soil structure, improves aeration, and increases water retention, leading to healthier root systems.
       3. *Organic Matter*: Adds valuable organic matter to the soil, boosting microbial activity and soil fertility.
       4. *Eco-Friendly*: Produced through natural processes, our vermicompost is free from harmful chemicals and pesticides, making it safe for the environment.
       5. *Improved Yield*: Promotes vigorous plant growth and higher crop yields, benefiting both small-scale farmers and large agricultural operations.
       
       ### Application and Usage
       
       - *Agriculture*: Ideal for a wide range of crops, including fruits, vegetables, cereals, and pulses.
       - *Horticulture*: Perfect for gardens, nurseries, and landscaping projects.
       - *Home Gardening*: Enhances the growth of potted plants, flowers, and kitchen gardens.
       
       ### Customized Packaging Solutions
       
       Understanding the diverse needs of our customers, especially in the Middle East, we offer customized packaging solutions to suit your specific requirements. Whether you need bulk packaging for large agricultural projects or smaller packs for retail distribution, we provide flexible options to meet your needs.
       
       ### Why Choose Us?
       
       - *Quality Assurance*: We adhere to stringent quality control measures to ensure the highest standards of purity and effectiveness.
       - *Sustainable Practices*: Our production process is environmentally friendly, promoting sustainable agricultural practices.
       - *Global Reach*: With a strong export network, we ensure timely delivery and reliable service to our clients worldwide.
       
       ### Inquiry for More Details
       
       For orders or any inquiries regarding our vermicompost fertilizer products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.
       
       *Message Us* today to explore the finest quality vermicompost fertilizer from India, designed to support sustainable agriculture and enhance your crop productivity.`,
    },
    furniture: {
      pId: 8,
      pUrlParam: "furniture",
      productTypeTitle: "Wooden furniture",
      productTypeImgPath: furniture,
      pMetaDesc: "",
      productTypeDesc: `### Exquisite Wooden Furniture - Elegance and Craftsmanship from India

       #### Introducing Our Premium Range of Wooden Furniture
       
       As a leading exporter from India, we are delighted to present our exquisite collection of wooden furniture, crafted with precision and elegance to cater to global tastes. Our furniture range includes beds, sofas, TV units, center tables, dining tables with chairs, wardrobes, cabinets, sideboards, and wine racks, all made from high-quality wood to ensure durability and timeless beauty.
       
       ### Types of Wooden Furniture
       
       1. *Beds*
          - *Description*: Our range of wooden beds includes classic, contemporary, and modern designs, offering comfort and style. Available in various sizes (single, double, queen, king) and customizable finishes.
       
       2. *Sofas*
          - *Description*: Elegant and comfortable, our wooden sofas are available in multiple designs, including traditional, modern, and sectional styles. Upholstery options can be customized to suit your decor.
       
       3. *TV Units*
          - *Description*: Functional and stylish TV units that provide ample storage and a sleek look. Available in various sizes and configurations to fit your space.
       
       4. *Center Tables*
          - *Description*: A variety of center tables, from minimalist to ornate designs, that serve as the perfect centerpiece for your living room.
       
       5. *Dining Tables with Chairs*
          - *Description*: Our dining sets include tables and matching chairs in a range of styles, from rustic to contemporary, to enhance your dining experience.
       
       6. *Wardrobes*
          - *Description*: Spacious and elegantly designed wardrobes that provide ample storage while adding sophistication to your bedroom. Available in various sizes and designs.
       
       7. *Cabinets and Sideboards*
          - *Description*: Versatile storage solutions that blend functionality with aesthetic appeal. Ideal for living rooms, dining areas, and bedrooms.
       
       8. *Wine Racks*
          - *Description*: Stylish and sturdy wine racks that showcase your collection elegantly. Available in various sizes and styles to suit your needs.
       
       ### Customized Packaging Solutions
       
       Understanding the diverse preferences and requirements of our international clientele, we offer customized packaging solutions to ensure safe and secure delivery. Whether you need robust packaging for large shipments or specialized packaging for individual pieces, we strive to meet your specific requirements.
       
       ### Why Choose Us?
       
       - *Quality Craftsmanship*: Each piece is meticulously crafted by skilled artisans, ensuring superior quality and attention to detail.
       - *Sustainable Materials*: We use high-quality, sustainably sourced wood to create our furniture, promoting eco-friendly practices.
       - *Global Reach*: With a robust export network, we ensure timely delivery and reliable service to clients worldwide.
       - *Customization*: We offer bespoke furniture solutions, allowing you to tailor designs, finishes, and sizes to your specific needs.
       
       ### Inquiry for More Details
       
       For orders or any inquiries regarding our wooden furniture products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.
       
       *Message Us* today to explore the finest quality wooden furniture from India, crafted to enhance your living spaces with elegance and functionality.`,
    },
  };

  const [landingPageData, setLandingPageData] = useState({});
  const [apiData, setApiData] = useState([]);
  const [product, setProduct] = useSearchParams();
  let selectedProduct;

  useEffect(() => {
    setLandingPageData(JsonData);
    axios
      .get(`${baseUrl}/getProductCategories`)
      .then((response) => {
        if (response?.data) {
          console.log("API");
          console.log(product.get("p"));
          setApiData(response?.data);
          selectedProduct = apiData ? apiData?.find(p => p?.productTypeShortName === product?.get("p")) : null;
          console.log("selectedProduct : ", product.get("p"), selectedProduct);
          setProductDetails(selectedProduct)
        } else {
          console.log("local");
          setApiData(productData);
        }
      })
      .catch((error) => {
        setApiData(productData);
        console.error("Error :", error);
      })
  }, []);

  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    if (!apiData) {
      console.log("if");
      setProductDetails(productData[[product.get("p")]]);
    } else {
      // Find the specific product based on productTypeShortName
      selectedProduct = apiData ? apiData?.find(p => p?.productTypeShortName === product?.get("p")) : null;
      console.log("selectedProduct : ", product.get("p"), selectedProduct);
      setProductDetails(selectedProduct) // Replace 'desiredShortName' with the actual short name you are looking for
    }
  }, [product.get("p")], apiData);

  const products = landingPageData.Products;

  // Simple Markdown to HTML parser
  const parseMarkdown = (markdown) => {
    if (!markdown) return "";

    return markdown
      .replace(/###### (.*?)(\n|$)/g, "<h6>$1</h6>")
      .replace(/##### (.*?)(\n|$)/g, "<h5>$1</h5>")
      .replace(/#### (.*?)(\n|$)/g, "<h4>$1</h4>")
      .replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>")
      .replace(/## (.*?)(\n|$)/g, "<h2>$1</h2>")
      .replace(/# (.*?)(\n|$)/g, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\n/g, "<br />");
  };

  // console.log(productDetails?.productTypeDesc);
  return (
    <ProductsContainer>
      <div className="container" data-aos="fade-up">
        <SectionTitle className="section-title">
          <h2>{productDetails?.productTypeTitle}</h2>
          <p>Explore our Products.</p>
        </SectionTitle>
        <IntroSection>
          <IntroImage
            style={{ width: "40%" }}
            src={productDetails?.productTypeImgPath}
            alt="Intro Image"
          />
          <IntroDescription>
            <h3>Product Introduction</h3>
            <ScrollableContent>
              <TopFade />
              <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(productDetails?.productTypeDesc),
                }}
              ></div>
              <BottomFade />
            </ScrollableContent>
          </IntroDescription>
        </IntroSection>
        {/* <section id="portfolio" className="portfolio">
          <div className="">
            <PortfolioContainer data-aos="fade-up">
              {products &&
                products[productDetails.pUrlParam].map((product) => (
                  <PortfolioItem
                    key={product.ID}
                    className={`col-lg-12 col-md-12 portfolio-item filter-${product.Type}`}
                  >
                    <div className="portfolio-wrap hover-bg">
                      <div className="hover-text">
                        <h4>{product.ProductTitle}</h4>
                      </div>
                      <PortfolioImgWrapper>
                        <PortfolioImage
                          src={`${product.FeaturedImage}`}
                          alt=""
                        />
                      </PortfolioImgWrapper>
                      <PortfolioInfo>
                        <PortfolioTitle>{product.ProductTitle}</PortfolioTitle>
                        <PortfolioType>{product.Type}</PortfolioType>
                      </PortfolioInfo>
                    </div>
                  </PortfolioItem>
                ))}
            </PortfolioContainer>
          </div>
        </section> */}
      </div>
    </ProductsContainer>
  );
};

export default Products;
