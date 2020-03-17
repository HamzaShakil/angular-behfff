/*    
*	 Copyright (c) 2011-2019 VIDIZMO LLC                      
*    All Rights Reserved.                                      
*                                                              
*    This program, its components, modules, parts or pieces    
*    are developed by VIDIZMO LLC and are Copyright protected. 
*    Copying, modifying, enhancing, removing, or using part or 
*    as whole is strictly prohibited. VIDIZMO LLC doesn't      
*    give rights to any individual, organization or company,   
*    to make changes to its developed source code.             
*                                                              
*    Please delete and destroy copies of source code that you  
*    may have gotten in error or through any means, and        
*    report it to info@vidizmo.com.                            
*                            
*    Product:
*    http://www.vidizmo.com
*                                                                                  
*    Purpose of User.ts:                                   	
*    [PURPOSE]                                                 
*                                 
*    Author of User.ts:
*    Fahad Rehman   
*/

import { CustomerInfo, UpgradeType, ServerType } from './Licensing';
import { EventSubscriptionsInfo } from './NotificationSubscriber';
import { DefaultViewingAccess, RatingType, MashupSearchCriteria } from './Mashup';
import { FieldType, UpdateResult, VisitorConsentInfo } from './Common';
import { AppInfo, AppType } from './App'
import { ConsentFormSettings } from './Common';

export class UserProfileInfo {

    public firstName: string;

    public lastName: string;

    public emailAddress: string;

    public password: string;

    public addedById: number;

    public updateById: number;

    public addedDateTime: Date;

    public updatedDateTime: Date;

    public countryId: number;

    public stateId: number;

    public lastLogOn: Date;

    public tentativeEmailAddress: string;

    public id: number;

    public defaultTenantId: number;

    public department: string;

    public company: string;

    public passwordModificationDate: Date;

    public userTenantAssociation: UserInfo[];

    public externalSystemUser: ExternalSystemUserInfo[];

    public confirmationDateTime: Date;

    public userProfileDetail: UserProfileDetailsInfo;
}
export enum SourceRole {

    administrator = "Administrator",


    viewer = "Viewer",


    public = "Public",


    webSiteAdmin = "WebSiteAdmin",


    moderator = "Moderator",


    manager = "Manager",


    contributor = "Contributor"
}


export class LeaderBoardInfo {

    public userName: string;

    public authorImageUrl: string;

    public totalPoints: number;

    public duration: string;

    public countryId: number;
}


export class MyRankingPositionInfo {

    public totalUsers: number;

    public myPosition: number;
}


export class GamificationStatsInfo {

    public topScorrer: LeaderBoardInfo[];

    public myRankingPosition: MyRankingPositionInfo;

    public totalPoints: number;
}


export class GamificationStatsCriteria {

    public userProfileId: number;

    public accountId: number;

    public countryId: number;

    public totalCount: number;
}


export class UserProfileDetailsInfo {

    public title: string;

    public city: string;

    public countryName: string;

    public state: string;

    public zip: string;

    public defaultLanguage: LanguageInfo;

    public originalImageUrl: string;

    public smallProfileImage: string;

    public mediumProfileImage: string;

    public largeProfileImage: string;

    public consentsSigned: VisitorConsentInfo[];
}


export class UserProfileResult {

    public userProfiles: UserProfileInfo[];

    public totalResultsCount: number;
}

export class UserSearchCriteria {

    public keyword: string;

    public customAttributes: string[];

    public keywordMatchingCriteria: KeywordMatchingCriteria;

    public emailAddresses: string;

    public userIds: number[];

    public userProfileIds: number[];

    public groupIds: number[];

    public roleId: number[];

    public tenantId: number;

    public isGlobal: boolean;

    public isActive: boolean;

    public isDeleted: boolean;

    public userRegistrationStatus: UserRegistrationStatus[];

    public isFederated: boolean;

    public isSubscribedUser: boolean;

    public createdFromDate: Date;

    public createdToDate: Date;

    public cacheKey: string;

    public forcedRefresh: boolean;

    public sortType: SortOrder;

    public orderBy: string;

    public userSearchPart: UserSearchPart[];

    public pageIndex: number;

    public pageSize: number;
}

export enum UserSearchPart {

    basicInfo = "BasicInfo",


    userAssociations = "UserAssociations",


    userProfileCustomAttribute = "UserProfileCustomAttribute",


    userAssociation_EventSubscriptions = "UserAssociation_EventSubscriptions",


    userAssociation_Groups = "UserAssociation_Groups",


