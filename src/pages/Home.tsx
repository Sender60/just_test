import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { BlockOne } from '../components/block1/blockOne';
import ScrollIndicator from '../components/scrollBar/ScrollBar';

export const Home = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <ScrollIndicator />
      <BlockOne />
      <div className="blockForModal">
        <button onClick={() => setModalActive(true)} className="modal-show-button">
          Открыть модальное окно
        </button>
        <Modal isOpen={modalActive} onClose={() => setModalActive(false)}>
          <h2>Модальное окно открыто</h2>
          <p>5 марта 2024 год. 2 часа ночи. Биткоин стоит 68 тысяч долларов.</p>
        </Modal>
      </div>
    </div>
  );
};
