LootJS.modifiers((event) => {
    // Common
    event
        .addTableModifier(/(minecraft:chests.*|mowziesmobs:chests.*|nova_structures:chests.*|revampedvillages:.*|skyvillages:chests.*|trek.*|)/)
        .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([3, 7]).randomChance(0.15));

    // Uncommon
    event
        .addTableModifier(/(minecraft:chests\/(shipwreck|bastion).*|irons_spellbooks:chests.*|dungeons_arise:chests.*|adventuredungeons:chests.*|takesapillage:chests.*|eternal_starlight:chests.*|ati_structures:.*|bosses_of_mass_destruction:chests.*)/)
        .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([4, 10]).randomChance(0.60));

    // Rare
    event
        .addTableModifier(/(minecraft:chests\/(ancient_city|end_city).*|betterfortresses:chests.*|alshanex_familiars:chests\/summoner_lab\/treasure|nova_structures:chests\/end_castle)/)
        .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([7, 12]));

    // Epic
    event
        .addTableModifier(/cataclysm:chests\/.*/)
        .addLoot(LootEntry.of("magic_coins:gold_coin").setCount([1, 3]));
});