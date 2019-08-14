import moment from 'moment';

export const convertStyleA = value => {
    return moment(value).format('YYYY-MM-DD')
}