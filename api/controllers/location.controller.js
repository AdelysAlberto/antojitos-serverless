import locationServices from "../services/location.services";


class LocationController {
    async getLocation(req, res) {
        const { ip } = req.params;
        const user = await locationServices.getLocation(ip);
        if (user) {
            res.send(user);
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    }
}

export default new LocationController();
