export default defineAppConfig({
  ui: {
    colors: {
      primary: 'black',
      neutral: 'zinc'
    },
    pageAside: {
          slots: {
            root: 'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5 lg:w-72',
            container: 'relative',
            top: 'sticky -top-8 -mt-8 pointer-events-none z-[1]',
            topHeader: 'h-8 bg-default -mx-4 px-4',
            topBody: 'bg-default relative pointer-events-auto flex flex-col -mx-4 px-4',
            topFooter: 'h-8 bg-gradient-to-b from-default -mx-4 px-4'
          }
        }
  }
})
