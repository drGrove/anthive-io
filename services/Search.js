import axios from "axios";

const esAxios = axios.create({
  baseURL: 'https://search.anthive.io/',
  timeout: 3000
});

class Search  {

  wrap(query){
    return { params: {
        source: JSON.stringify(query),
        source_content_type: 'application/json'
      }
    };
  }

  async searchGames(sort, page, size, filter) {
    const handle = "/games-prod/_search";
    const query = {
      size: size,
      sort: sort,
      from: size*page,
      query: { bool: { filter: filter }}
    };
console.log("Size",size);
    const resp = await esAxios.get(handle, this.wrap(query));
    console.log("resp",resp);

    if(resp.status == 200){
      return resp.data.hits;
    }
    return null;
  }
}

export default new Search();
