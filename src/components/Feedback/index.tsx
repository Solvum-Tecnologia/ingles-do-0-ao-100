import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { Container, Content } from './styles';

const feedbackArray = [
  {
    id: '1acd0654-1d38-4b8e-abf7-ab26b31d47c8',
    name: 'Goreti Rodrigues',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/DEOm9kSOGB8',
  },
  {
    id: '45b69064-af8b-43ef-abe6-4ecdab6d86a2',
    name: 'Fernando Cipriano',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/phYmBcX_7Yw',
  },
  {
    id: '473b95f9-1318-4306-9932-7a8595d52197',
    name: 'Lorena Veronica',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/GEufAEo9toA',
  },
  {
    id: 'c1041931-7be4-49bc-a931-0b3655d426fe',
    name: 'Natália Conceição',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/B-O8guOBRaw',
  },
  {
    id: '1dd6453e-d6d4-435c-b820-51eae471c60c',
    name: 'Lucas',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/pnH0l3VT6xA',
  },
  {
    id: '82658014-02cf-4479-bad1-8f3cd8821bfa',
    name: 'Thálita',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/QVDkIHHbp44',
  },
  {
    id: 'd3b94b66-ea5b-46a6-a297-cf912fdef4cb',
    name: 'Michelle',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/Pd2jQ_VKpWA',
  },
  {
    id: 'f60d6a76-ec56-48e5-80fb-22f6428bbe82',
    name: 'Anderson',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/7aCPyZe1Y2M',
  },
  {
    id: '75745af2-963e-421e-befa-567005ce1d68',
    name: 'Aline Ribeiro',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/1kA-w-bL4H8',
  },
  {
    id: 'dbe2dd6d-0fa1-46e8-8cb3-ba12f28c8beb',
    name: 'Livia',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/CCAiT5SCVHg',
  },
  {
    id: '9f2099da-c9af-44d7-933d-500c34e70868',
    name: 'Sergio',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/Jrf-QBbqfa8',
  },
  {
    id: '9047947a-dda6-4a9f-842f-6d67db912a93',
    name: 'Thairine',
    description: '',
    urlVideo: 'https://www.youtube.com/embed/og6fyVsJ0KY',
  },
];

let multiply = 0;

const Feedback: React.FC = () => {
  const [viewPlus, setViewPlus] = useState(3);
  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Ainda está em dúvida?</h2>

        <div className="user-feedback">
          {feedbackArray.map((feed, index) => {
            if (index > viewPlus - 1) {
              return null;
            }

            if (multiply < 3) {
              multiply += 1;
            } else {
              multiply = 1;
            }

            return (
              <div key={feed.id} className="item">
                <iframe
                  data-aos="fade-right"
                  data-aos-delay={multiply * 100}
                  src={feed.urlVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <h3 data-aos="fade-up">{feed.name}</h3>
                <p data-aos="fade-up" data-aos-delay={multiply * 100}>
                  {feed.description}
                </p>
              </div>
            );
          })}
        </div>

        {feedbackArray.length > viewPlus && (
          <div className="view-plus">
            <button
              data-aos="zoom-in"
              type="button"
              onClick={() => setViewPlus(state => state + 3)}
            >
              <FaAngleDown />
              Ver mais
            </button>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Feedback;
