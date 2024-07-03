export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jatin192003')
    return response.json()
}