    userAssociation_Permissions = "UserAssociation_Permissions",


    detail = "Detail",


    externalSystemUser = "ExternalSystemUser",

    userAssociation_Tenant = "UserAssociation_Tenant",
}
export enum UserStatusType {

    any = "Any",


    active = "Active",


    inActive = "InActive"
}
export enum SortOrder {

    aSC = "ASC",


    dESC = "DESC"
}


export class UserProfileLockStatusInfo {

    public loginId: string;

    public noOfFailedLoginAttempts: number;

    public isLoginLocked: boolean;

    public lastFailedLoginDatetime: Date;
}

export class UserInfo {

    public tenantId: number;

    public tenant: TenantInfo;

    public userId: number;

    public role: RoleInfo;

    public userProfileId: number;

    public registrationStatus: UserRegistrationStatus;

    public isActive: boolean;

    public isDeleted: boolean;

    public isFederated: boolean;

    public channelSubscriptionTypeId: number;

    public isSubscribedUser: boolean;

    public addedBy: UserProfileInfo;

    public updatedBy: UserProfileInfo;

    public addedDateTime: Date;

    public updatedDateTime: Date;

    public userSubscribedEvents: EventSubscriptionsInfo[];

    public userProfileCustomAttributes: UserProfileCustomAttributeInfo[];

    public memberOf: GroupInfo[];

    public permissions: PermissionInfo[];
}

export enum UserRegistrationStatus {

    pending = "Pending",


    approved = "Approved",


    blocked = "Blocked",


    rejected = "Rejected",


    invited = "Invited",


    any = "Any"
}
export enum SignupStatus {

    registered = "Registered",


    updated = "Updated",


    failed = "Failed"
}
export enum UserRegistrationMode {

    synchronized = "Synchronized",


    nonSynchronized = "NonSynchronized"
}


export class UserSubscribedEventInfo {

    public eventId: number;

    public userId: number;

    public tenantId: number;
}


export class UserAdditionInRoleResult {

    public tenantId: number;

    public totalRequestsToAddInRole: number;

    public spaceAvailable: number;

    public result: boolean;

    public maxNoOfAllowedUsersInRole: number;

    public roleName: string;
}


export class UserRoleDemotionResult {

    public tenantName: string;

    public roleName: string;

    public roleActions: number;

    public totalOtherRoles: number;
}

export class TenantInfo {

    public id: number;

    public organizationName: string;

    public adminEmailAddress: string;

    public addedById: number;

    public updateById: number;

    public addedDateTime: Date;

    public updatedDateTime: Date;

    public isActive: boolean;

    public tenantName: string;

    public subDomainUrl: string;

    public isSSLEnable: boolean;

    public isFeatured: boolean;

    public parentTenant: TenantInfo;

    public subTenants: TenantInfo[];

    public privacyEnabled: boolean;

    public weight: number;

    public tenantProductPackage: ProductPackageInfo;

    public tenantRegistrationFields: TenantRegistrationFieldInfo[];

    public tenantDetails: TenantDetailInfo;

    public tenantStats: TenantStats;
}

export class TenantStats {

    public numberOfMashups: number;
    public numberOfUsers: number;

}

export enum ChannelAccessType {

    none = "None",

    internal = "Internal",

    restricted = "Restricted",

    hidden = "Hidden",

    public = "Public",

    custom = "Custom",

    subscription = "Subscription"

}
export enum JoinRequest {

    none = "None",


    allUsers = "AllUsers",


    mainChannelUserOnly = "MainChannelUserOnly",


    noOne = "NoOne",


    federatedUsersOnly = "FederatedUsersOnly"
}
export enum ChannelSubscriptionType {

    none = "None",


    monthly = "Monthly",


    yearly = "Yearly"
}
export enum PaymentTypesEnum {

    none = "None",


    free = "Free",


    monthly = "Monthly",


    quarterly = "Quarterly",


    yearly = "Yearly"
}
export enum UpgradeActionEnum {

    none = "None",


    download = "Download",


    install = "Install",

    downloadAndInstall = "DownloadAndInstall"
}

export enum ParticipationType {
    authenticatedUsers = "AuthenticatedUsers",
    portalUsers = "PortalUsers",
    portalAndMainPortalUsers = "PortalAndMainPortalUsers"
}


export class TenantDetailInfo {

    public tenantBranding: BrandingInfo;

    public tenantSSO: SSOInfo;

    public apps: AppInfo[];

    public tenantMembershipSettings: MembershipSettingsInfo;

    public tenantDemographics: DemographicsInfo;

