import { createSlice } from "@reduxjs/toolkit";
import { dataMaxLength } from "../constants/app";
import { accountStatusOptions, calendarRange, capitalRaisedRange, employeesCountRange, loanInterestRange, turnoverRange } from "../constants/filter";
import CompanyType from "../types/company.type";
import { RangeType } from "../types/filter.type";
import { getRandomCompany } from "../utils/fakeData";

export interface StateType {
    masterData: {
        [page: number]: CompanyType[]
    },
    data: CompanyType[]
    page: number
    limit: number
    filter: {
        calendarRange: { from: string, to: string }
        accountStatus: CompanyType['accountStatus'][],
        employeesCount: RangeType,
        capitalRaised: RangeType,
        turnover: RangeType,
        loanInterest: RangeType,
    }
}

// Limit here is just for dummy implementation
export const fetchCompanyData = (page = 1, limit = 12, payload = {}): CompanyType[] => {
    const data = [];
    const count = dataMaxLength / page < limit ? dataMaxLength % limit : limit;
    for (let i = 0; i < count; i++) {
        data.push(getRandomCompany(payload))
    }
    return data
};


const initialState: StateType = {
    data: [],
    page: 1,
    limit: 12,
    masterData: {},
    filter: {
        calendarRange: calendarRange,
        employeesCount: employeesCountRange,
        capitalRaised: capitalRaisedRange,
        turnover: turnoverRange,
        loanInterest: loanInterestRange,
        accountStatus: accountStatusOptions
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        fetchData(state, action) {
            const { page } = action.payload;
            if (state.masterData[page]) {
                state.data = state.masterData[page]
            } else {
                state.data = fetchCompanyData(page, state.limit, state.filter);
                state.masterData = { ...state.masterData, [page]: state.data };
            }
            return state
        },
        applyFilter(state, action) {
            const { payload } = action;
            state.page = 1;
            state.masterData = {};
            state.data = [];
            state.filter = {
                ...state.filter,
                [payload.key]: payload.value
            }
            state.data = fetchCompanyData(state.page, state.limit, state.filter);
            state.masterData = { ...state.masterData, [state.page]: state.data };
        }
    }
})

export const { actions, reducer } = appSlice;
export const { fetchData, applyFilter } = actions;
export default reducer;