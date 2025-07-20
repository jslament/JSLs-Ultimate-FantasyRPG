LootJS.lootTables(event => {
    // In case players are unlucky and don't get the crucial items from the loot tables.
    // Loot modifications in kubejs because I'm lazy
    event.getLootTable("irons_spellbooks:chests/catacombs/crypt_loot").firstPool().addEntry(LootEntry.of("endrem:undead_soul").withWeight(5))
    event.getLootTable("irons_spellbooks:chests/citadel/citadel_vault").firstPool().addEntry("kubejs:molten_tablet")
    event.getLootTable("irons_spellbooks:entities/fire_boss").firstPool().addEntry("kubejs:molten_tablet")
})


AStages.addRestrictionForLoot('astages/skeleton_horse_restrict', 'skeleton_horse')
    .applyForEveryLootTableAndDrop(false)
    .restrictForEntities('skeleton_horse')
    .restrictItems('endrem:undead_soul')
    .setEntityFilter('partial')

AStages.addRestrictionForLoot('astages/citadel_keeper_restrict', 'citadel_keeper')
    .applyForEveryLootTableAndDrop(false)
    .restrictForEntities('irons_spellbooks:citadel_keeper')
    .restrictItems('kubejs:molten_tablet')
    .setEntityFilter('partial')
