export default ({ filter = () => false } = {}) => ({
  name: 'remove-preloads',
  enforce: 'post',
  transformIndexHtml(html) {
    return html.replace(
      /\s*(<link rel="(?:module)?preload".*?>)\s*/gi,

      (orig, linkStr) => {
        if (filter(linkStr)) {
          return orig
        }
        console.log('\nremoving ' + linkStr)
        return ''
      }
    )
  },
})
