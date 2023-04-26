export const mainLanguageText = (titleObject: any) => {
  if (!titleObject) {
    return 'neni'
  }
  return titleObject?.en || Object.values(titleObject)[0]
}
