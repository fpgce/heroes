export const makeApiUrl = (path: string): string => {
    const API_DOMAIN = process.env.API_DOMAIN
    return `${API_DOMAIN}${path}`
}
