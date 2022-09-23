import axios from "axios"
//=======================================
export const updateSetting = ({data,id}) => {
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
    if (organizationLogo instanceof File) {
        form.append("organizationSignature", organizationSignature);
    }
    form.append("appBackgroundColor", appBackgroundColor);
    form.append("appPrimaryColor", appPrimaryColor);
    form.append("appSecondaryColor", appSecondaryColor);
    form.append("appTextColor", appTextColor)

    return axios.patch(`/setting/${id}`, data)
}

export const getSettings = () => {
    return axios.post("/setting/list")
}

export const getSettingsById = (id) => {
    return axios.get(`/setting/${id}`)
}

