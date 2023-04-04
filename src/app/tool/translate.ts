export const mainLanguageText = (titleObject: any) => {
   if(!titleObject) {
      console.log(titleObject, 'neni nikde')
      return 'neni'
   }
   return titleObject?.en || Object.values(titleObject)[0];
}
