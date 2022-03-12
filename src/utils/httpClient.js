const api = 'https://api.themoviedb.org/3';

export function request(path){
    return(
        fetch(api + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWE2OTU4MjZlMGU4NmQzNDY2ZGE4ZDAxZjFmZWQwYiIsInN1YiI6IjYyMmQxZDgzMjQ1ZGJlMDA3ZDNlYTVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73E0REBeD3Q0ePA_vNksdj_EkhEcJN-OwGlesAerZ5w",
                "Content-Type": "application/json;charset=utf-8",                 
            },
        })
        .then((result) => result.json())
    )
}