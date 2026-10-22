export interface LocationDetails {
  name: string
  address: string
  mapUrl: string
}

export const LOCATIONS: Record<'church' | 'reception', LocationDetails> = {
  church: {
    name: 'Serengeti Chapel',
    address: '123 Wilderness Way, Serengeti',
    // mapUrl: 'https://maps.google.com/?q=Serengeti+Chapel',
    mapUrl: 'https://www.google.com/maps/place//@14.2931484,120.802968,19.5z/data=!4m6!1m5!3m4!2zMTTCsDE3JzM2LjMiTiAxMjDCsDQ4JzEwLjMiRQ!8m2!3d14.293407!4d120.802855?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
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