    public tenantChannelSubscription: ChannelSubscriptionInfo;

    public tenantGeneralSettings: GeneralSettingsInfo;

    public configurableTerm: ConfigurableTermInfo[];

    public publicLocationRestriction: LocationRestriction;

    public privateLocationRestriction: LocationRestriction;

    public domainRestriction: DomainRestriction;

    public consentFormSettings: ConsentFormSettings;
}

export class DomainRestriction {

    public restriction: Restriction;
    public domains: String[];
}

export class LocationRestriction {
    includeAdministrators: boolean;
    restriction: Restriction;
    locations: LocationInfo[];
}


export class BrandingInfo {

    public privacyPolicy: string;

    public channelTheme: ChannelThemeInfo;

    public channelMenu: ChannelMenuInfo;

    public logoThumbnailUrl: String;

    public logoImageUrl: string;

    public favIconUrl: string;

    public certificateSealURL: String;

    public languageId: number;

    public language: LanguageInfo;

    public allowMultiLingual: boolean;

    public disclaimerMessage: string;

    public useAccountChannelHeader: Boolean;

    public useAccountChannelTheme: Boolean;

    public isShowTenantHeader: boolean;

    public description: string;

    public customizedCss: string;
}


export class SSOInfo {

    public inheritFederationSettings: boolean;

    public externalSourceLoginCaptionText: String;

    public externalSourceLoginCaptionTooltip: String;

    public restrictEmbeddingToTrustedDomains: boolean;

    public trustedDomainsForEmbedPlayers: String;

    public externalSourceSignInUrl: string;

    public identityProviderId: number;

    public trustedDomains: string;

    public samlpCertificate: String;

    public samlpRequest: String;

    public isSamlpRequestEnabled: boolean;

    public useDeflate: boolean;

    public isSignRequest: boolean;

    public isAppendRequest: boolean;

    public autoLoginForSSO: boolean;

    public autoLoginExpiryTime: number;
}


export class MembershipSettingsInfo {

    public membershipTypeName: string;

    public channelAccessTypeId: ChannelAccessType;

    public allowComments: boolean;

    public commentsModerationRequired: boolean;

    public allowUGC: boolean;

    public contentModerationRequired: boolean;

    public autoApproveJoinRequest: JoinRequest;

    public allowJoinRequest: boolean;

    public allowExternalUsers: boolean;

    public allowParticipate: ParticipationType;

    public defaultViewingAccess: DefaultViewingAccess;

    public allowSharingWithExternalUsers: boolean;

    public allowAnonymousUserAccess: boolean;

    public privacyEnabled: boolean;

    public loginTimeOut: number;
}


export class DemographicsInfo {

    public country: string;

    public state: string;

    public city: string;

    public websiteAddress: string;
}


export class ChannelSubscriptionInfo {

    public merchantAccountId: String;

    public channelSubscriptionEnable: boolean;

    public channelSubscriptionMonthlyPrice: string;

    public channelSubscriptionYearlyPrice: string;
}


export class GeneralSettingsInfo {

    public isSharingEnable: Boolean;

    public ratingType: RatingType;

    public isContactEmailSubscribed: Boolean;

    public webLoginEnabled: boolean;

    public isChannelLockedDown: boolean;

    public defaultGroupId: number;

    public isInheritAccountTags: boolean;

    public allowNewTagsOnPublish: boolean;

    public trackingSummaryResetDuration: number;

    public deleteContentInDuration: number;

    public certificateValidityPeriodInMonths: number;

    public isPodcastEnabled: boolean;

    public purgePolicies: PurgePolicyInfo[];
}

export class PurgePolicyInfo {
    public daysAfterDeletion: number;
    public searchCriteria: MashupSearchCriteria;
}


export class ChannelMenuInfo {

    public useAccountChannelMenu: boolean;

    public items: ChannelMenuItemInfo[];

    public noOfMenuItemToShowInRow: number;
}


export class ChannelMenuItemInfo {

    public text: String;

    public url: String;

    public iconUrl: String;

    public tooltip: String;

    public isVisible: boolean;

    public isSystemMenuItem: boolean;

    public order: number;

    public accessForAuthenticateUsers: boolean;

    public menu: ChannelMenuInfo;
}


export class ChannelThemeInfo {

    public backgroundImageUrl: string;

    public backgroundColor: string;

    public mobileHeaderBaseColor: string;

    public mobileHeaderShadeColor: string;

    public textColor: string;

    public linkColor: string;

    public favIconImageUrl: string;
}


export class TenantRegistrationFieldInfo {

    public id: number;

