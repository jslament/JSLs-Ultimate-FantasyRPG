// General Recipe Modifications
ServerEvents.recipes(event => {
    // Might use constants for item IDs in the future but for now, using strings directly
    event.blasting('hazennstuff:deus_essence', 'minecraft:nether_star')
    event.blasting('5x hazennstuff:deus_essence', 'irons_spellbooks:divine_soulshard')
});

// Astages
// Dimension Contorl
AStages.addRestrictionForDimension("astages/nether_restrict", "nether", "minecraft:the_nether")