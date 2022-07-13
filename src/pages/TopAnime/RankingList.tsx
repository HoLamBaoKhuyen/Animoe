import { Card, CardContent, Grid, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import { useGetFilterRankingQuery, useGetTypeRankingQuery } from '../../redux/slices/animeSlice'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import AddBoxIcon from '@mui/icons-material/AddBox'
import StarIcon from '@mui/icons-material/Star'

const List = ({ data }: { data: Array<any> }) => {
	return (
		<Stack spacing={2}>
			{data.map((item: any, index: number) => {
				return (
					<Card key={item.mal_id}>
						<CardContent>
							<Grid container spacing={2} alignItems='center' textAlign='center'>
								<Grid item xs={12} sm={2} md={1}>
									<WorkspacePremiumIcon fontSize='large' sx={{ color: index === 0 ? 'gold' : index === 1 ? 'silver' : 'brown' }} />
								</Grid>
								<Grid item xs={12} sm={2} md={1}>
									<img alt='Poster' src={item.images.jpg.image_url} width='100%' style={{ borderRadius: 10 }} />
								</Grid>
								<Grid item xs={9} sm={6} md={9} textAlign='left'>
									<Stack spacing={1}>
										<Typography variant='h4'>{item.title}</Typography>
										<Typography variant='body1' color={(theme) => theme.color._100}>
											{item.episodes}
										</Typography>
										<Typography variant='body1' color={(theme) => theme.color._100}>
											{item.duration}
										</Typography>
										<Typography variant='body1' color={(theme) => theme.color._100}>
											{item.status}
										</Typography>
									</Stack>
								</Grid>
								<Grid item xs={3} sm={2} md={1}>
									<IconButton sx={{ color: (theme) => theme.color._100 }}>
										<AddBoxIcon />
									</IconButton>
									<Stack spacing={1} direction='row' alignItems='center'>
										<StarIcon fontSize='small' color='warning' />
										<Typography variant='h5'>{item.score}</Typography>
									</Stack>
								</Grid>
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
