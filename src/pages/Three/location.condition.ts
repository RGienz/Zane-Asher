export interface LocationDetails {
  name: string
  address: string
  mapUrl: string
}

export const LOCATIONS: Record<'church' | 'reception', LocationDetails> = {
  church: {
    name: 'Serengeti Chapel',
    address: '123 Wilderness Way, Serengeti',
    mapUrl: 'https://www.google.com/maps/place/14%C2%B017\'36.3%22N+120%C2%B048\'10.3%22E/@14.293407,120.802855,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.293407!4d120.802855?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
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