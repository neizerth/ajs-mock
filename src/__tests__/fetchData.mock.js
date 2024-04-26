export const createFetchDataMock = level => () => {
    if (level) {
        return {
            status: 'ok',
            level
        }
    }
    return {
        status: 'fail'
    }
}