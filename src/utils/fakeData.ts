import { faker } from '@faker-js/faker';
import { loanAmountRange, loanInterestRange, netProfitRange } from '../constants/filter';
import CompanyType from '../types/company.type';


export const getRandomCompany = (payload: any): CompanyType => {
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: faker.location.streetAddress({ useFullAddress: true }),
        registrationDate: faker.date.between(payload.calendarRange),
        employeesCount: faker.number.int({ min: payload.employeesCount[0], max: payload.employeesCount[1] }),
        capitalRaised: faker.number.int({ min: payload.capitalRaised[0], max: payload.capitalRaised[1] }),
        turnover: faker.number.int({ min: payload.turnover[0], max: payload.turnover[1] }),
        netProfit: faker.number.int(netProfitRange),
        contactNumber: faker.phone.number(),
        contactEmail: faker.internet.email(),
        companyWebsite: faker.internet.url(),
        loanAmount: faker.number.int(loanAmountRange),
        loanInterest: faker.number.float({ ...({ min: payload.loanInterest[0] || loanInterestRange.min, max: payload.loanInterest[1] || loanInterestRange.max }), precision: 0.1 }),
        accountStatus: faker.helpers.arrayElement(payload.accountStatus),
    }
}