    public fieldName: string;

    public fieldValues: string;

    public fieldTypeId: FieldType;

    public tenantId: number;

    public isMandatory: boolean;

    public order: number;

    public showOnSignUp: boolean;
}


export class UserProfileCustomAttributeInfo {

    public id: number;
    public tenantCustomAttributeId: number;

    public tenantCustomAttributeName: string;

    public tenantCustomAttributeValue: string;

    public tenantId: number;

    public userProfileId: number;

    public addedById: number;

    public addedDateTime: Date;

    public updatedById: number;

    public updatedDateTime: Date;
}


export class TenantSearchCriteria {

    public keyword: string;

    public tenantDomain: string;

    public searchMode: SearchMode;

    public pageIndex: number;

    public pageSize: number;

    public orderBy: string;

    public sortType: SortOrder;

    public isFeatured: boolean;

    public forcedRefresh: boolean;

    public tenantIds: number[];

    public isGlobal: boolean;

    public applicationMode: ApplicationMode;

    public userProfileId: number;

    public enforceUserRestriction: boolean;

    public cacheKey: string;

    public createdDateFrom: Date;

    public createdDateTo: Date;

    public productPackageId: number;

    public isActive: number;

    public privacyMode: PrivacyMode;

    public channelExpiryFrom: Date;

    public channelExpiryTo: Date;

    public adminEmailAddress: String;

    public tenantAccountPackageStatus: TenantAccountPackageStatus;

    public keywordMatchingCriteria: KeywordMatchingCriteria;

    public tenantSearchPart: TenantSearchPart[];

    public channelAccessType: ChannelAccessType;

    public resultSet: ResultSet;

} export enum SearchMode {

    accountAndChannels = "AccountAndChannels",


    accountOnly = "AccountOnly",


    channels = "Channels"
}
export enum KeywordMatchingCriteria {

    likeSearch = "LikeSearch",


    exactSearch = "ExactSearch"
}
export enum TenantSearchPart {

    basicInfo = "BasicInfo",


    productPackageInfo = "ProductPackageInfo",


    tenantRegistrationFieldInfo = "TenantRegistrationFieldInfo",


    tenantDetailInfo = "TenantDetailInfo",


    channels = "Channels",

    channelStats = "ChannelStats"
}
export class TenantSearchResult {

    public tenants: TenantInfo[];

    public totalCount: number;
}

export class TemplateInfo {

    public id: number;

    public templateName: string;

    public displayName: string;

    public htmlTemplate: string;

    public isActive: boolean;

    public previewImage: string;

    public productId: number;

    public siteThemeId: number;
}


export class TemplateSearchCriteria {

    public templateName: string;

    public keyword: string;

    public tenantId: number;

    public productId: number;

    public siteThemeId: number;

    public forcedRefresh: Boolean;

    public cacheKey: string;
}


export class TemplateSearchResult {

    public templates: TemplateInfo[];

    public totalCount: number;
}

export class SiteThemeInfo {

    public id: number;

    public name: string;

    public displayName: string;

    public productTypeId: number;

    public menu: string;

    public description: string;

    public siteThemeDetails: SiteThemeDetail;
    public css: CSS[];

}

export class SiteThemeDetail {


    description: string;
    previewImages: string[];
    items: ChannelMenuItemInfo[];
    css: CSS[];

}

export class CSS {

    public order: number;
    public name: string;

}

export class RoleInfo {

    public id: number;

    public roleName: string;

    public tenantId: number;

    public addedBy: number;

    public addedDateTime: Date;

    public updatedBy: number;

    public updatedDateTime: Date;

    public sourceId: number;

    public noOfUsersInRole: number;

    public rolePosition: number;

    public rolePermissions: PermissionInfo[];
}


export class RoleSearchCriteria {

    public tenantIds: number[];

    public productPackageId: number;

    public searchParts: RolePart[];

    public forcedRefresh: boolean;

    public cacheKey: string;
}


export class RoleResult {

    public roles: RoleInfo[];

    public count: number;
}

export enum RolePart {
    basic = "Basic",
    permissions = "Permissions"
}

export class PermissionInfo {

    public subject: Subjects;

    public actions: number;
}


export enum Subjects {
    
    none = "None",    

    user = "User",    

    category = "Category",

    personalReports = "PersonalReports",   

    userReports = "UserReports",    

    mediaReports = "MediaReports",    

    group = "Group",    

    profileField = "ProfileField",    

    portal = "Portal",    

    publishingPoint = "PublishingPoint",    

    personalProfile = "PersonalProfile",    

