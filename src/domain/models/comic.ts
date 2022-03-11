export type ThumbVariant =
  | 'portrait_medium'
  | 'portrait_xlarge'
  | 'portrait_fantastic'
  | 'portrait_uncanny'
  | 'landscape_xlarge'

type Url = {
  type: string
  url: string
}

type Description = {
  type: string
  language: string
  text: string
}

export type Thumbnail = {
  path: string
  extension: string
}

export type Comic = {
  id: number
  title: string
  textObjects: Description[]
  resourceURI: string
  thumbnail: Thumbnail
  urls: Url[]
}
