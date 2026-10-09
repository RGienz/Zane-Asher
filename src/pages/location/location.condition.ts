export interface LocationDetails {
  name: string
  address: string
  mapUrl: string
}

export const LOCATIONS: Record<'church' | 'reception', LocationDetails> = {
  church: {
    name: 'Serengeti Chapel',
    address: '123 Wilderness Way, Serengeti',
    mapUrl: 'https://maps.google.com/?q=Serengeti+Chapel',
  },
  reception: {
    name: 'Mara Marquee',
    address: '456 Savannah Grove, Mara',
    mapUrl: 'https://maps.google.com/?q=Mara+Marquee',
  },
}


export const handleOpenMap = (mapUrl: string): void => {
  if (mapUrl) {
    window.open(mapUrl, '_blank', 'noopener,noreferrer')
  }
}