    role = "Role",    

    emailTemplate = "EmailTemplate",    

    video = "Video",    

    audio = "Audio",    

    image = "Image",    

    document = "Document",    

    quiz = "Quiz",    

    survey = "Survey",    

    collection = "Collection",    

    course = "Course",    

    playlist = "Playlist",    

    scorm = "Scorm",    

    enterpriseTagCloud = "EnterpriseTagCloud",    

    uGC = "UGC",    

    comment = "Comment",    

    billingReports = "BillingReports",   
    
    appConfig = "AppConfig",    

    eventsLog = "EventsLog",    

    sMTP = "SMTP",    

    publicAccount = "PublicAccount",    

    multilingual = "Multilingual",    

    location = "Location",    

    customAttribute = "CustomAttribute",    

    deafultPublishRules = "DeafultPublishRules",    

    workflow = "Workflow",    

    podcast = "Podcast",    

    contentStorage = "ContentStorage",    

    siteTheme = "SiteTheme",    

    playerTemplate = "PlayerTemplate",    

    encodingProvider = "EncodingProvider",    

    chat = "Chat", 
    
    limitedSharing = "LimitedSharing",    

    live = "Live",    

    eCDN = "ECDN",    

    clipping = "Clipping",    

    portalListViews = "PortalListViews",    

    miscContent = "MiscContent",    

    tracking = "Tracking",    

    campaign = "Campaign",    

    productPackage = "ProductPackage",    

    encoder = "Encoder",    

    eventLog = "EventLog",    

    publishAndViewSetting = "PublishAndViewSetting",    

    pageTemplate = "PageTemplate",    

    tinyUrl = "TinyUrl",    

    level = "Level",    

    ranking = "Ranking",    

    contentFormat = "ContentFormat",    

    accessRight = "AccessRight",    

    content = "Content",    

    feedback = "Feedback",    

    accountAdministration = "AccountAdministration",    

    gamification = "Gamification",    

    enterpriseLicense = "EnterpriseLicense",    

    installer = "Installer",    

    pingLog = "PingLog",    

    resource = "Resource",

    learningPlan = "LearningPlan",

    interactivity = "Interactivity",

}

export enum Actions {
    get = 1,

    update = 2,

    delete = 4,

    add = 8,

    assign = 16,

    sell = 32,

    approve = 64,

    download = 128,

    embed = 256,

    share = 512,

    copy = 1024,

    report = 2048,

    rate = 4096,

    favorite = 8192,
}

export enum Features {    

    home = "Home",    
    featuredMedia = "FeaturedMedia",    
    featuredPortal = "FeaturedPortal",    
    multiTenancy = "MultiTenancy",
    customizedHeader = "CustomizedHeader",
    navigationMenu = "NavigationMenu",
    socialMediaSharing = "SocialMediaSharing",
    portalLibrary = "PortalLibrary",
    mediaManager = "MediaManager",
    myMedia = "MyMedia",
    assetLibrary = "AssetLibrary",
    floatingUploadButton = "FloatingUploadButton",
    interactivityPlugins = "InteractivityPlugins",
    completionCriteria = "CompletionCriteria",
    mashupAvailability = "MashupAvailability"
}

export class RequestErrorInfo {

    public message: string;

    public exceptionDetails: string;

    public errorCode: string;
}

export class ProductPackageInfo {

    public id: number;

    public name: String;

    public expiryDate: Date;

    public isActive: Boolean;

    public price: number;

    public applicationMode: ApplicationMode;

    public tenantProductPackageStatusId: TenantAccountPackageStatus;

    public accountCreditStatusId: AccountCreditStatus;

    public supportTypeId: SupportType;

    public product: ProductInfo;

    public siteTheme: SiteThemeInfo;

    public description: string;

    public productPackageDetail: ProductPackageDetailInfo;

    public roleResult: RoleResult;

}


export class ProductInfo {

    public id: number;

    public productName: string;

    public productDetail: ProductDetails;
}


export class ProductDetails {

    public redirectURL: boolean;
}
export enum InstallationMode {

    sharedCloud = 0,
    dedicatedInstance = 1

}
export enum AccountCreditStatus {
    unpaid = "Unpaid",

    underContract = "UnderContract",

    delinquent = "Delinquent",

    paid = "Paid",

    partner = "Partner",

    free = "Free"
}
export enum SupportType {

    none = "None",
    tier1 = "Tier1",
    tier2 = "Tier2"
}
export enum TenantAccountPackageStatus {

    all = "All",


    trial = "Trial",


    pOC = "POC",


