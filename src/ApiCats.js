const url = "https://api.thecatapi.com/v1/images/search";
export const getCat =  
    async () => {
          const response = await fetch(url);
          return response.json();
        };