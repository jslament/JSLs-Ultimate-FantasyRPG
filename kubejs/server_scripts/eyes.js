LootJS.lootTables(event => {
    // Starlit Eye
    event.getLootTable('eternal_starlight:entities/lonestar_skeleton').firstPool().addEntry(LootEntry.of('forbidden_arcanus:crescent_moon').matchMainHand('eternal_starlight:moonring_greatsword'))
})

    // Undead Eye
AStages.addRestrictionForLoot('astages/skeleton_horse_restrict', 'skeleton_horse')
    .applyForEveryLootTableAndDrop(false)
    .restrictForEntities('skeleton_horse')
    .restrictItems('endrem:undead_soul')
    .setEntityFilter('partial')