    pilot = "Pilot",


    production = "Production",


    suspended = "Suspended",


    closed = "Closed",


    partner = "Partner"
}


export class ConfigurableTermInfo {

    public isCustom: boolean;
    public value: String;
    public name: String;
    public icon: String;

}


export class ProductPackageDetailInfo {

    public promotionCode: String;

    public maxNoOfChannels: number;

    public streamingBandwidth: number;

    public storage: number;

    public encodingVolume: number;

    public noOfActiveUsers: number;

    public productPackageConfigurableTerm: ConfigurableTermInfo[];

    public defaultMenu: ChannelMenuInfo;

    public features : Features[];
}
export class ProductPackageSearchResult {

    public productPackages: ProductPackageInfo[];

    public totalCount: number;
}

export class ProductPackageSearchCriteria {

    public productPackageId: number;

    public keyword: string;

    public keywordMatchingCriteria: KeywordMatchingCriteria;

    public installationMode: number;

    public productTypeId: number;

    public siteThemeId: number;

    public supportTypeId: number;

    public forcedRefresh: boolean;

    public orderByColumn: string;

    public orderByDescending: boolean;

    public pageIndex: number;

    public pageSize: number;

    public cacheKey: string;

    public packageSearchParts: PackageSearchPart;
}

export enum PackageSearchPart {

    basicInfo = "BasicInfo",
    roles = "Roles"
}

export class PaymentTransactionInfo {

    public id: number;

    public tenantId: number;

    public userId: number;

    public subscriptionId: String;

    public transactionData: String;

    public addedDate: Date;

    public transaction_subject: string;

    public txn_type: string;

    public payment_date: string;

    public subscr_id: string;

    public last_name: string;

    public residence_country: string;

    public pending_reason: string;

    public item_name: string;

    public payment_gross: string;

    public mc_currency: string;

    public business: string;

    public payment_type: string;

    public protection_eligibility: string;

    public verify_sign: string;

    public payer_status: string;

    public test_ipn: string;

    public payer_email: string;

    public txn_id: string;

    public receiver_email: string;

    public first_name: string;

    public payer_id: string;

    public receiver_id: string;

    public payment_status: string;

    public mc_gross: string;

    public custom: string;

    public charset: string;

    public notify_version: string;

    public paymentTypeId: number;

    public updatedDate: Date;

    public promotionCode: string;

    public iPNStatus: number;

    public requestData: String;

    public acquisitionObject: String;

    public transactionStatus: TransactionStatus;

    public purchaseTypeId: PurchaseType;

    public channelSubscriptionType: ChannelSubscriptionType;
}
export enum TransactionStatus {

    none = "None",


    pending = "Pending",


    completed = "Completed"
}
export enum PurchaseType {

    none = "None",


    accountPurchase = "AccountPurchase",


    mashupPurchase = "MashupPurchase",


    channelSubscriptionPurchase = "ChannelSubscriptionPurchase"
}


export class PaymentTransactionSearchCriteria {

    public tenantId: number;

    public transactionLogId: number;

    public userId: number;

    public subscriptionId: string;

    public orderByColumn: string;

    public sortType: boolean;

    public fromDate: Date;

    public toDate: Date;

    public purchaseType: PurchaseType;

    public payerEmail: string;

    public receiverEmial: string;

    public businessEmail: string;

    public paymentStatus: string;

    public transactionStatus: TransactionStatus;

    public transactionType: TransactionType;

    public pageIndex: number;

    public pageSize: number;
}
export enum TransactionType {

    none = "None",


    adjustment = "adjustment",


    cart = "cart",


    express_checkout = "express_checkout",


    masspay = "masspay",


    merch_pmt = "merch_pmt",


    mp_cancel = "mp_cancel",


    mp_signup = "mp_signup",


    new_case = "new_case",


    payout = "payout",


    pro_hosted = "pro_hosted",


    recurring_payment = "recurring_payment",


    recurring_payment_expired = "recurring_payment_expired",


    recurring_payment_failed = "recurring_payment_failed",


    recurring_payment_profile_cancel = "recurring_payment_profile_cancel",


    recurring_payment_profile_created = "recurring_payment_profile_created",


    recurring_payment_skipped = "recurring_payment_skipped",


    recurring_payment_suspended = "recurring_payment_suspended",


    recurring_payment_suspended_due_to_max_failed_payment = "recurring_payment_suspended_due_to_max_failed_payment",


    send_money = "send_money",


    subscr_cancel = "subscr_cancel",


    subscr_eot = "subscr_eot",


    subscr_failed = "subscr_failed",


