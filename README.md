# banbot
discord bot that will check currently played games against a list of games that are a bannable offense and ban those users playing any of them.

# to run
1. create a .env file with the value TOKEN=<token>, replacing <token> with the value you get from following this guide: https://www.writebots.com/discord-bot-token/

2. run `yarn install` to install dependencies, then `yarn start` to boot up (console should read "BanBot is revving up..." and "BanBot is online"

3. then create a OAuth2 URL from the OAuth2 URL Generator in the bot options under applications

4. invite banbot with admin privileges, then call /bantime when you see someone playing trash

#addendum
under src/resources/bannable-games.ts you can add games you want to ban based off of as the name of the game as it appears in discord but completely lower case!
