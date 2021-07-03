import React from 'react';

import { Container, Content } from './styles';

const Feedback: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Ainda está em dúvida?</h2>

        <div className="user-feedback">
          <div className="item">
            <iframe
              data-aos="fade-right"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3 data-aos="fade-up">Nome do aluno</h3>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              culpa minima hic perferendis facere facilis magni quae blanditiis
              voluptates tempore, rerum atque possimus! Nisi ipsam eligendi
              distinctio placeat, officiis nemo.
            </p>
          </div>

          <div className="item">
            <iframe
              data-aos="zoom-in"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3 data-aos="fade-up">Nome do aluno</h3>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              culpa minima hic perferendis facere facilis magni quae blanditiis
              voluptates tempore, rerum atque possimus! Nisi ipsam eligendi
              distinctio placeat, officiis nemo.
            </p>
          </div>
          <div className="item">
            <iframe
              data-aos="fade-left"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3 data-aos="fade-up">Nome do aluno</h3>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              culpa minima hic perferendis facere facilis magni quae blanditiis
              voluptates tempore, rerum atque possimus! Nisi ipsam eligendi
              distinctio placeat, officiis nemo.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Feedback;
