/**
 * Fragile magic. Do not touch.
 *
 * Just kidding, this file is autogenerated and changes will be overwritten.
 * To update, run [npm run library:index].
 * To make changes, edit [library/write_index.js].
 */

import Badge from './elements/Badge/Badge'
import Container from './elements/Container/Container'
import Heading from './elements/Heading/Heading'
import Paragraph from './elements/Paragraph/Paragraph'

import Footer from './patterns/Footer/Footer'
import Header from './patterns/Header/Header'
import Hello from './patterns/Hello/Hello'
import Locale from './patterns/Locale/Locale'

// Export individual components
export {
  Badge,
  Container,
  Heading,
  Paragraph,
  Footer,
  Header,
  Hello,
  Locale
}

// Export as plugin
export default {
  install: function (Vue) {
    Vue.component('Badge', Badge)
    Vue.component('Container', Container)
    Vue.component('Heading', Heading)
    Vue.component('Paragraph', Paragraph)
    Vue.component('Footer', Footer)
    Vue.component('Header', Header)
    Vue.component('Hello', Hello)
    Vue.component('Locale', Locale)
  }
}
