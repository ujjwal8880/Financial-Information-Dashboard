import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Pagination from './components/Pagination'
import { fetchData } from './slices/app.slice'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData({ page: 1 }))
	}, [dispatch])

	return (
		<div className='App'>
			<Typography variant='h4'>Financial Information Dashboard</Typography>
			<Filter />
			<Cards />
			<Pagination />
		</div>
	)
}

export default App
