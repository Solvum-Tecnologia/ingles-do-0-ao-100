import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

export const ButtonWhatsapp: React.FC = () => {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=5511989809037&text=Hello!%20Quero%20saber%20mais%20sobre%20o%20curso%20Ingl%C3%AAs%20do%20Zero%20ao%20Cem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <FaWhatsapp />
        </div>

        <div className="text">Atendimento por WhatsApp</div>
      </a>
    </Container>
  );
};
