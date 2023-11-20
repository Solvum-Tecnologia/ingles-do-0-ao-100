import React, { ReactElement, useState } from 'react';

import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';

import { Container, Content } from './styles';

import modules from '../../db/modules';

const Sessions: React.FC = () => {
  const [session, setSession] = useState(1);

  const breakPoints: ReactElasticCarouselProps['breakPoints'] = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 900, itemsToShow: 5 },
    { width: 1000, itemsToShow: 6 },
  ];

  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Módulos do curso</h2>

        <div className="menu" data-aos="zoom-in">
          <ul>
            <Carousel isRTL={false} breakPoints={breakPoints}>
              {modules.map(module => (
                <li key={module.id}>
                  <button
                    type="button"
                    onClick={() => setSession(module.id)}
                    className={session === module.id ? 'active' : ''}
                  >
                    {module.title}
                  </button>
                </li>
              ))}
            </Carousel>
          </ul>
        </div>

        {modules.map(
          module =>
            module.id === session && (
              <div className="items" data-aos="flip-left" key={module.id}>
                {module.classes.map(item => (
                  <div className="item" key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ),
        )}
      </Content>
    </Container>
  );
};

export default Sessions;
