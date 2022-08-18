import * as React from "react";
import {
  Box,
  Button,
  DialogContentText,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import ModalLayout from "./ModalLayout";

type DeleteModalProps = {
  open: true | false;
  data?: any;
  onClose: () => void;
  onSubmit?: any;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  data,
  open,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div>
      <ModalLayout
        open={open}
        title="Delete anime from your list"
        onClose={onClose}
      >
        <Box sx={{ maxWidth: "350px" }}>
          <form onSubmit={handleSubmit}>
            <DialogContentText sx={{ color: theme.color.white, paddingTop: 2 }}>
              Are you sure you want to delete{" "}
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {data.title}
              </Typography>{" "}
              from your list?
            </DialogContentText>
            <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
              <Button
                type="submit"
                sx={{
                  fontSize: 16,
                  px: 1,
                  py: 0,
                  borderRadius: 2,
                  background: theme.color.red_800,
                  transition: "all 0.2s",
                  "&:hover": {
                    background: theme.color.red_800,
                  },
                }}
                autoFocus
                onClick={onClose}
              >
                Delete
              </Button>
              <Button
                sx={{
                  fontSize: 16,
                  px: 1,
                  py: 0,
                  borderRadius: 2,
                  background: theme.color.grey_300,
                }}
                autoFocus
                onClick={onClose}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </ModalLayout>
    </div>
  );
};

export default DeleteModal;
