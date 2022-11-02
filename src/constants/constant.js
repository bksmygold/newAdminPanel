//:::::::::  API_Endpoint ::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const ADMIN_API = "http://api-dev.bksmygold.com/admin";
// export const ADMIN_API = "http://192.168.10.110:5001/admin";



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
            url: '/tax-settings/hsn/view-hsn'
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

        retailComm: {
            title: "Retailer Commissions",
            desc: "Create , Update, delete commission percentages",
            url: "/tax-settings/retailer-commission/view-retailer-commission"
        },
        subBid: {
            title: "Subscriptions(Bids)",
            desc: "Create , Update, delete subscription plans for Bid-Buy and Sell Users",
            url: "/tax-settings/subscription-bids/view-subscription-bids"

        },
        subAds: {
            title: "Subscriptions(Ads)",
            desc: "Create , Update, delete subscription plans for Ads for Retailers",
            url: "/tax-settings/subscription-ads/view-subscription-ads"

        },
        gbpLevel: {
            title: "GBP Levels",
            desc: "Create , Update, delete GBP levels, commissions etc settings"
        },
    },
    //------------------- E_COMMERCE --------------------------------

    eComm: [
        {
            url: "/e-commerce/metal/view-metal",
            title: "Metal",
            desc: "create, update, delete Metals"
        },
        {
            title: "Metal Groups",
            desc: "create, update, delete Metal Groups relate them to Metal",
            url: "/e-commerce/metal-group/view-metal-group",
        },
        {
            title: "Ornaments",
            desc: "create, update, delete Ornaments",
            url: "/e-commerce/ornament/view-ornament"
        },
        {
            title: "Units",
            desc: "create, update, delete Units",
            url: "/e-commerce/unit/view-unit"
        },
        {
            title: "Cut",
            desc: "create, update, delete Cut",
            url: "/e-commerce/cut/view-cut"
        },
        {
            title: "Colors",
            desc: "create, update, delete Colors",
            url: "/e-commerce/color/view-color",
        },
        {
            title: "Shape",
            desc: "create, update, delete Shape",
            url: "/e-commerce/shape/view-shape",
        },
        {
            title: "Clarity",
            desc: "create, update, delete Clarity",
            url: "/e-commerce/clarity/view-clarity",
        },
        {
            title: "Style",
            desc: "create, update, delete Style",
            url: "/e-commerce/style/view-style"
        },
        {
            title: "Collections",
            desc: "create, update, delete Collections",
            url: "/e-commerce/collection/view-collection"
        },
        {
            title: "Categories",
            desc: "create, update, delete Categories",
            url: "/e-commerce/category/view-category"
        },
        {
            title: "Varieties",
            desc: "create, update, delete Varieties",
            url: "/e-commerce/variety/view-variety"
        },
        {
            title: "Items",
            desc: "create, update, delete Items",
            url: "/e-commerce/item/view-item"
        },
        {
            title: "Product Types",
            desc: "create, update, delete Product Types",
            url: "/e-commerce/product-type/view-product-type"
        },
        {
            title: "FAQ",
            desc: "create, update, delete FAQs",
            url: "/e-commerce/faq/view-faq"
        },
        {
            title: "Policy",
            desc: "create, update, delete Policies",
            url: "/e-commerce/policy/view-policy"
        },
        {
            title: "Return Reason",
            desc: "create, update, delete return reason",
            url: "/e-commerce/return-reason/view-return-reason"
        },
        {
            title: "Reject Reason",
            desc: "create, update, delete return reason",
            url: "/e-commerce/reject-reason/view-reject-reason"
        },


        {
            title: "Certificates",
            desc: "create, update, delete Certificates",
            url: "/e-commerce/certificate/view-certificate"
        },
        {
            title: "Label",
            desc: "create, update, delete Certificates",
            url: "/e-commerce/label/view-label"
        },
        {
            title: "Standard Plans",
            desc: "create, update, delete Plans",
            url: "/e-commerce/plan/view-plan"
        },
        {
            title: "Cycle Periods",
            desc: "create, update, delete Plans",
            url: "/e-commerce/cycle-period/view-cycle-period",
        },

    ],
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
            url: "/promotional-setting/how-to-video/view-how-to-video",
        },
        testi: {
            title: "Testimonials",
            desc: "create, update, delete Testimonials Videos",
            url: "/promotional-setting/testimonial/view-testimonial-video"
        },
        offerPopup: {
            title: "Offer Popups",
            desc: "create, update, delete offer popups with timeline conditions etc.",
            url: "/promotional-setting/offer-popup/view"

        },
        referratlType: {
            title: "Referral Type",
            desc: "create, update, delete referral type",
            url: "/promotional-setting/referral-type/view-referral-type"
        },
        merchNatBanner: {
            title: "Merchant Banners",
            desc: "Approve, disapprove Merchant Banners",
            url: "/promotional-setting/merchant-banner/view"
        },

    },
}
//-----------------------------------------------------------------
export const reportList = {
    smartReport: [
        {
            title: "Buy and Save Module",
            url: "/reports/buy-save/view"
        },

        {
            title: "Instant Gold Module",
            url: "/reports/instant-gold/view"

        },
        {
            title: "Sell and Reserve Module",
            url: "/reports/sell-reserve/view"

        },
        {
            title: "E-commerce Module",
            url: "/reports/e-comm/view"

        },
        {
            title: "Sell old gold Module",
            url: "/reports/sell-old-gold/view"
        },
        {
            title: "Upload gold Module",
            url: "/reports/upload-gold/view"
        },
        {
            title: "Referral Module",
            url: "/reports/referral/view"
        },
        {
            title: "Bid buy and sell Module",
            url: "/reports/bid-buy-sell/view"
        },
        {
            title: "Scan & Pay Module",
            url: "/reports/scan-pay/view"
        }
    ],
    metal: [
        {
            head: "Customer",
            data1: {
                title1: "Custody Given",
                url: "/reports/customer/custody-given"
            },
            data2: {
                title2: "Custody Released",
                url: "/reports/customer/custody-released"
            },
        },
        {
            head: "VIP/Sale Referral",
            data1: {
                title1: "Custody Given",
                url: "/reports/referral/custody-given"
            },
            data2: {
                title2: "Custody Released",
                url: "/reports/referral/custody-released"
            },
        },
        {
            head: "Merchant",
            data1: {
                title1: "Custody Given",
                url: "/reports/merchant/custody-given"
            },
            data2: {
                title2: "Custody Released",
                url: "/reports/merchant/custody-released"
            },
        },
        {
            head: "Retailer",
            data1: {
                title1: "Custody Given",
                url: "/reports/retailer/custody-given"
            },
            data2: {
                title2: "Custody Released",
                url: "/reports/retailer/custody-released"
            },
        },


    ],
    financial: [
        {
            head: "Customer",
            data1: {
                title1: "Customer Sale Invoices",
                url: "/reports/customer/financial-sale-invoice"
            },
            data2: {
                title2: "Customer Purchase Invoices",
                url: "/reports/customer/financial-purchase-invoice"
            },
            data3: {
                title3: "Customer Settlements",
                url: "/tax-settings",
                url: "/reports/customer/financial-settlement"

            },
        },
        {
            head: "VIP / Sales Referral",
            data1: {
                title1: "Referral  Sale Invoices",
                url: "/reports/referral/financial-sale-invoice"
            },
            data2: {
                title2: "Referral  Purchase Invoices",
                url: "/reports/referral/financial-purchase-invoice"
            },
            data3: {
                title3: "Referral  Settlements",
                url: "/reports/referral/financial-settlement"
            },
        },
        {
            head: "Merchant",
            data1: {
                title1: "Merchant Sale Invoices",
                url: "/reports/merchant/financial-sale-invoice"
            },
            data2: {
                title2: "Merchant Purchase Invoices",
                url: "/reports/merchant/financial-purchase-invoice"
            },
            data3: {
                title3: "Merchant Settlements",
                url: "/reports/merchant/financial-settlement"
            },
        },
        {
            head: "Retailer",
            data1: {
                title1: "Retailer Sale Invoices",
                url: "/reports/retailer/financial-sale-invoice"

            },
            data2: {
                title2: "Retailer Purchase Invoices",
                url: "/reports/retailer/financial-purchase-invoice"
            },
            data3: {
                title3: "Retailer  Settlements",
                url: "/reports/retailer/financial-settlement"
            },
        },


        // {
        //     head: "Bank",
        //     title1: "Bank Receipts",
        //     title2: "Bank Payment",

        // },


    ]
}
//-------------  PERMISSIONS  --------------------------------------
export const userManagementPerma = [
    {
        title: 'Department',
        perm: [
            {
                name: 'create',
                value: 'create_department',
            },
            {
                name: 'read',
                value: 'read_department',
            },
            {
                name: 'update',
                value: 'update_department',
            },
            {
                name: 'delete',
                value: 'delete_department',
            },
        ],
    },
    {
        title: 'Role & Permission',
        perm: [
            {
                name: 'create',
                value: 'create_role',
            },
            {
                name: 'read',
                value: 'read_role',
            },
            {
                name: 'update',
                value: 'update_role',
            },
            {
                name: 'delete',
                value: 'delete_role',
            },
        ],
    },
    {
        title: 'User Management',
        perm: [
            {
                name: 'create',
                value: 'create_user',
            },
            {
                name: 'read',
                value: 'read_user',
            },
            {
                name: 'update',
                value: 'update_user',
            },
            {
                name: 'delete',
                value: 'delete_user',
            },
        ],
    },
    {
        title: 'Vip Referral',
        perm: [
            {
                name: 'create',
                value: 'create_referral',
            },
            {
                name: 'read',
                value: 'read_referral',
            },
            {
                name: 'update',
                value: 'update_referral',
            },
            {
                name: 'delete',
                value: 'delete_referral',
            },
        ],
    },
    {
        title: 'Sale Referral',
        perm: [
            {
                name: 'create',
                value: 'create_referral',
            },
            {
                name: 'read',
                value: 'read_referral',
            },
            {
                name: 'update',
                value: 'update_referral',
            },
            {
                name: 'delete',
                value: 'delete_referral',
            },
        ],
    },
    {
        title: 'GBP User',
        perm: [
            {
                name: 'create',
                value: 'create_referral',
            },
            {
                name: 'read',
                value: 'read_referral',
            },
            {
                name: 'update',
                value: 'update_referral',
            },
            {
                name: 'delete',
                value: 'delete_referral',
            },
        ],
    },
    {
        title: 'Merchant',
        perm: [
            {
                name: 'create',
                value: 'create_merchant',
            },
            {
                name: 'read',
                value: 'read_merchant',
            },
            {
                name: 'update',
                value: 'update_merchant',
            },
            {
                name: 'delete',
                value: 'delete_merchant',
            },
        ],
    },
    {
        title: 'Business',
        perm: [
            {
                name: 'create',
                value: 'create_business',
            },
            {
                name: 'read',
                value: 'read_business',
            },
            {
                name: 'update',
                value: 'update_business',
            },
            {
                name: 'delete',
                value: 'delete_business',
            },
        ],
    },
    {
        title: 'Supplier',
        perm: [
            {
                name: 'create',
                value: 'create_supplier',
            },
            {
                name: 'read',
                value: 'read_supplier',
            },
            {
                name: 'update',
                value: 'update_supplier',
            },
            {
                name: 'delete',
                value: 'delete_supplier',
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
                value: "all"
                // value: ['create_metal', 'view_metal', 'update_metal', "delete_metal"],
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
                value: "all"
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
    {
        title: 'Ornament',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_ornament',
            },
            {
                name: 'read',
                value: 'view_ornament',
            },
            {
                name: 'update',
                value: 'update_ornament',
            },
            {
                name: 'delete',
                value: 'delete_ornament',
            },
        ],
    },
    {
        title: 'Units',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_unit',
            },
            {
                name: 'read',
                value: 'view_unit',
            },
            {
                name: 'update',
                value: 'update_unit',
            },
            {
                name: 'delete',
                value: 'delete_unit',
            },
        ],
    },
    {
        title: 'Cut',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_cut',
            },
            {
                name: 'read',
                value: 'view_cut',
            },
            {
                name: 'update',
                value: 'update_cut',
            },
            {
                name: 'delete',
                value: 'delete_cut',
            },
        ],
    },
    {
        title: 'Colors',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_colour',
            },
            {
                name: 'read',
                value: 'view_colour',
            },
            {
                name: 'update',
                value: 'update_colour',
            },
            {
                name: 'delete',
                value: 'delete_colour',
            },
        ],
    },
    {
        title: 'Shape',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_shape',
            },
            {
                name: 'read',
                value: 'view_shape',
            },
            {
                name: 'update',
                value: 'update_shape',
            },
            {
                name: 'delete',
                value: 'delete_shape',
            },
        ],
    },
    {
        title: 'Clarity',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_clarity',
            },
            {
                name: 'read',
                value: 'view_clarity',
            },
            {
                name: 'update',
                value: 'update_clarity',
            },
            {
                name: 'delete',
                value: 'delete_clarity',
            },
        ],
    },
    {
        title: 'Style',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_style',
            },
            {
                name: 'read',
                value: 'view_style',
            },
            {
                name: 'update',
                value: 'update_style',
            },
            {
                name: 'delete',
                value: 'delete_style',
            },
        ],
    },
    {
        title: 'Collection',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_collection',
            },
            {
                name: 'read',
                value: 'view_collection',
            },
            {
                name: 'update',
                value: 'update_collection',
            },
            {
                name: 'delete',
                value: 'delete_collection',
            },
        ],
    },
    {
        title: 'category',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_category',
            },
            {
                name: 'read',
                value: 'view_category',
            },
            {
                name: 'update',
                value: 'update_category',
            },
            {
                name: 'delete',
                value: 'delete_category',
            },
        ],
    },
    {
        title: 'variety',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_variety',
            },
            {
                name: 'read',
                value: 'view_variety',
            },
            {
                name: 'update',
                value: 'update_variety',
            },
            {
                name: 'delete',
                value: 'delete_variety',
            },
        ],
    },
    {
        title: 'Item',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_item',
            },
            {
                name: 'read',
                value: 'view_item',
            },
            {
                name: 'update',
                value: 'update_item',
            },
            {
                name: 'delete',
                value: 'delete_item',
            },
        ],
    },
    {
        title: 'Product Type',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_productType',
            },
            {
                name: 'read',
                value: 'view_productType',
            },
            {
                name: 'update',
                value: 'update_productType',
            },
            {
                name: 'delete',
                value: 'delete_productType',
            },
        ],
    },
    {
        title: 'FAQ',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_faq',
            },
            {
                name: 'read',
                value: 'view_faq',
            },
            {
                name: 'update',
                value: 'update_faq',
            },
            {
                name: 'delete',
                value: 'delete_faq',
            },
        ],
    },
    {
        title: 'policy',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_policy',
            },
            {
                name: 'read',
                value: 'view_policy',
            },
            {
                name: 'update',
                value: 'update_policy',
            },
            {
                name: 'delete',
                value: 'delete_policy',
            },
        ],
    },
    {
        title: 'Return Reason',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_returnReason',
            },
            {
                name: 'read',
                value: 'view_returnReason',
            },
            {
                name: 'update',
                value: 'update_returnReason',
            },
            {
                name: 'delete',
                value: 'delete_returnReason',
            },
        ],
    },
    {
        title: 'Reject Reason',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_rejectReason',
            },
            {
                name: 'read',
                value: 'view_rejectReason',
            },
            {
                name: 'update',
                value: 'update_rejectReason',
            },
            {
                name: 'delete',
                value: 'delete_rejectReason',
            },
        ],
    },
    {
        title: 'Certificate',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_certificate',
            },
            {
                name: 'read',
                value: 'view_certificate',
            },
            {
                name: 'update',
                value: 'update_certificate',
            },
            {
                name: 'delete',
                value: 'delete_certificate',
            },
        ],
    },
    {
        title: 'Label',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_label',
            },
            {
                name: 'read',
                value: 'view_label',
            },
            {
                name: 'update',
                value: 'update_label',
            },
            {
                name: 'delete',
                value: 'delete_label',
            },
        ],
    },
    {
        title: 'Plan',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_plan',
            },
            {
                name: 'read',
                value: 'view_plan',
            },
            {
                name: 'update',
                value: 'update_plan',
            },
            {
                name: 'delete',
                value: 'delete_plan',
            },
        ],
    },
    {
        title: 'Cycle Period',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'create_cyclePeriod',
            },
            {
                name: 'read',
                value: 'view_cyclePeriod',
            },
            {
                name: 'update',
                value: 'update_cyclePeriod',
            },
            {
                name: 'delete',
                value: 'delete_cyclePeriod',
            },
        ],
    },
]


