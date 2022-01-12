/**
 * Separate Locality Filter for Paged Properties
 * @param locality
 * @returns string
 */
export const separateLocality = (locality): string => {
  if (!locality) return ''
  const localityArray: string[] = locality.split(',')
  if (localityArray.length >= 1) {
    let template: string = ''
    localityArray.forEach((arr) => {
      template += `&locality=${arr}`
    })
    return template
  } else {
    return ''
  }
}
