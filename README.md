# labynode
labymod nodejs api

## Installation
`git clone https://github.com/6lyxt/labynode.git`

OR

Download the labynode.js and place it into your projects folder.

You can require it like a normal node module.

OR

You can simply install it via `npm i labynode --save`.


## Documentation
 + getStatus(callback) - gets the labymod server status
 + getCosmetics(uuid, callback) - gets the cosmetics of a player
 + getEmotes(uuid, callback) - gets the emotes of a player
 + getDailyEmotes(callback) - gets the emotes which are in the shop right now (only non labymod plus)
 + getPlusEmotes(callback) - gets the emotes which are in the shop right now (only for labymod plus)
 + getRoles(uuid, callback) - gets the players roles (e.a developer, moderator)
 + getStickers(uuid, callback) - gets the stickerpacks of a player

## Credits
 + lyxt
 + CA_CrazyS1TV
 
## Example
This example would get the Server status of LabyMod.
```
labynode.getStatus(function(status){
   console.log(status);
})
```