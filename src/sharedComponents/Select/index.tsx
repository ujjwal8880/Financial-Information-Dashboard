import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { FC, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { accountStatusOptions } from '../../constants/filter'
import { StateType } from '../../slices/app.slice'
import { FilterTypes } from '../../types/filter.type'

interface SelectCompType {
	info: FilterTypes
	handleOnChange: (key: string, value: string[]) => void
}
const SelectComp: FC<SelectCompType> = ({ info, handleOnChange }) => {
	const filter = useSelector((state: { app: StateType }) => state.app.filter)

	const [selectedValue, setSelectedValue] = useState<string>(
		filter.accountStatus.length === 1 ? filter.accountStatus[0] : 'all'
	)
	const { name, options, key } = info

	const onChange = (event: SelectChangeEvent) => {
		let value = [event.target.value]
		if (value[0] === 'all') {
			value = accountStatusOptions
		}
		handleOnChange(key, value)
		setSelectedValue(event.target.value)
	}

	return (
		<div>
			<Typography noWrap variant='subtitle1' textAlign='left'>
				{name}
			</Typography>
			<Select onChange={onChange} value={selectedValue} fullWidth size='small'>
				<MenuItem value='all'>All</MenuItem>
				{options?.map((option) => (
					<MenuItem value={option} key={option}>
						{option.toUpperCase()}
					</MenuItem>
				))}
			</Select>
		</div>
	)
}

export default memo(SelectComp)
