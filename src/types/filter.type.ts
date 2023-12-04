export interface CalendarRangeType {
    from: string
    to: string
}

export interface RangeType {
    min: number
    max: number
}

export interface FilterTypes {
    name: string
    key: string
    type: 'input' | 'calendarRange' | 'range' | 'select'
    options?: string[]
    range?: CalendarRangeType | RangeType
    step?: number
}