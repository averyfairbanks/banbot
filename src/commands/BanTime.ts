import {
  BaseCommandInteraction,
  Client,
  Collection,
  GuildMember,
} from "discord.js";
import { Command } from "../Command";
import { bannableGames } from "../resources/bannable-games";

export const BanTime: Command = {
  name: "bantime",
  description: "Bans any user playing league",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "HERE I COME";

    const guild = client.guilds.cache.get("938599876198019083");
    await guild?.members.fetch();

    const users = await guild?.members.cache;
    const banList = users ? buildBanList(users) : null;

    if (banList) banUsers(banList);

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

function buildBanList(users: Collection<string, GuildMember>) {
  let banList: GuildMember[] = [];

  users?.forEach((member) => {
    // for debugging
    console.log(member.user.username);

    const game = member.presence?.activities.filter(
      (act) => act.type === "PLAYING"
    )[0]?.name;

    bannableGames.forEach((bannableGame) => {
      if (game?.toLowerCase().toString() === bannableGame) {
        banList.push(member);
      }
    });
  });

  return banList;
}

function banUsers(banList: GuildMember[]) {
  banList.forEach((memToBan) => {
    memToBan.ban({ days: 7, reason: "Play better games" });
  });
}
