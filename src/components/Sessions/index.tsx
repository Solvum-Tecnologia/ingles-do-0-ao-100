import React, { useState } from 'react';

import { Container, Content } from './styles';

const Sessions: React.FC = () => {
  const [session, setSession] = useState(1);

  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Módulos do curso</h2>

        <div className="menu" data-aos="zoom-in">
          <ul>
            <li>
              <button
                type="button"
                onClick={() => setSession(1)}
                className={session === 1 ? 'active' : ''}
              >
                Módulo 1
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSession(2)}
                className={session === 2 ? 'active' : ''}
              >
                Módulo 2
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setSession(3)}
                className={session === 3 ? 'active' : ''}
              >
                Módulo 3
              </button>
            </li>
          </ul>
        </div>

        {session === 1 && (
          <div className="items" data-aos="flip-left">
            <div className="item">
              <p>Aula 1</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 2</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 3</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 4</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>
          </div>
        )}

        {session === 2 && (
          <div className="items" data-aos="flip-left">
            <div className="item">
              <p>Aula 1</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 2</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 3</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 4</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 5</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>
          </div>
        )}

        {session === 3 && (
          <div className="items" data-aos="flip-left">
            <div className="item">
              <p>Aula 1</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 2</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 3</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 4</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 5</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>

            <div className="item">
              <p>Aula 6</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
              <p>Data</p>
            </div>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Sessions;
