import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const Modal = ({ show, onHide, title, size, backdrop, children }) => {
  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      centered
      size={size || 'md'}
      backdrop={backdrop || true}
    >
      <div className="d-flex align-items-center pt-3">
        <div
          className={`${size === 'lg' ? 'fs-3' : 'fs-5'} flex-1 text-center fw-bold fs-16`}
        >
          {title}
        </div>
        <Button
          variant=""
          aria-label="Close"
          className="btn-close pe-4"
          data-bs-dismiss="modal"
          type="button"
          onClick={onHide}
        >
          <span aria-hidden="true">&times;</span>
        </Button>
      </div>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
