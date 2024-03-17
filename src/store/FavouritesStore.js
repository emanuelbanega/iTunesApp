import { create } from 'zustand'
import { deleteFavourite, getAllFavourites, saveFavourite } from '../db/dbClient'

export const useStore = create((set) => {
    return {
        favourites: [],
        getAll: async () => {
            const result = await getAllFavourites()
            set((state) => {
                return {
                    ...state,
                    favourites: result
                }
            })
        },
        add: async (favourite) => {
            await saveFavourite(favourite)
            set((state) => {
                return {
                    ...state,
                    favourites: [
                        ...state.favourites,
                        favourite,
                    ]
                }
            })
        },
        deleteFav: async (value) => {
            await deleteFavourite(value)
            set((state) => {
                const result = state.favourites.filter((elem) => {
                    return elem.trackId != value
                })
                console.log(result)
                return {
                    favourites: result
                }
            })
        },
    }
})