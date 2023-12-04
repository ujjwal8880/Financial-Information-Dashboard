import { OutlinedInput, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { FilterTypes } from '../../types/filter.type'

interface InputType {
	info: FilterTypes
	handleOnChange: (key: string, value: string) => void
}
const Input: FC<InputType> = (props) => {
	const { handleOnChange, info } = props
	const { name, key } = info

	const onChange = (event: React.ChangeEvent) => {
		handleOnChange(key, (event.target as HTMLInputElement).value)
	}

	return (
		<div>
			<Typography noWrap variant='subtitle1' textAlign='left'>
				{name}
			</Typography>
			<OutlinedInput placeholder='Type Here...' size='small' onChange={onChange} />
		</div>
	)
}

export default memo(Input)
