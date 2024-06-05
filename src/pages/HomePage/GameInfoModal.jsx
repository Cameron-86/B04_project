import styled from "styled-components";

const GameInfoModal = ({ onClose, data }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{data.title}</h2>
        <ModalImage src={data.image_url} alt={data.title} />
        <p>{data.description}</p>
        <p>장르: {data.genre}</p>
        <p>플랫폼: {data.platform}</p>
        <p>배급: {data.distribution}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default GameInfoModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 모달의 z-index를 설정합니다. 안하면 가려짐 */
`;

const ModalContent = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 700px;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.8rem;
    margin-top: 10px;
  }
`;

const ModalImage = styled.img`
  max-width: 600px;
  max-height: 500px;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
`;
