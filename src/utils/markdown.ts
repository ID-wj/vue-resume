import markdown from 'markdown-it'

export default function MdContent(str: string) {
  const mk = new markdown({
    highlight: function(str, lang) {
      console.log(str, lang)
      return ''
    }
  })
  mk.core.ruler.push('new-rule', (state) => {
    console.log(state)
    return true
  })
  const res = mk.render(str)
  // console.log(res)
  return res
}