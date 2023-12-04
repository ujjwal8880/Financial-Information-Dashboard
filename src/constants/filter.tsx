import CompanyType from '../types/company.type'
import { FilterTypes, RangeType } from '../types/filter.type'

export const calendarRange = { from: '2001-01-01T00:00:00.000Z', to: '2023-12-01T00:00:00.000Z' }
export const employeesCountRange: RangeType = { min: 1, max: 10000 }
export const capitalRaisedRange: RangeType = { min: 1000000, max: 1000000000 }
export const turnoverRange: RangeType = { min: 1000000, max: 1000000000 }
export const netProfitRange: RangeType = { min: 100000, max: 100000000 }
export const loanAmountRange: RangeType = { min: 500000, max: 500000000 }
export const loanInterestRange: RangeType = { min: 8.1, max: 14.2 }
export const accountStatusOptions: CompanyType['accountStatus'][] = ['active', 'closed', 'blocked']

export const filters: FilterTypes[] = [
	// {
	// 	name: 'Company Name',
	// 	key: 'name',
	// 	type: 'input',
	// },
	{
		name: 'Registration Date',
		key: 'calendarRange',
		type: 'calendarRange',
		range: calendarRange,
	},
	{
		name: 'Employees Count',
		key: 'employeesCount',
		type: 'range',
		range: employeesCountRange,
	},
	{
		name: 'Capital Raised',
		key: 'capitalRaised',
		type: 'range',
		range: capitalRaisedRange,
	},
	{
		name: 'Turnover',
		key: 'turnover',
		type: 'range',
		range: turnoverRange,
	},
	{
		name: 'Loan Interest',
		key: 'loanInterest',
		type: 'range',
		step: 0.1,
		range: loanInterestRange,
	},
	{
		name: 'Account Status',
		key: 'accountStatus',
		type: 'select',
		options: accountStatusOptions,
	},
]
