import comp from './comps'

function tagGenerator (name, props) {
  const tag = document.createElement(name)
  if (props && Object.keys(props).length) {
    Object.keys(props).forEach(key => {
      tag[key] = props[key]
    })
  }
  return tag.outerHTML
}

export default function convert (origin) {
  const { name, children, props, type } = origin
  let result = ''
  switch (type) {
    case 'component':
      result = comp[name]
      break
    case 'tag':
      result = tagGenerator(name, props)
  }
  if (type === 'component' && props && Object.keys(props).length) {
    Object.keys(props).forEach(prop => {
      result = result.replace(new RegExp(`#{${prop}}`), props[prop])
    })
  }
  if (children && children.length) {
    let childrenResult = {}
    children.forEach((child, index) => {
      const { slot } = child
      childrenResult[slot] = childrenResult[slot]
        ? childrenResult[slot] + convert(child)
        : convert(child)
    })
    Object.keys(childrenResult).forEach(key => {
      result = result.replace(new RegExp(`!{${key}}`), childrenResult[key])
    })
  }
  return result
}
