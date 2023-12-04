import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import {
	Box,
	Drawer,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { FC, memo, useMemo } from 'react'
import styled from 'styled-components'
import { statusColorMapping } from '../../constants/app'
import CompanyType from '../../types/company.type'
import { getParsedCompany } from '../../utils/app'

interface CompanyDrawersPropTypes {
	selectedCompany: CompanyType | null
	closeModal: () => void
}

const CompanyDrawers: FC<CompanyDrawersPropTypes> = ({ selectedCompany, closeModal }) => {
	const isSmallScreen = useMediaQuery('(max-width:900px)')

	const parsedSelectedCompany = useMemo(() => {
		if (selectedCompany) {
			return getParsedCompany(selectedCompany)
		} else {
			return null
		}
	}, [selectedCompany])

	return (
		<StyledDrawer
			isSmallScreen={isSmallScreen}
			anchor={isSmallScreen ? 'bottom' : 'right'}
			open={!!selectedCompany}
			onClose={closeModal}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<StyledIconButton onClick={closeModal}>
				<CloseTwoToneIcon />
			</StyledIconButton>
			<Box>
				<Typography marginBottom={3} id='modal-modal-title' variant='h6' component='h2'>
					{selectedCompany?.name}
				</Typography>
				{parsedSelectedCompany && selectedCompany && (
					<TableContainer id='modal-modal-description' component={Paper}>
						<Table size='small' aria-label='a dense table'>
							<TableBody>
								{(Object.keys(parsedSelectedCompany) as Array<keyof typeof selectedCompany>).map(
									(key: string) => (
										<TableRow
											key={key}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											style={{
												background: key === 'accountStatus' ? statusColorMapping['active'] : '',
												color: key === 'accountStatus' ? '#ffffff' : '',
											}}>
											<TableCell
												style={{
													textTransform: 'capitalize',
												}}
												width='50%'
												component='th'
												scope='key'>
												{String(key)
													.replace(/([A-Z])/g, ' $1')
													.trim()}
											</TableCell>
											<TableCell
												style={{
													color: 'inherit',
												}}
												align='left'
												title={String(parsedSelectedCompany[key])}>
												{String(parsedSelectedCompany[key])}
											</TableCell>
										</TableRow>
									)
								)}
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</Box>
		</StyledDrawer>
	)
}
export default memo(CompanyDrawers)

const StyledDrawer = styled(Drawer)<{ isSmallScreen?: boolean }>`
	> .MuiPaper-elevation {
		padding: 50px;
		width: ${(props) => (props.isSmallScreen ? '' : '40vw')};
		max-height: ${(props) => (props.isSmallScreen ? '70vh' : '')};
		border-radius: ${(props) => (props.isSmallScreen ? '8px 8px 0 0' : '')};
	}
`

const StyledIconButton = styled(IconButton)`
	position: absolute !important;
	left: 0;
	top: 0;
	border-radius: 0 !important;
`
