export { removemovie } from '../reducers/movieSlice ';
import axios from '../../utils/axios'
import { loadmovie} from "../reducers/movieSlice ";



export const asyncloadmovie =  (id) => async (dispatch) => {

    try {

        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const translations = await axios.get(`/movie/${id}/translations`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`)

        let theultimatedelatils = {

            detail: detail.data,
            externalid : externalid.data,
            recommendations: recommendations.data,
            similar : similar.data,
            translations : translations.data.translations.map((t)=>t.english_name), 
            videos : videos.data.results.find((m) => m.type === "Trailer" && m.site === "YouTube") || null,
            watchprovider : watchprovider.data.results.IN 

            
        };
       
         dispatch(loadmovie(theultimatedelatils));
        

    } catch (error) {
        console.log("error", error)
    }
}