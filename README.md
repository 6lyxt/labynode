# labynode
labymod nodejs api

## Installation
Download the labynode.js and place it into your projects folder. 
You can require it like a normal node module.

## Documentation
 + getStatus(callback) - gets the labymod server status
 + getCosmetics(uuid, callback) - gets the cosmetics of a player
 
## Example
This example would get the Server status of LabyMod.
```
labynode.getStatus(function(status){
   console.log(status);
})
```