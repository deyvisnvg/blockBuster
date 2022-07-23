const movieListAsMap = newList => {
    return newList.reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, new Map())
}

const getAllIds = list => {
    return list.map(movie => movie.id)
}

const getMostValue = newList => {
    return newList.reduce((list, movie) => {
        if (movie.vote_average > 7) {
            list.push(movie.id);
        }
        return list
    }, [])
}

const getLeastValued = newList => {
    return newList.reduce((list, movie) => {
        if (movie.vote_average <= 7) {
            list.push(movie.id);
        }
        return list
    }, [])
}

// console.log(popular)
// console.log(notPopular)
// console.log(all)
// console.log(movieListAsMap)
// console.log(movieList.get(724989))

export {
    movieListAsMap,
    getAllIds,
    getMostValue,
    getLeastValued
}