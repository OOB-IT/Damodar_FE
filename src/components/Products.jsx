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
  const productData = [
    {
      productTypeId: 1,
      productTypeTitle: "A-2 pure cow ghee",
      productTypeShortName: "a2ghee",
      productTypeDesc:
        "### A-2 Pure Cow Ghee - The Essence of Health from India\r\n\r\n        #### Experience the Authentic Taste and Wellness of A-2 Pure Cow Ghee\r\n        \r\n        As a leading exporter from India, we proudly present our A-2 Pure Cow Ghee to the world. Sourced from indigenous A-2 cows, our ghee is a rich, golden treasure crafted using traditional methods to retain its natural goodness. \r\n        \r\n        ### Health Benefits of A-2 Pure Cow Ghee\r\n        \r\n        1. *Rich in Nutrients*: Packed with essential vitamins A, D, E, and K, our ghee supports overall health and wellbeing.\r\n        2. *Boosts Immunity*: The presence of butyric acid strengthens the immune system.\r\n        3. *Aids Digestion*: Promotes healthy digestion and reduces inflammation in the digestive tract.\r\n        4. *Heart Health*: Contains healthy fats that help in maintaining cardiovascular health.\r\n        5. *Weight Management*: Helps in burning body fat by enhancing metabolism.\r\n        \r\n        ### Customized Packaging for Your Needs\r\n        \r\n        Understanding the diverse needs of our global customers, we offer customized packaging solutions to suit your requirements. Whether you need bulk packaging for commercial use or smaller, convenient packages for individual consumers, we've got you covered.\r\n        \r\n        ### Contact Us\r\n        \r\n        To place an order or for any inquiries, please reach out to us. We're here to assist you with any specific needs or questions you may have.\r\n        \r\n        **Message Us ** to discover the finest quality A-2 Pure Cow Ghee, straight from India to your doorstep.",
      productTypeCtgDesc:
        "Our A-2 pure cow ghee offers unmatched quality and rich, authentic flavor, perfect for culinary and health benefits.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722170966308-ghee_(1).jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722170966312-ghee.jpg",
      productPageUrl: "/products?p=a2ghee",
    },
    {
      productTypeId: 2,
      productTypeTitle: "Natural & raw honey",
      productTypeShortName: "honey",
      productTypeDesc:
        "### Natural and Raw Honey - Pure Nectar from India\r\n\r\n        #### Introducing the Pure Essence of Nature: Natural and Raw Honey\r\n        \r\n        As a premier exporter from India, we are delighted to offer the world our exquisite Natural and Raw Honey. Harvested from the untouched forests and pristine farms of India, our honey is a testament to purity and natural goodness, free from additives and processing.\r\n        \r\n        ### Health Benefits of Natural and Raw Honey\r\n        \r\n        1. *Rich in Antioxidants*: Our honey is packed with antioxidants that help in reducing oxidative stress and improving overall health.\r\n        2. *Boosts Immunity*: Its natural antibacterial and antiviral properties enhance immune function.\r\n        3. *Promotes Digestive Health*: Acts as a prebiotic, supporting good gut bacteria and improving digestion.\r\n        4. *Natural Energy Source*: Provides an instant energy boost with its natural sugars and carbohydrates.\r\n        5. *Soothes Sore Throats*: Known for its soothing effect on sore throats and coughs.\r\n        \r\n        ### Customized Packaging for Your Needs\r\n        \r\n        Understanding the diverse needs of our global clientele, we offer customized packaging solutions tailored to your requirements. Whether you need bulk packaging for commercial purposes or smaller, convenient jars for retail, we provide flexible options to suit your specific needs.\r\n        \r\n        ### Contact Us\r\n        \r\n        For orders or any inquiries, feel free to reach out to us. We are here to cater to your specific requirements and answer any questions you might have.\r\n        \r\n        *Message Us* today to experience the finest quality Natural and Raw Honey, delivered from the heart of India to your home.",
      productTypeCtgDesc:
        "Our honey is 100% natural and raw, harvested sustainably to ensure the highest purity and rich, natural sweetness.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171170562-honey.jpeg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171170565-honey.jpg",
      productPageUrl: "/products?p=honey",
    },
    {
      productTypeId: 3,
      productTypeTitle: "Lentils & cereals",
      productTypeShortName: "lentils",
      productTypeDesc:
        "### Premium Quality Lentils and Cereals - From India to the World\r\n\r\n        #### Discover the Rich Variety of Indian Lentils and Cereals\r\n        \r\n        As a leading exporter from India, we take pride in offering a diverse range of high-quality lentils and cereals to the global market. Cultivated in the fertile soils of India and carefully selected, our products bring the authentic taste and nutritional benefits of Indian agriculture to your table.\r\n        \r\n        ### Types of Lentils and Their Health Benefits\r\n        \r\n        1. *Red Lentils (Masoor Dal)*\r\n           - *Benefits*: High in protein and fiber, supports heart health, and aids digestion.\r\n           \r\n        2. *Green Gram (Moong Dal)*\r\n           - *Benefits*: Rich in antioxidants, helps with weight management, and improves digestion.\r\n           \r\n        3. *Black Gram (Urad Dal)*\r\n           - *Benefits*: Boosts energy, promotes bone health, and aids in muscle building.\r\n           \r\n        4. *Chickpeas (Chana Dal)*\r\n           - *Benefits*: Excellent source of protein, supports heart health, and aids in blood sugar control.\r\n           \r\n        5. *Pigeon Peas (Toor Dal)*\r\n           - *Benefits*: High in dietary fiber, supports digestive health, and boosts energy levels.\r\n        \r\n        ### Types of Cereals and Their Health Benefits\r\n        \r\n           \r\n        1. *Wheat (Whole Wheat, Durum Wheat)*\r\n           - *Benefits*: High in fiber, supports cardiovascular health, and aids in weight management.\r\n           \r\n        2. *Millets (Ragi, Bajra, Jowar)*\r\n           - *Benefits*: Rich in minerals, aids in controlling blood sugar levels, and supports weight loss.\r\n           \r\n        3. *Barley*\r\n           - *Benefits*: High in fiber, supports heart health, and helps in managing cholesterol levels.\r\n          \r\n        \r\n        ### Customized Packaging for Your Needs\r\n        \r\n        We understand the diverse needs of our global customers and offer customized packaging solutions to meet your specific requirements. Whether you need bulk packaging for commercial use or smaller, convenient packs for individual consumption, we have flexible options to suit your needs.\r\n        \r\n        ### Contact Us\r\n        \r\n        For orders or any inquiries, please reach out to us. We are here to address your specific requirements and answer any questions you may have.\r\n        \r\n        *Message Us* today to explore the finest quality lentils and cereals from India, delivered right to your doorstep.",
      productTypeCtgDesc:
        "We provide a variety of high-quality lentils and cereals, rich in nutrients and perfect for diverse culinary applications.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171323160-millets.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171323162-len.jpg",
      productPageUrl: "/products?p=lentils",
    },
    {
      productTypeId: 4,
      productTypeTitle: "Snacks & namkeens",
      productTypeShortName: "snacks",
      productTypeDesc:
        "### Authentic Indian Snacks and Namkeens - A Taste of Tradition\r\n\r\n        #### Savor the Flavors of India: Premium Snacks and Namkeens\r\n        \r\n        As a premier exporter from India, we are excited to bring the delightful and diverse range of Indian snacks and namkeens to the global market. Our products are crafted using traditional recipes and the finest ingredients, ensuring an authentic taste that celebrates India's rich culinary heritage.\r\n        \r\n        ### Types of Snacks and Namkeens and Their Health Benefits\r\n        \r\n        1. *Spicy Mix (Mixture)*\r\n           - *Benefits*: A crunchy blend of lentils, nuts, and spices that provides a quick energy boost and is rich in protein.\r\n        \r\n        2. *Sev (Crispy Noodles)*\r\n           - *Benefits*: Made from chickpea flour, sev is a great source of protein and fiber.\r\n        \r\n        3. *Bhujia (Crispy Gram Flour Snacks)*\r\n           - *Benefits*: High in protein and a perfect snack for quick energy.\r\n        \r\n        4. *Papdi (Crispy Fried Wafers)*\r\n           - *Benefits*: A light and crispy snack that is low in calories and can be enjoyed guilt-free.\r\n        \r\n        5. *Chakli (Spiral Snacks)*\r\n           - *Benefits*: Made from rice flour and lentil flour, chakli is a good source of complex carbohydrates and protein.\r\n        \r\n        6. *Murukku (Twisted Savory Snack)*\r\n           - *Benefits*: Rich in protein and fiber, made from urad dal and rice flour.\r\n        \r\n        7. *Samosa (Savory Stuffed Pastry)*\r\n           - *Benefits*: Filled with spiced vegetables or lentils, providing a nutritious and satisfying snack option.\r\n        \r\n        And much more....\r\n        \r\n        ### Health Benefits of Indian Snacks and Namkeens\r\n        \r\n        - *Nutrient-Rich*: Many of our snacks are made from lentils, chickpea flour, and various grains, offering a high protein and fiber content.\r\n        - *Energy Boost*: These snacks are perfect for providing a quick energy boost, making them ideal for in-between meals.\r\n        - *Digestive Health*: Several items include ingredients that support digestive health, such as spices and herbs known for their digestive properties.\r\n        - *Heart Health*: Many snacks contain healthy fats from nuts and seeds, which are beneficial for cardiovascular \r\n        \r\n        ### Contact Us\r\n        \r\n        To place an order or for any inquiries, please feel free to reach out to us. We are here to cater to your specific needs and answer any questions you may have.\r\n        \r\n        *Message Us* today to experience the finest quality Indian snacks and namkeens, delivered from India to your home.",
      productTypeCtgDesc:
        "Indulge in our premium snacks and namkeens, crafted to deliver a delicious and authentic taste experience.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171494681-dry_snacks.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171494684-snak.jpg",
      productPageUrl: "/products?p=snacks",
    },
    {
      productTypeId: 5,
      productTypeTitle: "Paper Packaging Products",
      productTypeShortName: "paper",
      productTypeDesc:
        "### Eco-Friendly Paper Packaging Products - Sustainable Solutions from India\r\n\r\n       #### Introducing Our Range of High-Quality Paper Packaging Products\r\n       \r\n       As a leading exporter from India, we are proud to offer a diverse selection of eco-friendly paper packaging products to the global market. Our products are crafted with precision and care, using sustainable materials to meet the growing demand for environmentally conscious packaging solutions.\r\n       \r\n       ### Types of Paper Packaging Products\r\n       \r\n       1. *Paper Bags*\r\n          - *Description*: Available in various sizes and designs, our paper bags are sturdy, recyclable, and perfect for retail, grocery, and gift purposes.\r\n       \r\n       2. *Paper Boxes*\r\n          - *Description*: Ideal for packaging gifts, food items, and consumer goods, our paper boxes come in customizable shapes and sizes to meet your specific needs.\r\n       \r\n       3. *Corrugated Boxes*\r\n          - *Description*: Designed for durability, our corrugated boxes are perfect for shipping and storage, offering superior protection for goods during transit.\r\n       \r\n       4. *Paper Pouches*\r\n          - *Description*: These versatile pouches are excellent for packaging snacks, spices, and other dry goods. They are available with various closure options, including zip locks and heat seals.\r\n       \r\n       5. *Paper Cups and Plates*\r\n          - *Description*: Our biodegradable paper cups and plates are perfect for eco-friendly events, offering a sustainable alternative to plastic disposables.\r\n       \r\n       6. *Tissue Paper and Wrapping Paper*\r\n          - *Description*: Soft, high-quality tissue paper and wrapping paper, available in various colors and patterns, ideal for gift wrapping and protective packaging.\r\n       \r\n       ### Customized Packaging Solutions\r\n       \r\n       We understand that each business has unique packaging requirements. Therefore, we offer customized packaging solutions tailored to your specific needs. Whether it's printing your brand logo, designing unique shapes, or selecting specific materials, our team is ready to provide packaging that aligns perfectly with your brand identity.\r\n       \r\n       ### Inquiry for More Details\r\n       \r\n       For orders or any inquiries regarding our paper packaging products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.\r\n       \r\n       *Message Us* today to explore the finest quality paper packaging products from India, designed to meet your sustainability goals and packaging needs.",
      productTypeCtgDesc:
        "Eco-friendly and durable, our paper packaging solutions are designed for sustainability and practicality.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171586639-paper_packaging_main_picture.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171586640-paper.jpg",
      productPageUrl: "/products?p=paper",
    },
    {
      productTypeId: 6,
      productTypeTitle: "Sugarcane bagasse tableware",
      productTypeShortName: "sbt",
      productTypeDesc:
        "### Eco-Friendly Sugarcane Bagasse Tableware - Sustainable Solutions from India\r\n\r\n       #### Introducing Our Range of Premium Sugarcane Bagasse Tableware\r\n       \r\n       As a leading exporter from India, we are delighted to offer a comprehensive range of eco-friendly sugarcane bagasse tableware products to the global market. Made from the byproducts of sugarcane processing, our tableware is a sustainable and biodegradable alternative to conventional plastic and Styrofoam products, contributing to a greener planet.\r\n       \r\n       ### Types of Sugarcane Bagasse Tableware Products\r\n       \r\n       1. *Plates*\r\n          - *Description*: Available in various sizes and shapes (round, square, compartmentalized), our bagasse plates are sturdy, leak-proof, and ideal for serving meals at events, restaurants, and takeaways.\r\n       \r\n       2. *Bowls*\r\n          - *Description*: Our bagasse bowls come in different capacities, perfect for soups, salads, and desserts. They are microwave and freezer safe, ensuring versatility in use.\r\n       \r\n       3. *Cups*\r\n          - *Description*: Durable and heat-resistant, our bagasse cups are perfect for hot and cold beverages. They come in a range of sizes to suit different drink types.\r\n       \r\n       4. *Clamshell Containers*\r\n          - *Description*: Ideal for takeout and food delivery, these clamshell containers are sturdy, secure, and keep food fresh. Available in various sizes and compartment options.\r\n       \r\n       5. *Trays*\r\n          - *Description*: Our serving trays are robust and versatile, suitable for both food service and display purposes.\r\n       \r\n       6. *Cutlery*\r\n          - *Description*: Complement your tableware with our bagasse forks, knives, and spoons, which are strong and convenient for any meal.\r\n       \r\n       And much more...\r\n       \r\n       ### Health and Environmental Benefits\r\n       \r\n       - *Biodegradable*: Fully compostable and biodegradable, reducing landfill waste and environmental impact.\r\n       - *Sustainable*: Made from renewable sugarcane fibers, promoting sustainable agricultural practices.\r\n       - *Non-Toxic*: Free from harmful chemicals and coatings, ensuring safe use for food and beverages.\r\n       - *Microwave and Freezer Safe*: Versatile for various food storage and heating needs.\r\n       \r\n       ### Customized Packaging Solutions\r\n       \r\n       We understand that each business has unique packaging requirements. Hence, we offer customized packaging solutions tailored to your specific needs. Whether you need branded packaging, specific sizes, or special designs, our team is ready to provide solutions that perfectly match your brand identity and operational needs.\r\n       \r\n       ### Inquiry for More Details\r\n       \r\n       For orders or any inquiries regarding our sugarcane bagasse tableware products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.\r\n       \r\n       *Message Us* today to explore the finest quality sugarcane bagasse tableware from India, designed to meet your sustainability goals and packaging needs.",
      productTypeCtgDesc:
        "Our biodegradable and compostable tableware made from sugarcane bagasse is ideal for eco-conscious dining.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171685808-sugarcane_bagasse_compartment_meal_tray.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171685810-suger.jpg",
      productPageUrl: "/products?p=sbt",
    },
    {
      productTypeId: 7,
      productTypeTitle: "Vermicompost Fertilizer",
      productTypeShortName: "fertilizer",
      productTypeDesc:
        "### Premium Vermicompost Fertilizer - Sustainable Agriculture Solutions from India\r\n\r\n       #### Introducing Our High-Quality Vermicompost Fertilizer\r\n       \r\n       As a leading exporter from India, we are proud to offer our top-grade vermicompost fertilizer to the global market, with a special focus on Middle Eastern countries. Our vermicompost is produced using organic waste and earthworms, resulting in a nutrient-rich, eco-friendly fertilizer that promotes healthy soil and robust plant growth.\r\n       \r\n       ### Features and Benefits of Vermicompost Fertilizer\r\n       \r\n       1. *Nutrient-Rich*: Our vermicompost is rich in essential nutrients like nitrogen, phosphorus, potassium, and micronutrients, ensuring comprehensive plant nutrition.\r\n       2. *Soil Health*: Enhances soil structure, improves aeration, and increases water retention, leading to healthier root systems.\r\n       3. *Organic Matter*: Adds valuable organic matter to the soil, boosting microbial activity and soil fertility.\r\n       4. *Eco-Friendly*: Produced through natural processes, our vermicompost is free from harmful chemicals and pesticides, making it safe for the environment.\r\n       5. *Improved Yield*: Promotes vigorous plant growth and higher crop yields, benefiting both small-scale farmers and large agricultural operations.\r\n       \r\n       ### Application and Usage\r\n       \r\n       - *Agriculture*: Ideal for a wide range of crops, including fruits, vegetables, cereals, and pulses.\r\n       - *Horticulture*: Perfect for gardens, nurseries, and landscaping projects.\r\n       - *Home Gardening*: Enhances the growth of potted plants, flowers, and kitchen gardens.\r\n       \r\n       ### Customized Packaging Solutions\r\n       \r\n       Understanding the diverse needs of our customers, especially in the Middle East, we offer customized packaging solutions to suit your specific requirements. Whether you need bulk packaging for large agricultural projects or smaller packs for retail distribution, we provide flexible options to meet your needs.\r\n       \r\n       ### Why Choose Us?\r\n       \r\n       - *Quality Assurance*: We adhere to stringent quality control measures to ensure the highest standards of purity and effectiveness.\r\n       - *Sustainable Practices*: Our production process is environmentally friendly, promoting sustainable agricultural practices.\r\n       - *Global Reach*: With a strong export network, we ensure timely delivery and reliable service to our clients worldwide.\r\n       \r\n       ### Inquiry for More Details\r\n       \r\n       For orders or any inquiries regarding our vermicompost fertilizer products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.\r\n       \r\n       *Message Us* today to explore the finest quality vermicompost fertilizer from India, designed to support sustainable agriculture and enhance your crop productivity.",
      productTypeCtgDesc:
        "Enhance soil fertility with our high-quality vermicompost, promoting healthy and sustainable agriculture.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171749425-vermicompost_smooth_and_natural.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171749427-ferti.jpg",
      productPageUrl: "/products?p=fertilizer",
    },
    {
      productTypeId: 8,
      productTypeTitle: "Wooden Furniture",
      productTypeShortName: "furniture",
      productTypeDesc:
        "### Exquisite Wooden Furniture - Elegance and Craftsmanship from India\r\n\r\n       #### Introducing Our Premium Range of Wooden Furniture\r\n       \r\n       As a leading exporter from India, we are delighted to present our exquisite collection of wooden furniture, crafted with precision and elegance to cater to global tastes. Our furniture range includes beds, sofas, TV units, center tables, dining tables with chairs, wardrobes, cabinets, sideboards, and wine racks, all made from high-quality wood to ensure durability and timeless beauty.\r\n       \r\n       ### Types of Wooden Furniture\r\n       \r\n       1. *Beds*\r\n          - *Description*: Our range of wooden beds includes classic, contemporary, and modern designs, offering comfort and style. Available in various sizes (single, double, queen, king) and customizable finishes.\r\n       \r\n       2. *Sofas*\r\n          - *Description*: Elegant and comfortable, our wooden sofas are available in multiple designs, including traditional, modern, and sectional styles. Upholstery options can be customized to suit your decor.\r\n       \r\n       3. *TV Units*\r\n          - *Description*: Functional and stylish TV units that provide ample storage and a sleek look. Available in various sizes and configurations to fit your space.\r\n       \r\n       4. *Center Tables*\r\n          - *Description*: A variety of center tables, from minimalist to ornate designs, that serve as the perfect centerpiece for your living room.\r\n       \r\n       5. *Dining Tables with Chairs*\r\n          - *Description*: Our dining sets include tables and matching chairs in a range of styles, from rustic to contemporary, to enhance your dining experience.\r\n       \r\n       6. *Wardrobes*\r\n          - *Description*: Spacious and elegantly designed wardrobes that provide ample storage while adding sophistication to your bedroom. Available in various sizes and designs.\r\n       \r\n       7. *Cabinets and Sideboards*\r\n          - *Description*: Versatile storage solutions that blend functionality with aesthetic appeal. Ideal for living rooms, dining areas, and bedrooms.\r\n       \r\n       8. *Wine Racks*\r\n          - *Description*: Stylish and sturdy wine racks that showcase your collection elegantly. Available in various sizes and styles to suit your needs.\r\n       \r\n       ### Customized Packaging Solutions\r\n       \r\n       Understanding the diverse preferences and requirements of our international clientele, we offer customized packaging solutions to ensure safe and secure delivery. Whether you need robust packaging for large shipments or specialized packaging for individual pieces, we strive to meet your specific requirements.\r\n       \r\n       ### Why Choose Us?\r\n       \r\n       - *Quality Craftsmanship*: Each piece is meticulously crafted by skilled artisans, ensuring superior quality and attention to detail.\r\n       - *Sustainable Materials*: We use high-quality, sustainably sourced wood to create our furniture, promoting eco-friendly practices.\r\n       - *Global Reach*: With a robust export network, we ensure timely delivery and reliable service to clients worldwide.\r\n       - *Customization*: We offer bespoke furniture solutions, allowing you to tailor designs, finishes, and sizes to your specific needs.\r\n       \r\n       ### Inquiry for More Details\r\n       \r\n       For orders or any inquiries regarding our wooden furniture products, please feel free to reach out to us. We are here to assist you with detailed information, customization options, and to answer any questions you may have.\r\n       \r\n       *Message Us* today to explore the finest quality wooden furniture from India, crafted to enhance your living spaces with elegance and functionality.",
      productTypeCtgDesc:
        "Our handcrafted wooden furniture combines elegance and durability, perfect for enhancing any living space.",
      productTypeImgPath:
        "https://api.damodarr.com/uploads/productTypes/1722171836931-wooden_bed.jpg",
      productTypeCtgImg:
        "https://api.damodarr.com/uploads/productTypes/1722171836933-sofa.jpg",
      productPageUrl: "/products?p=furniture",
    },
  ];

  const [landingPageData, setLandingPageData] = useState(JsonData);
  const [productTypeData, setProductTypeData] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [apiProductData, setApiProductData] = useState([]);
  const [product, setProduct] = useSearchParams();

  console.log("Product Details", productDetails);

  useEffect(() => {
    axios.get(`${baseUrl}/getProductCategories`).then((response) => {
      const data = response?.data || productData;
      setProductTypeData(data);
      const selectedProduct =
        data?.find((p) => p?.productTypeShortName === product?.get("p")) ||
        productData[product.get("p")];

      setProductDetails(selectedProduct);

      if (selectedProduct) {
        axios
          .get(`${baseUrl}/getProducts`, {
            params: { productTypeId: selectedProduct.productTypeId },
          })
          .then((response) => {
            setApiProductData(response.data);
          });
      }
    });
  }, [product]);

  useEffect(() => { }, [productTypeData, product]);

  const parseMarkdown = (markdown) => {
    if (!markdown) return "";

    return markdown
      .replace(/^###### (.*?)(\r?\n|$)/gm, "<h6>$1</h6>")
      .replace(/^##### (.*?)(\r?\n|$)/gm, "<h5>$1</h5>")
      .replace(/^#### (.*?)(\r?\n|$)/gm, "<h4>$1</h4>")
      .replace(/^### (.*?)(\r?\n|$)/gm, "<h3>$1</h3>")
      .replace(/^## (.*?)(\r?\n|$)/gm, "<h2>$1</h2>")
      .replace(/^# (.*?)(\r?\n|$)/gm, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\r?\n/g, "<br />");
  };

  return (
    <ProductsContainer>
      <div className="container" data-aos="fade-up">
        <SectionTitle className="section-title">
          <h2>{productDetails?.productTypeTitle}</h2>
          <p>Explore our Products.</p>
        </SectionTitle>
        <IntroSection>
          <IntroImage
            style={{ width: window.innerWidth <= 768 ? "100%" : "40%" }}
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
        <section id="portfolio" className="portfolio">
          <div className="">
            <PortfolioContainer data-aos="fade-up">
              {apiProductData &&
                apiProductData.map((product) => (
                  <PortfolioItem
                    key={product.id}
                    className={`col-lg-12 col-md-12 portfolio-item filter-${product.id}`}
                  >
                    <div className="portfolio-wrap hover-bg">
                      <div className="hover-text">
                        <h4>{product.name}</h4>
                      </div>
                      <PortfolioImgWrapper>
                        <PortfolioImage
                          src={`${product.imageUrl}`}
                          alt={product.name}
                        />
                      </PortfolioImgWrapper>
                      <PortfolioInfo>
                        <PortfolioTitle>{product.name}</PortfolioTitle>
                        <PortfolioType>{product.name}</PortfolioType>
                      </PortfolioInfo>
                    </div>
                  </PortfolioItem>
                ))}
            </PortfolioContainer>
          </div>
        </section>
      </div>
    </ProductsContainer>
  );
};

export default Products;
