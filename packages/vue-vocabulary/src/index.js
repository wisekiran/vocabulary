/**
 * Fragile magic. Do not touch.
 *
 * Just kidding, this file is autogenerated and changes will be overwritten on
 * the next build. To make changes, edit [library/build.js].
 */

import SlotRenderer from './utils/SlotRenderer/SlotRenderer'

import Tabs from './layouts/Tabs/Tabs'
import Tab from './layouts/Tabs/Tab'
import Table from './layouts/Table/Table'
import TableCell from './layouts/Table/TableCell'

import Button from './elements/Button/Button'
import DonateButton from './elements/DonateButton/DonateButton'

import Footer from './patterns/Footer/Footer'
import Header from './patterns/Header/Header'
import Locale from './patterns/Locale/Locale'

// Export individual components
export {
  SlotRenderer,

  Tabs,
  Tab,
  Table,
  TableCell,

  Button,
  DonateButton,

  Footer,
  Header,
  Locale
}

// Export as plugin
export default {
  install: function (Vue) {
    Vue.component('SlotRenderer', SlotRenderer)

    Vue.component('Tabs', Tabs)
    Vue.component('Tab', Tab)
    Vue.component('Table', Table)
    Vue.component('TableCell', TableCell)

    Vue.component('Button', Button)
    Vue.component('DonateButton', DonateButton)

    Vue.component('Footer', Footer)
    Vue.component('Header', Header)
    Vue.component('Locale', Locale)
  }
}
