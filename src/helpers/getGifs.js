
const apiKey = 'boUaRjR1I1e7UGXBBQgymluJ4RHTqwZe';
const limit = 10;

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI( category ) }&limit=${limit}`;
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
   return gifs;
}