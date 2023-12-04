import moment from 'moment'

export const getParsedCompany = (data: any): any => {
	const obj: any = {}
	Object.keys(data).forEach((key: string) => {
		if (['capitalRaised', 'turnover', 'netProfit', 'loanAmount'].includes(key)) {
			obj[key] = `$${String(data[key]).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
		} else if (key === 'registrationDate') {
			moment(data[key]).format('DD-mmm-YYYY')
		} else if (key === 'loanInterest') {
			obj[key] = `${data[key]}%`
		} else if (key === 'accountStatus') {
			obj[key] = data[key].toUpperCase()
		} else {
			obj[key] = data[key]
		}
	})
	return obj
}
