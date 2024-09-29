import axios from "axios";

import type {Ships} from "@/interfaces/Ships";

/**
 * Get list of starships with page navigation
 */
export async function fetchShipsList(page: number, search: string) {
    let fetchedList:Ships[] = []
    let fetchedCount:number = 0

    try {
        const res = await axios.get('https://swapi.dev/api/starships/', {
            params: {
                page: page,
                search: search
            }
        })
        if (res.status === 200) {
            fetchedList = res.data.results
            fetchedCount = res.data.count
        }
    } catch (e) {
        const error = e as Error
        console.error(error.message)
    }


    return {
        fetchedList,
        fetchedCount
    }
}