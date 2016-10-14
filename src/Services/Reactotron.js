if (__DEV__) {
  const { default: Reactotron, trackGlobalErrors } = require('reactotron-react-native')
  Reactotron
    .configure({ name: 'NuClone' })
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
    }))
    .connect()

  console.tron = Reactotron
}
