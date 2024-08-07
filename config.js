const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918089418033";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_42_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklIcERZRU5TRGZpa25oMzQvT2xHbFJkRlczWm1tMVVBamtHeldJSHB3MWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxpWG9nbl9aVE9lRU5EOW42aUZJVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU1OGNmZDAtZjljMy00NDI2LThhMTItMjU0ZWJmNWMzMzhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDI1MixcbiAgICAgIDE5NyxcbiAgICAgIDE3MSxcbiAgICAgIDk1LFxuICAgICAgMTIzLFxuICAgICAgMjMwLFxuICAgICAgMTIxLFxuICAgICAgMTk2LFxuICAgICAgODgsXG4gICAgICAxMTcsXG4gICAgICAxNzMsXG4gICAgICAzMSxcbiAgICAgIDU2LFxuICAgICAgNTUsXG4gICAgICAyMDMsXG4gICAgICAyMDcsXG4gICAgICAxNDAsXG4gICAgICAyNDUsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgNjQsXG4gICAgICAxMjcsXG4gICAgICAxNTAsXG4gICAgICAxOTgsXG4gICAgICAyNDgsXG4gICAgICAyMDEsXG4gICAgICA5MSxcbiAgICAgIDEwOCxcbiAgICAgIDQxLFxuICAgICAgOTEsXG4gICAgICAzNSxcbiAgICAgIDYsXG4gICAgICAwLFxuICAgICAgMTAwLFxuICAgICAgMjA1LFxuICAgICAgMjQwLFxuICAgICAgNixcbiAgICAgIDEzNyxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWEZQVFc3N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MDg5NDE4MDMzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2bqyBcXG5cXG5cXG5cXG5cXG7wnZulXFxuXFxuXFxuXFxuXFxu8J2RhSBcXG5cXG5cXG5cXG5cXG7wnZuqIFxcblxcblxcblxcblxcbvCdkYwgXFxuXFxuXFxuXFxuXFxu8J2RiCBcXG5cXG5cXG5cXG5cXG7wnZC6IFxcblxcblxcblxcblxcbvCdm6VcXG5cXG5cXG5cXG5cXG7wnZuuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2RvyDwnZuvIPCdkYVcIixcbiAgICBcImxpZFwiOiBcIjE3ODkzMzcwNjI2MjE5OjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DdG1oNFEwSkxNdFFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZXVzZDlDQmhpR29kUVpXU3E2YUJtS1VOYjYzKzQyOUx1VDZFWjdZaHV5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoWDNrY3ZXelRUNUJSUjVFQjl6YmFwbEJETVBLamtiVzJlclAxL0JmOEdna2tPNVRTazBNdXo0ejJUbEtOeXZ1dVVqSERWdFBIOHZaMGxCOGd2MzlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuVkd5UTk3WXNJdnlGMmpNU0hTN2ZXaGNkTjQ2NXNoYndNeTZmeVB5SG1vRzdPRm9qRkFIYlkwOS9oY3prUzU3aXZGZWYzemtXMTJ1TUppVFFUdWNDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgwODk0MTgwMzM6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAwOTM2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBxV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHFXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN29CdGpXRUtwZFFkZkxzb0xYMWxuQVBEcS9pSXFKMkZYMnRtd0Q1Wk9nND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzM0NjM2NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "／𝛫𝛂𝛎𝛊𝛄𝛖𝛗𝛂𝛈 ꭗ𝝐𐑾 💌",
  ownername:process.env.OWNER_NAME|| "𝜜𝜿𝜶𝜹ի ꭗ𝝐𐑾 💌",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
