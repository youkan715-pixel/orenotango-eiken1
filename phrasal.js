// 句動詞ページのデータ。_tools/phrasal.js が書き出すので、このファイルは直接書き換えない。元は _tools/phrasal.txt。
const IDIOMS = `
1|fizzle out|立ち消えになる、尻すぼみに終わる
2|rope in|～を（説得して）引き込む
1|chip in|金を出し合う、口を挟む
2|fork over|～（金）をしぶしぶ払う
2|rake in|～（大金）を稼ぐ
1|nod off|うとうとする
2|egg on|～をけしかける
1|lash out|激しく非難する、殴りかかる
2|butter up|～におべっかを使う
1|choke up|（感情で）言葉に詰まる
1|scrape by|どうにか暮らしていく
2|whip up|～をかき立てる、手早く作る
2|stamp out|～を根絶する
2|thrash out|～を徹底的に議論して解決する
2|dole out|～を分け与える
2|mete out|～（罰）を与える
2|farm out|～を外注する
2|smooth over|～（問題・対立）を取り繕う
2|play up|～を強調する
2|tone down|～を和らげる
2|buy off|～を買収する
2|rip off|～からぼったくる、～を盗用する
2|sound out|～の意向を探る
2|trump up|～（罪・口実）をでっち上げる
2|conjure up|～を思い起こさせる
2|dredge up|～（過去の嫌なこと）を蒸し返す
2|soak up|～を吸収する、満喫する
2|mop up|～を掃討する、ふき取る
2|wolf down|～をがつがつ食べる
2|polish off|～を平らげる、手早く片付ける
2|churn out|～を大量に作り出す
2|trot out|～（おなじみの言い訳）を持ち出す
2|blurt out|～をうっかり口走る
2|rattle off|～をすらすら言う
2|belt out|～を大声で歌う
2|drown out|～（音）をかき消す
2|bottle up|～（感情）を抑え込む
1|cave in|屈する、崩れ落ちる
1|buckle down|本腰を入れる
1|bow out|身を引く、退く
1|chicken out|おじけづいてやめる
1|duck out|こっそり抜け出す
1|muddle through|何とか切り抜ける
1|soldier on|くじけず続ける
1|trail off|（声が）次第に小さくなる
1|simmer down|気を静める
1|flare up|再燃する、かっとなる
1|crop up|不意に持ち上がる
1|drag on|だらだら長引く
1|bottom out|底を打つ
1|shape up|よくなる、行いを改める
1|slip up|うっかり間違える
1|clam up|口を閉ざす
1|pipe down|静かにする
1|butt in|口を挟む
1|chime in|話に加わる、相づちを打つ
1|keel over|倒れる、転覆する
3|harp on|～をくどくど言う
3|border on|ほとんど～に近い
3|defer to|～に従う、～の意見を尊重する
3|pander to|～に迎合する
3|succumb to|～に屈する、～で倒れる
3|pine for|～を恋しがる
3|toy with|～を漠然と考える、もてあそぶ
3|reckon with|～を考慮に入れる、～と対決する
3|prey on|～を食い物にする、捕食する
3|frown on|～に眉をひそめる
3|tap into|～を活用する
3|lapse into|～（悪い状態）に陥る
3|rail against|～を激しく非難する
4|clamp down on|～を厳しく取り締まる
4|gang up on|～を集団で攻撃する
4|wriggle out of|～をうまく逃れる
4|cozy up to|～に取り入る
4|fall out with|～と仲たがいする
1|conk out|故障する、寝入ってしまう
1|zone out|ぼんやりする
1|lighten up|気楽に構える
1|knuckle down|真剣に取り組む
1|scrape through|かろうじて合格する、切り抜ける
1|press ahead|推し進める
3|yearn for|～を切望する
3|tinker with|～をいじくる、手を加える
3|leaf through|～をぱらぱらめくる
3|stumble upon|～を偶然見つける
3|tear into|～を激しく非難する
3|guard against|～を防ぐ、用心する
3|verge on|ほとんど～に近い
4|home in on|～に的を絞る
4|bear down on|～に迫る、のしかかる
4|weasel out of|～をずるく逃れる
4|suck up to|～にごまをする
2|scoop up|～をすくい上げる、かっさらう
2|crank out|～を次々に作り出す
2|reel off|～をすらすら並べ立てる
2|fritter away|～（金・時間）を浪費する
2|squirrel away|～をため込む
2|stir up|～（騒ぎ・感情）を引き起こす
2|cook up|～（話・口実）をでっち上げる
2|hush up|～をもみ消す
2|jack up|～（価格）をつり上げる
2|usher in|～の到来を告げる
2|bowl over|～をひどく驚かせる、感激させる
2|gun down|～を銃で撃ち倒す
2|shoot down|～（提案）を退ける、撃墜する
2|strike down|～（法律）を無効とする
`;
Object.assign(EXAMPLES, {"idioms:1:fizzle out":"The protest fizzled out after the first week.",
"idioms:2:rope in":"They roped in several volunteers to clean the beach.",
"idioms:1:chip in":"Everyone chipped in to buy a gift for the teacher.",
"idioms:2:fork over":"He had to fork over a large fine for speeding.",
"idioms:2:rake in":"The film raked in millions in its first weekend.",
"idioms:1:nod off":"He nodded off during the long lecture.",
"idioms:2:egg on":"The crowd egged on the two fighters.",
"idioms:1:lash out":"The minister lashed out at his critics in the press.",
"idioms:2:butter up":"He buttered up his boss before asking for a raise.",
"idioms:1:choke up":"She choked up while thanking her late father.",
"idioms:1:scrape by":"The family scraped by on a single small income.",
"idioms:2:whip up":"The speech whipped up anger among the crowd.",
"idioms:2:stamp out":"The government vowed to stamp out corruption.",
"idioms:2:thrash out":"The committee met to thrash out the remaining problems.",
"idioms:2:dole out":"Volunteers doled out food to the flood victims.",
"idioms:2:mete out":"The judge meted out harsh sentences to the rioters.",
"idioms:2:farm out":"The firm farms out its accounting to a small agency.",
"idioms:2:smooth over":"The manager tried to smooth over the dispute.",
"idioms:2:play up":"The advertisement plays up the car's safety features.",
"idioms:2:tone down":"The editor asked him to tone down his criticism.",
"idioms:2:buy off":"The firm tried to buy off the inspectors.",
"idioms:2:rip off":"Tourists are often ripped off by taxi drivers there.",
"idioms:2:sound out":"She sounded out her colleagues about the plan.",
"idioms:2:trump up":"The regime trumped up charges against the journalist.",
"idioms:2:conjure up":"The smell conjured up memories of her childhood.",
"idioms:2:dredge up":"The newspaper dredged up an old scandal.",
"idioms:2:soak up":"Children soak up new languages with ease.",
"idioms:2:mop up":"Troops mopped up the last pockets of resistance.",
"idioms:2:wolf down":"He wolfed down his breakfast and ran for the bus.",
"idioms:2:polish off":"The children polished off the whole cake.",
"idioms:2:churn out":"The factory churns out thousands of toys a day.",
"idioms:2:trot out":"He trotted out the same excuses as before.",
"idioms:2:blurt out":"She blurted out the secret before she could stop herself.",
"idioms:2:rattle off":"He rattled off the names of all fifty states.",
"idioms:2:belt out":"The crowd belted out the national anthem.",
"idioms:2:drown out":"The music drowned out their conversation.",
"idioms:2:bottle up":"He bottled up his anger for years.",
"idioms:1:cave in":"The government caved in after weeks of protests.",
"idioms:1:buckle down":"You must buckle down if you want to pass.",
"idioms:1:bow out":"The senator bowed out after thirty years in politics.",
"idioms:1:chicken out":"He chickened out at the last moment.",
"idioms:1:duck out":"She ducked out before the speeches began.",
"idioms:1:muddle through":"We had no plan, but we muddled through somehow.",
"idioms:1:soldier on":"Despite the pain, she soldiered on to the finish.",
"idioms:1:trail off":"His voice trailed off as he realized his mistake.",
"idioms:1:simmer down":"Wait until he simmers down before you speak to him.",
"idioms:1:flare up":"Fighting flared up again near the border.",
"idioms:1:crop up":"A problem cropped up at the last minute.",
"idioms:1:drag on":"The trial dragged on for three years.",
"idioms:1:bottom out":"Analysts believe the market has bottomed out.",
"idioms:1:shape up":"The manager told him to shape up or leave.",
"idioms:1:slip up":"Someone slipped up and sent the wrong file.",
"idioms:1:clam up":"The witness clammed up when the police arrived.",
"idioms:1:pipe down":"The teacher told the class to pipe down.",
"idioms:1:butt in":"He kept butting in while I was explaining.",
"idioms:1:chime in":"Several students chimed in with their own ideas.",
"idioms:1:keel over":"One of the guards keeled over in the sun.",
"idioms:3:harp on":"He keeps harping on the same complaint.",
"idioms:3:border on":"His confidence borders on arrogance.",
"idioms:3:defer to":"Younger staff usually defer to the senior doctor.",
"idioms:3:pander to":"The party was accused of pandering to extremists.",
"idioms:3:succumb to":"He finally succumbed to pressure and resigned.",
"idioms:3:pine for":"She pined for her home in the mountains.",
"idioms:3:toy with":"He toyed with the idea of moving abroad.",
"idioms:3:reckon with":"They had not reckoned with the bad weather.",
"idioms:3:prey on":"The scheme preyed on lonely pensioners.",
"idioms:3:frown on":"The school frowns on the use of phones in class.",
"idioms:3:tap into":"The firm tapped into a growing market.",
"idioms:3:lapse into":"The room lapsed into an awkward silence.",
"idioms:3:rail against":"He railed against the unfairness of the tax.",
"idioms:4:clamp down on":"Police clamped down on illegal parking.",
"idioms:4:gang up on":"The older boys ganged up on the newcomer.",
"idioms:4:wriggle out of":"She wriggled out of the meeting again.",
"idioms:4:cozy up to":"The firm cozied up to powerful politicians.",
"idioms:4:fall out with":"Partners often fall out with each other over money.",
"idioms:1:conk out":"The old engine conked out halfway up the hill.",
"idioms:1:zone out":"I zoned out during the second half of the talk.",
"idioms:1:lighten up":"You should lighten up and enjoy the party.",
"idioms:1:knuckle down":"It is time to knuckle down and finish the report.",
"idioms:1:scrape through":"He scraped through with the lowest passing mark.",
"idioms:1:press ahead":"The city pressed ahead with the plan despite protests.",
"idioms:3:yearn for":"The prisoners yearned for freedom.",
"idioms:3:tinker with":"He spent the weekend tinkering with his motorbike.",
"idioms:3:leaf through":"She leafed through a magazine while waiting.",
"idioms:3:stumble upon":"Hikers stumbled upon the ruins of a temple.",
"idioms:3:tear into":"Critics tear into every film he makes.",
"idioms:3:guard against":"Regular checks guard against equipment failure.",
"idioms:3:verge on":"Her calm verged on indifference.",
"idioms:4:home in on":"The report homes in on three key failures.",
"idioms:4:bear down on":"The storm was bearing down on the coast.",
"idioms:4:weasel out of":"He weaseled out of paying his share.",
"idioms:4:suck up to":"He is always sucking up to the director.",
"idioms:2:scoop up":"Investors scooped up shares at the low price.",
"idioms:2:crank out":"The writer cranks out two novels a year.",
"idioms:2:reel off":"She reeled off a list of complaints.",
"idioms:2:fritter away":"He frittered away his savings on gambling.",
"idioms:2:squirrel away":"She squirreled away a little money each month.",
"idioms:2:stir up":"The article stirred up a great deal of anger.",
"idioms:2:cook up":"They cooked up an excuse for being late.",
"idioms:2:hush up":"The firm tried to hush up the accident.",
"idioms:2:jack up":"Landlords jacked up rents after the festival was announced.",
"idioms:2:usher in":"The invention ushered in a new age of travel.",
"idioms:2:bowl over":"We were bowled over by their generosity.",
"idioms:2:gun down":"The reporter was gunned down outside his home.",
"idioms:2:shoot down":"The board shot down the proposal at once.",
"idioms:2:strike down":"The court struck down the law as unconstitutional."});
Object.assign(EXJA, {"idioms:1:fizzle out":"その抗議は最初の1週間で立ち消えになった。",
"idioms:2:rope in":"彼らは浜辺の清掃に数人のボランティアを引き込んだ。",
"idioms:1:chip in":"みんなで金を出し合って先生への贈り物を買った。",
"idioms:2:fork over":"彼は速度違反で高額の罰金をしぶしぶ払わなければならなかった。",
"idioms:2:rake in":"その映画は最初の週末で数百万を稼いだ。",
"idioms:1:nod off":"彼は長い講義の間にうとうとした。",
"idioms:2:egg on":"群衆は2人の闘士をけしかけた。",
"idioms:1:lash out":"大臣は報道陣の中の批判者を激しく非難した。",
"idioms:2:butter up":"彼は昇給を頼む前に上司におべっかを使った。",
"idioms:1:choke up":"彼女は亡き父に感謝を述べるうちに言葉に詰まった。",
"idioms:1:scrape by":"その一家はわずかな収入一つでどうにか暮らした。",
"idioms:2:whip up":"その演説は群衆の怒りをかき立てた。",
"idioms:2:stamp out":"政府は汚職を根絶すると誓った。",
"idioms:2:thrash out":"委員会は残る問題を徹底的に議論して解決するために集まった。",
"idioms:2:dole out":"ボランティアが洪水の被災者に食料を配った。",
"idioms:2:mete out":"裁判官は暴徒に厳しい刑を言い渡した。",
"idioms:2:farm out":"その会社は経理を小さな事務所に外注している。",
"idioms:2:smooth over":"部長はその争いを取り繕おうとした。",
"idioms:2:play up":"その広告は車の安全機能を強調している。",
"idioms:2:tone down":"編集者は彼に批判を和らげるよう求めた。",
"idioms:2:buy off":"その会社は検査官を買収しようとした。",
"idioms:2:rip off":"そこでは観光客がタクシー運転手によくぼったくられる。",
"idioms:2:sound out":"彼女はその計画について同僚の意向を探った。",
"idioms:2:trump up":"その政権は記者に対する罪状をでっち上げた。",
"idioms:2:conjure up":"その匂いは彼女の子ども時代の記憶を呼び起こした。",
"idioms:2:dredge up":"その新聞は昔の不祥事を蒸し返した。",
"idioms:2:soak up":"子どもは新しい言語をやすやすと吸収する。",
"idioms:2:mop up":"部隊は最後の抵抗拠点を掃討した。",
"idioms:2:wolf down":"彼は朝食をがつがつ食べてバスへ走った。",
"idioms:2:polish off":"子どもたちはケーキを丸ごと平らげた。",
"idioms:2:churn out":"その工場は1日に数千個のおもちゃを大量生産する。",
"idioms:2:trot out":"彼は以前と同じ言い訳を持ち出した。",
"idioms:2:blurt out":"彼女は自分を止める間もなく秘密を口走った。",
"idioms:2:rattle off":"彼は50州すべての名前をすらすら言った。",
"idioms:2:belt out":"群衆は国歌を大声で歌った。",
"idioms:2:drown out":"音楽が彼らの会話をかき消した。",
"idioms:2:bottle up":"彼は何年も怒りを抑え込んだ。",
"idioms:1:cave in":"数週間の抗議の末、政府は屈した。",
"idioms:1:buckle down":"合格したいなら本腰を入れなければならない。",
"idioms:1:bow out":"その上院議員は政界で30年を過ごして身を引いた。",
"idioms:1:chicken out":"彼は土壇場でおじけづいてやめた。",
"idioms:1:duck out":"彼女はスピーチが始まる前にこっそり抜け出した。",
"idioms:1:muddle through":"計画はなかったが、何とか切り抜けた。",
"idioms:1:soldier on":"痛みにもかかわらず、彼女はゴールまでくじけず続けた。",
"idioms:1:trail off":"間違いに気づくと、彼の声は次第に小さくなった。",
"idioms:1:simmer down":"彼が落ち着くまで待ってから話しかけなさい。",
"idioms:1:flare up":"国境付近で戦闘が再燃した。",
"idioms:1:crop up":"土壇場で問題が持ち上がった。",
"idioms:1:drag on":"その裁判は3年間だらだらと長引いた。",
"idioms:1:bottom out":"専門家は市場が底を打ったと考えている。",
"idioms:1:shape up":"部長は彼に、態度を改めるか辞めるかだと言った。",
"idioms:1:slip up":"誰かがうっかり間違えて違うファイルを送った。",
"idioms:1:clam up":"警察が来ると、その目撃者は口を閉ざした。",
"idioms:1:pipe down":"先生はクラスに静かにするよう言った。",
"idioms:1:butt in":"私が説明している間、彼は口を挟み続けた。",
"idioms:1:chime in":"数人の学生が自分の考えを述べて話に加わった。",
"idioms:1:keel over":"衛兵の一人が日差しの中で倒れた。",
"idioms:3:harp on":"彼は同じ不満をくどくど言い続けている。",
"idioms:3:border on":"彼の自信はほとんど傲慢に近い。",
"idioms:3:defer to":"若い職員はたいてい年長の医師の意見に従う。",
"idioms:3:pander to":"その党は過激派に迎合していると非難された。",
"idioms:3:succumb to":"彼はついに圧力に屈して辞任した。",
"idioms:3:pine for":"彼女は山の中のわが家を恋しがった。",
"idioms:3:toy with":"彼は海外へ移ることを漠然と考えた。",
"idioms:3:reckon with":"彼らは悪天候を考慮に入れていなかった。",
"idioms:3:prey on":"その詐欺は孤独な年金生活者を食い物にした。",
"idioms:3:frown on":"その学校は授業中の電話の使用を快く思っていない。",
"idioms:3:tap into":"その会社は成長する市場を活用した。",
"idioms:3:lapse into":"部屋は気まずい沈黙に陥った。",
"idioms:3:rail against":"彼はその税の不公平さを激しく非難した。",
"idioms:4:clamp down on":"警察は違法駐車を厳しく取り締まった。",
"idioms:4:gang up on":"年上の少年たちは新入りを集団でいじめた。",
"idioms:4:wriggle out of":"彼女はまたうまく会議を逃れた。",
"idioms:4:cozy up to":"その会社は有力な政治家に取り入った。",
"idioms:4:fall out with":"共同経営者は金をめぐってよく仲たがいする。",
"idioms:1:conk out":"古いエンジンは坂の途中で故障した。",
"idioms:1:zone out":"講演の後半、私はぼんやりしていた。",
"idioms:1:lighten up":"気楽に構えてパーティーを楽しみなさい。",
"idioms:1:knuckle down":"真剣に取り組んで報告書を仕上げる時だ。",
"idioms:1:scrape through":"彼は合格最低点でかろうじて通った。",
"idioms:1:press ahead":"市は抗議にもかかわらず計画を推し進めた。",
"idioms:3:yearn for":"囚人たちは自由を切望した。",
"idioms:3:tinker with":"彼は週末をバイクいじりで過ごした。",
"idioms:3:leaf through":"彼女は待つ間、雑誌をぱらぱらめくった。",
"idioms:3:stumble upon":"ハイカーたちは神殿の遺跡を偶然見つけた。",
"idioms:3:tear into":"批評家たちは彼の作る映画をことごとく激しく非難する。",
"idioms:3:guard against":"定期点検は機器の故障を防ぐ。",
"idioms:3:verge on":"彼女の落ち着きはほとんど無関心に近かった。",
"idioms:4:home in on":"その報告書は3つの重要な失敗に的を絞っている。",
"idioms:4:bear down on":"嵐が海岸に迫っていた。",
"idioms:4:weasel out of":"彼は自分の分を払うのをずるく逃れた。",
"idioms:4:suck up to":"彼はいつも取締役にごまをすっている。",
"idioms:2:scoop up":"投資家たちは安値で株をかき集めた。",
"idioms:2:crank out":"その作家は年に2冊の小説を次々に書き上げる。",
"idioms:2:reel off":"彼女は不満をすらすらと並べ立てた。",
"idioms:2:fritter away":"彼は貯金を賭け事で浪費した。",
"idioms:2:squirrel away":"彼女は毎月少しずつお金をため込んだ。",
"idioms:2:stir up":"その記事は大きな怒りを引き起こした。",
"idioms:2:cook up":"彼らは遅刻の言い訳をでっち上げた。",
"idioms:2:hush up":"その会社は事故をもみ消そうとした。",
"idioms:2:jack up":"祭りが発表されると、家主たちは家賃をつり上げた。",
"idioms:2:usher in":"その発明は旅の新時代の到来を告げた。",
"idioms:2:bowl over":"私たちは彼らの気前のよさに感激した。",
"idioms:2:gun down":"その記者は自宅の外で銃撃された。",
"idioms:2:shoot down":"取締役会はその提案を即座に退けた。",
"idioms:2:strike down":"裁判所はその法律を違憲として無効とした。"});
