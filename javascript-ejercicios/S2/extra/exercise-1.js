for(const movie of movies){
    for(const categorie of movie.categories){
        if(!movies.categories.includes(categorie)){
            arrayCategories.push(categorie)
        }
    }
    
}

let arrayCategories = [];