import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import React from "react"

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode,
  visible: boolean,
  handleClose?: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  children,
  visible = false,
  handleClose
}): React.ReactElement | null => {
  return (
    <Dialog open={visible} maxWidth="sm" fullWidth onClose={handleClose}>
      <DialogTitle fontWeight={700}>
        <IconButton onClick={handleClose} color="secondary" aria-label="close" >
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}
      </DialogContent>
    </Dialog>
  )
}