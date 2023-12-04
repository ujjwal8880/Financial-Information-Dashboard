import { Typography } from '@mui/material'
import { FC, memo } from 'react'
import { DateRangePicker } from 'rsuite'
import { FilterTypes } from '../../types/filter.type'

interface CalendarRangeType {
	info: FilterTypes
	handleOnChange: (key: string, value: { from: Date; to: Date }) => void
}

const CalendarRange: FC<CalendarRangeType> = ({ info, handleOnChange }) => {
	const { name, key } = info

	const onChange = (value: any) => {
		handleOnChange(key, { from: value[0].toISOString(), to: value[1].toISOString() })
	}

	return (
		<div>
			<Typography noWrap variant='subtitle1' textAlign='left'>
				{name}
			</Typography>
			<DateRangePicker
				onChange={onChange}
				placement='topStart'
				size='xs'
				limitStartYear={2001}
				character=' to '
				format='dd-MM-yyyy'
				appearance='default'
				placeholder='Select Date Range'
				style={{ width: 230 }}
			/>
		</div>
	)
}

export default memo(CalendarRange)