export const taxSettingPerma = [
    {
        title: 'Government Taxes',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_customDuty',
            },
            {
                name: 'read',
                value: 'read_customDuty',
            },
            {
                name: 'update',
                value: 'update_customDuty',
            },
            {
                name: 'delete',
                value: 'delete_customDuty',
            },
        ],
    },
    {
        title: 'HSN & GST',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_hsn',
            },
            {
                name: 'read',
                value: 'read_hsn',
            },
            {
                name: 'update',
                value: 'update_hsn',
            },
            {
                name: 'delete',
                value: 'delete_hsn',
            },
        ],
    },
    {
        title: 'TDS & TCS',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_tds',
            },
            {
                name: 'read',
                value: 'read_tds',
            },
            {
                name: 'update',
                value: 'update_tds',
            },
            {
                name: 'delete',
                value: 'delete_tds',
            },
        ],
    },
    {
        title: 'Buy & Save',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_calculation',
            },
            {
                name: 'read',
                value: 'read_calculation',
            },
            {
                name: 'update',
                value: 'update_calculation',
            },
            {
                name: 'delete',
                value: 'delete_calculation',
            },
        ],
    },
    {
        title: 'Interest Rates',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_loanInterest',
            },
            {
                name: 'read',
                value: 'read_loanInterest',
            },
            {
                name: 'update',
                value: 'update_loanInterest',
            },
            {
                name: 'delete',
                value: 'delete_loanInterest',
            },
        ],
    },
    {
        title: 'Mandi',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_mandi',
            },
            {
                name: 'read',
                value: 'read_mandi',
            },
            {
                name: 'update',
                value: 'update_mandi',
            },
            {
                name: 'delete',
                value: 'delete_mandi',
            },
        ],
    },
    {
        title: 'Referral Type',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Refer & Earn',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Bid Buy & Sell',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Making Charges',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_makingCharge',
            },
            {
                name: 'read',
                value: 'read_makingCharge',
            },
            {
                name: 'update',
                value: 'update_makingCharge',
            },
            {
                name: 'delete',
                value: 'delete_makingCharge',
            },
        ],
    },
    {
        title: 'Retailer Commission',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_makingCharge',
            },
            {
                name: 'read',
                value: 'read_makingCharge',
            },
            {
                name: 'update',
                value: 'update_makingCharge',
            },
            {
                name: 'delete',
                value: 'delete_makingCharge',
            },
        ],
    },
    {
        title: 'Subscriptions for Bids',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_makingCharge',
            },
            {
                name: 'read',
                value: 'read_makingCharge',
            },
            {
                name: 'update',
                value: 'update_makingCharge',
            },
            {
                name: 'delete',
                value: 'delete_makingCharge',
            },
        ],
    },
    {
        title: 'Subscriptions for Ads',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_makingCharge',
            },
            {
                name: 'read',
                value: 'read_makingCharge',
            },
            {
                name: 'update',
                value: 'update_makingCharge',
            },
            {
                name: 'delete',
                value: 'delete_makingCharge',
            },
        ],
    },
    {
        title: 'GBP Levels',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_makingCharge',
            },
            {
                name: 'read',
                value: 'read_makingCharge',
            },
            {
                name: 'update',
                value: 'update_makingCharge',
            },
            {
                name: 'delete',
                value: 'delete_makingCharge',
            },
        ],
    },
]

