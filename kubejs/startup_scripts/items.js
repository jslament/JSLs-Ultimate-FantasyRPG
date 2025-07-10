// Listen to item registry event
StartupEvents.registry('item', event => {
  event.create('black_pearl')
})