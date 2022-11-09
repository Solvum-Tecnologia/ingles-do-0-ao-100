import React from 'react';
import Abstract from '../../components/Abstract';

import Benefit from '../../components/Benefit';
import BuyButton from '../../components/BuyButton';
import CommonQuestions from '../../components/CommonQuestions';
import Documentary from '../../components/Documentary';
import Feedback from '../../components/Feedback';
import Differential from '../../components/Differential';
import Footer from '../../components/Footer';
import Sessions from '../../components/Sessions';
import SumUp from '../../components/SumUp';

import { Container, Content, Preview } from './styles';
import Bonus from '../../components/Bonus';
import MenImg from '../../assets/men.png';
import { ButtonWhatsapp } from '../../components/ButtonWhatsapp';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <div className="black">
          <img src="/assets/images/black.png" alt="" />
        </div>
        <div className="background" />

        <Content>
          <div className="header">
            <div className="logo">
              <img src="/assets/images/logo.svg" alt="INGLÊS DO 0 AO 100" />
            </div>
          </div>

          <div className="banner">
            <div className="text-men">
              <div className="text">
                <h2 data-aos="zoom-in">INGLÊS DO ZERO AO CEM</h2>
                <h3 data-aos="fade-up" data-aos-delay="200">
                  {`
                    O curso com mais recursos para aprendizado no país, do zero ao mais avançado, trabalhando todas as áreas do desenvolvimento do idioma
                  `}
                </h3>
              </div>

              <div className="men">
                <img
                  data-aos="fade-up"
                  data-aos-delay="400"
                  src="/assets/images/men.png"
                  alt="men"
                />
              </div>
            </div>
          </div>
        </Content>

        <Preview>
          <div>
            <h2 data-aos="zoom-in">
              Já perdeu alguma oportunidade por não falar inglês?
            </h2>
            <iframe
              data-aos="fade-up"
              src="https://www.youtube.com/embed/SlOjtIfAAnM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <BuyButton />
          </div>
        </Preview>
      </Container>

      <Benefit />

      <Abstract />

      <Documentary />

      <Sessions />

      <Feedback />

      <Differential />

      <Bonus />

      <CommonQuestions />

      <SumUp />

      <Footer />

      <ButtonWhatsapp />
    </>
  );
};

export default Home;
