import './Modal.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal_wrapper">
            <div className="modal_content">
              <button onClick={() => onClose()} className="modal-close-button">
                <svg className="clearIcon" xmlns="http://www.w3.org/2000/svg">
                  <line x1="6" y1="24" x2="24" y2="6" stroke="black" strokeWidth="2.5" />
                  <line x1="6" y1="6" x2="24" y2="24" stroke="black" strokeWidth="2.5" />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
