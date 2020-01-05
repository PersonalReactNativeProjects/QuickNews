



export async function getGeneralNewsArticle (){
    try {
        let articles = await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=general&pageSize=100&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4')
    
        
        let result = await articles.json()
        articles = null; 
        return result.articles;  
    }
    catch(error) {
        console.log(error);
    }
}

export async function getEntertainmentNewsArticle() {
    try {
        let articles = await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&pageSize=100&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4')

        let result = await articles.json()
        articles = null;
        return result.articles;
    } catch (error) {
        console.log(error);
    }
}


export async function getBusinessNewsArticle() {
    try {
        let articles = await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=business&pageSize=100&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4')

        let result = await articles.json()
        articles = null;
        return result.articles;
    } catch (error) {
        console.log(error);
    }
}

export async function getSportsNewsArticle() {
    try {
        let articles = await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=sports&pageSize=100&apiKey=cf0866b5aaef42e995f9db37bb3f7ef4')

        let result = await articles.json()
        articles = null;
        return result.articles;
    } catch (error) {
        console.log(error);
    }
}