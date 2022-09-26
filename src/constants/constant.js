//:::::::::  API_Endpoint ::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const ADMIN_API = "http://api-dev.bksmygold.com/admin";

//::::::::::  Content :::::::::::::::::::::::::::::::::::::::::::::::::::::
export const infoCard = {
    //------------------- USER_MANAGEMENT --------------------------------
    userManagement: {
        rolesPerma: {
            title: "Roles & Permissions",
            desc: "create, update, delete user roles and manage thier permission",
            url: '/userManagement/role/view-rolesPermission'
        },
        orgaUser: {
            title: "Organisation Users",
            desc: "create, update, delete user for MyGold Organiation",
            url: "/userManagement/user/view-organisationUser"
        },
        referUser: {
            title: "Referrals User",
            desc: "create, update, delete sales referrals",
            url: "/userManagement/referralUsers/view-referralUsers"
        },
        gbpUser: {
            title: "Sales Referrals",
            desc: "create, update, delete sales referrals",
        },
        saleRefer: {
            title: "Sales Referrals",
            desc: "create, update, delete sales referrals",
        },
        merchant: {
            title: "Merchant",
            desc: "create, update, delete merchants, commissions and manage their approvals",
            url: "/userManagement/merchant/view-merchant"
        },
        retail: {
            title: "Retail",
            desc: "create, update, delete retail Merchant Accounts and manage them",
        },
        supplier: {
            title: "Supplier",
            desc: "create, update, delete VIP/influencer Referral",
        }
    },
    //------------------- TAXES --------------------------------
    taxes: {
        governmentTax: {
            title: "Government Taxes",
            desc: "create, update, delete GBP Users",
            url: '/taxSettings/customDuty/view-customDuty'
        },
        gst: {
            title: "HSN & GST",
            desc: "create, update, delete HSN and GST related Information",
            url: '/taxSettings/customDuty/view-customDuty'
        },
        tds: {
            title: "TDS & TCS",
            desc: "create, update, delete TDS and TCS related Information",
            url: '/taxSettings/customDuty/view-customDuty'
        },
        buySave: {
            title: "Buy & Save",
            desc: "Create , Update, delete bonus and calculation percentages applicable on buy and save plans"
        },
        interest: {
            title: "Interest Rates",
            desc: "create, update, delete HSN and GST related Information",
            url: '/taxSettings/loanInterest/view-loanInterest'
            
        },
        mandi: {
            title: "Treasury Gold Mandi ",
            desc: "Update Mandi Government Treasury Gold for the gold declared"
        },
        referEarn: {
            title: "Refer and Earn",
            desc: "Create , Update, delete referral and joining bonus",
            url: "/taxSettings/referralType/view-referralType"

        },
        buySell: {
            title: "Bid - Buy and Sell",
            desc: "Create , Update, delete commissions and calculation percentages applicable on Bids"
        },
        makingCharge: {
            title: "Making Charges",
            desc: "create, update, delete making charges",
            url: "/taxSettings/makingCharge/view-makingCharge"
        },
        eComm: {
            title: "E-commerce",
            desc: "Create , Update, delete commissions and calculation percentages applicable on Bids"
        },
        retailComm: {
            title: "Retailer Commissions",
            desc: "Create , Update, delete commission percentages "
        },
        subBid: {
            title: "Subscriptions(Bids)",
            desc: "Create , Update, delete subscription plans for Bid-Buy and Sell Users"
        },
        subAds: {
            title: "Subscriptions(Ads)",
            desc: "Create , Update, delete subscription plans for Ads for Retailers"
        },
        gbpLevel: {
            title: "GBP Levels",
            desc: "Create , Update, delete GBP levels, commissions etc settings"
        },
    },
    //------------------- E_COMMERCE --------------------------------

    eComm: {
        metal: {
            url: "/eCommerce/metal/view-metal",
            title: "Metal",
            desc: "create, update, delete Metals"
        },
        metalGroup: {
            title: "Metal Groups",
            desc: "create, update, delete Metal Groups relate them to Metal",
            url: "/eCommerce/metalGroup/view-metalGroup",
        },
        ornament: {
            title: "Ornaments",
            desc: "create, update, delete Ornaments",
            url: "/eCommerce/ornament/view-ornament"
        },
        unit: {
            title: "Units",
            desc: "create, update, delete Units",
            url: "/eCommerce/unit/view-unit"
        },
        cut: {
            title: "Cut",
            desc: "create, update, delete Cut",
            url: "/eCommerce/cut/view-cut"
        },
        color: {
            title: "Colors",
            desc: "create, update, delete Colors",
            url: "/eCommerce/color/view-color",
        },
        shape: {
            title: "Shape",
            desc: "create, update, delete Shape",
            url: "/eCommerce/shape/view-shape",
        },
        clarity: {
            title: "Clarity",
            desc: "create, update, delete Clarity",
            url: "/eCommerce/clarity/view-clarity",
        },
        style: {
            title: "Style",
            desc: "create, update, delete Style",
            url: "/eCommerce/style/view-style"
        },
        collection: {
            title: "Collections",
            desc: "create, update, delete Collections",
            url: "/eCommerce/collection/view-collection"
        },
        category: {
            title: "Categories",
            desc: "create, update, delete Categories",
            url: "/eCommerce/category/view-category"
        },
        variety: {
            title: "Varieties",
            desc: "create, update, delete Varieties",
            url: "/eCommerce/variety/view-variety"
        },
        item: {
            title: "Items",
            desc: "create, update, delete Items",
            url: "/eCommerce/item/view-item"
        },
        productType: {
            title: "Product Types",
            desc: "create, update, delete Product Types",
            url: "/eCommerce/productType/view-productType"
        },
        faq: {
            title: "FAQ",
            desc: "create, update, delete FAQs",
            url: "/eCommerce/faq/view-faq"
        },
        policy: {
            title: "Policy",
            desc: "create, update, delete Policies",
            url: "/eCommerce/policy/view-policy"
        },
        retReason: {
            title: "Return Reason",
            desc: "create, update, delete return reason",
            url: "/eCommerce/returnReason/view-returnReason"
        },
        rejReturn: {
            title: "Reject Reason",
            desc: "create, update, delete return reason",
            url: "/eCommerce/rejectReason/view-rejectReason"
        },
        supplier: {
            title: "Supplier",
            desc: "create, update, delete Supplier",
            url: "/eCommerce/supplier/view-supplier"
        },
      
        certi: {
            title: "Certificates",
            desc: "create, update, delete Certificates",
            url: "/eCommerce/certificate/view-certificate"
        },
        label: {
            title: "Label",
            desc: "create, update, delete Certificates",
            url: "/eCommerce/label/view-label"
        },
        plan: {
            title: "Standard Plans",
            desc: "create, update, delete Plans",
            url: "/eCommerce/plan/view-plan"
        },
        cycle: {
            title: "Cycle Periods",
            desc: "create, update, delete Plans",
            url: "/eCommerce/cyclePeriod/view-cyclePeriod",
        },

    },
    //------------------- PROMOTIONAL_SETTINGS--------------------------------

    promo: {
        offer: {
            title: "Offer Sliders",
            desc: "create, update, delete Offer Sliders",
            url: "/promotionalSetting/offer/view-offer"
        },
        appSlider: {
            title: "App slider",
            desc: "create, update, delete Offer Sliders",
            url: "/promotionalSetting/slider/view-slider"
        },
        video: {
            title: "How-to Videos",
            desc: "create, update, delete how To Videos",
            url: "how-to-video/view-how-to-video"
        },
        testi: {
            title: "Testimonials",
            desc: "create, update, delete Testimonials Videos",

        },
        governmentTax: {
            title: "Ad Position",
            desc: "create, update, delete Ad Position",

        },
        offerPopup: {
            title: "Offer Popups",
            desc: "create, update, delete offer popups with timeline conditions etc.",
        },
        referratlType: {
            title: "Referral Type",
            desc: "create, update, delete referral type",
            url: "/promotionalSetting/referralType/view-referralType"
        },
        merchNatBanner: {
            title: "Merchant Banners",

            desc: "Approve, disapprove Merchant Banners",
        },

    },
}
//-----------------------------------------------------------------
export const reportList = {
    smartReport: [
        {
            title: "Buy and Save Module"
        },
        {
            title: "Instant Gold Module"
        },
        {
            title: "Sell and Reserve Module"
        },
        {
            title: "E-commerce Module"
        },
        {
            title: "Sell old gold Module"
        },
        {
            title: "Upload gold Module"
        },
        {
            title: "Referral Module"
        },
        {
            title: "Bid buy and sell Module"
        },
        {
            title: "Loan Module"
        }
    ],
    metal: [
        {
            head: "Customer",
            title1: "Custody Given",
            title2: "Custody Released"
        },
        {
            head: "VIP/Sale Referral",
            title1: "Custody Given",
            title2: "Custody Released"
        },
        {
            head: "Merchant",
            title1: "Custody Given",
            title2: "Custody Released"
        },
        {
            head: "Retailer",
            title1: "Custody Given",
            title2: "Custody Released"
        },

    ],
    financial: [
        {
            head: "Customer",
            title1: "Customer Sale Invoices",
            title2: "Customer Purchase Invoices",
            title3: "Customer Settlements"
        },
        {
            head: "VIP / Sales Referral",
            title1: "Referral  Sale Invoices",
            title2: "Referral  Purchase Invoices",
            title3: "Referral  Settlements"
        },
        {
            head: "Merchant",
            title1: "Merchant Sale Invoices",
            title2: "Merchant Purchase Invoices",
            title3: "Merchant Settlements"
        },
        {
            head: "Retailer",
            title1: "Retailer Sale Invoices",
            title2: "Retailer Purchase Invoices",
            title3: "Retailer Settlements"
        },
        {
            head: "Bank",
            title1: "Bank Receipts",
            title2: "Bank Payment",

        },


    ]
}
//---------------------------------------------------

export const invoice = {
    declaration: "We declare that the above quantity of goods are kept by the seller in a safe vault on behalf of the buyer. It can be delivered in minted product as per the Terms & Conditions.",
    disclaimer: "   The gold grams you own are calculated by dividing the amount paid net of GST by the gold rate and rounded down to 4 decimal places. For example, .00054 grams will be rounded down to .0005 grams."
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
