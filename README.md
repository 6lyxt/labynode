# labynode
labymod nodejs api

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
