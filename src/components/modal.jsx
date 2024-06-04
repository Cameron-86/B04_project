import styled from "styled-components";

const Modal = ({ onClose, data }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{data.title}</h2>
        <ModalImage src={data.image_url} alt={data.title} />
        <p>Genre: {data.genre}</p>
        <p>Platform: {data.platform}</p>
        <p>Distribution: {data.distribution}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 모달의 z-index를 설정합니다. 안하면 가려짐 */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const ModalImage = styled.img`
  max-width: 800px;
  max-height: 600px;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
`;
