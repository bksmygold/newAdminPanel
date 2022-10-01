//:::::::::  API_Endpoint ::::::::::::::::::::::::::::::::::::::::::::::::::::::
// export const ADMIN_API = "http://api-dev.bksmygold.com/admin";
export const ADMIN_API = "http://192.168.10.110:5001/admin";



//::::::::::  Content :::::::::::::::::::::::::::::::::::::::::::::::::::::
export const infoCard = {
    //------------------- USER_MANAGEMENT --------------------------------
    userManagement: {
        rolesPerma: {
            title: "Roles & Permissions",
            desc: "create, update, delete user roles and manage thier permission",
            url: '/user-management/role/view-roles-permission'
        },
        department: {
            title: "Departments",
            desc: "create, update, delete Departments",
            url: '/user-management/department/view-department'
        },
        orgaUser: {
            title: "Organisation Users",
            desc: "create, update, delete user for MyGold Organiation",
            url: "/user-management/user/view-organisation-user"
        },
        referUser: {
            title: "VIP Referrals",
            desc: "create, update, delete VIP/influencer Referral   ",
            url: "/user-management/vip-referral/view-vip-referral"
        },
        gbpUser: {
            title: "GBP User",
            desc: "create, update, delete GBP Users",
        },
        saleRefer: {
            title: "Sales Referrals",
            desc: "create, update, delete sales referrals",
            url: "/user-management/sale-referral/view-sale-referral"

        },
        merchant: {
            title: "Merchant",
            desc: "create, update, delete merchants, commissions and manage their approvals",
            url: "/user-management/merchant/view-merchant"
        },
        retail: {
            title: "Retail",
            desc: "create, update, delete retail Merchant Accounts and manage them",
            url: "/user-management/retail/view-retail"

        },
        supplier: {
            title: "Supplier",
            desc: "create, update, delete VIP/influencer Referral",
            url: "/user-management/supplier/view-supplier"

        }
    },
    //------------------- TAXES --------------------------------
    taxes: {
        governmentTax: {
            title: "Government Taxes",
            desc: "create, update, delete GBP Users",
            url: '/tax-settings/custom-duty/view-custom-duty'
        },
        gst: {
            title: "HSN & GST",
            desc: "create, update, delete HSN and GST related Information",
            url: '/tax-settings/gst/view-gst'
        },
        tds: {
            title: "TDS & TCS",
            desc: "create, update, delete TDS and TCS related Information",
            url: '/tax-settings/tds/view-tds'
        },
        buySave: {
            title: "Buy & Save",
            desc: "Create , Update, delete bonus and calculation percentages applicable on buy and save plans",
            url: '/tax-settings/buy-save/view-buy-save'

        },
        interest: {
            title: "Interest Rates",
            desc: "create, update, delete HSN and GST related Information",
            url: '/tax-settings/loan-interest/view-loan-interest'

        },
        mandi: {
            title: "Treasury Gold Mandi ",
            desc: "Update Mandi Government Treasury Gold for the gold declared",
            url: '/tax-settings/mandi/view-mandi'

        },
        referalType: {
            title: "Referal Type",
            desc: "Create , Update, delete types of Referral",
            url: "/tax-settings/referralType/view-referralType"

        },
        referEarn: {
            title: "Refer and Earn",
            desc: "Create , Update, delete referral and joining bonus",
            // url: "/tax-settings/referralType/view-referralType"

        },
        buySell: {
            title: "Bid - Buy and Sell",
            desc: "Create , Update, delete commissions and calculation percentages applicable on Bids",
            url: "/tax-settings/bid-buy-sell/view-bid-buy-sell"

        },
        makingCharge: {
            title: "Making Charges",
            desc: "create, update, delete making charges",
            url: "/tax-settings/making-charge/view-making-charge"
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
            url: "/e-commerce/metal/view-metal",
            title: "Metal",
            desc: "create, update, delete Metals"
        },
        metalGroup: {
            title: "Metal Groups",
            desc: "create, update, delete Metal Groups relate them to Metal",
            url: "/e-commerce/metal-group/view-metal-group",
        },
        ornament: {
            title: "Ornaments",
            desc: "create, update, delete Ornaments",
            url: "/e-commerce/ornament/view-ornament"
        },
        unit: {
            title: "Units",
            desc: "create, update, delete Units",
            url: "/e-commerce/unit/view-unit"
        },
        cut: {
            title: "Cut",
            desc: "create, update, delete Cut",
            url: "/e-commerce/cut/view-cut"
        },
        color: {
            title: "Colors",
            desc: "create, update, delete Colors",
            url: "/e-commerce/color/view-color",
        },
        shape: {
            title: "Shape",
            desc: "create, update, delete Shape",
            url: "/e-commerce/shape/view-shape",
        },
        clarity: {
            title: "Clarity",
            desc: "create, update, delete Clarity",
            url: "/e-commerce/clarity/view-clarity",
        },
        style: {
            title: "Style",
            desc: "create, update, delete Style",
            url: "/e-commerce/style/view-style"
        },
        collection: {
            title: "Collections",
            desc: "create, update, delete Collections",
            url: "/e-commerce/collection/view-collection"
        },
        category: {
            title: "Categories",
            desc: "create, update, delete Categories",
            url: "/e-commerce/category/view-category"
        },
        variety: {
            title: "Varieties",
            desc: "create, update, delete Varieties",
            url: "/e-commerce/variety/view-variety"
        },
        item: {
            title: "Items",
            desc: "create, update, delete Items",
            url: "/e-commerce/item/view-item"
        },
        productType: {
            title: "Product Types",
            desc: "create, update, delete Product Types",
            url: "/e-commerce/product-type/view-product-type"
        },
        faq: {
            title: "FAQ",
            desc: "create, update, delete FAQs",
            url: "/e-commerce/faq/view-faq"
        },
        policy: {
            title: "Policy",
            desc: "create, update, delete Policies",
            url: "/e-commerce/policy/view-policy"
        },
        retReason: {
            title: "Return Reason",
            desc: "create, update, delete return reason",
            url: "/e-commerce/return-reason/view-return-reason"
        },
        rejReturn: {
            title: "Reject Reason",
            desc: "create, update, delete return reason",
            url: "/e-commerce/reject-reason/view-reject-reason"
        },
      

        certi: {
            title: "Certificates",
            desc: "create, update, delete Certificates",
            url: "/e-commerce/certificate/view-certificate"
        },
        label: {
            title: "Label",
            desc: "create, update, delete Certificates",
            url: "/e-commerce/label/view-label"
        },
        plan: {
            title: "Standard Plans",
            desc: "create, update, delete Plans",
            url: "/e-commerce/plan/view-plan"
        },
        cycle: {
            title: "Cycle Periods",
            desc: "create, update, delete Plans",
            url: "/e-commerce/cycle-period/view-cycle-period",
        },

    },
    //------------------- PROMOTIONAL_SETTINGS--------------------------------

    promo: {
        offer: {
            title: "Offer Sliders",
            desc: "create, update, delete Offer Sliders",
            url: "/promotional-setting/offer/view-offer"
        },
        appSlider: {
            title: "App slider",
            desc: "create, update, delete Offer Sliders",
            url: "/promotional-setting/slider/view-slider"
        },
        video: {
            title: "How-to Videos",
            desc: "create, update, delete how To Videos",
            url: "/promotional-setting/how-to-video/view-how-to-video"
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
            url: "/promotional-setting/referral-type/view-referral-type"
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
//-------------  PERMISSIONS  --------------------------------------
export const userManagementPerma = [
    {
        title: 'Role & Permission',
        perm: [
            {
                name: 'create',
                value: 'createX',
            },
            {
                name: 'read',
                value: 'readX',
            },
            {
                name: 'update',
                value: 'updateX',
            },
            {
                name: 'delete',
                value: 'deleteX',
            },
        ],
    },
    {
        title: 'User Management',
        perm: [
            {
                name: 'create',
                value: 'createX',
            },
            {
                name: 'read',
                value: 'readX',
            },
            {
                name: 'update',
                value: 'updateX',
            },
            {
                name: 'delete',
                value: 'deleteX',
            },
        ],
    },
]
export const ecommPerma = [
    {
        title: 'Metal',
        perm: [
            {
                name: 'all',
                value: ['create_metal', 'view_metal', 'update_metal', "delete_metal"],
            },
            {
                name: 'create',
                value: 'create_metal',
            },
            {
                name: 'read',
                value: 'view_metal',
            },
            {
                name: 'update',
                value: 'update_metal',
            },
            {
                name: 'delete',
                value: 'delete_metal',
            },
        ],
    },
    {
        title: 'Metal Group',
        perm: [
            {
                name: 'all',
                value: ['create_metalGroup', 'view_metalGroup', 'update_metalGroup', "delete_metalGroup"],
            },
            {
                name: 'create',
                value: 'create_metalGroup',
            },
            {
                name: 'read',
                value: 'view_metalGroup',
            },
            {
                name: 'update',
                value: 'update_metalGroup',
            },
            {
                name: 'delete',
                value: 'delete_metalGroup',
            },
        ],
    },


]

//---------------------------------------------------
export const invoice = {
    declaration: "We declare that the above quantity of goods are kept by the seller in a safe vault on behalf of the buyer. It can be delivered in minted product as per the Terms & Conditions.",
    disclaimer: "   The gold grams you own are calculated by dividing the amount paid net of GST by the gold rate and rounded down to 4 decimal places. For example, .00054 grams will be rounded down to .0005 grams."
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
