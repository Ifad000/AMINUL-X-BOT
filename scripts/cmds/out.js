const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "𝙖𝙢𝙞 𝙖𝙗𝙖𝙧 𝙤 𝙖𝙨𝙗𝙤 𝙗𝙗𝙮😳",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('bot leave the group', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
