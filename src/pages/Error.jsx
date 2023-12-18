import { useEffect } from 'react';
import styled from 'styled-components';

const Error = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <Wrapper>
      <div className="card-container">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card-container {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .card {
    width: 30rem;
    height: 10rem;
    background-color: red;
    opacity: 0;
    transform: translateY(10rem);
  }
  .show {
    opacity: 1;
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
  }
`;

export default Error;
