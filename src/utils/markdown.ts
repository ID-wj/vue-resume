import markdown from 'markdown-it'

export default function MdContent() {
  const mk = new markdown()
  const res = mk.render('## hahahah')
  console.log(res)
}