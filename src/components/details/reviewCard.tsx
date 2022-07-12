import React, { ReactNode, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

type ReviewCardProps = {
  children?: ReactNode;
  id?: number;
  avatar?: string;
  name?: string;
  date?: string;
  score?: number;
  liked?: number;
  review?: string;
};

const readLessStyle = {
  color: theme.color._100,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  avatar,
  name,
  date,
  score,
  liked,
  review,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <Box
      sx={{
        minHeight: "200px",
        background: theme.color._850,
        p: 3,
        borderRadius: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Avatar User"
            src={avatar}
            sx={{ width: 60, height: 60 }}
          />
          <Box ml={2}>
            <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.color._100 }}>
              {date}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h1" sx={{ color: theme.color.green_400 }}>
          {score}
        </Typography>
      </Box>
      {readMore ? (
        <Typography sx={{ color: theme.color._100 }} mt={1}>
          {review}
        </Typography>
      ) : (
        <Typography sx={readLessStyle} mt={1}>
          {review}
        </Typography>
      )}

      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Button
          variant="outlined"
          disableRipple
          sx={{
            color: theme.color._100,
            border: 0,
            p: 0,
            fontSize: 18,
            fontWeight: 500,
            borderRadius: 1,
            textDecoration: "underline",
            "&:hover": {
              border: 0,
              textDecoration: "underline",
            },
          }}
          onClick={handleReadMore}
        >
          {readMore ? "Read less" : "Read more"}
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
            {liked}
          </Typography>
          <Box sx={{ color: theme.color._400 }} ml={1}>
            <ThumbUpIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ReviewCard;
