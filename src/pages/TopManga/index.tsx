import { TabContext, TabList } from '@mui/lab'
import { Box, Container, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import * as React from 'react'
import Layout from '../../components/layout'
import { CustomTab } from '../../components/Tabs/CustomTab'
import { CustomTabPanel } from '../../components/Tabs/CustomTabPanel'
import { FilterRankingList, TypeRankingList } from './RankingList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function TopAnime() {
	const [value, setValue] = React.useState('bypopularity')
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
					<Box height={200} overflow='hidden' borderRadius='10px'>
						<img alt='Banners' src='https://i.pinimg.com/originals/43/02/a3/4302a35dfdd97fdba90d0b44406bd4d7.jpg' width='100%' />
					</Box>
					<Box sx={{ width: '100%', typography: 'body1' }}>
						<TabContext value={value}>
							<Box>
								<TabList onChange={handleTabChange} variant='scrollable'>
									<CustomTab label='Most Popular' value='bypopularity' />
									<CustomTab label='Most Favorite' value='favorite' />
									<CustomTab label='Top Manga' value='manga' />
									<CustomTab label='Top Novel' value='novel' />
									<CustomTab label='Top Lightnovel' value='lightnovel' />
									<CustomTab label='Top Oneshot' value='oneshot' />
									<CustomTab label='Top Doujin' value='doujin' />
									<CustomTab label='Top Manhwa' value='manhwa' />
									<CustomTab label='Top Manhua' value='manhua' />
									<CustomTab label='Top Publishing' value='publishing' />
									<CustomTab label='Top Upcoming' value='upcoming' />
								</TabList>
							</Box>
							<CustomTabPanel value='manga'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Manga
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='novel'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Novel
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='lightnovel'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Lightnovel
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='oneshot'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Oneshot
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='doujin'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Doujin
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='manhwa'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Manhwa
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='manhua'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Manhua
									</Typography>
									<TypeRankingList type={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='upcoming'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Upcoming
									</Typography>
									<FilterRankingList filter={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='publishing'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Top Publishing
									</Typography>
									<FilterRankingList filter={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='bypopularity'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Most Popular
									</Typography>
									<FilterRankingList filter={value} />
								</Stack>
							</CustomTabPanel>
							<CustomTabPanel value='favorite'>
								<Stack spacing={1}>
									<Typography variant='h3' my={2}>
										Most Favorite
									</Typography>
									<FilterRankingList filter={value} />
								</Stack>
							</CustomTabPanel>
						</TabContext>
					</Box>
					<Box style={{ margin: '10px auto' }}>
						<Pagination
							count={10}
							shape='rounded'
							variant='outlined'
							color='primary'
							page={page}
							onChange={handlePageChange}
							renderItem={(item) => (
								<PaginationItem
									components={{
										previous: ArrowBackIcon,
										next: ArrowForwardIcon,
									}}
									{...item}
									sx={{
										'&.Mui-selected': {
											backgroundColor: '#9BA3EB',
											color: 'white',
											borderRadius: 0,
										},
									}}
								/>
							)}
						/>
					</Box>
				</Stack>
			</Container>
		</Layout>
	)
}
