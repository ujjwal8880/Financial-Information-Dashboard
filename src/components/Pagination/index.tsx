import { Pagination } from '@mui/material'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { dataMaxLength } from '../../constants/app'
import { StateType, fetchData } from '../../slices/app.slice'

const PaginationComponent = () => {
	const dispatch = useDispatch()
	const limit = useSelector((state: { app: StateType }) => state.app.limit)

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(fetchData({ page: value }))
	}

	return (
		<StyledPagination
			color='primary'
			onChange={handlePageChange}
			count={Math.ceil(dataMaxLength / limit)}
			size='small'
			shape='rounded'
		/>
	)
}

export default memo(PaginationComponent)

const StyledPagination = styled(Pagination)`
	display: flex;
	justify-content: center;
`
