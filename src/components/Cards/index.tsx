import { Grid } from '@mui/material'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../slices/app.slice'
import CompanyType from '../../types/company.type'
import Card from '../Card'
import CompanyDrawer from '../CompanyDrawer'

const Cards = () => {
	const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(null)
	const data = useSelector((state: { app: StateType }) => state.app.data)

	const closeModal = () => {
		setSelectedCompany(null)
	}

	return (
		<>
			<Grid wrap='wrap' flex={1} container gap={1} overflow='scroll'>
				{data.map((ele) => (
					<Card data={ele} key={ele.id} setSelectedCompany={setSelectedCompany} />
				))}
			</Grid>
			<CompanyDrawer selectedCompany={selectedCompany} closeModal={closeModal} />
		</>
	)
}

export default memo(Cards)
