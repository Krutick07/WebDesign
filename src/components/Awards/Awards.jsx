import React, { useRef } from 'react';
import './Awards.css';
import leftarrow from '../../assets/leftarrow.png';
import rightarrow from '../../assets/rightarrow.png';

const Awards = () => {
  const awardsData = [
    {
      year: 2015,
      awards: [
        { title: 'Awards', description: 'Website of the Day, Mobile Experience' },
        { title: 'CSS Design Awards', description: 'Honorable Mention' },
      ],
    },
    {
      year: 2016,
      awards: [
        { title: 'Awards', description: 'Website of the Day' },
        { title: 'CSS Design Awards', description: 'Honorable Mention' },
      ],
    },
    {
      year: 2017,
      awards: [{ title: 'Best Website', description: 'E-commerce Excellence' }],
    },
    {
      year: 2018,
      awards: [
        { title: 'Awards', description: 'Website of the Day' },
        { title: 'CSS Design Awards', description: 'Honorable Mention' },
      ],
    },
    {
      year: 2019,
      awards: [
        { title: 'Awards', description: 'Website of the Day' },
        { title: 'CSS Design Awards', description: 'Honorable Mention' },
      ],
    },
    {
      year: 2020,
      awards: [
        { title: 'Awards', description: 'Website of the Day' },
        { title: 'CSS Design Awards', description: 'Honorable Mention' },
      ],
    },
  ];

  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 250; // Amount to scroll on each click
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='Awards'>
      <div className="a-head">
        <div className="a-left">
          <span>We Proud That</span>
          <span>Discover our Awards</span>
        </div>
        <div className="a-right">
          <div className="left-arrow" onClick={() => scroll('left')}>
            <img src={leftarrow} alt="Left Arrow" />
          </div>
          <div className="right-arrow" onClick={() => scroll('right')}>
            <img src={rightarrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
      <div className="a-body" ref={scrollContainer}>
        {awardsData.map((award, index) => (
          <>
          <div className="a-content" key={index}>
            
            <div className="a-arrow"></div>
            <div className="a-year">{award.year}</div>
            <div className="a-text">
              {award.awards.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="a1">{item.title}</span>
                  <span className="a2">{item.description}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Awards;
