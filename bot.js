// LIBRARIES
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

// IMPORTED VARIABLES
const config = require('./config.json');

// LOG IN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.token);

// COMMANDS
client.on('message', msg => {
	// CHECK FOR PREFIX, AND MAKE SURE IT'S NOT FROM BOT
	if(!msg.content.startsWith(config.prefix) || msg.author.bot) return;
	
	// CONFIGURE COMMAND AND ARGUMENT SPLIT
	const args = msg.content.slice(config.prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	if(command === `help`)
	{
		msg.channel.send(`\n\
\`youtube\` - View LTEDTX's YouTube channel.\n\
\`soundcloud\` - View LTEDTX's SoundCloud page.\n\
\`bandcamp\` - View LTEDTX's Bandcamp page.\n\
\`website\` - View LTEDTX's website.\n\
\`awesomeness\` - View the glorious profile picture in HD.\n\
\`musiclist\` - View a list of musical pieces from composers in the discord server.`);
	}

	if(command === `youtube`)
	{
		msg.channel.send(`https://www.youtube.com/channel/UC6Tz_AejMNuWv7tQJC1qPPg`);
	}

	if(command === `soundcloud`)
	{
		msg.channel.send(`https://soundcloud.com/logan-esper`);
	}

	if(command === `bandcamp`)
	{
		msg.channel.send(`https://ltedtx.bandcamp.com`);
	}

	if(command === `website`)
	{
		msg.channel.send(`https://ltedtx.wordpress.com/`);
	}

	if(command === `awesomeness`)
	{
		const embed = {
			image: {
				"url": "https://i.imgur.com/Lh0IzHY.png"
			}
		}

		msg.channel.send("", {embed});
	}

	if(command === `crossroads`)
	{
		const embed = {
			title: "A Journey's Crossroads",
			description: "[Album by LTEDTX](https://ltedtx.bandcamp.com/album/a-journeys-crossroads)",
			thumbnail: {
				"url": "https://f4.bcbits.com/img/a3745162740_16.jpg"
			},
			fields:[
				{
					"name": "1",
					"value": "[授業が始まるよ -morning spirit!-](https://ltedtx.bandcamp.com/track/morning-spirit)"
				},
				{
					"name": "2",
					"value": "[どれにしようかな -here in this place-](https://ltedtx.bandcamp.com/track/here-in-this-place)"
				},
				{
					"name": "3",
					"value": "[矜持にかけて -I'll make a deal with you!!-](https://ltedtx.bandcamp.com/track/ill-make-a-deal-with-you)"
				},
				{
					"name": "4",
					"value": "[チビチビ言うな～! -Live up to It!-](https://ltedtx.bandcamp.com/track/live-up-to-it)"
				},
				{
					"name": "5",
					"value": "[初めて感じた屈辱 -happens once in a while...-](https://ltedtx.bandcamp.com/track/happens-once-in-a-while)"
				},
				{
					"name": "6",
					"value": "[心に秘めた固い決意 -melodic Interval-](https://ltedtx.bandcamp.com/track/melodic-interval)"
				},
				{
					"name": "7",
					"value": "[幼なじみ -looking back-](https://ltedtx.bandcamp.com/track/looking-back)"
				},
				{
					"name": "8",
					"value": "[お気楽一人旅 -Love or Learn?-](https://ltedtx.bandcamp.com/track/love-or-learn)"
				},
				{
					"name": "9",
					"value": "[魔王の居城 -running through the times-](https://ltedtx.bandcamp.com/track/running-through-the-times)"
				},
				{
					"name": "10",
					"value": "[大事な人を守るため -To Do or​.​.​.​- (ver.2.0)](https://ltedtx.bandcamp.com/track/to-do-or-ver-20)"
				},
				{
					"name": "11",
					"value": "[そして二人は・・・ -into the Next Chapter-](https://ltedtx.bandcamp.com/track/into-the-next-chapter)"
				}
			]
		}
		msg.channel.send("", {embed});
	}

	if(command === `transcendence`)
	{
		const embed = {
			title: "The Best of Capture Self-transcendence",
			description: "[Album by LTEDTX](https://ltedtx.bandcamp.com/album/the-best-of-capture-self-transcendence)",
			thumbnail: {
				"url": "https://f4.bcbits.com/img/a2782321501_16.jpg"
			},
			fields:[
				{
					"name": "1",
					"value": "[Decision Bell -turning point- (ver.2.0) / 聖剣伝説3](https://ltedtx.bandcamp.com/track/decision-bell-turning-point-ver-20-3-2)"
				},
				{
					"name": "2",
					"value": "[迷いの森 -the DEMON_LTE_AWAKENS- / FINAL FANTASY VI](https://ltedtx.bandcamp.com/track/the-demon-lte-awakens-final-fantasy-vi-2)"
				},
				{
					"name": "3",
					"value": "[クリスタルタワー -REDEXplosion(GtODmix)- / FINAL FANTASY III](https://ltedtx.bandcamp.com/track/redexplosion-gtodmix-final-fantasy-iii-2)"
				},
				{
					"name": "4",
					"value": "[エドガーのテーマ -痛快YRmix- / FINAL FANTASY VI](https://ltedtx.bandcamp.com/track/yrmix-final-fantasy-vi-2)"
				},
				{
					"name": "5",
					"value": "[ワールド7 -minus World- / New スーパーマリオブラザーズ](https://ltedtx.bandcamp.com/track/7-minus-world-new-2)"
				},
				{
					"name": "6",
					"value": `[Hightension Wire -HRCTF-Facelessness - / 聖剣伝説3](https://ltedtx.bandcamp.com/track/hightension-wire-hrctf-facelessness-3-2)`
				},
				{
					"name": "7",
					"value": `[スカルマンステージ -Type LTEXplosion - / ロックマン4](https://ltedtx.bandcamp.com/track/type-ltexplosion-4-2)`
				},
				{
					"name": "8",
					"value": "[更に闘う者達 -GUESS ver.- / FINAL FANTASY VII](https://ltedtx.bandcamp.com/track/guess-ver-final-fantasy-vii-2)"
				},
				{
					"name": "9",
					"value": "[Streamworks -CURSED_PIANO_HR ver.- / シャンティ～海賊の呪い～](https://ltedtx.bandcamp.com/track/streamworks-cursed-piano-hr-ver-2)"
				},
				{
					"name": "10",
					"value": "[you -Spirited near- / ひぐらしのなく頃に解](https://ltedtx.bandcamp.com/track/you-spirited-near-2)"
				}
			]
		}

		msg.channel.send('', {embed});
	}

	if(command === `brightnesstwilight`)
	{
		const embed = {
			title: "Brightness Twilight REMASTERED",
			description: "[Album by LTEDTX](https://ltedtx.bandcamp.com/album/brightness-twilight-remastered)",
			thumbnail: {
				"url": "https://f4.bcbits.com/img/a0769228625_16.jpg"
			},
			fields:[
				{
					"name": "1",
					"value": "[授業中 -既視感Lesson- / 雫～しずく～](https://ltedtx.bandcamp.com/track/lesson-2)"
				},
				{
					"name": "2",
					"value": "[Guri Guri -OP mix- / グリーン・グリーンTV](https://ltedtx.bandcamp.com/track/guri-guri-op-mix-tv)"
				},
				{
					"name": "3",
					"value": "[Dancing DisGt Rap Battle!!! (ver.3.0) / オリジナル](https://ltedtx.bandcamp.com/track/dancing-disgt-rap-battle-ver-30)"
				},
				{
					"name": "4",
					"value": "[鉄華 討ち果て 朽ち果て -Begets away!!- / 新・世界樹の迷宮](https://ltedtx.bandcamp.com/track/begets-away-2)"
				},
				{
					"name": "5",
					"value": "[Elegant Summer -JAZZ HR ver.3.0- / MELTY BLOOD](https://ltedtx.bandcamp.com/track/elegant-summer-jazz-hr-ver-30-melty-blood)"
				},
				{
					"name": "6",
					"value": "[As Time Goes On and On -Acoustic ver.- / オリジナル](https://ltedtx.bandcamp.com/track/as-time-goes-on-and-on-acoustic-ver-2)"
				},
				{
					"name": "7",
					"value": "[冬の花火 -my schoolsアレンジver.- / Kanon](https://ltedtx.bandcamp.com/track/my-schools-ver-kanon-2)"
				},
				{
					"name": "8",
					"value": "[スト3 -Strike all night mix- / 痕～きずあと～](https://ltedtx.bandcamp.com/track/3-strike-all-night-mix-2)"
				},
				{
					"name": "9",
					"value": "[DARDANDIS -XTRONE- / 風の伝説ザナドゥ](https://ltedtx.bandcamp.com/track/dardandis-xtrone-2)"
				},
				{
					"name": "10",
					"value": "[Crossroads of Separation -Brightness awakening- / グリーン・グリーンTV](https://ltedtx.bandcamp.com/track/crossroads-of-separation-brightness-awakening-tv-2)"
				},
				{
					"name": "11",
					"value": "[秘匿されたフォーシーズンズ -Seasonal nostalgia- / 東方天空璋](https://ltedtx.bandcamp.com/track/seasonal-nostalgia-2)"
				},
				{
					"name": "12",
					"value": "[稲田姫様に叱られるから -Autumn Fall- / 東方風神録](https://ltedtx.bandcamp.com/track/autumn-fall-2)"
				},
				{
					"name": "13",
					"value": "[バトル2 (Beat Them Up!) -SHDisGTmix- / ロマンシング サ・ガ](https://ltedtx.bandcamp.com/track/2-beat-them-up-shdisgtmix-2)"
				},
				{
					"name": "14",
					"value": "[かいぞくのウォーターランド -the FLYING BOWSER- / スーパーマリオ64](https://ltedtx.bandcamp.com/track/the-flying-bowser-64-2)"
				}
			]
		}

		msg.channel.send("", {embed});
	}

	if(command === `skyrockettoharmony`)
	{
		embed = {
			title: "Skyrocket to Harmony",
			description: "[Album by LTEDTX](https://ltedtx.bandcamp.com/album/skyrocket-to-harmony)",
			thumbnail: {
				"url": "https://f4.bcbits.com/img/a2612680974_10.jpg"
			},
			fields:[
				{
					"name": "1",
					"value": "[Persistent Rampage / オリジナル](https://ltedtx.bandcamp.com/track/persistent-rampage)"
				},
				{
					"name": "2",
					"value": "[秘匿されたフォーシーズンズ -Seasonal nostalgia- (SC-55 ver.) / 東方天空璋](https://ltedtx.bandcamp.com/track/seasonal-nostalgia-sc-55-ver)"
				},
				{
					"name": "3",
					"value": "[プラスチックマインド -Mindworld- / 東方怪綺談](https://ltedtx.bandcamp.com/track/mindworld)"
				},
				{
					"name": "4",
					"value": "[Striving for Mentality / オリジナル](https://ltedtx.bandcamp.com/track/striving-for-mentality)"
				},
				{
					"name": "5",
					"value": "[人形裁判 -Judgement Day- / 東方妖々夢](https://ltedtx.bandcamp.com/track/judgement-day)"
				},
				{
					"name": "6",
					"value": "[Time to Face Your Fears / オリジナル](https://ltedtx.bandcamp.com/track/time-to-face-your-fears)"
				},
				{
					"name": "7",
					"value": "[ラクトガール -魔法図書館mix- (short ver.) / 東方紅魔郷](https://ltedtx.bandcamp.com/track/mix-short-ver)"
				},
				{
					"name": "8",
					"value": "[Adventure Awaits On Every Shrine / オリジナル](https://ltedtx.bandcamp.com/track/adventure-awaits-on-every-shrine)"
				},
				{
					"name": "9",
					"value": "[少女綺想曲 -mesmerize Story- / 東方永夜抄](https://ltedtx.bandcamp.com/track/mesmerize-story)"
				},
				{
					"name": "10",
					"value": "[恋色マスタースパーク -Master struck- / 東方永夜抄](https://ltedtx.bandcamp.com/track/master-struck)"
				},
				{
					"name": "11",
					"value": "[古の冥界寺 -first resonation- / 蓮台野夜行](https://ltedtx.bandcamp.com/track/first-resonation)"
				},
				{
					"name": "12",
					"value": "[My Maid, Sweet Maid -dear my friend- / 稀翁玉～きおうぎょく～](https://ltedtx.bandcamp.com/track/my-maid-sweet-maid-dear-my-friend)"
				},
				{
					"name": "13",
					"value": "[World Destruction -Hard realization mix- / 東方怪綺談](https://ltedtx.bandcamp.com/track/world-destruction-hard-realization-mix)"
				},
				{
					"name": "14",
					"value": "[平安のエイリアン -Dream Alarm- (short ver.) / 東方星蓮船](https://ltedtx.bandcamp.com/track/dream-alarm-short-ver)"
				},
				{
					"name": "15",
					"value": "[Love in the Dark -bottom~UP!!~mix- / 東方紅魔郷](https://ltedtx.bandcamp.com/track/love-in-the-dark-bottom-up-mix)"
				},
				{
					"name": "16",
					"value": "[華のさかづき大江山 -FIRST ver.- / 東方地霊殿](https://ltedtx.bandcamp.com/track/first-ver)"
				},
				{
					"name": "17",
					"value": "[Reflections -remix- / 東方花映塚](https://ltedtx.bandcamp.com/track/reflections-remix)"
				},
				{
					"name": "18",
					"value": "[稲田姫様に叱られるから -Autumn Fall- (SC-55 ver.) / 東方風神録](https://ltedtx.bandcamp.com/track/autumn-fall-sc-55-ver)"
				},
				{
					"name": "19",
					"value": "[Dancing Demon Realm (Type OmegaGMGS2) / オリジナル](https://ltedtx.bandcamp.com/track/dancing-demon-realm-type-omegagmgs2)"
				},
				{
					"name": "20",
					"value": "[チルノ・⑨・バカメドレー！！！！！！！！！ / 東方紅魔郷](https://ltedtx.bandcamp.com/track/-)"
				}
			]
		}

		msg.channel.send('', {embed});
	}

	if(command === `upliftingtranquility`)
	{
		embed = {
			title: "Hope of Uplifting Tranquility",
			description: "[Album by LTEDTX](https://ltedtx.bandcamp.com/album/hope-of-uplifting-tranquility)",
			thumbnail: {
				"url": "https://f4.bcbits.com/img/a0650996167_10.jpg"
			},
			fields:[
				{
					"name": "1",
					"value": "[Heartfelt Arms Open / オリジナル](https://ltedtx.bandcamp.com/track/heartfelt-arms-open)"
				},
				{
					"name": "2",
					"value": "[バブルマンステージ -Bubble of dreaming- / ロックマン2](https://ltedtx.bandcamp.com/track/bubble-of-dreaming-2)"
				},
				{
					"name": "3",
					"value": "[Live Your Life to the Skies / オリジナル](https://ltedtx.bandcamp.com/track/live-your-life-to-the-skies)"
				},
				{
					"name": "4",
					"value": "[スラム・シャッフル -down in the Rain- / FINAL FANTASY VI](https://ltedtx.bandcamp.com/track/down-in-the-rain-final-fantasy-vi)"
				},
				{
					"name": "5",
					"value": "[STAFF ROLL 1 -everlasting remembrances- / ロックマン11](https://ltedtx.bandcamp.com/track/staff-roll-1-everlasting-remembrances-11)"
				},
				{
					"name": "6",
					"value": "[Cadence of Many Conclusions / オリジナル](https://ltedtx.bandcamp.com/track/cadence-of-many-conclusions)"
				},
				{
					"name": "7",
					"value": "[Dancing Demon Realm -100_ddr- / オリジナル](https://ltedtx.bandcamp.com/track/dancing-demon-realm-100-ddr)"
				},
				{
					"name": "8",
					"value": "[GAME MENU -into the deep blue mix- / ロックマン11](https://ltedtx.bandcamp.com/track/game-menu-into-the-deep-blue-mix-11)"
				},
				{
					"name": "9",
					"value": "[Time to Face Your Fears (SC-55 ver.) / オリジナル](https://ltedtx.bandcamp.com/track/time-to-face-your-fears-sc-55-ver)"
				},
				{
					"name": "10",
					"value": "[Persistent Rampage (SC-55 ver.) / オリジナル](https://ltedtx.bandcamp.com/track/persistent-rampage-sc-55-ver)"
				},
				{
					"name": "11",
					"value": "[Striving for Mentality (SC-55 ver.) / オリジナル](https://ltedtx.bandcamp.com/track/striving-for-mentality-sc-55-ver)"
				},
				{
					"name": "12",
					"value": "[Adventure Awaits On Every Shrine (SC-55 ver.) / オリジナル](https://ltedtx.bandcamp.com/track/adventure-awaits-on-every-shrine-sc-55-ver)"
				},
				{
					"name": "13",
					"value": "[As Time Goes On and On -HR ver.- / オリジナル](https://ltedtx.bandcamp.com/track/as-time-goes-on-and-on-hr-ver)"
				},
				{
					"name": "14",
					"value": "[おてんば恋娘 -to tranquility- / 東方紅魔郷](https://ltedtx.bandcamp.com/track/to-tranquility)"
				}
			]
		}
		msg.channel.send('', {embed});
	}
})
