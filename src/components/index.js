import VueRecordAudio from './VueRecordAudio'
import VueRecordVideo from './VueRecordVideo'

export {
  VueRecordAudio,
  VueRecordVideo
}

export default function install(Vue) {
  Vue.component('VueRecordAudio')
  Vue.component('VueRecordVideo')
}
