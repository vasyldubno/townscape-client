export interface Geoloc {
  lat: number
  lng: number
}

export interface Geography {
  lat: number
  lng: number
}

export interface Location {
  id: number
  level: number
  externalID: string
  name: string
  name_l1: string
  name_l2: string
  slug: string
  slug_l1: string
  slug_l2: string
  type: string
}

export interface Category {
  id: number
  level: number
  externalID: string
  name: string
  name_l1: string
  name_l2: string
  slug: string
  slug_l1: string
  slug_l2: string
  nameSingular: string
  nameSingular_l1: string
  nameSingular_l2: string
}

export interface CoverPhoto {
  id: number
  externalID: string
  title?: any
  orderIndex: number
  nimaScore: number
  url: string
  main: boolean
}

export interface PhoneNumber {
  mobile: string
  phone: string
  phoneNumbers: string[]
  mobileNumbers: string[]
}

export interface License {
  number: string
  authority: string
}

export interface Logo {
  id: number
  url: string
}

export interface Agency {
  id: number
  objectID: number
  name: string
  name_l1: string
  name_l2: string
  externalID: string
  product: string
  productScore: number
  licenses: License[]
  logo: Logo
  slug: string
  slug_l1: string
  slug_l2: string
  tr: number
  tier: number
  roles: any[]
  active: boolean
  createdAt: Date
  commercialNumber?: any
  shortNumber?: any
}

export interface Verification {
  updatedAt: number
  eligible: boolean
  status: string
  verifiedAt?: any
}

export interface ExtraFields {}

export interface OwnerAgent {
  externalID: string
  name: string
  name_l1: string
  name_l2: string
  user_image?: any
  user_image_id?: any
  isTruBroker: boolean
}

export interface ReferenceNumber {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface Title {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface ExternalID {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface Name {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface Agency2 {
  name: Name
}

export interface Keyword {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface HighlightResult {
  referenceNumber: ReferenceNumber
  title: Title
  externalID: ExternalID
  agency: Agency2
  keywords: Keyword[]
}

export interface Property {
  id: number
  // ownerID: number
  // userExternalID: string
  // sourceID: number
  // state: string
  // _geoloc: Geoloc
  // geography: Geography
  // purpose: string
  price: number
  // product: string
  // productLabel: string
  // productScore: number
  // rentFrequency: string
  // referenceNumber: string
  // permitNumber: string
  // projectNumber?: any
  // title: string
  // title_l1: string
  // title_l2: string
  externalID: string
  // slug: string
  // slug_l1: string
  // slug_l2: string
  // location: Location[]
  // category: Category[]
  // createdAt: number
  // updatedAt: number
  // reactivatedAt: number
  rooms: number
  baths: number
  area: number
  // score: number
  // score_l1: number
  // score_l2: number
  coverPhoto: CoverPhoto
  // photoCount: number
  // videoCount: number
  // panoramaCount: number
  // phoneNumber: PhoneNumber
  // contactName: string
  // agency: Agency
  // hash: string
  // keywords: string[]
  isVerified: boolean
  // verification: Verification
  // verifiedScore: number
  // completionStatus: string
  // randBoostScore: number
  // randBoostScore_l1: number
  // randBoostScore_l2: number
  // floorPlanID?: any
  // furnishingStatus: string
  // extraFields: ExtraFields
  // type: string
  // ownerAgent: OwnerAgent
  // cityLevelScore: number
  // indyScore: number
  // indyScore_l1: number
  // indyScore_l2: number
  // hasMatchingFloorPlans: boolean
  // photoIDs: number[]
  // hidePrice: boolean
  // locationPurposeTier: number
  // objectID: string
  // _highlightResult: HighlightResult
}
