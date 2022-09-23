//=========  API_Endpoint ======================================================
export const ADMIN_API = "http://api-dev.bksmygold.com/admin";

//==========  Content =====================================================
export const infoCard = {
    taxes: {
        governmentTax: {
            title: "Government Taxes",
            desc: "create, update, delete taxes imposed by government like Central Excise etc.,",
            url: '/taxSettings/customDuty/view-customDuty'
        },
        gst: {
            title:"HSN & GST",
            desc:"create, update, delete HSN and GST related Information",
            url: '/taxSettings/customDuty/view-customDuty'
        },
        tds: {
            title:"TDS & TCS",
            desc:"create, update, delete TDS and TCS related Information",
            url: '/taxSettings/customDuty/view-customDuty'
    }
}
}
//===============================================================
