import { Card, Grid, Typography } from '@mui/material'
import moment from 'moment'
import { FC, memo } from 'react'
import styled from 'styled-components'
import { statusColorMapping } from '../../constants/app'
import CompanyType from '../../types/company.type'

interface CardPropTypes {
	data: CompanyType
	setSelectedCompany: (company: CompanyType) => void
}

const Cards: FC<CardPropTypes> = ({ data, setSelectedCompany }) => {
	const handleCardClick = () => {
		setSelectedCompany(data)
	}

	return (
		<Grid gap={10} item xs={12} md={3.9} lg={3.9} xl={2.9}>
			<StyledCard
				style={{ background: statusColorMapping[data.accountStatus], cursor: 'pointer' }}
				variant='outlined'
				onClick={handleCardClick}>
				<StyledCard2>
					<StyledTypography title={data.address} variant='h6'>
						{data.name}
					</StyledTypography>
					<StyledTypography width={80} color='white' variant='caption'>
						{data.accountStatus.toUpperCase()}
					</StyledTypography>
				</StyledCard2>

				<StyledCard2>
					<StyledTypography title={data.address} variant='subtitle1'>
						{data.address}
					</StyledTypography>
					<StyledTypography variant='subtitle2'>
						{moment(data.registrationDate).format('DD-MMM-YYYY')}
					</StyledTypography>
				</StyledCard2>
				<StyledTypography variant='subtitle2' textAlign='right'>
					<em>
						Loan : {data.loanAmount} @ {data.loanInterest}%
					</em>
				</StyledTypography>
			</StyledCard>
		</Grid>
	)
}

export default memo(Cards)

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 8px;
	height: 80px;
`

const StyledCard2 = styled(Card)`
	align-items: center;
	display: flex;
	justify-content: space-between;
	box-shadow: none !important;
	background: inherit !important;
`

const StyledTypography = styled(Typography)`
	overflow: hidden;
	text-wrap: nowrap;
	text-overflow: ellipsis;
`
