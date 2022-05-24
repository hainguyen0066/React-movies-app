const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '582256be630827fb170ce56aaefd91eb',
    orinalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;