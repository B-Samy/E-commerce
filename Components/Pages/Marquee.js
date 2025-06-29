'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import '../styles/marquee.css'

class LogosMarquee {
  constructor({
    containerSelector = ".marquee__ctn",
    trackSelector = ".marquee__track",
    speed = 60, // pixels per second
  } = {}) {
    this.container = document.querySelector(containerSelector);
    this.track = document.querySelector(trackSelector);
    this.speed = speed;

    if (!this.container || !this.track) {
      console.warn("Marquee: éléments introuvables.");
      return;
    }

    this.trackWidth = this.track.getBoundingClientRect().width;
    this.pos = 0;
    this.start = null;
    this.rafId = null;

    this.setup();
    this.animate = this.animate.bind(this); // Bind for requestAnimationFrame
    requestAnimationFrame(this.animate);
  }

  setup() {
    // Extend the width of the container
    this.container.style.width = `${this.trackWidth}px`;

    // Duplicate the content to visually loop
    this.clone = this.track.cloneNode(true);
    this.container.appendChild(this.clone);

    // Mobile optimization
    this.container.style.willChange = "transform";
  }

  animate(timestamp) {
    if (!this.start) this.start = timestamp;

    const elapsed = timestamp - this.start;
    this.pos = -(elapsed / 1000) * this.speed;

    if (Math.abs(this.pos) >= this.trackWidth) {
      this.start = timestamp;
      this.pos = 0;
    }

    this.container.style.transform = `translateX(${this.pos}px)`;

    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    if (this.clone) this.clone.remove();
    this.container.style.transform = "";
    this.container.style.willChange = "";
  }
}

const Marquee = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures the code runs only on the client
      const marquee = new LogosMarquee({
        containerSelector: ".marquee__ctn",
        trackSelector: ".marquee__track",
        speed: 80,
      });

      // Clean up when the component unmounts
      return () => {
        marquee.destroy();
      };
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="marquee" data-speed="60">
        <div className="marquee__ctn">
          <div className="marquee__track">
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0eeeb860f66063130cc_Amsterdam-colored.svg"
                alt="LOGO"
                width={150}
                height={100}
              />
            </div>
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09591135411dbf1f686_colorado-colored.svg"
                alt="LOGO"
                height={100}
                width={150}
              />
            </div>
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65609f775edfd6ba4a3c3af7_Nairobi-colored.svg"
                alt="LOGO"
                width={150}
                height={100}
              />
            </div>
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/656093f6591bba4a6757b985_Hudon-colored.svg"
                alt="LOGO"
                height={100}
                width={150}
              />
            </div>
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560817610fbd2b58993793c_Aura-colored.svg"
                alt="LOGO"
                width={150}
                height={100}
              />
            </div>
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607df9d46a61fcef7c719f_Aiken-colored.svg"
                alt="LOGO"
                height={100}
                width={150}
              />
            </div>
          </div>
          <div className="marquee__track" aria-hidden="true">
            {/* Duplicate the same logos for the scrolling effect */}
            <div className="marquee__item">
              <Image
                className="Same-img"
                src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0eeeb860f66063130cc_Amsterdam-colored.svg"
                alt="LOGO"
                height={100}
                width={150}
              />
            </div>
            {/* Repeat the items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