    subscr_modify = "subscr_modify",


    subscr_payment = "subscr_payment",


    subscr_signup = "subscr_signup",


    virtual_terminal = "virtual_terminal",


    web_accept = "web_accept"
}

export class PaymentTransactionSearchResult {

    public paymentTransactions: PaymentTransactionInfo[];

    public totalCount: number;
}

export class MaintenanceTaskInfo {

    public id: number;

    public title: string;

    public shortDescription: string;

    public longDescription: string;

    public actionUrl: string;

    public startDate: Date;

    public endDate: Date;

    public predecessor: string;

    public status: MaintenanceTaskStatus;

    public addedDateTime: Date;

    public updatedDateTime: Date;

    public assignedToUserId: number;

    public tenantId: number;
}

export class MaintenanceTaskSearchCriteria {

    public tenantId: number;

    public assignedToUserId: number;

    public keyword: string;

    public status: MaintenanceTaskStatus;

    public startDate: Date;

    public endDate: Date;

    public pagetIndex: number;

    public pagetSize: number;

    public orderBy: string;

    public sortType: boolean;
}
export enum MaintenanceTaskStatus {

    all = "All",


    pending = "Pending",


    completed = "Completed",


    deleted = "Deleted"
}

export class LocationServerInfo {

    public locationId: number;

    public serverUrl: String;

    public serverId: number;

    public serverTypeId: number;

    public userIPAddress: String;

    public serverProviderTypeId: number;
}


export class SearchLocationResult {

    public locations: LocationInfo[];

    public totalCount: number;
}


export class LocationInfo {

    public id: number;

    public name: string;

    public description: string;

    public parentLocationId: number;

    public tenantId: number;

    public level: number;

    public isDeleted: boolean;

    public addedByUserId: number;

    public addedDateTime: Date;

    public updatedByUserId: number;

    public updatedDateTime: Date;

    public locations: LocationInfo[];

    public locationSubnets: LocationSubnetInfo[];

    public geoCoordinate: GeoCoordinate;

}
export class LocationSubnetInfo {

    public id: number;
    public startIP: string;
    public endIP: string;
    public StartNumericIP: number;
    public EndNumericIP: number;
    public title: string;
    public subnetMask: number;
    public locationId: number;

}

export class GeoCoordinate {
    public latitude: number;
    public longitude: number;
    public altitude: number;
}

export enum SearchLocationMode {
    all = "All",
    parentOnly = "ParentOnly"
}

export class LocationSearchCriteria {

    public Keyword: string;
    public locationId: number;
    public parentLocationId: number;
    public tenantId: number;
    public pageIndex: number;
    public pageSize: number;
    public locationParts: LocationPart[];
    public SearchMode: SearchLocationMode;
    public resultSet: ResultSet;

}

export enum LocationPart {
    basicInfo = "basicInfo",
    geoCoordinates = "geoCoordinates",
    locationSubnets = "locationSubnets",
}

export enum ResultSet {
    hierarchical = "Hierarchical",
    flat = "Flat"
}

export class LocationSearchResult {

    public locations: LocationInfo[];
    public totalCount: number;

}

export class LicenseInformation {

    public productPackageName: string;

    public tenantName: string;

    public tenantId: number;

    public userName: string;

    public emailAddress: string;

    public conntactNo: string;

    public noOfChannels: number;

    public noOfAdministrators: number;

    public noOfManagers: number;

    public noOfModerators: number;

    public noOfContributors: number;

    public noOfViewers: number;

    public licenseKey: string;

    public licenseId: number;

    public noOfActiveUsers: number;

    public isShowExpiryMessage: boolean;

    public showExipryMessageBeforeDays: number;

    public gracePeriodInDays: number;

    public endDate: Date;

    public applicatoinModeId: number;

    public isShowPingFailureMessage: boolean;

    public storage: number;

    public streaming: number;

    public encoding: number;

    public lastPingTime: Date;
}



export class LanguageInfo {

    public id: number;

    public name: string;

    public culture: string;

    public direction: string;

    public isActive: boolean;
}



export class IdentityProviderInfo {

    public id: number;

    public identityProviderName: string;

    public tenantId: number;

    public attributeMapping: IdpAttributeMappingInfo[];
}


export class IdpAttributeMappingInfo {

    public vidizmoAttributeName: string;

    public providerAttributeName: string;
}

export class GroupInfo {

    public id: number;

    public name: string;

    public description: string;

    public memberGroups: GroupInfo[];

    public memberUsers: UserProfileInfo[];


    public tenantId: number;

