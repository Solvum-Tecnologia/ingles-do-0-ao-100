import React from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import Button from '../Button';
import { Content, Container } from './styles';

const Benefit: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="benefit">
          <h2>benefícios do curso</h2>
          <div className="items">
            <div className="item">
              <span data-aos="zoom-in">
                <FaCheckCircle />
              </span>
              <h3>
                nenhum problema pode ser resolvido pelo mesmo estado de
                consciência que o criou.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="200">
                <FaCheckCircle />
              </span>
              <h3>
                nenhum problema pode ser resolvido pelo mesmo estado de
                consciência que o criou.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="400">
                <FaCheckCircle />
              </span>
              <h3>
                nenhum problema pode ser resolvido pelo mesmo estado de
                consciência que o criou.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="600">
                <FaCheckCircle />
              </span>
              <h3>
                nenhum problema pode ser resolvido pelo mesmo estado de
                consciência que o criou.
              </h3>
            </div>
          </div>
        </div>

        <div className="view-left">
          <div className="background" data-aos="fade-right" />

          <div className="item">
            <div>
              <h2 data-aos="fade-down" data-aos-delay="400">
                o que é o curso é o inglês do zero ao cem?
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
            </div>

            <iframe
              data-aos="fade-left"
              data-aos-delay="400"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="view-right">
          <div className="background" data-aos="fade-left" />

          <div className="item">
            <iframe
              data-aos-delay="400"
              data-aos="fade-right"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div>
              <h2 data-aos="fade-down" data-aos-delay="400">
                o que é o curso é o inglês do zero ao cem?
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <Button>Sim, Quero aprender inglês</Button>
      </Content>
    </Container>
  );
};

export default Benefit;
