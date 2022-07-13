import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Container, Pagination, Stack, Tab, Typography } from '@mui/material'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/layout'
import { apiSlice } from '../../redux/slices/apiSlice'
import { FilterRankingList, TypeRankingList } from './RankingList'

export default function TopAnime() {
	const [value, setValue] = React.useState('tv')
	const [page, setPage] = React.useState(1)

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<Layout>
			<Container maxWidth='md'>
				<Stack spacing={2}>
					<Typography variant='h3'>Top Anime</Typography>
					<img alt='Banners' src='https://i.pinimg.com/originals/43/02/a3/4302a35dfdd97fdba90d0b44406bd4d7.jpg' style={{ borderRadius: 10 }} />
					<Box sx={{ width: '100%', typography: 'body1' }}>
						<TabContext value={value}>
							<Box sx={{ borderBottom: 1, borderColor: '#fff3' }}>
								<TabList onChange={handleTabChange} variant='scrollable'>
									<Tab label='TV' value='tv' />
									<Tab label='Movie' value='movie' />
									<Tab label='OVA' value='ova' />
									<Tab label='Special' value='special' />
									<Tab label='ONA' value='ona' />
									<Tab label='Music' value='music' />
									<Tab label='Airing' value='airing' />
									<Tab label='Upcoming' value='upcoming' />
									<Tab label='Popular' value='bypopularity' />
									<Tab label='Favorite' value='favorite' />
								</TabList>
							</Box>
							<TabPanel value='tv'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='movie'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='ova'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='special'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='ona'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='music'>
								<TypeRankingList type={value} />
							</TabPanel>
							<TabPanel value='airing'>
								<FilterRankingList filter={value} />
							</TabPanel>
							<TabPanel value='upcoming'>
								<FilterRankingList filter={value} />
							</TabPanel>
							<TabPanel value='bypopularity'>
								<FilterRankingList filter={value} />
							</TabPanel>
							<TabPanel value='favorite'>
								<FilterRankingList filter={value} />
							</TabPanel>
						</TabContext>
					</Box>
					<Box style={{ margin: '0 auto' }}>
						<Pagination count={10} color='primary' page={page} onChange={handlePageChange} />
					</Box>
				</Stack>
			</Container>
		</Layout>
	)
}
