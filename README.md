# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![Rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/toirant/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![Reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/toirant/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

An entry for the [make.fun bounty "The GPS Swears It Was a Shortcut"](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9): write the GPS's one-line excuse for sending the driver down the wrong road.

## The entry

> In my defense, the lake was clearly a road on my 2009 map — and you did say you wanted a shortcut, not a dry one.

113 characters, one line. The GPS, caught red-handed, blames a 2009 map and the driver's own words.

## How it works

`main.ts` (Node 22+) writes the excuse to `/output/entry.txt` and validates it in code against the bounty gate: UTF-8 text, 1 to 200 characters, a single line, not whitespace-only, no control characters, and it round-trips as UTF-8. It re-reads the file after writing and re-validates, so a write failure cannot slip through silently.

Run it:

```sh
node main.ts
cat /output/entry.txt
```
