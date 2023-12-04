export default interface CompanyType {
    id: string
    name: string
    address: string
    registrationDate: Date
    employeesCount: number
    capitalRaised: number
    turnover: number
    netProfit: number
    contactNumber: string
    contactEmail: string
    companyWebsite: string
    loanAmount: number
    loanInterest: number
    accountStatus: 'active' | 'closed' | 'blocked'
}