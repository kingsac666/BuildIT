import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Sarah El Idrissi',
    role: 'Founder',
    company: 'Atlas Retreats',
    quote:
      'BuildIT delivered a fast, elegant site and automated our leads. We saw more bookings within weeks.',
    rating: 5,
  },
  {
    name: 'Youssef Amrani',
    role: 'Operations Lead',
    company: 'Medina Retail',
    quote:
      'The dashboard they built replaced three spreadsheets and saved hours every week.',
    rating: 5,
  },
  {
    name: 'Leila Bennani',
    role: 'Marketing Manager',
    company: 'Luna Skincare',
    quote:
      'Our campaigns finally convert. BuildIT nailed the strategy and creative.',
    rating: 4,
  },
  {
    name: 'Omar Haddad',
    role: 'COO',
    company: 'Casablanca Hospitality Group',
    quote:
      'Their WhatsApp automation improved response time and reduced missed leads.',
    rating: 5,
  },
  {
    name: 'Nadia Chraibi',
    role: 'Co-Founder',
    company: 'Sahara Tours',
    quote:
      'From discovery to launch, the process was smooth and results-focused.',
    rating: 5,
  },
];

const buildStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => index < rating);
};

const TestimonialsCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(reviews);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const speedRef = useRef(0.4);
  const stepRef = useRef(0);
  const lastScrollLeftRef = useRef(0);

  const updateStep = () => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gapValue = styles.columnGap || styles.gap;
    const gap = Number.parseFloat(gapValue) || 0;
    const cardWidth = track.firstElementChild.offsetWidth || 0;
    stepRef.current = cardWidth + gap;
  };

  useEffect(() => {
    updateStep();
    const observer = new ResizeObserver(updateStep);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tick = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const container = containerRef.current;
      const step = stepRef.current;

      if (container && step > 0 && !isDragging && !isHovering) {
        container.scrollLeft += speedRef.current * delta;

        if (container.scrollLeft >= step) {
          container.scrollLeft -= step;
          setVisibleReviews((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
          });
        }
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [isDragging, isHovering]);

  const rotateForward = () => {
    setVisibleReviews((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const rotateBackward = () => {
    setVisibleReviews((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const current = container.scrollLeft;
    const delta = current - lastScrollLeftRef.current;
    lastScrollLeftRef.current = current;
    const step = stepRef.current;

    if (step <= 0) {
      return;
    }

    if (delta > 0 && current >= step) {
      container.scrollLeft -= step;
      lastScrollLeftRef.current = container.scrollLeft;
      rotateForward();
    } else if (delta < 0 && current <= 0) {
      container.scrollLeft += step;
      lastScrollLeftRef.current = container.scrollLeft;
      rotateBackward();
    }
  };

  const handlePointerDown = (event) => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.setPointerCapture(event.pointerId);
    dragState.current = {
      startX: event.clientX,
      scrollLeft: containerRef.current.scrollLeft,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || !containerRef.current) {
      return;
    }
    const delta = event.clientX - dragState.current.startX;
    containerRef.current.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const handlePointerUp = (event) => {
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const handlePointerLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`reviews-marquee${isDragging ? ' is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onScroll={handleScroll}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="region"
      aria-label="Client reviews carousel"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="reviews-track" ref={trackRef}>
        {visibleReviews.map((review, index) => (
          <article className="review-card" key={`${review.name}-${index}`}>
            <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
              {buildStars(review.rating).map((isFilled, starIndex) => (
                <span
                  key={`${review.name}-star-${starIndex}`}
                  className={isFilled ? 'star filled' : 'star'}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="review-quote">"{review.quote}"</p>
            <div className="review-meta">
              <span className="review-name">{review.name}</span>
              <span className="review-role">
                {review.role}, {review.company}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
