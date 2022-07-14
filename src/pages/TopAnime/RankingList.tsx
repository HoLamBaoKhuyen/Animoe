import { Box, Card, CardContent, Grid, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import { useGetFilterRankingQuery, useGetTypeRankingQuery } from '../../redux/slices/animeSlice'
import AddBoxIcon from '@mui/icons-material/AddBox'
import StarIcon from '@mui/icons-material/Star'

const List = ({ data }: { data: Array<any> }) => {
	return (
		<Stack spacing={2}>
			{data.map((item: any, index: number) => {
				return (
					<Card key={item.mal_id}>
						<CardContent style={{ display: 'flex', alignItems: 'center' }}>
							<Grid container spacing={2} alignItems='center' textAlign='center' position='relative'>
								<Grid item xs={12} sm={2} md={1}>
									{index < 3 ? (
										<i className='fa-solid fa-crown' style={{ color: index === 0 ? 'gold' : index === 1 ? 'silver' : 'brown', fontSize: 50, position: 'relative' }}>
											<span style={{ fontFamily: 'Roboto', color: 'white', position: 'absolute', top: 22, left: 22, fontSize: 'medium' }}>{index + 1}</span>
										</i>
									) : (
										<i className='fa-solid fa-medal' style={{ color: '#7880c0', fontSize: 50, position: 'relative' }}>
											<span style={{ fontFamily: 'Roboto', color: 'white', position: 'absolute', top: 55, left: index < 9 ? 18 : 12, fontSize: 'medium' }}>{index + 1}</span>
										</i>
									)}
								</Grid>
								<Grid item xs={12} sm={2} md={1}>
									<img alt='Poster' src={item.images.jpg.image_url} width='100%' style={{ borderRadius: 10 }} />
								</Grid>
								<Grid item xs={12} sm={7} md={9} textAlign='left'>
									<Stack spacing={1}>
										<Typography variant='h4' sx={{ fontWeight: 600 }}>
											{item.title}
										</Typography>
										<Typography variant='body1' sx={{ fontWeight: 600 }} color={(theme) => theme.color._100}>
											{item.episodes}
										</Typography>
										<Typography variant='body1' sx={{ fontWeight: 600 }} color={(theme) => theme.color._100}>
											{item.duration}
										</Typography>
										<Typography variant='body1' sx={{ fontWeight: 600 }} color={(theme) => theme.color._100}>
											{item.status}
										</Typography>
									</Stack>
								</Grid>
								<IconButton sx={{ color: (theme) => theme.color._100 }} style={{ position: 'absolute', top: 0, right: -10 }}>
									<AddBoxIcon />
								</IconButton>
								<Stack spacing={1} direction='row' alignItems='center' style={{ position: 'absolute', bottom: -10, right: 0 }}>
									<StarIcon fontSize='small' sx={{ color: 'yellow' }} />
									<Typography variant='h5' sx={{ fontWeight: 600 }} color={(theme) => theme.color._100}>
										{item.score}
									</Typography>
								</Stack>
							</Grid>
						</CardContent>
					</Card>
				)
			})}
		</Stack>
	)
}

export const TypeRankingList = ({ type }: { type: string }) => {
	const { data } = useGetTypeRankingQuery(type)
	console.log(data)
	return data ? (
		<List data={data.data} />
	) : (
		<Stack spacing={2}>
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
		</Stack>
	)
}

export const FilterRankingList = ({ filter }: { filter: string }) => {
	const { data } = useGetFilterRankingQuery(filter)
	console.log(data)
	return data ? (
		<List data={data.data} />
	) : (
		<Stack spacing={2}>
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
			<Skeleton variant='rectangular' height={200} />
		</Stack>
	)
}
