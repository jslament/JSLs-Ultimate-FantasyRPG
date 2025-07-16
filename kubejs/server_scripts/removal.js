ServerEvents.recipes(event => {
    // Might use constants for item IDs in the future but for now, using strings directly
    event.remove({ output: 'hazennstuff:deus_essence' })
});