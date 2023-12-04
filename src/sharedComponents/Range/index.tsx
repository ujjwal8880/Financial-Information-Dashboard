import { Slider, Typography } from '@mui/material'
import { FC, memo, useState } from 'react'
import { FilterTypes } from '../../types/filter.type'

interface RangeCompType {
	info: FilterTypes
	range: any
	handleOnChange: (key: string, value: number[]) => void
}

const Range: FC<RangeCompType> = ({ info, range, handleOnChange }) => {
	const { name, key, step = 1 } = info

	const [value, setValue] = useState<number[]>([range.min, range.max])

	const handleChange = (event: Event, newValue: number | number[]) => {
		let value = newValue as number[]
		if (value[1] - value[0] <= 1) {
			return
		}
		setValue(value as number[])
		handleOnChange(key, value as number[])
	}

	return (
		<div>
			<Typography noWrap variant='subtitle1' textAlign='left'>
				{name}
			</Typography>
			<Slider
				style={{
					marginTop: 8,
				}}
				step={step}
				min={range.min}
				max={range.max}
				getAriaLabel={() => 'Temperature range'}
				value={value}
				onChange={handleChange}
				valueLabelDisplay='auto'
				disableSwap
			/>
		</div>
	)
}

export default memo(Range)
