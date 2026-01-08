import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import PostReview from "./PostReview";
import userImg from "../assets/user.png";
import Toast from "../utils/Toast";
import toastImg from "../assets/logo2.png";
import { Carousel } from "react-responsive-carousel";
import { getClientFeedbacks } from "../services/api";
import "./testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Star = ({ filled }) => (
  <span className={`star ${filled ? 'filled' : ''}`}>
    {filled ? "★" : "☆"}
  </span>
);

export const Testimonials = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchTestimonialData();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const fetchTestimonialData = async () => {
    try {
      const response = await getClientFeedbacks({ limit: 6 });
      setTestimonialData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const renderStars = (count) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => (
          <Star key={index} filled={index < count} />
        ))}
      </div>
    );
  };

  const centerSlidePercentage = windowWidth <= 768 ? 100 : 100 / 3;

  return (
    <div id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What our clients say</h2>
        </div>

        <div className="testimonials-carousel">
          {loading ? (
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              stopOnHover={false}
              transitionTime={500}
              centerMode
              centerSlidePercentage={100}
              renderIndicator={false}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  <div className="skeleton-card">
                    <div className="skeleton-element skeleton-image"></div>
                    <div className="skeleton-element skeleton-text"></div>
                    <div className="skeleton-element skeleton-text"></div>
                    <div className="skeleton-element skeleton-stars"></div>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              stopOnHover={true}
              transitionTime={500}
              centerMode
              centerSlidePercentage={centerSlidePercentage}
              renderIndicator={false}
            >
              {testimonialData.map((d, i) => (
                <div key={`${d.fbkUserName}-${i}`}>
                  <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <div className="testimonial-image">
                      <img src={userImg} alt={d.fbkUserName} />
                    </div>
                    <div className="testimonial-content">
                      <p>{d.fbkReviewDesc}</p>
                    </div>
                    <div className="testimonial-meta">
                      {d.fbkUserName}
                    </div>
                    {renderStars(d.fbkStarCount)}
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>

        <button
          className="post-review-button"
          onClick={() => setModalOpen(true)}
        >
          <span>Post a Review</span>
        </button>

        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <PostReview handleShow={() => setShowToast(true)} />
          </Modal>
        )}
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        headerText="Feedback Posted"
        bodyText="Thank you for your valuable feedback."
        timeAgo="1 Seconds Ago"
        imageSrc={toastImg}
      />
    </div>
  );
};

export default Testimonials;
