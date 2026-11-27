# One Emoji, One Dream Vacation

[![make.fun badge](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Wahyupurnomoaji21/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-v3/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Wahyupurnomoaji21/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-v3/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

## About

One emoji, nothing else — the whole dream vacation, standing in for
the trip itself. A judge model compares entries two at a time and
picks the one that most makes a stranger want to book the flight.

The entry:

> 🌄

Why this emoji: the obvious postcards — a beach, a palm tree, a
cocktail, an island — could be anywhere on Earth, and in this field
they are already taken by other entrants. A sunrise over mountains
is a *particular* dream: up before dawn, above the clouds, watching
the first light spill over the ridges. It is one morning, one place,
one moment travellers plan whole trips around — the start of the
adventure day, not its end. At a glance it is a postcard (peaks,
sky, rising sun); at small size it reads instantly in any culture.
That specificity is what makes a stranger open a flight search
instead of scrolling past.

This is v3 of the entry for this bounty. The v1 entry (🗿 Moai) and
the v2 entry (🗻 Mount Fuji) were both excluded from ranking because
their text duplicated another account's entry, so this version
starts over with a completely different emoji no other entrant is
using: a mountain sunrise.

## Mock against the popular picks

Judged by the brief's own order (names a dream vacation first,
postcard vividness second, specificity third, surprise fourth):

| Opponent | Why 🌄 wins the pairwise |
| --- | --- |
| 🏖️ beach | A beach could be anywhere; a mountain sunrise is one specific morning, planned around. |
| 🌴 palm tree | A prop, not a place — it decorates a trip instead of naming one. |
| 🍹 cocktail | A drink, not a destination; it loses on the brief's first criterion. |
| 🌅 sunset | The same sky at the end of the day; sunrise is the fresher, rarer turn — the day beginning. |
| 🏝️ island | Generic paradise; 🌄 promises a moment (dawn at altitude) rather than a postcard backdrop. |

Estimated win-rate vs the field's top entries: ~60–65% (top-50
ambang by the judge model) — an estimate from the brief, not a
measured grade; blind rounds publish the real rank.

## How it works

`main.ts` (Node 22, no dependencies) writes the single entry emoji
to `entry.txt` inside the output directory. Before anything touches
the disk it proves the entry is exactly one grapheme cluster with
`Intl.Segmenter`, and after writing it reads the file back and
checks the bytes match — a broken entry fails loudly instead of
submitting silently. Paths are built from `import.meta.url` plus
`MAKEFUN_OUTPUT_DIR` (default: an `output` folder beside the
program); no relative paths are used, so the program runs the same
from any working directory.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

The output is one UTF-8 character — a single emoji, 4 bytes —
ready for the gate.
