import ModalAddMovies from 'components/ModalAddMovies';
import { useState } from 'react';

export default function Index() {
  const [modalOpen, setModalOpen] = useState(true);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return <ModalAddMovies isOpen={modalOpen} setIsOpen={toggleModal} />;
}
