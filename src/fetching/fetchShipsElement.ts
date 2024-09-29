import axios from "axios";
import type {RouteParamValue} from "vue-router";
import type {Ships} from "@/interfaces/Ships";

/**
 * Get one element by ID
 */
export async function fetchShipsElement(id: string | RouteParamValue[]) {
    let fetchedElement:Ships = {} as Ships;

    try {
        const res = await axios.get(`https://swapi.dev/api/starships/${id}/`)
        if (res.status === 200) {
            fetchedElement = res.data
        }
    } catch (e) {
        const error = e as Error
        console.error(error.message)
    }

    return {
        fetchedElement
    }
}