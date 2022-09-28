import axios from "axios"
//=======================================
export const updateSetting = (data) => {
    let form = new FormData();
    let { organizationName,
        organizationLogo,
        organizationGST,
        organizationCIN,
        organizationAddress,
        organizationSignature,
        appBackgroundColor,
        appPrimaryColor,
        appSecondaryColor,
        appTextColor
    } = data

    form.append("organizationName", organizationName);
    if (organizationLogo instanceof File) {
        form.append("organizationLogo", organizationLogo)
    }
    form.append("organizationGST", organizationGST);
    form.append("organizationCIN", organizationCIN);
    form.append("organizationAddress", organizationAddress);
    if (organizationSignature instanceof File) {
        form.append("organizationSignature", organizationSignature);
    }
    form.append("appBackgroundColor", appBackgroundColor);
    form.append("appPrimaryColor", appPrimaryColor);
    form.append("appSecondaryColor", appSecondaryColor);
    form.append("appTextColor", appTextColor)

    return axios.post(`/setting`, form)
}

export const getSettings = () => {
    return axios.post("/setting/list")
}

export const getSettingsById = () => {
    return axios.get(`/setting`)
}

