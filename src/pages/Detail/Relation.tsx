import { Box, Button, Link, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "theme";
import { RELATED_ANIME_PER_SECTION } from "./const ";


const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.color.grey_300,
    color: theme.color.white,
    boxShadow: theme.shadows[10],
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.color.grey_300,
  },
}));


const createList5Items = (list: any) => {
  var buffer = [];
  for (var i = 0; i < RELATED_ANIME_PER_SECTION; i++) {
    buffer.push(<Link key={i} href={`/${list[i].type}/${list[i].mal_id}`}>
      <StyledTooltip arrow placement='right-start' title={list[i].name}>
        <Typography variant='h6'
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: theme.color._400,
            textDecoration: 'underline',
            textDecorationThickness: '0.1px',
            transition: 'all 0.1s',
            "&:hover": {
              color: theme.color.white
            }
          }}>{list[i].name}</Typography></StyledTooltip></Link>);
  }
  return buffer;
}

const createListFullItems = (list: any) => {
  var buffer = [];
  for (var i = 0; i < list.length; i++) {
    buffer.push(<Link key={i} href={`/${list[i].type}/${list[i].mal_id}`}>
      <StyledTooltip arrow placement='right-start' title={list[i].name}>
        <Typography variant='h6'
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: theme.color._400,
            textDecoration: 'underline',
            textDecorationThickness: '0.1px',
            transition: 'all 0.1s',
            "&:hover": {
              color: theme.color.white
            }
          }}>{list[i].name}
        </Typography></StyledTooltip>
    </Link>);
  }
  return buffer;
}

const displayList = (data: any, viewMore: boolean) => {
  if (data.length < RELATED_ANIME_PER_SECTION)
    return <ul>{createListFullItems(data)}</ul>
  else {
    if (viewMore) return <ul>{createList5Items(data)}</ul>
    else return <ul>{createListFullItems(data)}</ul>
  }
}

const Relation = (props: any) => {
  const { data } = props
  const [viewMore, setViewMore] = useState(true)

  const handleChange = () => {
    setViewMore(!viewMore)
  }

  return data ? (
    <Box sx={{ width: '100%' }} pl={1}>
      {displayList(data, viewMore)}
      {data.length <= RELATED_ANIME_PER_SECTION ? <></> :
        <Button variant='outlined' disableRipple
          sx={{
            color: theme.color._100, border: 0,
            fontSize: 16,
            padding: 0,
            fontWeight: 300,
            textDecoration: 'underline',
            textDecorationThickness: '0.1px',
            "&:hover": {
              border: 0,
              fontWeight: 400,
              textDecoration: 'underline',
              textDecorationThickness: '0.1px',
              color: theme.color._100
            }
          }} onClick={handleChange}>{viewMore ? "View more" : "View less"}</Button>}
    </Box>
  ) : <></>
}

export default Relation;
