import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box, Button, Drawer, Grid, IconButton, debounce, useMediaQuery } from '@mui/material'
import { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { filters } from '../../constants/filter'
import CalendarRange from '../../sharedComponents/CalendarRange'
import Input from '../../sharedComponents/Input'
import Range from '../../sharedComponents/Range'
import Select from '../../sharedComponents/Select'
import { applyFilter } from '../../slices/app.slice'

const Filter = () => {
	const dispatch = useDispatch()
	const isSmallScreen = useMediaQuery('(max-width:900px)')

	const [openModal, setOpenModal] = useState(false)

	const closeModal = () => {
		setOpenModal(false)
	}

	const handleOnChange = (key: string, value: any) => {
		dispatch(applyFilter({ key, value }))
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedHandleOnChange = useCallback(debounce(handleOnChange, 250), [handleOnChange])

	const FiltersComp = () => (
		<Grid
			flexDirection={isSmallScreen ? 'column' : 'row'}
			paddingRight={3}
			justifyContent='space-between'
			display='flex'
			gap={isSmallScreen ? 1 : 0}
			item
			xs={12}
			md={4}
			lg={4}
			xl={3}>
			{filters.map((filter) => {
				if (filter.type === 'calendarRange') {
					return <CalendarRange info={filter} key={filter.key} handleOnChange={debouncedHandleOnChange} />
				} else if (filter.type === 'input') {
					return <Input info={filter} key={filter.key} handleOnChange={debouncedHandleOnChange} />
				} else if (filter.type === 'select') {
					return <Select info={filter} key={filter.key} handleOnChange={debouncedHandleOnChange} />
				} else if (filter.type === 'range') {
					return (
						<Range
							range={filter.range}
							info={filter}
							key={filter.key}
							handleOnChange={debouncedHandleOnChange}
						/>
					)
				} else {
					return null
				}
			})}
		</Grid>
	)

	if (!isSmallScreen) {
		return <FiltersComp />
	}

	return (
		<>
			<StyledButton variant='contained' onClick={() => setOpenModal(true)} startIcon={<FilterAltIcon />} />
			<StyledDrawer
				keepMounted
				anchor={'bottom'}
				onClose={closeModal}
				open={openModal}
				isSmallScreen={isSmallScreen}>
				<StyledIconButton onClick={closeModal}>
					<CloseTwoToneIcon />
				</StyledIconButton>
				<Box>
					<FiltersComp />
				</Box>
			</StyledDrawer>
		</>
	)
}

export default memo(Filter)

const StyledIconButton = styled(IconButton)`
	position: absolute !important;
	left: 0;
	top: 0;
	border-radius: 0 !important;
`

const StyledDrawer = styled(Drawer)<{ isSmallScreen?: boolean }>`
	> .MuiPaper-elevation {
		padding: 50px;
		max-height: ${(props) => (props.isSmallScreen ? '80vh' : '')};
		border-radius: ${(props) => (props.isSmallScreen ? '8px 8px 0 0' : '')};
	}
`

const StyledButton = styled(Button)`
	border-radius: 50% !important;
	position: absolute !important;
	bottom: 50px;
	right: 10px;
	height: 64px;
	.MuiButton-startIcon {
		margin: auto;
	}
	svg {
		font-size: 28px !important;
	}
`
