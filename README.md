# AFL Team Guess V3

This version changes the guessing system so autocomplete searches the **entire historical player pool**, not the selected team's list. The selected team is checked only after the player is chosen.

Important: this is a prototype master-data pool, not yet a complete every-player-ever dataset. The game architecture is ready for a complete AFL/VFL player export to replace `ALL_PLAYERS`.

Sources used for the data design:
- AFL.com.au current 18 club lists
- AFL Tables all-time and 2026 player statistics

Difficulty is calculated automatically from career games:
100+ Common, 50-99 Uncommon, 20-49 Rare, 5-19 Legendary, 0-4 Unicorn.
