![](/Web/background.jpg)
# Overwatch API
Check a player's data and any hero info using this API!

## Introduction
This documentation will help you get familiar with the resources of the **Overwatch API** and show you how to make different queries, so that you can get the most out of it.

## Rate limit
The **Overwatch API** is an open API, no authentication is required for use. There is not limit yet, but it is going to be implement down the road to prevent malicious attempts.

## Rest
**Base url:** __https://best-overwatch-api.herokuapp.com__

The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.

*Sample request*
```URL
https://best-overwatch-api.herokuapp.com/
```
```JSON
{
  "allHeroes": "https://best-overwatch-api.herokuapp.com/heroes",
  "player": "https://best-overwatch-api.herokuapp.com/player"
}
```

There are currently two avaliable resources:
* __Heroes__: used to get all heroes data.
* __Player__: used to lookup a real player's data.

## Heroes
There is a total of 24 heroes sorted by a tag.
### Hero Schema
| Key                | Type         | Description                         | Available for all |
|--------------------|--------------|-------------------------------------|-------------------|
| tag                | int          | The tag of the hero                 | True              |
| name               | String       | The hero's *hero* name            | True              |
| description        | String       | The description of the hero         | True              |
| health             | Int          | The hero's base health amount       | True              |
| armor              | Int          | The hero's base armor amount        | True              |
| shield             | Int          | The hero's base shield amount       | True              |
| real_name          | String       | The hero's real name                | True              |
| age                | Int          | The hero's age                      | False             |
| height             | Int          | The hero's height                   | False             |
| affiliation        | String       | The hero's agency affiliations      | False             |
| base_of_operations | String       | The hero's base of operations       | False             |
| difficulty         | Int          | The hero's game mechanic difficulty | True              |
| url                | String (url) | The URL to __GET__ the hero's info  | True              |

### Get all Heroes
You can access the list of heroes by using the ```/heroes``` endpoint.

```URL
https://best-overwatch-api.herokuapp.com/heroes
```
```JSON
[
  {
    "_id":"5c777e12da0ed7051a3325ea", // Irrelevant
    "tag":1,"name":"Ana","description":"Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her stagearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.",
    "health":"200",
    "armour":"0",
    "shield":"0",
    "real_name":"Ana Amari",
    "age":"60",
    "height":null,
    "affiliation":"Overwatch",
    "base_of_operations":"Cairo, Egypt",
    "difficulty":"3",
    "url":"https://best-overwatch-api.herokuapp.com/heroes/1"
  },
  // ...
]
```
### Get a single character
You can get a single hero by adding the tag as a parameter: ```/heroes/2```

```URL
https://best-overwatch-api.herokuapp.com/heroes/2
```
```JSON
[
  {
    "_id":"5c777e12da0ed7051a3325eb",
    "tag":2,
    "name":"Bastion",
    "description":"Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.",
    "health":"200",
    "armour":"100",
    "shield":"0",
    "real_name":"SST Laboratories Siege Automaton E54",
    "age":"30",
    "height":"220",
    "affiliation":null,
    "base_of_operations":null,
    "difficulty":"1",
    "url":"https://best-overwatch-api.herokuapp.com/heroes/2"
  }
]
```
![](https://media.giphy.com/media/2yqYbPakQKDFhNZbW9/giphy.gif)

## Player
You can lookup any player, on any platform and in any region! The catch? You need to know the player's platform, region and *Battle name*. Furthermore, the account needs to be public for you to see *all* their stats.

## Player Schema
The player needs to have the account [set to public](https://dotesports.com/overwatch/news/ow-public-private-profile-25347) to show all this data. If the data is not available, some parameters are going to be `null`.

| Key         | Type         | Description                                                           |
|-------------|--------------|-----------------------------------------------------------------------|
| username    |    string    | The Player's in game username                                         |
| level       |      int     | The Player's in game level                                            |
| portrait    | string (url) | The Player's in game portrait                                         |
| endorsement |  dictionary  | The Player's scoring based on other players' rating                   |
| private     |     bool     | The Player's account status (needs to be public to display game data) |
| games       | dictionary   | The Player's game stats                                               |
| playtime    | dictionary   | The Player's play time in different game modes                        |
| competitive | dictionary   | The player's current competitive mode rank                            |
| levelFrame  | string (url) | The Player's level frame                                              |
| star        | string (url) | The Player's stars                                                    |

## Get Player
To find a player your will need to provide three pieces of information:
* `Platform` - Platform of user. `pc`, `xbl`, `psn`
* `Region` - Region of player. `us`, `eu`, `kr`, `cn`, `global`
* `Tag` - BattleTag of user. Replace `#` with `-`. If the BattleTag is GamersCCCP#1569, use `GamersCCCP-1569`

The request should look like:
</br>
`BASE URL`/player/`Platform`/`Region`/`Tag`
```URL
https://best-overwatch-api.herokuapp.com/player/pc/us/GamersCCCP-1569
```

```JSON
{
  "username":"GamersCCCP",
  "level":302,
  "portrait":"https://d15f34w2p8l1cc.cloudfront.net/overwatch/e36f276e2514188c07bf5f53c30b4ed62dda9f8020a36ab2e2fcc35b87a024f9.png",
  "endorsement":
  {
    "sportsmanship":
    {
      "value":0.16,
      "rate":16
    },
    "shotcaller":
    {
      "value":0.23,
      "rate":23
    },
    "teammate":
    {
      "value":0.61,
      "rate":61
    },
      "level":3,
      "frame":"https://d3hmvhl7ru3t12.cloudfront.net/svg/icons/endorsement-frames-aa182c1f63b51afa951daec63595791283ab97ea3a07f8d47abf9dc7aeda5cc67c786041042de0b8e427194ed084f7cee6b56fa984532199e7ea95bc12bbd995.svg#_3",
      "icon":"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB3aWR0aD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9IiMyYTJiMmUiIHN0cm9rZS1kYXNoYXJyYXk9IjIzIDc3IiBzdHJva2UtZGFzaG9mZnNldD0iMjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjZjE5NTEyIiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iNjEgMzkiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMDIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjYzgxYWY1IiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYgODQiIHN0cm9rZS1kYXNob2Zmc2V0PSI0MSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM0MGNlNDQiIGN4PSI1MCUiIGN5PSI1MCUiPjwvY2lyY2xlPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9ImNlbnR1cnkgZ290aGljLGFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSIzMDAiIGZvbnQtc2l6ZT0iMTYiIHN0cm9rZT0iI2Y2ZjZmNiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZjZmNmY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg=="
  },
  "private":false,
  "games":
  {
    "quickplay":
    {
      "won":951
    },
    "competitive":
    {
      "won":2,
      "lost":3,
      "draw":0,
      "played":5,
      "win_rate":null
    }
  },
  "playtime":
  {
    "quickplay":"239:16:47",
    "competitive":"01:04:36"
  },
  "competitive":
  {
    "rank":null,
    "rank_img":null
  },
  "levelFrame":" https://d15f34w2p8l1cc.cloudfront.net/overwatch/1055f5ae3a84b7bd8afa9fcbd2baaf9a412c63e8fe5411025b3264db12927771.png ",
  "star":" https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a2c852a16043f613b7bfac33c8536dd9f9621a3d567174cb4ad9a80e3b13102.png "
}
```
![](https://media.giphy.com/media/eKEcSbidrZUB2/giphy.gif)
