import AsyncStorage from '@react-native-async-storage/async-storage';

export async function exist(id) {
    try {
        let favourites = []
        const data = await AsyncStorage.getItem('db')
        if (data) {
            const favouritesDB = JSON.parse(data)
            favourites = favouritesDB
        }
        const favourite = favourites.find((elem) => { return elem.trackId == id })
        if (favourite) {
            return true
        } else {
            return false
        }
    } catch (e) {
        // saving error
    }
}

export async function getAllFavourites() {
    try {
        let favourites = []
        const data = await AsyncStorage.getItem('db')
        if (data) {
            const favouritesDB = JSON.parse(data)
            favourites = favouritesDB
        }
        return favourites
    } catch (e) {
        // saving error
    }
}

export const saveFavourite = async (value) => {
    try {
        let favourites = []
        const data = await AsyncStorage.getItem('db')
        if (data) {
            const favouritesDB = JSON.parse(data)
            favourites = favouritesDB
        }
        favourites.push(value)
        await AsyncStorage.setItem('db', JSON.stringify(favourites));
    } catch (e) {
        // saving error
    }
};

export const deleteFavourite = async (value) => {
    try {
        const favourites = await getAllFavourites()
        const favouritesFiltered = favourites.filter((elem) => { return elem.trackId != value })
        await AsyncStorage.setItem('db', JSON.stringify(favouritesFiltered));
    } catch (e) {
        // saving error
    }
};