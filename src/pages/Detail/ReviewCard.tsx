import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { format_date } from "helpers/format";
var ReadMoreReact = require('read-more-react').default;


const ReviewCard: React.FC = (props: any) => {
  return (
    <Box
      sx={{
        position: 'relative',
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
            src={props.user.images.webp.image_url}
            sx={{ width: 60, height: 60 }}
          />
          <Box ml={2}>
            <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
              {props.user.username}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.color._100, fontSize: 13, fontWeight: 200 }}
            >
              {format_date(props.date)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h1" sx={{ color: theme.color.green_400 }}>
          {props.scores.overall}
        </Typography>
      </Box>
      <Box sx={{
        "& .display-text-group": {
          color: theme.color._100,
          fontFamily: 'Poppins'
        }
      }}>
        <ReadMoreReact
          text={props.review}
          min={50}
          ideal={200}
          max={5000}
          readMoreText={<Button
            variant="outlined"
            disableRipple
            sx={{
              color: theme.color._100,
              border: 0,
              p: 0,
              fontSize: 17,
              fontWeight: 600,
              borderRadius: 1,
              "&:hover": {
                border: 0,
                color: theme.color._400,
              },
            }}
          >
            Read more
          </Button>} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'flex-end' }}>
        <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
          {props.votes}
        </Typography>
        <Box sx={{ color: theme.color._400 }} ml={1}>
          <ThumbUpIcon />
        </Box>
      </Box>
    </Box >
  );
};
export default ReviewCard;
