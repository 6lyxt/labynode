# labynode
labymod nodejs api

## Documentation
 + getStatus(callback) - gets the labymod server status
 + getCosmetics(uuid, callback) - gets the cosmetics of a player
 
## Example
```
labynode.getStatus(function(status){
   console.log(status);
})
```
