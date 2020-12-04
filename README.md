# labynode
labymod nodejs wrapper

## Installation
You can simply install it via `npm i labynode --save`.


## Documentation
 + getStatus(callback) - gets the labymod server status
 + getCosmetics(uuid, callback) - gets the cosmetics of a player
 + getEmotes(uuid, callback) - gets the emotes of a player
 + getDailyEmotes(callback) - gets the emotes which are in the shop right now
 + getShopEmotes(type, callback) - gets the emotes out of the shop. (Type can be `user`, `plus` or `all`)
 + getRoles(uuid, callback) - gets the players roles (e.a developer, moderator)
 + getStickers(uuid, callback) - gets the stickerpacks of a player

## Credits
 + lyxt
 + CA_CrazyS1TV
 
## Examples
This example would get the Server status of LabyMod.
```
labynode.getStatus(function(status){
   console.log(status);
})
```

This one would get you the cosmetics of an user.
```
labynode.getCosmetics("03094341-36dd-4093-9889-a7a4cc02f108, function(cosmetics){
    console.log(cosmetics);
 })
```