    public addedById: number;

    public updatedById: number;

    public addedDateTime: Date;

    public updatedDateTime: Date;

    public memberUsersCount: number;

    public emailAddress: string;

    public sourceGroupId: number;

    public federatedSystemId: number;
}


export class GroupSearchCriteria {

    public groupIds: number[];

    public groupSearchPart: GroupSearchPart[];

    public tenantId: number;

    public keyword: string;

    public keywordMatchingCriteria: KeywordMatchingCriteria;

    public isGlobal?: boolean;

    public pageIndex: number;

    public pageSize: number;

    public orderBy: string;

    public sortType: SortOrder;

    public cacheKey: string;

    public forcedRefresh: boolean;
}

export class GroupResult {

    public groups: GroupInfo[];

    public totalResultsCount: number;
}
export enum GroupSearchPart {

    basicInfo = "BasicInfo",


    groupMembers = "GroupMembers",


    userMembers = "UserMembers"
}



export class ExternalSystemUserInfo {

    public id: number;

    public externalSystemId: string;

    public userProfileId: number;

    public federatedSystemTypeId: number;

    public federatedSystemName: string;

    public addedDateTime: Date;

    public updatedDateTime: Date;
}

export class CountryInfo {

    public id: number;

    public countryName: string;

    public shortName: string;

    public states: StateInfo[];
}


export class StateInfo {

    public id: number;

    public countryId: number;

    public states: string;

    public stateCode: string;
}

export class BillingDataInfo {

    public tenantId: number;

    public accountTenantId: number;

    public channelCount: number;

    public userCount: number;

    public activeUserCount: number;

    public administratorCount: number;

    public managerCount: number;

    public moderatorCount: number;

    public contributorCount: number;

    public viewerCount: number;

    public billingDate: Date;

    public addedDateTime: Date;

    public encodingBandwidthGB: number;

    public dataStorageGB: number;

    public bandwidthGB: number;
}


export class StorageLimitInfo {

    public remainingUploadLimit: string;

    public canUpload: boolean;

    public consumed: string;

    public totalStorage: number;

    public isTrialMessage: boolean;

    public marketPrice: string;

    public marketContact: string;
}

export class AuthenticationInfo {

    public accessToken: string;

    public emailAddress: string;

}

export class CredentialInfo {

    public tenantId: number;
}


export class WebLoginInfo extends CredentialInfo {

    public emailAddress: string;

    public password: string;
}

export class UserUpdateResult extends UpdateResult {
    public resgistrationStatus: UserRegistrationStatus;
}

export class ExternalSystemInfo extends CredentialInfo {

    public firstName: string;

    public lastName: string;

    public emailAddress: string;

    public externalSystemId: string;

    public federatedSystemName: string;
}
export enum EncryptionMethodInfo {

    aesManaged = "AesManaged"
}

export class TokenRequest {

    public emailAddress: string;

    /** This property is added to be used only on client side. This will not be sent to server. */
    public expiryDate: Date;

    public expirationTimeInMinutes: number;

    public type: TokenType;

    public claims: string;

    public appType: AppType;

}

export enum TokenType {
    none = "None",
    recurringUse = "RecurringUse",
    useOnce = "UseOnce",
    API = "API"
}

export class TokenInfo {

    public id: number;
    public claims: string;
    public token: string;
    public appType: AppType;
    public userProfile: UserProfileInfo;
    public addedDateTime: Date;
    public expiryDateTime: Date;

}

export class TokenSearchCriteria {

    public ids: number[];
    public userProfileIds: number[];
    public pageIndex: number;
    public pageSize: number;
    public appType: AppType;

}

export class TenantDefaultSettings {

    public tenantDetails: TenantDefaultSettingsDetailInfo;

}


export class TenantDefaultSettingsDetailInfo {


    public tenantMembershipSettings: MembershipSettingsInfo;

}

export enum ApplicationMode {

    enterpriseClient = "EnterpriseClient",

    saaS = "SaaS"
}

export enum Restriction {
    allowedAll = "AllowedAll",
    allowedOnly = "AllowedOnly",
    allowedAllExcept = "AllowedAllExcept"
}

export enum RoleName {
    webAdmin = "WebAdmin",
    administrator = "Administrator",
    manager = "Manager",
    moderator = "Moderator",
    contributor = "Contributor",
    viewer = "Viewer",
    anonymous = "Anonymous"
}

export enum PrivacyMode {
    none = "None",
    myPrivateTenants = "MyPrivateTenants",
    allPrivateTenants = "AllPrivateTenants",
}