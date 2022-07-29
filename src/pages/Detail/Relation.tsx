import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "theme";
import { RELATED_ANIME_PER_SECTION } from "./const ";



const createList5Items = (list: any) => {
  var buffer = [];
  for (var i = 0; i < RELATED_ANIME_PER_SECTION; i++) {
    buffer.push(<Link href={`/${list[i].type}/${list[i].mal_id}`}><Typography variant='body2'>&nbsp;&nbsp;&nbsp;{list[i].name}</Typography></Link>);
  }
  return buffer;
}

const createListFullItems = (list: any) => {
  var buffer = [];
  for (var i = 0; i < list.length; i++) {
    buffer.push(<Link href={`/${list[i].type}/${list[i].mal_id}`} sx={{
      "&:hover .MuiTypography-root": {
        textDecoration: 'underline'
      }
    }}><Typography variant='body2'>&nbsp;&nbsp;&nbsp;{list[i].name}</Typography></Link>);
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
    <Box sx={{ width: '100%' }}>
      {displayList(data, viewMore)}
      {data.length < RELATED_ANIME_PER_SECTION ? <></> : <Button variant='outlined' sx={{ color: theme.color._100, border: 0, }} onClick={handleChange}>{viewMore ? "View more" : "View less"}</Button>}
    </Box>
  ) : <></>
}

export default Relation;