export const promotionalSettingsPerma = [
    {
        title: 'Offer Slider',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_offer',
            },
            {
                name: 'read',
                value: 'read_offer',
            },
            {
                name: 'update',
                value: 'update_offer',
            },
            {
                name: 'delete',
                value: 'delete_offer',
            },
        ],
    },
    {
        title: 'App Slider',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_slider',
            },
            {
                name: 'read',
                value: 'read_slider',
            },
            {
                name: 'update',
                value: 'update_slider',
            },
            {
                name: 'delete',
                value: 'delete_slider',
            },
        ],
    },
    {
        title: 'How to videos',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_video',
            },
            {
                name: 'read',
                value: 'read_video',
            },
            {
                name: 'update',
                value: 'update_video',
            },
            {
                name: 'delete',
                value: 'delete_video',
            },
        ],
    },
    {
        title: 'Testimonials',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_video',
            },
            {
                name: 'read',
                value: 'read_video',
            },
            {
                name: 'update',
                value: 'update_video',
            },
            {
                name: 'delete',
                value: 'delete_video',
            },
        ],
    },
    {
        title: 'Offer Popups',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Merchant Banner',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
]


export const reportsPerma = [
    {
        title: 'Financials',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Metal',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
            },
        ],
    },
    {
        title: 'Smart Reports',
        perm: [
            {
                name: 'all',
                value: "all"
            },
            {
                name: 'create',
                value: 'creat_referralType',
            },
            {
                name: 'read',
                value: 'read_referralType',
            },
            {
                name: 'update',
                value: 'update_referralType',
            },
            {
                name: 'delete',
                value: 'delete_referralType',
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

export const custodian = [
    {
        name: "Custodian Given",
        value: 256
    },
    {
        name: "Custodian Released",
        value: 27
    },
    {
        name: "Under Hold",
        value: 256
    },
]
export const userType = [
    {
        name: "To Customer",
        value: 256
    },
    {
        name: "To Business",
        value: 27
    },
    {
        name: "To VIP",
        value: 256
    },

]