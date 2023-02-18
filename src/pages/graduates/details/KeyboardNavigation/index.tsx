import Close from "@mui/icons-material/Close";
import { IconButton, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface KeyboardNavigationProps {
  goPrevGraduate: () => void;
  goNextGraduate: () => void;
  goShowAllGraduates: () => void;
}

const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({
  goPrevGraduate,
  goNextGraduate,
  goShowAllGraduates,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") goShowAllGraduates();
      else if (e.key === "?") setShowModal(true);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goShowAllGraduates]);

  useEffect(() => {
    function onKeyboardNavigate(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "k") goPrevGraduate();
      else if (e.key === "ArrowRight" || e.key === "j") goNextGraduate();
    }
    window.addEventListener("keydown", onKeyboardNavigate);
    return () => window.removeEventListener("keydown", onKeyboardNavigate);
  }, [goNextGraduate, goPrevGraduate]);

  return (
    <Modal
      style={{ zIndex: 5000 }}
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="keyboard-shortcuts"
      aria-describedby="list-of-keyboard-shortcuts"
    >
      <section style={{ background: "white" }}>
        <header>
          <Typography id="keyboard-shortcuts" variant="h6" component="h2">
            Keyboard shortcuts
          </Typography>
          <IconButton>
            {/* TODO: auto focus when open, so that user can press enter to close modal */}
            <Close />
          </IconButton>
        </header>
        <main id="list-of-keyboard-shortcuts">hello world</main>
      </section>
    </Modal>
  );
};

export default KeyboardNavigation;
