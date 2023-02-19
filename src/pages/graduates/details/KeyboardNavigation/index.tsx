import Close from "@mui/icons-material/Close";
import {
  IconButton,
  Modal,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import * as S from "./index.styled";

interface Shortcut {
  id: string;
  keyboardKey: string | string[];
  handler: () => void;
  keyboardIcon: string | string[];
  descr: string;
}

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

  const shortcuts: Shortcut[] = useMemo(() => {
    return [
      {
        id: "back",
        keyboardKey: "Escape",
        handler: goShowAllGraduates,
        keyboardIcon: "Esc",
        descr: "Back or close",
      },
      {
        id: "prev",
        keyboardKey: ["ArrowLeft", "k"],
        handler: goPrevGraduate,
        keyboardIcon: ["🡄", "k"],
        descr: "Previous graduate",
      },
      {
        id: "next",
        keyboardKey: ["ArrowRight", "j"],
        handler: goNextGraduate,
        keyboardIcon: ["🡆", "j"],
        descr: "Next graduate",
      },
      {
        id: "help",
        keyboardKey: "?",
        handler: () => setShowModal(true),
        keyboardIcon: "?",
        descr: "Show all keyboard shortcuts",
      },
    ];
  }, [goNextGraduate, goPrevGraduate, goShowAllGraduates]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      shortcuts
        .find(({ keyboardKey }) => {
          if (Array.isArray(keyboardKey)) return keyboardKey.includes(e.key);
          return e.key === keyboardKey;
        })
        ?.handler();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shortcuts]);

  function onClose() {
    setShowModal(false);
  }

  return (
    <Modal
      open={showModal}
      onClose={onClose}
      aria-labelledby="keyboard-shortcuts"
      aria-describedby="table-of-keyboard-shortcuts"
    >
      <S.ModalPaper>
        <S.ModalHeader>
          <S.ModalHeaderTitle id="keyboard-shortcuts" variant="h6">
            Keyboard Shortcuts
          </S.ModalHeaderTitle>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </S.ModalHeader>
        <S.ModalTableContainer>
          <S.ModalTable
            id="table-of-keyboard-shortcuts"
            aria-label="table-of-keyboard-shortcuts"
          >
            <TableHead>
              <TableRow>
                <TableCell>Keyboard Key(s)</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shortcuts.map((shortcut) => (
                <S.ModalTableRow key={shortcut.id}>
                  <TableCell component="th" scope="row">
                    {(Array.isArray(shortcut.keyboardIcon)
                      ? shortcut.keyboardIcon
                      : [shortcut.keyboardIcon]
                    )
                      .map<React.ReactNode>((icon) => (
                        // @ts-expect-error component doesn't exists in type
                        <S.ShortcutIcon component="span">{icon}</S.ShortcutIcon>
                      ))
                      .reduce((prev, curr) => [
                        prev,
                        <S.ShortcutIconDelimiter>
                          {" or "}
                        </S.ShortcutIconDelimiter>,
                        curr,
                      ])}
                  </TableCell>
                  <TableCell>{shortcut.descr}</TableCell>
                </S.ModalTableRow>
              ))}
            </TableBody>
          </S.ModalTable>
        </S.ModalTableContainer>
      </S.ModalPaper>
    </Modal>
  );
};

export default KeyboardNavigation;
