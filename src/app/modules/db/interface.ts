export interface Dataset {
  _id: string
  status: string
  data: Data
}

export interface Data {
  country: Country
  keywords: Keyword[]
  catalog: Catalog
  subject: any[]
  language: Language2[]
  source: any
  type: Type
  temporal_resolution: any
  relation: any
  legal_base: any
  stat_unit_measure: any
  qualified_relation: any
  spatial_resource: any
  modified: any
  id: string
  issued: string
  spatial: Spatial[]
  temporal: any
  identifier: string[]
  is_version_of: any
  resource: string
  distributions: any[]
  is_referenced_by: any
  quality_meas: QualityMeas
  publisher: any
  was_generated_by: any
  page: Page[]
  has_quality_annotation: any
  spatial_resolution_in_meters: any
  catalog_record: CatalogRecord
  contact_point: any
  translation_meta: TranslationMeta
  description: Description3
  version_notes: any
  title: Title3
  has_version: any
  accrual_periodicity: any
  geocoding_description: any
  access_right: any
  provenance: Provenance[]
  categories: any[]
  adms_identifier: any
  attribute: any
  deadline: any
  qualified_attribution: any
  dimension: any
  creator: Creator
  landing_page: LandingPage[]
  version_info: any
  sample: any
  extended_metadata: any
  conforms_to: ConformsTo[]
  num_series: any
}

export interface Country {
  resource: string
  label: string
  id: string
}

export interface Keyword {
  language: string
  id: string
  label: string
}

export interface Catalog {
  country: Country2
  creator: any
  catalog: any
  is_part_of: any
  description: Description
  language: Language[]
  title: Title
  theme_taxonomy: any
  license: any
  spatial_resource: any
  rights: any
  publisher: Publisher
  modified: string
  id: string
  has_part: any
  spatial: any[]
  issued: string
  homepage: string
}

export interface Country2 {
  resource: string
  label: string
  id: string
}

export interface Description {
  en: string
}

export interface Language {
  resource: string
  id: string
  label: string
}

export interface Title {
  es: string
}

export interface Publisher {
  name: string
  type: string
  email: string
  homepage: string
}

export interface Language2 {
  resource: string
  id: string
  label: string
}

export interface Type {
  resource: string
}

export interface Spatial {
  coordinates: number[][][]
  type: string
}

export interface QualityMeas {
  scoring: number
}

export interface Page {
  title: Title2
  resource: string
  description: Description2
}

export interface Title2 {
  es: string
}

export interface Description2 {
  es: string
}

export interface CatalogRecord {
  issued: string
  modified: string
}

export interface TranslationMeta {
  full_available_languages: string[]
  details: Details
  status: string
}

export interface Details {
  de: De
  fi: Fi
  sv: Sv
  pt: Pt
  bg: Bg
  el: El
  mt: Mt
  lt: Lt
  en: En
  hr: Hr
  lv: Lv
  it: It
  fr: Fr
  hu: Hu
  es: Es
  et: Et
  cs: Cs
  sk: Sk
  sl: Sl
  ga: Ga
  pl: Pl
  ro: Ro
  da: Da
  nl: Nl
}

export interface De {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Fi {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Sv {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Pt {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Bg {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface El {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Mt {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Lt {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface En {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Hr {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Lv {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface It {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Fr {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Hu {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Es {
  issued: string
  machine_translated: boolean
  received: string
}

export interface Et {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Cs {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Sk {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Sl {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Ga {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Pl {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Ro {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Da {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Nl {
  machine_translated: boolean
  original_language: string
  received: string
  issued: string
}

export interface Description3 {
  de: string
  fi: string
  sv: string
  pt: string
  bg: string
  el: string
  mt: string
  lt: string
  en: string
  lv: string
  hr: string
  it: string
  fr: string
  hu: string
  es: string
  et: string
  cs: string
  sk: string
  sl: string
  ga: string
  pl: string
  ro: string
  da: string
  nl: string
}

export interface Title3 {
  de: string
  fi: string
  sv: string
  pt: string
  bg: string
  el: string
  mt: string
  lt: string
  en: string
  hr: string
  lv: string
  it: string
  fr: string
  hu: string
  es: string
  et: string
  cs: string
  sk: string
  sl: string
  ga: string
  pl: string
  ro: string
  da: string
  nl: string
}

export interface Provenance {
  label: string
}

export interface Creator {
  name: string
  type: string
  email: string
  homepage: string
}

export interface LandingPage {
  title: Title4
  resource: string
  description: Description4
}

export interface Title4 {
  es: string
}

export interface Description4 {
  es: string
}

export interface ConformsTo {
  label: string
}
