ServerEvents.recipes(event => {
    // Might use constants for item IDs in the future but for now, using strings directly
    event.remove({ output: 'hazennstuff:deus_essence' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_omega_tier' })

    // Remove by ID
    event.remove({ id: 'hazennstuff:crafting/materials/divine_mold' })
})