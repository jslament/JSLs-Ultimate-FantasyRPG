// Listen to item registry event
StartupEvents.registry('item', event => {
  event.create('black_pearl')
  event.create('desert_rose')
  event.create('pharaohs_mask')
  event.create('wither_ribcage')
})

