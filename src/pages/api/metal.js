export default function getMetal(req, res) {
    res.status(200).json([{ metal: "Gold", icon: "icon_hai" }, { metal: "Silver", icon: "icon_hai" }]);
}
