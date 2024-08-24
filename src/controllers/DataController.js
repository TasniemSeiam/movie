import axios from "axios";
import DataModel from "../model/DataModel";

export default class DataController{
    static async fetchData() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0548366c45084640330e3330440787b3')
            return response.data.results.map(data=> new DataModel(data.id,data.name,data.overview,data.poster_path,data.vote_average))
        } catch (e) { 
            console.error("An error occurred while fetching data: ", e);
            throw e;
        }
    }
}