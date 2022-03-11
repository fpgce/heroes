export const makeApiUrl = (path: string): string => {
    const { API_DOMAIN } = process.env
    return `${API_DOMAIN}${path}`
}
