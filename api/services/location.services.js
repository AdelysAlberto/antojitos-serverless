const axios = require('axios');

class LocationServices {
    async getLocation(ip = null) {
        const { data } = await axios.get("http://ip-api.com/json/");
        if (!data) {
            throw new Error("Location not Found");
        }
        const { country, countryCode, regionName, city, lat, lon, query } = data;
        return {
            status: 200,
            payload: { country, countryCode, regionName, city, lat, lon, query }
        };
    }
}

export default new LocationServices();
