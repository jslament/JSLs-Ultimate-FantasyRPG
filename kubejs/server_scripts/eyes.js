LootJS.lootTables(event => {
    event.getLootTable("irons_spellbooks:chests/catacombs/crypt_loot").firstPool().addEntry("endrem:undead_soul")
})

// Server Script Folder -> file.js
AStages.addRestrictionForLoot('astages/skeleton_horse_restrict', 'skeleton_horse')
    .applyForEveryLootTableAndDrop(false)
    .restrictForEntities('skeleton_horse')
    .restrictItems('endrem:undead_soul')
    .setEntityFilter('partial');
