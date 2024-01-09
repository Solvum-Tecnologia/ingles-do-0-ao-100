import React from 'react';
import Abstract from '~/components/Abstract';

import Benefit from '~/components/Benefit';
import BuyButton from '~/components/BuyButton';
import CommonQuestions from '~/components/CommonQuestions';
import Documentary from '~/components/Documentary';
import Feedback from '~/components/Feedback';
import Differential from '~/components/Differential';
import Footer from '~/components/Footer';
import Sessions from '~/components/Sessions';
import SumUp from '~/components/SumUp';

import { Container, Content, Preview } from './styles';
import Bonus from '~/components/Bonus';
// import { ButtonWhatsapp } from '~/components/ButtonWhatsapp';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        {/* <div className="black">
          <div className="desktop">
            <img src="/assets/images/black.png" alt="" />
          </div>

          <div className="mobile">
            <img src="/assets/images/black_friday_mobile.png" alt="" />
          </div>
        </div> */}

        <div className="background" />

        <Content>
          <div className="banner">
            <div className="logo">
              <img src="/assets/images/logo.svg" alt="INGLÊS DO 0 AO 100" />
            </div>

            <div className="text-men">
              <div className="text">
                <h3 data-aos="fade-up" data-aos-delay="200">
                  {`
                    Você quer aprender Inglês do Zero absoluto até um nível avançado de comunicação, com um método testado e validado por mais de 1400 alunos?
                  `}
                </h3>
                <h3 data-aos="fade-up" data-aos-delay="200">
                  {`
                    Conheça todos os benefícios de um dos mais completos e com mais recursos para aprendizado do Brasil.
                  `}
                </h3>

                <div className="button">
                  <BuyButton />
                </div>
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

      {/* <ButtonWhatsapp /> */}
    </>
  );
};

export default Home;
