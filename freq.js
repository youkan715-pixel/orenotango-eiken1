// 単語ページのデータ。_tools/words.js が書き出すので、このファイルは直接書き換えない。元は _tools/eiken/*.txt。
// 語の一覧: Octanove Vocabulary Profile C1/C2 v1.0 (Octanove Labs) — CC BY-SA 4.0。順番と補充: wordfreq (Robyn Speer, 2022) — CC BY-SA 4.0。この一覧も CC BY-SA 4.0。
const FREQ = `
# 1〜100
criteria|基準（criterion の複数形）
scenario|筋書き、想定される事態
sustainable|持続可能な
chill|冷え、寒け／～を冷やす
structural|構造上の
magnetic|磁気の、人を引きつける
counsel|助言、弁護人／～に助言する
marvel|驚くべきもの／驚嘆する
harbor|港／（感情）を抱く、～をかくまう
vertical|垂直の、縦の
conviction|有罪判決、確信
trauma|心の傷、外傷
linear|直線の、一直線に進む
provisions|食料、（法律の）規定
cognitive|認知の
restoration|修復、復旧
facial|顔の
jurisdiction|管轄、司法権
ore|鉱石
governance|統治、管理
provincial|州の、地方の、視野の狭い
ethical|倫理的な
hostile|敵意のある、不利な
momentum|勢い、はずみ
notable|注目すべき、著名な
testament|証し、遺言
allegedly|伝えられるところでは、～とされている
demo|デモ、実演、試作版
elaborate|手の込んだ、精巧な／詳しく述べる
hull|船体
realm|領域、王国
bout|（病気・活動の）ひとしきり、一勝負
hack|～に不正侵入する、～をたたき切る
stance|立場、姿勢
echo|反響／反響する、～を繰り返す
peninsula|半島
sentiment|感情、意見、世論
thereby|それによって
threshold|敷居、基準値、境目
aesthetic|美的な、美学の
ego|自尊心、うぬぼれ
fusion|融合、核融合
gauge|～を測る、判断する／計器
inclusion|含めること、包摂
pending|未決定の、差し迫った／～を待つ間
bail|保釈（金）
harassment|嫌がらせ
precision|正確さ、精密さ
stark|際立った、厳しい、荒涼とした
void|空虚感、空間／無効の
voluntary|自発的な、任意の
coup|クーデター、大成功
crude|粗雑な、未精製の、下品な
disclosure|公開、暴露
magnitude|規模、重大さ
pledge|誓約、公約／～を誓う
affiliate|系列会社／～を提携させる
asylum|亡命、保護
fossil|化石
offset|～を相殺する、埋め合わせる
speculation|憶測、投機
successor|後継者
wicked|邪悪な、意地の悪い
acoustic|音響の、生楽器の
doctrine|教義、主義
gig|演奏会、単発の仕事
intact|無傷の、そのままの
prey|獲物、餌食／捕食する
prophet|預言者
referendum|国民投票、住民投票
sequel|続編、後日談
clan|一族、氏族
clash|衝突、対立／衝突する
coupled|結びついた、組み合わさった
mandate|権限、信任、命令／～を義務づける
revealing|実態を明らかにする、露出の多い
succession|連続、継承
tactical|戦術的な
clearance|許可、撤去、在庫一掃
deceased|亡くなった、故人
detention|拘留、留置
explicit|明白な、露骨な
fraction|ほんの一部、分数
viable|実行可能な、生存できる
amid|～のさなかに
herald|～の到来を告げる／先触れ
plea|嘆願、（法廷での）申し立て
rhetoric|弁舌、美辞麗句
salvation|救済、救い
secular|世俗の、非宗教的な
sovereign|主権を有する／君主
synthetic|合成の、人工の
optimal|最適な
profound|深い、重大な
rebellion|反乱、反抗
robust|頑丈な、力強い
swap|～を交換する／交換
terrain|地形、地勢
acre|エーカー（約4,047平方メートル）
descent|降下、家系
# 101〜200
halt|停止／～を止める、止まる
litigation|訴訟
norm|規範、標準
orthodox|正統な、従来の
prone|～しがちな、うつぶせの
sanctuary|保護区、避難所、聖域
siege|包囲（攻撃）
tenure|在職期間、（大学の）終身在職権
delegation|代表団、委任
demographic|人口統計の／（特定の）層
subsidiary|子会社／補助的な
velocity|速度
accountability|説明責任
albeit|～ではあるが
deployment|配備、展開
exterior|外側、外観／外側の
fury|激怒、猛威
genocide|集団虐殺
humanitarian|人道的な、人道主義の
immunity|免疫、免除
likelihood|可能性、見込み
pioneer|先駆者、開拓者／～を開拓する
suburban|郊外の
accountable|説明責任がある、責任を負う
advocacy|擁護、支持
aftermath|（災害・事件の）余波、直後
aggression|侵略、攻撃性
blunt|率直な、切れ味の鈍い／～を鈍らせる
clarity|明快さ、明瞭さ
discretion|裁量、慎重さ
elevation|標高、昇進
esteem|尊敬／～を尊敬する
hostage|人質
mortality|死亡率、死を免れないこと
reservoir|貯水池、蓄え
sworn|宣誓した、誓い合った
transparency|透明性
withdrawn|内気な、引きこもりがちな
heir|相続人、後継者
liable|法的責任がある、～しがちな
rogue|悪党／はぐれた、ならず者の
solidarity|連帯、団結
clutch|～をしっかり握る／危機的状況
credibility|信頼性、信用
haul|～を引っ張る、運ぶ／獲得量
juvenile|少年の、未熟な／未成年者
leverage|影響力、てこの作用／～を活用する
militia|民兵（組織）
tribunal|裁判所、法廷
abusive|虐待的な、口汚い
gem|宝石、逸品
hypothesis|仮説
psychiatric|精神医学の、精神科の
repeal|（法律）を廃止する／廃止
saga|長編物語、長く続く一連の出来事
surplus|余剰、黒字／余分の
woo|～の支持を得ようとする、～に求愛する
autonomy|自治、自主性
commodity|商品、産物
correlation|相関関係
fragile|壊れやすい、もろい
fringe|周辺、過激派、房飾り
irony|皮肉
judiciary|司法部、裁判官
legion|軍団、多数
lethal|致死の、致命的な
scroll|巻物／画面を上下に動かす
sovereignty|主権
thrust|～を強く押す／推進力、要点
arbitrary|恣意的な、勝手な
autonomous|自治の、自律した
bait|餌、おとり／～をおびき寄せる
levy|（税金）を課す／徴収、課税
manipulation|操作、ごまかし
niche|すき間市場、適所
obscure|無名の、不明瞭な／～を見えにくくする
proposition|提案、主張、事柄
stretching|伸びること、ストレッチ
therapeutic|治療の、癒やしになる
atmospheric|大気の、雰囲気のある
disclose|～を公表する、明かす
exploitation|搾取、開発
goose|ガチョウ、ガン
monopoly|独占（企業）
synthesis|統合、合成
treason|反逆罪
violet|スミレ、すみれ色
critique|批評、論評／～を批評する
discourse|談話、議論、言説
dominance|優位、支配
inherent|本来備わっている、固有の
justification|正当な理由、正当化
outright|完全な、明白な／完全に
oversight|監督、見落とし
refreshing|さわやかな、新鮮な
statute|法令、成文法
vicious|凶暴な、悪意のある
wholly|完全に、まったく
assassination|暗殺
citation|引用、表彰
# 201〜300
congregation|（礼拝の）会衆、集まり
decree|布告、法令／～を布告する
drift|漂う、流される／漂流、大意
geological|地質学の
methodology|方法論、手法
predecessor|前任者、前のもの
premise|前提、（複数形で）敷地
reckless|無謀な、向こう見ずな
redemption|救済、償い、買い戻し
unprecedented|前例のない
accord|協定、一致／～を与える
boycott|不買運動、ボイコット／～をボイコットする
eclipse|（日食・月食の）食／～をしのぐ
inferior|劣った、下位の
injustice|不正、不公平
privileged|特権のある、恵まれた
reliance|依存、頼ること
retention|保持、維持、記憶力
definitive|決定的な、最終的な
epidemic|（病気の）流行、まん延
extraction|抽出、採掘、抜き取り
homicide|殺人
inheritance|相続（財産）、遺伝
ironic|皮肉な
righteous|正義の、もっともな
vicinity|近辺、付近
curb|～を抑制する／抑制、縁石
faction|派閥、党派
inconsistent|一貫性のない、矛盾した
probation|保護観察、試用期間
strap|ひも、帯／～をひもで固定する
subjective|主観的な
traumatic|心に傷を残す、外傷性の
alignment|整列、調整、提携
apparatus|装置、器具、機構
bliss|至福、無上の喜び
buffer|緩衝物、緩衝地帯／～を和らげる
collaborative|共同の、協力的な
compromised|危険にさらされた、損なわれた
cosmic|宇宙の、途方もなく大きい
exempt|免除された／～を免除する
foremost|第一の、最も重要な
forge|～を築く、偽造する／鍛冶場
hierarchy|階層制、序列
invalid|無効な、根拠のない
metabolism|代謝
parody|もじり、パロディ／～をもじる
parole|仮釈放
render|～を（ある状態）にする、与える、表現する
traction|支持、勢い、けん引力
contested|争われている、異論のある
continuity|継続性、連続性
credible|信用できる、確かな
felony|重罪
ideological|思想上の、イデオロギーの
incumbent|現職の／現職者
maternal|母親の、母方の
memoir|回顧録
mold|型、かび／～を形作る
offspring|子、子孫
prop|支え、小道具／～を支える
simplicity|単純さ、簡素さ
vegetation|植生、草木
behold|～を見る、目にする
bypass|～を迂回する、無視する／迂回路
corpse|死体
dementia|認知症
phenomenal|驚異的な
spatial|空間の
statutory|法定の
stellar|星の、見事な
turf|芝生、縄張り
twitch|ぴくぴく動く／けいれん
endorsement|支持、推薦
finite|限りある、有限の
flagship|主力商品、旗艦
forensic|法医学の、科学捜査の
infamous|悪名高い
mesh|網目、網／かみ合う
migrant|移民、出稼ぎ労働者／移住性の
naive|世間知らずの、単純な
remotely|遠隔で、少しも（～ない）
rigid|厳格な、硬い
utilize|～を利用する
allocation|割り当て、配分
beacon|灯台、かがり火、指針
bounty|賞金、恵み
clergy|聖職者（全体）
dwelling|住居
expenditure|支出、経費
scrutiny|精査、監視
seizure|押収、発作、奪取
stray|はぐれた、野良の／それる
systemic|全体に及ぶ、組織的な
uprising|反乱、蜂起
whereby|それによって～する（ところの）
contention|論争、主張
covenant|誓約、盟約
greed|強欲、貪欲
pact|協定、条約
# 301〜400
paramount|最も重要な
paranoid|被害妄想の、疑い深い
proxy|代理（人）、代用
revolt|反乱、反抗／反乱を起こす
shrine|聖堂、神社、聖地
solitary|孤独な、ただ一つの
stoke|～をあおる、（火）をかき立てる
thrive|繁栄する、よく育つ
arbitration|仲裁、調停
bilateral|二国間の、双方の
classy|上品な、高級な
confrontation|対決、対立
dismissal|解雇、却下
empathy|共感、感情移入
feasible|実行可能な
insecure|不安な、自信のない、不安定な
lust|強い欲望／渇望する
occupational|職業の
onset|始まり、発症
persecution|迫害
reconciliation|和解、調和
specimen|標本、見本
sponsorship|後援、資金提供
unlawful|違法の
accredited|認定された、公認の
apex|頂点、絶頂
consolidation|統合、強化
convoy|護送船団、車列
diplomacy|外交、駆け引きの巧みさ
directive|指令、指示
friction|摩擦、不和
magistrate|治安判事、下級裁判官
marginal|わずかな、周辺の
milestone|画期的な出来事、節目
predator|捕食者、他人を食い物にする者
prophecy|予言
salute|敬礼／～に敬礼する、敬意を表す
severity|厳しさ、深刻さ
slack|緩い、不景気な／たるみ
spontaneous|自然に起こる、自発的な
tract|広い土地、（体の）管、小冊子
akin|同類の、似ている
beware|用心する
comprehend|～を理解する
contamination|汚染
counterpart|対応する人・もの、同等の立場の人
creed|信条、教義
domination|支配、優勢
fracture|骨折、ひび／～を骨折する、砕く
genome|ゲノム、全遺伝情報
indictment|起訴（状）、非難
meaningless|無意味な
premature|時期尚早の、早産の
psychiatrist|精神科医
validity|妥当性、有効性
wrath|激怒
aide|補佐官、側近
allegiance|忠誠
apt|適切な、～しがちな
constituency|選挙区、支持層
contingent|代表団、分遣隊／～次第の
entirety|全体、全部
exodus|大量脱出、集団移住
invasive|侵入する、（治療が）体を傷つける
irrigation|かんがい
monarch|君主
persona|（表向きの）人格、役柄
plaque|記念の銘板、歯垢
preach|～を説く、説教する
purity|純粋さ、清らかさ
realism|現実主義、写実主義
stigma|汚名、不名誉
betrayal|裏切り
communal|共同の、共同体の
consortium|企業連合、共同事業体
efficacy|効力、有効性
manifest|明白な／～を明らかに示す
mutually|互いに
perimeter|周囲、外周
preacher|説教師、伝道者
procurement|調達
ransom|身代金
rigorous|厳密な、厳格な
skeptical|懐疑的な
suppression|抑圧、鎮圧、隠蔽
trustee|受託者、理事
turnout|投票率、人出
unanimous|全会一致の
vengeance|復讐
cite|～を引用する、挙げる
commercially|商業的に
imminent|差し迫った
inaugural|就任の、最初の
lure|～を誘い込む／魅力、おとり
malicious|悪意のある
muscular|筋肉の、たくましい
neutrality|中立
partition|分割、仕切り／～を分割する
proprietary|専有の、独自の
protagonist|主人公、主唱者
# 401〜500
snail|カタツムリ
susceptible|影響を受けやすい、かかりやすい
verge|瀬戸際、縁
vibrant|活気のある、鮮やかな
collateral|担保／付随的な
demise|終焉、死去
dire|悲惨な、差し迫った
dominion|支配（権）、領土
misconduct|不正行為、違法行為
mute|無言の、口のきけない／（音）を消す
prevalence|広まっていること、有病率
saturated|飽和した、ずぶぬれの
tangible|明白な、具体的な、有形の
tilt|～を傾ける、傾く／傾き
veil|ベール、覆い隠すもの／～を覆う
versatile|多才な、用途の広い
anthropology|人類学
caliber|力量、品質、口径
deception|欺くこと、ごまかし
helm|かじ、指導的地位
hypocrisy|偽善
incompetent|無能な
intervene|介入する、仲裁する
manifesto|（政党の）政策綱領、宣言
negligence|過失、怠慢
obsolete|時代遅れの、廃れた
posture|姿勢、態度
resonance|共鳴、反響
ruthless|冷酷な、容赦のない
salvage|～を救い出す、挽回する／引き揚げ
satire|風刺
standpoint|観点、立場
sway|～を揺さぶる、揺れる／影響力
undermine|～を徐々に弱める、むしばむ
veto|拒否権／～を拒否する
vocational|職業の、職業訓練の
withstand|～に耐える
accustomed|慣れた、いつもの
corpus|（資料の）集成、言語資料
dictatorship|独裁（政権）
electorate|有権者（全体）
erosion|侵食、低下
flank|側面、わき腹／～の側面に位置する
incidence|発生率
mutation|突然変異
mythology|神話（体系）
pest|害虫、厄介者
pillar|柱、中心的存在
precipitation|降水（量）
restraint|自制、抑制、制限
rift|亀裂、不和
supremacy|優位、至上
affiliation|所属、提携
align|～を一直線に並べる、同調させる
amnesty|恩赦、特赦
assertion|主張、断言
atop|～の頂上に
cache|隠し場所、隠した貯蔵物
displacement|強制退去、置き換え
drastic|思い切った、抜本的な
edible|食べられる、食用の
flick|～をはじく、さっと動かす／軽いひと振り
legitimacy|正当性、合法性
portray|～を描く、演じる
practitioner|開業医、実践者
stationary|静止した、動かない
temporal|時間の、現世の
ambient|周囲の、環境の
comprise|～から成る、～を構成する
conceptual|概念の
demolition|取り壊し、破壊
differentiate|～を区別する、差別化する
empirical|経験的な、実証的な
fertile|肥沃な、繁殖力のある、豊かな
feud|確執、長年の不和／反目する
fuse|～を融合させる、溶ける／ヒューズ、導火線
gale|強風、大風
mantle|（責任ある）役目、覆い、マントル
militant|好戦的な、過激な／過激派
nostalgia|郷愁、懐かしさ
peasant|小作農、農民
presume|～と推定する、思う
sabotage|妨害、破壊工作／～を妨害する
sarcasm|皮肉、嫌み
tally|集計、得点／～を集計する、一致する
vile|ひどく不快な、卑劣な
wedge|くさび／～を押し込む
adaptive|適応できる、適応性のある
affinity|親近感、類似性
apartheid|アパルトヘイト、人種隔離政策
casualty|死傷者、犠牲者
cavity|空洞、虫歯
dissolution|解散、解消、崩壊
enclosure|囲い（地）、同封物
famine|飢饉
fraudulent|詐欺の、不正な
homage|敬意、賛辞
hostility|敵意、反感
hypothetical|仮定の、仮説の
paradigm|枠組み、模範、典型
# 501〜600
perpetual|絶え間ない、永続的な
pigeon|ハト
plateau|高原、停滞期／横ばいになる
precinct|（警察・選挙の）管区、構内
regeneration|再生、再開発
reminiscent|思い出させる、しのばせる
resentment|憤り、恨み
resin|樹脂
scarce|乏しい、まれな
sibling|きょうだい
stint|（仕事の）期間、任期
trajectory|軌道、道筋
utmost|最大限の／最大限
adjustable|調節できる
authenticity|本物であること、信ぴょう性
caste|カースト、身分階級
cerebral|脳の、知的な
chant|唱える、繰り返し叫ぶ／詠唱
climax|最高潮、山場
contender|有力候補、挑戦者
degradation|悪化、劣化、屈辱
equilibrium|均衡、平静
isolate|～を孤立させる、隔離する
nominal|名目上の、ごくわずかな
ordinance|条例、法令
prolific|多作の、多産の
proportional|比例した、釣り合った
quarry|採石場、獲物／～を切り出す
restless|落ち着かない、不安な
sap|樹液／～を徐々に奪う
sarcastic|皮肉な、嫌みな
scholarly|学術的な、学者らしい
segregation|分離、隔離、人種差別
sinister|不吉な、邪悪な
ventilation|換気、通風
accumulation|蓄積
authoritarian|権威主義的な、独裁的な
avail|役に立つこと、効果
calorie|カロリー
commence|始まる、～を開始する
conditional|条件付きの
crusade|改革運動、十字軍／運動を行う
cynical|冷笑的な、世をすねた
elastic|弾力のある、融通のきく／ゴムひも
exposition|博覧会、詳しい説明
gracious|親切な、優雅な
humility|謙虚さ
impeachment|弾劾
marital|結婚の、夫婦の
multitude|多数、群衆
plumbing|配管（設備）
resemblance|類似、似ていること
sermon|説教
slender|ほっそりした、わずかな
societal|社会の
transmitter|送信機、伝達するもの
upheld|支持された（uphold の過去形・過去分詞）
adolescent|青年期の若者／思春期の
backdrop|背景
bluff|はったり／はったりをかける
cartel|カルテル、企業連合
caucus|党員集会、議員連盟
clad|～を着た、覆われた
constituent|有権者、構成要素／構成する
contagious|伝染性の、うつりやすい
eccentric|風変わりな／変わり者
emblem|象徴、紋章
influx|流入、殺到
kernel|核心、（果実の）仁
liaison|連絡（係）、連携
resilience|回復力、立ち直る力
rotate|回転する、交代する
toxicity|毒性
autopsy|検死、解剖
blitz|集中的な取り組み、電撃攻撃
blockade|封鎖／～を封鎖する
circa|およそ、～頃
cloak|外套、覆い隠すもの／～を覆い隠す
combustion|燃焼
deportation|国外追放、強制送還
disposable|使い捨ての、自由に使える
dwell|住む、とどまる
fiery|激しい、火のような
flux|絶え間ない変化、流れ
hassle|面倒、煩わしいこと／～を悩ます
immensely|非常に、とてつもなく
inauguration|就任（式）、開始
indicative|示している、暗示する
intercept|～を途中で捕らえる、傍受する
intuitive|直感的な
latitude|緯度、（行動の）自由
majestic|雄大な、威厳のある
metropolis|大都市、主要都市
orchard|果樹園
parameter|限界、条件、媒介変数
pathology|病理（学）
procession|行列、行進
purge|粛清、追放／～を追放する、一掃する
secrecy|秘密（にすること）
venom|毒液、悪意
# 601〜700
victorious|勝利を得た
wary|用心深い、警戒した
amidst|～のさなかに
aquarium|水族館、水槽
batter|～を乱打する、打ちのめす
captivity|監禁、飼育下にあること
complementary|補完的な
convict|～に有罪判決を下す／囚人
discrete|別々の、個別の
dissent|異議、反対意見／異議を唱える
eminent|著名な、優れた
endeavor|努力、試み／努める
fraternity|同業者仲間、友愛、男子学生の社交クラブ
interrogation|尋問、取り調べ
pagan|異教の／異教徒
pursuant|（～に）従って、準じて
repetitive|繰り返しの多い、単調な
reversal|逆転、転換
savvy|精通した、抜け目のない／実際的な知識
spree|（買い物・犯罪などの）やりたい放題
subsidy|補助金
superficial|表面的な、浅い
waterfront|水辺、海岸通り
ambush|待ち伏せ／～を待ち伏せして襲う
arrogance|傲慢さ
comrade|仲間、戦友
curator|（博物館などの）学芸員
deity|神
detrimental|有害な
entitlement|権利、受給資格
garner|～を集める、獲得する
gypsy|ジプシー、放浪者
impairment|障害、機能の低下
intricate|複雑な、入り組んだ
longevity|長寿、寿命
lore|言い伝え、伝承
obstruction|妨害、障害物
plaintiff|原告
portrayal|描写、演技
rampant|はびこっている、まん延した
replicate|～を再現する、複製する
retaliation|報復、仕返し
sewage|下水、汚水
summon|～を呼び出す、奮い起こす
urgency|緊急（性）、切迫
accreditation|認定、認可
clarification|明確化、説明
covert|秘密の、ひそかな
cringe|身がすくむ、恥ずかしさに縮み上がる
dialect|方言
downside|否定的な面、欠点
flair|才能、センス
fugitive|逃亡者／逃亡中の
inmate|収容者、受刑者
intuition|直感
menace|脅威、厄介者／～を脅かす
misuse|誤用、悪用／～を悪用する
nausea|吐き気
optimum|最適の／最適条件
physiological|生理的な、生理学の
restrictive|制限的な
screenplay|映画の脚本
sect|宗派、分派
seismic|地震の、非常に大きな
slain|殺された（slay の過去分詞）
stash|～を隠す、しまい込む／隠し場所
stroll|ぶらぶら歩く／散歩
whereabouts|所在、行方
backbone|背骨、中心となる支え、気骨
brawl|乱闘、けんか／乱闘する
celestial|天体の、天上の
characterization|特徴づけ、人物描写
customary|慣例の、いつもの
flourish|栄える、繁茂する／大げさな身ぶり
heroine|女性の主人公、女傑
hoax|でっち上げ、悪ふざけ
insignificant|取るに足りない
maneuver|巧みな操作、策略／～を巧みに動かす
numb|感覚のない、まひした／～をまひさせる
pawn|（チェスの）歩、手先／～を質に入れる
plaster|しっくい、こう薬／～を塗りたくる
quirky|風変わりな、一風変わった
quota|割り当て、定員
rationale|論理的根拠、理由
reap|～を刈り取る、（成果）を得る
rebound|跳ね返る、立ち直る／回復
redeem|～を挽回する、換金する、救う
residue|残留物、残り
runoff|決選投票、（雨水などの）流出
sentimental|感傷的な、情にもろい
snatch|～をひったくる、さっと取る
stealth|ひそかな行動、隠密
subset|部分集合、一部
suspense|はらはらする気持ち、緊張感
tandem|協力関係、縦並び
tertiary|第三の、高等教育の
upbeat|楽観的な、陽気な
vanguard|先頭、先駆者
vulgar|下品な、俗悪な
waiver|権利放棄（証書）、免除
# 701〜800
watershed|分岐点、転機、分水界
adrenaline|アドレナリン
alleviate|～を和らげる、軽減する
anarchy|無政府状態、無秩序
ashore|岸へ、陸上に
aura|雰囲気、独特の空気
canopy|天蓋、林冠
condemnation|非難、有罪宣告
dependency|依存、属国
dosage|投薬量、服用量
dysfunction|機能不全、機能障害
endowment|寄付金、基金、天賦の才
enrichment|豊かにすること、濃縮
fauna|動物相
fidelity|忠実さ、貞節、再現性
forefront|最前線、先頭
harden|固くなる、～を固くする、強硬になる
initiation|開始、入会（式）
jeopardy|危険、危機
residual|残りの、残留した
truce|停戦、休戦
uphold|～を支持する、守る
abolition|廃止
acquainted|知り合いの、精通した
angular|角ばった、骨ばった
benign|良性の、穏やかな
brethren|同胞、信者仲間
brink|瀬戸際、縁
collaborate|協力する、共同で行う
delusional|妄想にとらわれた
deposition|宣誓証言、退位、堆積
empower|～に力を与える、権限を与える
mediation|調停、仲介
parasite|寄生生物、寄生虫
perennial|長年続く、多年生の
procedural|手続き上の
relentless|容赦のない、絶え間ない
speculative|推測の、投機的な
submerged|水中に沈んだ、水没した
symmetry|対称、釣り合い
syndicate|企業連合、犯罪組織
wholesome|健全な、健康によい
adjoining|隣接した
ancestry|祖先、家系
annex|～を併合する／別館
avid|熱心な
bland|味気ない、当たり障りのない
bribe|賄賂／～に賄賂を贈る
canoe|カヌー
decency|良識、礼儀正しさ
havoc|大混乱、大被害
locomotive|機関車
mantra|繰り返される言葉、真言
monumental|途方もない、記念碑的な
pilgrimage|巡礼
pivot|中心、軸／方向転換する
pivotal|極めて重要な、中枢の
profitability|収益性
provoke|～を引き起こす、挑発する
reconcile|～を和解させる、両立させる
regression|後退、退行、回帰
resilient|回復力のある、立ち直りが早い
staggering|驚異的な、途方もない
synonymous|同義の、同じ意味の
tedious|退屈な、うんざりする
utilization|利用、活用
astronomical|天文学の、けた外れに大きい
ceremonial|儀式の、形式上の
choreography|振り付け
cling|しがみつく、固執する
concurrent|同時に起こる、並行する
dubious|疑わしい、いかがわしい
folklore|民間伝承
gravitational|重力の
hereditary|遺伝性の、世襲の
hiatus|中断、休止
homestead|農場付きの家屋敷
intellect|知性、知力
lapse|過失、空白期間／失効する
loot|～を略奪する／略奪品
mindful|心に留めている、注意している
myriad|無数の／無数
noteworthy|注目に値する
odor|におい、臭気
plunge|急落する、飛び込む／急落
pragmatic|実際的な、実利的な
quasi|準～、半～
radiant|輝く、晴れやかな
remorse|深い後悔、自責の念
sanity|正気、健全さ
showdown|決着をつける対決
shuffle|足を引きずって歩く、～を入れ替える／再編
slab|厚板、平板
supplemental|補足の、追加の
tariff|関税、料金表
trance|恍惚状態、夢うつつ
unconditional|無条件の
volatility|変動の激しさ、不安定さ
anthology|選集、作品集
avalanche|雪崩、殺到
# 801〜900
banter|気さくな冗談のやりとり／冗談を言い合う
blockbuster|大ヒット作
charismatic|カリスマ性のある
commencement|開始、卒業式
corrosion|腐食
defiance|反抗、公然たる無視
deter|～を思いとどまらせる、抑止する
envoy|使節、特使
fabrication|作り話、捏造、製造
formulation|策定、配合、表現
hysterical|ヒステリックな、ひどくおかしい
incompatible|両立しない、互換性のない
injunction|（裁判所の）差し止め命令
kidnap|～を誘拐する
notwithstanding|～にもかかわらず／それにもかかわらず
placebo|偽薬、気休め
retrospective|回顧的な、遡及する／回顧展
speculate|推測する、投機をする
sublime|崇高な、見事な
terrestrial|地球の、陸上の
thug|暴漢、ちんぴら
anomaly|異常、例外
apprenticeship|見習い期間、徒弟制度
breadth|幅、広さ
centralized|中央集権化された、集中した
cleanse|～を清める、洗浄する
consolidate|～を強化する、統合する
containment|封じ込め、抑制
crave|～を切望する、渇望する
elusive|捕らえにくい、達成しにくい
espionage|スパイ活動
existential|存在に関わる、実存の
flashback|回想場面、記憶のよみがえり
gloss|光沢、うわべ／～を取り繕う
graft|移植（片）、汚職／～を移植する
grumpy|不機嫌な
guise|見せかけ、外観
immersion|没頭、浸すこと
intrinsic|本来備わっている、固有の
moderation|節度、適度
ordeal|つらい体験、試練
puberty|思春期
taboo|禁忌、タブー／禁じられた
throttle|絞り弁／～の首を絞める、抑えつける
trivia|雑学、ささいなこと
vortex|渦、渦巻き
alias|別名、偽名
anchored|固定された、しっかり根ざした
apostle|使徒、主唱者
concise|簡潔な
confinement|監禁、閉じ込めること
consultancy|コンサルタント業、相談業務
convergence|収束、一点に集まること
criterion|基準（criteria の単数形）
despicable|卑劣な
diminish|減少する、～を減らす
disclaimer|免責条項、否認
discriminatory|差別的な
disruptive|混乱を招く、破壊的な
estimation|評価、見積もり
excavation|発掘、掘削
extremist|過激派／過激な
forcibly|強制的に、力ずくで
imbalance|不均衡
intolerance|不寛容、（食物などを）受けつけないこと
lineage|血統、家系
martyr|殉教者、犠牲者
mitigation|緩和、軽減
obscene|わいせつな、けしからぬ
onward|前方へ、先へ／前進する
penal|刑罰の、刑事上の
plight|苦境、窮状
privy|内々に関与している、内情に通じた
propulsion|推進（力）
rejoice|大いに喜ぶ
smear|中傷、汚れ／～を塗りつける、中傷する
stabilize|安定する、～を安定させる
stalk|～に忍び寄る、つきまとう／茎
symbolism|象徴性、象徴主義
astounding|驚くべき
audible|聞き取れる
blatant|露骨な、見え透いた
boon|恩恵、ありがたいもの
candid|率直な
caretaker|管理人、世話人／暫定の
confidentiality|機密性、守秘
cunning|ずる賢い／ずる賢さ
depiction|描写
diaspora|（民族の）離散、離散した人々
discord|不和、不一致
divinity|神性、神学
durability|耐久性
heed|～に注意を払う／注意
hideous|ひどく醜い、恐ろしい
imperfect|不完全な
implicit|暗黙の、絶対的な
insensitive|無神経な、鈍感な
lieu|代わり（in lieu of で）
liquidity|流動性、換金のしやすさ
mayhem|大混乱、騒乱
# 901〜1000
nostalgic|懐かしい、郷愁を誘う
oppressive|抑圧的な、重苦しい
patronage|後援、ひいき、縁故による登用
pinnacle|頂点、絶頂
qualitative|質的な
recognizable|すぐそれとわかる、見分けがつく
reconnaissance|偵察
reluctantly|しぶしぶ
rendition|演奏、演出、翻訳
sham|見せかけ、にせもの／偽の
stature|名声、身長
steward|管理人、客室乗務員、世話役
stout|頑丈な、太った、断固とした
tentative|暫定的な、ためらいがちな
topical|時事的な、話題の
variance|相違、ばらつき
contingency|不測の事態、万一の備え
deprivation|欠乏、剥奪
duly|正式に、しかるべく、予想どおり
dusk|夕暮れ、たそがれ
feasibility|実現可能性
frenzy|熱狂、逆上
inadvertently|うっかり、不注意に
insistence|主張、強い要求
invincible|無敵の、打ち破れない
kinetic|運動の、動的な
mania|熱狂、躁病
mythical|神話の、架空の
outset|最初、発端
peacock|クジャク、見えっ張り
precursor|前身、先駆け、前兆
preparatory|準備の、予備の
proclamation|宣言、布告
provocative|挑発的な、刺激的な
reflex|反射（作用）／反射的な
repayment|返済
simulate|～を模擬実験する、まねる
soluble|溶ける、解決できる
sturdy|頑丈な、たくましい
wrought|引き起こされた、細工された
abduction|誘拐、拉致
ancestral|先祖代々の
antiquity|古代、古さ、古代の遺物
aqua|水色、水
bleak|暗い、わびしい、荒涼とした
bogus|偽の、いんちきの
collusion|共謀、結託
contractual|契約上の
correctional|矯正の、刑務の
creamy|クリーム状の、なめらかな
deterioration|悪化、劣化
disbelief|信じられない気持ち、不信
discreet|慎重な、控えめな
enact|（法律）を制定する、上演する
fiddle|いじくる、ごまかす／バイオリン
grit|根性、砂粒／（歯）を食いしばる
horrendous|恐ろしい、ひどい
illegitimate|非合法の、不当な
illicit|不法の、禁制の
incompetence|無能
insomnia|不眠症
lunatic|狂気じみた人／ばかげた
lyrical|叙情的な
manifestation|表れ、現れ、表明
migrate|移住する、（鳥などが）渡る
miraculous|奇跡的な
mundane|ありふれた、平凡な
posterior|後部の、後の
repository|貯蔵所、宝庫
rumble|ゴロゴロ鳴る、低く響く／とどろき
saloon|酒場、大広間
sanction|制裁、認可／～を認可する
stale|新鮮でない、陳腐な
sterile|無菌の、不毛な、不妊の
stringent|厳しい、厳格な
torrent|激流、（言葉などの）連発
unjust|不当な、不公平な
wager|賭け／～を賭ける
annexation|併合
ascent|上昇、登ること
bigotry|偏見、頑迷
brute|獣、人でなし／力ずくの
camouflage|偽装、迷彩／～を偽装する
compliant|従順な、（規則に）準拠した
continuum|連続体
devoid|まったくない、欠いた
disparity|格差、相違
facade|建物の正面、うわべ
haze|もや、かすみ
hitch|支障、障害／～をつなぐ
incarnation|化身、生まれ変わり
inverse|逆の、反対の／逆
lavish|豪華な、気前のよい／～を惜しみなく与える
livelihood|生計、暮らし
miscellaneous|種々雑多な
misguided|見当違いの、誤った考えの
override|～を覆す、～に優先する
paranoia|被害妄想、偏執症
plurality|複数性、相対多数
psyche|精神、心
# 1001〜1100
reluctance|気が進まないこと、ためらい
replication|複製、再現
sediment|沈殿物、堆積物
solitude|孤独、一人でいること
stronghold|拠点、とりで
therein|その中に、その点に
turret|小塔、砲塔
ubiquitous|至るところにある
unconventional|型にはまらない、慣例に従わない
unnoticed|気づかれない
visionary|先見の明のある／先見の明のある人
adultery|不倫、姦通
agile|機敏な、頭の回転が速い
artifact|人工遺物、工芸品
austerity|緊縮（財政）、質素
bouquet|花束、（ワインの）香り
candidacy|立候補
commonplace|ありふれた／ありふれたこと
constrained|制約された、ぎこちない
contemplate|～を熟考する、じっと見つめる
crook|悪党、詐欺師、曲がった部分
depict|～を描く
dormant|休眠中の、活動を休止した
emulate|～を見習う、～と張り合う
evasion|回避、言い逃れ
eviction|立ち退き
expulsion|追放、除名
filth|汚物、不潔なもの
foliage|（木の）葉、群葉
foreclosure|差し押さえ、担保権の実行
hurdle|障害、困難／～を飛び越える
indefinite|無期限の、不明確な
insightful|洞察に満ちた
irrespective|～に関係なく（irrespective of で）
moderator|司会者、調停者
monstrous|巨大な、極悪な、ひどい
novice|初心者
parity|同等、等価
populous|人口の多い
reliant|頼っている、依存した
reputable|評判のよい、信頼できる
ripple|さざ波、波紋／波紋が広がる
solemn|厳粛な、まじめな
substantive|実質的な、重要な
unleash|～を解き放つ、引き起こす
vitality|活力、生命力
abyss|深淵、底知れない深み
accession|即位、加盟、就任
arson|放火
bourgeois|中産階級の、俗物的な
bribery|贈収賄
buzzer|ブザー
cohort|（統計上の）集団、仲間
culprit|犯人、原因
diffusion|拡散、普及
distrust|不信／～を信用しない
embark|乗り出す、乗船する
etiquette|礼儀作法
extravagant|ぜいたくな、法外な
heartfelt|心からの
hypocrite|偽善者
leftover|残りの／残り物
mammoth|巨大な／マンモス
motif|主題、模様
ominous|不吉な
peril|危険
precaution|予防措置、用心
principally|主に
professionalism|専門家らしさ、職業意識
rampage|暴れ回ること／暴れ回る
recharge|～を再充電する、元気を取り戻す
scrape|～をこする、すりむく／こすること
semantic|意味の、意味論の
skepticism|懐疑（的な態度）
startling|驚くべき、はっとさせる
strife|争い、不和
thrift|倹約、節約
turnaround|好転、方針転換、所要時間
anonymity|匿名（性）
appropriation|充当、流用、盗用
barrage|集中砲火、（質問などの）連発
brilliance|輝き、優れた才能
cocky|うぬぼれた、生意気な
conglomerate|複合企業
counterfeit|偽造の／偽造品／～を偽造する
edgy|いらいらした、先鋭的な
enormously|非常に、莫大に
evade|～を逃れる、回避する
futile|無駄な、むなしい
gritty|気骨のある、砂まじりの、生々しい
hinder|～を妨げる
inhibition|抑制、ためらい
intermittent|断続的な
intimidation|脅し、威嚇
iteration|反復、（改良を重ねた）版
maxim|格言、金言
melancholy|憂うつ、物悲しさ／物悲しい
meteorological|気象の
negligible|ごくわずかな、無視できる
obligatory|義務的な、お決まりの
# 1101〜1200
outpost|前哨基地、辺境の拠点
overflow|あふれる／あふれること
panorama|全景、パノラマ
pervasive|広く行き渡った、まん延した
predatory|捕食性の、人を食い物にする
preface|序文／～の前置きをする
punitive|懲罰的な
shameless|恥知らずの
skeletal|骨格の、やせ細った、骨組みだけの
sprinkle|～を振りかける、まく
stamina|スタミナ、持久力
stimuli|刺激（stimulus の複数形）
utopia|理想郷
abrupt|突然の、ぶっきらぼうな
acronym|頭字語
affidavit|宣誓供述書
antics|おどけたしぐさ、ばかげた行動
defamation|名誉毀損
divergent|異なる、分岐する
downright|まったくの／まったく
electrode|電極
exemplary|模範的な、見せしめの
expansive|広大な、開放的な
hysteria|集団的な興奮状態、ヒステリー
imperialism|帝国主義
imprint|跡、印象／～を刻み込む
incremental|少しずつ増える、漸進的な
infancy|幼年期、初期
manslaughter|過失致死、故殺
misdemeanor|軽犯罪
obnoxious|とても不快な、感じの悪い
rake|熊手／～をかき集める
resent|～に腹を立てる、憤慨する
retribution|報復、懲罰
rhetorical|修辞的な、答えを求めない
rightful|正当な
spawn|～を生み出す、産卵する／卵
suffrage|選挙権、参政権
surrogate|代理の／代理人
synopsis|概要、あらすじ
treatise|論文、専門書
variability|変動性、ばらつき
wooded|樹木の茂った
adhesive|接着剤／粘着性の
affluent|裕福な
annals|年代記、歴史の記録
antitrust|独占禁止の
arid|乾燥した、不毛の
bandit|山賊、盗賊
beneficiary|受益者、受取人
bipartisan|超党派の
buildup|増強、蓄積、高まり
colossal|巨大な、途方もない
conserve|～を保護する、節約する
constellation|星座、きら星のような集まり
contour|輪郭、等高線
curfew|夜間外出禁止令、門限
delusion|妄想、思い違い
depreciation|価値の下落、減価償却
endemic|特定の地域に固有の、風土性の
futuristic|未来的な
hallmark|特徴、品質証明
illiterate|読み書きのできない
inclination|傾向、意向、傾斜
inward|内側への、心の中の／内へ
legality|合法性
loosen|～を緩める、緩む
murderous|殺意のある、殺人的な
notoriously|悪名高く、周知のとおり
opaque|不透明な、わかりにくい
otter|カワウソ
populist|大衆迎合的な／大衆迎合主義者
porous|穴の多い、抜け穴だらけの
rein|手綱、統制／～を抑える
rustic|田舎風の、素朴な
saturation|飽和（状態）
sizable|かなり大きな
spartan|質素な、厳格な
subdued|沈んだ、控えめな
triumphant|勝ち誇った、大成功の
undisclosed|明らかにされていない
wrench|～をねじり取る／スパナ、つらい別れ
wretched|みじめな、ひどい
adolescence|思春期、青年期
analogous|類似した
archaic|古風な、時代遅れの
attribution|帰属、原因を帰すること
censor|～を検閲する／検閲官
centennial|100周年（記念）の／100周年
colonization|植民地化
cosmopolitan|国際的な、多様な文化を持つ
crippling|壊滅的な、身体を不自由にする
deductible|控除できる／免責金額
equitable|公平な、公正な
exert|（力・影響）を及ぼす、行使する
feudal|封建的な、封建制の
fodder|飼料、格好の材料
fumble|手探りする、～をしくじる
gourmet|美食家／高級な
hefty|多額の、大きくて重い
# 1201〜1300
incarceration|投獄、監禁
intrigue|～の興味をそそる／陰謀
mastermind|首謀者、立案者／～を陰で指揮する
noticeably|目に見えて、著しく
overrun|～にはびこる、～を超過する
pasture|牧草地
pathological|病的な、病理学の
plentiful|豊富な
rarity|珍しいもの、希少性
satirical|風刺的な
slump|不振、暴落／急落する
sparse|まばらな、乏しい
supplementary|補足の、追加の
temperament|気質、気性
torment|苦痛、苦悩／～を苦しめる
understatement|控えめな表現
undesirable|望ましくない
unification|統一
wildfire|山火事、野火
afar|遠くに、遠くから
awaken|～を目覚めさせる、目覚める
conjecture|推測、憶測／推測する
conspicuous|目立つ、人目を引く
crackdown|取り締まり、弾圧
craze|大流行、熱狂
escalate|段階的に拡大する、激化する
fiercely|激しく、猛烈に
genealogy|家系（図）、系譜学
heresy|異端、異説
hostess|女主人、接客係の女性
ignite|～に火をつける、火がつく
illumination|照明、解明
impoverished|貧困に陥った、やせた
ingenious|独創的な、巧妙な
moor|荒れ野／（船）を係留する
ostensibly|表向きは
outspoken|遠慮なくものを言う、率直な
palate|口蓋、味覚
pedestal|台座
pedigree|血統、経歴
phony|偽の、いんちきの／偽者
pinpoint|～を正確に特定する／正確な
prowess|優れた腕前、武勇
repent|悔い改める、後悔する
revert|（元の状態に）戻る
senseless|無意味な、意識を失った
slay|～を殺す
unavoidable|避けられない
unilateral|一方的な、単独の
acidic|酸性の
adherence|固守、遵守
amnesia|記憶喪失
bearded|ひげを生やした
bombardment|砲撃、爆撃、質問攻め
borderline|境界線上の、どっちつかずの／境界線
capitalize|～に乗じる、～を大文字で書く
charisma|カリスマ性、人を引きつける魅力
cognition|認知、認識
devastation|荒廃、壊滅的被害
devout|信心深い、熱心な
disproportionate|不釣り合いな、過度の
divisive|分裂を招く、対立を生む
embryo|胚、初期の段階
erratic|不安定な、気まぐれな
foreseeable|予見できる
hindsight|後知恵
indifference|無関心
inflict|（苦痛・損害）を与える
inhibit|～を抑制する、妨げる
intoxicated|酔った、夢中になった
involuntary|無意識の、不本意な
libel|（文書による）名誉毀損／～を中傷する
lofty|高尚な、非常に高い、高慢な
loom|ぼんやり現れる、迫る／織機
ludicrous|ばかげた、こっけいな
malice|悪意
nemesis|宿敵、天罰
ornamental|装飾用の
populace|大衆、住民
propagation|繁殖、普及、伝播
radiator|暖房器、放熱器
regal|王者らしい、堂々とした
ridicule|あざけり／～をあざける
sinful|罪深い
slander|（口頭での）中傷、名誉毀損／～を中傷する
sleek|つやのある、流線形の
socioeconomic|社会経済的な
subpoena|召喚状／～を召喚する
undeniable|否定できない
vigilant|油断のない、警戒した
additive|添加物
adept|熟達した／達人
advantageous|有利な
afloat|浮かんで、破産せずに
agility|機敏さ
alteration|変更、手直し
archipelago|群島、列島
causal|因果関係の、原因となる
citadel|城塞、とりで
colonialism|植民地主義
# 1301〜1400
deficient|不足した、欠陥のある
degenerate|悪化する、堕落する／堕落した
deterrent|抑止するもの、抑止力
disdain|軽蔑／～を軽蔑する
eerie|不気味な
enraged|激怒した
exponential|急激な、指数関数的な
farce|茶番、笑劇
fling|～を放り投げる／一時の楽しみ
frantic|半狂乱の、大慌ての
grudge|恨み／～を惜しむ
hectic|慌ただしい、非常に忙しい
informant|情報提供者
intrusive|立ち入った、押しつけがましい
malignant|悪性の、悪意のある
maverick|一匹狼、異端者／型破りの
molten|溶けた、溶融した
negligent|怠慢な、過失のある
optimize|～を最適化する
precedence|優先（権）
pristine|手つかずの、新品同様の
prognosis|（病気の）見通し、予測
retrieval|回収、検索
thematic|主題の、主題別の
unbiased|偏りのない、公平な
uncanny|不思議な、異様な
underdog|勝ち目の薄い側、弱者
vandalism|破壊行為、公共物の破損
wrongful|不当な、違法な
antagonist|敵対者、敵役
approximation|概算、近似
baroque|バロック様式の、過度に装飾的な
characterize|～を特徴づける、～と見なす
ethos|気風、精神
eyewitness|目撃者
forfeit|～を失う、没収される／没収
hinge|ちょうつがい／～次第である
manifold|多種多様な
measurable|測定できる、目に見える
meek|おとなしい、従順な
mellow|まろやかな、円熟した／円熟する
narration|語り、ナレーション
oblivion|忘却、無意識の状態
perish|死ぬ、滅びる
perpetrator|犯人、加害者
philanthropy|慈善活動、博愛
primal|原始の、根源的な
receptive|受け入れる用意がある、理解のある
redundancy|余剰、人員削減、重複
relapse|再発、逆戻り／再発する
relish|～を楽しむ／喜び、味わい
rendezvous|会う約束、待ち合わせ場所／落ち合う
reversible|元に戻せる、裏返して使える
shred|～を細かく裂く／切れ端、かけら
simplistic|単純すぎる
supervisory|監督の
treacherous|危険な、裏切りの
untold|計り知れない、語られていない
versatility|多才、汎用性
attributable|～に起因する
bastion|とりで、拠り所
bolster|～を強化する、支える
cohesive|まとまりのある、結束した
contentious|論争を呼ぶ、議論好きな
denomination|宗派、額面金額
embargo|禁輸措置、通商禁止／～を禁じる
embodiment|具現、体現したもの
extremism|過激主義
gloom|暗がり、憂うつ
hypocritical|偽善的な
incidental|付随的な、偶発的な
insurgency|反乱、暴動
intimidate|～を脅す、怖がらせる
labyrinth|迷宮、迷路
limbo|宙ぶらりんの状態
nurture|～を育てる、はぐくむ／養育
oblivious|気づいていない
overt|公然の、明白な
patriarch|家長、長老
perjury|偽証（罪）
pious|信心深い、殊勝ぶった
proprietor|所有者、経営者
seamless|継ぎ目のない、円滑な
silhouette|影、輪郭
smug|独りよがりの、得意げな
stagnant|停滞した、よどんだ
toughness|強さ、たくましさ
unethical|非倫理的な
valiant|勇敢な
vigilante|自警団員
abstraction|抽象概念、放心
adjunct|付属物、補助的なもの／非常勤の
blasphemy|神への冒涜
bulky|かさばる、大きくて扱いにくい
carnage|大虐殺、大惨事
conclusive|決定的な、確実な
conservatory|音楽学校、温室
depressive|うつ病の、憂うつにさせる
descendant|子孫
disperse|散らばる、～を分散させる
# 1401〜1500
exhaustive|徹底的な、網羅的な
fermentation|発酵
fiasco|大失敗
fruitful|実りの多い、有益な
inaccessible|近づけない、利用できない
inferno|大火、地獄のような場所
omission|省略、脱落、怠慢
periphery|周辺、外縁
prelude|前触れ、前奏曲
remnant|残り、名残
serenity|静けさ、平穏
subtly|微妙に、巧妙に
toxin|毒素
unequal|不平等な、等しくない
unresolved|未解決の
writ|令状
adversary|敵、対戦相手
afflicted|苦しめられた、悩まされた
ascertain|～を確かめる、突き止める
bloodshed|流血、殺りく
clinch|～に決着をつける、（勝利）を決める
collide|衝突する
commemoration|記念、追悼（式）
compulsive|やめられない、強迫的な
congenital|先天性の、生まれつきの
corrective|矯正の、是正する
crumble|崩れる、～を砕く
denote|～を示す、意味する
dossier|（人物・事件の）関係書類一式
eradicate|～を根絶する
extortion|ゆすり、恐喝
feral|野生化した、野性的な
ineligible|資格のない
infusion|注入、点滴、煎じた飲み物
mediator|仲介者、調停者
mirage|蜃気楼、はかない夢
mockery|あざけり、まがい物
occult|オカルト、神秘的なもの／神秘の
ovation|大喝采
perch|止まる、腰かける／止まり木
perpendicular|垂直の、直角の
physique|体格
proficient|熟達した、堪能な
purification|浄化、精製
readable|読みやすい、判読できる
recourse|頼ること、頼みの綱
regimen|養生法、治療計画
roundup|総まとめ、一斉検挙
sequential|連続的な、順を追った
sporadic|散発的な
undue|過度の、不当な
wreckage|残骸
adamant|断固とした、譲らない
archival|記録保管の、古文書の
ardent|熱烈な
assorted|各種取り合わせた、雑多な
barbarian|野蛮人、未開人
bedrock|岩盤、基盤
brittle|もろい、壊れやすい
cohesion|結束、まとまり
compel|～に強いる、余儀なくさせる
conduit|導管、経路
constraint|制約、抑制
defunct|機能を停止した、今はない
degrade|～の品位を落とす、劣化させる
diffuse|拡散した、散漫な／～を拡散させる
emancipation|解放
entropy|エントロピー、無秩序
epitome|典型、縮図
extradition|（犯罪人の）引き渡し
frail|か弱い、もろい
fray|ほつれる、すり減る／争い
grotesque|異様な、奇怪な
harass|～を悩ませる、嫌がらせをする
interchangeable|交換できる、互換性のある
irreversible|元に戻せない
lawless|無法の
predominant|主要な、優勢な
refine|～を精製する、洗練する
rupture|破裂、決裂／破裂する
scandalous|けしからぬ、恥ずべき
solace|慰め
splinter|破片、とげ／分裂する
tinker|いじくり回す
topography|地形、地勢
unintended|意図しない
unmanned|無人の
vantage|有利な位置、見晴らしのよい地点
whim|気まぐれ、思いつき
withhold|～を差し控える、与えずにおく
zeal|熱意、熱心さ
abort|～を中止する、中絶する
abound|たくさんある、富む
audacity|大胆さ、厚かましさ
barbaric|野蛮な、残忍な
coercion|強制、威圧
competency|能力、適性
dogma|教義、独断的な考え
encompass|～を含む、取り囲む
evoke|～を呼び起こす
# 1501〜1600
fixation|執着、固定
flatter|～にお世辞を言う、～を引き立てる
formative|人格形成の、発達上重要な
fret|くよくよ悩む、気をもむ
gratification|満足（感）、喜び
gruesome|身の毛のよだつ、むごたらしい
inhuman|非人間的な、残酷な
latent|潜在的な
limitless|無限の
literate|読み書きができる、知識のある
lucid|明快な、意識のはっきりした
merciful|慈悲深い、ありがたい
midwife|助産師
misinformation|誤った情報
mobilization|動員
monologue|独白、長い一人語り
mutiny|（船員・兵士の）反乱／反乱を起こす
parasitic|寄生性の
pendulum|振り子、（世論の）揺れ
poignant|胸を打つ、痛切な
potency|効力、力
precarious|不安定な、危うい
pretext|口実
quaint|古風で趣のある
reassurance|安心させること、保証
redistribution|再分配
restrain|～を抑える、制止する
secession|（国・組織からの）離脱、分離独立
sectarian|宗派の、派閥的な
seminal|独創性に富み影響力の大きい
snag|思わぬ障害／～を引っかける
sophistication|洗練、精巧さ
tweak|～を微調整する、ひねる／微調整
unison|一致、同音
unthinkable|考えられない、想像もできない
uplift|～を高揚させる、持ち上げる／向上
venerable|尊敬すべき、由緒ある
angst|不安、苦悩
apathy|無関心、無気力
artisan|職人
bane|悩みの種、災いのもと
concerto|協奏曲
contraception|避妊
crouch|しゃがむ、かがむ／しゃがんだ姿勢
detriment|損害、不利益
dismal|陰気な、惨めな、お粗末な
dismay|ろうばい、落胆／～をろうばいさせる
disparate|まったく異なる、共通点のない
dissemination|普及、流布
domestically|国内で、家庭内で
expel|～を追放する、排出する
frown|顔をしかめる／しかめっ面
hamper|～を妨げる／大型のかご
heroism|英雄的行為、勇敢さ
hierarchical|階層的な
infidelity|不貞、不倫
inventive|創意に富んだ
knack|こつ、才覚
liquidation|清算、破産整理
mercenary|傭兵／金目当ての
morbid|病的な、不健全な
ordinarily|通常は
orthodoxy|正統的な考え方、正統派の教義
paternal|父親の、父方の
polarization|二極化、分極
projectile|発射物、飛翔体
protracted|長引いた
realist|現実主義者
remuneration|報酬
revoke|～を取り消す、無効にする
secretive|秘密主義の
undisputed|誰もが認める、異論のない
visceral|本能的な、内臓の
wrongdoing|不正行為、悪事
aggregation|集合、集計
antidote|解毒剤、対抗手段
attest|証明する、証言する
auditory|聴覚の
avenge|～の復讐をする
aversion|嫌悪、強い反感
brood|くよくよ考える／ひとかえりのひな
cessation|停止、中断
commend|～を称賛する、推薦する
emigration|（他国への）移住
emit|～を放出する、発する
extant|現存する
fathom|～を理解する、見抜く
fictitious|架空の、虚偽の
firsthand|直接の／直接に
hedgehog|ハリネズミ
heinous|凶悪な、極悪の
impeccable|非の打ちどころのない
infiltrate|～に潜入する、浸透する
intolerant|不寛容な、耐えられない
lament|～を嘆く／嘆き
malpractice|医療過誤、職務上の不正
manipulative|人を巧みに操る
payoff|報酬、見返り、賄賂
pesticide|農薬、殺虫剤
prodigy|神童、天才児
# 1601〜1700
reptile|は虫類
sluggish|動きの鈍い、不活発な
slum|スラム、貧民街
snare|わな／～をわなで捕らえる
strata|地層、階層（stratum の複数形）
submissive|従順な、服従的な
timid|臆病な、内気な
trickle|ちょろちょろ流れる／少量の流れ
ultimatum|最後通告
uninterrupted|途切れない、連続した
affirmation|肯定、断言、確認
ascend|登る、上昇する
bittersweet|ほろ苦い、うれしくも悲しい
blight|荒廃させるもの、胴枯れ病／～を損なう
cinematography|映画撮影技術
conducive|助けとなる、貢献する
conscientious|良心的な、念入りな
consensual|合意の上の
deceit|欺くこと、詐欺
denounce|～を公然と非難する、告発する
derogatory|軽蔑的な、見下した
dismantle|～を解体する、廃止する
enigma|謎、不可解な人・もの
euphoria|強い幸福感、高揚
firewall|防火壁、ファイアウォール
forceful|力強い、説得力のある
forte|得意なこと、長所
insidious|知らぬ間に進行する、陰険な
jargon|専門用語、わけのわからない言葉
leakage|漏れ、漏洩
logistical|物流の、段取り上の
loophole|抜け穴
luminous|光を発する、輝く
malnutrition|栄養失調
meticulous|細心の、几帳面な
modesty|謙遜、控えめ
nigh|近い、近くに
nocturnal|夜行性の、夜の
overlay|～に重ねる、かぶせる／上に重ねるもの
patriarchal|家父長制の
pitiful|哀れな、情けない
plethora|過多、多量
prerequisite|前提条件
recount|～を詳しく話す、数え直す
recurrent|繰り返し起こる
requisite|必要な／必需品
secluded|人里離れた、隔離された
seduce|～を誘惑する、そそのかす
shun|～を避ける、遠ざける
upkeep|維持（費）
vigil|寝ずの番、徹夜の祈り
whirlwind|旋風、慌ただしい出来事
aristocratic|貴族の、貴族的な
clout|影響力、強打
commemorative|記念の
converge|集まる、一点に向かう
cryptic|謎めいた、暗号のような
discern|～を見分ける、識別する
fanatic|熱狂的な愛好者、狂信者
formulate|～を考案する、明確に述べる
fragmentation|分裂、断片化
hoard|～をため込む／蓄え
horde|大群、群衆
imp|小鬼、いたずらっ子
inconsistency|矛盾、一貫性のなさ
ingenuity|創意工夫、発明の才
moot|議論の余地がある、実際上の意味がない
partake|参加する、（飲食を）共にする
plagiarism|盗作、剽窃
puncture|穴、パンク／～に穴を開ける
renegade|裏切り者、離反者／離反した
seductive|魅惑的な、人を引きつける
summarize|～を要約する
unfounded|根拠のない
valor|武勇、勇敢さ
vernacular|その土地の言葉、日常語／土地固有の
virtuous|徳の高い、高潔な
abrasive|とげとげしい、研磨用の／研磨剤
accomplice|共犯者
annihilation|全滅、絶滅
armistice|休戦（協定）
armory|兵器庫
auspices|後援、主催
calamity|大災害、惨事
chronology|年代順、年表
diversification|多様化、多角化
enactment|（法律の）制定、上演
enlighten|～を啓発する、教える
envious|うらやんでいる、ねたんだ
erroneous|誤った
familial|家族の、家系の
frivolous|軽薄な、くだらない
fruition|実現、成就
giddy|めまいがする、浮かれた
grandeur|壮大さ、威厳
homogeneous|同質の、均質の
intangible|無形の、つかみどころのない
metaphysical|形而上学の、抽象的な
meteorology|気象学
mindless|思慮のない、頭を使わない
# 1701〜1800
negotiable|交渉の余地がある
nudge|～をそっと押す、促す／軽いひと押し
ploy|策略、手口
presumption|推定、ずうずうしさ
reactionary|反動的な／反動主義者
reconstruct|～を再建する、再現する
stewardship|管理、責任ある運営
synergy|相乗効果
whopping|途方もなく大きい
absurdity|不条理、ばかばかしさ
alchemy|錬金術、不思議な力
clandestine|秘密の、内密の
clutter|散らかったもの／～を散らかす
conqueror|征服者
crafty|ずる賢い、悪知恵の働く
debacle|大失敗、総崩れ
defiant|反抗的な、挑戦的な
deformed|変形した、奇形の
disarm|～の武装を解除する、警戒心を解く
eminence|名声、高位
entail|～を伴う、必要とする
fallacy|誤った考え、誤信
feeble|弱々しい、説得力のない
fend|自力でやっていく、（攻撃を）かわす
ferocious|獰猛な、猛烈な
fragrant|香りのよい
gallant|勇敢な、女性に親切な
hermit|隠者、世捨て人
indecent|下品な、わいせつな、不適切な
inquest|検死審問、死因審問
mercantile|商業の、商人の
migratory|移動性の、渡りをする
mingle|混ざる、歓談する
nomenclature|命名法、専門用語体系
outcry|激しい抗議、非難の声
panoramic|全景の、パノラマの
preferential|優先的な、優遇の
prolong|～を長引かせる、延長する
rambling|とりとめのない、広くて不規則な
rowdy|騒々しい、乱暴な
subversive|体制を覆そうとする、破壊的な
suggestive|連想させる、思わせぶりな
totalitarian|全体主義の
translucent|半透明の
unfavorable|不利な、好ましくない
wield|（権力・武器）を振るう
affirm|～を断言する、支持する
agrarian|農業の、農地の
anecdote|逸話、小話
appease|～をなだめる、～に譲歩する
aptitude|適性、才能
assassinate|～を暗殺する
bespoke|注文仕立ての、特注の
brisk|きびきびした、活発な
bubbly|陽気な、泡立つ
climatic|気候の
conformity|従うこと、同調
correlate|相関する、～を関連づける
courteous|礼儀正しい、丁寧な
defer|～を延期する、従う
demeanor|態度、物腰
deplorable|嘆かわしい、ひどい
deranged|正気を失った、錯乱した
detour|回り道、迂回
equate|～を同一視する
ethereal|この世のものとは思えない、非常に優美な
expanse|広がり、広大な区域
fanfare|ファンファーレ、派手な宣伝
favorably|好意的に、有利に
flask|フラスコ、携帯用の瓶
frosty|霜の降りた、冷ややかな
individuality|個性
insurgent|反乱者、暴徒／反乱の
oblique|遠回しの、斜めの
obscurity|無名、不明瞭さ
onslaught|猛攻撃、激しい攻撃
paramilitary|準軍事的な／準軍事組織の一員
permissible|許される、許容できる
platonic|純粋に精神的な、プラトン的な
recurrence|再発、繰り返し
refinement|洗練、改良、精製
repel|～を撃退する、はねつける
revamp|～を刷新する、改造する／刷新
sensibility|感受性、感性
slumber|眠り／眠る
staunch|忠実な、筋金入りの／（出血）を止める
swoop|急降下する、急襲する／急襲
transatlantic|大西洋横断の、大西洋の向こうの
unparalleled|比類のない、前代未聞の
unsolicited|頼まれていない、一方的に送られた
unveil|～を公開する、除幕する
unworthy|値しない、ふさわしくない
vocation|天職、使命感
agitation|動揺、扇動
agreeable|感じのよい、同意する
assertive|自己主張の強い、はっきり物を言う
assimilation|同化、吸収
augment|～を増やす、増強する
breakaway|離脱した、分離独立の／離脱
caricature|風刺画、戯画／～を戯画化する
# 1801〜1900
companionship|仲間づきあい、交友
complacent|自己満足した、のんきな
counteract|～を打ち消す、中和する
courtship|求愛、交際期間
deepen|深まる、～を深める
devise|～を考案する
enclave|飛び地、（周囲と異なる）孤立地域
entourage|取り巻き、随行員
epoch|時代、新時代
forgery|偽造（品）
gimmick|（注意を引くための）仕掛け、からくり
groundwork|基礎、土台
imposition|押しつけ、課すこと
impromptu|即興の、準備なしの／即興で
indulgence|甘やかし、ふけること、道楽
intersect|交差する、交わる
nonexistent|存在しない
notoriety|悪評、悪名
ornate|凝った装飾の、華麗な
palpable|はっきり感じられる、明白な
perk|（給与以外の）特典、役得
perpetuate|～を永続させる、長引かせる
perverse|ひねくれた、道理に反した
plume|（煙などの）柱、羽飾り
plump|ふっくらした、丸々とした
prophetic|予言的な
provocation|挑発
recoil|後ずさりする、ひるむ／反動
remission|（病気の）一時的回復、減刑
renounce|～を放棄する、断念する
repentance|悔い改め、後悔
resonate|共鳴する、心に響く
restitution|賠償、返還
scholastic|学業の、学校の
scourge|災いのもと、天罰
sobriety|しらふ、禁酒、まじめさ
stagnation|停滞、不況
tangent|わき道、接線
unearthed|発掘された、明るみに出た
unqualified|資格のない、無条件の
unquestionably|疑いなく
unravel|～を解明する、ほどける
wasteland|荒れ地、不毛の地
watchdog|監視機関、番犬
zest|熱意、風味
zoology|動物学
abstinence|節制、禁欲
allege|～を（証拠なしに）主張する
arduous|骨の折れる、困難な
composure|落ち着き、平静
concur|同意する、意見が一致する
deport|～を国外追放する
dispersion|分散、散布
entangled|絡まった、巻き込まれた
exploratory|探索の、予備的な
facet|側面、（宝石の）切り子面
finesse|巧みさ、手際のよさ／～を巧みに処理する
gist|要点、主旨
grievous|重大な、ひどい
impunity|罰を受けないこと
infertility|不妊、不毛
insolvency|支払い不能、破産
intermediary|仲介者／中間の
laughable|ばかばかしい、笑うべき
makeshift|間に合わせの
mobilize|～を動員する、結集する
perilous|危険な
repulsive|ひどく不快な、反発する
sadistic|加虐的な、残酷な
slant|傾き、偏った見方／傾く
slur|中傷、不明瞭な発音／～を不明瞭に発音する
sulphur|硫黄
tacky|安っぽい、べたつく
thaw|解ける、和らぐ／雪解け
tout|～を盛んに宣伝する、売り込む
transnational|多国籍の、国境を越えた
wares|商品、売り物
anecdotal|逸話に基づく、裏づけの乏しい
animosity|敵意、憎悪
cavalier|無頓着な、ぞんざいな
condone|～を大目に見る、容認する
congested|混雑した、詰まった
consecrated|聖別された、神聖な
contiguous|隣接する、連続した
deflect|～をそらす、かわす
desolate|荒れ果てた、わびしい
devour|～をむさぼり食う、むさぼり読む
disarmament|軍縮、武装解除
divergence|相違、分岐
embody|～を具現する、体現する
envision|～を思い描く
equivalence|同等、等価
esoteric|難解な、奥義の
euthanasia|安楽死
flammable|燃えやすい、可燃性の
grapefruit|グレープフルーツ
incomprehensible|理解できない
inertia|惰性、不活発、慣性
infestation|（害虫などの）まん延、大量発生
insurrection|反乱、暴動
# 1901〜2000
intolerable|耐えられない
mutilation|切断、損傷
nifty|気の利いた、巧みな
pathogen|病原体
pretentious|気取った、もったいぶった
promenade|遊歩道、散歩道／そぞろ歩く
proximal|近位の、中心に近い
rapport|信頼関係、打ち解けた関係
rapture|有頂天、歓喜
rectify|～を正す、是正する
rudimentary|初歩的な、原始的な
screenwriter|脚本家
shroud|覆い、経帷子／～を覆い隠す
solicitation|勧誘、懇願
uncharted|未知の、地図にない
unspoken|暗黙の、口に出さない
vendetta|長年の抗争、復讐
alienation|疎外（感）、離反
anthropologist|人類学者
attrition|消耗、（人員の）自然減
autopilot|自動操縦（装置）
budgetary|予算の
cliche|決まり文句、陳腐な表現
collaborator|協力者、共同制作者
cumbersome|扱いにくい、煩雑な
curt|そっけない、ぶっきらぼうな
cyclical|周期的な、循環する
diversify|多様化する、多角化する
elixir|万能薬、霊薬
epiphany|突然のひらめき、悟り
fable|寓話、作り話
fatality|死者、不慮の死
foresight|先見の明
forsaken|見捨てられた
incision|切開、切り込み
indistinguishable|区別がつかない
intensify|強まる、～を強める
martyrdom|殉教、受難
procure|～を入手する、調達する
propensity|傾向、性癖
ruse|策略、計略
seniority|年功、先任
severance|退職手当、切断、断絶
singularity|特異性、特異点
socialize|人と交際する、社会に適応させる
strut|気取って歩く／支柱
swirl|渦を巻く／渦
tycoon|実業界の大物
undeniably|否定しようもなく、明らかに
unorthodox|型破りな、正統でない
uproar|大騒ぎ、激しい抗議
vigilance|警戒、用心
allure|魅力／～を魅惑する
authorship|著者であること、原作者
burnout|燃え尽き、極度の疲労
buyout|買収、買い取り
caveat|ただし書き、警告
chore|雑用、面倒な仕事
circumvent|～を回避する、すり抜ける
clique|派閥、排他的な仲間
contemplation|熟考、黙想
cranky|気難しい、不機嫌な
distraught|取り乱した
drizzle|霧雨／霧雨が降る
emergent|新興の、現れつつある
enchanting|魅惑的な、うっとりさせる
exalted|高位の、高貴な、有頂天の
formality|形式的な手続き、堅苦しさ
fortitude|不屈の精神、忍耐
geopolitical|地政学の
grievance|不満、苦情
grunt|うなる、ぶつぶつ言う／うなり声
harmonious|調和のとれた、仲のよい
hitherto|これまで、今まで
incline|傾ける、～する気にさせる／坂
incubation|潜伏（期間）、ふ化
insignia|記章、しるし
interplay|相互作用
kindred|同類の、同族の／親族
mischievous|いたずら好きな、悪意のある
nameless|名もない、匿名の
outburst|（感情の）爆発、噴出
preventable|予防できる
provenance|出所、来歴
ravine|峡谷、谷間
redress|救済、補償／～を是正する
regenerate|再生する、～を再生させる
reincarnation|生まれ変わり、輪廻
rife|はびこっている、広まっている
sever|～を切断する、断ち切る
sharpen|～を鋭くする、研ぐ
stoic|禁欲的な、冷静な／禁欲主義者
unchecked|抑制されない、野放しの
unsustainable|持続不可能な
utopian|理想郷の、空想的な
wholeheartedly|心から、全面的に
zenith|絶頂、天頂
abbreviation|略語、省略形
adhesion|粘着、付着
atrocious|ひどい、残虐な
# 2001〜2100
avert|～を避ける、防ぐ、（目）をそらす
avian|鳥の、鳥類の
chastity|純潔、貞節
circumstantial|状況による、付随的な
claimant|請求者、申立人
closeness|近さ、親密さ
contextual|文脈上の、状況に即した
cordon|非常線／～に非常線を張る
cram|～を詰め込む、詰め込み勉強をする
decipher|～を解読する
delve|掘り下げる、探究する
depletion|枯渇、減少
dispersal|分散、解散、散布
effortless|楽々とした、努力を要しない
fluke|まぐれ、偶然の幸運
gauntlet|厳しい試練、長手袋
ghostly|幽霊のような、ぼんやりした
idealistic|理想主義的な
impede|～を妨げる、遅らせる
inflamed|炎症を起こした、激した
inhumane|非人道的な、残酷な
instantaneous|即時の、瞬間的な
jinx|不運をもたらすもの、ジンクス／～に不運をもたらす
jobless|失業中の
jurisprudence|法学、法体系
justifiable|正当と認められる
linkage|関連、連結
ratification|批准、承認
reclamation|埋め立て、再生利用、開墾
resettlement|再定住、移住
sedentary|座りがちな、定住性の
situational|状況の、状況に応じた
soggy|びしょぬれの、ふやけた
steadfast|揺るぎない、忠実な
stoop|かがむ、身を落とす／前かがみ
stylistic|文体の、様式上の
superstitious|迷信深い
touchy|怒りっぽい、扱いにくい
trampoline|トランポリン
tranquil|静かな、穏やかな
transformative|変革をもたらす
unsuspecting|疑いを持たない、何も知らない
unwelcome|歓迎されない、ありがたくない
abode|住居、住まい
abomination|忌まわしいもの、嫌悪
acutely|強く、鋭く
allotment|割り当て、市民農園
antisocial|反社会的な、非社交的な
astray|道に迷って、道を踏み外して
blunder|大失敗、へま／大失敗をする
commotion|騒ぎ、騒動
cynicism|冷笑的な態度、皮肉な見方
debatable|議論の余地のある
diligently|勤勉に、熱心に
duality|二重性、二元性
endearing|愛らしい、人に好かれる
extermination|根絶、駆除
habitable|住むのに適した
hegemony|覇権、主導権
hypnotic|催眠の、うっとりさせる
inaction|何もしないこと、無為
inconclusive|結論の出ない、決定的でない
inept|不器用な、無能な
inexplicable|説明のつかない
innovate|革新する、新しいものを取り入れる
kinship|親族関係、親近感
lenient|寛大な、甘い
mediate|仲裁する、調停する
modernism|近代主義、モダニズム
nomadic|遊牧の、放浪の
penance|罪の償い、苦行
preposterous|ばかげた、途方もない
preventative|予防の
proverbial|ことわざにある、よく知られた
quirk|奇妙な癖、巡り合わせ
rabid|狂犬病にかかった、狂信的な
reiterate|～を繰り返し述べる
scorn|軽蔑／～を軽蔑する
skillful|熟練した、巧みな
stampede|集団暴走、殺到／殺到する
standoff|こう着状態、にらみ合い
stately|堂々とした、威厳のある
tantrum|かんしゃく
tectonic|地殻構造の、非常に大きな
treachery|裏切り、背信
unmatched|比類のない、無敵の
upheaval|激変、大変動
veneer|うわべ、化粧板
vouch|保証する、請け合う
aggravating|悪化させる、いらいらさせる
altercation|口論、激論
amplification|増幅、拡充
brunt|（攻撃などの）矢面、主な衝撃
burgeoning|急成長している
cadence|抑揚、律動
condensation|結露、凝縮
confluence|合流（点）、集まり
contraband|密輸品、禁制品
custodian|管理人、保護者
degeneration|退化、悪化、変性
# 2101〜2200
delinquent|非行の、滞納している／非行少年
eradication|根絶、撲滅
fickle|気まぐれな、変わりやすい
forage|（食料を）探し回る／飼料
fraught|（危険などを）はらんだ、緊迫した
grapple|取り組む、格闘する
groan|うめく、不平を言う／うめき声
hoist|～を持ち上げる、掲げる／巻き上げ機
incite|～を扇動する、駆り立てる
intoxication|酩酊、中毒
jagged|ぎざぎざの
mediocrity|平凡、凡庸
murky|濁った、不透明な、怪しげな
neutralize|～を無力化する、中和する
omen|前兆、兆し
overgrown|草木が茂った、育ちすぎた
pedagogy|教育学、教授法
philanthropist|慈善家
readership|読者数、読者層
relinquish|～を放棄する、手放す
resolute|断固とした、決意の固い
salient|顕著な、目立った
sentient|感覚を持つ、意識のある
separatist|分離独立主義者／分離独立の
snippet|断片、抜粋
strenuous|激しい、精力的な
surcharge|追加料金／～に追加料金を課す
unharmed|無傷の、無事な
unspeakable|言葉にできない、言語に絶する
untimely|時ならぬ、早すぎる
workable|実行可能な、うまくいく
abundantly|豊富に、十分に
adoration|崇拝、熱愛
affliction|苦痛、苦しみのもと
backfire|裏目に出る、逆効果になる
conspiring|共謀している
corrosive|腐食性の、むしばむ
cowardice|臆病、卑怯
disqualification|失格、資格剥奪
enigmatic|謎めいた、不可解な
exhale|息を吐く
fission|核分裂、分裂
flurry|にわか雪、慌ただしい動き
genomic|ゲノムの
glimmer|かすかな光、わずかな兆し／かすかに光る
humankind|人類
limelight|脚光、注目の的
loathe|～をひどく嫌う
momentous|重大な、極めて重要な
observable|観察できる、目に見える
pang|（心・体の）激しい痛み、うずき
participatory|参加型の
refurbishment|改装、修復
revel|大いに楽しむ、酔いしれる
scapegoat|身代わり、罪を負わされる人
shambles|大混乱、めちゃくちゃな状態
shrewd|抜け目のない、洞察力のある
shudder|身震いする／身震い
smuggle|～を密輸する、こっそり持ち込む
spire|尖塔
sprout|芽を出す、急に現れる／芽
stench|悪臭
subsistence|最低限の生活、生存
subterranean|地下の
superhuman|超人的な
tenacity|粘り強さ、固執
tolerable|耐えられる、まあまあの
trespass|不法侵入する／不法侵入
unknowingly|知らずに
untouchable|手出しのできない、無敵の
unwarranted|不当な、正当な理由のない
wishful|願望に基づく、希望的な
actuality|現実、実際
alibi|アリバイ、現場不在証明
astute|機敏な、抜け目のない
brazen|厚かましい、ずうずうしい
burrow|巣穴／穴を掘る
causation|因果関係、原因
centerpiece|目玉、中心となるもの
clasp|～を握りしめる／留め金
compulsion|強制、衝動
condescending|人を見下すような、恩着せがましい
conjure|～を呼び出す、思い起こさせる
copious|大量の、豊富な
cordial|心からの、友好的な／果汁飲料
craftsmanship|職人技、技能
creditor|債権者
custodial|拘禁の、保護の
derelict|放置された、荒れ果てた
dispel|～を払いのける、一掃する
edict|布告、勅令
egregious|実にひどい、目に余る
elasticity|弾力性、融通性
epoxy|エポキシ樹脂
extraterrestrial|地球外の／地球外生命体
fiend|悪魔、鬼のような人、～狂
fledgling|駆け出しの、発足したばかりの／ひな鳥
flicker|ちらちら光る、揺らめく／揺らめき
flimsy|薄っぺらな、説得力のない
gambit|（優位に立つための）策、先手
# 2201〜2300
gullible|だまされやすい
gust|突風／突風が吹く
hearth|炉床、暖炉、家庭
hemorrhage|大出血、大量流出／大量に失う
idealism|理想主義
impeach|～を弾劾する
improvisation|即興、その場しのぎ
jeopardize|～を危険にさらす
lexicon|語彙、辞書
lobbyist|ロビイスト、陳情者
lurk|潜む、待ち伏せする
metaphorical|比喩的な
mismatch|不一致、不釣り合い
monastic|修道院の、禁欲的な
multilateral|多国間の
namesake|同名の人・もの
normative|規範的な
objectivity|客観性
palliative|緩和の、一時しのぎの／緩和剤
parable|たとえ話、寓話
pastime|娯楽、気晴らし
patchwork|寄せ集め、つぎはぎ細工
pesky|厄介な、うるさい
plunder|～を略奪する／略奪品
pseudonym|偽名、筆名
rationality|合理性
rebuke|叱責、非難／～を叱責する
rebuttal|反論、反証
retaliate|報復する、仕返しする
rouse|～を目覚めさせる、奮起させる
scant|乏しい、わずかな
semblance|外観、見せかけ
slowdown|減速、景気後退
snug|居心地のよい、ぴったり合う
spoof|パロディ、もじり／～をもじる
susceptibility|影響の受けやすさ、感受性
tangle|もつれ、混乱／もつれる
transcend|～を超える、超越する
trope|よく使われる表現・筋立て、比喩
undercut|～より安く売る、～を弱める
unproductive|非生産的な、実りのない
whence|そこから、どこから
whimsical|気まぐれな、風変わりで愉快な
anthropological|人類学の
apprehension|不安、逮捕、理解
articulation|明確な表現、発音、関節
assailant|襲撃者、加害者
atonement|償い、贖罪
auspicious|幸先のよい、めでたい
barricade|バリケード、障害物／～を封鎖する
baseless|根拠のない
benefactor|後援者、恩人
dichotomy|二分、二項対立
diminutive|小柄な、ごく小さい／愛称
dispensary|薬局、診療所
doubtless|疑いなく、おそらく
emphatic|断固とした、強調された
gait|歩き方、足取り
heyday|全盛期
impart|～を伝える、授ける
incoherent|支離滅裂な、筋の通らない
interlude|合間、幕間
irritable|怒りっぽい、いらいらした
lukewarm|なまぬるい、気乗りしない
mismanagement|管理の誤り、不始末
motley|雑多な、寄せ集めの
nuance|微妙な違い、ニュアンス
obstruct|～を妨害する、ふさぐ
outcast|のけ者、追放された人
penultimate|最後から2番目の
pleasurable|楽しい、心地よい
propagate|～を広める、繁殖させる
redefine|～を再定義する
reinstate|～を復職させる、元に戻す
remit|権限、任務／～を送金する、免除する
resumption|再開
retrograde|後退する、逆行の
revere|～を崇敬する、あがめる
rout|完敗、総崩れ／～を完敗させる
stardom|スターの地位
subtlety|微妙さ、繊細さ
symptomatic|症状を示す、～の表れである
watchful|用心深い、注意深い
wayward|わがままな、言うことを聞かない
yoke|くびき、束縛／～をつなぐ
ailing|病んでいる、不振の
aloft|高く、空中に
amalgamation|合併、融合
beset|～を悩ませる、取り囲む
cavern|大きな洞窟
chivalry|騎士道、女性への礼儀
cocoon|まゆ、保護する覆い／～を包み込む
credence|信用、信ぴょう性
debtor|債務者
derail|～を脱線させる、頓挫させる
distort|～をゆがめる、歪曲する
dreary|わびしい、退屈な
evaporation|蒸発
foregoing|前述の、先の
gallows|絞首台
# 2301〜2400
henceforth|今後は、これ以降
heterogeneous|異質な、雑多な
huddle|身を寄せ合う、丸くなる／集まり
indignation|憤り、義憤
ingrained|深くしみ込んだ、根深い
lesion|病変、損傷
lull|小休止、なぎ／～をなだめる
moratorium|一時停止、支払い猶予
munch|むしゃむしゃ食べる
nascent|生まれたばかりの、初期の
neurotic|神経質な、神経症の／神経症の人
prerogative|特権、大権
prudence|慎重さ、分別
remedial|補習の、治療の、是正の
repressive|抑圧的な
resourceful|機転の利く、才覚のある
sacrificial|犠牲の、いけにえの
scorching|焼けつくような、猛烈に暑い
scribe|書記、写字生
sentry|歩哨、見張りの兵
specter|亡霊、不安の影
strewn|まき散らされた、散らかった
tact|機転、如才なさ
taxonomy|分類学、分類法
uncompromising|妥協しない、断固とした
unruly|手に負えない、規律のない
venomous|毒のある、悪意に満ちた
willful|故意の、強情な
abstain|棄権する、控える
allegory|寓話、寓意
banish|～を追放する、払いのける
callous|冷淡な、無情な
churn|～をかき回す、激しく動く／攪拌機
commendable|称賛に値する
dainty|優美な、きゃしゃな
deliverance|救出、解放
destitute|極貧の、欠乏した
dexterity|器用さ、機敏さ
dilution|希釈、弱めること
dissipated|消散した、放蕩な
elitist|エリート主義の／エリート主義者
exclusivity|独占権、高級感
feisty|元気で負けん気の強い
foothold|足がかり、足場
fraternal|兄弟の、友愛の
ghastly|恐ろしい、ひどい
gratifying|満足を与える、うれしい
hunch|直感、予感／背を丸める
impenetrable|突き通せない、不可解な
inconceivable|想像もつかない、ありえない
industrialization|工業化、産業化
mysticism|神秘主義
nauseous|吐き気がする
nimble|機敏な、頭の回転が速い
objectionable|不快な、いやな
opportunistic|機会に便乗する、日和見的な
outlandish|奇抜な、風変わりな
outlying|中心から離れた、辺ぴな
pacifist|平和主義者／平和主義の
penchant|強い好み、傾向
primordial|原始の、太古の
quorum|定足数
rascal|いたずら者、悪党
rigor|厳密さ、厳しさ
shortlist|最終候補者名簿／～を最終候補に選ぶ
tenancy|借用（期間）、借家権
testimonial|推薦状、感謝のしるし
thence|そこから、それゆえ
unfaithful|不貞な、不誠実な
unholy|邪悪な、不浄な
unregulated|規制されていない
unscrupulous|無節操な、平気で悪事をする
unwittingly|知らずに、うっかり
verbatim|一語一語そのままに／逐語的な
antiquated|時代遅れの、古めかしい
averse|嫌って、反対して
brim|縁、へり／あふれそうになる
dribble|したたる、よだれを垂らす、ドリブルする
egalitarian|平等主義の／平等主義者
gout|痛風
mythological|神話の
palatable|口に合う、受け入れやすい
solicit|～を請い求める、勧誘する
succumb|屈する、（病気で）倒れる
thwart|～を阻止する、くじく
unequivocally|明確に、はっきりと
acreage|（エーカーで測った）面積、土地
assimilate|同化する、～を吸収する
convoluted|入り組んだ、複雑な
counterproductive|逆効果の
impediment|障害、妨げ
materialism|物質主義、唯物論
meager|乏しい、わずかな
parochial|視野の狭い、教区の
somber|陰気な、厳粛な、くすんだ
utilitarian|実用的な、功利主義の
belligerent|好戦的な、けんか腰の
depraved|堕落した、邪悪な
ebb|引き潮、衰退／衰える
emulation|見習うこと、模倣
# 2401〜2500
forfeiture|没収、喪失
instinctive|本能的な、直感的な
magnate|実業界の大物、有力者
poise|落ち着き、身のこなし／～の平衡を保つ
sanctity|神聖さ、尊厳
alienate|～を遠ざける、疎外する
confrontational|対決的な、けんか腰の
contagion|伝染、感染
curate|～を企画・選定する／副牧師
deviant|逸脱した、異常な／逸脱者
disseminate|～を広める、普及させる
dynamically|動的に、精力的に
insular|視野の狭い、島の
jarring|耳障りな、不快な
magnetism|磁気、人を引きつける力
mariner|船乗り、水夫
methodological|方法論の
scavenger|腐肉を食べる動物、ごみをあさる人
stuffy|風通しの悪い、堅苦しい
uniformity|均一性、画一性
apprehend|～を逮捕する、理解する
axiom|公理、自明の理
cleanly|きれいに、見事に
infallible|絶対に誤らない、確実な
methodical|几帳面な、秩序立った
socialization|社会化、社会への適応
tranquility|静けさ、平穏
detract|（価値などを）損なう
dissection|解剖、詳細な分析
distillation|蒸留、精髄
hibernation|冬眠
hindrance|妨げ、障害
inexplicably|不可解にも、説明のつかないことに
placid|穏やかな、落ち着いた
reissue|～を再発行する／再版
skew|～をゆがめる、偏らせる
unwavering|揺るぎない
veritable|真の、まさしく
abject|絶望的な、みじめな、卑屈な
austere|質素な、厳格な
blister|水ぶくれ／水ぶくれができる
commendation|称賛、表彰
gusto|心からの楽しみ、熱意
individualism|個人主義
infernal|地獄の、ひどい
mystique|神秘的な雰囲気
overalls|作業用つなぎ服、胸当て付きズボン
quell|～を鎮圧する、抑える
succulent|汁気の多い、多肉の
superfluous|余分な、不必要な
arcane|難解な、秘密の
behest|命令、要請
ephemeral|はかない、つかの間の
extracurricular|課外の
lackluster|さえない、精彩を欠いた
manicure|爪の手入れ／～の爪を手入れする
materialistic|物質主義的な
materialize|実現する、突然現れる
perceptive|洞察力のある、鋭い
riveting|心を奪うような、とても面白い
sprawl|無秩序に広がる、大の字になる／乱雑な広がり
swivel|回転する、～を回転させる／回り継ぎ手
wayside|道端
aberration|逸脱、異常
athleticism|運動能力、活発さ
daydream|空想にふける／空想
figuratively|比喩的に
habitation|居住、住居
interlocking|かみ合った、連結した
repertory|上演目録、レパートリー劇団
shimmer|ちらちら光る／きらめき
snooze|うたた寝する／うたた寝
suitor|求婚者
abhorrent|忌まわしい、大嫌いな
carpentry|大工仕事、木工
crumb|パンくず、ほんのわずか
elated|大喜びの、意気揚々とした
exuberant|元気いっぱいの、あふれんばかりの
facsimile|複製、複写
fanciful|空想的な、奇抜な
posterity|後世、子孫
pounce|飛びかかる、すかさず攻撃する
scathing|痛烈な、容赦のない
antithesis|正反対、対照
archetype|典型、原型
chisel|のみ／～を彫る
coax|～をなだめすかす、うまく説得する
cull|～を間引く、選び出す／間引き
flattery|お世辞、おべっか
restorative|元気を回復させる、修復の
spurious|偽の、もっともらしいが誤った
vermin|害獣、害虫
altruistic|利他的な
amorphous|形の定まらない、あいまいな
enterprising|進取の気性に富む、積極的な
honk|警笛を鳴らす／警笛の音
inexcusable|許しがたい
minster|大聖堂、修道院付属の教会
monotonous|単調な、変化のない
prohibitive|法外な、禁止の
# 2501〜2600
topple|倒れる、～を倒す、失脚させる
allusion|ほのめかし、間接的な言及
altruism|利他主義、思いやり
connotation|言外の意味、含意
exorcist|悪魔払いの祈祷師
idiosyncratic|特異な、その人特有の
plumage|羽毛、羽衣
profess|～を公言する、～と称する
tacit|暗黙の
colloquial|口語の、話し言葉の
devotee|熱心な愛好者、信者
docile|おとなしい、従順な
edifice|大建築物、体系
macabre|気味の悪い、死を連想させる
midwifery|助産術、助産学
milieu|環境、境遇
overseer|監督者、現場監督
painstaking|骨身を惜しまない、入念な
patchy|むらのある、不完全な
resuscitation|蘇生、復活
shoal|魚の群れ、浅瀬
tantamount|同等の、等しい
trifle|ささいなこと、少量／軽く扱う
unoccupied|空いている、占領されていない
vindication|正しさの証明、弁明
artistically|芸術的に
congregate|集まる
corroborate|～を裏づける、確証する
euphemism|婉曲表現
exacerbate|～を悪化させる
facilitation|促進、容易にすること
impersonal|人間味のない、非個人的な
minefield|地雷原、危険だらけの問題
recluse|隠遁者、世捨て人
reverb|残響、反響
stipulation|規定、条件
accrue|（利益・利子が）生じる、たまる
chronologically|年代順に
opulent|豪華な、ぜいたくな
recessive|劣性の、後退する
taut|ぴんと張った、緊張した
uneventful|波乱のない、平穏な
confide|（秘密を）打ち明ける
dissect|～を解剖する、詳しく分析する
ferocity|獰猛さ、激しさ
homely|家庭的な、素朴な
innuendo|当てこすり、ほのめかし
interrogate|～を尋問する
lavatory|便所、洗面所
magpie|カササギ、がらくたを集める人
recitation|暗唱、朗読
reprimand|叱責／～を叱責する
stratosphere|成層圏、最高水準
telltale|隠しきれない、内情を示す
torrential|（雨が）激しい、滝のような
virtuoso|名手、巨匠／名人芸の
connoisseur|目利き、鑑定家
divination|占い、予言
exorcism|悪魔払い
fabricate|～をでっち上げる、製造する
fluctuation|変動、上下
strapping|体格のよい、たくましい
archetypal|典型的な、原型の
attuned|波長が合った、敏感な
cinematographer|撮影監督
hapless|不運な、哀れな
impervious|通さない、影響されない
locomotion|移動、運動
paradoxical|逆説的な、矛盾した
sandwiched|間に挟まれた
climactic|最高潮の、山場の
detest|～をひどく嫌う
enviable|うらやましい
gravitate|引き寄せられる、自然に向かう
impersonation|物まね、なりすまし
preoccupation|没頭、最大の関心事
rescind|～を取り消す、撤回する
supple|しなやかな、柔軟な
veneration|崇拝、尊敬
allegorical|寓意的な
coerce|～に強制する、強要する
depravity|堕落、邪悪さ
indignant|憤慨した
precocious|早熟な、ませた
wry|皮肉っぽい、苦笑いの
brevity|簡潔さ、短さ
claustrophobic|閉所恐怖症の、息が詰まるような
desertion|脱走、遺棄
euphoric|幸福感に満ちた、有頂天の
plummet|急落する、真っ逆さまに落ちる
romp|はしゃぎ回る、楽勝する／大はしゃぎ
spontaneity|自発性、自然さ
tarnish|～を傷つける、曇らせる／変色
verve|活気、熱意
billiards|ビリヤード、玉突き
collider|衝突型加速器
demography|人口統計学、人口構成
eccentricity|風変わりなこと、奇行
heighten|～を高める、強める
implicate|～を巻き込む、関与を示す
# 2601〜2700
justly|正当に、当然のこととして
lyricist|作詞家
menial|（仕事が）単純で地位の低い、つまらない
opacity|不透明さ、わかりにくさ
overdraft|当座貸越、借り越し
quiver|震える／震え
reminisce|思い出にふける、思い出を語る
buzzard|ノスリ、ハゲワシ
commensurate|釣り合った、見合った
diverge|分かれる、異なる
fiddler|バイオリン弾き
flagging|衰えかけた、弱ってきた
forlorn|わびしい、見捨てられた、絶望的な
gush|どっと流れ出る、大げさに褒める／噴出
pathos|哀感、悲哀
physicality|身体性、肉体的な力強さ
portraiture|肖像画法、肖像画
seedy|いかがわしい、みすぼらしい
substantiate|～を立証する、裏づける
summarily|即座に、略式で
wane|衰える、（月が）欠ける／衰え
brimstone|硫黄、地獄の業火
contraption|奇妙な仕掛け、珍妙な機械
disillusionment|幻滅
elaboration|詳しい説明、入念な仕上げ
fissure|裂け目、亀裂
malleable|可鍛性の、影響されやすい
acrobatic|曲芸の、軽業のような
consternation|ひどい驚き、ろうばい
cynic|皮肉屋、冷笑家
dampen|～を湿らせる、（熱意）をそぐ
extravagance|浪費、ぜいたく
raunchy|下品な、きわどい
salve|軟膏、慰め／～を和らげる
bereft|奪われた、失った
buffoon|道化者、おどけ者
derision|あざけり、嘲笑
dramatist|劇作家
grumble|不平を言う、ぶつぶつ言う／不平
rediscover|～を再発見する
selectivity|選択性、えり好み
squint|目を細めて見る／目を細めること
topographical|地形の、地形学の
verily|まことに、確かに
wallow|（感情に）浸る、転げ回る
allot|～を割り当てる
blurb|（本のカバーの）宣伝文
ewe|雌羊
exuberance|あふれる元気、豊かさ
familiarize|～に慣れさせる、習熟させる
obliterate|～を完全に破壊する、消し去る
persecute|～を迫害する
preeminent|卓越した、抜群の
showy|派手な、目立つ
suburbia|郊外（の生活）
vandal|公共物を壊す人、破壊者
elongate|～を長くする、伸びる
elude|～を巧みに逃れる、（理解・記憶が）及ばない
etch|～を刻む、エッチングする
irate|激怒した
lethargic|無気力な、だるい
maggot|ウジ虫
scoff|あざ笑う、ばかにする
sketchbook|写生帳
squirm|身をよじる、もじもじする
surrealism|超現実主義、シュルレアリスム
telescopic|望遠鏡の、伸縮式の
babble|ぺちゃくちゃしゃべる／とりとめのないおしゃべり
haphazard|無計画な、でたらめな
irrevocably|取り返しがつかないほど、変更できない形で
oddity|変わり者、奇妙なもの
placate|～をなだめる
prescriptive|規範的な、指図するような
slob|だらしない人、無精者
stipulate|～を規定する、明記する
voracious|貪欲な、大食の
banishment|追放、流刑
conciliatory|なだめるような、融和的な
irrevocable|取り消せない、変更できない
mottled|まだらの、ぶちの
mountaineer|登山家
posit|～を仮定する、前提として置く
reclusive|引きこもりがちな、隠遁した
scrutinize|～を綿密に調べる
sedate|落ち着いた、ゆったりした／～に鎮静剤を与える
cloister|回廊、修道院
credential|資格、信任状
monotony|単調さ、退屈
prowl|うろつく、獲物を探し回る／うろつくこと
repose|休息、静けさ／休む
reptilian|は虫類の、冷酷な
seedling|苗、苗木
surrealist|超現実主義の／超現実主義者
temperamental|気まぐれな、気性の激しい
conciliation|和解、調停、なだめること
culminate|最高潮に達する、結果として終わる
domestication|家畜化、栽培化
enabler|可能にする人・もの、（悪癖を）助長する人
nonchalant|無頓着な、平然とした
squander|～を浪費する
# 2701〜2800
cay|小島、岩礁
crony|（悪い意味で）仲間、取り巻き
glean|～を少しずつ集める、拾い集める
gutsy|度胸のある、勇敢な
impersonator|物まね芸人、なりすます人
lurid|けばけばしい、どぎつい
recuperate|回復する、取り戻す
detritus|がれき、残骸、岩くず
patronize|～を見下した態度で扱う、ひいきにする
rustle|さらさら音を立てる／さらさらいう音
cogent|説得力のある
floodgates|水門、（抑えていたものの）せき
pedicure|足の爪の手入れ
primeval|太古の、原始の
revulsion|嫌悪感、激しい反感
unsurpassed|無類の、ほかに勝るもののない
wistful|物欲しそうな、物思いに沈んだ
allude|ほのめかす、暗に言及する
elation|大喜び、高揚
envisage|～を心に描く、予想する
hibernate|冬眠する
usurp|（権力・地位）を奪う
cleverness|賢さ、巧妙さ
fabulously|途方もなく、すばらしく
headstrong|頑固な、強情な
incongruous|不釣り合いな、場違いな
lethargy|無気力、けだるさ
maelstrom|大混乱、大渦巻き
opulence|豪華さ、富裕
personalize|～を個人向けにする、名前を入れる
proliferate|急増する、増殖する
pyre|火葬用のまきの山
requisition|徴発、正式な要求／～を徴発する
retrace|～を引き返す、たどり直す
thicket|やぶ、茂み
unconvincing|説得力のない
undaunted|ひるまない、くじけない
fete|祝祭、慈善の催し／～を盛大にもてなす
frolic|はしゃぎ回る／浮かれ騒ぎ
haughty|高慢な、横柄な
headmistress|女性校長
prostrate|うつぶせの、打ちひしがれた／ひれ伏す
rickety|ぐらぐらする、がたがたの
supersede|～に取って代わる
sustainably|持続可能な形で
unmanageable|手に負えない、扱いにくい
extrapolate|（既知の事実から）推定する
quip|気の利いた冗談、皮肉／冗談を言う
unadulterated|混じりけのない、まったくの
zany|おどけた、ばかばかしく愉快な
abdicate|退位する、（責任）を放棄する
brainwash|～を洗脳する
breadwinner|一家の稼ぎ手
darkroom|暗室
glitz|派手さ、きらびやかさ
insubordination|反抗、不服従
salivary|唾液の
aimless|目的のない、当てのない
clench|～を固く握る、食いしばる
farcical|ばかげた、茶番のような
haggle|値切る、押し問答する
minutiae|細かい点、ささいな事柄
paralyze|～をまひさせる、無力にする
unobtrusive|目立たない、控えめな
abhor|～をひどく嫌う
aghast|ぼう然として、仰天して
contemptuous|軽蔑的な、さげすんだ
crystallization|結晶化、具体化
inexorably|容赦なく、止めようもなく
nondescript|特徴のない、平凡な
recuperation|回復、療養
repute|評判
dutiful|忠実な、義務を果たす
engender|～を生み出す、引き起こす
impeccably|申し分なく、完璧に
stoicism|冷静さ、禁欲主義
verandah|ベランダ、縁側
plausibly|もっともらしく
remittance|送金（額）
resuscitate|～を蘇生させる、復活させる
smattering|生かじりの知識、少数
amply|十分に
antithetical|正反対の、相いれない
denunciation|公然の非難、告発
exonerate|～の疑いを晴らす、無罪とする
indiscretion|軽率な言動、無分別
magnanimous|寛大な、度量の大きい
chrysalis|さなぎ
heifer|若い雌牛
laud|～を称賛する
remorseful|深く後悔している
sheaf|（紙・穀物の）束
unencumbered|妨げのない、負担のない
virtuosity|名人芸、妙技
wrangle|口論、論争／言い争う
tactful|機転の利く、如才ない
artifice|策略、巧妙な工夫
disparage|～をけなす、見くびる
drudgery|骨の折れる退屈な仕事
feign|～のふりをする、装う
# 2801〜2900
melodious|旋律の美しい、耳に心地よい
naivety|世間知らず、素朴さ
philistine|教養のない俗物／俗物的な
possessor|所有者
staccato|断続的な、スタッカートの
ceaseless|絶え間ない
credibly|信頼できる形で、もっともらしく
inexhaustible|尽きることのない
inexorable|容赦のない、止められない
moribund|瀕死の、消滅しかけた
personalization|個人向けに合わせること
refurbish|～を改装する、一新する
torturous|拷問のような、ひどく苦しい
unassisted|助けを借りない、独力の
ameliorate|～を改善する
claustrophobia|閉所恐怖症
concurrence|同意、同時発生
gnaw|～をかじる、さいなむ
hermetic|密閉した、外界から隔絶した
inscrutable|不可解な、謎めいた
postural|姿勢の
puritanical|禁欲的な、厳格すぎる
suds|せっけんの泡
anarchic|無政府状態の、無秩序な
beguiling|魅惑的な、人をだますような
dissension|意見の対立、不和
exhilaration|爽快感、高揚
outmoded|時代遅れの、旧式の
plausibility|もっともらしさ、妥当性
subsist|（わずかな食料・金で）生きていく
tedium|退屈、単調さ
uninspiring|面白みのない、心を動かさない
axiomatic|自明の、公理の
colloquium|討論会、学術会議
gape|ぽかんと口を開けて見る、大きく開く
impresario|興行主
incipient|初期の、始まったばかりの
vindicate|～の正しさを立証する、疑いを晴らす
blubber|鯨の脂肪／泣きじゃくる
ephemera|短命なもの、一時的な印刷物
gauche|不器用な、無作法な
inducement|誘因、報奨
slither|ずるずる滑る、するすると進む
snobbery|俗物根性、上流気取り
sterility|不妊、無菌、不毛
exude|～をにじみ出させる、発散する
glum|むっつりした、ふさぎ込んだ
improvisational|即興の
predilection|好み、偏愛
ruthlessness|冷酷さ、非情さ
utensil|（台所の）用具、器具
astringent|収れん性の、辛辣な／収れん剤
gruelling|へとへとに疲れさせる、過酷な
liaise|連絡を取り合う
zoologist|動物学者
capitulate|降伏する、屈服する
hypothesize|仮説を立てる
ostensible|表向きの、見せかけの
imperceptible|気づかないほどの、かすかな
intuit|～を直感で知る
protrude|突き出る
romper|（幼児用の）つなぎ服
stiffen|こわばる、～を硬くする
unfeasible|実行不可能な
confection|菓子、手の込んだ作り物
delicatessen|総菜店、デリカテッセン
ordain|～を聖職者に任命する、定める
protrusion|突起、突出
somersault|宙返り、でんぐり返し／宙返りする
adornment|装飾（品）
bequeath|～を遺贈する、後世に残す
clammy|冷たく湿った、じっとりした
detestable|ひどく嫌な、憎むべき
distill|～を蒸留する、抽出する
explosively|爆発的に
ponderous|重々しい、のろい、退屈な
vestigial|痕跡の、名残の
virginal|純潔な、手つかずの
consign|～を引き渡す、追いやる
fiendish|極めて難しい、悪魔のような
flit|すいすい飛ぶ、ひらひら動く
idiomatic|慣用的な、その言語らしい
neglectful|怠慢な、なおざりにする
paternalistic|温情主義的な、家父長的な
recumbent|横になった、もたれた
angsty|不安や悩みを抱えた
impressionistic|印象に基づく、印象主義的な
prise|～をこじ開ける
repudiate|～を拒絶する、否認する
revelatory|新事実を明かす、目を開かせる
blithely|のんきに、無頓着に
fiddly|細かくて面倒な、扱いにくい
happenstance|偶然の出来事
settee|長いす、ソファ
calamitous|悲惨な、災いをもたらす
deplore|～を遺憾に思う、強く非難する
ecotourism|エコツーリズム、環境に配慮した観光
infallibility|絶対に誤らないこと、無謬性
singe|～の表面を焦がす／焦げ跡
catastrophically|壊滅的に、悲惨なほど
# 2901〜3000
exhibitionist|目立ちたがり屋、露出症の人
reenact|～を再現する、再演する
reverberation|反響、余波
buccaneer|海賊、無節操な山師
rapturous|熱狂的な、有頂天の
truism|自明の理、わかりきったこと
wheeze|ぜいぜい息をする／ぜいぜいいう音
lamentation|嘆き、悲嘆
mangle|～をめちゃめちゃにする、台無しにする
loiter|ぶらつく、うろつく
interject|（言葉を）差し挟む
taciturn|無口な、口数の少ない
besiege|～を包囲する、～に殺到する
derisive|あざけるような
remorseless|容赦のない、無慈悲な
crystallize|結晶化する、明確になる
disdainful|軽蔑的な、尊大な
ardor|熱意、情熱
fractious|怒りっぽい、手に負えない
ignominious|不名誉な、屈辱的な
timidity|臆病、内気
disquieting|不安にさせる
neophyte|初心者、新参者
galvanize|～を奮い立たせる、刺激して行動させる
extol|～を激賞する
affectation|気取り、見せかけ
histrionic|芝居がかった、大げさな
reverberate|反響する、波紋を広げる
scornful|軽蔑した、あざけるような
ventilate|～を換気する、公に議論する
surreptitious|内密の、こそこそした
venerate|～を崇敬する
resound|鳴り響く、反響する
unsettle|～を動揺させる、不安にする
circumnavigate|～を周航する、一周する
indolent|怠惰な、無精な
unenviable|うらやましくない、ありがたくない
induct|～を正式に就任させる、入会させる
mutinous|反抗的な、反乱を起こした
ingratiate|（～の）機嫌を取る、気に入られるようにする
anticlimactic|拍子抜けの、期待外れの
perversity|ひねくれ、つむじ曲がり
magnanimity|寛大さ、度量の大きさ
incarcerate|～を投獄する、監禁する
brandish|～を振り回す、振りかざす
incongruity|不釣り合い、不調和
insubordinate|反抗的な、従順でない
decentralize|～を分散させる、地方分権化する
contrive|～をたくらむ、どうにか～する
verisimilitude|本当らしさ、迫真性
prurient|好色な、わいせつなことに興味を持つ
ruminate|思いめぐらす、反すうする
brouhaha|大騒ぎ、騒動
demystify|～の謎を解く、わかりやすくする
juxtapose|～を並べて置く、対比させる
totter|よろめく、ぐらつく
agonize|苦悩する、ひどく悩む
belligerence|好戦的な態度、けんか腰
salivate|よだれを出す、強く欲しがる
dither|ぐずぐず迷う／ためらい
laudatory|称賛の
preconception|先入観、予断
solipsism|独我論、自己中心
wizened|しわだらけの、しなびた
domesticate|～を飼いならす、栽培化する
presuppose|～を前提とする、あらかじめ仮定する
antediluvian|大昔の、ひどく時代遅れの
indolence|怠惰、無精
teem|満ちあふれる、たくさんいる
immortalize|～を不滅にする、永遠に名を残す
inchoate|始まったばかりの、未完成の
euphemistic|婉曲的な
daunt|～をひるませる、おじけづかせる
mollify|～をなだめる、和らげる
embezzle|～を横領する、着服する
economize|節約する、倹約する
revile|～を激しくののしる、非難する
connote|～を言外に意味する、暗示する
edify|～を啓発する、教化する
idiosyncrasy|特異な癖、その人特有の性質
ingenuous|無邪気な、率直な
unnerve|～をおじけづかせる、動揺させる
exasperate|～をいら立たせる、怒らせる
qualm|良心のとがめ、不安
deprecate|～を非難する、軽んじる
dissemble|本心を偽る、しらばくれる
proscribe|～を禁止する
remonstrate|抗議する、いさめる
engross|～を夢中にさせる、没頭させる
tantalize|～をじらす、じらして苦しめる
munificence|気前のよさ、寛大さ
lassitude|倦怠感、だるさ
encumber|～を妨げる、（重荷を）負わせる
adulterate|～に混ぜ物をする、品質を落とす
intersperse|～を点在させる、所々に入れる
appall|～をぞっとさせる、がく然とさせる
suffuse|～を満たす、覆う
transfix|～をくぎ付けにする、立ちすくませる
exhilarate|～をうきうきさせる、爽快にする
stultify|～を無意味にする、鈍らせる
`;
Object.assign(EXAMPLES, {"freq:criteria":"Applicants must meet strict criteria to receive the grant.",
"freq:scenario":"In the worst-case scenario, the town could lose power for a week.",
"freq:sustainable":"The city is searching for a sustainable way to manage its waste.",
"freq:chill":"A sudden chill in the air warned us that winter was near.",
"freq:structural":"Engineers found structural damage in the old bridge.",
"freq:magnetic":"The earth's magnetic field protects us from solar radiation.",
"freq:counsel":"She sought legal counsel before signing the agreement.",
"freq:marvel":"Tourists marvel at the size of the ancient temple.",
"freq:harbor":"He still harbors resentment toward his former boss.",
"freq:vertical":"The cliff rises in an almost vertical wall above the sea.",
"freq:conviction":"His conviction for fraud ended his political career.",
"freq:trauma":"Many soldiers suffer from trauma long after the war ends.",
"freq:linear":"Economic growth is rarely a simple linear process.",
"freq:provisions":"The treaty contains provisions for the exchange of prisoners.",
"freq:cognitive":"Lack of sleep can weaken cognitive abilities such as memory.",
"freq:restoration":"The restoration of the cathedral took more than ten years.",
"freq:facial":"Police used facial recognition software to identify the suspect.",
"freq:jurisdiction":"The case falls outside the jurisdiction of this court.",
"freq:ore":"The region exports large amounts of iron ore.",
"freq:governance":"Investors are demanding better corporate governance.",
"freq:provincial":"The provincial government announced new funding for rural schools.",
"freq:ethical":"Testing drugs on animals raises serious ethical questions.",
"freq:hostile":"The proposal met a hostile reaction from local residents.",
"freq:momentum":"The protest movement gained momentum after the arrests.",
"freq:notable":"There has been a notable decline in voter turnout.",
"freq:testament":"The full stadium was a testament to the team's popularity.",
"freq:allegedly":"The official allegedly accepted bribes from a contractor.",
"freq:demo":"Thousands joined a demo against the new tax.",
"freq:elaborate":"They made elaborate preparations for the royal visit.",
"freq:hull":"The ship's hull was damaged when it struck the rocks.",
"freq:realm":"Such technology once belonged to the realm of science fiction.",
"freq:bout":"She missed a week of work after a bout of flu.",
"freq:hack":"Someone tried to hack into the bank's computer system.",
"freq:stance":"The president took a tough stance on illegal immigration.",
"freq:echo":"His speech echoed the concerns of many ordinary voters.",
"freq:peninsula":"Tensions on the peninsula have eased in recent months.",
"freq:sentiment":"Public sentiment turned against the war.",
"freq:thereby":"He paid the fine in full, thereby avoiding a trial.",
"freq:threshold":"Incomes below this threshold are not taxed.",
"freq:aesthetic":"The bridge was praised for its aesthetic appeal.",
"freq:ego":"Losing the election was a serious blow to his ego.",
"freq:fusion":"The restaurant serves a fusion of Asian and French cooking.",
"freq:gauge":"It is hard to gauge how voters will react to the scandal.",
"freq:inclusion":"Her inclusion in the national team surprised many fans.",
"freq:pending":"A decision on the merger is still pending.",
"freq:bail":"The judge released the suspect on bail.",
"freq:harassment":"The company introduced a strict policy against harassment.",
"freq:precision":"The surgeon worked with remarkable precision.",
"freq:stark":"There is a stark contrast between the rich and the poor in the city.",
"freq:void":"Her death left a void in the lives of her family.",
"freq:voluntary":"The program relies on voluntary donations from the public.",
"freq:coup":"The army seized power in a bloodless coup.",
"freq:crude":"The price of crude oil rose sharply last month.",
"freq:disclosure":"The law requires full disclosure of political donations.",
"freq:magnitude":"Nobody expected a disaster of this magnitude.",
"freq:pledge":"The government pledged to cut emissions by half.",
"freq:affiliate":"The hospital is affiliated with a major university.",
"freq:asylum":"Thousands of refugees have applied for asylum.",
"freq:fossil":"Burning fossil fuels releases carbon dioxide.",
"freq:offset":"Higher sales helped offset the rise in costs.",
"freq:speculation":"There is growing speculation that the minister will resign.",
"freq:successor":"The chairman has not yet named his successor.",
"freq:wicked":"The story is about a wicked queen who envies her stepdaughter.",
"freq:acoustic":"The hall is famous for its excellent acoustic design.",
"freq:doctrine":"The party abandoned its doctrine of state ownership.",
"freq:gig":"The band played its first gig in a small pub.",
"freq:intact":"The ancient vase was found completely intact.",
"freq:prey":"Elderly people are easy prey for dishonest salesmen.",
"freq:prophet":"He was regarded as a prophet of the digital age.",
"freq:referendum":"The country will hold a referendum on the new constitution.",
"freq:sequel":"The sequel was even more successful than the original film.",
"freq:clan":"The two clans had been enemies for generations.",
"freq:clash":"Police clashed with protesters outside the parliament.",
"freq:coupled":"High prices, coupled with low wages, have hurt families.",
"freq:mandate":"The election gave the party a clear mandate for reform.",
"freq:revealing":"The interview was very revealing about his true motives.",
"freq:succession":"A succession of scandals forced the minister to resign.",
"freq:tactical":"The general ordered a tactical retreat to save his troops.",
"freq:clearance":"The pilot waited for clearance to land.",
"freq:deceased":"The lawyer read the will of the deceased to the family.",
"freq:detention":"The suspect was held in detention for three days.",
"freq:explicit":"The contract gives explicit instructions on how to cancel.",
"freq:fraction":"Only a fraction of the stolen money was recovered.",
"freq:viable":"Solar power is now a viable alternative to coal.",
"freq:amid":"The chief executive resigned amid growing criticism.",
"freq:herald":"The discovery heralded a new era in medicine.",
"freq:plea":"The mayor made a plea for calm after the riots.",
"freq:rhetoric":"Voters are tired of empty political rhetoric.",
"freq:salvation":"Tourism has been the salvation of the island's economy.",
"freq:secular":"The country has a secular system of education.",
"freq:sovereign":"Every sovereign state has the right to defend its borders.",
"freq:synthetic":"The jacket is made from synthetic fibers.",
"freq:optimal":"The plants need warmth and light for optimal growth.",
"freq:profound":"The invention had a profound effect on daily life.",
"freq:rebellion":"The army crushed the rebellion within a week.",
"freq:robust":"The economy has shown robust growth this year.",
"freq:swap":"The two prisoners were swapped at the border.",
"freq:terrain":"The rescue was delayed by the rough mountain terrain.",
"freq:acre":"The fire destroyed thousands of acres of forest.",
"freq:descent":"The plane began its descent toward the airport.",
"freq:halt":"Heavy snow brought traffic to a halt across the region.",
"freq:litigation":"The company settled the dispute to avoid costly litigation.",
"freq:norm":"Working from home has become the norm in many industries.",
"freq:orthodox":"Her methods were far from orthodox, but they worked.",
"freq:prone":"The coastal area is prone to flooding in autumn.",
"freq:sanctuary":"The island was turned into a sanctuary for rare birds.",
"freq:siege":"The city fell after a siege lasting six months.",
"freq:tenure":"During his tenure as mayor, crime fell by half.",
"freq:delegation":"A delegation of trade officials visited the capital.",
"freq:demographic":"The country faces major demographic changes as its population ages.",
"freq:subsidiary":"The bank sold its insurance subsidiary to a foreign investor.",
"freq:velocity":"The wind reached a velocity of 150 kilometers per hour.",
"freq:accountability":"Citizens are calling for greater accountability in government.",
"freq:albeit":"The plan worked, albeit more slowly than expected.",
"freq:deployment":"Parliament approved the deployment of troops to the border.",
"freq:exterior":"The exterior of the building was painted white.",
"freq:fury":"The decision provoked fury among local farmers.",
"freq:genocide":"The former leader was put on trial for genocide.",
"freq:humanitarian":"The United Nations sent humanitarian aid to the region.",
"freq:immunity":"The vaccine gives immunity against the virus for several years.",
"freq:likelihood":"There is little likelihood of rain this weekend.",
"freq:pioneer":"She was a pioneer in the field of heart surgery.",
"freq:suburban":"Many families prefer a quiet suburban neighborhood.",
"freq:accountable":"Politicians must be held accountable for their decisions.",
"freq:advocacy":"She is known for her advocacy of children's rights.",
"freq:aftermath":"Thousands were left homeless in the aftermath of the earthquake.",
"freq:aggression":"The treaty was designed to prevent military aggression.",
"freq:blunt":"To be blunt, your proposal has no chance of success.",
"freq:clarity":"She explained the complex theory with great clarity.",
"freq:discretion":"The amount of the bonus is left to the manager's discretion.",
"freq:elevation":"The village lies at an elevation of 2,000 meters.",
"freq:esteem":"The professor is held in high esteem by her students.",
"freq:hostage":"The gunmen released the last hostage after two days.",
"freq:mortality":"Infant mortality has fallen sharply in the past decade.",
"freq:reservoir":"The reservoir supplies water to the entire city.",
"freq:sworn":"The two families had been sworn enemies for years.",
"freq:transparency":"The charity was criticized for a lack of transparency.",
"freq:withdrawn":"After the accident he became quiet and withdrawn.",
"freq:heir":"The prince is heir to the throne.",
"freq:liable":"The company is liable for any damage caused by its products.",
"freq:rogue":"A rogue trader lost millions of the bank's money.",
"freq:solidarity":"Workers went on strike in solidarity with their colleagues.",
"freq:clutch":"The child clutched her mother's hand in the crowd.",
"freq:credibility":"The scandal damaged the newspaper's credibility.",
"freq:haul":"Fishermen hauled the heavy nets onto the boat.",
"freq:juvenile":"The city opened a new center to reduce juvenile crime.",
"freq:leverage":"The union used its leverage to win higher wages.",
"freq:militia":"A local militia took control of the town.",
"freq:tribunal":"The dispute was heard by an international tribunal.",
"freq:abusive":"She finally left her abusive husband.",
"freq:gem":"The museum is a hidden gem in the old town.",
"freq:hypothesis":"The experiment was designed to test the hypothesis.",
"freq:psychiatric":"He spent two months in a psychiatric hospital.",
"freq:repeal":"Congress voted to repeal the unpopular law.",
"freq:saga":"The long legal saga finally ended last week.",
"freq:surplus":"The country recorded a trade surplus for the first time in years.",
"freq:woo":"The party is trying to woo younger voters.",
"freq:autonomy":"The region has demanded greater autonomy from the central government.",
"freq:commodity":"Oil is the country's most valuable commodity.",
"freq:correlation":"Researchers found a strong correlation between poverty and poor health.",
"freq:fragile":"The ceasefire remains extremely fragile.",
"freq:fringe":"The group began as a fringe movement with few members.",
"freq:irony":"The irony is that the safety rules caused the accident.",
"freq:judiciary":"An independent judiciary is essential to democracy.",
"freq:legion":"The singer has a legion of devoted fans.",
"freq:lethal":"The snake's bite can be lethal to humans.",
"freq:scroll":"The ancient scroll was discovered in a desert cave.",
"freq:sovereignty":"The two nations are in dispute over the sovereignty of the islands.",
"freq:thrust":"He thrust the letter into his pocket and left.",
"freq:arbitrary":"The arrests seemed completely arbitrary.",
"freq:autonomous":"Autonomous vehicles may reduce the number of accidents.",
"freq:bait":"The police used a parked car as bait to catch the thieves.",
"freq:levy":"The government plans to levy a tax on sugary drinks.",
"freq:manipulation":"The firm was accused of manipulation of its sales figures.",
"freq:niche":"The company found a niche in the market for organic pet food.",
"freq:obscure":"The poem was written by an obscure eighteenth-century author.",
"freq:proposition":"Running a small farm is no longer a profitable proposition.",
"freq:stretching":"Gentle stretching before a run helps prevent injury.",
"freq:therapeutic":"Many people find gardening therapeutic.",
"freq:atmospheric":"Atmospheric pressure drops as you climb higher.",
"freq:disclose":"The company refused to disclose how much it paid.",
"freq:exploitation":"The report exposed the exploitation of migrant workers.",
"freq:goose":"A wild goose landed on the frozen lake.",
"freq:monopoly":"The state once held a monopoly on the sale of salt.",
"freq:synthesis":"The book is a synthesis of ideas from many fields.",
"freq:treason":"The officer was executed for treason.",
"freq:violet":"The hills turned violet as the sun went down.",
"freq:critique":"The article offers a sharp critique of modern education.",
"freq:discourse":"Social media has changed the nature of public discourse.",
"freq:dominance":"The company is fighting to keep its dominance of the market.",
"freq:inherent":"There are risks inherent in any surgery.",
"freq:justification":"There is no justification for such violence.",
"freq:outright":"The proposal was rejected outright by the committee.",
"freq:oversight":"The error was the result of a simple oversight.",
"freq:refreshing":"It was refreshing to hear a politician admit a mistake.",
"freq:statute":"The statute requires employers to provide safety training.",
"freq:vicious":"He was the victim of a vicious attack in the park.",
"freq:wholly":"The accident was wholly the fault of the truck driver.",
"freq:assassination":"The assassination of the president shocked the nation.",
"freq:citation":"The paper includes citations from over fifty studies.",
"freq:congregation":"The priest spoke to a congregation of two hundred people.",
"freq:decree":"The king issued a decree banning all public meetings.",
"freq:drift":"The boat drifted out to sea during the night.",
"freq:geological":"A geological survey found oil beneath the desert.",
"freq:methodology":"Critics questioned the methodology used in the study.",
"freq:predecessor":"The new manager is more cautious than his predecessor.",
"freq:premise":"The argument rests on a false premise.",
"freq:reckless":"He was fined for reckless driving.",
"freq:redemption":"The film tells a story of guilt and redemption.",
"freq:unprecedented":"The floods caused damage on an unprecedented scale.",
"freq:accord":"The two countries signed a peace accord last year.",
"freq:boycott":"Consumers organized a boycott of the company's products.",
"freq:eclipse":"Her success has eclipsed that of her famous father.",
"freq:inferior":"Cheap imports are often of inferior quality.",
"freq:injustice":"She spent her life fighting against social injustice.",
"freq:privileged":"He came from a wealthy and privileged background.",
"freq:reliance":"The country wants to reduce its reliance on imported oil.",
"freq:retention":"The company improved staff retention by raising pay.",
"freq:definitive":"There is no definitive answer to this question.",
"freq:epidemic":"The city is struggling to control a flu epidemic.",
"freq:extraction":"The extraction of gold has polluted the river.",
"freq:homicide":"The police are treating the death as a homicide.",
"freq:inheritance":"He spent his entire inheritance within two years.",
"freq:ironic":"It is ironic that the fire station burned down.",
"freq:righteous":"She was filled with righteous anger at the unfair decision.",
"freq:vicinity":"There are several good schools in the vicinity.",
"freq:curb":"The central bank raised interest rates to curb inflation.",
"freq:faction":"A rival faction within the party opposed the leader.",
"freq:inconsistent":"The witness gave inconsistent accounts of the event.",
"freq:probation":"He was placed on probation for two years.",
"freq:strap":"The strap of her bag broke as she ran for the train.",
"freq:subjective":"Taste in music is highly subjective.",
"freq:traumatic":"Losing a parent at a young age is a traumatic experience.",
"freq:alignment":"The wheels of the car are out of alignment.",
"freq:apparatus":"Firefighters wore breathing apparatus to enter the building.",
"freq:bliss":"A week on the quiet beach was pure bliss.",
"freq:buffer":"Savings act as a buffer against unexpected costs.",
"freq:collaborative":"The book was a collaborative effort by three authors.",
"freq:compromised":"Patients with compromised immune systems are at greater risk.",
"freq:cosmic":"Scientists detected cosmic rays from a distant galaxy.",
"freq:exempt":"Charities are exempt from this tax.",
"freq:foremost":"She is one of the world's foremost experts on climate.",
"freq:forge":"The two leaders forged a close alliance.",
"freq:hierarchy":"He rose quickly through the company hierarchy.",
"freq:invalid":"The contract was declared invalid by the court.",
"freq:metabolism":"Exercise helps speed up your metabolism.",
"freq:parody":"The show is a parody of popular crime dramas.",
"freq:parole":"He was released on parole after serving five years.",
"freq:render":"The storm rendered the road impassable.",
"freq:traction":"The idea is gaining traction among younger voters.",
"freq:contested":"The border remains a contested area between the two states.",
"freq:continuity":"The new director promised continuity in company policy.",
"freq:credible":"The police have no credible evidence against him.",
"freq:felony":"Armed robbery is a serious felony.",
"freq:ideological":"The two parties have deep ideological differences.",
"freq:incumbent":"The incumbent president is seeking a second term.",
"freq:maternal":"Better health care has reduced maternal deaths.",
"freq:memoir":"The former minister published a memoir about his years in office.",
"freq:mold":"The teacher helped mold the character of her students.",
"freq:offspring":"The birds feed their offspring for about three weeks.",
"freq:prop":"He propped the door open with a chair.",
"freq:simplicity":"The beauty of the design lies in its simplicity.",
"freq:vegetation":"The hillside is covered with thick vegetation.",
"freq:behold":"The sunrise over the mountains was a wonder to behold.",
"freq:bypass":"The manager bypassed the usual approval process.",
"freq:corpse":"The corpse was discovered by a hiker in the forest.",
"freq:dementia":"The number of people with dementia is rising as the population ages.",
"freq:phenomenal":"The book enjoyed phenomenal success around the world.",
"freq:spatial":"The game is said to improve spatial awareness.",
"freq:statutory":"Employees have a statutory right to paid holidays.",
"freq:stellar":"The young pianist gave a stellar performance.",
"freq:turf":"The two gangs fought over their turf.",
"freq:twitch":"His eye began to twitch from lack of sleep.",
"freq:endorsement":"The candidate won the endorsement of several major newspapers.",
"freq:finite":"The earth has a finite supply of fresh water.",
"freq:flagship":"The company opened its flagship store in Tokyo.",
"freq:forensic":"Forensic experts examined the scene for fingerprints.",
"freq:infamous":"The prison is infamous for its harsh conditions.",
"freq:mesh":"The windows are covered with fine wire mesh.",
"freq:migrant":"Migrant workers send much of their pay back home.",
"freq:naive":"It would be naive to trust everything you read online.",
"freq:remotely":"Most of the staff now work remotely.",
"freq:rigid":"The school has rigid rules about uniforms.",
"freq:utilize":"The factory utilizes solar energy to cut costs.",
"freq:allocation":"The mayor defended the allocation of funds to the new stadium.",
"freq:beacon":"The lighthouse served as a beacon for ships at night.",
"freq:bounty":"A bounty was offered for the capture of the outlaw.",
"freq:clergy":"Members of the clergy led the peaceful march.",
"freq:dwelling":"The law limits the number of people in each dwelling.",
"freq:expenditure":"Government expenditure on defense rose last year.",
"freq:scrutiny":"The company's accounts came under close scrutiny.",
"freq:seizure":"The seizure of illegal drugs at the port made headlines.",
"freq:stray":"The shelter takes in stray dogs from the streets.",
"freq:systemic":"The report found systemic failures in the health service.",
"freq:uprising":"The uprising was put down by government troops.",
"freq:whereby":"They signed a deal whereby both firms share the costs.",
"freq:contention":"The main point of contention is who will pay for the repairs.",
"freq:covenant":"The covenant forbids owners from building higher than two floors.",
"freq:greed":"The crisis was caused by greed and poor regulation.",
"freq:pact":"The two nations signed a trade pact.",
"freq:paramount":"The safety of passengers is of paramount importance.",
"freq:paranoid":"He became paranoid about being followed.",
"freq:proxy":"She voted by proxy because she was abroad.",
"freq:revolt":"The new tax sparked a revolt among farmers.",
"freq:shrine":"Pilgrims travel hundreds of miles to visit the shrine.",
"freq:solitary":"He led a solitary life in a cabin by the lake.",
"freq:stoke":"The rumors stoked fears of a banking crisis.",
"freq:thrive":"Small businesses thrive when taxes are low.",
"freq:arbitration":"The dispute was settled by arbitration.",
"freq:bilateral":"The two leaders held bilateral talks on trade.",
"freq:classy":"The hotel has a classy restaurant on the top floor.",
"freq:confrontation":"The strike led to a confrontation with the police.",
"freq:dismissal":"She claimed that her dismissal was unfair.",
"freq:empathy":"Good nurses show empathy for their patients.",
"freq:feasible":"It is not feasible to finish the bridge by spring.",
"freq:insecure":"Many teenagers feel insecure about their appearance.",
"freq:lust":"His lust for power destroyed his friendships.",
"freq:occupational":"Back pain is an occupational hazard for nurses.",
"freq:onset":"The onset of winter brought heavy snow.",
"freq:persecution":"They fled their country to escape religious persecution.",
"freq:reconciliation":"The meeting was a first step toward reconciliation.",
"freq:specimen":"The museum holds a rare specimen of the extinct bird.",
"freq:sponsorship":"The festival depends on corporate sponsorship.",
"freq:unlawful":"The court ruled that the arrest was unlawful.",
"freq:accredited":"Only accredited journalists may attend the briefing.",
"freq:apex":"He reached the apex of his career at forty.",
"freq:consolidation":"The consolidation of the two banks cost many jobs.",
"freq:convoy":"A convoy of trucks carried food to the camp.",
"freq:diplomacy":"The crisis was resolved through quiet diplomacy.",
"freq:directive":"The ministry issued a directive on school safety.",
"freq:friction":"The decision caused friction between the two departments.",
"freq:magistrate":"The magistrate fined him for disorderly conduct.",
"freq:marginal":"The change made only a marginal difference to sales.",
"freq:milestone":"The agreement was a milestone in the peace process.",
"freq:predator":"The island has no natural predators of the bird.",
"freq:prophecy":"The old prophecy said that the city would fall.",
"freq:salute":"The soldiers saluted the flag as it was raised.",
"freq:severity":"Doctors were shocked by the severity of his injuries.",
"freq:slack":"Business is slack during the winter months.",
"freq:spontaneous":"The audience burst into spontaneous applause.",
"freq:tract":"The company bought a large tract of forest.",
"freq:akin":"His silence was akin to an admission of guilt.",
"freq:beware":"Beware of e-mails that ask for your password.",
"freq:comprehend":"She could not comprehend why he had lied.",
"freq:contamination":"The contamination of the river killed thousands of fish.",
"freq:counterpart":"The minister met his French counterpart in Paris.",
"freq:creed":"The club welcomes people of every race and creed.",
"freq:domination":"The team continued its domination of the league.",
"freq:fracture":"She suffered a fracture of the left wrist.",
"freq:genome":"Scientists have mapped the genome of the wheat plant.",
"freq:indictment":"The report is an indictment of the prison system.",
"freq:meaningless":"Without evidence, the accusation is meaningless.",
"freq:premature":"It would be premature to declare victory.",
"freq:psychiatrist":"He was referred to a psychiatrist for treatment.",
"freq:validity":"Experts questioned the validity of the survey.",
"freq:wrath":"The decision provoked the wrath of local residents.",
"freq:aide":"A senior aide to the president resigned yesterday.",
"freq:allegiance":"The soldiers swore allegiance to the new king.",
"freq:apt":"The title of the book is particularly apt.",
"freq:constituency":"She has represented the same constituency for twenty years.",
"freq:contingent":"A large contingent of fans traveled to the final.",
"freq:entirety":"The speech was broadcast in its entirety.",
"freq:exodus":"The war caused an exodus of refugees.",
"freq:invasive":"The invasive plant has spread across the whole lake.",
"freq:irrigation":"New irrigation channels doubled the harvest.",
"freq:monarch":"The monarch has little real power today.",
"freq:persona":"His public persona is very different from his private self.",
"freq:plaque":"A plaque on the wall marks the poet's birthplace.",
"freq:preach":"He preaches tolerance but rarely practices it.",
"freq:purity":"The water is tested daily for purity.",
"freq:realism":"The film was praised for its realism.",
"freq:stigma":"There is still a stigma attached to mental illness.",
"freq:betrayal":"Voters saw the tax rise as a betrayal.",
"freq:communal":"The flats share a communal garden.",
"freq:consortium":"A consortium of banks financed the tunnel.",
"freq:efficacy":"Trials confirmed the efficacy of the new drug.",
"freq:manifest":"His anxiety manifested itself in sleepless nights.",
"freq:mutually":"The two sides reached a mutually acceptable solution.",
"freq:perimeter":"Guards patrol the perimeter of the base.",
"freq:preacher":"The preacher drew large crowds every Sunday.",
"freq:procurement":"The scandal involved the procurement of military equipment.",
"freq:ransom":"The kidnappers demanded a ransom of one million dollars.",
"freq:rigorous":"All new drugs undergo rigorous testing.",
"freq:skeptical":"Scientists remain skeptical about the claim.",
"freq:suppression":"The suppression of free speech drew international criticism.",
"freq:trustee":"The trustees of the museum approved the purchase.",
"freq:turnout":"Voter turnout was the lowest in fifty years.",
"freq:unanimous":"The jury reached a unanimous verdict.",
"freq:vengeance":"He swore vengeance on those who had betrayed him.",
"freq:cite":"The report cites poor training as the main cause.",
"freq:commercially":"The product is not yet commercially available.",
"freq:imminent":"The volcano shows signs of an imminent eruption.",
"freq:inaugural":"The president gave his inaugural address in the rain.",
"freq:lure":"The company lured engineers away with high salaries.",
"freq:malicious":"Someone spread malicious rumors about her.",
"freq:muscular":"The swimmer has a powerful, muscular build.",
"freq:neutrality":"The country kept its neutrality throughout the war.",
"freq:partition":"The partition of the country caused great suffering.",
"freq:proprietary":"The software uses a proprietary file format.",
"freq:protagonist":"The protagonist of the novel is a retired detective.",
"freq:snail":"Traffic moved at a snail's pace through the city center.",
"freq:susceptible":"Young children are especially susceptible to the virus.",
"freq:verge":"The company was on the verge of bankruptcy.",
"freq:vibrant":"The city has a vibrant music scene.",
"freq:collateral":"He used his house as collateral for the loan.",
"freq:demise":"The demise of the local newspaper saddened many readers.",
"freq:dire":"The refugees are in dire need of clean water.",
"freq:dominion":"The empire extended its dominion over the whole coast.",
"freq:misconduct":"The doctor was dismissed for professional misconduct.",
"freq:mute":"She stared at him in mute disbelief.",
"freq:prevalence":"The prevalence of diabetes has doubled in twenty years.",
"freq:saturated":"The market for smartphones is already saturated.",
"freq:tangible":"The reforms have produced no tangible results.",
"freq:tilt":"She tilted her head and listened carefully.",
"freq:veil":"The deal was negotiated under a veil of secrecy.",
"freq:versatile":"She is a versatile actor who can play any role.",
"freq:anthropology":"He studied anthropology before becoming a journalist.",
"freq:caliber":"The university attracts students of the highest caliber.",
"freq:deception":"The whole scheme was built on deception.",
"freq:helm":"A new director took the helm of the company in May.",
"freq:hypocrisy":"Critics accused the minister of hypocrisy.",
"freq:incompetent":"The inquiry blamed incompetent managers for the delay.",
"freq:intervene":"The police refused to intervene in the dispute.",
"freq:manifesto":"The party's manifesto promises lower taxes.",
"freq:negligence":"The hospital was sued for negligence.",
"freq:obsolete":"New technology made the factory's machines obsolete.",
"freq:posture":"Poor posture can lead to back pain.",
"freq:resonance":"Her story has a special resonance for immigrants.",
"freq:ruthless":"He was a ruthless businessman who crushed his rivals.",
"freq:salvage":"Divers salvaged gold coins from the wreck.",
"freq:satire":"The play is a sharp satire on modern politics.",
"freq:standpoint":"From a legal standpoint, the contract is valid.",
"freq:sway":"The speech failed to sway undecided voters.",
"freq:undermine":"The scandal undermined public trust in the police.",
"freq:veto":"The president threatened to veto the bill.",
"freq:vocational":"The college offers vocational courses in nursing.",
"freq:withstand":"The bridge was built to withstand strong earthquakes.",
"freq:accustomed":"She soon became accustomed to the cold climate.",
"freq:corpus":"Researchers analyzed a corpus of ten million words.",
"freq:dictatorship":"The country suffered under a military dictatorship.",
"freq:electorate":"The electorate is deeply divided on the issue.",
"freq:erosion":"Soil erosion threatens farms along the river.",
"freq:flank":"The army attacked the enemy's left flank.",
"freq:incidence":"The incidence of heart disease is higher among smokers.",
"freq:mutation":"A single mutation made the virus more dangerous.",
"freq:mythology":"Dragons appear in the mythology of many cultures.",
"freq:pest":"Farmers use natural methods to control pests.",
"freq:pillar":"Free elections are a pillar of democracy.",
"freq:precipitation":"Annual precipitation in the region has fallen sharply.",
"freq:restraint":"Police showed great restraint during the protest.",
"freq:rift":"The dispute caused a deep rift within the party.",
"freq:supremacy":"The two firms are fighting for supremacy in the market.",
"freq:affiliation":"He refused to reveal his political affiliation.",
"freq:align":"The party aligned itself with the trade unions.",
"freq:amnesty":"The government granted an amnesty to political prisoners.",
"freq:assertion":"There is no evidence to support his assertion.",
"freq:atop":"A small chapel stands atop the hill.",
"freq:cache":"Police found a cache of weapons in the cellar.",
"freq:displacement":"The war led to the displacement of a million people.",
"freq:drastic":"The crisis calls for drastic action.",
"freq:edible":"Not all wild mushrooms are edible.",
"freq:flick":"He flicked a switch and the lights came on.",
"freq:legitimacy":"The low turnout weakened the legitimacy of the election.",
"freq:portray":"The film portrays the king as a weak man.",
"freq:practitioner":"She is a respected practitioner of family law.",
"freq:stationary":"The truck crashed into a stationary bus.",
"freq:temporal":"The study examines temporal changes in rainfall.",
"freq:ambient":"The ambient temperature in the room is kept constant.",
"freq:comprise":"The committee comprises twelve members.",
"freq:conceptual":"The plan is still at the conceptual stage.",
"freq:demolition":"Residents protested against the demolition of the old theater.",
"freq:differentiate":"It is hard to differentiate between the two species.",
"freq:empirical":"There is little empirical evidence for the theory.",
"freq:fertile":"The valley has some of the most fertile soil in the country.",
"freq:feud":"A bitter feud divided the two families.",
"freq:fuse":"The artist fuses traditional and modern styles.",
"freq:gale":"The ferry was cancelled because of gales.",
"freq:mantle":"She took on the mantle of party leader.",
"freq:militant":"Militant groups attacked the oil pipeline.",
"freq:nostalgia":"The song fills older listeners with nostalgia.",
"freq:peasant":"The peasants rose up against the landowners.",
"freq:presume":"The missing sailors are presumed dead.",
"freq:sabotage":"The fire was an act of sabotage.",
"freq:sarcasm":"There was a hint of sarcasm in her voice.",
"freq:tally":"The final tally showed a narrow victory.",
"freq:vile":"A vile smell came from the drain.",
"freq:wedge":"The issue has driven a wedge between the two allies.",
"freq:adaptive":"Humans are a highly adaptive species.",
"freq:affinity":"She felt a strong affinity with the local people.",
"freq:apartheid":"He spent years in prison for opposing apartheid.",
"freq:casualty":"The battle caused heavy casualties on both sides.",
"freq:cavity":"The dentist found a small cavity in one tooth.",
"freq:dissolution":"The dissolution of parliament was announced yesterday.",
"freq:enclosure":"The wolves are kept in a large enclosure.",
"freq:famine":"Millions died in the famine that followed the war.",
"freq:fraudulent":"He was jailed for making fraudulent insurance claims.",
"freq:homage":"The film pays homage to the classic westerns.",
"freq:hostility":"The plan met with open hostility from residents.",
"freq:hypothetical":"Let us consider a hypothetical case.",
"freq:paradigm":"The discovery created a new paradigm in physics.",
"freq:perpetual":"The family lived in perpetual fear of eviction.",
"freq:pigeon":"A pigeon landed on the statue in the square.",
"freq:plateau":"Sales reached a plateau after years of growth.",
"freq:precinct":"Crime in the precinct fell by ten percent.",
"freq:regeneration":"The city invested heavily in the regeneration of its port.",
"freq:reminiscent":"The building is reminiscent of a medieval castle.",
"freq:resentment":"The pay cut caused deep resentment among the staff.",
"freq:resin":"The table is coated with a clear resin.",
"freq:scarce":"Clean water is scarce in the region.",
"freq:sibling":"She has three younger siblings.",
"freq:stint":"He did a two-year stint in the navy.",
"freq:trajectory":"The missile's trajectory was tracked by radar.",
"freq:utmost":"The matter must be handled with the utmost care.",
"freq:adjustable":"The chair has an adjustable seat.",
"freq:authenticity":"Experts doubt the authenticity of the painting.",
"freq:caste":"He was born into the lowest caste.",
"freq:cerebral":"The injury caused cerebral bleeding.",
"freq:chant":"The crowd chanted the name of the winner.",
"freq:climax":"The festival reached its climax with a fireworks display.",
"freq:contender":"She is a serious contender for the gold medal.",
"freq:degradation":"Mining has caused serious environmental degradation.",
"freq:equilibrium":"The market eventually returned to equilibrium.",
"freq:isolate":"Patients with the disease were isolated at once.",
"freq:nominal":"Members pay a nominal fee of one dollar.",
"freq:ordinance":"A city ordinance bans smoking in parks.",
"freq:prolific":"She was a prolific writer of detective stories.",
"freq:proportional":"The fine is proportional to the driver's income.",
"freq:quarry":"The stone was cut from a local quarry.",
"freq:restless":"The children grew restless during the long speech.",
"freq:sap":"Months of illness sapped his strength.",
"freq:sarcastic":"He made a sarcastic remark about her cooking.",
"freq:scholarly":"The article appeared in a scholarly journal.",
"freq:segregation":"Racial segregation in schools was declared illegal.",
"freq:sinister":"There was something sinister about his smile.",
"freq:ventilation":"Poor ventilation made the room hot and stuffy.",
"freq:accumulation":"The accumulation of debt worried investors.",
"freq:authoritarian":"The country is ruled by an authoritarian regime.",
"freq:avail":"We searched for hours, but to no avail.",
"freq:calorie":"A can of the drink contains 150 calories.",
"freq:commence":"Building work will commence next month.",
"freq:conditional":"The offer is conditional on a medical check.",
"freq:crusade":"She led a crusade against child labor.",
"freq:cynical":"Voters have grown cynical about politicians' promises.",
"freq:elastic":"Demand for the product is highly elastic.",
"freq:exposition":"The city hosted a world exposition in 1970.",
"freq:gracious":"She was gracious enough to accept our apology.",
"freq:humility":"He accepted the award with great humility.",
"freq:impeachment":"Congress began impeachment proceedings against the president.",
"freq:marital":"The form asks for your marital status.",
"freq:multitude":"The plan faces a multitude of problems.",
"freq:plumbing":"The old house needs new plumbing.",
"freq:resemblance":"He bears a striking resemblance to his grandfather.",
"freq:sermon":"The priest gave a sermon on forgiveness.",
"freq:slender":"The party won by a slender majority.",
"freq:societal":"The report examines societal attitudes toward aging.",
"freq:transmitter":"The radio transmitter was hidden in the attic.",
"freq:upheld":"The court upheld the original verdict.",
"freq:adolescent":"Many adolescents struggle with sleep.",
"freq:backdrop":"The talks took place against a backdrop of rising violence.",
"freq:bluff":"His threat to resign was only a bluff.",
"freq:cartel":"The drug cartel controlled the border towns.",
"freq:caucus":"The party caucus chose a new leader.",
"freq:clad":"The hills were clad in snow.",
"freq:constituent":"The senator met constituents in her home town.",
"freq:contagious":"Measles is a highly contagious disease.",
"freq:eccentric":"Her eccentric uncle keeps forty cats.",
"freq:emblem":"The dove is an emblem of peace.",
"freq:influx":"The town struggled to cope with the influx of tourists.",
"freq:kernel":"There is a kernel of truth in the rumor.",
"freq:liaison":"She acts as a liaison between the school and parents.",
"freq:resilience":"The community showed great resilience after the flood.",
"freq:rotate":"The earth rotates once every twenty-four hours.",
"freq:toxicity":"Tests showed the toxicity of the chemical to fish.",
"freq:autopsy":"The autopsy revealed that he had been poisoned.",
"freq:blitz":"The firm launched an advertising blitz.",
"freq:blockade":"The navy imposed a blockade on the port.",
"freq:circa":"The church was built circa 1450.",
"freq:cloak":"The talks were held under a cloak of secrecy.",
"freq:combustion":"The engine relies on the combustion of fuel.",
"freq:deportation":"He faces deportation after his visa expired.",
"freq:disposable":"The cafe has stopped using disposable cups.",
"freq:dwell":"Strange creatures dwell in the deep ocean.",
"freq:fiery":"She gave a fiery speech against the war.",
"freq:flux":"The fashion industry is in a constant state of flux.",
"freq:hassle":"Renewing a passport can be a real hassle.",
"freq:immensely":"The film was immensely popular with teenagers.",
"freq:inauguration":"Thousands attended the inauguration of the new president.",
"freq:indicative":"The result is indicative of a wider trend.",
"freq:intercept":"The police intercepted a shipment of weapons.",
"freq:intuitive":"The software has a simple, intuitive design.",
"freq:latitude":"Teachers are given wide latitude in choosing books.",
"freq:majestic":"The hotel has a majestic view of the mountains.",
"freq:metropolis":"The village has grown into a busy metropolis.",
"freq:orchard":"The farm has an orchard of apple trees.",
"freq:parameter":"We must work within the parameters of the budget.",
"freq:pathology":"The samples were sent to the pathology laboratory.",
"freq:procession":"A funeral procession moved slowly through the town.",
"freq:purge":"The dictator ordered a purge of army officers.",
"freq:secrecy":"The project was carried out in total secrecy.",
"freq:venom":"The snake's venom can kill within an hour.",
"freq:victorious":"The victorious team returned home to cheering crowds.",
"freq:wary":"Investors remain wary of the new currency.",
"freq:amidst":"The minister resigned amidst growing public anger.",
"freq:aquarium":"The aquarium has a tank full of sharks.",
"freq:batter":"Huge waves battered the coast all night.",
"freq:captivity":"The hostages spent six months in captivity.",
"freq:complementary":"The two partners have complementary skills.",
"freq:convict":"The jury convicted him of murder.",
"freq:discrete":"The course is divided into four discrete units.",
"freq:dissent":"The regime does not tolerate dissent.",
"freq:eminent":"An eminent surgeon performed the operation.",
"freq:endeavor":"Climbing the mountain was a risky endeavor.",
"freq:fraternity":"He is well known within the legal fraternity.",
"freq:interrogation":"The suspect confessed after hours of interrogation.",
"freq:pagan":"The festival has its roots in a pagan ritual.",
"freq:pursuant":"The payment was made pursuant to the contract.",
"freq:repetitive":"Factory work can be dull and repetitive.",
"freq:reversal":"The decision marked a reversal of government policy.",
"freq:savvy":"Young consumers are savvy about online prices.",
"freq:spree":"She went on a shopping spree after winning the prize.",
"freq:subsidy":"Farmers receive a subsidy for growing wheat.",
"freq:superficial":"The report gave only a superficial analysis.",
"freq:waterfront":"New apartments are being built along the waterfront.",
"freq:ambush":"The soldiers were killed in an ambush.",
"freq:arrogance":"His arrogance made him few friends.",
"freq:comrade":"He risked his life to save a wounded comrade.",
"freq:curator":"The curator explained the history of the painting.",
"freq:deity":"The temple is dedicated to a local deity.",
"freq:detrimental":"Smoking is detrimental to your health.",
"freq:entitlement":"Workers have an entitlement to four weeks of leave.",
"freq:garner":"The film garnered praise from critics.",
"freq:gypsy":"The novel tells the story of a gypsy musician.",
"freq:impairment":"The school supports children with hearing impairment.",
"freq:intricate":"The watch has an intricate mechanism.",
"freq:longevity":"The islanders are famous for their longevity.",
"freq:lore":"According to local lore, the lake is haunted.",
"freq:obstruction":"He was charged with obstruction of justice.",
"freq:plaintiff":"The court awarded damages to the plaintiff.",
"freq:portrayal":"The actor won praise for his portrayal of the king.",
"freq:rampant":"Corruption is rampant in the construction industry.",
"freq:replicate":"Other scientists could not replicate the results.",
"freq:retaliation":"The army fired rockets in retaliation for the attack.",
"freq:sewage":"Untreated sewage was flowing into the river.",
"freq:summon":"The manager was summoned to head office.",
"freq:urgency":"The report stresses the urgency of the problem.",
"freq:accreditation":"The college lost its accreditation last year.",
"freq:clarification":"Reporters asked the minister for clarification.",
"freq:covert":"The agency carried out covert operations abroad.",
"freq:cringe":"I cringe when I read my old diaries.",
"freq:dialect":"The villagers speak a dialect that outsiders rarely understand.",
"freq:downside":"The downside of the job is the long hours.",
"freq:flair":"She has a flair for languages.",
"freq:fugitive":"The fugitive was caught near the border.",
"freq:inmate":"The prison holds about five hundred inmates.",
"freq:intuition":"Her intuition told her that something was wrong.",
"freq:menace":"Drunk drivers are a menace to society.",
"freq:misuse":"The official was accused of the misuse of public funds.",
"freq:nausea":"The drug may cause nausea and headaches.",
"freq:optimum":"The optimum temperature for the plant is 20 degrees.",
"freq:physiological":"Stress causes physiological changes in the body.",
"freq:restrictive":"The country has restrictive laws on immigration.",
"freq:screenplay":"She wrote the screenplay for the award-winning film.",
"freq:sect":"He belonged to a small religious sect.",
"freq:seismic":"The region is known for its seismic activity.",
"freq:slain":"A memorial honors the slain soldiers.",
"freq:stash":"He stashed the money under the floor.",
"freq:stroll":"They strolled along the beach at sunset.",
"freq:whereabouts":"The whereabouts of the painting are unknown.",
"freq:backbone":"Small farms are the backbone of the rural economy.",
"freq:brawl":"A brawl broke out in the bar after midnight.",
"freq:celestial":"Ancient sailors used celestial bodies to find their way.",
"freq:characterization":"The novel is praised for its vivid characterization.",
"freq:customary":"It is customary to tip waiters in this country.",
"freq:flourish":"The arts flourished under the new king.",
"freq:heroine":"The heroine of the story is a young doctor.",
"freq:hoax":"The bomb threat turned out to be a hoax.",
"freq:insignificant":"The difference in price is insignificant.",
"freq:maneuver":"The driver maneuvered the truck into a narrow space.",
"freq:numb":"My fingers were numb with cold.",
"freq:pawn":"The villagers were pawns in a political game.",
"freq:plaster":"The plaster on the ceiling was cracked.",
"freq:quirky":"The shop sells quirky gifts and toys.",
"freq:quota":"The country has a quota on imported cars.",
"freq:rationale":"The minister explained the rationale behind the decision.",
"freq:reap":"The company is now reaping the benefits of its investment.",
"freq:rebound":"Share prices rebounded after a week of losses.",
"freq:redeem":"He redeemed himself by scoring the winning goal.",
"freq:residue":"The cleaner leaves no residue on the glass.",
"freq:runoff":"The two leading candidates will meet in a runoff.",
"freq:sentimental":"He kept the old watch for sentimental reasons.",
"freq:snatch":"A thief snatched her bag and ran.",
"freq:stealth":"The cat moved with stealth toward the bird.",
"freq:subset":"Only a small subset of patients respond to the drug.",
"freq:suspense":"The film keeps viewers in suspense until the end.",
"freq:tandem":"The two agencies worked in tandem on the case.",
"freq:tertiary":"More students are entering tertiary education.",
"freq:upbeat":"The manager was upbeat about the team's chances.",
"freq:vanguard":"The firm is in the vanguard of green technology.",
"freq:vulgar":"He was criticized for his vulgar language.",
"freq:waiver":"Visitors must sign a waiver before climbing.",
"freq:watershed":"The election was a watershed in the country's history.",
"freq:adrenaline":"Fear sent a rush of adrenaline through her body.",
"freq:alleviate":"The new road will alleviate traffic in the center.",
"freq:anarchy":"The country fell into anarchy after the coup.",
"freq:ashore":"The sailors swam ashore after the boat sank.",
"freq:aura":"The old library has an aura of mystery.",
"freq:canopy":"Monkeys live high in the forest canopy.",
"freq:condemnation":"The attack drew condemnation from world leaders.",
"freq:dependency":"The clinic treats people with drug dependency.",
"freq:dosage":"Do not exceed the recommended dosage.",
"freq:dysfunction":"The report describes the dysfunction of the local council.",
"freq:endowment":"The university received an endowment of ten million dollars.",
"freq:enrichment":"The program offers cultural enrichment for children.",
"freq:fauna":"The island is famous for its unique fauna.",
"freq:fidelity":"The translator worked with great fidelity to the original.",
"freq:forefront":"The lab is at the forefront of cancer research.",
"freq:harden":"Attitudes toward the strikers hardened after the violence.",
"freq:initiation":"The initiation of peace talks was welcomed.",
"freq:jeopardy":"The strike put thousands of jobs in jeopardy.",
"freq:residual":"Some residual pain may last for weeks.",
"freq:truce":"The two armies agreed to a truce over the holiday.",
"freq:uphold":"Judges have a duty to uphold the law.",
"freq:abolition":"He campaigned for the abolition of the death penalty.",
"freq:acquainted":"I am not acquainted with the details of the case.",
"freq:angular":"He had a thin, angular face.",
"freq:benign":"Tests showed that the growth was benign.",
"freq:brethren":"He called on his brethren to help the poor.",
"freq:brink":"The two nations were on the brink of war.",
"freq:collaborate":"The two universities collaborated on the study.",
"freq:delusional":"He was delusional and believed he was a king.",
"freq:deposition":"The witness gave a deposition before the trial.",
"freq:empower":"Education empowers people to change their lives.",
"freq:mediation":"The dispute was resolved through mediation.",
"freq:parasite":"The disease is caused by a parasite carried by insects.",
"freq:perennial":"Flooding is a perennial problem in the valley.",
"freq:procedural":"The case was dismissed on procedural grounds.",
"freq:relentless":"The team faced relentless pressure from the press.",
"freq:speculative":"The article is highly speculative and lacks evidence.",
"freq:submerged":"The village was submerged when the dam was built.",
"freq:symmetry":"The garden is designed with perfect symmetry.",
"freq:syndicate":"A crime syndicate controlled the city's gambling.",
"freq:wholesome":"The camp offers wholesome food and fresh air.",
"freq:adjoining":"We booked two adjoining rooms at the hotel.",
"freq:ancestry":"She can trace her ancestry back four hundred years.",
"freq:annex":"The empire annexed the neighboring kingdom.",
"freq:avid":"He is an avid reader of history books.",
"freq:bland":"The minister gave a bland reply to the question.",
"freq:bribe":"The official was arrested for taking a bribe.",
"freq:canoe":"They crossed the lake in a wooden canoe.",
"freq:decency":"He did not have the decency to apologize.",
"freq:havoc":"The storm caused havoc across the region.",
"freq:locomotive":"A steam locomotive pulled the old train.",
"freq:mantra":"\"Customers first\" became the company's mantra.",
"freq:monumental":"Rebuilding the city was a monumental task.",
"freq:pilgrimage":"Thousands make a pilgrimage to the temple each year.",
"freq:pivot":"The company pivoted from hardware to software.",
"freq:pivotal":"She played a pivotal role in the negotiations.",
"freq:profitability":"Rising costs are hurting the firm's profitability.",
"freq:provoke":"The decision provoked an angry response.",
"freq:reconcile":"It is hard to reconcile the two accounts of the event.",
"freq:regression":"The treaty was seen as a regression to old policies.",
"freq:resilient":"Children are often more resilient than adults.",
"freq:staggering":"The project cost a staggering two billion dollars.",
"freq:synonymous":"The brand has become synonymous with quality.",
"freq:tedious":"Filling in the forms was a tedious job.",
"freq:utilization":"The plan aims at better utilization of public land.",
"freq:astronomical":"House prices in the capital are astronomical.",
"freq:ceremonial":"The president's role is largely ceremonial.",
"freq:choreography":"The choreography of the dance was stunning.",
"freq:cling":"Many villagers still cling to the old customs.",
"freq:concurrent":"He is serving two concurrent prison sentences.",
"freq:dubious":"The firm has a dubious reputation.",
"freq:folklore":"The fox is a clever animal in Japanese folklore.",
"freq:gravitational":"The moon's gravitational pull causes the tides.",
"freq:hereditary":"The disease is hereditary and affects mainly men.",
"freq:hiatus":"The band returned after a five-year hiatus.",
"freq:homestead":"His grandfather built the homestead in 1890.",
"freq:intellect":"She is a woman of great intellect.",
"freq:lapse":"A brief lapse in concentration caused the accident.",
"freq:loot":"Rioters looted shops in the city center.",
"freq:mindful":"Drivers should be mindful of cyclists.",
"freq:myriad":"The city offers a myriad of cultural events.",
"freq:noteworthy":"The study produced several noteworthy findings.",
"freq:odor":"A strong odor of gas filled the kitchen.",
"freq:plunge":"Share prices plunged after the announcement.",
"freq:pragmatic":"The mayor took a pragmatic approach to the problem.",
"freq:quasi":"The council acts as a quasi government in the region.",
"freq:radiant":"The bride looked radiant in her white dress.",
"freq:remorse":"The killer showed no remorse in court.",
"freq:sanity":"Regular walks helped her keep her sanity.",
"freq:showdown":"The two leaders are heading for a showdown.",
"freq:shuffle":"The old man shuffled slowly across the room.",
"freq:slab":"The floor is made of slabs of stone.",
"freq:supplemental":"Students can borrow supplemental reading materials.",
"freq:tariff":"The government imposed a tariff on imported steel.",
"freq:trance":"She stared at the fire as if in a trance.",
"freq:unconditional":"The army demanded an unconditional surrender.",
"freq:volatility":"Investors fear the volatility of oil prices.",
"freq:anthology":"She edited an anthology of modern poetry.",
"freq:avalanche":"Two skiers were killed in an avalanche.",
"freq:banter":"The players enjoyed friendly banter before the match.",
"freq:blockbuster":"The film became the biggest blockbuster of the summer.",
"freq:charismatic":"The party chose a young and charismatic leader.",
"freq:commencement":"The commencement of the trial was delayed.",
"freq:corrosion":"Salt water causes corrosion of steel.",
"freq:defiance":"They marched in defiance of the ban.",
"freq:deter":"High fines deter drivers from speeding.",
"freq:envoy":"The president sent a special envoy to the region.",
"freq:fabrication":"The story was a complete fabrication.",
"freq:formulation":"He helped in the formulation of the new policy.",
"freq:hysterical":"The crowd became hysterical when the singer appeared.",
"freq:incompatible":"The new software is incompatible with older computers.",
"freq:injunction":"The court issued an injunction against the strike.",
"freq:kidnap":"Rebels kidnapped three foreign engineers.",
"freq:notwithstanding":"Notwithstanding the bad weather, the event was a success.",
"freq:placebo":"Half the patients were given a placebo.",
"freq:retrospective":"The museum is holding a retrospective of her work.",
"freq:speculate":"Experts speculate that prices will fall next year.",
"freq:sublime":"The view from the summit was sublime.",
"freq:terrestrial":"The island has few terrestrial mammals.",
"freq:thug":"He was attacked by a gang of thugs.",
"freq:anomaly":"Scientists found an anomaly in the temperature data.",
"freq:apprenticeship":"He served a five-year apprenticeship as a carpenter.",
"freq:breadth":"The breadth of her knowledge is remarkable.",
"freq:centralized":"The country has a highly centralized government.",
"freq:cleanse":"The nurse cleansed the wound with warm water.",
"freq:consolidate":"The company consolidated its position in the market.",
"freq:containment":"The containment of the virus is the first priority.",
"freq:crave":"After the long hike, we craved a hot meal.",
"freq:elusive":"A lasting peace has proved elusive.",
"freq:espionage":"He was arrested on charges of espionage.",
"freq:existential":"Climate change is an existential threat to the islands.",
"freq:flashback":"The story is told in a series of flashbacks.",
"freq:gloss":"The paint dries with a high gloss.",
"freq:graft":"Surgeons performed a skin graft on his arm.",
"freq:grumpy":"He is always grumpy in the morning.",
"freq:guise":"The tax was introduced under the guise of reform.",
"freq:immersion":"The best way to learn a language is total immersion.",
"freq:intrinsic":"The coin has little intrinsic value.",
"freq:moderation":"Alcohol is harmless if taken in moderation.",
"freq:ordeal":"The hostages described their ordeal to reporters.",
"freq:puberty":"Most girls reach puberty before boys.",
"freq:taboo":"Death is still a taboo subject in many families.",
"freq:throttle":"The pilot opened the throttle and the plane rose.",
"freq:trivia":"He knows a lot of trivia about old films.",
"freq:vortex":"The boat was caught in a vortex of water.",
"freq:alias":"The spy traveled under an alias.",
"freq:anchored":"The ship was anchored in the bay overnight.",
"freq:apostle":"He became an apostle of free trade.",
"freq:concise":"Please give a clear and concise answer.",
"freq:confinement":"He spent two years in solitary confinement.",
"freq:consultancy":"She set up a consultancy for small firms.",
"freq:convergence":"There is a growing convergence of views on the issue.",
"freq:criterion":"Price is the main criterion for most buyers.",
"freq:despicable":"Stealing from the elderly is a despicable crime.",
"freq:diminish":"His influence has diminished over the years.",
"freq:disclaimer":"The website carries a disclaimer about medical advice.",
"freq:discriminatory":"The law was struck down as discriminatory.",
"freq:disruptive":"The strike was highly disruptive to commuters.",
"freq:estimation":"In my estimation, the plan will fail.",
"freq:excavation":"The excavation uncovered a Roman villa.",
"freq:extremist":"The attack was carried out by an extremist group.",
"freq:forcibly":"The protesters were forcibly removed from the building.",
"freq:imbalance":"There is a trade imbalance between the two countries.",
"freq:intolerance":"Religious intolerance led to years of conflict.",
"freq:lineage":"The family claims a lineage going back to the kings.",
"freq:martyr":"He is regarded as a martyr for the cause of freedom.",
"freq:mitigation":"The plan focuses on the mitigation of flood damage.",
"freq:obscene":"The company made obscene profits during the crisis.",
"freq:onward":"The army marched onward to the capital.",
"freq:penal":"The country is reforming its penal system.",
"freq:plight":"The film shows the plight of homeless families.",
"freq:privy":"Only a few officials were privy to the plan.",
"freq:propulsion":"The ship uses nuclear propulsion.",
"freq:rejoice":"The whole town rejoiced at the news.",
"freq:smear":"The candidate called the story a smear.",
"freq:stabilize":"The patient's condition has stabilized.",
"freq:stalk":"The lion stalked its prey through the grass.",
"freq:symbolism":"The poem is rich in religious symbolism.",
"freq:astounding":"The speed of the recovery was astounding.",
"freq:audible":"Her voice was barely audible over the noise.",
"freq:blatant":"The statement was a blatant lie.",
"freq:boon":"The new bridge is a boon to local businesses.",
"freq:candid":"She gave a candid account of her failures.",
"freq:caretaker":"A caretaker government will rule until the election.",
"freq:confidentiality":"Doctors must respect the confidentiality of patients.",
"freq:cunning":"The fox is known as a cunning animal.",
"freq:depiction":"The book's depiction of war is shocking.",
"freq:diaspora":"The festival unites the diaspora around the world.",
"freq:discord":"The decision sowed discord among the allies.",
"freq:divinity":"Early kings claimed divinity for themselves.",
"freq:durability":"The boots are known for their durability.",
"freq:heed":"Few people heeded the warning.",
"freq:hideous":"The room was painted a hideous shade of green.",
"freq:imperfect":"We live in an imperfect world.",
"freq:implicit":"There was an implicit threat in his words.",
"freq:insensitive":"It was insensitive to joke about her illness.",
"freq:lieu":"Workers received extra holidays in lieu of pay.",
"freq:liquidity":"The bank faced a sudden liquidity crisis.",
"freq:mayhem":"The power cut caused mayhem on the roads.",
"freq:nostalgic":"The old photographs made her feel nostalgic.",
"freq:oppressive":"People fled the country to escape its oppressive regime.",
"freq:patronage":"The arts flourished under royal patronage.",
"freq:pinnacle":"Winning the prize was the pinnacle of her career.",
"freq:qualitative":"The study combines qualitative and numerical data.",
"freq:recognizable":"The tower is the most recognizable building in the city.",
"freq:reconnaissance":"A reconnaissance plane flew over the border.",
"freq:reluctantly":"He reluctantly agreed to pay the fine.",
"freq:rendition":"The choir gave a moving rendition of the hymn.",
"freq:sham":"Critics called the election a sham.",
"freq:stature":"He is a scientist of international stature.",
"freq:steward":"He acted as a steward of the family's land.",
"freq:stout":"The gate was made of stout oak.",
"freq:tentative":"The two sides reached a tentative agreement.",
"freq:topical":"The comedian is known for his topical jokes.",
"freq:variance":"His account is at variance with the facts.",
"freq:contingency":"The city has a contingency plan for major floods.",
"freq:deprivation":"Sleep deprivation affects memory and mood.",
"freq:duly":"The contract was duly signed by both parties.",
"freq:dusk":"The park closes at dusk.",
"freq:feasibility":"Engineers are studying the feasibility of a tunnel.",
"freq:frenzy":"The news caused a buying frenzy on the stock market.",
"freq:inadvertently":"She inadvertently deleted the entire file.",
"freq:insistence":"At her insistence, the meeting was postponed.",
"freq:invincible":"The team seemed invincible that season.",
"freq:kinetic":"The machine converts kinetic energy into electricity.",
"freq:mania":"The country was swept by football mania.",
"freq:mythical":"The dragon is a mythical creature.",
"freq:outset":"The plan was doomed from the outset.",
"freq:peacock":"A peacock spread its tail on the lawn.",
"freq:precursor":"The machine was a precursor of the modern computer.",
"freq:preparatory":"Preparatory talks will begin next week.",
"freq:proclamation":"The king issued a proclamation of peace.",
"freq:provocative":"The artist is known for her provocative paintings.",
"freq:reflex":"The doctor tested the reflex in his knee.",
"freq:repayment":"The repayment of the loan will take ten years.",
"freq:simulate":"The program simulates the effects of an earthquake.",
"freq:soluble":"The tablet is soluble in water.",
"freq:sturdy":"You will need sturdy boots for the hike.",
"freq:wrought":"The storm wrought havoc along the coast.",
"freq:abduction":"The police are investigating the abduction of a child.",
"freq:ancestral":"The family returned to its ancestral home.",
"freq:antiquity":"The statue dates from classical antiquity.",
"freq:aqua":"The walls were painted a pale aqua.",
"freq:bleak":"The outlook for the industry is bleak.",
"freq:bogus":"He was arrested for selling bogus tickets.",
"freq:collusion":"The firms were accused of collusion to fix prices.",
"freq:contractual":"The company failed to meet its contractual obligations.",
"freq:correctional":"He works as an officer at a correctional facility.",
"freq:creamy":"The soup has a rich, creamy texture.",
"freq:deterioration":"Doctors noticed a deterioration in his condition.",
"freq:disbelief":"She shook her head in disbelief.",
"freq:discreet":"He made discreet inquiries about the job.",
"freq:enact":"Congress enacted a law to protect rivers.",
"freq:fiddle":"He fiddled with his pen during the interview.",
"freq:grit":"It takes real grit to finish a marathon.",
"freq:horrendous":"The traffic was horrendous this morning.",
"freq:illegitimate":"Opponents called the new government illegitimate.",
"freq:illicit":"The gang made millions from the illicit trade in ivory.",
"freq:incompetence":"The delay was caused by sheer incompetence.",
"freq:insomnia":"Stress is a common cause of insomnia.",
"freq:lunatic":"Only a lunatic would drive that fast in the fog.",
"freq:lyrical":"The novel is written in lyrical prose.",
"freq:manifestation":"The riots were a manifestation of public anger.",
"freq:migrate":"The birds migrate south every autumn.",
"freq:miraculous":"The patient made a miraculous recovery.",
"freq:mundane":"He dreamed of escaping his mundane job.",
"freq:posterior":"The injury was to the posterior part of the skull.",
"freq:repository":"The library is a repository of rare manuscripts.",
"freq:rumble":"Thunder rumbled in the distance.",
"freq:saloon":"The cowboys gathered in the town's saloon.",
"freq:sanction":"The UN imposed economic sanctions on the country.",
"freq:stale":"The bread had gone stale overnight.",
"freq:sterile":"The instruments must be kept sterile.",
"freq:stringent":"The factory must meet stringent safety standards.",
"freq:torrent":"The rain turned the stream into a torrent.",
"freq:unjust":"The workers protested against the unjust dismissal.",
"freq:wager":"He made a wager that his horse would win.",
"freq:annexation":"The annexation of the region was condemned abroad.",
"freq:ascent":"The climbers began their ascent at dawn.",
"freq:bigotry":"She has fought against racism and bigotry all her life.",
"freq:brute":"They opened the door by brute force.",
"freq:camouflage":"The soldiers wore camouflage in the forest.",
"freq:compliant":"All our products are compliant with safety law.",
"freq:continuum":"Opinions on the issue lie along a continuum.",
"freq:devoid":"The landscape was devoid of trees.",
"freq:disparity":"There is a wide disparity in pay between the two groups.",
"freq:facade":"Behind his cheerful facade, he was deeply unhappy.",
"freq:haze":"The city was covered in a haze of smoke.",
"freq:hitch":"The ceremony went off without a hitch.",
"freq:incarnation":"She seemed the incarnation of kindness.",
"freq:inverse":"There is an inverse relationship between price and demand.",
"freq:lavish":"They held a lavish party to celebrate the deal.",
"freq:livelihood":"Fishing is the main livelihood of the villagers.",
"freq:miscellaneous":"The box contained miscellaneous tools and wires.",
"freq:misguided":"It was a misguided attempt to help.",
"freq:override":"Congress voted to override the president's veto.",
"freq:paranoia":"The dictator's paranoia grew worse with age.",
"freq:plurality":"She won a plurality of the votes but not a majority.",
"freq:psyche":"The war left deep scars on the national psyche.",
"freq:reluctance":"He showed great reluctance to discuss the matter.",
"freq:replication":"The replication of the experiment produced the same result.",
"freq:sediment":"Layers of sediment built up on the lake bed.",
"freq:solitude":"She enjoys the solitude of the mountains.",
"freq:stronghold":"The north is a stronghold of the ruling party.",
"freq:therein":"He trusted everyone, and therein lay his mistake.",
"freq:turret":"The castle has a turret at each corner.",
"freq:ubiquitous":"Smartphones have become ubiquitous in daily life.",
"freq:unconventional":"She has an unconventional approach to teaching.",
"freq:unnoticed":"The error went unnoticed for several months.",
"freq:visionary":"He was a visionary leader ahead of his time.",
"freq:adultery":"In some countries adultery is still a crime.",
"freq:agile":"Monkeys are agile climbers.",
"freq:artifact":"The museum displays artifacts from ancient Egypt.",
"freq:austerity":"The government introduced austerity measures to cut debt.",
"freq:bouquet":"She carried a bouquet of white roses.",
"freq:candidacy":"She announced her candidacy for mayor.",
"freq:commonplace":"Electric cars are now commonplace in the city.",
"freq:constrained":"The project was constrained by a small budget.",
"freq:contemplate":"He is contemplating a move to the countryside.",
"freq:crook":"The firm was run by a gang of crooks.",
"freq:depict":"The painting depicts a battle at sea.",
"freq:dormant":"The volcano has been dormant for centuries.",
"freq:emulate":"Many young players try to emulate their heroes.",
"freq:evasion":"He was jailed for tax evasion.",
"freq:eviction":"The family faces eviction from their flat.",
"freq:expulsion":"The student faced expulsion for cheating.",
"freq:filth":"The streets were covered in filth.",
"freq:foliage":"The house was hidden by thick foliage.",
"freq:foreclosure":"Thousands lost their homes to foreclosure.",
"freq:hurdle":"The bill has cleared its first hurdle in parliament.",
"freq:indefinite":"The workers began an indefinite strike.",
"freq:insightful":"She wrote an insightful article on poverty.",
"freq:irrespective":"The rule applies to everyone, irrespective of age.",
"freq:moderator":"The moderator asked each candidate two questions.",
"freq:monstrous":"The court called it a monstrous crime.",
"freq:novice":"The course is designed for complete novices.",
"freq:parity":"Women are still fighting for pay parity.",
"freq:populous":"It is the most populous state in the country.",
"freq:reliant":"The island is heavily reliant on tourism.",
"freq:reputable":"Always buy from a reputable dealer.",
"freq:ripple":"The news sent ripples through the financial markets.",
"freq:solemn":"The ceremony was a solemn occasion.",
"freq:substantive":"The talks produced no substantive progress.",
"freq:unleash":"The decision unleashed a wave of protests.",
"freq:vitality":"The city is full of energy and vitality.",
"freq:abyss":"The country stood on the edge of an economic abyss.",
"freq:accession":"The country's accession to the union took ten years.",
"freq:arson":"The fire is being treated as arson.",
"freq:bourgeois":"He mocked the bourgeois values of his parents.",
"freq:bribery":"Three officials were charged with bribery.",
"freq:buzzer":"Press the buzzer to open the gate.",
"freq:cohort":"The study followed a cohort of five hundred children.",
"freq:culprit":"Police are still searching for the culprit.",
"freq:diffusion":"The internet speeded up the diffusion of new ideas.",
"freq:distrust":"There is deep distrust between the two communities.",
"freq:embark":"She embarked on a new career at fifty.",
"freq:etiquette":"Business etiquette differs from country to country.",
"freq:extravagant":"He was criticized for his extravagant lifestyle.",
"freq:heartfelt":"She offered a heartfelt apology to the victims.",
"freq:hypocrite":"He called the minister a hypocrite.",
"freq:leftover":"We ate the leftover rice for lunch.",
"freq:mammoth":"Clearing the debris was a mammoth task.",
"freq:motif":"Loss is a recurring motif in her novels.",
"freq:ominous":"Ominous black clouds gathered over the sea.",
"freq:peril":"The sailors faced great peril in the storm.",
"freq:precaution":"As a precaution, the school was closed.",
"freq:principally":"The disease principally affects the elderly.",
"freq:professionalism":"The nurses were praised for their professionalism.",
"freq:rampage":"Fans went on a rampage after the match.",
"freq:recharge":"A week by the sea helped him recharge.",
"freq:scrape":"He scraped the mud off his boots.",
"freq:semantic":"The dispute is largely semantic.",
"freq:skepticism":"The claim was met with skepticism by experts.",
"freq:startling":"The report reached a startling conclusion.",
"freq:strife":"The country was torn by civil strife.",
"freq:thrift":"Her parents taught her the value of thrift.",
"freq:turnaround":"The firm achieved a remarkable turnaround in profits.",
"freq:anonymity":"The witness spoke on condition of anonymity.",
"freq:appropriation":"Congress approved an appropriation for new schools.",
"freq:barrage":"The minister faced a barrage of questions.",
"freq:brilliance":"Critics praised the brilliance of her performance.",
"freq:cocky":"The young player was cocky after his first win.",
"freq:conglomerate":"The newspaper is owned by a media conglomerate.",
"freq:counterfeit":"He was caught with counterfeit banknotes.",
"freq:edgy":"He was edgy before the interview.",
"freq:enormously":"The city has changed enormously in ten years.",
"freq:evade":"He evaded the question by changing the subject.",
"freq:futile":"All attempts to save the ship were futile.",
"freq:gritty":"The film is a gritty drama about life in prison.",
"freq:hinder":"Heavy rain hindered the rescue effort.",
"freq:inhibition":"After a drink he lost his inhibitions.",
"freq:intermittent":"Intermittent rain is expected in the afternoon.",
"freq:intimidation":"Voters faced intimidation at the polling stations.",
"freq:iteration":"The latest iteration of the phone has a better camera.",
"freq:maxim":"\"Less is more\" is his favorite maxim.",
"freq:melancholy":"There was a note of melancholy in his voice.",
"freq:meteorological":"The meteorological office issued a storm warning.",
"freq:negligible":"The risk to the public is negligible.",
"freq:obligatory":"Attendance at the meeting is obligatory.",
"freq:outpost":"The fort was the last outpost of the empire.",
"freq:overflow":"The river overflowed its banks after the storm.",
"freq:panorama":"The tower offers a panorama of the whole city.",
"freq:pervasive":"Corruption is pervasive in the police force.",
"freq:predatory":"The bank was accused of predatory lending.",
"freq:preface":"The author explains her aims in the preface.",
"freq:punitive":"The court awarded punitive damages against the firm.",
"freq:shameless":"It was a shameless attempt to win votes.",
"freq:skeletal":"The hospital runs with a skeletal staff at night.",
"freq:sprinkle":"She sprinkled sugar on the cake.",
"freq:stamina":"Marathon runners need great stamina.",
"freq:stimuli":"Babies respond to visual stimuli from birth.",
"freq:utopia":"The writer imagined a utopia without war.",
"freq:abrupt":"The meeting came to an abrupt end.",
"freq:acronym":"NATO is an acronym known around the world.",
"freq:affidavit":"The witness signed an affidavit for the court.",
"freq:antics":"The children laughed at the clown's antics.",
"freq:defamation":"The actor sued the magazine for defamation.",
"freq:divergent":"The two experts hold divergent views.",
"freq:downright":"His behavior was downright rude.",
"freq:electrode":"Doctors attached an electrode to his chest.",
"freq:exemplary":"The soldier was praised for his exemplary conduct.",
"freq:expansive":"The house has an expansive view of the valley.",
"freq:hysteria":"The rumor caused mass hysteria in the town.",
"freq:imperialism":"The book examines the history of European imperialism.",
"freq:imprint":"The scene was imprinted on her memory.",
"freq:incremental":"The reforms brought only incremental change.",
"freq:infancy":"The technology is still in its infancy.",
"freq:manslaughter":"The driver was convicted of manslaughter.",
"freq:misdemeanor":"He was fined for a minor misdemeanor.",
"freq:obnoxious":"An obnoxious passenger shouted at the crew.",
"freq:rake":"He raked the leaves into a pile.",
"freq:resent":"She resents being treated like a child.",
"freq:retribution":"The victims' families demanded retribution.",
"freq:rhetorical":"He was only asking a rhetorical question.",
"freq:rightful":"The land was returned to its rightful owners.",
"freq:spawn":"The show spawned dozens of imitations.",
"freq:suffrage":"Women won suffrage after a long struggle.",
"freq:surrogate":"The teacher became a surrogate parent to the boy.",
"freq:synopsis":"The program includes a synopsis of the opera.",
"freq:treatise":"He wrote a treatise on the nature of light.",
"freq:variability":"Climate variability makes farming harder.",
"freq:wooded":"The house stands on a wooded hillside.",
"freq:adhesive":"Use a strong adhesive to fix the tiles.",
"freq:affluent":"They live in an affluent suburb of the capital.",
"freq:annals":"The victory is famous in the annals of the sport.",
"freq:antitrust":"The merger was blocked under antitrust law.",
"freq:arid":"Few plants can survive in such an arid climate.",
"freq:bandit":"Travelers were robbed by bandits in the hills.",
"freq:beneficiary":"Children will be the main beneficiaries of the reform.",
"freq:bipartisan":"The bill passed with bipartisan support.",
"freq:buildup":"Satellites detected a military buildup on the border.",
"freq:colossal":"The project was a colossal waste of money.",
"freq:conserve":"We must conserve water during the drought.",
"freq:constellation":"Orion is an easy constellation to find.",
"freq:contour":"The map shows the contours of the land.",
"freq:curfew":"The army imposed a curfew after the riots.",
"freq:delusion":"He is under the delusion that everyone admires him.",
"freq:depreciation":"The depreciation of the currency raised import prices.",
"freq:endemic":"Malaria is endemic in the region.",
"freq:futuristic":"The car has a futuristic design.",
"freq:hallmark":"Attention to detail is the hallmark of her work.",
"freq:illiterate":"A third of the adults in the village are illiterate.",
"freq:inclination":"She has no inclination to enter politics.",
"freq:inward":"The door opens inward.",
"freq:legality":"Lawyers questioned the legality of the search.",
"freq:loosen":"The government loosened controls on foreign trade.",
"freq:murderous":"The regime was known for its murderous policies.",
"freq:notoriously":"The exam is notoriously difficult.",
"freq:opaque":"The firm's accounts are deliberately opaque.",
"freq:otter":"An otter was swimming near the river bank.",
"freq:populist":"The populist leader promised to cut all taxes.",
"freq:porous":"The border is porous and hard to guard.",
"freq:rein":"The new chief kept a tight rein on spending.",
"freq:rustic":"They stayed in a rustic cottage by the lake.",
"freq:saturation":"The market has reached saturation point.",
"freq:sizable":"He inherited a sizable fortune from his aunt.",
"freq:spartan":"The monks live in spartan conditions.",
"freq:subdued":"The mood at the party was subdued.",
"freq:triumphant":"The team made a triumphant return home.",
"freq:undisclosed":"The company was sold for an undisclosed sum.",
"freq:wrench":"He wrenched the door open with both hands.",
"freq:wretched":"The refugees lived in wretched conditions.",
"freq:adolescence":"Friendships formed in adolescence often last for life.",
"freq:analogous":"The heart is analogous to a pump.",
"freq:archaic":"The law is written in archaic language.",
"freq:attribution":"The attribution of the painting to Rembrandt is disputed.",
"freq:censor":"The government censored reports of the protest.",
"freq:centennial":"The town is preparing for its centennial celebrations.",
"freq:colonization":"The colonization of the island began in 1620.",
"freq:cosmopolitan":"London is a truly cosmopolitan city.",
"freq:crippling":"The country faces crippling debts.",
"freq:deductible":"Donations to the charity are tax deductible.",
"freq:equitable":"They want a more equitable share of the profits.",
"freq:exert":"Parents exert a strong influence on their children.",
"freq:feudal":"The country kept a feudal system until 1870.",
"freq:fodder":"The scandal provided fodder for the newspapers.",
"freq:fumble":"He fumbled in his pocket for the key.",
"freq:gourmet":"The hotel is famous for its gourmet restaurant.",
"freq:hefty":"The firm was hit with a hefty fine.",
"freq:incarceration":"The report criticizes the mass incarceration of young men.",
"freq:intrigue":"The strange letter intrigued the detective.",
"freq:mastermind":"Police arrested the mastermind of the robbery.",
"freq:noticeably":"The weather has become noticeably warmer.",
"freq:overrun":"The old barn was overrun with rats.",
"freq:pasture":"Cows were grazing in the pasture.",
"freq:pathological":"He is a pathological liar.",
"freq:plentiful":"Fish are plentiful in the lake.",
"freq:rarity":"Snow is a rarity in this part of the country.",
"freq:satirical":"He writes for a satirical magazine.",
"freq:slump":"The housing market is in a slump.",
"freq:sparse":"The population of the region is sparse.",
"freq:supplementary":"The teacher handed out supplementary materials.",
"freq:temperament":"She has a calm and patient temperament.",
"freq:torment":"He was tormented by guilt for years.",
"freq:understatement":"To say he was angry is an understatement.",
"freq:undesirable":"The drug has some undesirable side effects.",
"freq:unification":"The unification of the two states took a decade.",
"freq:wildfire":"The wildfire destroyed hundreds of homes.",
"freq:afar":"Tourists come from afar to see the falls.",
"freq:awaken":"The trip awakened her interest in history.",
"freq:conjecture":"The cause of the fire is still a matter of conjecture.",
"freq:conspicuous":"He felt conspicuous in his bright red coat.",
"freq:crackdown":"The police launched a crackdown on drunk driving.",
"freq:craze":"The dance craze swept the country.",
"freq:escalate":"The dispute escalated into a full-scale strike.",
"freq:fiercely":"The two firms compete fiercely for customers.",
"freq:genealogy":"She traced the genealogy of her family.",
"freq:heresy":"He was burned for heresy in 1600.",
"freq:hostess":"The hostess welcomed each guest at the door.",
"freq:ignite":"A spark ignited the leaking gas.",
"freq:illumination":"The only illumination came from a single candle.",
"freq:impoverished":"The charity works in impoverished rural areas.",
"freq:ingenious":"She found an ingenious solution to the problem.",
"freq:moor":"We moored the boat beside the old bridge.",
"freq:ostensibly":"He left ostensibly for health reasons.",
"freq:outspoken":"She is an outspoken critic of the government.",
"freq:palate":"The wine pleased even the most refined palate.",
"freq:pedestal":"The statue stands on a marble pedestal.",
"freq:pedigree":"The horse has an excellent pedigree.",
"freq:phony":"He gave the police a phony address.",
"freq:pinpoint":"Experts could not pinpoint the cause of the crash.",
"freq:prowess":"He is famous for his prowess as a hunter.",
"freq:repent":"He repented of his crimes before he died.",
"freq:revert":"After the holidays he reverted to his old habits.",
"freq:senseless":"It was a senseless act of violence.",
"freq:slay":"The knight set out to slay the dragon.",
"freq:unavoidable":"Some delay is unavoidable in bad weather.",
"freq:unilateral":"The country announced a unilateral ceasefire.",
"freq:acidic":"The soil here is too acidic for wheat.",
"freq:adherence":"Strict adherence to the rules is required.",
"freq:amnesia":"He suffered from amnesia after the accident.",
"freq:bearded":"A tall, bearded man opened the door.",
"freq:bombardment":"The city suffered weeks of heavy bombardment.",
"freq:borderline":"Her exam result was a borderline pass.",
"freq:capitalize":"The firm capitalized on the growing demand for bikes.",
"freq:charisma":"The leader has great personal charisma.",
"freq:cognition":"The drug may affect memory and cognition.",
"freq:devastation":"The flood left a trail of devastation.",
"freq:devout":"She comes from a devout Catholic family.",
"freq:disproportionate":"The punishment was disproportionate to the crime.",
"freq:divisive":"Immigration is a divisive issue in the election.",
"freq:embryo":"The embryo develops rapidly in the first weeks.",
"freq:erratic":"His driving became more and more erratic.",
"freq:foreseeable":"Prices will stay high for the foreseeable future.",
"freq:hindsight":"In hindsight, we should have waited.",
"freq:indifference":"The public reacted with indifference to the news.",
"freq:inflict":"The storm inflicted serious damage on the town.",
"freq:inhibit":"High taxes inhibit investment.",
"freq:intoxicated":"He was arrested for driving while intoxicated.",
"freq:involuntary":"She gave an involuntary cry of surprise.",
"freq:libel":"The singer sued the newspaper for libel.",
"freq:lofty":"The party set out its lofty ideals.",
"freq:loom":"A financial crisis is looming.",
"freq:ludicrous":"It is ludicrous to blame the weather.",
"freq:malice":"She acted out of pure malice.",
"freq:nemesis":"The champion finally met his nemesis.",
"freq:ornamental":"The garden has an ornamental pond.",
"freq:populace":"The populace welcomed the new king.",
"freq:propagation":"The group is devoted to the propagation of its beliefs.",
"freq:radiator":"She hung her wet coat over the radiator.",
"freq:regal":"She entered the room with a regal air.",
"freq:ridicule":"His ideas were met with ridicule.",
"freq:sinful":"The preacher warned against sinful pleasures.",
"freq:slander":"He accused his rival of slander.",
"freq:sleek":"The company unveiled a sleek new sports car.",
"freq:socioeconomic":"Health is closely linked to socioeconomic status.",
"freq:subpoena":"The court issued a subpoena for the documents.",
"freq:undeniable":"Her talent is undeniable.",
"freq:vigilant":"Travelers should remain vigilant at all times.",
"freq:additive":"The juice contains no artificial additives.",
"freq:adept":"She is adept at handling difficult customers.",
"freq:advantageous":"The deal is advantageous to both sides.",
"freq:afloat":"The loan kept the company afloat.",
"freq:agility":"The goalkeeper is known for his agility.",
"freq:alteration":"The plan was approved without alteration.",
"freq:archipelago":"The archipelago consists of over two hundred islands.",
"freq:causal":"No causal link between the two events was found.",
"freq:citadel":"The citadel overlooks the old town.",
"freq:colonialism":"The country still bears the scars of colonialism.",
"freq:deficient":"The children's diet was deficient in vitamins.",
"freq:degenerate":"The debate degenerated into a shouting match.",
"freq:deterrent":"Heavy fines act as a deterrent to speeding.",
"freq:disdain":"She looked at the cheap gift with disdain.",
"freq:eerie":"An eerie silence fell over the village.",
"freq:enraged":"Enraged fans threw bottles onto the field.",
"freq:exponential":"The company has seen exponential growth in sales.",
"freq:farce":"The trial was a complete farce.",
"freq:fling":"Do not fling your coat on the floor.",
"freq:frantic":"Rescuers made a frantic search for survivors.",
"freq:grudge":"He has held a grudge against her for years.",
"freq:hectic":"She leads a hectic life as a surgeon.",
"freq:informant":"The police relied on an informant inside the gang.",
"freq:intrusive":"Reporters asked intrusive questions about her family.",
"freq:malignant":"The tumor was found to be malignant.",
"freq:maverick":"He was a maverick who ignored party rules.",
"freq:molten":"Molten rock poured from the volcano.",
"freq:negligent":"The court found the driver negligent.",
"freq:optimize":"The software optimizes the use of memory.",
"freq:precedence":"Safety takes precedence over speed.",
"freq:pristine":"The island has miles of pristine beaches.",
"freq:prognosis":"The doctors gave him a good prognosis.",
"freq:retrieval":"The system allows fast retrieval of data.",
"freq:thematic":"The exhibition has a thematic arrangement.",
"freq:unbiased":"We need an unbiased opinion from an outsider.",
"freq:uncanny":"She has an uncanny ability to predict the weather.",
"freq:underdog":"The crowd cheered for the underdog.",
"freq:vandalism":"The school suffered repeated acts of vandalism.",
"freq:wrongful":"She sued her employer for wrongful dismissal.",
"freq:antagonist":"The hero finally defeats his antagonist.",
"freq:approximation":"The figure is only a rough approximation.",
"freq:baroque":"The church is a fine example of baroque architecture.",
"freq:characterize":"The period was characterized by rapid change.",
"freq:ethos":"The school has a strong ethos of hard work.",
"freq:eyewitness":"An eyewitness described the crash to reporters.",
"freq:forfeit":"He forfeited his right to appeal.",
"freq:hinge":"The door swung on a rusty hinge.",
"freq:manifold":"The benefits of exercise are manifold.",
"freq:measurable":"The policy produced a measurable drop in crime.",
"freq:meek":"He was a meek man who never complained.",
"freq:mellow":"The wine has a rich, mellow flavor.",
"freq:narration":"The film uses narration by the main character.",
"freq:oblivion":"The writer's name has sunk into oblivion.",
"freq:perish":"Hundreds perished when the ship went down.",
"freq:perpetrator":"The perpetrator of the attack was never caught.",
"freq:philanthropy":"He gave away his fortune through philanthropy.",
"freq:primal":"Fear is one of our most primal emotions.",
"freq:receptive":"The manager was receptive to new ideas.",
"freq:redundancy":"The factory announced two hundred redundancies.",
"freq:relapse":"She suffered a relapse after leaving hospital.",
"freq:relish":"He relishes the chance to prove his critics wrong.",
"freq:rendezvous":"The spies arranged a secret rendezvous.",
"freq:reversible":"The effects of the drug are fully reversible.",
"freq:shred":"The clerk shredded the secret documents.",
"freq:simplistic":"The article gives a simplistic view of the crisis.",
"freq:supervisory":"She was promoted to a supervisory role.",
"freq:treacherous":"Ice made the mountain road treacherous.",
"freq:untold":"The war caused untold suffering.",
"freq:versatility":"The actor is admired for his versatility.",
"freq:attributable":"The delay was attributable to bad weather.",
"freq:bastion":"The university is a bastion of free thought.",
"freq:bolster":"The victory bolstered the team's confidence.",
"freq:cohesive":"The coach built a cohesive team.",
"freq:contentious":"Abortion remains a contentious issue.",
"freq:denomination":"Christians of every denomination attended the service.",
"freq:embargo":"The UN placed an embargo on arms sales.",
"freq:embodiment":"She is the embodiment of courage.",
"freq:extremism":"The government is trying to fight extremism.",
"freq:gloom":"A sense of gloom spread through the office.",
"freq:hypocritical":"It is hypocritical to preach honesty and then lie.",
"freq:incidental":"Travel and other incidental costs are included.",
"freq:insurgency":"The army has failed to crush the insurgency.",
"freq:intimidate":"The gang tried to intimidate the witness.",
"freq:labyrinth":"The old town is a labyrinth of narrow streets.",
"freq:limbo":"The refugees have been in limbo for two years.",
"freq:nurture":"Good teachers nurture the talents of their pupils.",
"freq:oblivious":"He was oblivious to the danger.",
"freq:overt":"There was no overt hostility between them.",
"freq:patriarch":"The patriarch of the family died at ninety.",
"freq:perjury":"The witness was jailed for perjury.",
"freq:pious":"Her grandmother was a pious woman.",
"freq:proprietor":"The proprietor of the inn greeted us warmly.",
"freq:seamless":"The change of leadership was seamless.",
"freq:silhouette":"We saw the silhouette of a ship on the horizon.",
"freq:smug":"He gave a smug smile after winning.",
"freq:stagnant":"The economy has been stagnant for a decade.",
"freq:toughness":"The job demands mental toughness.",
"freq:unethical":"It is unethical to sell patients' data.",
"freq:valiant":"The firefighters made a valiant effort to save the house.",
"freq:vigilante":"A vigilante group began patrolling the streets.",
"freq:abstraction":"Justice is an abstraction, but its effects are real.",
"freq:adjunct":"Exercise is a useful adjunct to the treatment.",
"freq:blasphemy":"He was accused of blasphemy by the priests.",
"freq:bulky":"The package was too bulky to carry alone.",
"freq:carnage":"The bomb caused carnage in the market.",
"freq:conclusive":"There is no conclusive proof of his guilt.",
"freq:conservatory":"She studied the violin at a conservatory in Vienna.",
"freq:depressive":"He suffers from a depressive illness.",
"freq:descendant":"He is a descendant of the first settlers.",
"freq:disperse":"The police used water to disperse the crowd.",
"freq:exhaustive":"Police made an exhaustive search of the area.",
"freq:fermentation":"Fermentation turns the grape juice into wine.",
"freq:fiasco":"The opening ceremony was a complete fiasco.",
"freq:fruitful":"The two leaders had a fruitful discussion.",
"freq:inaccessible":"The village is inaccessible by road in winter.",
"freq:inferno":"The building became a raging inferno.",
"freq:omission":"The omission of her name was a simple mistake.",
"freq:periphery":"New factories were built on the periphery of the city.",
"freq:prelude":"The skirmish was a prelude to a larger battle.",
"freq:remnant":"The wall is a remnant of the old castle.",
"freq:serenity":"She loved the serenity of the lake at dawn.",
"freq:subtly":"The flavor changes subtly as the cheese ages.",
"freq:toxin":"The bacteria release a deadly toxin.",
"freq:unequal":"Wealth is distributed in an unequal way.",
"freq:unresolved":"The murder remains unresolved after ten years.",
"freq:writ":"The court issued a writ against the newspaper.",
"freq:adversary":"He defeated his old adversary in the final.",
"freq:afflicted":"The region is afflicted by drought.",
"freq:ascertain":"Police are trying to ascertain the facts.",
"freq:bloodshed":"The talks were held to prevent further bloodshed.",
"freq:clinch":"A late goal clinched the title for the team.",
"freq:collide":"Two trains collided near the station.",
"freq:commemoration":"A statue was built in commemoration of the victory.",
"freq:compulsive":"He is a compulsive gambler.",
"freq:congenital":"The baby was born with a congenital heart defect.",
"freq:corrective":"The firm took corrective action at once.",
"freq:crumble":"The old wall is beginning to crumble.",
"freq:denote":"A red flag denotes danger.",
"freq:dossier":"The agency kept a dossier on each suspect.",
"freq:eradicate":"The campaign aims to eradicate the disease by 2030.",
"freq:extortion":"The gang leader was jailed for extortion.",
"freq:feral":"Feral cats are a threat to native birds.",
"freq:ineligible":"He was ineligible to vote because of his age.",
"freq:infusion":"The firm needs an infusion of fresh capital.",
"freq:mediator":"A UN mediator met both sides yesterday.",
"freq:mirage":"The promised recovery proved to be a mirage.",
"freq:mockery":"The trial made a mockery of justice.",
"freq:occult":"She has a deep interest in the occult.",
"freq:ovation":"The pianist received a standing ovation.",
"freq:perch":"A crow perched on the fence.",
"freq:perpendicular":"The two streets are perpendicular to each other.",
"freq:physique":"He has the physique of a swimmer.",
"freq:proficient":"She is proficient in three languages.",
"freq:purification":"The town built a new water purification plant.",
"freq:readable":"The book is a readable account of the war.",
"freq:recourse":"They settled the dispute without recourse to the courts.",
"freq:regimen":"The doctor put him on a strict regimen of exercise.",
"freq:roundup":"The program ends with a roundup of sports news.",
"freq:sequential":"The files are stored in sequential order.",
"freq:sporadic":"Sporadic fighting continued through the night.",
"freq:undue":"The delay caused undue stress to the families.",
"freq:wreckage":"Divers searched the wreckage of the plane.",
"freq:adamant":"She was adamant that she would not resign.",
"freq:archival":"The film uses archival footage from the 1930s.",
"freq:ardent":"He is an ardent supporter of the team.",
"freq:assorted":"The box contains assorted chocolates.",
"freq:barbarian":"The city was destroyed by barbarians.",
"freq:bedrock":"Trust is the bedrock of any friendship.",
"freq:brittle":"Bones become brittle with age.",
"freq:cohesion":"The crisis strengthened social cohesion.",
"freq:compel":"The law compels employers to provide insurance.",
"freq:conduit":"The port served as a conduit for illegal goods.",
"freq:constraint":"Financial constraints forced the project to stop.",
"freq:defunct":"He once wrote for a now defunct newspaper.",
"freq:degrade":"Pollution has degraded the quality of the soil.",
"freq:diffuse":"The lamp gives a soft, diffuse light.",
"freq:emancipation":"She fought for the emancipation of women.",
"freq:entropy":"The system tends toward greater entropy.",
"freq:epitome":"He is the epitome of a gentleman.",
"freq:extradition":"The suspect is fighting extradition to the United States.",
"freq:frail":"Her grandmother is too frail to travel.",
"freq:fray":"Tempers began to fray after hours of delay.",
"freq:grotesque":"The masks were grotesque and frightening.",
"freq:harass":"Reporters harassed the family for weeks.",
"freq:interchangeable":"The two parts are interchangeable.",
"freq:irreversible":"The disease causes irreversible damage to the liver.",
"freq:lawless":"The frontier was a lawless region.",
"freq:predominant":"Fear was the predominant mood in the city.",
"freq:refine":"The engineers refined the design after each test.",
"freq:rupture":"The dispute caused a rupture between the allies.",
"freq:scandalous":"The waste of public money is scandalous.",
"freq:solace":"She found solace in music after his death.",
"freq:splinter":"The party splintered into three rival groups.",
"freq:tinker":"He likes to tinker with old radios.",
"freq:topography":"The topography of the island makes farming hard.",
"freq:unintended":"The new law had unintended consequences.",
"freq:unmanned":"An unmanned aircraft patrols the border.",
"freq:vantage":"From this vantage point you can see the whole bay.",
"freq:whim":"He bought the car on a whim.",
"freq:withhold":"The firm withheld payment until the work was done.",
"freq:zeal":"She took up the cause with great zeal.",
"freq:abort":"The pilot aborted the landing at the last moment.",
"freq:abound":"Rumors abound about the star's private life.",
"freq:audacity":"He had the audacity to ask for more money.",
"freq:barbaric":"The world condemned the barbaric attack.",
"freq:coercion":"He claimed he had signed under coercion.",
"freq:competency":"The test measures basic competency in reading.",
"freq:dogma":"He refused to accept the party's dogma.",
"freq:encompass":"The course encompasses a wide range of subjects.",
"freq:evoke":"The music evokes memories of his youth.",
"freq:fixation":"He has a fixation with cleanliness.",
"freq:flatter":"He flatters his boss at every opportunity.",
"freq:formative":"She spent her formative years in India.",
"freq:fret":"Do not fret about things you cannot change.",
"freq:gratification":"He works for the gratification of helping others.",
"freq:gruesome":"Police made a gruesome discovery in the cellar.",
"freq:inhuman":"Prisoners were kept in inhuman conditions.",
"freq:latent":"The disease can remain latent for years.",
"freq:limitless":"The internet offers limitless information.",
"freq:literate":"Only half the population was literate in 1900.",
"freq:lucid":"She gave a lucid explanation of the theory.",
"freq:merciful":"The judge was merciful and reduced the sentence.",
"freq:midwife":"A midwife helped deliver the baby at home.",
"freq:misinformation":"Misinformation about the vaccine spread quickly online.",
"freq:mobilization":"The president ordered the mobilization of the army.",
"freq:monologue":"The play opens with a long monologue.",
"freq:mutiny":"The captain was killed in a mutiny.",
"freq:parasitic":"The illness is caused by a parasitic worm.",
"freq:pendulum":"The pendulum of public opinion has swung back.",
"freq:poignant":"The film ends with a poignant farewell scene.",
"freq:potency":"The drug loses its potency if stored in heat.",
"freq:precarious":"Many young workers are in a precarious position.",
"freq:pretext":"He left early on the pretext of feeling ill.",
"freq:quaint":"They stayed in a quaint village by the sea.",
"freq:reassurance":"Patients need reassurance before surgery.",
"freq:redistribution":"The party supports the redistribution of wealth.",
"freq:restrain":"Guards had to restrain the angry fan.",
"freq:secession":"The region voted for secession from the state.",
"freq:sectarian":"Sectarian violence has killed hundreds.",
"freq:seminal":"He wrote a seminal work on economics.",
"freq:snag":"The plan hit a snag at the last minute.",
"freq:sophistication":"The attack showed a high level of sophistication.",
"freq:tweak":"Engineers tweaked the design to save fuel.",
"freq:unison":"The crowd shouted his name in unison.",
"freq:unthinkable":"Such a defeat was unthinkable a year ago.",
"freq:uplift":"The victory uplifted the whole nation.",
"freq:venerable":"The venerable professor taught for fifty years.",
"freq:angst":"The novel captures the angst of modern youth.",
"freq:apathy":"Voter apathy led to a low turnout.",
"freq:artisan":"The bread is made by a local artisan.",
"freq:bane":"Traffic noise is the bane of city life.",
"freq:concerto":"She played a violin concerto by Mozart.",
"freq:contraception":"The clinic offers free advice on contraception.",
"freq:crouch":"The boy crouched behind the wall.",
"freq:detriment":"He worked long hours to the detriment of his health.",
"freq:dismal":"The team gave a dismal performance.",
"freq:dismay":"To her dismay, the train had already left.",
"freq:disparate":"The group brings together people from disparate backgrounds.",
"freq:dissemination":"The internet has speeded the dissemination of news.",
"freq:domestically":"Most of the food is produced domestically.",
"freq:expel":"Two students were expelled for cheating.",
"freq:frown":"The teacher frowned at the noisy pupils.",
"freq:hamper":"Fog hampered the search for the missing boat.",
"freq:heroism":"The firefighter was honored for his heroism.",
"freq:hierarchical":"The army is a strictly hierarchical organization.",
"freq:infidelity":"The marriage ended because of his infidelity.",
"freq:inventive":"She is an inventive cook who rarely uses recipes.",
"freq:knack":"He has a knack for making people laugh.",
"freq:liquidation":"The company went into liquidation last year.",
"freq:mercenary":"The king hired mercenaries to defend the city.",
"freq:morbid":"He has a morbid interest in murder cases.",
"freq:ordinarily":"Ordinarily, the journey takes two hours.",
"freq:orthodoxy":"He challenged the economic orthodoxy of his time.",
"freq:paternal":"My paternal grandfather was a fisherman.",
"freq:polarization":"The debate deepened the polarization of society.",
"freq:projectile":"Rioters threw stones and other projectiles.",
"freq:protracted":"The two sides reached a deal after protracted talks.",
"freq:realist":"She is a realist who expects no miracles.",
"freq:remuneration":"The directors' remuneration rose by ten percent.",
"freq:revoke":"The court revoked his driving license.",
"freq:secretive":"The company is very secretive about its plans.",
"freq:undisputed":"She is the undisputed leader of the group.",
"freq:visceral":"The film provokes a visceral reaction of fear.",
"freq:wrongdoing":"The minister denied any wrongdoing.",
"freq:aggregation":"The site depends on the aggregation of news from many sources.",
"freq:antidote":"There is no known antidote to the poison.",
"freq:attest":"Many witnesses can attest to his honesty.",
"freq:auditory":"The disease damages the auditory nerve.",
"freq:avenge":"He swore to avenge his brother's death.",
"freq:aversion":"She has a strong aversion to violence.",
"freq:brood":"He sat brooding over his failure.",
"freq:cessation":"Both sides agreed to a cessation of fighting.",
"freq:commend":"The officer was commended for her bravery.",
"freq:emigration":"Poverty led to mass emigration to America.",
"freq:emit":"The factory emits toxic gases.",
"freq:extant":"Only three copies of the book are extant.",
"freq:fathom":"I cannot fathom why she left.",
"freq:fictitious":"He opened the account under a fictitious name.",
"freq:firsthand":"She has firsthand experience of the war.",
"freq:hedgehog":"A hedgehog was sleeping under the leaves.",
"freq:heinous":"He was jailed for a heinous crime.",
"freq:impeccable":"Her manners are impeccable.",
"freq:infiltrate":"An agent infiltrated the criminal gang.",
"freq:intolerant":"He is intolerant of any criticism.",
"freq:lament":"Older residents lament the loss of the old market.",
"freq:malpractice":"The surgeon was sued for malpractice.",
"freq:manipulative":"He is a manipulative man who uses his friends.",
"freq:payoff":"The payoff for years of training was a gold medal.",
"freq:pesticide":"The farm grows fruit without pesticides.",
"freq:prodigy":"The pianist was a child prodigy.",
"freq:reptile":"Snakes and lizards are reptiles.",
"freq:sluggish":"Economic growth has been sluggish this year.",
"freq:slum":"He grew up in a slum on the edge of the city.",
"freq:snare":"The hunter set a snare for rabbits.",
"freq:strata":"The cliff shows strata of rock from different ages.",
"freq:submissive":"The dog was quiet and submissive.",
"freq:timid":"The timid child hid behind her mother.",
"freq:trickle":"Water trickled down the wall.",
"freq:ultimatum":"The union gave the company an ultimatum.",
"freq:uninterrupted":"She needs eight hours of uninterrupted sleep.",
"freq:affirmation":"The verdict was an affirmation of her innocence.",
"freq:ascend":"The climbers ascended the north face of the mountain.",
"freq:bittersweet":"Leaving the school was a bittersweet moment.",
"freq:blight":"Unemployment is a blight on the town.",
"freq:cinematography":"The film won an award for its cinematography.",
"freq:conducive":"A quiet room is conducive to study.",
"freq:conscientious":"She is a conscientious worker who checks everything twice.",
"freq:consensual":"The decision was reached in a consensual manner.",
"freq:deceit":"His career was built on lies and deceit.",
"freq:denounce":"The bishop denounced the use of violence.",
"freq:derogatory":"He made derogatory remarks about his rival.",
"freq:dismantle":"Workers dismantled the old bridge.",
"freq:enigma":"The origin of the stones remains an enigma.",
"freq:euphoria":"The victory was followed by a mood of euphoria.",
"freq:firewall":"The firm installed a firewall to protect its data.",
"freq:forceful":"She made a forceful case for reform.",
"freq:forte":"Cooking is not my forte.",
"freq:insidious":"The disease is insidious and hard to detect.",
"freq:jargon":"The report is full of legal jargon.",
"freq:leakage":"The leakage of oil polluted the bay.",
"freq:logistical":"The event posed serious logistical problems.",
"freq:loophole":"The firm used a loophole in the tax law.",
"freq:luminous":"The watch has luminous hands.",
"freq:malnutrition":"Many children in the camp suffer from malnutrition.",
"freq:meticulous":"The plan was prepared with meticulous care.",
"freq:modesty":"She accepted the praise with modesty.",
"freq:nigh":"The end of the war was nigh.",
"freq:nocturnal":"Owls are nocturnal birds.",
"freq:overlay":"The map is overlaid with a grid.",
"freq:patriarchal":"She grew up in a patriarchal society.",
"freq:pitiful":"The dog was in a pitiful state.",
"freq:plethora":"The shop offers a plethora of choices.",
"freq:prerequisite":"A degree is a prerequisite for the job.",
"freq:recount":"She recounted her adventures to the children.",
"freq:recurrent":"He suffers from recurrent headaches.",
"freq:requisite":"She lacks the requisite experience for the post.",
"freq:secluded":"They found a secluded beach beyond the cliffs.",
"freq:seduce":"Shoppers are seduced by low prices.",
"freq:shun":"He shunned publicity after the scandal.",
"freq:upkeep":"The upkeep of the castle costs millions a year.",
"freq:vigil":"Hundreds held a vigil for the victims.",
"freq:whirlwind":"The couple married after a whirlwind romance.",
"freq:aristocratic":"She came from an old aristocratic family.",
"freq:clout":"The union has lost much of its political clout.",
"freq:commemorative":"The post office issued a commemorative stamp.",
"freq:converge":"Thousands of fans converged on the stadium.",
"freq:cryptic":"He left a cryptic message on her desk.",
"freq:discern":"It was hard to discern any difference between the two.",
"freq:fanatic":"He is a football fanatic who never misses a match.",
"freq:formulate":"The committee formulated a new policy.",
"freq:fragmentation":"The fragmentation of the party helped its rivals.",
"freq:hoard":"People began to hoard food before the storm.",
"freq:horde":"A horde of tourists filled the square.",
"freq:imp":"The story tells of an imp who steals children's toys.",
"freq:inconsistency":"There were several inconsistencies in his story.",
"freq:ingenuity":"The bridge is a triumph of human ingenuity.",
"freq:moot":"Whether he would have won is a moot point.",
"freq:partake":"All the guests partook of the feast.",
"freq:plagiarism":"The student was accused of plagiarism.",
"freq:puncture":"A nail punctured the tire.",
"freq:renegade":"A renegade group of soldiers seized the airport.",
"freq:seductive":"The idea of easy money is seductive.",
"freq:summarize":"She summarized the report in two pages.",
"freq:unfounded":"The rumors proved to be unfounded.",
"freq:valor":"He received a medal for valor in battle.",
"freq:vernacular":"The priest preached in the local vernacular.",
"freq:virtuous":"She led a simple and virtuous life.",
"freq:abrasive":"His abrasive manner upset his colleagues.",
"freq:accomplice":"The thief and his accomplice were arrested.",
"freq:annihilation":"The species faces annihilation within a decade.",
"freq:armistice":"The armistice was signed in November 1918.",
"freq:armory":"Rebels seized weapons from the army's armory.",
"freq:auspices":"The talks were held under the auspices of the UN.",
"freq:calamity":"The flood was the worst calamity in the town's history.",
"freq:chronology":"The book gives a chronology of the war.",
"freq:diversification":"The firm is pursuing diversification into new markets.",
"freq:enactment":"The enactment of the law took three years.",
"freq:enlighten":"Could you enlighten me about the new rules?",
"freq:envious":"She was envious of her sister's success.",
"freq:erroneous":"The report was based on erroneous data.",
"freq:familial":"The disease has a familial pattern.",
"freq:frivolous":"The judge dismissed the claim as frivolous.",
"freq:fruition":"After years of work, the plan came to fruition.",
"freq:giddy":"She felt giddy after the long climb.",
"freq:grandeur":"Visitors admire the grandeur of the palace.",
"freq:homogeneous":"The country has a largely homogeneous population.",
"freq:intangible":"Trust is an intangible asset for any firm.",
"freq:metaphysical":"The poem deals with metaphysical questions.",
"freq:meteorology":"He studied meteorology at university.",
"freq:mindless":"It was an act of mindless violence.",
"freq:negotiable":"The price is negotiable for regular customers.",
"freq:nudge":"She nudged him to remind him of the time.",
"freq:ploy":"The offer was just a ploy to win votes.",
"freq:presumption":"The law is based on a presumption of innocence.",
"freq:reactionary":"The party was criticized for its reactionary policies.",
"freq:reconstruct":"Police tried to reconstruct the events of that night.",
"freq:stewardship":"The forest thrived under his stewardship.",
"freq:synergy":"The merger created synergy between the two firms.",
"freq:whopping":"The company made a whopping profit of two billion.",
"freq:absurdity":"He laughed at the absurdity of the situation.",
"freq:alchemy":"Medieval scholars practiced alchemy in secret.",
"freq:clandestine":"The two spies held a clandestine meeting.",
"freq:clutter":"Her desk was covered in clutter.",
"freq:conqueror":"The conqueror entered the city in triumph.",
"freq:crafty":"The crafty merchant tricked his customers.",
"freq:debacle":"The election was a debacle for the ruling party.",
"freq:defiant":"The defiant prisoner refused to answer.",
"freq:deformed":"The tree was deformed by years of strong wind.",
"freq:disarm":"The police disarmed the gunman.",
"freq:eminence":"He rose to eminence as a surgeon.",
"freq:entail":"The job entails a great deal of travel.",
"freq:fallacy":"It is a fallacy that money brings happiness.",
"freq:feeble":"He gave a feeble excuse for being late.",
"freq:fend":"The children had to fend for themselves.",
"freq:ferocious":"The village was attacked by a ferocious tiger.",
"freq:fragrant":"The garden was filled with fragrant flowers.",
"freq:gallant":"The gallant soldiers defended the bridge.",
"freq:hermit":"He lived as a hermit in the mountains.",
"freq:indecent":"He was fined for indecent behavior in public.",
"freq:inquest":"An inquest was held into the worker's death.",
"freq:mercantile":"Venice was once a great mercantile power.",
"freq:migratory":"The lake is a resting place for migratory birds.",
"freq:mingle":"The minister mingled with the guests.",
"freq:nomenclature":"The book explains the nomenclature of plants.",
"freq:outcry":"The plan caused a public outcry.",
"freq:panoramic":"The room has a panoramic view of the bay.",
"freq:preferential":"Members receive preferential treatment.",
"freq:prolong":"The drug can prolong the lives of patients.",
"freq:rambling":"He gave a long, rambling speech.",
"freq:rowdy":"Police were called to deal with rowdy fans.",
"freq:subversive":"He was jailed for subversive activities.",
"freq:suggestive":"The music is suggestive of a summer evening.",
"freq:totalitarian":"The novel describes life under a totalitarian state.",
"freq:translucent":"The lamp has a translucent shade.",
"freq:unfavorable":"The match was played in unfavorable conditions.",
"freq:wield":"The president wields enormous power.",
"freq:affirm":"The court affirmed the right to protest.",
"freq:agrarian":"The country had an agrarian economy until 1950.",
"freq:anecdote":"He told an amusing anecdote about his teacher.",
"freq:appease":"The government tried to appease the angry farmers.",
"freq:aptitude":"She showed an early aptitude for music.",
"freq:assassinate":"A plot to assassinate the king was discovered.",
"freq:bespoke":"He wears bespoke suits from London.",
"freq:brisk":"They went for a brisk walk before breakfast.",
"freq:bubbly":"She has a warm, bubbly personality.",
"freq:climatic":"Climatic changes have affected the harvest.",
"freq:conformity":"The school demands conformity to its rules.",
"freq:correlate":"High grades correlate with regular attendance.",
"freq:courteous":"The staff were helpful and courteous.",
"freq:defer":"The committee deferred its decision until June.",
"freq:demeanor":"He has a calm and friendly demeanor.",
"freq:deplorable":"The prisoners lived in deplorable conditions.",
"freq:deranged":"A deranged man attacked passengers on the train.",
"freq:detour":"We made a detour to avoid the traffic.",
"freq:equate":"Many people equate wealth with success.",
"freq:ethereal":"The singer has an ethereal voice.",
"freq:expanse":"A vast expanse of desert lay ahead.",
"freq:fanfare":"The product was launched with great fanfare.",
"freq:favorably":"Critics reviewed the play favorably.",
"freq:flask":"She carried a flask of hot tea.",
"freq:frosty":"He received a frosty welcome from his rivals.",
"freq:individuality":"The school encourages individuality in its pupils.",
"freq:insurgent":"Insurgents attacked the army base at dawn.",
"freq:oblique":"She made an oblique reference to his past.",
"freq:obscurity":"The painter died in obscurity.",
"freq:onslaught":"The city could not withstand the enemy's onslaught.",
"freq:paramilitary":"A paramilitary group controls the border area.",
"freq:permissible":"Smoking is not permissible inside the building.",
"freq:platonic":"Their friendship was purely platonic.",
"freq:recurrence":"The measures aim to prevent a recurrence of the accident.",
"freq:refinement":"The design has undergone several refinements.",
"freq:repel":"The army repelled the invaders.",
"freq:revamp":"The company revamped its website.",
"freq:sensibility":"The poet had a refined sensibility.",
"freq:slumber":"The noise woke him from his slumber.",
"freq:staunch":"She is a staunch supporter of the party.",
"freq:swoop":"The eagle swooped down on its prey.",
"freq:transatlantic":"He made the first solo transatlantic flight.",
"freq:unparalleled":"The museum has an unparalleled collection of maps.",
"freq:unsolicited":"I receive dozens of unsolicited e-mails a day.",
"freq:unveil":"The company unveiled its new model yesterday.",
"freq:unworthy":"He felt unworthy of the honor.",
"freq:vocation":"She found her true vocation in nursing.",
"freq:agitation":"He paced the room in agitation.",
"freq:agreeable":"We spent an agreeable evening with friends.",
"freq:assertive":"You need to be more assertive in meetings.",
"freq:assimilation":"The assimilation of immigrants takes generations.",
"freq:augment":"He augmented his income by teaching at night.",
"freq:breakaway":"A breakaway faction formed a new party.",
"freq:caricature":"The cartoon is a caricature of the president.",
"freq:companionship":"The old man kept a dog for companionship.",
"freq:complacent":"We must not become complacent about safety.",
"freq:counteract":"The drug counteracts the effects of the poison.",
"freq:courtship":"They married after a brief courtship.",
"freq:deepen":"The crisis deepened over the winter.",
"freq:devise":"Scientists devised a new way to store energy.",
"freq:enclave":"The city has a small Italian enclave.",
"freq:entourage":"The singer arrived with a large entourage.",
"freq:epoch":"The invention marked a new epoch in medicine.",
"freq:forgery":"The painting turned out to be a forgery.",
"freq:gimmick":"The free gift is just a sales gimmick.",
"freq:groundwork":"The talks laid the groundwork for a peace deal.",
"freq:imposition":"The imposition of new taxes angered voters.",
"freq:impromptu":"He gave an impromptu speech at the party.",
"freq:indulgence":"Chocolate is my only indulgence.",
"freq:intersect":"The two roads intersect near the church.",
"freq:nonexistent":"Public transport is almost nonexistent in the village.",
"freq:notoriety":"He gained notoriety for his violent films.",
"freq:ornate":"The palace has an ornate ceiling.",
"freq:palpable":"There was a palpable sense of relief in the room.",
"freq:perk":"A company car is one of the perks of the job.",
"freq:perpetuate":"Such films perpetuate harmful stereotypes.",
"freq:perverse":"He takes a perverse pleasure in upsetting people.",
"freq:plume":"A plume of smoke rose from the factory.",
"freq:plump":"The baby has plump, rosy cheeks.",
"freq:prophetic":"Her warning proved to be prophetic.",
"freq:provocation":"He attacked the man without provocation.",
"freq:recoil":"She recoiled in horror at the sight.",
"freq:remission":"Her cancer has been in remission for two years.",
"freq:renounce":"The prince renounced his claim to the throne.",
"freq:repentance":"He showed no sign of repentance.",
"freq:resonate":"Her message resonated with young voters.",
"freq:restitution":"The court ordered him to pay restitution to the victims.",
"freq:scholastic":"She has an excellent scholastic record.",
"freq:scourge":"Malaria remains the scourge of the region.",
"freq:sobriety":"He has kept his sobriety for five years.",
"freq:stagnation":"The country faces a long period of stagnation.",
"freq:tangent":"The speaker went off on a tangent about his holiday.",
"freq:unearthed":"Newly unearthed letters reveal the poet's secret.",
"freq:unqualified":"The play was an unqualified success.",
"freq:unquestionably":"She is unquestionably the best player in the team.",
"freq:unravel":"Detectives are trying to unravel the mystery.",
"freq:wasteland":"The war turned the farmland into a wasteland.",
"freq:watchdog":"A consumer watchdog criticized the bank's fees.",
"freq:zest":"She has a great zest for life.",
"freq:zoology":"He has a degree in zoology.",
"freq:abstinence":"The doctor advised total abstinence from alcohol.",
"freq:allege":"The lawsuit alleges that the firm hid its losses.",
"freq:arduous":"It was a long and arduous journey.",
"freq:composure":"She kept her composure during the crisis.",
"freq:concur":"Most experts concur with this view.",
"freq:deport":"He was deported for entering the country illegally.",
"freq:dispersion":"Wind helps the dispersion of the seeds.",
"freq:entangled":"The dolphin became entangled in a fishing net.",
"freq:exploratory":"The two sides held exploratory talks.",
"freq:facet":"The report covers every facet of the problem.",
"freq:finesse":"She handled the meeting with great finesse.",
"freq:gist":"I understood the gist of his argument.",
"freq:grievous":"He made a grievous error of judgment.",
"freq:impunity":"The gang operated with impunity for years.",
"freq:infertility":"The clinic treats couples with infertility.",
"freq:insolvency":"The firm is on the brink of insolvency.",
"freq:intermediary":"A lawyer acted as an intermediary in the talks.",
"freq:laughable":"The idea that he is innocent is laughable.",
"freq:makeshift":"They slept in a makeshift shelter.",
"freq:mobilize":"The union mobilized thousands of workers.",
"freq:perilous":"They made a perilous journey across the mountains.",
"freq:repulsive":"The smell from the bin was repulsive.",
"freq:sadistic":"The guard took a sadistic pleasure in his work.",
"freq:slant":"The article has a strong political slant.",
"freq:slur":"He apologized for the racial slur.",
"freq:sulphur":"The spring smells strongly of sulphur.",
"freq:tacky":"The shop sells tacky souvenirs.",
"freq:thaw":"Relations between the two countries began to thaw.",
"freq:tout":"The device is touted as a cure for snoring.",
"freq:transnational":"Transnational crime requires cooperation between states.",
"freq:wares":"Traders displayed their wares in the square.",
"freq:anecdotal":"The evidence for the claim is only anecdotal.",
"freq:animosity":"There is deep animosity between the two families.",
"freq:cavalier":"He has a cavalier attitude toward safety.",
"freq:condone":"The school does not condone bullying.",
"freq:congested":"The roads into the city are badly congested.",
"freq:consecrated":"He was buried in consecrated ground.",
"freq:contiguous":"The two states are contiguous with each other.",
"freq:deflect":"The minister tried to deflect criticism.",
"freq:desolate":"The house stood on a desolate moor.",
"freq:devour":"The hungry children devoured the cake.",
"freq:disarmament":"The two powers signed a treaty on nuclear disarmament.",
"freq:divergence":"There is a wide divergence of opinion on the issue.",
"freq:embody":"She embodies the spirit of the team.",
"freq:envision":"He envisions a city without cars.",
"freq:equivalence":"There is no exact equivalence between the two terms.",
"freq:esoteric":"The lecture was too esoteric for most students.",
"freq:euthanasia":"The country has legalized euthanasia.",
"freq:flammable":"Keep flammable liquids away from heat.",
"freq:grapefruit":"She has half a grapefruit for breakfast.",
"freq:incomprehensible":"His handwriting is almost incomprehensible.",
"freq:inertia":"Reform was blocked by bureaucratic inertia.",
"freq:infestation":"The hotel had an infestation of rats.",
"freq:insurrection":"The army put down an armed insurrection.",
"freq:intolerable":"The heat in the factory was intolerable.",
"freq:mutilation":"The report describes the mutilation of ancient statues.",
"freq:nifty":"The phone has a nifty feature for saving power.",
"freq:pathogen":"The pathogen spreads through dirty water.",
"freq:pretentious":"The restaurant is expensive and pretentious.",
"freq:promenade":"Couples walked along the promenade at sunset.",
"freq:proximal":"The injury was to the proximal end of the bone.",
"freq:rapport":"The teacher has a good rapport with her class.",
"freq:rapture":"The audience listened in rapture.",
"freq:rectify":"The company promised to rectify the mistake.",
"freq:rudimentary":"He has only a rudimentary knowledge of French.",
"freq:screenwriter":"The screenwriter adapted the novel for film.",
"freq:shroud":"The mountain was shrouded in mist.",
"freq:solicitation":"The charity was fined for illegal solicitation of funds.",
"freq:uncharted":"The company is entering uncharted territory.",
"freq:unspoken":"There was an unspoken agreement between them.",
"freq:vendetta":"The two families carried on a vendetta for decades.",
"freq:alienation":"Many young people feel a sense of alienation.",
"freq:anthropologist":"The anthropologist lived with the tribe for two years.",
"freq:attrition":"The war became a long struggle of attrition.",
"freq:autopilot":"The plane was flying on autopilot.",
"freq:budgetary":"The project was cancelled for budgetary reasons.",
"freq:cliche":"The speech was full of tired cliches.",
"freq:collaborator":"He wrote the book with a longtime collaborator.",
"freq:cumbersome":"The old machine was heavy and cumbersome.",
"freq:curt":"She gave a curt reply and walked away.",
"freq:cyclical":"The industry is subject to cyclical changes in demand.",
"freq:diversify":"The farm diversified into tourism.",
"freq:elixir":"The drink was sold as an elixir of youth.",
"freq:epiphany":"She had an epiphany while walking in the woods.",
"freq:fable":"The fable teaches children not to lie.",
"freq:fatality":"The crash caused three fatalities.",
"freq:foresight":"She had the foresight to save money.",
"freq:forsaken":"They found a forsaken village in the hills.",
"freq:incision":"The surgeon made a small incision in the skin.",
"freq:indistinguishable":"The copy is indistinguishable from the original.",
"freq:intensify":"The fighting intensified during the night.",
"freq:martyrdom":"The saint suffered martyrdom in Rome.",
"freq:procure":"The army procured food from local farms.",
"freq:propensity":"He has a propensity to exaggerate.",
"freq:ruse":"The phone call was a ruse to get him out of the office.",
"freq:seniority":"Promotion is based on seniority.",
"freq:severance":"He received two months' severance pay.",
"freq:singularity":"The singularity of the case attracted attention.",
"freq:socialize":"He rarely socializes with his colleagues.",
"freq:strut":"The rooster strutted across the yard.",
"freq:swirl":"Smoke swirled around the room.",
"freq:tycoon":"The newspaper was bought by an oil tycoon.",
"freq:undeniably":"She is undeniably talented.",
"freq:unorthodox":"The coach uses unorthodox training methods.",
"freq:uproar":"The decision caused an uproar in parliament.",
"freq:vigilance":"Constant vigilance is needed to prevent fires.",
"freq:allure":"Few can resist the allure of fame.",
"freq:authorship":"The authorship of the poem is unknown.",
"freq:burnout":"Many nurses suffer from burnout.",
"freq:buyout":"The managers arranged a buyout of the company.",
"freq:caveat":"He agreed, with the caveat that costs must not rise.",
"freq:chore":"Washing the dishes is a daily chore.",
"freq:circumvent":"Some firms try to circumvent the rules.",
"freq:clique":"A small clique controls the club.",
"freq:contemplation":"He sat in silent contemplation.",
"freq:cranky":"The baby gets cranky when he is tired.",
"freq:distraught":"The distraught mother begged for help.",
"freq:drizzle":"A light drizzle fell all morning.",
"freq:emergent":"The firm invests in emergent technologies.",
"freq:enchanting":"The village has an enchanting view of the sea.",
"freq:exalted":"He rose to an exalted position at court.",
"freq:formality":"The interview was a mere formality.",
"freq:fortitude":"She bore her illness with great fortitude.",
"freq:geopolitical":"The region is of great geopolitical importance.",
"freq:grievance":"Workers presented their grievances to the manager.",
"freq:grunt":"He grunted a reply without looking up.",
"freq:harmonious":"The two groups live in a harmonious relationship.",
"freq:hitherto":"The cave revealed a hitherto unknown species.",
"freq:incline":"The road climbs a steep incline.",
"freq:incubation":"The disease has an incubation period of ten days.",
"freq:insignia":"The officer wore the insignia of his rank.",
"freq:interplay":"The book examines the interplay between money and power.",
"freq:kindred":"The two artists were kindred spirits.",
"freq:mischievous":"The boy had a mischievous smile.",
"freq:nameless":"The donation came from a nameless supporter.",
"freq:outburst":"He apologized for his angry outburst.",
"freq:preventable":"Most of these deaths are preventable.",
"freq:provenance":"The provenance of the painting is uncertain.",
"freq:ravine":"The bus fell into a deep ravine.",
"freq:redress":"The victims are seeking redress through the courts.",
"freq:regenerate":"Some lizards can regenerate their tails.",
"freq:reincarnation":"Many Hindus believe in reincarnation.",
"freq:rife":"Rumors are rife that the factory will close.",
"freq:sever":"The country severed diplomatic ties with its neighbor.",
"freq:sharpen":"The course helped her sharpen her skills.",
"freq:stoic":"He remained stoic despite the pain.",
"freq:unchecked":"The fire spread unchecked through the forest.",
"freq:unsustainable":"The country's debt has reached unsustainable levels.",
"freq:utopian":"His plan was dismissed as a utopian dream.",
"freq:wholeheartedly":"I wholeheartedly support the proposal.",
"freq:zenith":"The empire was at the zenith of its power.",
"freq:abbreviation":"\"Dr.\" is an abbreviation for \"doctor.\"",
"freq:adhesion":"The paint has excellent adhesion to metal.",
"freq:atrocious":"The weather was atrocious all week.",
"freq:avert":"Quick action averted a serious accident.",
"freq:avian":"The farm was closed after an outbreak of avian flu.",
"freq:chastity":"The monks take a vow of chastity.",
"freq:circumstantial":"The case against him is based on circumstantial evidence.",
"freq:claimant":"Each claimant must fill in a form.",
"freq:closeness":"The closeness of the vote surprised everyone.",
"freq:contextual":"The meaning depends on contextual clues.",
"freq:cordon":"Police put a cordon around the building.",
"freq:cram":"He crammed all his clothes into one bag.",
"freq:decipher":"Experts are trying to decipher the ancient text.",
"freq:delve":"The book delves into the causes of poverty.",
"freq:depletion":"The depletion of fish stocks worries scientists.",
"freq:dispersal":"The police ordered the dispersal of the crowd.",
"freq:effortless":"She plays the piano with effortless skill.",
"freq:fluke":"The goal was a complete fluke.",
"freq:gauntlet":"The minister ran the gauntlet of angry reporters.",
"freq:ghostly":"A ghostly figure appeared in the mist.",
"freq:idealistic":"She was young and idealistic when she joined the party.",
"freq:impede":"Fallen trees impeded the progress of the rescuers.",
"freq:inflamed":"Her throat was red and inflamed.",
"freq:inhumane":"The treatment of the prisoners was inhumane.",
"freq:instantaneous":"The effect of the drug is almost instantaneous.",
"freq:jinx":"The team finally broke its ten-year jinx.",
"freq:jobless":"The factory closure left hundreds jobless.",
"freq:jurisprudence":"He is a professor of jurisprudence.",
"freq:justifiable":"The court ruled that the killing was justifiable.",
"freq:linkage":"There is a clear linkage between smoking and cancer.",
"freq:ratification":"The treaty is awaiting ratification by parliament.",
"freq:reclamation":"The airport was built on land from a reclamation project.",
"freq:resettlement":"The agency helps with the resettlement of refugees.",
"freq:sedentary":"A sedentary lifestyle increases the risk of illness.",
"freq:situational":"Pilots are trained in situational awareness.",
"freq:soggy":"The field was soggy after days of rain.",
"freq:steadfast":"She remained steadfast in her beliefs.",
"freq:stoop":"He stooped to pick up the coin.",
"freq:stylistic":"The two poems have clear stylistic differences.",
"freq:superstitious":"Sailors are often superstitious about the weather.",
"freq:touchy":"He is touchy about his age.",
"freq:trampoline":"The children were jumping on a trampoline.",
"freq:tranquil":"They spent a week by a tranquil lake.",
"freq:transformative":"Education can have a transformative effect on a life.",
"freq:unsuspecting":"The thieves stole from unsuspecting tourists.",
"freq:unwelcome":"The news was an unwelcome surprise.",
"freq:abode":"The cottage was his abode for forty years.",
"freq:abomination":"He called the new building an abomination.",
"freq:acutely":"She is acutely aware of the risks.",
"freq:allotment":"Each family received an allotment of land.",
"freq:antisocial":"The council wants to reduce antisocial behavior.",
"freq:astray":"The letter went astray in the post.",
"freq:blunder":"The minister admitted a serious blunder.",
"freq:commotion":"There was a commotion outside the courtroom.",
"freq:cynicism":"The scandal increased public cynicism about politics.",
"freq:debatable":"Whether the plan will work is debatable.",
"freq:diligently":"She studied diligently for the exam.",
"freq:duality":"The novel explores the duality of human nature.",
"freq:endearing":"The child has an endearing smile.",
"freq:extermination":"The extermination of rats took several months.",
"freq:habitable":"Only a small part of the island is habitable.",
"freq:hegemony":"The two powers fought for hegemony in the region.",
"freq:hypnotic":"The music has a slow, hypnotic rhythm.",
"freq:inaction":"The government was criticized for its inaction.",
"freq:inconclusive":"The results of the test were inconclusive.",
"freq:inept":"The crisis was made worse by inept leadership.",
"freq:inexplicable":"For some inexplicable reason, he resigned.",
"freq:innovate":"Firms must innovate to survive.",
"freq:kinship":"She felt a kinship with the other survivors.",
"freq:lenient":"The judge was lenient with the young offender.",
"freq:mediate":"The UN offered to mediate between the two sides.",
"freq:modernism":"The building is a famous example of modernism.",
"freq:nomadic":"The tribe leads a nomadic life in the desert.",
"freq:penance":"He gave money to the poor as penance.",
"freq:preposterous":"The idea that he stole the money is preposterous.",
"freq:preventative":"The clinic focuses on preventative medicine.",
"freq:proverbial":"He was looking for the proverbial needle in a haystack.",
"freq:quirk":"By a quirk of fate, they met again in Paris.",
"freq:rabid":"He is a rabid supporter of the team.",
"freq:reiterate":"The minister reiterated his promise to cut taxes.",
"freq:scorn":"She treated his offer with scorn.",
"freq:skillful":"He is a skillful negotiator.",
"freq:stampede":"Three people were injured in a stampede at the gate.",
"freq:standoff":"The standoff between police and protesters lasted all night.",
"freq:stately":"The family lives in a stately home near the river.",
"freq:tantrum":"The child threw a tantrum in the shop.",
"freq:tectonic":"Earthquakes occur where tectonic plates meet.",
"freq:treachery":"The king never forgave his brother's treachery.",
"freq:unmatched":"Her knowledge of the subject is unmatched.",
"freq:upheaval":"The country went through years of political upheaval.",
"freq:veneer":"His politeness is only a thin veneer.",
"freq:vouch":"I can vouch for the quality of his work.",
"freq:aggravating":"The noise from the road is very aggravating.",
"freq:altercation":"He was injured in an altercation outside a bar.",
"freq:amplification":"The hall needs no amplification for the voice.",
"freq:brunt":"Small towns bore the brunt of the storm.",
"freq:burgeoning":"The city has a burgeoning tech industry.",
"freq:cadence":"He spoke with the slow cadence of a preacher.",
"freq:condensation":"Condensation formed on the cold windows.",
"freq:confluence":"The town lies at the confluence of two rivers.",
"freq:contraband":"Customs officers found contraband in the truck.",
"freq:custodian":"He works as a custodian at the museum.",
"freq:degeneration":"The disease causes a slow degeneration of the nerves.",
"freq:delinquent":"The program helps delinquent teenagers find work.",
"freq:eradication":"The eradication of smallpox was a great success.",
"freq:fickle":"The weather in the mountains is fickle.",
"freq:forage":"Bears forage for berries in late summer.",
"freq:fraught":"The journey was fraught with danger.",
"freq:grapple":"The city is grappling with a housing crisis.",
"freq:groan":"He groaned with pain as he stood up.",
"freq:hoist":"Sailors hoisted the flag at dawn.",
"freq:incite":"He was charged with inciting a riot.",
"freq:intoxication":"He was arrested for public intoxication.",
"freq:jagged":"The boat struck a jagged rock.",
"freq:mediocrity":"The film rises above the mediocrity of most sequels.",
"freq:murky":"Divers searched the murky water of the canal.",
"freq:neutralize":"The army neutralized the threat within hours.",
"freq:omen":"The dark clouds seemed a bad omen.",
"freq:overgrown":"The path was overgrown with weeds.",
"freq:pedagogy":"The course covers the theory of pedagogy.",
"freq:philanthropist":"The hospital was funded by a wealthy philanthropist.",
"freq:readership":"The magazine has a readership of two million.",
"freq:relinquish":"The king was forced to relinquish his throne.",
"freq:resolute":"She remained resolute in the face of criticism.",
"freq:salient":"The report summarizes the salient points of the case.",
"freq:sentient":"Many people believe that animals are sentient beings.",
"freq:separatist":"Separatist rebels control the northern province.",
"freq:snippet":"I heard only a snippet of their conversation.",
"freq:strenuous":"Avoid strenuous exercise after the operation.",
"freq:surcharge":"The airline added a fuel surcharge to the fare.",
"freq:unharmed":"The hostages were released unharmed.",
"freq:unspeakable":"The refugees suffered unspeakable cruelty.",
"freq:untimely":"His untimely death shocked the whole country.",
"freq:workable":"We need to find a workable solution.",
"freq:abundantly":"It is abundantly clear that the plan has failed.",
"freq:adoration":"She looked at the baby with adoration.",
"freq:affliction":"Blindness is a common affliction in the region.",
"freq:backfire":"The plan to cut costs backfired badly.",
"freq:conspiring":"He was convicted of conspiring to commit fraud.",
"freq:corrosive":"The acid is highly corrosive.",
"freq:cowardice":"The soldier was accused of cowardice.",
"freq:disqualification":"The runner faces disqualification for cheating.",
"freq:enigmatic":"She gave an enigmatic smile and said nothing.",
"freq:exhale":"Breathe in deeply and exhale slowly.",
"freq:fission":"Nuclear fission releases huge amounts of energy.",
"freq:flurry":"There was a flurry of activity before the deadline.",
"freq:genomic":"Genomic research has changed modern medicine.",
"freq:glimmer":"There is a glimmer of hope for the peace talks.",
"freq:humankind":"The discovery was a great step for humankind.",
"freq:limelight":"The scandal thrust her into the limelight.",
"freq:loathe":"He loathes having to speak in public.",
"freq:momentous":"The vote was a momentous event in the nation's history.",
"freq:observable":"There was no observable change in his condition.",
"freq:pang":"She felt a pang of guilt.",
"freq:participatory":"The city has a participatory budget process.",
"freq:refurbishment":"The hotel is closed for refurbishment.",
"freq:revel":"She reveled in her sudden fame.",
"freq:scapegoat":"The manager was made a scapegoat for the failure.",
"freq:shambles":"The meeting ended in a shambles.",
"freq:shrewd":"She is a shrewd investor.",
"freq:shudder":"I shudder to think what might have happened.",
"freq:smuggle":"They tried to smuggle gold across the border.",
"freq:spire":"The church spire can be seen for miles.",
"freq:sprout":"New shops are sprouting up all over the town.",
"freq:stench":"The stench of rotting fish filled the harbor.",
"freq:subsistence":"Many families live at a subsistence level.",
"freq:subterranean":"The city has a network of subterranean tunnels.",
"freq:superhuman":"It took a superhuman effort to finish on time.",
"freq:tenacity":"She pursued the case with great tenacity.",
"freq:tolerable":"The heat is tolerable in the shade.",
"freq:trespass":"He was arrested for trespassing on railway land.",
"freq:unknowingly":"She had unknowingly bought stolen goods.",
"freq:untouchable":"The gang leader believed he was untouchable.",
"freq:unwarranted":"The criticism was completely unwarranted.",
"freq:wishful":"Hoping for a quick victory is wishful thinking.",
"freq:actuality":"In actuality, the costs were far higher.",
"freq:alibi":"The suspect had a solid alibi for that night.",
"freq:astute":"He is an astute observer of politics.",
"freq:brazen":"It was a brazen attempt to cheat.",
"freq:burrow":"The rabbit disappeared into its burrow.",
"freq:causation":"Correlation does not prove causation.",
"freq:centerpiece":"The tax cut is the centerpiece of the budget.",
"freq:clasp":"She clasped her hands together in prayer.",
"freq:compulsion":"He felt a compulsion to check the door again.",
"freq:condescending":"He spoke to us in a condescending tone.",
"freq:conjure":"The song conjures images of summer.",
"freq:copious":"She took copious notes during the lecture.",
"freq:cordial":"The two leaders had a cordial meeting.",
"freq:craftsmanship":"The table shows fine craftsmanship.",
"freq:creditor":"The firm owes millions to its creditors.",
"freq:custodial":"He was given a custodial sentence of two years.",
"freq:derelict":"The children played in a derelict factory.",
"freq:dispel":"The minister tried to dispel fears of a crisis.",
"freq:edict":"The emperor issued an edict banning the religion.",
"freq:egregious":"It was an egregious abuse of power.",
"freq:elasticity":"The skin loses its elasticity with age.",
"freq:epoxy":"The crack was sealed with epoxy.",
"freq:extraterrestrial":"Scientists are searching for extraterrestrial life.",
"freq:fiend":"The newspapers called the killer a fiend.",
"freq:fledgling":"The fledgling company has only six employees.",
"freq:flicker":"The candle flickered in the wind.",
"freq:flimsy":"The case was built on flimsy evidence.",
"freq:gambit":"His opening gambit was to offer a discount.",
"freq:gullible":"The trick only works on gullible tourists.",
"freq:gust":"A gust of wind blew his hat off.",
"freq:hearth":"A fire was burning in the hearth.",
"freq:hemorrhage":"The patient died of a brain hemorrhage.",
"freq:idealism":"She has lost none of her youthful idealism.",
"freq:impeach":"Congress voted to impeach the president.",
"freq:improvisation":"Jazz depends heavily on improvisation.",
"freq:jeopardize":"The scandal could jeopardize his career.",
"freq:lexicon":"The word has entered the lexicon of business.",
"freq:lobbyist":"An oil lobbyist met several senators.",
"freq:lurk":"Danger lurks around every corner.",
"freq:metaphorical":"He was speaking in a metaphorical sense.",
"freq:mismatch":"There is a mismatch between skills and jobs.",
"freq:monastic":"He chose a quiet, monastic life.",
"freq:multilateral":"The two countries prefer a multilateral agreement.",
"freq:namesake":"The ship is larger than its famous namesake.",
"freq:normative":"The study takes a normative approach to ethics.",
"freq:objectivity":"A good judge must keep his objectivity.",
"freq:palliative":"The hospital offers palliative care for the dying.",
"freq:parable":"The priest told a parable about a lost sheep.",
"freq:pastime":"Fishing is his favorite pastime.",
"freq:patchwork":"The region is a patchwork of small farms.",
"freq:pesky":"Pesky flies ruined the picnic.",
"freq:plunder":"Soldiers plundered the town after the battle.",
"freq:pseudonym":"She wrote the novel under a pseudonym.",
"freq:rationality":"He doubted the rationality of the decision.",
"freq:rebuke":"The judge issued a sharp rebuke to the lawyer.",
"freq:rebuttal":"The firm issued a rebuttal of the report.",
"freq:retaliate":"The army retaliated with air strikes.",
"freq:rouse":"The speech roused the crowd to action.",
"freq:scant":"The report paid scant attention to safety.",
"freq:semblance":"Life returned to some semblance of normality.",
"freq:slowdown":"The economy is showing signs of a slowdown.",
"freq:snug":"The cabin was warm and snug.",
"freq:spoof":"The film is a spoof of spy movies.",
"freq:susceptibility":"Smoking increases susceptibility to infection.",
"freq:tangle":"Her hair was in a tangle after the storm.",
"freq:transcend":"Music can transcend cultural differences.",
"freq:trope":"The lost heir is a familiar trope in novels.",
"freq:undercut":"The supermarket undercut local shops on price.",
"freq:unproductive":"The meeting was long and unproductive.",
"freq:whence":"He returned to the village whence he came.",
"freq:whimsical":"The book has whimsical drawings of animals.",
"freq:anthropological":"The museum has an anthropological collection.",
"freq:apprehension":"She felt some apprehension about the interview.",
"freq:articulation":"The speech was a clear articulation of his beliefs.",
"freq:assailant":"The victim did not see his assailant.",
"freq:atonement":"He gave to charity as atonement for his crimes.",
"freq:auspicious":"The team made an auspicious start to the season.",
"freq:barricade":"Protesters built a barricade across the road.",
"freq:baseless":"The accusations were completely baseless.",
"freq:benefactor":"An unknown benefactor paid for the new library.",
"freq:dichotomy":"There is a false dichotomy between work and play.",
"freq:diminutive":"The diminutive actress played a queen.",
"freq:dispensary":"She collected her medicine from the dispensary.",
"freq:doubtless":"He will doubtless be late again.",
"freq:emphatic":"Her answer was an emphatic no.",
"freq:gait":"He walked with a slow, heavy gait.",
"freq:heyday":"In its heyday, the port handled a thousand ships a year.",
"freq:impart":"Teachers impart knowledge to their pupils.",
"freq:incoherent":"He was so angry that his speech was incoherent.",
"freq:interlude":"There was a brief interlude of peace between the wars.",
"freq:irritable":"Lack of sleep makes him irritable.",
"freq:lukewarm":"The plan received a lukewarm response.",
"freq:mismanagement":"The firm collapsed because of financial mismanagement.",
"freq:motley":"A motley group of volunteers arrived to help.",
"freq:nuance":"The translation misses every nuance of the original.",
"freq:obstruct":"A fallen tree obstructed the road.",
"freq:outcast":"He felt like an outcast at the new school.",
"freq:penultimate":"The mystery is solved in the penultimate chapter.",
"freq:pleasurable":"Reading is a pleasurable way to spend an evening.",
"freq:propagate":"The group uses the internet to propagate its ideas.",
"freq:redefine":"The invention redefined the idea of a telephone.",
"freq:reinstate":"The court ordered the firm to reinstate her.",
"freq:remit":"The matter is outside the committee's remit.",
"freq:resumption":"Both sides called for a resumption of talks.",
"freq:retrograde":"Closing the school would be a retrograde step.",
"freq:revere":"The poet is revered throughout the country.",
"freq:rout":"The battle ended in a rout of the enemy.",
"freq:stardom":"She rose to stardom at eighteen.",
"freq:subtlety":"The play is written with great subtlety.",
"freq:symptomatic":"The riots are symptomatic of deeper problems.",
"freq:watchful":"The children played under the watchful eye of their mother.",
"freq:wayward":"The school struggled to control its wayward pupils.",
"freq:yoke":"The country threw off the yoke of foreign rule.",
"freq:ailing":"The government tried to rescue the ailing car industry.",
"freq:aloft":"The winner held the trophy aloft.",
"freq:amalgamation":"The firm was formed by the amalgamation of three companies.",
"freq:beset":"The project was beset by delays.",
"freq:cavern":"Explorers found a vast cavern under the hill.",
"freq:chivalry":"The story celebrates the age of chivalry.",
"freq:cocoon":"The moth emerged from its cocoon.",
"freq:credence":"The new evidence lends credence to her story.",
"freq:debtor":"The bank took legal action against its debtors.",
"freq:derail":"The scandal could derail the peace talks.",
"freq:distort":"The article distorts the facts of the case.",
"freq:dreary":"It was a cold, dreary afternoon.",
"freq:evaporation":"Salt is produced by the evaporation of sea water.",
"freq:foregoing":"The foregoing examples show the need for reform.",
"freq:gallows":"The murderer was sent to the gallows.",
"freq:henceforth":"Henceforth, all visitors must show identification.",
"freq:heterogeneous":"The city has a heterogeneous population.",
"freq:huddle":"The children huddled together for warmth.",
"freq:indignation":"The decision caused public indignation.",
"freq:ingrained":"Such attitudes are deeply ingrained in society.",
"freq:lesion":"The scan showed a small lesion on the lung.",
"freq:lull":"There was a brief lull in the fighting.",
"freq:moratorium":"The government declared a moratorium on whaling.",
"freq:munch":"The children munched apples on the bus.",
"freq:nascent":"The country has a nascent film industry.",
"freq:neurotic":"She is neurotic about germs.",
"freq:prerogative":"Choosing the team is the manager's prerogative.",
"freq:prudence":"The bank is known for its financial prudence.",
"freq:remedial":"The school offers remedial classes in reading.",
"freq:repressive":"The country lived under a repressive regime for decades.",
"freq:resourceful":"She is a resourceful leader in a crisis.",
"freq:sacrificial":"The priest led a sacrificial lamb to the altar.",
"freq:scorching":"They walked for hours in the scorching heat.",
"freq:scribe":"A scribe copied the text by hand.",
"freq:sentry":"A sentry stood guard at the gate.",
"freq:specter":"The specter of war hangs over the region.",
"freq:strewn":"The floor was strewn with broken glass.",
"freq:tact":"She handled the complaint with great tact.",
"freq:taxonomy":"The taxonomy of insects is extremely complex.",
"freq:uncompromising":"He took an uncompromising stand on corruption.",
"freq:unruly":"The teacher struggled with an unruly class.",
"freq:venomous":"The island is home to several venomous snakes.",
"freq:willful":"The fire was an act of willful damage.",
"freq:abstain":"Three members abstained from the vote.",
"freq:allegory":"The novel is an allegory of the cold war.",
"freq:banish":"The king banished his brother from the country.",
"freq:callous":"It was a callous attack on an elderly man.",
"freq:churn":"The ship's engines churned the water white.",
"freq:commendable":"The team made a commendable effort.",
"freq:dainty":"She wore a pair of dainty silver shoes.",
"freq:deliverance":"The villagers prayed for deliverance from the flood.",
"freq:destitute":"The war left thousands of families destitute.",
"freq:dexterity":"The work requires great manual dexterity.",
"freq:dilution":"Critics called the change a dilution of the law.",
"freq:dissipated":"By noon the fog had dissipated.",
"freq:elitist":"The university was accused of being elitist.",
"freq:exclusivity":"The brand is known for its exclusivity.",
"freq:feisty":"She is a feisty woman who never gives up.",
"freq:foothold":"The firm gained a foothold in the Asian market.",
"freq:fraternal":"There is a fraternal bond between the two unions.",
"freq:ghastly":"The accident was a ghastly sight.",
"freq:gratifying":"It is gratifying to see the students succeed.",
"freq:hunch":"I had a hunch that he was lying.",
"freq:impenetrable":"The fortress had impenetrable walls.",
"freq:inconceivable":"It is inconceivable that she would lie.",
"freq:industrialization":"Rapid industrialization changed the countryside.",
"freq:mysticism":"The poet was drawn to Eastern mysticism.",
"freq:nauseous":"The smell of paint made her feel nauseous.",
"freq:nimble":"The goat is a nimble climber.",
"freq:objectionable":"Some viewers found the joke objectionable.",
"freq:opportunistic":"It was an opportunistic crime, not a planned one.",
"freq:outlandish":"He wore an outlandish costume to the party.",
"freq:outlying":"Buses rarely reach the outlying villages.",
"freq:pacifist":"He was a pacifist who refused to fight.",
"freq:penchant":"She has a penchant for expensive shoes.",
"freq:primordial":"Life began in the primordial oceans.",
"freq:quorum":"The meeting was cancelled for lack of a quorum.",
"freq:rascal":"The little rascal hid my shoes.",
"freq:rigor":"The study lacks scientific rigor.",
"freq:shortlist":"Her novel was on the shortlist for the prize.",
"freq:tenancy":"The tenancy runs for two years.",
"freq:testimonial":"The website shows testimonials from happy customers.",
"freq:thence":"They sailed to Lisbon and thence to Africa.",
"freq:unfaithful":"She accused her husband of being unfaithful.",
"freq:unholy":"The two rivals formed an unholy alliance.",
"freq:unregulated":"The market for these drugs is largely unregulated.",
"freq:unscrupulous":"Unscrupulous dealers sold fake medicine.",
"freq:unwittingly":"He unwittingly helped the thieves escape.",
"freq:verbatim":"The reporter quoted the speech verbatim.",
"freq:antiquated":"The office still uses antiquated computers.",
"freq:averse":"He is not averse to taking risks.",
"freq:brim":"The glass was full to the brim.",
"freq:dribble":"Water dribbled from the broken pipe.",
"freq:egalitarian":"She dreams of a more egalitarian society.",
"freq:gout":"He suffers from gout in his left foot.",
"freq:mythological":"The painting shows a mythological scene.",
"freq:palatable":"The minister tried to make the cuts more palatable.",
"freq:solicit":"The charity solicits donations by mail.",
"freq:succumb":"He finally succumbed to the disease.",
"freq:thwart":"Police thwarted a plot to rob the bank.",
"freq:unequivocally":"She unequivocally denied the accusation.",
"freq:acreage":"The farm has doubled its acreage in ten years.",
"freq:assimilate":"Immigrants gradually assimilated into the community.",
"freq:convoluted":"The film has a convoluted plot.",
"freq:counterproductive":"Punishing the children proved counterproductive.",
"freq:impediment":"Lack of money is the main impediment to progress.",
"freq:materialism":"He rejected the materialism of modern life.",
"freq:meager":"They lived on a meager income.",
"freq:parochial":"His view of the world is narrow and parochial.",
"freq:somber":"The mood at the funeral was somber.",
"freq:utilitarian":"The building is plain and utilitarian.",
"freq:belligerent":"He became belligerent after a few drinks.",
"freq:depraved":"The court heard details of his depraved crimes.",
"freq:ebb":"Public support began to ebb away.",
"freq:emulation":"His success is worthy of emulation.",
"freq:forfeiture":"The crime may lead to the forfeiture of his property.",
"freq:instinctive":"She felt an instinctive distrust of the stranger.",
"freq:magnate":"A shipping magnate bought the island.",
"freq:poise":"She answered the questions with great poise.",
"freq:sanctity":"The court defended the sanctity of human life.",
"freq:alienate":"His rude remarks alienated many voters.",
"freq:confrontational":"The union took a confrontational approach.",
"freq:contagion":"Doctors feared the contagion would spread to the city.",
"freq:curate":"She curated an exhibition of modern art.",
"freq:deviant":"The study examines deviant behavior among teenagers.",
"freq:disseminate":"The agency disseminates health information to schools.",
"freq:dynamically":"Prices change dynamically with demand.",
"freq:insular":"The village is small and rather insular.",
"freq:jarring":"The loud colors have a jarring effect.",
"freq:magnetism":"The actor has great personal magnetism.",
"freq:mariner":"The old mariner told stories of the sea.",
"freq:methodological":"The study has serious methodological flaws.",
"freq:scavenger":"Crows are clever scavengers.",
"freq:stuffy":"The room was hot and stuffy.",
"freq:uniformity":"There is little uniformity in the rules.",
"freq:apprehend":"Police apprehended the suspect at the airport.",
"freq:axiom":"It is an axiom that prices follow demand.",
"freq:cleanly":"The knife cut cleanly through the rope.",
"freq:infallible":"No doctor is infallible.",
"freq:methodical":"She is slow but methodical in her work.",
"freq:socialization":"School plays a key role in the socialization of children.",
"freq:tranquility":"They enjoyed the tranquility of the countryside.",
"freq:detract":"The ugly sign detracts from the beauty of the street.",
"freq:dissection":"The students watched the dissection of a frog.",
"freq:distillation":"Whisky is made by the distillation of grain.",
"freq:hibernation":"Bears go into hibernation in winter.",
"freq:hindrance":"Heavy bags are a hindrance on a long walk.",
"freq:inexplicably":"The file had inexplicably disappeared.",
"freq:placid":"The lake was calm and placid.",
"freq:reissue":"The album was reissued twenty years later.",
"freq:skew":"The results were skewed by a small sample.",
"freq:unwavering":"She thanked her fans for their unwavering support.",
"freq:veritable":"The garden is a veritable paradise for birds.",
"freq:abject":"Millions live in abject poverty.",
"freq:austere":"The monks lead an austere life.",
"freq:blister":"New shoes gave him a blister on his heel.",
"freq:commendation":"The officer received a commendation for bravery.",
"freq:gusto":"The band played with great gusto.",
"freq:individualism":"American culture values individualism.",
"freq:infernal":"Will someone stop that infernal noise?",
"freq:mystique":"The old hotel still has a certain mystique.",
"freq:overalls":"The mechanic wore blue overalls.",
"freq:quell":"Troops were sent to quell the riots.",
"freq:succulent":"The restaurant serves succulent grilled lamb.",
"freq:superfluous":"The editor cut all the superfluous words.",
"freq:arcane":"The rules of the game are arcane.",
"freq:behest":"The inquiry was held at the behest of the king.",
"freq:ephemeral":"Fame in the pop world is ephemeral.",
"freq:extracurricular":"She takes part in several extracurricular activities.",
"freq:lackluster":"The team gave a lackluster performance.",
"freq:manicure":"She had a manicure before the wedding.",
"freq:materialistic":"He criticized the materialistic values of the age.",
"freq:materialize":"The promised funding never materialized.",
"freq:perceptive":"She made some perceptive comments on the plan.",
"freq:riveting":"The trial made for riveting television.",
"freq:sprawl":"The city sprawls along the coast for miles.",
"freq:swivel":"He swiveled in his chair to face the door.",
"freq:wayside":"Many small firms fell by the wayside during the crisis.",
"freq:aberration":"The poor result was an aberration, not a trend.",
"freq:athleticism":"The dancer is admired for her athleticism.",
"freq:daydream":"He daydreams about living by the sea.",
"freq:figuratively":"The city was, figuratively speaking, on fire.",
"freq:habitation":"The house is unfit for human habitation.",
"freq:interlocking":"The floor is made of interlocking tiles.",
"freq:repertory":"He joined a repertory company in his twenties.",
"freq:shimmer":"The lake shimmered in the moonlight.",
"freq:snooze":"He likes to snooze after lunch.",
"freq:suitor":"The princess rejected every suitor.",
"freq:abhorrent":"Slavery is abhorrent to every decent person.",
"freq:carpentry":"He learned carpentry from his father.",
"freq:crumb":"Birds ate the crumbs on the ground.",
"freq:elated":"She was elated at winning the prize.",
"freq:exuberant":"The crowd was in an exuberant mood.",
"freq:facsimile":"The museum sells a facsimile of the old map.",
"freq:fanciful":"The story is too fanciful to be true.",
"freq:posterity":"The letters were preserved for posterity.",
"freq:pounce":"The cat pounced on the mouse.",
"freq:scathing":"The critic wrote a scathing review of the film.",
"freq:antithesis":"His quiet manner is the antithesis of his brother's.",
"freq:archetype":"She is the archetype of the successful lawyer.",
"freq:chisel":"The sculptor shaped the stone with a chisel.",
"freq:coax":"She coaxed the child into eating his vegetables.",
"freq:cull":"The government plans to cull thousands of deer.",
"freq:flattery":"Flattery will not change my decision.",
"freq:restorative":"A hot bath has a restorative effect.",
"freq:spurious":"He was arrested on spurious charges.",
"freq:vermin":"The barn was full of rats and other vermin.",
"freq:altruistic":"Her motives were not entirely altruistic.",
"freq:amorphous":"The plan is still vague and amorphous.",
"freq:enterprising":"An enterprising student started a delivery service.",
"freq:honk":"Drivers honked their horns in the traffic jam.",
"freq:inexcusable":"His behavior at the meeting was inexcusable.",
"freq:minster":"The minster dominates the center of the city.",
"freq:monotonous":"The work on the assembly line is monotonous.",
"freq:prohibitive":"The cost of the repairs is prohibitive.",
"freq:topple":"The scandal toppled the government.",
"freq:allusion":"The poem contains an allusion to the Bible.",
"freq:altruism":"Her work for the poor is driven by altruism.",
"freq:connotation":"The word has a negative connotation.",
"freq:exorcist":"The family called an exorcist to the house.",
"freq:idiosyncratic":"The director has an idiosyncratic style.",
"freq:plumage":"The male bird has bright blue plumage.",
"freq:profess":"He professed his innocence to the end.",
"freq:tacit":"The plan had the tacit approval of the minister.",
"freq:colloquial":"The novel is written in colloquial English.",
"freq:devotee":"She is a devotee of classical music.",
"freq:docile":"The horse is docile and easy to ride.",
"freq:edifice":"The palace is an imposing edifice of white stone.",
"freq:macabre":"The film has a macabre sense of humor.",
"freq:midwifery":"She trained in midwifery at a London hospital.",
"freq:milieu":"He grew up in an artistic milieu.",
"freq:overseer":"The overseer checked the work each evening.",
"freq:painstaking":"The book is the result of painstaking research.",
"freq:patchy":"Phone coverage is patchy in the mountains.",
"freq:resuscitation":"The nurse began resuscitation at once.",
"freq:shoal":"A shoal of silver fish swam past the boat.",
"freq:tantamount":"His silence was tantamount to a confession.",
"freq:trifle":"They quarreled over a mere trifle.",
"freq:unoccupied":"The house has been unoccupied for a year.",
"freq:vindication":"The verdict was a vindication of her long campaign.",
"freq:artistically":"The food was artistically arranged on the plate.",
"freq:congregate":"Crowds congregated outside the palace.",
"freq:corroborate":"Two witnesses corroborated his account.",
"freq:euphemism":"\"Passed away\" is a euphemism for \"died.\"",
"freq:exacerbate":"The drought exacerbated the food shortage.",
"freq:facilitation":"The agency's role is the facilitation of trade.",
"freq:impersonal":"The hospital felt cold and impersonal.",
"freq:minefield":"Tax law is a minefield for small businesses.",
"freq:recluse":"The writer lived as a recluse for thirty years.",
"freq:reverb":"The singer's voice was recorded with heavy reverb.",
"freq:stipulation":"The contract has a stipulation about overtime.",
"freq:accrue":"Interest accrues on the account each month.",
"freq:chronologically":"The photos are arranged chronologically.",
"freq:opulent":"They stayed in an opulent hotel in Paris.",
"freq:recessive":"Blue eyes are caused by a recessive gene.",
"freq:taut":"The rope was pulled taut.",
"freq:uneventful":"The flight was long but uneventful.",
"freq:confide":"She confided her fears to a close friend.",
"freq:dissect":"Critics dissected every line of the speech.",
"freq:ferocity":"The ferocity of the storm surprised everyone.",
"freq:homely":"The inn has a warm, homely atmosphere.",
"freq:innuendo":"The article was full of innuendo about his past.",
"freq:interrogate":"Police interrogated the suspect for six hours.",
"freq:lavatory":"The lavatory is at the end of the corridor.",
"freq:magpie":"A magpie stole the shiny ring.",
"freq:recitation":"The evening began with a recitation of poems.",
"freq:reprimand":"The officer received a formal reprimand.",
"freq:stratosphere":"The balloon rose into the stratosphere.",
"freq:telltale":"There were telltale signs of a break-in.",
"freq:torrential":"Torrential rain flooded the streets.",
"freq:virtuoso":"He is a virtuoso of the violin.",
"freq:connoisseur":"She is a connoisseur of French wine.",
"freq:divination":"The priests practiced divination with animal bones.",
"freq:exorcism":"The priest performed an exorcism in the old house.",
"freq:fabricate":"The police were accused of fabricating evidence.",
"freq:fluctuation":"The fluctuation of prices makes planning hard.",
"freq:strapping":"He has grown into a strapping young man.",
"freq:archetypal":"He is the archetypal absent-minded professor.",
"freq:attuned":"Good teachers are attuned to the needs of each child.",
"freq:cinematographer":"The cinematographer won an award for the film.",
"freq:hapless":"The hapless tourists lost all their money.",
"freq:impervious":"He seems impervious to criticism.",
"freq:locomotion":"Walking is the simplest form of locomotion.",
"freq:paradoxical":"It is paradoxical that rest can make you tired.",
"freq:sandwiched":"The shop is sandwiched between two banks.",
"freq:climactic":"The film ends with a climactic battle.",
"freq:detest":"She detests any form of cruelty.",
"freq:enviable":"The firm has an enviable record of success.",
"freq:gravitate":"Young people gravitate toward the big cities.",
"freq:impersonation":"He does a funny impersonation of the president.",
"freq:preoccupation":"His main preoccupation is his health.",
"freq:rescind":"The council rescinded its earlier decision.",
"freq:supple":"Yoga keeps the body supple.",
"freq:veneration":"The saint is held in veneration by the villagers.",
"freq:allegorical":"The painting has an allegorical meaning.",
"freq:coerce":"He was coerced into signing the confession.",
"freq:depravity":"The trial revealed the depravity of the crime.",
"freq:indignant":"She was indignant at the unfair treatment.",
"freq:precocious":"The precocious child could read at three.",
"freq:wry":"He gave a wry smile at the bad news.",
"freq:brevity":"The report is admired for its brevity.",
"freq:claustrophobic":"The small room felt claustrophobic.",
"freq:desertion":"The soldier was shot for desertion.",
"freq:euphoric":"The fans were euphoric after the victory.",
"freq:plummet":"Share prices plummeted overnight.",
"freq:romp":"The children romped in the garden.",
"freq:spontaneity":"The show has lost its early spontaneity.",
"freq:tarnish":"The scandal tarnished his reputation.",
"freq:verve":"The orchestra played with great verve.",
"freq:billiards":"They played billiards in the club every evening.",
"freq:collider":"Physicists built a huge particle collider.",
"freq:demography":"The demography of the country is changing fast.",
"freq:eccentricity":"His eccentricity made him famous in the town.",
"freq:heighten":"The news heightened fears of a war.",
"freq:implicate":"The letter implicated two ministers in the scandal.",
"freq:justly":"The town is justly proud of its history.",
"freq:lyricist":"The lyricist wrote more than two hundred songs.",
"freq:menial":"He took a menial job to pay the rent.",
"freq:opacity":"Critics attacked the opacity of the firm's accounts.",
"freq:overdraft":"The bank agreed to extend his overdraft.",
"freq:quiver":"Her lips quivered as she tried not to cry.",
"freq:reminisce":"The old friends reminisced about their school days.",
"freq:buzzard":"A buzzard circled high above the field.",
"freq:commensurate":"The salary is commensurate with experience.",
"freq:diverge":"The two roads diverge beyond the bridge.",
"freq:fiddler":"A fiddler played at the village dance.",
"freq:flagging":"The news lifted the team's flagging spirits.",
"freq:forlorn":"A forlorn dog sat by the empty house.",
"freq:gush":"Water gushed from the broken pipe.",
"freq:pathos":"The film mixes humor with pathos.",
"freq:physicality":"The dancer is known for the physicality of her style.",
"freq:portraiture":"She is famous for her portraiture of children.",
"freq:seedy":"They met in a seedy bar near the station.",
"freq:substantiate":"He could not substantiate his claims.",
"freq:summarily":"The workers were summarily dismissed.",
"freq:wane":"Public interest in the story began to wane.",
"freq:brimstone":"The preacher warned of fire and brimstone.",
"freq:contraption":"He built a strange contraption for peeling apples.",
"freq:disillusionment":"There is growing disillusionment with the government.",
"freq:elaboration":"The plan needs further elaboration.",
"freq:fissure":"Steam rose from a fissure in the rock.",
"freq:malleable":"Gold is a soft and malleable metal.",
"freq:acrobatic":"The monkeys gave an acrobatic display.",
"freq:consternation":"The announcement caused consternation among investors.",
"freq:cynic":"A cynic would say he only wants the money.",
"freq:dampen":"The rain did not dampen their spirits.",
"freq:extravagance":"The palace is a symbol of royal extravagance.",
"freq:raunchy":"The comedian is known for his raunchy jokes.",
"freq:salve":"She rubbed a salve on the burn.",
"freq:bereft":"He was bereft of hope after the defeat.",
"freq:buffoon":"He acted like a buffoon at the party.",
"freq:derision":"His proposal was greeted with derision.",
"freq:dramatist":"The dramatist wrote thirty plays.",
"freq:grumble":"Passengers grumbled about the long delay.",
"freq:rediscover":"She rediscovered her love of painting.",
"freq:selectivity":"The drug works with great selectivity.",
"freq:squint":"He squinted at the small print.",
"freq:topographical":"The army used a topographical map of the area.",
"freq:verily":"\"Verily, I say unto you,\" the preacher began.",
"freq:wallow":"He wallowed in self-pity for weeks.",
"freq:allot":"Each speaker was allotted ten minutes.",
"freq:blurb":"The blurb on the cover praises the author.",
"freq:ewe":"The ewe stayed close to her lamb.",
"freq:exuberance":"The children ran about with youthful exuberance.",
"freq:familiarize":"New staff must familiarize themselves with the rules.",
"freq:obliterate":"The bomb obliterated the village.",
"freq:persecute":"The regime persecuted its political opponents.",
"freq:preeminent":"She is the preeminent historian of her age.",
"freq:showy":"He drives a showy red sports car.",
"freq:suburbia":"The novel describes life in quiet suburbia.",
"freq:vandal":"Vandals smashed the windows of the school.",
"freq:elongate":"The artist elongated the figures in his paintings.",
"freq:elude":"The thief eluded the police for months.",
"freq:etch":"The scene is etched in my memory.",
"freq:irate":"An irate customer demanded a refund.",
"freq:lethargic":"The heat made everyone lethargic.",
"freq:maggot":"The meat was crawling with maggots.",
"freq:scoff":"Critics scoffed at the idea.",
"freq:sketchbook":"She filled a sketchbook with drawings of birds.",
"freq:squirm":"The boy squirmed in his seat.",
"freq:surrealism":"The museum has an exhibition on surrealism.",
"freq:telescopic":"The camera has a telescopic lens.",
"freq:babble":"The baby babbled happily in her cot.",
"freq:haphazard":"The books were arranged in a haphazard way.",
"freq:irrevocably":"The war irrevocably changed the country.",
"freq:oddity":"The two-headed coin is a real oddity.",
"freq:placate":"The manager tried to placate the angry customers.",
"freq:prescriptive":"The rules are too prescriptive for small firms.",
"freq:slob":"He is a slob who never cleans his room.",
"freq:stipulate":"The contract stipulates a delivery date.",
"freq:voracious":"She is a voracious reader of novels.",
"freq:banishment":"The poet died in banishment far from home.",
"freq:conciliatory":"The minister spoke in a conciliatory tone.",
"freq:irrevocable":"The decision is final and irrevocable.",
"freq:mottled":"The bird has mottled brown feathers.",
"freq:mountaineer":"The mountaineer reached the summit alone.",
"freq:posit":"The theory posits a link between diet and mood.",
"freq:reclusive":"The reclusive author rarely gives interviews.",
"freq:scrutinize":"Inspectors scrutinized the accounts for errors.",
"freq:sedate":"The town moves at a sedate pace.",
"freq:cloister":"Monks walked in silence around the cloister.",
"freq:credential":"She has the right credentials for the job.",
"freq:monotony":"Music helped break the monotony of the journey.",
"freq:prowl":"A fox prowled around the farm at night.",
"freq:repose":"Her face was calm in repose.",
"freq:reptilian":"The creature had cold, reptilian eyes.",
"freq:seedling":"Plant the seedlings in a sunny place.",
"freq:surrealist":"The gallery shows surrealist paintings.",
"freq:temperamental":"The star is talented but temperamental.",
"freq:conciliation":"The dispute was settled by conciliation.",
"freq:culminate":"The protests culminated in a general strike.",
"freq:domestication":"The domestication of the horse changed human history.",
"freq:enabler":"Technology is a key enabler of growth.",
"freq:nonchalant":"He tried to look nonchalant during the interview.",
"freq:squander":"He squandered his fortune on gambling.",
"freq:cay":"The boat anchored beside a small sandy cay.",
"freq:crony":"The mayor gave contracts to his cronies.",
"freq:glean":"Reporters gleaned details from local residents.",
"freq:gutsy":"It was a gutsy decision to quit her job.",
"freq:impersonator":"The show featured an Elvis impersonator.",
"freq:lurid":"The paper printed lurid details of the murder.",
"freq:recuperate":"He is recuperating at home after the operation.",
"freq:detritus":"The beach was covered with the detritus of the storm.",
"freq:patronize":"Do not patronize me; I understand perfectly.",
"freq:rustle":"Leaves rustled in the evening breeze.",
"freq:cogent":"She presented a cogent argument for reform.",
"freq:floodgates":"The ruling opened the floodgates to new claims.",
"freq:pedicure":"She treated herself to a pedicure.",
"freq:primeval":"The valley is covered with primeval forest.",
"freq:revulsion":"She felt revulsion at the sight of the blood.",
"freq:unsurpassed":"The region is unsurpassed for its natural beauty.",
"freq:wistful":"She gave a wistful look at the old photograph.",
"freq:allude":"He alluded to problems in his marriage.",
"freq:elation":"The team's elation at winning was clear to see.",
"freq:envisage":"The plan envisages a new airport by 2040.",
"freq:hibernate":"Some bats hibernate in caves.",
"freq:usurp":"The general tried to usurp the throne.",
"freq:cleverness":"The plan was admired for its cleverness.",
"freq:fabulously":"The family became fabulously rich from oil.",
"freq:headstrong":"The headstrong boy refused to listen.",
"freq:incongruous":"The modern tower looks incongruous in the old town.",
"freq:lethargy":"The illness leaves patients in a state of lethargy.",
"freq:maelstrom":"The country was drawn into the maelstrom of war.",
"freq:opulence":"Visitors are amazed by the opulence of the palace.",
"freq:personalize":"You can personalize the gift with a short message.",
"freq:proliferate":"Fake news sites have proliferated in recent years.",
"freq:pyre":"The body was burned on a funeral pyre.",
"freq:requisition":"The army requisitioned the school as a hospital.",
"freq:retrace":"She retraced her steps to find the lost key.",
"freq:thicket":"A deer disappeared into the thicket.",
"freq:unconvincing":"He gave an unconvincing explanation.",
"freq:undaunted":"Undaunted by the failure, she tried again.",
"freq:fete":"The village holds a summer fete every year.",
"freq:frolic":"Lambs frolicked in the spring sunshine.",
"freq:haughty":"She gave him a haughty look.",
"freq:headmistress":"The headmistress spoke to the whole school.",
"freq:prostrate":"He lay prostrate on the floor.",
"freq:rickety":"We crossed a rickety wooden bridge.",
"freq:supersede":"New rules will supersede the old ones next year.",
"freq:sustainably":"The wood comes from sustainably managed forests.",
"freq:unmanageable":"The debt has grown to an unmanageable size.",
"freq:extrapolate":"We can extrapolate future sales from these figures.",
"freq:quip":"He made a quip about the minister's hat.",
"freq:unadulterated":"The evening was pure, unadulterated fun.",
"freq:zany":"The film is a zany comedy about two robbers.",
"freq:abdicate":"The king was forced to abdicate.",
"freq:brainwash":"The cult tried to brainwash its young members.",
"freq:breadwinner":"She became the main breadwinner after his accident.",
"freq:darkroom":"He developed the photographs in a darkroom.",
"freq:glitz":"She was tired of the glitz of Hollywood.",
"freq:insubordination":"The soldier was punished for insubordination.",
"freq:salivary":"The infection affects the salivary glands.",
"freq:aimless":"He spent months in aimless travel.",
"freq:clench":"He clenched his fists in anger.",
"freq:farcical":"The hearing descended into a farcical argument.",
"freq:haggle":"Tourists haggle over prices in the market.",
"freq:minutiae":"He gets lost in the minutiae of every report.",
"freq:paralyze":"The strike paralyzed the city's transport.",
"freq:unobtrusive":"The cameras are small and unobtrusive.",
"freq:abhor":"Most people abhor cruelty to animals.",
"freq:aghast":"She was aghast at the size of the bill.",
"freq:contemptuous":"He was contemptuous of his rivals.",
"freq:crystallization":"The report marked the crystallization of the new policy.",
"freq:inexorably":"Prices rose inexorably throughout the year.",
"freq:nondescript":"He lives in a nondescript gray building.",
"freq:recuperation":"He needs a long period of recuperation.",
"freq:repute":"She is a lawyer of high repute.",
"freq:dutiful":"He was a dutiful son who visited every week.",
"freq:engender":"The policy engendered resentment among workers.",
"freq:impeccably":"He was impeccably dressed for the interview.",
"freq:stoicism":"She bore the pain with stoicism.",
"freq:verandah":"They sat on the verandah in the evening.",
"freq:plausibly":"He could not plausibly deny the charge.",
"freq:remittance":"Many families depend on remittances from abroad.",
"freq:resuscitate":"Doctors tried to resuscitate the patient.",
"freq:smattering":"He has a smattering of German.",
"freq:amply":"Her efforts were amply rewarded.",
"freq:antithetical":"Such secrecy is antithetical to democracy.",
"freq:denunciation":"The speech was a fierce denunciation of the war.",
"freq:exonerate":"New evidence exonerated the prisoner.",
"freq:indiscretion":"He lost his job over a youthful indiscretion.",
"freq:magnanimous":"The winner was magnanimous toward his rival.",
"freq:chrysalis":"A butterfly emerged from the chrysalis.",
"freq:heifer":"The farmer bought a young heifer at the market.",
"freq:laud":"Critics lauded the film as a masterpiece.",
"freq:remorseful":"He was remorseful about what he had said.",
"freq:sheaf":"She carried a sheaf of papers into the room.",
"freq:unencumbered":"He traveled light, unencumbered by luggage.",
"freq:virtuosity":"The pianist played with dazzling virtuosity.",
"freq:wrangle":"The two sides are in a legal wrangle over the land.",
"freq:tactful":"She gave a tactful reply to the awkward question.",
"freq:artifice":"He won her trust by artifice.",
"freq:disparage":"He never disparages the work of others.",
"freq:drudgery":"Machines freed workers from daily drudgery.",
"freq:feign":"She feigned sleep when he entered the room.",
"freq:melodious":"The bird has a clear, melodious song.",
"freq:naivety":"He was shocked by his own naivety.",
"freq:philistine":"He called the critics a bunch of philistines.",
"freq:possessor":"He is the proud possessor of a rare stamp.",
"freq:staccato":"He spoke in short, staccato sentences.",
"freq:ceaseless":"The ceaseless noise of traffic kept her awake.",
"freq:credibly":"No one can credibly claim the plan is safe.",
"freq:inexhaustible":"She has an inexhaustible supply of energy.",
"freq:inexorable":"The inexorable rise in prices worries families.",
"freq:moribund":"The reforms revived a moribund industry.",
"freq:personalization":"The app offers personalization of news by topic.",
"freq:refurbish":"The council plans to refurbish the old library.",
"freq:torturous":"The climb was slow and torturous.",
"freq:unassisted":"She can now walk unassisted.",
"freq:ameliorate":"The new drug can ameliorate the symptoms.",
"freq:claustrophobia":"He suffers from claustrophobia in lifts.",
"freq:concurrence":"The plan needs the concurrence of both ministers.",
"freq:gnaw":"The dog gnawed a bone in the garden.",
"freq:hermetic":"The jar has a hermetic seal.",
"freq:inscrutable":"His face remained inscrutable throughout the meeting.",
"freq:postural":"Long hours at a desk can cause postural problems.",
"freq:puritanical":"He was raised in a puritanical household.",
"freq:suds":"The sink was full of soap suds.",
"freq:anarchic":"The show has an anarchic sense of humor.",
"freq:beguiling":"The island has a beguiling charm.",
"freq:dissension":"There is growing dissension within the party.",
"freq:exhilaration":"He felt the exhilaration of skiing downhill.",
"freq:outmoded":"The factory still uses outmoded machinery.",
"freq:plausibility":"Experts doubt the plausibility of the theory.",
"freq:subsist":"The refugees subsist on rice and water.",
"freq:tedium":"He read novels to relieve the tedium of the voyage.",
"freq:uninspiring":"The candidate gave an uninspiring speech.",
"freq:axiomatic":"It is axiomatic that every citizen is equal before the law.",
"freq:colloquium":"She presented her paper at a colloquium in Rome.",
"freq:gape":"The children gaped at the huge elephant.",
"freq:impresario":"The impresario brought the opera to London.",
"freq:incipient":"Doctors detected an incipient infection.",
"freq:vindicate":"The results vindicated her decision.",
"freq:blubber":"Whales are protected from the cold by blubber.",
"freq:ephemera":"He collects posters, tickets and other ephemera.",
"freq:gauche":"He felt gauche among the elegant guests.",
"freq:inducement":"The firm offers a bonus as an inducement to stay.",
"freq:slither":"A snake slithered across the path.",
"freq:snobbery":"There is still a great deal of snobbery about accents.",
"freq:sterility":"The disease can cause sterility in men.",
"freq:exude":"She exudes confidence in every interview.",
"freq:glum":"The players looked glum after the defeat.",
"freq:improvisational":"The actor is famous for his improvisational skill.",
"freq:predilection":"He has a predilection for spicy food.",
"freq:ruthlessness":"He is feared for his ruthlessness in business.",
"freq:utensil":"The shop sells pots, pans and other kitchen utensils.",
"freq:astringent":"The critic is known for his astringent wit.",
"freq:gruelling":"The team faced a gruelling schedule of matches.",
"freq:liaise":"Her job is to liaise with the local schools.",
"freq:zoologist":"The zoologist spent years studying wolves.",
"freq:capitulate":"The government refused to capitulate to the strikers.",
"freq:hypothesize":"Scientists hypothesize that the disease came from birds.",
"freq:ostensible":"The ostensible reason for his visit was business.",
"freq:imperceptible":"There was an almost imperceptible change in her voice.",
"freq:intuit":"She seemed to intuit what he was thinking.",
"freq:protrude":"A nail protruded from the wall.",
"freq:romper":"The baby was dressed in a blue romper.",
"freq:stiffen":"He stiffened when he heard the footsteps.",
"freq:unfeasible":"The plan was rejected as unfeasible.",
"freq:confection":"The shop sells chocolates and other confections.",
"freq:delicatessen":"She bought cheese at the local delicatessen.",
"freq:ordain":"He was ordained as a priest in 1990.",
"freq:protrusion":"The rock has a sharp protrusion on one side.",
"freq:somersault":"The gymnast turned a perfect somersault.",
"freq:adornment":"She wore no adornment except a simple ring.",
"freq:bequeath":"He bequeathed his books to the university.",
"freq:clammy":"His hands were cold and clammy.",
"freq:detestable":"It was a detestable act of cruelty.",
"freq:distill":"The book distills twenty years of research.",
"freq:explosively":"The population grew explosively after the war.",
"freq:ponderous":"The film is slow and ponderous.",
"freq:vestigial":"The bird has small, vestigial wings.",
"freq:virginal":"The hills were covered in virginal snow.",
"freq:consign":"The old computers were consigned to the basement.",
"freq:fiendish":"The exam included a fiendish puzzle.",
"freq:flit":"Butterflies flitted from flower to flower.",
"freq:idiomatic":"She speaks fluent, idiomatic French.",
"freq:neglectful":"The court found the parents neglectful.",
"freq:paternalistic":"The firm has a paternalistic attitude toward its staff.",
"freq:recumbent":"The statue shows a recumbent lion.",
"freq:angsty":"The film follows an angsty teenager in a small town.",
"freq:impressionistic":"The book gives an impressionistic account of the war.",
"freq:prise":"He prised the lid off the box with a knife.",
"freq:repudiate":"The minister repudiated the report's findings.",
"freq:revelatory":"The interview was a revelatory experience for viewers.",
"freq:blithely":"He blithely ignored every warning.",
"freq:fiddly":"Changing the battery is a fiddly job.",
"freq:happenstance":"They met by pure happenstance in an airport.",
"freq:settee":"The cat was asleep on the settee.",
"freq:calamitous":"The decision had calamitous results for the town.",
"freq:deplore":"We deplore the use of violence against civilians.",
"freq:ecotourism":"The island earns most of its income from ecotourism.",
"freq:infallibility":"No one believes in the infallibility of experts.",
"freq:singe":"The flames singed his eyebrows.",
"freq:catastrophically":"The engine failed catastrophically during the test.",
"freq:exhibitionist":"He is an exhibitionist who loves being on stage.",
"freq:reenact":"Actors reenact the battle every summer.",
"freq:reverberation":"The reverberations of the scandal lasted for years.",
"freq:buccaneer":"The island was once a base for buccaneers.",
"freq:rapturous":"The singer received a rapturous welcome.",
"freq:truism":"It is a truism that health matters more than money.",
"freq:wheeze":"He wheezed as he climbed the stairs.",
"freq:lamentation":"The village was filled with cries of lamentation.",
"freq:mangle":"The machine mangled the documents.",
"freq:loiter":"Teenagers loitered outside the station.",
"freq:interject":"\"That is not true,\" she interjected.",
"freq:taciturn":"He is a taciturn man who rarely smiles.",
"freq:besiege":"The army besieged the city for three months.",
"freq:derisive":"His speech was met with derisive laughter.",
"freq:remorseless":"The remorseless heat dried up the wells.",
"freq:crystallize":"The idea began to crystallize in her mind.",
"freq:disdainful":"She gave a disdainful glance at the cheap wine.",
"freq:ardor":"He spoke with ardor about his country.",
"freq:fractious":"The fractious child refused to go to bed.",
"freq:ignominious":"The team suffered an ignominious defeat.",
"freq:timidity":"Her timidity kept her from speaking up.",
"freq:disquieting":"There are disquieting reports from the border.",
"freq:neophyte":"The course is too hard for a neophyte.",
"freq:galvanize":"The attack galvanized the nation into action.",
"freq:extol":"The article extols the virtues of country life.",
"freq:affectation":"His foreign accent is a mere affectation.",
"freq:histrionic":"She made a histrionic gesture of despair.",
"freq:reverberate":"The explosion reverberated through the valley.",
"freq:scornful":"He was scornful of their efforts.",
"freq:ventilate":"Open the windows to ventilate the room.",
"freq:surreptitious":"He took a surreptitious look at her notes.",
"freq:venerate":"The villagers venerate the old oak tree.",
"freq:resound":"Cheers resounded through the stadium.",
"freq:unsettle":"The sudden change unsettled the staff.",
"freq:circumnavigate":"He was the first to circumnavigate the globe alone.",
"freq:indolent":"He was too indolent to look for work.",
"freq:unenviable":"She has the unenviable task of telling the family.",
"freq:induct":"She was inducted into the hall of fame.",
"freq:mutinous":"The captain faced a mutinous crew.",
"freq:ingratiate":"He tried to ingratiate himself with the director.",
"freq:anticlimactic":"After so much waiting, the ending was anticlimactic.",
"freq:perversity":"Out of sheer perversity, he refused to help.",
"freq:magnanimity":"She showed great magnanimity toward her rivals.",
"freq:incarcerate":"He was incarcerated for ten years.",
"freq:brandish":"The robber brandished a knife at the clerk.",
"freq:incongruity":"He laughed at the incongruity of the situation.",
"freq:insubordinate":"The insubordinate officer was dismissed.",
"freq:decentralize":"The government plans to decentralize power.",
"freq:contrive":"She contrived to meet him by chance.",
"freq:verisimilitude":"Small details give the novel its verisimilitude.",
"freq:prurient":"The paper appeals to prurient interest in scandal.",
"freq:ruminate":"He ruminated on the meaning of her words.",
"freq:brouhaha":"There was a brouhaha over the new uniforms.",
"freq:demystify":"The book demystifies the world of finance.",
"freq:juxtapose":"The exhibition juxtaposes old and new paintings.",
"freq:totter":"The old man tottered across the road.",
"freq:agonize":"She agonized for days over the decision.",
"freq:belligerence":"His belligerence made the talks impossible.",
"freq:salivate":"The dog salivated at the smell of meat.",
"freq:dither":"Stop dithering and make a decision.",
"freq:laudatory":"The book received laudatory reviews.",
"freq:preconception":"Try to read the report without preconceptions.",
"freq:solipsism":"The poet was accused of solipsism.",
"freq:wizened":"A wizened old man sat by the fire.",
"freq:domesticate":"Humans domesticated the dog thousands of years ago.",
"freq:presuppose":"The plan presupposes a steady rise in sales.",
"freq:antediluvian":"He holds antediluvian views on education.",
"freq:indolence":"His failure was the result of indolence.",
"freq:teem":"The river teems with fish in spring.",
"freq:immortalize":"The poet immortalized the battle in verse.",
"freq:inchoate":"Her ideas were still vague and inchoate.",
"freq:euphemistic":"The report uses euphemistic language for job cuts.",
"freq:daunt":"The size of the task did not daunt her.",
"freq:mollify":"The manager tried to mollify the angry guests.",
"freq:embezzle":"The accountant embezzled a million dollars.",
"freq:economize":"We must economize on fuel this winter.",
"freq:revile":"The dictator was reviled by his own people.",
"freq:connote":"The word \"home\" connotes warmth and safety.",
"freq:edify":"The lecture was meant to edify the public.",
"freq:idiosyncrasy":"Talking to his plants is one of his idiosyncrasies.",
"freq:ingenuous":"She gave an ingenuous smile.",
"freq:unnerve":"The silence in the house unnerved him.",
"freq:exasperate":"His constant excuses exasperate his teachers.",
"freq:qualm":"He had no qualm about lying to the press.",
"freq:deprecate":"He tends to deprecate his own achievements.",
"freq:dissemble":"She is too honest to dissemble.",
"freq:proscribe":"The law proscribes the sale of such weapons.",
"freq:remonstrate":"She remonstrated with the driver about his speed.",
"freq:engross":"The game can engross children for hours.",
"freq:tantalize":"The smell of baking bread tantalized the hungry boys.",
"freq:munificence":"The museum was built through the munificence of one family.",
"freq:lassitude":"The heat produced a feeling of lassitude.",
"freq:encumber":"Do not encumber yourself with heavy bags.",
"freq:adulterate":"Some dealers adulterate milk with water.",
"freq:intersperse":"He likes to intersperse his talks with jokes.",
"freq:appall":"The conditions in the camp appall every visitor.",
"freq:suffuse":"A warm glow began to suffuse the eastern sky.",
"freq:transfix":"The strange lights transfix everyone who sees them.",
"freq:exhilarate":"Fast rides exhilarate some people and frighten others.",
"freq:stultify":"Dull routines stultify the mind."});
Object.assign(EXJA, {"freq:criteria":"助成金を受けるには、応募者は厳しい基準を満たさなければならない。",
"freq:scenario":"最悪の事態では、町は1週間停電するおそれがある。",
"freq:sustainable":"市はごみを管理する持続可能な方法を探している。",
"freq:chill":"空気が急に冷え、冬が近いことを知らせた。",
"freq:structural":"技師たちは古い橋に構造上の損傷を見つけた。",
"freq:magnetic":"地球の磁場は太陽の放射線から私たちを守っている。",
"freq:counsel":"彼女は合意書に署名する前に法律上の助言を求めた。",
"freq:marvel":"観光客は古代の神殿の大きさに驚嘆する。",
"freq:harbor":"彼は今も元上司に恨みを抱いている。",
"freq:vertical":"その崖は海の上にほぼ垂直の壁となってそびえている。",
"freq:conviction":"詐欺での有罪判決が彼の政治生命を終わらせた。",
"freq:trauma":"多くの兵士は戦争が終わってから長い間、心の傷に苦しむ。",
"freq:linear":"経済成長が単純に一直線に進むことはめったにない。",
"freq:provisions":"その条約には捕虜の交換についての規定がある。",
"freq:cognitive":"睡眠不足は記憶などの認知能力を弱めることがある。",
"freq:restoration":"大聖堂の修復には10年以上かかった。",
"freq:facial":"警察は容疑者を特定するために顔認証ソフトを使った。",
"freq:jurisdiction":"その事件はこの裁判所の管轄外である。",
"freq:ore":"その地域は大量の鉄鉱石を輸出している。",
"freq:governance":"投資家たちはより良い企業統治を求めている。",
"freq:provincial":"州政府は地方の学校への新たな資金を発表した。",
"freq:ethical":"動物での薬の試験は深刻な倫理的問題を提起する。",
"freq:hostile":"その提案は地元住民から敵意のある反応を受けた。",
"freq:momentum":"逮捕の後、抗議運動は勢いを増した。",
"freq:notable":"投票率に注目すべき低下が見られる。",
"freq:testament":"満員の競技場はそのチームの人気の証しだった。",
"freq:allegedly":"その役人は業者から賄賂を受け取ったとされている。",
"freq:demo":"新しい税に反対するデモに数千人が加わった。",
"freq:elaborate":"彼らは王室の訪問のために手の込んだ準備をした。",
"freq:hull":"岩に衝突して、船体が損傷した。",
"freq:realm":"そうした技術はかつてSFの領域のものだった。",
"freq:bout":"彼女はインフルエンザにかかって1週間仕事を休んだ。",
"freq:hack":"何者かが銀行のコンピューターシステムに不正侵入しようとした。",
"freq:stance":"大統領は不法移民に対して厳しい姿勢をとった。",
"freq:echo":"彼の演説は多くの一般有権者の懸念を繰り返すものだった。",
"freq:peninsula":"半島の緊張はここ数か月で和らいでいる。",
"freq:sentiment":"世論は戦争反対に傾いた。",
"freq:thereby":"彼は罰金を全額払い、それによって裁判を避けた。",
"freq:threshold":"この基準額を下回る所得には課税されない。",
"freq:aesthetic":"その橋は美的な魅力で称賛された。",
"freq:ego":"選挙に負けたことは彼の自尊心への大きな打撃だった。",
"freq:fusion":"その店はアジア料理とフランス料理を融合したものを出す。",
"freq:gauge":"有権者がその不祥事にどう反応するかを判断するのは難しい。",
"freq:inclusion":"彼女が代表チームに入ったことは多くのファンを驚かせた。",
"freq:pending":"合併についての決定はまだ下されていない。",
"freq:bail":"裁判官は容疑者を保釈した。",
"freq:harassment":"その会社は嫌がらせを禁じる厳しい方針を導入した。",
"freq:precision":"その外科医は驚くほど正確に手術を進めた。",
"freq:stark":"その都市では富裕層と貧困層の差が際立っている。",
"freq:void":"彼女の死は家族の暮らしに空虚感を残した。",
"freq:voluntary":"その事業は一般からの自発的な寄付に頼っている。",
"freq:coup":"軍は無血クーデターで権力を握った。",
"freq:crude":"原油の価格は先月急騰した。",
"freq:disclosure":"その法律は政治献金の完全な公開を義務づけている。",
"freq:magnitude":"これほどの規模の災害は誰も予想していなかった。",
"freq:pledge":"政府は排出量を半減させると誓った。",
"freq:affiliate":"その病院は主要な大学と提携している。",
"freq:asylum":"数千人の難民が亡命を申請している。",
"freq:fossil":"化石燃料を燃やすと二酸化炭素が出る。",
"freq:offset":"売上の増加が費用の上昇を相殺する助けになった。",
"freq:speculation":"大臣が辞任するという憶測が広がっている。",
"freq:successor":"会長はまだ後継者を指名していない。",
"freq:wicked":"その物語は、まま娘をねたむ邪悪な女王の話だ。",
"freq:acoustic":"そのホールは優れた音響設計で有名だ。",
"freq:doctrine":"その党は国有化という主義を捨てた。",
"freq:gig":"そのバンドは小さなパブで最初の演奏会をした。",
"freq:intact":"その古代のつぼは完全に無傷のまま見つかった。",
"freq:prey":"高齢者は不正直な販売員の餌食になりやすい。",
"freq:prophet":"彼はデジタル時代の預言者と見なされていた。",
"freq:referendum":"その国は新憲法について国民投票を行う。",
"freq:sequel":"続編は元の映画よりもさらに成功した。",
"freq:clan":"その2つの氏族は何世代にもわたって敵同士だった。",
"freq:clash":"警察は議会の外で抗議者と衝突した。",
"freq:coupled":"物価高が低賃金と重なり、家計を苦しめている。",
"freq:mandate":"選挙によって、その党は改革への明確な信任を得た。",
"freq:revealing":"そのインタビューは彼の本当の動機をよく明らかにしていた。",
"freq:succession":"相次ぐ不祥事で大臣は辞任に追い込まれた。",
"freq:tactical":"将軍は部隊を守るため戦術的な撤退を命じた。",
"freq:clearance":"操縦士は着陸の許可を待った。",
"freq:deceased":"弁護士は故人の遺言を家族に読み上げた。",
"freq:detention":"容疑者は3日間拘留された。",
"freq:explicit":"契約書には解約の方法について明白な指示がある。",
"freq:fraction":"盗まれた金のほんの一部しか回収されなかった。",
"freq:viable":"太陽光発電は今や石炭に代わる実行可能な選択肢だ。",
"freq:amid":"最高経営責任者は批判が高まるさなかに辞任した。",
"freq:herald":"その発見は医学の新しい時代の到来を告げた。",
"freq:plea":"暴動の後、市長は冷静になるよう訴えた。",
"freq:rhetoric":"有権者は中身のない政治的な美辞麗句にうんざりしている。",
"freq:salvation":"観光業がその島の経済の救いとなってきた。",
"freq:secular":"その国には非宗教的な教育制度がある。",
"freq:sovereign":"すべての主権国家は国境を守る権利を持つ。",
"freq:synthetic":"その上着は合成繊維でできている。",
"freq:optimal":"その植物が最もよく育つには暖かさと光が必要だ。",
"freq:profound":"その発明は日常生活に重大な影響を与えた。",
"freq:rebellion":"軍は1週間以内に反乱を鎮圧した。",
"freq:robust":"経済は今年、力強い成長を見せている。",
"freq:swap":"2人の捕虜は国境で交換された。",
"freq:terrain":"険しい山の地形のせいで救助は遅れた。",
"freq:acre":"火事は数千エーカーの森林を焼き尽くした。",
"freq:descent":"飛行機は空港に向けて降下を始めた。",
"freq:halt":"大雪で地域全体の交通が止まった。",
"freq:litigation":"その会社は費用のかかる訴訟を避けるため、争いを和解で解決した。",
"freq:norm":"在宅勤務は多くの業界で標準になった。",
"freq:orthodox":"彼女のやり方は従来のものとはかけ離れていたが、うまくいった。",
"freq:prone":"その沿岸地域は秋に洪水が起こりやすい。",
"freq:sanctuary":"その島は希少な鳥の保護区にされた。",
"freq:siege":"その都市は6か月続いた包囲の末に陥落した。",
"freq:tenure":"彼の市長在職中に犯罪は半減した。",
"freq:delegation":"貿易担当官の代表団が首都を訪れた。",
"freq:demographic":"人口の高齢化に伴い、その国は大きな人口構成の変化に直面している。",
"freq:subsidiary":"その銀行は保険子会社を外国の投資家に売却した。",
"freq:velocity":"風速は時速150キロに達した。",
"freq:accountability":"市民は政府にさらなる説明責任を求めている。",
"freq:albeit":"予想より遅かったものの、計画はうまくいった。",
"freq:deployment":"議会は国境への部隊の配備を承認した。",
"freq:exterior":"その建物の外側は白く塗られた。",
"freq:fury":"その決定は地元の農家の激怒を招いた。",
"freq:genocide":"その元指導者は集団虐殺の罪で裁判にかけられた。",
"freq:humanitarian":"国連はその地域に人道支援を送った。",
"freq:immunity":"そのワクチンはウイルスへの免疫を数年間与える。",
"freq:likelihood":"今週末に雨が降る可能性はほとんどない。",
"freq:pioneer":"彼女は心臓外科の分野の先駆者だった。",
"freq:suburban":"多くの家族は静かな郊外の住宅地を好む。",
"freq:accountable":"政治家は自らの決定に責任を負わなければならない。",
"freq:advocacy":"彼女は子どもの権利の擁護で知られている。",
"freq:aftermath":"地震の後、数千人が家を失った。",
"freq:aggression":"その条約は軍事的な侵略を防ぐために作られた。",
"freq:blunt":"率直に言うと、あなたの提案に成功の見込みはない。",
"freq:clarity":"彼女はその複雑な理論をとても明快に説明した。",
"freq:discretion":"賞与の額は部長の裁量に任されている。",
"freq:elevation":"その村は標高2,000メートルにある。",
"freq:esteem":"その教授は学生たちから深く尊敬されている。",
"freq:hostage":"武装した男たちは2日後に最後の人質を解放した。",
"freq:mortality":"乳児死亡率は過去10年で急速に下がった。",
"freq:reservoir":"その貯水池は市全体に水を供給している。",
"freq:sworn":"その2つの家は長年、不倶戴天の敵同士だった。",
"freq:transparency":"その慈善団体は透明性の欠如を批判された。",
"freq:withdrawn":"事故の後、彼は口数が減り、引きこもりがちになった。",
"freq:heir":"その王子は王位の継承者だ。",
"freq:liable":"その会社は自社製品が引き起こした損害に法的責任がある。",
"freq:rogue":"一人の不正な取引担当者が銀行の金を数百万失った。",
"freq:solidarity":"労働者は同僚と連帯してストライキに入った。",
"freq:clutch":"その子は人混みの中で母親の手をしっかり握った。",
"freq:credibility":"その不祥事は新聞の信用を傷つけた。",
"freq:haul":"漁師たちは重い網を船に引き上げた。",
"freq:juvenile":"市は少年犯罪を減らすための新しい施設を開いた。",
"freq:leverage":"組合は影響力を使って賃上げを勝ち取った。",
"freq:militia":"地元の民兵組織がその町を支配下に置いた。",
"freq:tribunal":"その紛争は国際法廷で審理された。",
"freq:abusive":"彼女はついに虐待的な夫のもとを去った。",
"freq:gem":"その博物館は旧市街の隠れた名所だ。",
"freq:hypothesis":"その実験は仮説を検証するために計画された。",
"freq:psychiatric":"彼は精神科病院で2か月過ごした。",
"freq:repeal":"議会は不人気なその法律の廃止を可決した。",
"freq:saga":"長い法廷での争いは先週ついに終わった。",
"freq:surplus":"その国は数年ぶりに貿易黒字を記録した。",
"freq:woo":"その党は若い有権者の支持を得ようとしている。",
"freq:autonomy":"その地域は中央政府からのさらなる自治を求めてきた。",
"freq:commodity":"石油はその国の最も価値のある産物だ。",
"freq:correlation":"研究者たちは貧困と不健康の間に強い相関関係を見つけた。",
"freq:fragile":"停戦は依然として極めてもろい状態だ。",
"freq:fringe":"その団体は会員の少ない非主流の運動として始まった。",
"freq:irony":"皮肉なのは、安全規則がその事故を引き起こしたことだ。",
"freq:judiciary":"独立した司法は民主主義に欠かせない。",
"freq:legion":"その歌手には熱心なファンが大勢いる。",
"freq:lethal":"そのヘビにかまれると人間は命を落とすことがある。",
"freq:scroll":"その古代の巻物は砂漠の洞窟で発見された。",
"freq:sovereignty":"両国はその島々の主権をめぐって争っている。",
"freq:thrust":"彼は手紙をポケットに押し込んで出て行った。",
"freq:arbitrary":"その逮捕はまったく恣意的に見えた。",
"freq:autonomous":"自動運転車は事故の数を減らすかもしれない。",
"freq:bait":"警察は泥棒を捕まえるため、駐車した車をおとりに使った。",
"freq:levy":"政府は砂糖入り飲料に税を課す予定だ。",
"freq:manipulation":"その会社は売上数字の操作で告発された。",
"freq:niche":"その会社は有機ペットフードの市場にすき間を見つけた。",
"freq:obscure":"その詩は18世紀の無名の作家によって書かれた。",
"freq:proposition":"小さな農場を営むことは、もはやもうかる事業ではない。",
"freq:stretching":"走る前の軽いストレッチはけがの予防に役立つ。",
"freq:therapeutic":"多くの人は園芸が癒やしになると感じている。",
"freq:atmospheric":"高く登るにつれて気圧は下がる。",
"freq:disclose":"その会社はいくら支払ったかを公表することを拒んだ。",
"freq:exploitation":"その報告書は移民労働者の搾取を暴いた。",
"freq:goose":"野生のガンが凍った湖に降り立った。",
"freq:monopoly":"国はかつて塩の販売を独占していた。",
"freq:synthesis":"その本は多くの分野の考えを統合したものだ。",
"freq:treason":"その将校は反逆罪で処刑された。",
"freq:violet":"日が沈むにつれて、丘はすみれ色に変わった。",
"freq:critique":"その記事は現代の教育を鋭く批評している。",
"freq:discourse":"ソーシャルメディアは公の議論のあり方を変えた。",
"freq:dominance":"その会社は市場での優位を保とうと戦っている。",
"freq:inherent":"どんな手術にも本来伴う危険がある。",
"freq:justification":"そのような暴力に正当な理由はない。",
"freq:outright":"その提案は委員会に完全に退けられた。",
"freq:oversight":"その誤りは単純な見落としの結果だった。",
"freq:refreshing":"政治家が誤りを認めるのを聞くのは新鮮だった。",
"freq:statute":"その法令は雇用主に安全研修の実施を義務づけている。",
"freq:vicious":"彼は公園で凶暴な襲撃の被害にあった。",
"freq:wholly":"その事故は完全にトラック運転手の過失だった。",
"freq:assassination":"大統領の暗殺は国民に衝撃を与えた。",
"freq:citation":"その論文は50を超える研究からの引用を含んでいる。",
"freq:congregation":"司祭は200人の会衆に語りかけた。",
"freq:decree":"王はすべての公の集会を禁じる布告を出した。",
"freq:drift":"その船は夜の間に沖へ流された。",
"freq:geological":"地質調査で砂漠の下に石油が見つかった。",
"freq:methodology":"批評家たちはその研究で使われた手法に疑問を呈した。",
"freq:predecessor":"新しい部長は前任者より慎重だ。",
"freq:premise":"その議論は誤った前提に基づいている。",
"freq:reckless":"彼は無謀運転で罰金を科された。",
"freq:redemption":"その映画は罪と償いの物語を描いている。",
"freq:unprecedented":"洪水は前例のない規模の被害をもたらした。",
"freq:accord":"両国は昨年、和平協定に署名した。",
"freq:boycott":"消費者はその会社の製品の不買運動を組織した。",
"freq:eclipse":"彼女の成功は有名な父親の成功をしのいでいる。",
"freq:inferior":"安い輸入品はしばしば品質が劣る。",
"freq:injustice":"彼女は社会の不正と闘うことに生涯をささげた。",
"freq:privileged":"彼は裕福で恵まれた家庭の出身だった。",
"freq:reliance":"その国は輸入石油への依存を減らしたいと考えている。",
"freq:retention":"その会社は給与を上げて従業員の定着率を改善した。",
"freq:definitive":"この問いに決定的な答えはない。",
"freq:epidemic":"その市はインフルエンザの流行を抑えるのに苦労している。",
"freq:extraction":"金の採掘が川を汚染している。",
"freq:homicide":"警察はその死を殺人として扱っている。",
"freq:inheritance":"彼は相続した財産をすべて2年以内に使い果たした。",
"freq:ironic":"消防署が焼け落ちたとは皮肉だ。",
"freq:righteous":"彼女はその不公平な決定に、もっともな怒りを感じた。",
"freq:vicinity":"近辺には良い学校がいくつかある。",
"freq:curb":"中央銀行は物価上昇を抑えるために金利を引き上げた。",
"freq:faction":"党内の対立派閥が党首に反対した。",
"freq:inconsistent":"その目撃者は出来事について矛盾した説明をした。",
"freq:probation":"彼は2年間の保護観察に付された。",
"freq:strap":"電車に間に合うよう走ったとき、彼女のかばんのひもが切れた。",
"freq:subjective":"音楽の好みは非常に主観的なものだ。",
"freq:traumatic":"幼くして親を亡くすのは心に傷を残す経験だ。",
"freq:alignment":"その車の車輪は位置がずれている。",
"freq:apparatus":"消防士たちは呼吸装置を着けて建物に入った。",
"freq:bliss":"静かな浜辺での1週間はまさに至福だった。",
"freq:buffer":"貯金は予想外の出費に対する備えとなる。",
"freq:collaborative":"その本は3人の著者による共同作業だった。",
"freq:compromised":"免疫機能が損なわれた患者はより大きな危険にさらされる。",
"freq:cosmic":"科学者たちは遠い銀河からの宇宙線を検出した。",
"freq:exempt":"慈善団体はこの税を免除されている。",
"freq:foremost":"彼女は気候に関する世界有数の専門家の一人だ。",
"freq:forge":"2人の指導者は緊密な同盟を築いた。",
"freq:hierarchy":"彼は会社の序列を急速に上っていった。",
"freq:invalid":"その契約は裁判所によって無効と宣言された。",
"freq:metabolism":"運動は代謝を速めるのに役立つ。",
"freq:parody":"その番組は人気の犯罪ドラマのパロディだ。",
"freq:parole":"彼は5年服役した後、仮釈放された。",
"freq:render":"嵐のせいでその道路は通行できなくなった。",
"freq:traction":"その考えは若い有権者の間で支持を広げている。",
"freq:contested":"その国境は今も両国の間で争われている地域だ。",
"freq:continuity":"新しい取締役は会社の方針の継続を約束した。",
"freq:credible":"警察は彼に不利な確かな証拠を持っていない。",
"freq:felony":"武装強盗は深刻な重罪だ。",
"freq:ideological":"その2つの党には深い思想上の違いがある。",
"freq:incumbent":"現職の大統領は2期目を目指している。",
"freq:maternal":"医療の改善により妊産婦の死亡が減った。",
"freq:memoir":"その元大臣は在任中の年月についての回顧録を出版した。",
"freq:mold":"その教師は生徒たちの人格を形作る手助けをした。",
"freq:offspring":"その鳥は約3週間、ひなに餌を与える。",
"freq:prop":"彼は椅子でドアを開けたまま支えた。",
"freq:simplicity":"そのデザインの美しさは簡素さにある。",
"freq:vegetation":"その丘の斜面は茂った草木に覆われている。",
"freq:behold":"山々に昇る朝日は目を見張る光景だった。",
"freq:bypass":"その部長は通常の承認手続きを省いた。",
"freq:corpse":"その死体は森でハイカーによって発見された。",
"freq:dementia":"人口の高齢化に伴い、認知症の人の数が増えている。",
"freq:phenomenal":"その本は世界中で驚異的な成功を収めた。",
"freq:spatial":"そのゲームは空間認識を高めると言われている。",
"freq:statutory":"従業員には有給休暇を取る法定の権利がある。",
"freq:stellar":"その若いピアニストは見事な演奏をした。",
"freq:turf":"その2つのギャングは縄張りをめぐって争った。",
"freq:twitch":"睡眠不足で彼の目はぴくぴくし始めた。",
"freq:endorsement":"その候補者は主要紙数社の支持を得た。",
"freq:finite":"地球の淡水の供給には限りがある。",
"freq:flagship":"その会社は東京に旗艦店を開いた。",
"freq:forensic":"科学捜査の専門家が現場で指紋を調べた。",
"freq:infamous":"その刑務所は過酷な環境で悪名高い。",
"freq:mesh":"窓は細かい金網で覆われている。",
"freq:migrant":"出稼ぎ労働者は賃金の多くを本国に送る。",
"freq:naive":"ネットで読むものをすべて信じるのは世間知らずだろう。",
"freq:remotely":"職員の大半は今、遠隔で働いている。",
"freq:rigid":"その学校には制服について厳格な規則がある。",
"freq:utilize":"その工場は費用を抑えるために太陽エネルギーを利用している。",
"freq:allocation":"市長は新しい競技場への資金の配分を擁護した。",
"freq:beacon":"その灯台は夜の船の目印の役目を果たした。",
"freq:bounty":"その無法者の逮捕に賞金がかけられた。",
"freq:clergy":"聖職者たちがその平和的な行進を先導した。",
"freq:dwelling":"その法律は各住居に住む人数を制限している。",
"freq:expenditure":"防衛への政府支出は昨年増えた。",
"freq:scrutiny":"その会社の会計は厳しい精査を受けた。",
"freq:seizure":"港での違法薬物の押収は大きく報じられた。",
"freq:stray":"その保護施設は街の野良犬を引き取っている。",
"freq:systemic":"その報告書は医療制度に全体に及ぶ欠陥を見つけた。",
"freq:uprising":"その蜂起は政府軍によって鎮圧された。",
"freq:whereby":"彼らは両社が費用を分担する取り決めに署名した。",
"freq:contention":"主な争点は誰が修理代を払うかだ。",
"freq:covenant":"その誓約は所有者が2階を超える建物を建てることを禁じている。",
"freq:greed":"その危機は強欲と不十分な規制によって引き起こされた。",
"freq:pact":"両国は貿易協定に署名した。",
"freq:paramount":"乗客の安全が最も重要だ。",
"freq:paranoid":"彼は尾行されているという被害妄想にとらわれた。",
"freq:proxy":"彼女は海外にいたので代理で投票した。",
"freq:revolt":"新しい税は農民の反乱を引き起こした。",
"freq:shrine":"巡礼者はその聖地を訪れるために何百マイルも旅をする。",
"freq:solitary":"彼は湖畔の小屋で孤独な生活を送った。",
"freq:stoke":"そのうわさは銀行危機への不安をあおった。",
"freq:thrive":"税が低いと小企業は繁栄する。",
"freq:arbitration":"その紛争は仲裁によって解決された。",
"freq:bilateral":"両首脳は貿易について二国間協議を行った。",
"freq:classy":"そのホテルは最上階に上品なレストランがある。",
"freq:confrontation":"そのストライキは警察との対決につながった。",
"freq:dismissal":"彼女は自分の解雇は不当だと主張した。",
"freq:empathy":"良い看護師は患者に共感を示す。",
"freq:feasible":"春までに橋を完成させるのは実行可能ではない。",
"freq:insecure":"多くの十代は自分の外見に自信が持てない。",
"freq:lust":"彼の権力欲は友情を壊した。",
"freq:occupational":"腰痛は看護師の職業上の危険だ。",
"freq:onset":"冬の始まりとともに大雪が降った。",
"freq:persecution":"彼らは宗教的迫害を逃れるために国を離れた。",
"freq:reconciliation":"その会談は和解への第一歩だった。",
"freq:specimen":"その博物館は絶滅した鳥の希少な標本を所蔵している。",
"freq:sponsorship":"その祭りは企業の後援に頼っている。",
"freq:unlawful":"裁判所はその逮捕は違法だったと判断した。",
"freq:accredited":"公認の記者だけがその説明会に出席できる。",
"freq:apex":"彼は40歳で経歴の頂点に達した。",
"freq:consolidation":"その2つの銀行の統合で多くの職が失われた。",
"freq:convoy":"トラックの車列が食料を野営地に運んだ。",
"freq:diplomacy":"その危機は静かな外交によって解決された。",
"freq:directive":"省は学校の安全についての指令を出した。",
"freq:friction":"その決定は2つの部署の間に摩擦を生んだ。",
"freq:magistrate":"治安判事は彼に治安を乱した行為で罰金を科した。",
"freq:marginal":"その変更は売上にわずかな違いしか生まなかった。",
"freq:milestone":"その合意は和平の過程における画期的な出来事だった。",
"freq:predator":"その島にはその鳥を捕食する天敵がいない。",
"freq:prophecy":"古い予言はその都市が滅びると告げていた。",
"freq:salute":"兵士たちは掲げられる旗に敬礼した。",
"freq:severity":"医師たちは彼のけがの深刻さに衝撃を受けた。",
"freq:slack":"冬の間は商売が不景気だ。",
"freq:spontaneous":"聴衆から自然に拍手が沸き起こった。",
"freq:tract":"その会社は広大な森林を買った。",
"freq:akin":"彼の沈黙は罪を認めたも同然だった。",
"freq:beware":"パスワードを尋ねるメールには用心しなさい。",
"freq:comprehend":"彼女は彼がなぜうそをついたのか理解できなかった。",
"freq:contamination":"川の汚染で数千匹の魚が死んだ。",
"freq:counterpart":"大臣はパリでフランスの担当大臣と会った。",
"freq:creed":"そのクラブはあらゆる人種と信条の人を歓迎する。",
"freq:domination":"そのチームはリーグでの優勢を保ち続けた。",
"freq:fracture":"彼女は左手首を骨折した。",
"freq:genome":"科学者たちは小麦のゲノムを解読した。",
"freq:indictment":"その報告書は刑務所制度への非難だ。",
"freq:meaningless":"証拠がなければ、その告発は無意味だ。",
"freq:premature":"勝利を宣言するのは時期尚早だろう。",
"freq:psychiatrist":"彼は治療のため精神科医に紹介された。",
"freq:validity":"専門家たちはその調査の妥当性に疑問を呈した。",
"freq:wrath":"その決定は地元住民の激怒を招いた。",
"freq:aide":"大統領の上級補佐官が昨日辞任した。",
"freq:allegiance":"兵士たちは新しい王に忠誠を誓った。",
"freq:apt":"その本の題名は特に適切だ。",
"freq:constituency":"彼女は20年間同じ選挙区を代表してきた。",
"freq:contingent":"大勢のファンの一団が決勝戦に遠征した。",
"freq:entirety":"その演説は全部が放送された。",
"freq:exodus":"その戦争は難民の大量脱出を引き起こした。",
"freq:invasive":"その外来植物は湖全体に広がった。",
"freq:irrigation":"新しいかんがい水路によって収穫が倍になった。",
"freq:monarch":"今日、君主に実権はほとんどない。",
"freq:persona":"彼の公の顔は私生活の姿とはまったく違う。",
"freq:plaque":"壁の銘板がその詩人の生誕地を示している。",
"freq:preach":"彼は寛容を説くが、めったに実践しない。",
"freq:purity":"その水は純度を毎日検査されている。",
"freq:realism":"その映画は写実性を称賛された。",
"freq:stigma":"精神疾患にはいまだに不名誉な印象がつきまとう。",
"freq:betrayal":"有権者は増税を裏切りと受け止めた。",
"freq:communal":"その集合住宅は共同の庭を持っている。",
"freq:consortium":"銀行の連合体がそのトンネルに資金を出した。",
"freq:efficacy":"試験によって新薬の有効性が確認された。",
"freq:manifest":"彼の不安は眠れない夜となって表れた。",
"freq:mutually":"双方は互いに受け入れられる解決策に達した。",
"freq:perimeter":"警備員が基地の周囲を巡回している。",
"freq:preacher":"その説教師は毎週日曜に大勢の人を集めた。",
"freq:procurement":"その不祥事は軍の装備品の調達に関わるものだった。",
"freq:ransom":"誘拐犯は100万ドルの身代金を要求した。",
"freq:rigorous":"すべての新薬は厳密な試験を受ける。",
"freq:skeptical":"科学者たちはその主張に依然として懐疑的だ。",
"freq:suppression":"言論の自由の抑圧は国際的な批判を招いた。",
"freq:trustee":"博物館の理事たちはその購入を承認した。",
"freq:turnout":"投票率は過去50年で最低だった。",
"freq:unanimous":"陪審は全員一致の評決に達した。",
"freq:vengeance":"彼は自分を裏切った者たちへの復讐を誓った。",
"freq:cite":"その報告書は主な原因として訓練不足を挙げている。",
"freq:commercially":"その製品はまだ市販されていない。",
"freq:imminent":"その火山は噴火が差し迫っている兆候を見せている。",
"freq:inaugural":"大統領は雨の中で就任演説を行った。",
"freq:lure":"その会社は高給で技術者を引き抜いた。",
"freq:malicious":"誰かが彼女について悪意のあるうわさを広めた。",
"freq:muscular":"その水泳選手は力強く、たくましい体つきをしている。",
"freq:neutrality":"その国は戦争の間ずっと中立を保った。",
"freq:partition":"その国の分割は大きな苦しみをもたらした。",
"freq:proprietary":"そのソフトは独自のファイル形式を使っている。",
"freq:protagonist":"その小説の主人公は引退した刑事だ。",
"freq:snail":"市の中心部では車がカタツムリのようなのろさで進んだ。",
"freq:susceptible":"幼い子どもは特にそのウイルスにかかりやすい。",
"freq:verge":"その会社は倒産の瀬戸際にあった。",
"freq:vibrant":"その都市には活気のある音楽界がある。",
"freq:collateral":"彼は自宅を融資の担保にした。",
"freq:demise":"地元紙の廃刊は多くの読者を悲しませた。",
"freq:dire":"難民たちはきれいな水を切実に必要としている。",
"freq:dominion":"その帝国は沿岸全体に支配を広げた。",
"freq:misconduct":"その医師は職務上の不正行為で解雇された。",
"freq:mute":"彼女は信じられずに無言で彼を見つめた。",
"freq:prevalence":"糖尿病の有病率は20年で倍になった。",
"freq:saturated":"スマートフォンの市場はすでに飽和している。",
"freq:tangible":"その改革は具体的な成果を生んでいない。",
"freq:tilt":"彼女は首をかしげて注意深く耳を傾けた。",
"freq:veil":"その取引は秘密のベールに包まれて交渉された。",
"freq:versatile":"彼女はどんな役も演じられる多才な俳優だ。",
"freq:anthropology":"彼は記者になる前に人類学を学んだ。",
"freq:caliber":"その大学は最高の力量を持つ学生を引き寄せている。",
"freq:deception":"その計画全体がごまかしの上に成り立っていた。",
"freq:helm":"5月に新しい取締役が会社のかじ取りを引き継いだ。",
"freq:hypocrisy":"批判者たちは大臣を偽善だと非難した。",
"freq:incompetent":"調査は遅延の原因を無能な管理職にあるとした。",
"freq:intervene":"警察はその争いに介入することを拒んだ。",
"freq:manifesto":"その党の政策綱領は減税を約束している。",
"freq:negligence":"その病院は過失で訴えられた。",
"freq:obsolete":"新しい技術がその工場の機械を時代遅れにした。",
"freq:posture":"悪い姿勢は腰痛につながることがある。",
"freq:resonance":"彼女の物語は移民にとって特別な共感を呼ぶ。",
"freq:ruthless":"彼は競争相手をつぶす冷酷な実業家だった。",
"freq:salvage":"潜水士たちは難破船から金貨を引き揚げた。",
"freq:satire":"その劇は現代政治への鋭い風刺だ。",
"freq:standpoint":"法律上の観点からは、その契約は有効だ。",
"freq:sway":"その演説は態度を決めていない有権者の心を動かせなかった。",
"freq:undermine":"その不祥事は警察への国民の信頼を損なった。",
"freq:veto":"大統領はその法案に拒否権を行使すると警告した。",
"freq:vocational":"その学校は看護の職業訓練課程を設けている。",
"freq:withstand":"その橋は強い地震に耐えるように造られた。",
"freq:accustomed":"彼女はすぐに寒い気候に慣れた。",
"freq:corpus":"研究者たちは1,000万語の言語資料を分析した。",
"freq:dictatorship":"その国は軍事独裁のもとで苦しんだ。",
"freq:electorate":"その問題について有権者は深く分かれている。",
"freq:erosion":"土壌の侵食が川沿いの農場を脅かしている。",
"freq:flank":"軍は敵の左側面を攻撃した。",
"freq:incidence":"心臓病の発生率は喫煙者のほうが高い。",
"freq:mutation":"たった一つの突然変異がそのウイルスをより危険にした。",
"freq:mythology":"竜は多くの文化の神話に登場する。",
"freq:pest":"農家は害虫を抑えるために自然な方法を使う。",
"freq:pillar":"自由な選挙は民主主義の柱だ。",
"freq:precipitation":"その地域の年間降水量は急激に減った。",
"freq:restraint":"警察は抗議の間、大いに自制した。",
"freq:rift":"その争いは党内に深い亀裂を生んだ。",
"freq:supremacy":"その2社は市場での優位を争っている。",
"freq:affiliation":"彼は自分の政治的な所属を明かすことを拒んだ。",
"freq:align":"その党は労働組合と歩調を合わせた。",
"freq:amnesty":"政府は政治犯に恩赦を与えた。",
"freq:assertion":"彼の主張を裏づける証拠はない。",
"freq:atop":"丘の上に小さな礼拝堂が建っている。",
"freq:cache":"警察は地下室で隠された武器を見つけた。",
"freq:displacement":"その戦争で100万人が住む場所を追われた。",
"freq:drastic":"その危機は思い切った行動を必要としている。",
"freq:edible":"野生のキノコがすべて食べられるわけではない。",
"freq:flick":"彼がスイッチをぱちんと入れると明かりがついた。",
"freq:legitimacy":"低い投票率は選挙の正当性を弱めた。",
"freq:portray":"その映画は王を弱い男として描いている。",
"freq:practitioner":"彼女は家族法の実務家として尊敬されている。",
"freq:stationary":"トラックは停車中のバスに衝突した。",
"freq:temporal":"その研究は降雨の時間的な変化を調べている。",
"freq:ambient":"その部屋の周囲温度は一定に保たれている。",
"freq:comprise":"その委員会は12人の委員から成る。",
"freq:conceptual":"その計画はまだ構想の段階にある。",
"freq:demolition":"住民は古い劇場の取り壊しに抗議した。",
"freq:differentiate":"その2つの種を区別するのは難しい。",
"freq:empirical":"その理論を裏づける実証的な証拠はほとんどない。",
"freq:fertile":"その谷には国内有数の肥沃な土壌がある。",
"freq:feud":"激しい確執がその2つの家を引き裂いた。",
"freq:fuse":"その芸術家は伝統様式と現代様式を融合させる。",
"freq:gale":"強風のためフェリーは欠航になった。",
"freq:mantle":"彼女は党首という役目を引き受けた。",
"freq:militant":"過激派組織が石油パイプラインを攻撃した。",
"freq:nostalgia":"その歌は年配の聞き手を懐かしさで満たす。",
"freq:peasant":"農民たちは地主に対して蜂起した。",
"freq:presume":"行方不明の船員たちは死亡したと推定されている。",
"freq:sabotage":"その火事は破壊工作だった。",
"freq:sarcasm":"彼女の声にはかすかな皮肉があった。",
"freq:tally":"最終的な集計は僅差の勝利を示した。",
"freq:vile":"排水口からひどく不快な臭いがした。",
"freq:wedge":"その問題は同盟国の間にくさびを打ち込んだ。",
"freq:adaptive":"人間は適応力の非常に高い種だ。",
"freq:affinity":"彼女は地元の人々に強い親近感を覚えた。",
"freq:apartheid":"彼はアパルトヘイトに反対して何年も服役した。",
"freq:casualty":"その戦闘は双方に多数の死傷者を出した。",
"freq:cavity":"歯科医は1本の歯に小さな虫歯を見つけた。",
"freq:dissolution":"議会の解散が昨日発表された。",
"freq:enclosure":"オオカミたちは大きな囲いの中で飼われている。",
"freq:famine":"戦争の後の飢饉で数百万人が死んだ。",
"freq:fraudulent":"彼は保険金の不正請求で投獄された。",
"freq:homage":"その映画は古典的な西部劇に敬意を表している。",
"freq:hostility":"その計画は住民のあからさまな敵意にあった。",
"freq:hypothetical":"仮定の事例を考えてみよう。",
"freq:paradigm":"その発見は物理学に新しい枠組みを生み出した。",
"freq:perpetual":"その一家は立ち退きへの絶え間ない恐怖の中で暮らした。",
"freq:pigeon":"ハトが広場の像に止まった。",
"freq:plateau":"売上は何年もの成長の後、頭打ちになった。",
"freq:precinct":"その管区の犯罪は10パーセント減った。",
"freq:regeneration":"市は港の再開発に多額の投資をした。",
"freq:reminiscent":"その建物は中世の城を思わせる。",
"freq:resentment":"賃下げは職員の間に深い憤りを生んだ。",
"freq:resin":"そのテーブルは透明な樹脂で覆われている。",
"freq:scarce":"その地域ではきれいな水が乏しい。",
"freq:sibling":"彼女には年下のきょうだいが3人いる。",
"freq:stint":"彼は海軍で2年の勤務を務めた。",
"freq:trajectory":"そのミサイルの軌道はレーダーで追跡された。",
"freq:utmost":"その件は最大限の注意を払って扱わなければならない。",
"freq:adjustable":"その椅子は座面を調節できる。",
"freq:authenticity":"専門家たちはその絵が本物かどうか疑っている。",
"freq:caste":"彼は最下層のカーストに生まれた。",
"freq:cerebral":"そのけがは脳出血を引き起こした。",
"freq:chant":"群衆は勝者の名前を繰り返し叫んだ。",
"freq:climax":"祭りは花火大会で最高潮に達した。",
"freq:contender":"彼女は金メダルの有力候補だ。",
"freq:degradation":"採掘は深刻な環境の悪化を引き起こした。",
"freq:equilibrium":"市場はやがて均衡を取り戻した。",
"freq:isolate":"その病気の患者はただちに隔離された。",
"freq:nominal":"会員は1ドルという名目だけの料金を払う。",
"freq:ordinance":"市の条例は公園での喫煙を禁じている。",
"freq:prolific":"彼女は多作の推理作家だった。",
"freq:proportional":"罰金は運転者の収入に比例する。",
"freq:quarry":"その石は地元の採石場から切り出された。",
"freq:restless":"長い演説の間、子どもたちは落ち着きをなくした。",
"freq:sap":"数か月の病気が彼の体力を徐々に奪った。",
"freq:sarcastic":"彼は彼女の料理について嫌みを言った。",
"freq:scholarly":"その論文は学術誌に掲載された。",
"freq:segregation":"学校での人種隔離は違法と宣言された。",
"freq:sinister":"彼の笑みにはどこか不吉なものがあった。",
"freq:ventilation":"換気が悪くて部屋は暑く、息苦しかった。",
"freq:accumulation":"債務の蓄積は投資家を不安にさせた。",
"freq:authoritarian":"その国は権威主義的な政権に支配されている。",
"freq:avail":"私たちは何時間も探したが、無駄だった。",
"freq:calorie":"その飲み物1缶は150カロリーを含む。",
"freq:commence":"建設工事は来月始まる。",
"freq:conditional":"その申し出は健康診断を条件としている。",
"freq:crusade":"彼女は児童労働に反対する運動を率いた。",
"freq:cynical":"有権者は政治家の約束に冷笑的になっている。",
"freq:elastic":"その製品の需要は非常に弾力的だ。",
"freq:exposition":"その都市は1970年に万国博覧会を開催した。",
"freq:gracious":"彼女は寛大にも私たちの謝罪を受け入れてくれた。",
"freq:humility":"彼はとても謙虚にその賞を受けた。",
"freq:impeachment":"議会は大統領に対する弾劾手続きを始めた。",
"freq:marital":"その用紙は婚姻状況を尋ねている。",
"freq:multitude":"その計画は多数の問題に直面している。",
"freq:plumbing":"その古い家は新しい配管が必要だ。",
"freq:resemblance":"彼は祖父に驚くほど似ている。",
"freq:sermon":"司祭は赦しについて説教をした。",
"freq:slender":"その党はわずかな差で過半数を得た。",
"freq:societal":"その報告書は老いに対する社会の態度を調べている。",
"freq:transmitter":"無線の送信機は屋根裏に隠されていた。",
"freq:upheld":"裁判所は元の評決を支持した。",
"freq:adolescent":"多くの思春期の若者は睡眠に苦労している。",
"freq:backdrop":"会談は暴力が増す状況を背景に行われた。",
"freq:bluff":"辞任するという彼の脅しはただのはったりだった。",
"freq:cartel":"その麻薬カルテルは国境の町を支配していた。",
"freq:caucus":"党員集会が新しい党首を選んだ。",
"freq:clad":"丘は雪に覆われていた。",
"freq:constituent":"その上院議員は地元の町で有権者と会った。",
"freq:contagious":"はしかは非常に伝染性の高い病気だ。",
"freq:eccentric":"彼女の風変わりなおじは猫を40匹飼っている。",
"freq:emblem":"ハトは平和の象徴だ。",
"freq:influx":"その町は観光客の殺到への対応に苦労した。",
"freq:kernel":"そのうわさには一片の真実がある。",
"freq:liaison":"彼女は学校と保護者の連絡役を務めている。",
"freq:resilience":"その地域社会は洪水の後、大きな回復力を見せた。",
"freq:rotate":"地球は24時間に1回自転する。",
"freq:toxicity":"試験はその化学物質の魚への毒性を示した。",
"freq:autopsy":"検死によって彼が毒殺されたことがわかった。",
"freq:blitz":"その会社は集中的な広告攻勢をかけた。",
"freq:blockade":"海軍はその港を封鎖した。",
"freq:circa":"その教会は1450年頃に建てられた。",
"freq:cloak":"会談は秘密のベールに包まれて行われた。",
"freq:combustion":"そのエンジンは燃料の燃焼に頼っている。",
"freq:deportation":"査証が切れ、彼は強制送還に直面している。",
"freq:disposable":"その喫茶店は使い捨てのカップを使うのをやめた。",
"freq:dwell":"深海には奇妙な生き物がすんでいる。",
"freq:fiery":"彼女は戦争に反対する激しい演説をした。",
"freq:flux":"ファッション業界は絶えず変化している。",
"freq:hassle":"旅券の更新は実に面倒なことがある。",
"freq:immensely":"その映画は十代に非常に人気があった。",
"freq:inauguration":"数千人が新大統領の就任式に出席した。",
"freq:indicative":"その結果はより広い傾向を示している。",
"freq:intercept":"警察は武器の積み荷を途中で押さえた。",
"freq:intuitive":"そのソフトは単純で直感的な設計だ。",
"freq:latitude":"教師は本を選ぶうえで広い自由を与えられている。",
"freq:majestic":"そのホテルからは山々の雄大な眺めが見える。",
"freq:metropolis":"その村はにぎやかな大都市に成長した。",
"freq:orchard":"その農場にはリンゴの果樹園がある。",
"freq:parameter":"私たちは予算の枠内で仕事をしなければならない。",
"freq:pathology":"その検体は病理検査室に送られた。",
"freq:procession":"葬列が町をゆっくり進んだ。",
"freq:purge":"独裁者は軍将校の粛清を命じた。",
"freq:secrecy":"その事業は完全な秘密のうちに行われた。",
"freq:venom":"そのヘビの毒は1時間以内に人を殺すことがある。",
"freq:victorious":"勝利したチームは歓声を上げる群衆に迎えられて帰郷した。",
"freq:wary":"投資家は新しい通貨を依然として警戒している。",
"freq:amidst":"大臣は世間の怒りが高まるさなかに辞任した。",
"freq:aquarium":"その水族館にはサメでいっぱいの水槽がある。",
"freq:batter":"巨大な波が一晩中、海岸に打ちつけた。",
"freq:captivity":"人質たちは6か月間監禁されていた。",
"freq:complementary":"その2人の共同経営者は互いに補い合う技能を持っている。",
"freq:convict":"陪審は彼に殺人罪で有罪の評決を下した。",
"freq:discrete":"その課程は4つの別々の単元に分かれている。",
"freq:dissent":"その政権は異議を許さない。",
"freq:eminent":"著名な外科医がその手術を行った。",
"freq:endeavor":"その山に登ることは危険な試みだった。",
"freq:fraternity":"彼は法曹界の仲間内でよく知られている。",
"freq:interrogation":"容疑者は数時間の取り調べの後に自白した。",
"freq:pagan":"その祭りは異教の儀式に起源がある。",
"freq:pursuant":"その支払いは契約に従って行われた。",
"freq:repetitive":"工場の仕事は退屈で単調なことがある。",
"freq:reversal":"その決定は政府の方針の転換を示した。",
"freq:savvy":"若い消費者はネット上の価格に精通している。",
"freq:spree":"彼女は賞を取った後、買い物三昧をした。",
"freq:subsidy":"農家は小麦の栽培に補助金を受け取る。",
"freq:superficial":"その報告書は表面的な分析しか示さなかった。",
"freq:waterfront":"水辺に沿って新しい集合住宅が建てられている。",
"freq:ambush":"兵士たちは待ち伏せにあって殺された。",
"freq:arrogance":"彼の傲慢さのせいで友人はほとんどできなかった。",
"freq:comrade":"彼は負傷した戦友を救うために命を懸けた。",
"freq:curator":"学芸員がその絵の歴史を説明した。",
"freq:deity":"その神殿は土地の神にささげられている。",
"freq:detrimental":"喫煙は健康に有害だ。",
"freq:entitlement":"労働者には4週間の休暇を取る権利がある。",
"freq:garner":"その映画は批評家の称賛を集めた。",
"freq:gypsy":"その小説は放浪の音楽家の物語を語る。",
"freq:impairment":"その学校は聴覚に障害のある子どもを支援している。",
"freq:intricate":"その時計は複雑な仕組みを持っている。",
"freq:longevity":"その島の人々は長寿で有名だ。",
"freq:lore":"地元の言い伝えによれば、その湖には幽霊が出る。",
"freq:obstruction":"彼は司法妨害の罪に問われた。",
"freq:plaintiff":"裁判所は原告に損害賠償を認めた。",
"freq:portrayal":"その俳優は王の演技で称賛された。",
"freq:rampant":"建設業界では汚職がはびこっている。",
"freq:replicate":"ほかの科学者たちはその結果を再現できなかった。",
"freq:retaliation":"軍は攻撃への報復としてロケット弾を撃った。",
"freq:sewage":"未処理の下水が川に流れ込んでいた。",
"freq:summon":"その部長は本社に呼び出された。",
"freq:urgency":"その報告書は問題の緊急性を強調している。",
"freq:accreditation":"その大学は昨年、認定を失った。",
"freq:clarification":"記者たちは大臣に説明を求めた。",
"freq:covert":"その機関は海外で秘密工作を行った。",
"freq:cringe":"昔の日記を読むと恥ずかしくて身が縮む。",
"freq:dialect":"村人たちは、よそ者にはめったに理解できない方言を話す。",
"freq:downside":"その仕事の欠点は労働時間が長いことだ。",
"freq:flair":"彼女には語学の才能がある。",
"freq:fugitive":"その逃亡者は国境の近くで捕まった。",
"freq:inmate":"その刑務所には約500人の受刑者が収容されている。",
"freq:intuition":"彼女の直感は何かがおかしいと告げていた。",
"freq:menace":"飲酒運転者は社会への脅威だ。",
"freq:misuse":"その役人は公金の悪用で告発された。",
"freq:nausea":"その薬は吐き気と頭痛を引き起こすことがある。",
"freq:optimum":"その植物に最適な温度は20度だ。",
"freq:physiological":"ストレスは体に生理的な変化を引き起こす。",
"freq:restrictive":"その国には移民について制限的な法律がある。",
"freq:screenplay":"彼女はその受賞映画の脚本を書いた。",
"freq:sect":"彼は小さな宗派に属していた。",
"freq:seismic":"その地域は地震活動で知られている。",
"freq:slain":"記念碑が戦死した兵士たちをたたえている。",
"freq:stash":"彼はその金を床下に隠した。",
"freq:stroll":"彼らは日暮れに浜辺をぶらぶら歩いた。",
"freq:whereabouts":"その絵の所在は不明だ。",
"freq:backbone":"小さな農場は農村経済の柱だ。",
"freq:brawl":"真夜中過ぎに酒場で乱闘が起きた。",
"freq:celestial":"古代の船乗りは天体を使って進路を見つけた。",
"freq:characterization":"その小説は生き生きとした人物描写で称賛されている。",
"freq:customary":"この国では給仕係にチップを渡すのが慣例だ。",
"freq:flourish":"新しい王のもとで芸術が栄えた。",
"freq:heroine":"その物語の主人公は若い女性医師だ。",
"freq:hoax":"その爆破予告はいたずらだとわかった。",
"freq:insignificant":"価格の差は取るに足りない。",
"freq:maneuver":"運転手はトラックを狭い場所に巧みに入れた。",
"freq:numb":"私の指は寒さで感覚がなくなっていた。",
"freq:pawn":"村人たちは政治の駆け引きの手先にされた。",
"freq:plaster":"天井のしっくいにはひびが入っていた。",
"freq:quirky":"その店は一風変わった贈り物やおもちゃを売っている。",
"freq:quota":"その国は輸入車に割り当てを設けている。",
"freq:rationale":"大臣はその決定の根拠を説明した。",
"freq:reap":"その会社は今、投資の成果を得ている。",
"freq:rebound":"株価は1週間の下落の後、回復した。",
"freq:redeem":"彼は決勝点を決めて名誉を挽回した。",
"freq:residue":"その洗剤はガラスに残留物を残さない。",
"freq:runoff":"上位2人の候補が決選投票で争う。",
"freq:sentimental":"彼は感傷的な理由からその古い時計を取っておいた。",
"freq:snatch":"泥棒が彼女のかばんをひったくって逃げた。",
"freq:stealth":"猫は鳥に向かって忍び足で進んだ。",
"freq:subset":"その薬に反応するのは患者のごく一部だけだ。",
"freq:suspense":"その映画は最後まで観客をはらはらさせる。",
"freq:tandem":"その2つの機関は事件に協力して取り組んだ。",
"freq:tertiary":"より多くの学生が高等教育に進んでいる。",
"freq:upbeat":"監督はチームの見込みについて楽観的だった。",
"freq:vanguard":"その会社は環境技術の先頭に立っている。",
"freq:vulgar":"彼は下品な言葉づかいを批判された。",
"freq:waiver":"来訪者は登る前に権利放棄書に署名しなければならない。",
"freq:watershed":"その選挙は国の歴史の分岐点だった。",
"freq:adrenaline":"恐怖で彼女の体にアドレナリンが駆けめぐった。",
"freq:alleviate":"新しい道路は中心部の渋滞を和らげるだろう。",
"freq:anarchy":"クーデターの後、その国は無政府状態に陥った。",
"freq:ashore":"船が沈んだ後、船員たちは岸へ泳ぎ着いた。",
"freq:aura":"その古い図書館には神秘的な雰囲気がある。",
"freq:canopy":"サルは森の林冠の高い所にすんでいる。",
"freq:condemnation":"その攻撃は世界の指導者たちの非難を招いた。",
"freq:dependency":"その診療所は薬物依存の人々を治療している。",
"freq:dosage":"推奨される服用量を超えてはならない。",
"freq:dysfunction":"その報告書は地方議会の機能不全を描いている。",
"freq:endowment":"その大学は1,000万ドルの寄付金を受け取った。",
"freq:enrichment":"その事業は子どもたちに文化的な豊かさを提供する。",
"freq:fauna":"その島は独特の動物相で有名だ。",
"freq:fidelity":"翻訳者は原文に非常に忠実に訳した。",
"freq:forefront":"その研究所はがん研究の最前線にある。",
"freq:harden":"暴力の後、ストライキ参加者への態度は強硬になった。",
"freq:initiation":"和平交渉の開始は歓迎された。",
"freq:jeopardy":"そのストライキは数千の職を危険にさらした。",
"freq:residual":"多少の残った痛みが数週間続くことがある。",
"freq:truce":"両軍は休日の間の停戦に合意した。",
"freq:uphold":"裁判官には法を守る義務がある。",
"freq:abolition":"彼は死刑の廃止を求めて運動した。",
"freq:acquainted":"私はその事件の詳細に通じていない。",
"freq:angular":"彼は細く、骨ばった顔をしていた。",
"freq:benign":"検査でその腫瘍は良性だとわかった。",
"freq:brethren":"彼は同胞たちに貧しい人々を助けるよう呼びかけた。",
"freq:brink":"両国は戦争の瀬戸際にあった。",
"freq:collaborate":"その2つの大学は共同で研究を行った。",
"freq:delusional":"彼は妄想にとらわれ、自分は王だと信じていた。",
"freq:deposition":"その証人は公判の前に宣誓証言を行った。",
"freq:empower":"教育は人々に人生を変える力を与える。",
"freq:mediation":"その紛争は調停によって解決された。",
"freq:parasite":"その病気は昆虫が運ぶ寄生虫によって起こる。",
"freq:perennial":"洪水はその谷で長年続く問題だ。",
"freq:procedural":"その訴えは手続き上の理由で却下された。",
"freq:relentless":"そのチームは報道陣からの絶え間ない圧力にさらされた。",
"freq:speculative":"その記事は推測に大きく頼っており、証拠を欠いている。",
"freq:submerged":"ダムが建設されたとき、その村は水没した。",
"freq:symmetry":"その庭は完全な左右対称に設計されている。",
"freq:syndicate":"ある犯罪組織がその都市の賭博を支配していた。",
"freq:wholesome":"そのキャンプは健康的な食事と新鮮な空気を提供する。",
"freq:adjoining":"私たちはホテルで隣り合った2部屋を予約した。",
"freq:ancestry":"彼女は自分の家系を400年さかのぼることができる。",
"freq:annex":"その帝国は隣の王国を併合した。",
"freq:avid":"彼は歴史書の熱心な読者だ。",
"freq:bland":"大臣はその質問に当たり障りのない返事をした。",
"freq:bribe":"その役人は賄賂を受け取ったとして逮捕された。",
"freq:canoe":"彼らは木のカヌーで湖を渡った。",
"freq:decency":"彼には謝るだけの良識もなかった。",
"freq:havoc":"その嵐は地域全体に大混乱をもたらした。",
"freq:locomotive":"蒸気機関車がその古い列車を引いた。",
"freq:mantra":"「顧客第一」がその会社の合言葉になった。",
"freq:monumental":"その都市の再建は途方もない仕事だった。",
"freq:pilgrimage":"毎年、数千人がその寺院へ巡礼する。",
"freq:pivot":"その会社はハードウェアからソフトウェアへ方向転換した。",
"freq:pivotal":"彼女はその交渉で極めて重要な役割を果たした。",
"freq:profitability":"上昇する費用がその会社の収益性を損なっている。",
"freq:provoke":"その決定は怒りの反応を引き起こした。",
"freq:reconcile":"その出来事についての2つの説明を一致させるのは難しい。",
"freq:regression":"その条約は古い政策への後退と見なされた。",
"freq:resilient":"子どもは大人より立ち直りが早いことが多い。",
"freq:staggering":"その事業には20億ドルという途方もない費用がかかった。",
"freq:synonymous":"そのブランドは品質の代名詞になった。",
"freq:tedious":"用紙への記入は退屈な仕事だった。",
"freq:utilization":"その計画は公有地のより良い活用を目指している。",
"freq:astronomical":"首都の住宅価格はけた外れに高い。",
"freq:ceremonial":"大統領の役割は主に儀礼的なものだ。",
"freq:choreography":"その踊りの振り付けは見事だった。",
"freq:cling":"多くの村人は今も古い慣習に固執している。",
"freq:concurrent":"彼は2つの刑を並行して務めている。",
"freq:dubious":"その会社にはいかがわしい評判がある。",
"freq:folklore":"キツネは日本の民間伝承では賢い動物だ。",
"freq:gravitational":"月の引力が潮の満ち引きを起こす。",
"freq:hereditary":"その病気は遺伝性で、主に男性がかかる。",
"freq:hiatus":"そのバンドは5年の活動休止の後に復帰した。",
"freq:homestead":"彼の祖父は1890年にその農場と家屋敷を建てた。",
"freq:intellect":"彼女は優れた知性の持ち主だ。",
"freq:lapse":"一瞬の集中力の途切れが事故を引き起こした。",
"freq:loot":"暴徒が市の中心部の店を略奪した。",
"freq:mindful":"運転者は自転車に乗る人に注意すべきだ。",
"freq:myriad":"その都市は無数の文化行事を提供している。",
"freq:noteworthy":"その研究はいくつかの注目に値する発見を生んだ。",
"freq:odor":"強いガスの臭いが台所に充満した。",
"freq:plunge":"発表の後、株価は急落した。",
"freq:pragmatic":"市長はその問題に実際的な取り組み方をした。",
"freq:quasi":"その評議会はその地域で準政府のような役割を果たしている。",
"freq:radiant":"花嫁は白いドレス姿で晴れやかに輝いていた。",
"freq:remorse":"その殺人犯は法廷で何の後悔も見せなかった。",
"freq:sanity":"定期的な散歩が彼女の正気を保つ助けになった。",
"freq:showdown":"その2人の指導者は最終的な対決に向かっている。",
"freq:shuffle":"その老人は足を引きずってゆっくり部屋を横切った。",
"freq:slab":"その床は石の厚板でできている。",
"freq:supplemental":"学生は補足の読み物を借りることができる。",
"freq:tariff":"政府は輸入鉄鋼に関税を課した。",
"freq:trance":"彼女は夢うつつのように火を見つめた。",
"freq:unconditional":"軍は無条件降伏を要求した。",
"freq:volatility":"投資家は石油価格の変動の激しさを恐れている。",
"freq:anthology":"彼女は現代詩の選集を編集した。",
"freq:avalanche":"スキーをしていた2人が雪崩で死亡した。",
"freq:banter":"選手たちは試合前に気さくな冗談を言い合って楽しんだ。",
"freq:blockbuster":"その映画は夏最大の大ヒット作になった。",
"freq:charismatic":"その党は若くカリスマ性のある党首を選んだ。",
"freq:commencement":"公判の開始は延期された。",
"freq:corrosion":"塩水は鋼鉄の腐食を引き起こす。",
"freq:defiance":"彼らは禁止令を無視して行進した。",
"freq:deter":"高い罰金は運転者に速度違反を思いとどまらせる。",
"freq:envoy":"大統領はその地域に特使を送った。",
"freq:fabrication":"その話は完全な作り話だった。",
"freq:formulation":"彼は新しい政策の策定を手伝った。",
"freq:hysterical":"歌手が現れると群衆は熱狂状態になった。",
"freq:incompatible":"その新しいソフトは古いコンピューターと互換性がない。",
"freq:injunction":"裁判所はそのストライキに対する差し止め命令を出した。",
"freq:kidnap":"反政府勢力は外国人技師3人を誘拐した。",
"freq:notwithstanding":"悪天候にもかかわらず、その催しは成功だった。",
"freq:placebo":"患者の半数には偽薬が与えられた。",
"freq:retrospective":"その美術館は彼女の作品の回顧展を開いている。",
"freq:speculate":"専門家は来年価格が下がると推測している。",
"freq:sublime":"頂上からの眺めは見事だった。",
"freq:terrestrial":"その島には陸生の哺乳類がほとんどいない。",
"freq:thug":"彼は暴漢の一団に襲われた。",
"freq:anomaly":"科学者たちは気温のデータに異常を見つけた。",
"freq:apprenticeship":"彼は大工として5年の見習い期間を務めた。",
"freq:breadth":"彼女の知識の幅広さは驚くほどだ。",
"freq:centralized":"その国は高度に中央集権化された政府を持つ。",
"freq:cleanse":"看護師はぬるま湯で傷を洗浄した。",
"freq:consolidate":"その会社は市場での地位を固めた。",
"freq:containment":"ウイルスの封じ込めが最優先だ。",
"freq:crave":"長い山歩きの後、私たちは温かい食事を切望した。",
"freq:elusive":"永続する平和は達成しがたいものだとわかった。",
"freq:espionage":"彼はスパイ活動の容疑で逮捕された。",
"freq:existential":"気候変動はその島々にとって存亡に関わる脅威だ。",
"freq:flashback":"その物語は一連の回想場面で語られる。",
"freq:gloss":"その塗料は強い光沢を出して乾く。",
"freq:graft":"外科医は彼の腕に皮膚移植を行った。",
"freq:grumpy":"彼は朝はいつも不機嫌だ。",
"freq:guise":"その税は改革という見せかけのもとに導入された。",
"freq:immersion":"言語を学ぶ最良の方法は完全に浸りきることだ。",
"freq:intrinsic":"その硬貨そのものにはほとんど価値がない。",
"freq:moderation":"酒は節度を持って飲めば害はない。",
"freq:ordeal":"人質たちは自らのつらい体験を記者に語った。",
"freq:puberty":"たいていの女の子は男の子より先に思春期に達する。",
"freq:taboo":"死は多くの家庭で今もタブーの話題だ。",
"freq:throttle":"操縦士が絞り弁を開くと、飛行機は上昇した。",
"freq:trivia":"彼は古い映画についての雑学をたくさん知っている。",
"freq:vortex":"その船は水の渦に巻き込まれた。",
"freq:alias":"そのスパイは偽名で旅をした。",
"freq:anchored":"その船は一晩、湾に停泊していた。",
"freq:apostle":"彼は自由貿易の主唱者になった。",
"freq:concise":"明確で簡潔な答えをしてください。",
"freq:confinement":"彼は独房監禁で2年を過ごした。",
"freq:consultancy":"彼女は小企業向けのコンサルタント会社を設立した。",
"freq:convergence":"その問題について意見が次第にまとまりつつある。",
"freq:criterion":"ほとんどの買い手にとって価格が主な基準だ。",
"freq:despicable":"高齢者から盗むのは卑劣な犯罪だ。",
"freq:diminish":"彼の影響力は年月とともに弱まった。",
"freq:disclaimer":"そのサイトは医療上の助言についての免責事項を載せている。",
"freq:discriminatory":"その法律は差別的だとして無効にされた。",
"freq:disruptive":"そのストライキは通勤者に大きな混乱をもたらした。",
"freq:estimation":"私の見るところ、その計画は失敗する。",
"freq:excavation":"発掘によってローマ時代の邸宅が見つかった。",
"freq:extremist":"その攻撃は過激派集団によって実行された。",
"freq:forcibly":"抗議者たちは建物から強制的に排除された。",
"freq:imbalance":"両国の間には貿易の不均衡がある。",
"freq:intolerance":"宗教的不寛容が何年もの紛争を招いた。",
"freq:lineage":"その一族は王にまでさかのぼる血統を主張している。",
"freq:martyr":"彼は自由という大義の殉教者と見なされている。",
"freq:mitigation":"その計画は洪水被害の軽減に重点を置いている。",
"freq:obscene":"その会社は危機の間にけしからぬほどの利益を上げた。",
"freq:onward":"軍は首都へ向かって進軍を続けた。",
"freq:penal":"その国は刑罰制度を改革している。",
"freq:plight":"その映画は家を失った家族の窮状を描いている。",
"freq:privy":"その計画を知らされていたのは数人の役人だけだった。",
"freq:propulsion":"その船は原子力推進を使っている。",
"freq:rejoice":"町中がその知らせに大喜びした。",
"freq:smear":"その候補者はその話を中傷だと呼んだ。",
"freq:stabilize":"その患者の容体は安定した。",
"freq:stalk":"ライオンは草の中を獲物に忍び寄った。",
"freq:symbolism":"その詩は宗教的な象徴に富んでいる。",
"freq:astounding":"その回復の速さは驚くべきものだった。",
"freq:audible":"彼女の声は騒音の中でかろうじて聞き取れた。",
"freq:blatant":"その発言は見え透いたうそだった。",
"freq:boon":"新しい橋は地元の商店への恩恵だ。",
"freq:candid":"彼女は自分の失敗を率直に語った。",
"freq:caretaker":"選挙まで暫定政府が統治する。",
"freq:confidentiality":"医師は患者の秘密を守らなければならない。",
"freq:cunning":"キツネはずる賢い動物として知られている。",
"freq:depiction":"その本の戦争の描写は衝撃的だ。",
"freq:diaspora":"その祭りは世界中に離散した人々を一つにする。",
"freq:discord":"その決定は同盟国の間に不和の種をまいた。",
"freq:divinity":"初期の王たちは自らの神性を主張した。",
"freq:durability":"その長靴は耐久性で知られている。",
"freq:heed":"その警告に注意を払った人はほとんどいなかった。",
"freq:hideous":"その部屋はひどく醜い緑色に塗られていた。",
"freq:imperfect":"私たちは不完全な世界に生きている。",
"freq:implicit":"彼の言葉には暗黙の脅しがあった。",
"freq:insensitive":"彼女の病気について冗談を言うのは無神経だった。",
"freq:lieu":"労働者は賃金の代わりに追加の休暇を受け取った。",
"freq:liquidity":"その銀行は突然の流動性危機に直面した。",
"freq:mayhem":"停電は道路に大混乱を引き起こした。",
"freq:nostalgic":"その古い写真を見て彼女は懐かしい気持ちになった。",
"freq:oppressive":"人々は抑圧的な政権から逃れるためにその国を離れた。",
"freq:patronage":"芸術は王室の後援のもとで栄えた。",
"freq:pinnacle":"その賞を取ったことが彼女の経歴の頂点だった。",
"freq:qualitative":"その研究は質的なデータと数値データを組み合わせている。",
"freq:recognizable":"その塔は市内で最も見分けやすい建物だ。",
"freq:reconnaissance":"偵察機が国境の上空を飛んだ。",
"freq:reluctantly":"彼はしぶしぶ罰金を払うことに同意した。",
"freq:rendition":"合唱団はその賛美歌を感動的に歌い上げた。",
"freq:sham":"批判者たちはその選挙を見せかけだと呼んだ。",
"freq:stature":"彼は国際的な名声を持つ科学者だ。",
"freq:steward":"彼はその一家の土地の管理人を務めた。",
"freq:stout":"その門は頑丈なオーク材でできていた。",
"freq:tentative":"双方は暫定的な合意に達した。",
"freq:topical":"そのコメディアンは時事的な冗談で知られている。",
"freq:variance":"彼の説明は事実と食い違っている。",
"freq:contingency":"市は大洪水に備えた緊急時の計画を持っている。",
"freq:deprivation":"睡眠不足は記憶と気分に影響する。",
"freq:duly":"その契約は双方によって正式に署名された。",
"freq:dusk":"その公園は夕暮れに閉まる。",
"freq:feasibility":"技師たちはトンネルの実現可能性を調べている。",
"freq:frenzy":"その知らせは株式市場に買いの熱狂を引き起こした。",
"freq:inadvertently":"彼女はうっかりファイルをすべて消してしまった。",
"freq:insistence":"彼女の強い要求で、会議は延期された。",
"freq:invincible":"そのチームはその季節、無敵に見えた。",
"freq:kinetic":"その機械は運動エネルギーを電気に変える。",
"freq:mania":"その国はサッカー熱に包まれた。",
"freq:mythical":"竜は神話上の生き物だ。",
"freq:outset":"その計画は最初から失敗する運命にあった。",
"freq:peacock":"クジャクが芝生の上で尾を広げた。",
"freq:precursor":"その機械は現代のコンピューターの前身だった。",
"freq:preparatory":"予備交渉は来週始まる。",
"freq:proclamation":"王は和平の宣言を出した。",
"freq:provocative":"その芸術家は挑発的な絵で知られている。",
"freq:reflex":"医師は彼のひざの反射を調べた。",
"freq:repayment":"その融資の返済には10年かかる。",
"freq:simulate":"そのプログラムは地震の影響を模擬的に再現する。",
"freq:soluble":"その錠剤は水に溶ける。",
"freq:sturdy":"その山歩きには頑丈な長靴が必要だ。",
"freq:wrought":"その嵐は沿岸一帯に大被害を引き起こした。",
"freq:abduction":"警察は子どもの誘拐事件を捜査している。",
"freq:ancestral":"その一家は先祖代々の家に戻った。",
"freq:antiquity":"その像は古典古代にさかのぼる。",
"freq:aqua":"壁は淡い水色に塗られていた。",
"freq:bleak":"その産業の見通しは暗い。",
"freq:bogus":"彼は偽の切符を売ったとして逮捕された。",
"freq:collusion":"その企業は価格を操作するための共謀で告発された。",
"freq:contractual":"その会社は契約上の義務を果たさなかった。",
"freq:correctional":"彼は矯正施設の職員として働いている。",
"freq:creamy":"そのスープは濃厚でなめらかな口当たりだ。",
"freq:deterioration":"医師たちは彼の容体の悪化に気づいた。",
"freq:disbelief":"彼女は信じられずに首を振った。",
"freq:discreet":"彼はその仕事について慎重に問い合わせた。",
"freq:enact":"議会は川を保護する法律を制定した。",
"freq:fiddle":"彼は面接の間、ペンをいじっていた。",
"freq:grit":"マラソンを完走するには本物の根性が要る。",
"freq:horrendous":"今朝の渋滞はひどかった。",
"freq:illegitimate":"反対派は新政府を非合法だと呼んだ。",
"freq:illicit":"その一味は象牙の不法取引で数百万を稼いだ。",
"freq:incompetence":"その遅れはまったくの無能が原因だった。",
"freq:insomnia":"ストレスは不眠症のよくある原因だ。",
"freq:lunatic":"霧の中をあんなに速く運転するのは正気でない人だけだ。",
"freq:lyrical":"その小説は叙情的な散文で書かれている。",
"freq:manifestation":"その暴動は世間の怒りの表れだった。",
"freq:migrate":"その鳥は毎年秋に南へ渡る。",
"freq:miraculous":"その患者は奇跡的な回復を遂げた。",
"freq:mundane":"彼は平凡な仕事から逃れることを夢見た。",
"freq:posterior":"けがは頭蓋骨の後部だった。",
"freq:repository":"その図書館は希少な写本の宝庫だ。",
"freq:rumble":"遠くで雷がゴロゴロ鳴った。",
"freq:saloon":"カウボーイたちは町の酒場に集まった。",
"freq:sanction":"国連はその国に経済制裁を科した。",
"freq:stale":"そのパンは一晩で古くなっていた。",
"freq:sterile":"その器具は無菌の状態に保たなければならない。",
"freq:stringent":"その工場は厳しい安全基準を満たさなければならない。",
"freq:torrent":"雨でその小川は激流になった。",
"freq:unjust":"労働者たちは不当な解雇に抗議した。",
"freq:wager":"彼は自分の馬が勝つことに賭けた。",
"freq:annexation":"その地域の併合は国外で非難された。",
"freq:ascent":"登山者たちは夜明けに登り始めた。",
"freq:bigotry":"彼女は生涯、人種差別と偏見と闘ってきた。",
"freq:brute":"彼らは力ずくでドアを開けた。",
"freq:camouflage":"兵士たちは森の中で迷彩服を着ていた。",
"freq:compliant":"当社の製品はすべて安全に関する法律に準拠している。",
"freq:continuum":"その問題についての意見は連続的に分布している。",
"freq:devoid":"その風景には木がまったくなかった。",
"freq:disparity":"その2つの集団の間には賃金の大きな格差がある。",
"freq:facade":"陽気なうわべの裏で、彼はひどく不幸だった。",
"freq:haze":"その都市は煙のもやに覆われていた。",
"freq:hitch":"式は何の支障もなく進んだ。",
"freq:incarnation":"彼女は親切の化身のように見えた。",
"freq:inverse":"価格と需要の間には逆の関係がある。",
"freq:lavish":"彼らはその取引を祝って豪華なパーティーを開いた。",
"freq:livelihood":"漁業は村人たちの主な生計の手段だ。",
"freq:miscellaneous":"その箱には種々雑多な道具や針金が入っていた。",
"freq:misguided":"それは助けようという見当違いの試みだった。",
"freq:override":"議会は大統領の拒否権を覆すことを可決した。",
"freq:paranoia":"その独裁者の被害妄想は年とともに悪化した。",
"freq:plurality":"彼女は相対多数の票を得たが、過半数ではなかった。",
"freq:psyche":"その戦争は国民の精神に深い傷を残した。",
"freq:reluctance":"彼はその件について話すことをひどく渋った。",
"freq:replication":"その実験の再現は同じ結果を生んだ。",
"freq:sediment":"湖底に堆積物の層が積み重なった。",
"freq:solitude":"彼女は山の中で一人でいることを楽しむ。",
"freq:stronghold":"北部は与党の拠点だ。",
"freq:therein":"彼は誰でも信用した。そこに彼の誤りがあった。",
"freq:turret":"その城は四隅に小塔がある。",
"freq:ubiquitous":"スマートフォンは日常生活の至るところにあるものになった。",
"freq:unconventional":"彼女は型にはまらない教え方をする。",
"freq:unnoticed":"その誤りは数か月間気づかれなかった。",
"freq:visionary":"彼は時代に先んじた、先見の明のある指導者だった。",
"freq:adultery":"国によっては不倫は今も犯罪だ。",
"freq:agile":"サルは機敏に木に登る。",
"freq:artifact":"その博物館は古代エジプトの遺物を展示している。",
"freq:austerity":"政府は債務を減らすために緊縮策を導入した。",
"freq:bouquet":"彼女は白いバラの花束を持っていた。",
"freq:candidacy":"彼女は市長選への立候補を表明した。",
"freq:commonplace":"電気自動車は今やその都市でありふれたものだ。",
"freq:constrained":"その事業は少ない予算に制約された。",
"freq:contemplate":"彼は田舎への引っ越しを考えている。",
"freq:crook":"その会社は悪党の一団によって経営されていた。",
"freq:depict":"その絵は海戦を描いている。",
"freq:dormant":"その火山は何世紀も活動を休止している。",
"freq:emulate":"多くの若い選手はあこがれの人を見習おうとする。",
"freq:evasion":"彼は脱税で投獄された。",
"freq:eviction":"その一家は集合住宅からの立ち退きに直面している。",
"freq:expulsion":"その学生は不正行為で退学処分に直面した。",
"freq:filth":"通りは汚物にまみれていた。",
"freq:foliage":"その家は茂った葉に隠れていた。",
"freq:foreclosure":"数千人が差し押さえで家を失った。",
"freq:hurdle":"その法案は議会で最初の障害を乗り越えた。",
"freq:indefinite":"労働者たちは無期限のストライキを始めた。",
"freq:insightful":"彼女は貧困について洞察に満ちた記事を書いた。",
"freq:irrespective":"その規則は年齢に関係なく全員に適用される。",
"freq:moderator":"司会者は各候補者に2つずつ質問した。",
"freq:monstrous":"裁判所はそれを極悪な犯罪と呼んだ。",
"freq:novice":"その講座はまったくの初心者向けに作られている。",
"freq:parity":"女性は今も賃金の平等を求めて闘っている。",
"freq:populous":"そこは国内で最も人口の多い州だ。",
"freq:reliant":"その島は観光に大きく依存している。",
"freq:reputable":"必ず評判のよい業者から買いなさい。",
"freq:ripple":"その知らせは金融市場に波紋を広げた。",
"freq:solemn":"その式典は厳粛な行事だった。",
"freq:substantive":"その会談は実質的な進展を生まなかった。",
"freq:unleash":"その決定は抗議の波を引き起こした。",
"freq:vitality":"その都市は活気と活力に満ちている。",
"freq:abyss":"その国は経済の深淵の縁に立っていた。",
"freq:accession":"その国の連合への加盟には10年かかった。",
"freq:arson":"その火事は放火として扱われている。",
"freq:bourgeois":"彼は両親の中産階級的な価値観をあざけった。",
"freq:bribery":"3人の役人が贈収賄の罪で起訴された。",
"freq:buzzer":"門を開けるにはブザーを押してください。",
"freq:cohort":"その研究は500人の子どもの集団を追跡した。",
"freq:culprit":"警察はまだ犯人を捜している。",
"freq:diffusion":"インターネットは新しい考えの普及を速めた。",
"freq:distrust":"その2つの共同体の間には深い不信がある。",
"freq:embark":"彼女は50歳で新しい職業に乗り出した。",
"freq:etiquette":"仕事上の礼儀作法は国によって異なる。",
"freq:extravagant":"彼はぜいたくな暮らしぶりを批判された。",
"freq:heartfelt":"彼女は被害者に心からの謝罪を述べた。",
"freq:hypocrite":"彼は大臣を偽善者と呼んだ。",
"freq:leftover":"私たちは残りのご飯を昼食に食べた。",
"freq:mammoth":"がれきの撤去は巨大な仕事だった。",
"freq:motif":"喪失は彼女の小説に繰り返し現れる主題だ。",
"freq:ominous":"不吉な黒い雲が海の上に集まった。",
"freq:peril":"船員たちは嵐の中で大きな危険に直面した。",
"freq:precaution":"予防措置として、学校は閉鎖された。",
"freq:principally":"その病気は主に高齢者がかかる。",
"freq:professionalism":"看護師たちは職業意識の高さを称賛された。",
"freq:rampage":"試合の後、ファンが暴れ回った。",
"freq:recharge":"海辺での1週間が彼の元気を取り戻す助けになった。",
"freq:scrape":"彼は長靴の泥をこすり落とした。",
"freq:semantic":"その論争は主に言葉の意味をめぐるものだ。",
"freq:skepticism":"その主張は専門家から懐疑的に受け止められた。",
"freq:startling":"その報告書は驚くべき結論に達した。",
"freq:strife":"その国は内乱で引き裂かれた。",
"freq:thrift":"両親は彼女に倹約の大切さを教えた。",
"freq:turnaround":"その会社は利益の驚くべき好転を成し遂げた。",
"freq:anonymity":"その目撃者は匿名を条件に話した。",
"freq:appropriation":"議会は新しい学校のための予算の充当を承認した。",
"freq:barrage":"大臣は質問の集中砲火を浴びた。",
"freq:brilliance":"批評家たちは彼女の演技のすばらしさを称賛した。",
"freq:cocky":"その若い選手は初勝利の後、うぬぼれていた。",
"freq:conglomerate":"その新聞はメディアの複合企業が所有している。",
"freq:counterfeit":"彼は偽造紙幣を持っているところを捕まった。",
"freq:edgy":"彼は面接の前、いらいらしていた。",
"freq:enormously":"その都市は10年で非常に大きく変わった。",
"freq:evade":"彼は話題を変えてその質問をかわした。",
"freq:futile":"その船を救おうとする試みはすべて無駄だった。",
"freq:gritty":"その映画は刑務所の生活を描いた生々しいドラマだ。",
"freq:hinder":"大雨が救助活動を妨げた。",
"freq:inhibition":"一杯飲むと彼はためらいをなくした。",
"freq:intermittent":"午後は断続的な雨が予想される。",
"freq:intimidation":"有権者は投票所で脅しを受けた。",
"freq:iteration":"その電話の最新版はより良いカメラを備えている。",
"freq:maxim":"「少ないほうが豊かだ」は彼の好きな格言だ。",
"freq:melancholy":"彼の声にはどこか物悲しい響きがあった。",
"freq:meteorological":"気象庁は暴風警報を出した。",
"freq:negligible":"一般の人々への危険はごくわずかだ。",
"freq:obligatory":"その会議への出席は義務だ。",
"freq:outpost":"そのとりでは帝国の最後の前哨基地だった。",
"freq:overflow":"嵐の後、川は土手からあふれた。",
"freq:panorama":"その塔からは市全体の全景が見渡せる。",
"freq:pervasive":"警察には汚職がまん延している。",
"freq:predatory":"その銀行は人を食い物にする貸し付けで告発された。",
"freq:preface":"著者は序文で自分のねらいを説明している。",
"freq:punitive":"裁判所はその会社に懲罰的損害賠償を命じた。",
"freq:shameless":"それは票を得ようとする恥知らずな試みだった。",
"freq:skeletal":"その病院は夜間、最小限の職員で運営されている。",
"freq:sprinkle":"彼女はケーキに砂糖を振りかけた。",
"freq:stamina":"マラソン走者には大きな持久力が必要だ。",
"freq:stimuli":"赤ん坊は生まれたときから視覚的な刺激に反応する。",
"freq:utopia":"その作家は戦争のない理想郷を思い描いた。",
"freq:abrupt":"その会議は突然終わった。",
"freq:acronym":"NATOは世界中で知られた頭字語だ。",
"freq:affidavit":"その証人は裁判所に出す宣誓供述書に署名した。",
"freq:antics":"子どもたちは道化師のおどけたしぐさに笑った。",
"freq:defamation":"その俳優は雑誌を名誉毀損で訴えた。",
"freq:divergent":"その2人の専門家は異なる見解を持っている。",
"freq:downright":"彼の振る舞いはまったく無礼だった。",
"freq:electrode":"医師たちは彼の胸に電極を付けた。",
"freq:exemplary":"その兵士は模範的な行動を称賛された。",
"freq:expansive":"その家からは谷の広大な眺めが見える。",
"freq:hysteria":"そのうわさは町に集団的な興奮状態を引き起こした。",
"freq:imperialism":"その本はヨーロッパの帝国主義の歴史を考察している。",
"freq:imprint":"その光景は彼女の記憶に刻み込まれた。",
"freq:incremental":"その改革は少しずつの変化しかもたらさなかった。",
"freq:infancy":"その技術はまだ初期の段階にある。",
"freq:manslaughter":"その運転者は過失致死で有罪になった。",
"freq:misdemeanor":"彼は軽い犯罪で罰金を科された。",
"freq:obnoxious":"感じの悪い乗客が乗務員に怒鳴った。",
"freq:rake":"彼は落ち葉を熊手でかき集めて山にした。",
"freq:resent":"彼女は子ども扱いされることに腹を立てている。",
"freq:retribution":"被害者の家族は報いを求めた。",
"freq:rhetorical":"彼は答えを求めない修辞的な質問をしていただけだ。",
"freq:rightful":"その土地は正当な所有者に返された。",
"freq:spawn":"その番組は何十もの模倣を生んだ。",
"freq:suffrage":"女性は長い闘いの末に参政権を勝ち取った。",
"freq:surrogate":"その教師は少年の親代わりになった。",
"freq:synopsis":"プログラムにはそのオペラのあらすじが載っている。",
"freq:treatise":"彼は光の性質についての論文を書いた。",
"freq:variability":"気候の変動が農業をより難しくしている。",
"freq:wooded":"その家は樹木の茂った丘の斜面に建っている。",
"freq:adhesive":"タイルを固定するには強力な接着剤を使いなさい。",
"freq:affluent":"彼らは首都の裕福な郊外に住んでいる。",
"freq:annals":"その勝利はその競技の歴史に名高い。",
"freq:antitrust":"その合併は独占禁止法によって阻止された。",
"freq:arid":"そのような乾燥した気候で生きられる植物はほとんどない。",
"freq:bandit":"旅人たちは丘で山賊に襲われた。",
"freq:beneficiary":"その改革で最も恩恵を受けるのは子どもたちだ。",
"freq:bipartisan":"その法案は超党派の支持で可決された。",
"freq:buildup":"衛星が国境での軍備増強を探知した。",
"freq:colossal":"その事業は途方もない金の無駄だった。",
"freq:conserve":"干ばつの間は水を節約しなければならない。",
"freq:constellation":"オリオン座は見つけやすい星座だ。",
"freq:contour":"その地図は土地の等高線を示している。",
"freq:curfew":"暴動の後、軍は夜間外出禁止令を出した。",
"freq:delusion":"彼は誰もが自分を称賛しているという思い違いをしている。",
"freq:depreciation":"通貨の下落は輸入価格を押し上げた。",
"freq:endemic":"マラリアはその地域の風土病だ。",
"freq:futuristic":"その車は未来的なデザインをしている。",
"freq:hallmark":"細部への気配りが彼女の仕事の特徴だ。",
"freq:illiterate":"その村の成人の3分の1は読み書きができない。",
"freq:inclination":"彼女には政界に入る意向がない。",
"freq:inward":"そのドアは内側に開く。",
"freq:legality":"弁護士たちはその捜索の合法性に疑問を呈した。",
"freq:loosen":"政府は外国貿易の規制を緩めた。",
"freq:murderous":"その政権は残忍な政策で知られていた。",
"freq:notoriously":"その試験は難しいことで悪名高い。",
"freq:opaque":"その会社の会計は意図的にわかりにくくしてある。",
"freq:otter":"カワウソが川岸の近くを泳いでいた。",
"freq:populist":"その大衆迎合的な指導者はすべての税を下げると約束した。",
"freq:porous":"その国境は抜け穴だらけで警備が難しい。",
"freq:rein":"新しい長は支出を厳しく統制した。",
"freq:rustic":"彼らは湖畔の素朴な田舎家に泊まった。",
"freq:saturation":"市場は飽和点に達した。",
"freq:sizable":"彼はおばからかなりの財産を相続した。",
"freq:spartan":"修道士たちは質素な環境で暮らしている。",
"freq:subdued":"パーティーの雰囲気は沈んでいた。",
"freq:triumphant":"そのチームは意気揚々と帰郷した。",
"freq:undisclosed":"その会社は非公表の金額で売却された。",
"freq:wrench":"彼は両手でドアをこじ開けた。",
"freq:wretched":"難民たちはみじめな環境で暮らしていた。",
"freq:adolescence":"思春期に結んだ友情はしばしば一生続く。",
"freq:analogous":"心臓はポンプに似ている。",
"freq:archaic":"その法律は古風な言葉で書かれている。",
"freq:attribution":"その絵をレンブラントの作とすることには異論がある。",
"freq:censor":"政府はその抗議についての報道を検閲した。",
"freq:centennial":"その町は100周年の祝賀行事の準備をしている。",
"freq:colonization":"その島の植民地化は1620年に始まった。",
"freq:cosmopolitan":"ロンドンは真に国際的な都市だ。",
"freq:crippling":"その国は壊滅的な債務に直面している。",
"freq:deductible":"その慈善団体への寄付は税控除の対象になる。",
"freq:equitable":"彼らは利益のより公平な分配を求めている。",
"freq:exert":"親は子どもに強い影響を及ぼす。",
"freq:feudal":"その国は1870年まで封建制度を保った。",
"freq:fodder":"その不祥事は新聞に格好の材料を与えた。",
"freq:fumble":"彼は鍵を探してポケットの中を手探りした。",
"freq:gourmet":"そのホテルは高級レストランで有名だ。",
"freq:hefty":"その会社は多額の罰金を科された。",
"freq:incarceration":"その報告書は若い男性の大量投獄を批判している。",
"freq:intrigue":"その奇妙な手紙は探偵の興味をそそった。",
"freq:mastermind":"警察はその強盗の首謀者を逮捕した。",
"freq:noticeably":"天候は目に見えて暖かくなった。",
"freq:overrun":"その古い納屋にはネズミがはびこっていた。",
"freq:pasture":"牛が牧草地で草を食べていた。",
"freq:pathological":"彼は病的なうそつきだ。",
"freq:plentiful":"その湖には魚が豊富にいる。",
"freq:rarity":"国のこの地域では雪は珍しい。",
"freq:satirical":"彼は風刺雑誌に寄稿している。",
"freq:slump":"住宅市場は不振に陥っている。",
"freq:sparse":"その地域の人口はまばらだ。",
"freq:supplementary":"教師は補足の資料を配った。",
"freq:temperament":"彼女は穏やかで辛抱強い気質だ。",
"freq:torment":"彼は何年も罪悪感に苦しめられた。",
"freq:understatement":"彼が怒っていたと言うのは控えめな表現だ。",
"freq:undesirable":"その薬には望ましくない副作用がいくつかある。",
"freq:unification":"その2つの国の統一には10年かかった。",
"freq:wildfire":"その山火事は数百軒の家を焼いた。",
"freq:afar":"観光客は滝を見に遠くからやって来る。",
"freq:awaken":"その旅は彼女の歴史への関心を目覚めさせた。",
"freq:conjecture":"火事の原因はまだ推測の域を出ない。",
"freq:conspicuous":"彼は真っ赤なコートを着て目立っている気がした。",
"freq:crackdown":"警察は飲酒運転の取り締まりを始めた。",
"freq:craze":"そのダンスの大流行は国中に広がった。",
"freq:escalate":"その争いは全面的なストライキへと激化した。",
"freq:fiercely":"その2社は顧客を求めて激しく競争している。",
"freq:genealogy":"彼女は一家の家系をたどった。",
"freq:heresy":"彼は1600年に異端の罪で火あぶりにされた。",
"freq:hostess":"女主人は玄関で客を一人ひとり迎えた。",
"freq:ignite":"火花が漏れたガスに引火した。",
"freq:illumination":"明かりは1本のろうそくだけだった。",
"freq:impoverished":"その慈善団体は貧困にあえぐ農村地域で活動している。",
"freq:ingenious":"彼女はその問題に独創的な解決策を見つけた。",
"freq:moor":"私たちは古い橋のそばに船を係留した。",
"freq:ostensibly":"彼は表向きは健康上の理由で辞めた。",
"freq:outspoken":"彼女は政府を遠慮なく批判する人だ。",
"freq:palate":"そのワインは最も洗練された味覚の持ち主さえ喜ばせた。",
"freq:pedestal":"その像は大理石の台座の上に立っている。",
"freq:pedigree":"その馬は優れた血統を持っている。",
"freq:phony":"彼は警察に偽の住所を教えた。",
"freq:pinpoint":"専門家は墜落の原因を正確に特定できなかった。",
"freq:prowess":"彼は狩人としての優れた腕前で有名だ。",
"freq:repent":"彼は死ぬ前に自分の罪を悔い改めた。",
"freq:revert":"休暇の後、彼は昔の習慣に戻った。",
"freq:senseless":"それは無意味な暴力行為だった。",
"freq:slay":"騎士は竜を倒しに出発した。",
"freq:unavoidable":"悪天候ではある程度の遅れは避けられない。",
"freq:unilateral":"その国は一方的な停戦を発表した。",
"freq:acidic":"ここの土壌は小麦には酸性が強すぎる。",
"freq:adherence":"規則の厳格な遵守が求められる。",
"freq:amnesia":"彼は事故の後、記憶喪失になった。",
"freq:bearded":"背が高く、ひげを生やした男がドアを開けた。",
"freq:bombardment":"その都市は数週間の激しい砲撃を受けた。",
"freq:borderline":"彼女の試験結果は合否すれすれの合格だった。",
"freq:capitalize":"その会社は自転車の需要増加に乗じた。",
"freq:charisma":"その指導者には人を引きつける大きな魅力がある。",
"freq:cognition":"その薬は記憶と認知に影響するかもしれない。",
"freq:devastation":"洪水は壊滅的な被害の跡を残した。",
"freq:devout":"彼女は信心深いカトリックの家庭の出身だ。",
"freq:disproportionate":"その罰は犯罪に対して不釣り合いに重かった。",
"freq:divisive":"移民は選挙で対立を生む問題だ。",
"freq:embryo":"胚は最初の数週間で急速に発達する。",
"freq:erratic":"彼の運転はますます不安定になった。",
"freq:foreseeable":"当面、価格は高いままだろう。",
"freq:hindsight":"後から考えれば、私たちは待つべきだった。",
"freq:indifference":"世間はその知らせに無関心な反応を示した。",
"freq:inflict":"その嵐は町に深刻な損害を与えた。",
"freq:inhibit":"高い税は投資を妨げる。",
"freq:intoxicated":"彼は酒に酔って運転したとして逮捕された。",
"freq:involuntary":"彼女は思わず驚きの声を上げた。",
"freq:libel":"その歌手は新聞を名誉毀損で訴えた。",
"freq:lofty":"その党は高尚な理想を掲げた。",
"freq:loom":"金融危機が迫っている。",
"freq:ludicrous":"天気のせいにするのはばかげている。",
"freq:malice":"彼女はまったくの悪意から行動した。",
"freq:nemesis":"王者はついに宿敵と対戦した。",
"freq:ornamental":"その庭には装飾用の池がある。",
"freq:populace":"民衆は新しい王を歓迎した。",
"freq:propagation":"その団体は自らの信念の普及に専念している。",
"freq:radiator":"彼女はぬれたコートを暖房器の上に掛けた。",
"freq:regal":"彼女は王者らしい態度で部屋に入った。",
"freq:ridicule":"彼の考えはあざけりで迎えられた。",
"freq:sinful":"その説教師は罪深い快楽に警告を発した。",
"freq:slander":"彼は競争相手を中傷で訴えた。",
"freq:sleek":"その会社は流線形の新しいスポーツカーを発表した。",
"freq:socioeconomic":"健康は社会経済的な地位と密接に結びついている。",
"freq:subpoena":"裁判所はその書類の提出を求める召喚状を出した。",
"freq:undeniable":"彼女の才能は否定できない。",
"freq:vigilant":"旅行者は常に警戒を怠らないようにすべきだ。",
"freq:additive":"そのジュースは人工添加物を含んでいない。",
"freq:adept":"彼女は難しい客の扱いに熟達している。",
"freq:advantageous":"その取引は双方にとって有利だ。",
"freq:afloat":"その融資のおかげで会社は倒産せずに済んだ。",
"freq:agility":"そのゴールキーパーは機敏さで知られている。",
"freq:alteration":"その計画は変更なしに承認された。",
"freq:archipelago":"その群島は200を超える島から成る。",
"freq:causal":"その2つの出来事の間に因果関係は見つからなかった。",
"freq:citadel":"その城塞は旧市街を見下ろしている。",
"freq:colonialism":"その国は今も植民地主義の傷跡を負っている。",
"freq:deficient":"その子どもたちの食事はビタミンが不足していた。",
"freq:degenerate":"その討論は怒鳴り合いに成り下がった。",
"freq:deterrent":"重い罰金は速度違反の抑止力として働く。",
"freq:disdain":"彼女はその安い贈り物を軽蔑の目で見た。",
"freq:eerie":"不気味な静けさが村を包んだ。",
"freq:enraged":"激怒したファンが競技場に瓶を投げ込んだ。",
"freq:exponential":"その会社は売上の急激な伸びを経験した。",
"freq:farce":"その裁判はまったくの茶番だった。",
"freq:fling":"コートを床に放り投げてはいけない。",
"freq:frantic":"救助隊は生存者を必死に捜した。",
"freq:grudge":"彼は何年も彼女に恨みを抱いている。",
"freq:hectic":"彼女は外科医として慌ただしい生活を送っている。",
"freq:informant":"警察は一味の内部の情報提供者に頼った。",
"freq:intrusive":"記者たちは彼女の家族について立ち入った質問をした。",
"freq:malignant":"その腫瘍は悪性だとわかった。",
"freq:maverick":"彼は党の規則を無視する一匹狼だった。",
"freq:molten":"溶けた岩が火山から流れ出た。",
"freq:negligent":"裁判所はその運転者に過失があると認めた。",
"freq:optimize":"そのソフトはメモリーの使い方を最適化する。",
"freq:precedence":"安全は速さより優先される。",
"freq:pristine":"その島には何マイルも続く手つかずの浜辺がある。",
"freq:prognosis":"医師たちは彼に良い見通しを伝えた。",
"freq:retrieval":"そのシステムはデータの素早い検索を可能にする。",
"freq:thematic":"その展覧会は主題別に構成されている。",
"freq:unbiased":"私たちには部外者からの偏りのない意見が必要だ。",
"freq:uncanny":"彼女には天気を予測する不思議な能力がある。",
"freq:underdog":"群衆は勝ち目の薄い側を応援した。",
"freq:vandalism":"その学校は度重なる破壊行為を受けた。",
"freq:wrongful":"彼女は雇用主を不当解雇で訴えた。",
"freq:antagonist":"主人公はついに敵役を倒す。",
"freq:approximation":"その数字は大まかな概算にすぎない。",
"freq:baroque":"その教会はバロック建築の優れた例だ。",
"freq:characterize":"その時代は急速な変化に特徴づけられた。",
"freq:ethos":"その学校には勤勉を重んじる強い気風がある。",
"freq:eyewitness":"目撃者がその衝突の様子を記者に語った。",
"freq:forfeit":"彼は上訴する権利を失った。",
"freq:hinge":"そのドアはさびたちょうつがいで揺れた。",
"freq:manifold":"運動の利点は多種多様だ。",
"freq:measurable":"その政策は目に見える犯罪の減少をもたらした。",
"freq:meek":"彼は決して不平を言わないおとなしい男だった。",
"freq:mellow":"そのワインは濃厚でまろやかな味わいだ。",
"freq:narration":"その映画は主人公による語りを使っている。",
"freq:oblivion":"その作家の名は忘れ去られた。",
"freq:perish":"その船が沈んだとき、数百人が命を落とした。",
"freq:perpetrator":"その襲撃の犯人はついに捕まらなかった。",
"freq:philanthropy":"彼は慈善活動を通じて財産を寄付した。",
"freq:primal":"恐怖は私たちの最も根源的な感情の一つだ。",
"freq:receptive":"その部長は新しい考えを受け入れる姿勢があった。",
"freq:redundancy":"その工場は200人の人員削減を発表した。",
"freq:relapse":"彼女は退院した後に病気が再発した。",
"freq:relish":"彼は批判者が間違っていると証明する機会を楽しんでいる。",
"freq:rendezvous":"スパイたちは秘密の会合を取り決めた。",
"freq:reversible":"その薬の作用は完全に元に戻せる。",
"freq:shred":"その事務員は機密書類を裁断した。",
"freq:simplistic":"その記事は危機について単純すぎる見方を示している。",
"freq:supervisory":"彼女は監督職に昇進した。",
"freq:treacherous":"氷のせいでその山道は危険になった。",
"freq:untold":"その戦争は計り知れない苦しみをもたらした。",
"freq:versatility":"その俳優は多才さで称賛されている。",
"freq:attributable":"その遅れは悪天候に起因していた。",
"freq:bastion":"その大学は自由な思想のとりでだ。",
"freq:bolster":"その勝利はチームの自信を強めた。",
"freq:cohesive":"その監督はまとまりのあるチームを作った。",
"freq:contentious":"中絶は今も論争を呼ぶ問題だ。",
"freq:denomination":"あらゆる宗派のキリスト教徒がその礼拝に出席した。",
"freq:embargo":"国連は武器の販売に禁輸措置を科した。",
"freq:embodiment":"彼女は勇気を体現した人だ。",
"freq:extremism":"政府は過激主義と闘おうとしている。",
"freq:gloom":"憂うつな気分が事務所に広がった。",
"freq:hypocritical":"正直を説いておいてうそをつくのは偽善的だ。",
"freq:incidental":"旅費とその他の付随的な費用が含まれている。",
"freq:insurgency":"軍はその反乱を鎮圧できていない。",
"freq:intimidate":"その一味は証人を脅そうとした。",
"freq:labyrinth":"旧市街は狭い通りの迷路だ。",
"freq:limbo":"その難民たちは2年間、宙ぶらりんの状態に置かれている。",
"freq:nurture":"良い教師は生徒の才能をはぐくむ。",
"freq:oblivious":"彼はその危険に気づいていなかった。",
"freq:overt":"彼らの間にあからさまな敵意はなかった。",
"freq:patriarch":"その一族の家長は90歳で亡くなった。",
"freq:perjury":"その証人は偽証罪で投獄された。",
"freq:pious":"彼女の祖母は信心深い女性だった。",
"freq:proprietor":"その宿の主人は私たちを温かく迎えた。",
"freq:seamless":"指導者の交代は円滑に行われた。",
"freq:silhouette":"水平線に船の影が見えた。",
"freq:smug":"彼は勝った後、得意げな笑みを浮かべた。",
"freq:stagnant":"経済は10年間停滞している。",
"freq:toughness":"その仕事は精神的な強さを必要とする。",
"freq:unethical":"患者の情報を売るのは非倫理的だ。",
"freq:valiant":"消防士たちはその家を救おうと勇敢に努力した。",
"freq:vigilante":"自警団が通りの巡回を始めた。",
"freq:abstraction":"正義は抽象概念だが、その影響は現実のものだ。",
"freq:adjunct":"運動はその治療の有益な補助になる。",
"freq:blasphemy":"彼は司祭たちから神への冒涜で告発された。",
"freq:bulky":"その荷物は一人で運ぶにはかさばりすぎた。",
"freq:carnage":"その爆弾は市場に大惨事を引き起こした。",
"freq:conclusive":"彼の有罪を示す決定的な証拠はない。",
"freq:conservatory":"彼女はウィーンの音楽学校でバイオリンを学んだ。",
"freq:depressive":"彼はうつ病を患っている。",
"freq:descendant":"彼は最初の入植者たちの子孫だ。",
"freq:disperse":"警察は群衆を解散させるために水を使った。",
"freq:exhaustive":"警察はその一帯を徹底的に捜索した。",
"freq:fermentation":"発酵によってブドウの果汁はワインになる。",
"freq:fiasco":"開会式は完全な大失敗だった。",
"freq:fruitful":"その2人の指導者は実りの多い話し合いをした。",
"freq:inaccessible":"その村は冬には道路で行くことができない。",
"freq:inferno":"その建物は燃えさかる火の海になった。",
"freq:omission":"彼女の名前の脱落は単純な間違いだった。",
"freq:periphery":"新しい工場が市の周辺部に建てられた。",
"freq:prelude":"その小競り合いはより大きな戦いの前触れだった。",
"freq:remnant":"その壁は古い城の名残だ。",
"freq:serenity":"彼女は夜明けの湖の静けさを愛した。",
"freq:subtly":"チーズが熟成するにつれて味は微妙に変わる。",
"freq:toxin":"その細菌は致命的な毒素を出す。",
"freq:unequal":"富は不平等に分配されている。",
"freq:unresolved":"その殺人事件は10年たっても未解決のままだ。",
"freq:writ":"裁判所はその新聞社に対して令状を出した。",
"freq:adversary":"彼は決勝で昔からの宿敵を破った。",
"freq:afflicted":"その地域は干ばつに苦しめられている。",
"freq:ascertain":"警察は事実を確かめようとしている。",
"freq:bloodshed":"さらなる流血を防ぐために話し合いが行われた。",
"freq:clinch":"終盤のゴールがそのチームの優勝を決めた。",
"freq:collide":"駅の近くで2本の列車が衝突した。",
"freq:commemoration":"その勝利を記念して像が建てられた。",
"freq:compulsive":"彼は賭け事がやめられない人だ。",
"freq:congenital":"その赤ん坊は先天性の心臓の異常を持って生まれた。",
"freq:corrective":"その会社はただちに是正措置を取った。",
"freq:crumble":"その古い壁は崩れ始めている。",
"freq:denote":"赤い旗は危険を示す。",
"freq:dossier":"その機関は容疑者ごとに関係書類を保管していた。",
"freq:eradicate":"その運動は2030年までにその病気を根絶することを目指している。",
"freq:extortion":"その一味の頭は恐喝で投獄された。",
"freq:feral":"野生化した猫は在来の鳥にとって脅威だ。",
"freq:ineligible":"彼は年齢のせいで投票する資格がなかった。",
"freq:infusion":"その会社は新たな資本の注入を必要としている。",
"freq:mediator":"国連の調停者が昨日、双方と会った。",
"freq:mirage":"約束された回復はまぼろしだとわかった。",
"freq:mockery":"その裁判は正義をあざ笑うものだった。",
"freq:occult":"彼女はオカルトに深い関心を持っている。",
"freq:ovation":"そのピアニストは総立ちの大喝采を受けた。",
"freq:perch":"カラスが柵に止まった。",
"freq:perpendicular":"その2本の通りは互いに直角だ。",
"freq:physique":"彼は水泳選手の体格をしている。",
"freq:proficient":"彼女は3つの言語に堪能だ。",
"freq:purification":"その町は新しい浄水場を建設した。",
"freq:readable":"その本はその戦争についての読みやすい記録だ。",
"freq:recourse":"彼らは裁判所に頼らずに争いを解決した。",
"freq:regimen":"医師は彼に厳しい運動の計画を課した。",
"freq:roundup":"その番組はスポーツニュースの総まとめで終わる。",
"freq:sequential":"そのファイルは順番どおりに保存されている。",
"freq:sporadic":"散発的な戦闘が夜通し続いた。",
"freq:undue":"その遅れは家族たちに過度の負担を与えた。",
"freq:wreckage":"潜水士たちはその飛行機の残骸を捜索した。",
"freq:adamant":"彼女は辞任しないと断固として言い張った。",
"freq:archival":"その映画は1930年代の記録映像を使っている。",
"freq:ardent":"彼はそのチームの熱烈な支持者だ。",
"freq:assorted":"その箱には各種取り合わせたチョコレートが入っている。",
"freq:barbarian":"その都市は野蛮人によって破壊された。",
"freq:bedrock":"信頼はどんな友情にとっても基盤だ。",
"freq:brittle":"骨は年を取るともろくなる。",
"freq:cohesion":"その危機は社会の結束を強めた。",
"freq:compel":"その法律は雇用主に保険の提供を義務づけている。",
"freq:conduit":"その港は違法な品物の経路の役目を果たした。",
"freq:constraint":"資金面の制約のせいでその事業は中止を余儀なくされた。",
"freq:defunct":"彼はかつて、今はなき新聞に寄稿していた。",
"freq:degrade":"汚染が土壌の質を劣化させた。",
"freq:diffuse":"そのランプは柔らかく広がる光を出す。",
"freq:emancipation":"彼女は女性の解放のために闘った。",
"freq:entropy":"その系はより大きなエントロピーへと向かう傾向がある。",
"freq:epitome":"彼は紳士の典型だ。",
"freq:extradition":"その容疑者はアメリカへの引き渡しに抵抗している。",
"freq:frail":"彼女の祖母は体が弱くて旅行ができない。",
"freq:fray":"数時間の遅れの後、みんなの気持ちがいら立ち始めた。",
"freq:grotesque":"その仮面は異様で恐ろしかった。",
"freq:harass":"記者たちは何週間もその家族を悩ませた。",
"freq:interchangeable":"その2つの部品は互いに交換できる。",
"freq:irreversible":"その病気は肝臓に元に戻らない損傷を与える。",
"freq:lawless":"その辺境は無法地帯だった。",
"freq:predominant":"恐怖がその都市を支配する空気だった。",
"freq:refine":"技師たちは試験のたびに設計を改良した。",
"freq:rupture":"その争いは同盟国の間に決裂をもたらした。",
"freq:scandalous":"公金の無駄づかいはけしからぬことだ。",
"freq:solace":"彼の死後、彼女は音楽に慰めを見いだした。",
"freq:splinter":"その党は対立する3つの集団に分裂した。",
"freq:tinker":"彼は古いラジオをいじるのが好きだ。",
"freq:topography":"その島の地形は農業を難しくしている。",
"freq:unintended":"その新しい法律は意図しない結果を招いた。",
"freq:unmanned":"無人航空機が国境を巡回している。",
"freq:vantage":"この見晴らしのよい地点からは湾全体が見える。",
"freq:whim":"彼は気まぐれでその車を買った。",
"freq:withhold":"その会社は仕事が終わるまで支払いを差し控えた。",
"freq:zeal":"彼女はその運動に大きな熱意をもって取り組んだ。",
"freq:abort":"操縦士は土壇場で着陸を中止した。",
"freq:abound":"そのスターの私生活についてうわさがたくさんある。",
"freq:audacity":"彼は厚かましくもさらに金を要求した。",
"freq:barbaric":"世界はその残忍な攻撃を非難した。",
"freq:coercion":"彼は強制されて署名したと主張した。",
"freq:competency":"そのテストは読む基礎的な能力を測る。",
"freq:dogma":"彼はその党の教義を受け入れることを拒んだ。",
"freq:encompass":"その課程は幅広い科目を含んでいる。",
"freq:evoke":"その音楽は彼の若い頃の記憶を呼び起こす。",
"freq:fixation":"彼は清潔さに執着している。",
"freq:flatter":"彼は機会があるたびに上司にお世辞を言う。",
"freq:formative":"彼女は人格が形成される年月をインドで過ごした。",
"freq:fret":"変えられないことをくよくよ悩んではいけない。",
"freq:gratification":"彼は人を助ける満足感のために働いている。",
"freq:gruesome":"警察は地下室で身の毛のよだつものを発見した。",
"freq:inhuman":"囚人たちは非人間的な環境に置かれていた。",
"freq:latent":"その病気は何年も潜伏したままでいることがある。",
"freq:limitless":"インターネットは無限の情報を提供する。",
"freq:literate":"1900年には人口の半分しか読み書きができなかった。",
"freq:lucid":"彼女はその理論を明快に説明した。",
"freq:merciful":"裁判官は慈悲深く、刑を軽くした。",
"freq:midwife":"助産師が自宅での出産を手伝った。",
"freq:misinformation":"そのワクチンについての誤った情報がネットで急速に広まった。",
"freq:mobilization":"大統領は軍の動員を命じた。",
"freq:monologue":"その劇は長い独白で始まる。",
"freq:mutiny":"船長は反乱で殺された。",
"freq:parasitic":"その病気は寄生虫によって起こる。",
"freq:pendulum":"世論の振り子は元へ振れ戻った。",
"freq:poignant":"その映画は胸を打つ別れの場面で終わる。",
"freq:potency":"その薬は暑い所に保管すると効力を失う。",
"freq:precarious":"多くの若い労働者は不安定な立場にある。",
"freq:pretext":"彼は気分が悪いという口実で早退した。",
"freq:quaint":"彼らは海辺の古風で趣のある村に泊まった。",
"freq:reassurance":"患者は手術の前に安心させてもらう必要がある。",
"freq:redistribution":"その党は富の再分配を支持している。",
"freq:restrain":"警備員は怒ったファンを制止しなければならなかった。",
"freq:secession":"その地域は国からの分離独立に賛成票を投じた。",
"freq:sectarian":"宗派間の暴力で数百人が死亡した。",
"freq:seminal":"彼は経済学について影響力の大きい独創的な著作を書いた。",
"freq:snag":"その計画は土壇場で思わぬ障害にぶつかった。",
"freq:sophistication":"その攻撃は高度な精巧さを示していた。",
"freq:tweak":"技師たちは燃料を節約するために設計を微調整した。",
"freq:unison":"群衆は声をそろえて彼の名を叫んだ。",
"freq:unthinkable":"そのような敗北は1年前には考えられなかった。",
"freq:uplift":"その勝利は国中の気持ちを高揚させた。",
"freq:venerable":"その尊敬すべき教授は50年間教えた。",
"freq:angst":"その小説は現代の若者の苦悩をとらえている。",
"freq:apathy":"有権者の無関心が低い投票率につながった。",
"freq:artisan":"そのパンは地元の職人が作っている。",
"freq:bane":"交通騒音は都会生活の悩みの種だ。",
"freq:concerto":"彼女はモーツァルトのバイオリン協奏曲を演奏した。",
"freq:contraception":"その診療所は避妊について無料で助言している。",
"freq:crouch":"少年は壁の後ろにしゃがんだ。",
"freq:detriment":"彼は健康を損なうほど長時間働いた。",
"freq:dismal":"そのチームはお粗末な試合をした。",
"freq:dismay":"彼女がろうばいしたことに、列車はすでに出ていた。",
"freq:disparate":"その集まりはまったく異なる経歴の人々を結びつける。",
"freq:dissemination":"インターネットはニュースの流布を速めた。",
"freq:domestically":"その食料の大半は国内で生産されている。",
"freq:expel":"2人の学生が不正行為で退学させられた。",
"freq:frown":"先生は騒がしい生徒たちに顔をしかめた。",
"freq:hamper":"霧が行方不明の船の捜索を妨げた。",
"freq:heroism":"その消防士は英雄的な行為をたたえられた。",
"freq:hierarchical":"軍隊は厳格な階層組織だ。",
"freq:infidelity":"その結婚は彼の不貞のせいで終わった。",
"freq:inventive":"彼女はめったにレシピを使わない創意に富んだ料理人だ。",
"freq:knack":"彼には人を笑わせる才覚がある。",
"freq:liquidation":"その会社は昨年、清算に入った。",
"freq:mercenary":"王は都市を守るために傭兵を雇った。",
"freq:morbid":"彼は殺人事件に病的な関心を持っている。",
"freq:ordinarily":"通常、その行程には2時間かかる。",
"freq:orthodoxy":"彼は当時の経済学の正統的な考え方に挑んだ。",
"freq:paternal":"私の父方の祖父は漁師だった。",
"freq:polarization":"その論争は社会の二極化を深めた。",
"freq:projectile":"暴徒たちは石などを投げつけた。",
"freq:protracted":"双方は長引いた交渉の末に合意に達した。",
"freq:realist":"彼女は奇跡を期待しない現実主義者だ。",
"freq:remuneration":"取締役たちの報酬は10パーセント増えた。",
"freq:revoke":"裁判所は彼の運転免許を取り消した。",
"freq:secretive":"その会社は自社の計画について非常に秘密主義だ。",
"freq:undisputed":"彼女は誰もが認めるその集団の指導者だ。",
"freq:visceral":"その映画は本能的な恐怖の反応を引き起こす。",
"freq:wrongdoing":"大臣はいかなる不正行為も否定した。",
"freq:aggregation":"そのサイトは多くの情報源からのニュースの集約に頼っている。",
"freq:antidote":"その毒に対する解毒剤は知られていない。",
"freq:attest":"多くの証人が彼の正直さを証言できる。",
"freq:auditory":"その病気は聴神経を損なう。",
"freq:avenge":"彼は兄の死の復讐をすると誓った。",
"freq:aversion":"彼女は暴力に強い嫌悪を抱いている。",
"freq:brood":"彼は座って自分の失敗をくよくよ考えていた。",
"freq:cessation":"双方は戦闘の停止に合意した。",
"freq:commend":"その警官は勇敢さを称賛された。",
"freq:emigration":"貧困がアメリカへの大量移住を招いた。",
"freq:emit":"その工場は有毒ガスを排出している。",
"freq:extant":"その本は3部しか現存していない。",
"freq:fathom":"彼女がなぜ去ったのか、私には理解できない。",
"freq:fictitious":"彼は架空の名義でその口座を開いた。",
"freq:firsthand":"彼女にはその戦争を直接体験した経験がある。",
"freq:hedgehog":"ハリネズミが落ち葉の下で眠っていた。",
"freq:heinous":"彼は凶悪な犯罪で投獄された。",
"freq:impeccable":"彼女の礼儀作法は非の打ちどころがない。",
"freq:infiltrate":"工作員がその犯罪組織に潜入した。",
"freq:intolerant":"彼はどんな批判にも不寛容だ。",
"freq:lament":"年配の住民は古い市場がなくなったことを嘆いている。",
"freq:malpractice":"その外科医は医療過誤で訴えられた。",
"freq:manipulative":"彼は友人を利用する、人を巧みに操る男だ。",
"freq:payoff":"何年もの訓練の見返りは金メダルだった。",
"freq:pesticide":"その農場は農薬を使わずに果物を育てている。",
"freq:prodigy":"そのピアニストは神童だった。",
"freq:reptile":"ヘビやトカゲは、は虫類だ。",
"freq:sluggish":"今年の経済成長は鈍い。",
"freq:slum":"彼は市のはずれのスラムで育った。",
"freq:snare":"その猟師はウサギ用のわなを仕掛けた。",
"freq:strata":"その崖は異なる時代の岩の地層を見せている。",
"freq:submissive":"その犬はおとなしく、従順だった。",
"freq:timid":"その内気な子は母親の後ろに隠れた。",
"freq:trickle":"水が壁をちょろちょろ伝い落ちた。",
"freq:ultimatum":"組合は会社に最後通告を突きつけた。",
"freq:uninterrupted":"彼女には途切れない8時間の睡眠が必要だ。",
"freq:affirmation":"その評決は彼女の無実を確認するものだった。",
"freq:ascend":"登山者たちはその山の北壁を登った。",
"freq:bittersweet":"その学校を去るのは、うれしくも悲しい瞬間だった。",
"freq:blight":"失業はその町を荒廃させている。",
"freq:cinematography":"その映画は撮影技術で賞を取った。",
"freq:conducive":"静かな部屋は勉強の助けになる。",
"freq:conscientious":"彼女は何でも2度確かめる念入りな働き手だ。",
"freq:consensual":"その決定は合意に基づく形で下された。",
"freq:deceit":"彼の経歴はうそと欺きの上に築かれていた。",
"freq:denounce":"その司教は暴力の行使を公然と非難した。",
"freq:derogatory":"彼は競争相手について軽蔑的な発言をした。",
"freq:dismantle":"作業員たちは古い橋を解体した。",
"freq:enigma":"その石の起源は謎のままだ。",
"freq:euphoria":"その勝利の後、高揚した気分が広がった。",
"freq:firewall":"その会社はデータを守るためにファイアウォールを導入した。",
"freq:forceful":"彼女は改革の必要性を力強く論じた。",
"freq:forte":"料理は私の得意分野ではない。",
"freq:insidious":"その病気は知らぬ間に進行し、発見が難しい。",
"freq:jargon":"その報告書は法律の専門用語だらけだ。",
"freq:leakage":"石油の漏れが湾を汚染した。",
"freq:logistical":"その催しは段取りの面で深刻な問題を生んだ。",
"freq:loophole":"その会社は税法の抜け穴を利用した。",
"freq:luminous":"その腕時計は針が光る。",
"freq:malnutrition":"その野営地の多くの子どもが栄養失調に苦しんでいる。",
"freq:meticulous":"その計画は細心の注意を払って準備された。",
"freq:modesty":"彼女は謙遜してその称賛を受けた。",
"freq:nigh":"戦争の終わりは近かった。",
"freq:nocturnal":"フクロウは夜行性の鳥だ。",
"freq:overlay":"その地図には格子が重ねられている。",
"freq:patriarchal":"彼女は家父長制の社会で育った。",
"freq:pitiful":"その犬は哀れな状態だった。",
"freq:plethora":"その店はあり余るほどの選択肢を用意している。",
"freq:prerequisite":"その仕事には学位が前提条件だ。",
"freq:recount":"彼女は自分の冒険を子どもたちに詳しく話した。",
"freq:recurrent":"彼は繰り返し起こる頭痛に悩まされている。",
"freq:requisite":"彼女にはその職に必要な経験が欠けている。",
"freq:secluded":"彼らは崖の向こうに人目につかない浜辺を見つけた。",
"freq:seduce":"買い物客は安い価格に誘惑される。",
"freq:shun":"彼は不祥事の後、世間の注目を避けた。",
"freq:upkeep":"その城の維持には年に数百万かかる。",
"freq:vigil":"数百人が犠牲者のために徹夜の祈りをささげた。",
"freq:whirlwind":"その2人は目まぐるしい恋愛の末に結婚した。",
"freq:aristocratic":"彼女は古い貴族の家の出身だった。",
"freq:clout":"その組合は政治的な影響力の多くを失った。",
"freq:commemorative":"郵便局は記念切手を発行した。",
"freq:converge":"数千人のファンが競技場に集まった。",
"freq:cryptic":"彼は彼女の机に謎めいた伝言を残した。",
"freq:discern":"その2つの違いを見分けるのは難しかった。",
"freq:fanatic":"彼は試合を一度も見逃さない熱狂的なサッカー愛好者だ。",
"freq:formulate":"委員会は新しい政策を考案した。",
"freq:fragmentation":"その党の分裂は競争相手を利した。",
"freq:hoard":"人々は嵐の前に食料をため込み始めた。",
"freq:horde":"観光客の大群が広場を埋めた。",
"freq:imp":"その物語は子どものおもちゃを盗む小鬼の話だ。",
"freq:inconsistency":"彼の話にはいくつか矛盾があった。",
"freq:ingenuity":"その橋は人間の創意工夫の勝利だ。",
"freq:moot":"彼が勝っていたかどうかは議論の余地のある点だ。",
"freq:partake":"客は皆、そのごちそうを共にした。",
"freq:plagiarism":"その学生は盗作で告発された。",
"freq:puncture":"くぎがタイヤに穴を開けた。",
"freq:renegade":"離反した兵士の一団が空港を占拠した。",
"freq:seductive":"楽にもうかるという考えは魅惑的だ。",
"freq:summarize":"彼女はその報告書を2ページに要約した。",
"freq:unfounded":"そのうわさは根拠がないとわかった。",
"freq:valor":"彼は戦闘での勇敢さをたたえる勲章を受けた。",
"freq:vernacular":"その司祭は土地の言葉で説教した。",
"freq:virtuous":"彼女は質素で徳の高い生活を送った。",
"freq:abrasive":"彼のとげとげしい態度は同僚を不快にさせた。",
"freq:accomplice":"その泥棒と共犯者は逮捕された。",
"freq:annihilation":"その種は10年以内に絶滅の危機に直面している。",
"freq:armistice":"休戦協定は1918年11月に署名された。",
"freq:armory":"反乱者たちは軍の兵器庫から武器を奪った。",
"freq:auspices":"その会談は国連の後援のもとで行われた。",
"freq:calamity":"その洪水は町の歴史で最悪の大災害だった。",
"freq:chronology":"その本はその戦争の年表を載せている。",
"freq:diversification":"その会社は新しい市場への多角化を進めている。",
"freq:enactment":"その法律の制定には3年かかった。",
"freq:enlighten":"新しい規則について教えていただけますか。",
"freq:envious":"彼女は姉の成功をうらやんでいた。",
"freq:erroneous":"その報告書は誤ったデータに基づいていた。",
"freq:familial":"その病気は家系に現れる傾向がある。",
"freq:frivolous":"裁判官はその請求をくだらないものとして退けた。",
"freq:fruition":"何年もの作業の末、その計画は実現した。",
"freq:giddy":"長い登りの後、彼女はめまいがした。",
"freq:grandeur":"訪問者はその宮殿の壮大さに感嘆する。",
"freq:homogeneous":"その国の人口は大部分が同質だ。",
"freq:intangible":"信頼はどんな企業にとっても無形の資産だ。",
"freq:metaphysical":"その詩は形而上学的な問いを扱っている。",
"freq:meteorology":"彼は大学で気象学を学んだ。",
"freq:mindless":"それは思慮のない暴力行為だった。",
"freq:negotiable":"常連客には価格の交渉の余地がある。",
"freq:nudge":"彼女は時間を思い出させるために彼をそっとつついた。",
"freq:ploy":"その申し出は票を得るための策略にすぎなかった。",
"freq:presumption":"その法律は無罪の推定に基づいている。",
"freq:reactionary":"その党は反動的な政策を批判された。",
"freq:reconstruct":"警察はその夜の出来事を再現しようとした。",
"freq:stewardship":"その森は彼の管理のもとで豊かに育った。",
"freq:synergy":"その合併は2社の間に相乗効果を生んだ。",
"freq:whopping":"その会社は20億という途方もない利益を上げた。",
"freq:absurdity":"彼はその状況のばかばかしさを笑った。",
"freq:alchemy":"中世の学者たちはひそかに錬金術を行った。",
"freq:clandestine":"その2人のスパイは秘密の会合を開いた。",
"freq:clutter":"彼女の机は散らかった物で覆われていた。",
"freq:conqueror":"征服者は勝ち誇ってその都市に入った。",
"freq:crafty":"そのずる賢い商人は客をだました。",
"freq:debacle":"その選挙は与党にとって大敗北だった。",
"freq:defiant":"その反抗的な囚人は答えることを拒んだ。",
"freq:deformed":"その木は何年もの強風で変形していた。",
"freq:disarm":"警察は銃を持った男から武器を取り上げた。",
"freq:eminence":"彼は外科医として名声を得た。",
"freq:entail":"その仕事は多くの出張を伴う。",
"freq:fallacy":"金が幸福をもたらすというのは誤った考えだ。",
"freq:feeble":"彼は遅刻について説得力のない言い訳をした。",
"freq:fend":"その子どもたちは自力でやっていかなければならなかった。",
"freq:ferocious":"その村は獰猛なトラに襲われた。",
"freq:fragrant":"その庭は香りのよい花でいっぱいだった。",
"freq:gallant":"勇敢な兵士たちはその橋を守った。",
"freq:hermit":"彼は山の中で隠者として暮らした。",
"freq:indecent":"彼は公の場でのわいせつな行為で罰金を科された。",
"freq:inquest":"その労働者の死について死因審問が開かれた。",
"freq:mercantile":"ベネチアはかつて偉大な商業大国だった。",
"freq:migratory":"その湖は渡り鳥の休息地だ。",
"freq:mingle":"大臣は客たちと歓談した。",
"freq:nomenclature":"その本は植物の命名法を説明している。",
"freq:outcry":"その計画は世間の激しい抗議を引き起こした。",
"freq:panoramic":"その部屋からは湾の全景が見える。",
"freq:preferential":"会員は優遇を受ける。",
"freq:prolong":"その薬は患者の命を延ばすことができる。",
"freq:rambling":"彼は長く、とりとめのない演説をした。",
"freq:rowdy":"騒々しいファンに対処するために警察が呼ばれた。",
"freq:subversive":"彼は体制転覆を図る活動で投獄された。",
"freq:suggestive":"その音楽は夏の夕べを連想させる。",
"freq:totalitarian":"その小説は全体主義国家のもとでの生活を描いている。",
"freq:translucent":"そのランプには半透明のかさが付いている。",
"freq:unfavorable":"その試合は不利な条件で行われた。",
"freq:wield":"大統領は絶大な権力を振るっている。",
"freq:affirm":"裁判所は抗議する権利を支持した。",
"freq:agrarian":"その国は1950年まで農業経済だった。",
"freq:anecdote":"彼は自分の先生についての面白い逸話を語った。",
"freq:appease":"政府は怒った農民をなだめようとした。",
"freq:aptitude":"彼女は早くから音楽の才能を見せた。",
"freq:assassinate":"王を暗殺する陰謀が発覚した。",
"freq:bespoke":"彼はロンドンの注文仕立ての背広を着ている。",
"freq:brisk":"彼らは朝食前にきびきびと散歩した。",
"freq:bubbly":"彼女は温かく、陽気な性格だ。",
"freq:climatic":"気候の変化が収穫に影響している。",
"freq:conformity":"その学校は規則に従うことを求める。",
"freq:correlate":"良い成績は定期的な出席と相関している。",
"freq:courteous":"職員は親切で礼儀正しかった。",
"freq:defer":"委員会は決定を6月まで延期した。",
"freq:demeanor":"彼は落ち着いた親しみやすい物腰をしている。",
"freq:deplorable":"囚人たちはひどい環境で暮らしていた。",
"freq:deranged":"錯乱した男が列車の乗客を襲った。",
"freq:detour":"私たちは渋滞を避けるために回り道をした。",
"freq:equate":"多くの人は富を成功と同一視する。",
"freq:ethereal":"その歌手はこの世のものとは思えない声を持っている。",
"freq:expanse":"広大な砂漠の広がりが前方にあった。",
"freq:fanfare":"その製品は派手な宣伝とともに発売された。",
"freq:favorably":"批評家たちはその劇を好意的に評した。",
"freq:flask":"彼女は熱いお茶を入れた瓶を持っていた。",
"freq:frosty":"彼は競争相手から冷ややかな歓迎を受けた。",
"freq:individuality":"その学校は生徒の個性を伸ばしている。",
"freq:insurgent":"反乱者たちは夜明けに軍の基地を攻撃した。",
"freq:oblique":"彼女は彼の過去に遠回しに触れた。",
"freq:obscurity":"その画家は無名のまま亡くなった。",
"freq:onslaught":"その都市は敵の猛攻撃に耐えられなかった。",
"freq:paramilitary":"準軍事組織がその国境地域を支配している。",
"freq:permissible":"建物の中での喫煙は許されていない。",
"freq:platonic":"彼らの友情は純粋に精神的なものだった。",
"freq:recurrence":"その措置は事故の再発を防ぐことを目的としている。",
"freq:refinement":"その設計はいくつかの改良を経ている。",
"freq:repel":"軍は侵略者を撃退した。",
"freq:revamp":"その会社はウェブサイトを刷新した。",
"freq:sensibility":"その詩人は洗練された感性を持っていた。",
"freq:slumber":"その音で彼は眠りから覚めた。",
"freq:staunch":"彼女はその党の筋金入りの支持者だ。",
"freq:swoop":"ワシは獲物めがけて急降下した。",
"freq:transatlantic":"彼は初の単独大西洋横断飛行を行った。",
"freq:unparalleled":"その博物館は比類のない地図の収集品を持っている。",
"freq:unsolicited":"私は一方的に送られてくるメールを1日に何十通も受け取る。",
"freq:unveil":"その会社は昨日、新しい型を公開した。",
"freq:unworthy":"彼は自分がその栄誉に値しないと感じた。",
"freq:vocation":"彼女は看護に本当の天職を見いだした。",
"freq:agitation":"彼は動揺して部屋の中を歩き回った。",
"freq:agreeable":"私たちは友人たちと感じのよい晩を過ごした。",
"freq:assertive":"あなたは会議でもっとはっきり主張する必要がある。",
"freq:assimilation":"移民の同化には何世代もかかる。",
"freq:augment":"彼は夜に教えることで収入を増やした。",
"freq:breakaway":"離脱した派閥が新しい党を結成した。",
"freq:caricature":"その漫画は大統領の風刺画だ。",
"freq:companionship":"その老人は寂しさを紛らわす相手として犬を飼っていた。",
"freq:complacent":"私たちは安全について慢心してはならない。",
"freq:counteract":"その薬は毒の作用を打ち消す。",
"freq:courtship":"彼らは短い交際の後に結婚した。",
"freq:deepen":"その危機は冬の間に深まった。",
"freq:devise":"科学者たちはエネルギーを蓄える新しい方法を考案した。",
"freq:enclave":"その都市には小さなイタリア人居住区がある。",
"freq:entourage":"その歌手は大勢の取り巻きを連れて到着した。",
"freq:epoch":"その発明は医学の新しい時代を画した。",
"freq:forgery":"その絵は偽造品だとわかった。",
"freq:gimmick":"その無料の景品は販売のための仕掛けにすぎない。",
"freq:groundwork":"その会談は和平合意の土台を築いた。",
"freq:imposition":"新しい税を課したことは有権者を怒らせた。",
"freq:impromptu":"彼はパーティーで即興の演説をした。",
"freq:indulgence":"チョコレートは私の唯一の道楽だ。",
"freq:intersect":"その2本の道は教会の近くで交差する。",
"freq:nonexistent":"その村には公共交通がほとんど存在しない。",
"freq:notoriety":"彼は暴力的な映画で悪名を得た。",
"freq:ornate":"その宮殿には凝った装飾の天井がある。",
"freq:palpable":"部屋にははっきり感じられる安堵感があった。",
"freq:perk":"社用車はその仕事の特典の一つだ。",
"freq:perpetuate":"そうした映画は有害な固定観念を永続させる。",
"freq:perverse":"彼は人を怒らせることにひねくれた喜びを感じる。",
"freq:plume":"工場から煙の柱が立ち上った。",
"freq:plump":"その赤ん坊はふっくらしたばら色のほおをしている。",
"freq:prophetic":"彼女の警告は予言的だったとわかった。",
"freq:provocation":"彼は挑発もされないのにその男を襲った。",
"freq:recoil":"彼女はその光景に恐怖で後ずさりした。",
"freq:remission":"彼女のがんは2年間、症状が落ち着いている。",
"freq:renounce":"その王子は王位の継承権を放棄した。",
"freq:repentance":"彼は悔い改める様子をまったく見せなかった。",
"freq:resonate":"彼女の主張は若い有権者の心に響いた。",
"freq:restitution":"裁判所は彼に被害者へ賠償を支払うよう命じた。",
"freq:scholastic":"彼女は優れた学業成績を持っている。",
"freq:scourge":"マラリアは今もその地域の災いのもとだ。",
"freq:sobriety":"彼は5年間、酒を断ち続けている。",
"freq:stagnation":"その国は長い停滞の時期に直面している。",
"freq:tangent":"講演者は自分の休暇の話へわき道にそれた。",
"freq:unearthed":"新たに発掘された手紙がその詩人の秘密を明かしている。",
"freq:unqualified":"その劇は文句なしの成功だった。",
"freq:unquestionably":"彼女は疑いなくチームで最高の選手だ。",
"freq:unravel":"刑事たちはその謎を解明しようとしている。",
"freq:wasteland":"その戦争は農地を荒れ地に変えた。",
"freq:watchdog":"消費者監視団体がその銀行の手数料を批判した。",
"freq:zest":"彼女は人生に大きな熱意を持っている。",
"freq:zoology":"彼は動物学の学位を持っている。",
"freq:abstinence":"医師は完全な禁酒を勧めた。",
"freq:allege":"その訴訟は会社が損失を隠したと主張している。",
"freq:arduous":"それは長く、骨の折れる旅だった。",
"freq:composure":"彼女は危機の間、落ち着きを保った。",
"freq:concur":"ほとんどの専門家はこの見解に同意している。",
"freq:deport":"彼は不法入国で国外追放された。",
"freq:dispersion":"風が種子の散布を助ける。",
"freq:entangled":"そのイルカは漁網に絡まった。",
"freq:exploratory":"双方は予備的な会談を行った。",
"freq:facet":"その報告書は問題のあらゆる側面を扱っている。",
"freq:finesse":"彼女はその会議を非常に巧みに取り仕切った。",
"freq:gist":"私は彼の主張の要点を理解した。",
"freq:grievous":"彼は重大な判断の誤りを犯した。",
"freq:impunity":"その一味は何年も罰を受けずに活動した。",
"freq:infertility":"その診療所は不妊の夫婦を治療している。",
"freq:insolvency":"その会社は破産の瀬戸際にある。",
"freq:intermediary":"弁護士がその交渉で仲介者を務めた。",
"freq:laughable":"彼が無実だという考えはばかばかしい。",
"freq:makeshift":"彼らは間に合わせの避難所で眠った。",
"freq:mobilize":"その組合は数千人の労働者を動員した。",
"freq:perilous":"彼らは山脈を越える危険な旅をした。",
"freq:repulsive":"ごみ箱からの臭いはひどく不快だった。",
"freq:sadistic":"その看守は自分の仕事に残酷な喜びを感じていた。",
"freq:slant":"その記事は政治的に強く偏っている。",
"freq:slur":"彼は人種差別的な中傷について謝罪した。",
"freq:sulphur":"その泉は硫黄の強い臭いがする。",
"freq:tacky":"その店は安っぽい土産物を売っている。",
"freq:thaw":"両国の関係は和らぎ始めた。",
"freq:tout":"その器具はいびきの治療法として盛んに宣伝されている。",
"freq:transnational":"国境を越えた犯罪には国家間の協力が必要だ。",
"freq:wares":"商人たちは広場で商品を並べた。",
"freq:anecdotal":"その主張の証拠は個別の体験談にすぎない。",
"freq:animosity":"その2つの家の間には深い敵意がある。",
"freq:cavalier":"彼は安全に対してぞんざいな態度をとる。",
"freq:condone":"その学校はいじめを容認しない。",
"freq:congested":"市内に入る道路はひどく混雑している。",
"freq:consecrated":"彼は聖別された土地に埋葬された。",
"freq:contiguous":"その2つの州は互いに隣接している。",
"freq:deflect":"大臣は批判をそらそうとした。",
"freq:desolate":"その家は荒れ果てた荒野に建っていた。",
"freq:devour":"おなかをすかせた子どもたちはそのケーキをむさぼり食った。",
"freq:disarmament":"その2つの大国は核軍縮の条約に署名した。",
"freq:divergence":"その問題については意見の大きな相違がある。",
"freq:embody":"彼女はそのチームの精神を体現している。",
"freq:envision":"彼は車のない都市を思い描いている。",
"freq:equivalence":"その2つの用語の間に正確な等価はない。",
"freq:esoteric":"その講義はほとんどの学生には難解すぎた。",
"freq:euthanasia":"その国は安楽死を合法化した。",
"freq:flammable":"可燃性の液体を熱から遠ざけておきなさい。",
"freq:grapefruit":"彼女は朝食にグレープフルーツを半分食べる。",
"freq:incomprehensible":"彼の筆跡はほとんど読み取れない。",
"freq:inertia":"改革は官僚的な惰性に阻まれた。",
"freq:infestation":"そのホテルはネズミが大量に発生していた。",
"freq:insurrection":"軍は武装反乱を鎮圧した。",
"freq:intolerable":"工場の中の暑さは耐えられないものだった。",
"freq:mutilation":"その報告書は古代の像の損壊を記している。",
"freq:nifty":"その電話には電力を節約する気の利いた機能がある。",
"freq:pathogen":"その病原体は汚れた水を通じて広がる。",
"freq:pretentious":"その料理店は高くて気取っている。",
"freq:promenade":"日暮れに男女が遊歩道を歩いた。",
"freq:proximal":"けがは骨の体の中心に近い側の端だった。",
"freq:rapport":"その先生はクラスの生徒と良い信頼関係を築いている。",
"freq:rapture":"聴衆はうっとりと聞き入った。",
"freq:rectify":"その会社は誤りを正すと約束した。",
"freq:rudimentary":"彼にはフランス語の初歩的な知識しかない。",
"freq:screenwriter":"その脚本家はその小説を映画用に脚色した。",
"freq:shroud":"その山は霧に覆われていた。",
"freq:solicitation":"その慈善団体は違法な資金の勧誘で罰金を科された。",
"freq:uncharted":"その会社は未知の領域に入ろうとしている。",
"freq:unspoken":"彼らの間には暗黙の了解があった。",
"freq:vendetta":"その2つの家は何十年も抗争を続けた。",
"freq:alienation":"多くの若者が疎外感を覚えている。",
"freq:anthropologist":"その人類学者はその部族と2年間暮らした。",
"freq:attrition":"その戦争は長い消耗戦になった。",
"freq:autopilot":"その飛行機は自動操縦で飛んでいた。",
"freq:budgetary":"その事業は予算上の理由で中止された。",
"freq:cliche":"その演説は使い古された決まり文句だらけだった。",
"freq:collaborator":"彼は長年の協力者と共にその本を書いた。",
"freq:cumbersome":"その古い機械は重くて扱いにくかった。",
"freq:curt":"彼女はそっけない返事をして立ち去った。",
"freq:cyclical":"その産業は需要の周期的な変化に左右される。",
"freq:diversify":"その農場は観光業へと多角化した。",
"freq:elixir":"その飲み物は若返りの霊薬として売られた。",
"freq:epiphany":"彼女は森を歩いているとき、突然ひらめいた。",
"freq:fable":"その寓話は子どもたちにうそをつかないよう教える。",
"freq:fatality":"その衝突事故は3人の死者を出した。",
"freq:foresight":"彼女にはお金を蓄えておく先見の明があった。",
"freq:forsaken":"彼らは丘の中に見捨てられた村を見つけた。",
"freq:incision":"外科医は皮膚に小さな切開を入れた。",
"freq:indistinguishable":"その複製は原物と区別がつかない。",
"freq:intensify":"戦闘は夜の間に激しくなった。",
"freq:martyrdom":"その聖人はローマで殉教した。",
"freq:procure":"軍は地元の農場から食料を調達した。",
"freq:propensity":"彼には大げさに言う傾向がある。",
"freq:ruse":"その電話は彼を事務所から出すための策略だった。",
"freq:seniority":"昇進は年功に基づいている。",
"freq:severance":"彼は2か月分の退職手当を受け取った。",
"freq:singularity":"その事件の特異性が注目を集めた。",
"freq:socialize":"彼はめったに同僚と付き合わない。",
"freq:strut":"おんどりが庭を気取って歩いた。",
"freq:swirl":"煙が部屋中に渦を巻いた。",
"freq:tycoon":"その新聞は石油業界の大物に買収された。",
"freq:undeniably":"彼女は否定しようもなく才能がある。",
"freq:unorthodox":"その監督は型破りな訓練法を使う。",
"freq:uproar":"その決定は議会に大騒ぎを引き起こした。",
"freq:vigilance":"火事を防ぐには絶え間ない警戒が必要だ。",
"freq:allure":"名声の魅力に逆らえる人はほとんどいない。",
"freq:authorship":"その詩の作者は不明だ。",
"freq:burnout":"多くの看護師が燃え尽き状態に苦しんでいる。",
"freq:buyout":"経営陣はその会社の買収を取りまとめた。",
"freq:caveat":"彼は費用が増えてはならないというただし書き付きで同意した。",
"freq:chore":"皿洗いは毎日の雑用だ。",
"freq:circumvent":"規則をすり抜けようとする企業もある。",
"freq:clique":"小さな派閥がそのクラブを牛耳っている。",
"freq:contemplation":"彼は黙って考えにふけっていた。",
"freq:cranky":"その赤ん坊は疲れると不機嫌になる。",
"freq:distraught":"取り乱した母親は助けを求めた。",
"freq:drizzle":"軽い霧雨が午前中ずっと降った。",
"freq:emergent":"その会社は新興の技術に投資している。",
"freq:enchanting":"その村からはうっとりするような海の眺めが見える。",
"freq:exalted":"彼は宮廷で高い地位に上った。",
"freq:formality":"その面接は単なる形式だった。",
"freq:fortitude":"彼女は大きな不屈の精神で病に耐えた。",
"freq:geopolitical":"その地域は地政学的に非常に重要だ。",
"freq:grievance":"労働者たちは不満を部長に訴えた。",
"freq:grunt":"彼は顔も上げずにうなるように返事をした。",
"freq:harmonious":"その2つの集団は調和のとれた関係で暮らしている。",
"freq:hitherto":"その洞窟からこれまで知られていなかった種が見つかった。",
"freq:incline":"その道は急な坂を上る。",
"freq:incubation":"その病気の潜伏期間は10日だ。",
"freq:insignia":"その将校は階級の記章を着けていた。",
"freq:interplay":"その本は金と権力の相互作用を考察している。",
"freq:kindred":"その2人の芸術家は気の合う仲間だった。",
"freq:mischievous":"その少年はいたずらっぽい笑みを浮かべていた。",
"freq:nameless":"その寄付は名を明かさない支持者からのものだった。",
"freq:outburst":"彼は怒りを爆発させたことを謝った。",
"freq:preventable":"これらの死の大半は予防できる。",
"freq:provenance":"その絵の来歴は不確かだ。",
"freq:ravine":"バスは深い峡谷に転落した。",
"freq:redress":"被害者たちは裁判所を通じて救済を求めている。",
"freq:regenerate":"トカゲの中には尾を再生できるものがいる。",
"freq:reincarnation":"多くのヒンドゥー教徒は生まれ変わりを信じている。",
"freq:rife":"その工場が閉鎖されるといううわさが広まっている。",
"freq:sever":"その国は隣国との外交関係を断った。",
"freq:sharpen":"その講座は彼女が技能を磨く助けになった。",
"freq:stoic":"彼は痛みにもかかわらず平然としていた。",
"freq:unchecked":"火は抑えられることなく森に広がった。",
"freq:unsustainable":"その国の債務は持続不可能な水準に達した。",
"freq:utopian":"彼の計画は空想的な夢として退けられた。",
"freq:wholeheartedly":"私はその提案を心から支持する。",
"freq:zenith":"その帝国は権力の絶頂にあった。",
"freq:abbreviation":"「Dr.」は「doctor」の略語だ。",
"freq:adhesion":"その塗料は金属への付着が優れている。",
"freq:atrocious":"天気は1週間ずっとひどかった。",
"freq:avert":"素早い行動が重大な事故を防いだ。",
"freq:avian":"その農場は鳥インフルエンザの発生の後、閉鎖された。",
"freq:chastity":"修道士たちは純潔の誓いを立てる。",
"freq:circumstantial":"彼に対する訴えは状況証拠に基づいている。",
"freq:claimant":"請求者は各自、用紙に記入しなければならない。",
"freq:closeness":"その投票の僅差は誰もを驚かせた。",
"freq:contextual":"その意味は文脈上の手がかりによって決まる。",
"freq:cordon":"警察はその建物の周りに非常線を張った。",
"freq:cram":"彼は服を全部1つのかばんに詰め込んだ。",
"freq:decipher":"専門家たちはその古代の文書を解読しようとしている。",
"freq:delve":"その本は貧困の原因を掘り下げている。",
"freq:depletion":"魚の資源の枯渇は科学者たちを心配させている。",
"freq:dispersal":"警察は群衆の解散を命じた。",
"freq:effortless":"彼女は楽々とした技巧でピアノを弾く。",
"freq:fluke":"そのゴールはまったくのまぐれだった。",
"freq:gauntlet":"大臣は怒った記者たちの厳しい追及を受けた。",
"freq:ghostly":"霧の中に幽霊のような人影が現れた。",
"freq:idealistic":"その党に入ったとき、彼女は若く理想主義的だった。",
"freq:impede":"倒木が救助隊の前進を妨げた。",
"freq:inflamed":"彼女ののどは赤く、炎症を起こしていた。",
"freq:inhumane":"囚人たちの扱いは非人道的だった。",
"freq:instantaneous":"その薬の効果はほとんど即時に現れる。",
"freq:jinx":"そのチームはついに10年続いたジンクスを破った。",
"freq:jobless":"その工場の閉鎖で数百人が失業した。",
"freq:jurisprudence":"彼は法学の教授だ。",
"freq:justifiable":"裁判所はその殺害は正当と認められると判断した。",
"freq:linkage":"喫煙とがんの間には明確な関連がある。",
"freq:ratification":"その条約は議会の批准を待っている。",
"freq:reclamation":"その空港は埋め立て事業でできた土地に建設された。",
"freq:resettlement":"その機関は難民の再定住を支援している。",
"freq:sedentary":"座りがちな生活は病気の危険を高める。",
"freq:situational":"操縦士は状況認識の訓練を受ける。",
"freq:soggy":"数日の雨の後、その畑はぬかるんでいた。",
"freq:steadfast":"彼女は自分の信念を揺るぎなく持ち続けた。",
"freq:stoop":"彼はその硬貨を拾うためにかがんだ。",
"freq:stylistic":"その2つの詩には明確な文体上の違いがある。",
"freq:superstitious":"船乗りは天気についてしばしば迷信深い。",
"freq:touchy":"彼は自分の年齢のことになると怒りっぽい。",
"freq:trampoline":"子どもたちはトランポリンで跳ねていた。",
"freq:tranquil":"彼らは静かな湖のほとりで1週間過ごした。",
"freq:transformative":"教育は人生に変革をもたらす効果を持ちうる。",
"freq:unsuspecting":"泥棒たちは何も疑っていない観光客から盗んだ。",
"freq:unwelcome":"その知らせはありがたくない驚きだった。",
"freq:abode":"その小さな家は40年間、彼の住まいだった。",
"freq:abomination":"彼はその新しい建物を忌まわしいものと呼んだ。",
"freq:acutely":"彼女はその危険を強く意識している。",
"freq:allotment":"各家族は土地の割り当てを受けた。",
"freq:antisocial":"その議会は反社会的な行動を減らしたいと考えている。",
"freq:astray":"その手紙は郵送中に行方不明になった。",
"freq:blunder":"大臣は重大な失敗を認めた。",
"freq:commotion":"法廷の外で騒ぎがあった。",
"freq:cynicism":"その不祥事は政治に対する世間の冷笑的な見方を強めた。",
"freq:debatable":"その計画がうまくいくかどうかは議論の余地がある。",
"freq:diligently":"彼女はその試験に向けて熱心に勉強した。",
"freq:duality":"その小説は人間性の二重性を探っている。",
"freq:endearing":"その子は愛らしい笑顔をしている。",
"freq:extermination":"ネズミの駆除には数か月かかった。",
"freq:habitable":"その島のごく一部しか住むのに適していない。",
"freq:hegemony":"その2つの大国は地域の覇権を争った。",
"freq:hypnotic":"その音楽はゆっくりした、うっとりさせるリズムを持っている。",
"freq:inaction":"政府は何もしなかったことを批判された。",
"freq:inconclusive":"その検査の結果は決定的ではなかった。",
"freq:inept":"その危機は無能な指導部によって悪化した。",
"freq:inexplicable":"何か説明のつかない理由で、彼は辞任した。",
"freq:innovate":"企業は生き残るために革新しなければならない。",
"freq:kinship":"彼女はほかの生存者たちに親近感を覚えた。",
"freq:lenient":"裁判官はその若い犯罪者に寛大だった。",
"freq:mediate":"国連は双方の間を調停すると申し出た。",
"freq:modernism":"その建物は近代主義の有名な例だ。",
"freq:nomadic":"その部族は砂漠で遊牧生活を送っている。",
"freq:penance":"彼は罪の償いとして貧しい人々に金を与えた。",
"freq:preposterous":"彼がその金を盗んだという考えはばかげている。",
"freq:preventative":"その診療所は予防医学に力を入れている。",
"freq:proverbial":"彼はことわざに言う干し草の山の中の針を探していた。",
"freq:quirk":"運命の巡り合わせで、彼らはパリで再会した。",
"freq:rabid":"彼はそのチームの狂信的な支持者だ。",
"freq:reiterate":"大臣は減税の約束を繰り返し述べた。",
"freq:scorn":"彼女は彼の申し出を軽蔑して扱った。",
"freq:skillful":"彼は巧みな交渉人だ。",
"freq:stampede":"門での殺到で3人がけがをした。",
"freq:standoff":"警察と抗議者のにらみ合いは一晩中続いた。",
"freq:stately":"その一家は川の近くの堂々とした邸宅に住んでいる。",
"freq:tantrum":"その子は店でかんしゃくを起こした。",
"freq:tectonic":"地震は地殻プレートが出合う所で起こる。",
"freq:treachery":"王は弟の裏切りを決して許さなかった。",
"freq:unmatched":"その分野についての彼女の知識は比類がない。",
"freq:upheaval":"その国は何年もの政治的激変を経験した。",
"freq:veneer":"彼の礼儀正しさは薄いうわべにすぎない。",
"freq:vouch":"彼の仕事の質は私が保証できる。",
"freq:aggravating":"道路からの騒音はとてもいらいらさせる。",
"freq:altercation":"彼は酒場の外での口論でけがをした。",
"freq:amplification":"そのホールは声の増幅を必要としない。",
"freq:brunt":"小さな町々がその嵐の被害をまともに受けた。",
"freq:burgeoning":"その都市には急成長している技術産業がある。",
"freq:cadence":"彼は説教師のようなゆっくりした抑揚で話した。",
"freq:condensation":"冷たい窓に結露ができた。",
"freq:confluence":"その町は2つの川の合流点にある。",
"freq:contraband":"税関の職員がそのトラックから密輸品を見つけた。",
"freq:custodian":"彼はその博物館で管理人として働いている。",
"freq:degeneration":"その病気は神経のゆっくりした変性を引き起こす。",
"freq:delinquent":"その事業は非行に走った十代が仕事を見つけるのを助ける。",
"freq:eradication":"天然痘の根絶は大きな成功だった。",
"freq:fickle":"山の天気は変わりやすい。",
"freq:forage":"クマは晩夏に木の実を探し回る。",
"freq:fraught":"その旅は危険に満ちていた。",
"freq:grapple":"その市は住宅危機に取り組んでいる。",
"freq:groan":"彼は立ち上がるとき、痛みでうめいた。",
"freq:hoist":"船員たちは夜明けに旗を掲げた。",
"freq:incite":"彼は暴動を扇動した罪で起訴された。",
"freq:intoxication":"彼は公の場での酩酊で逮捕された。",
"freq:jagged":"その船はぎざぎざの岩に衝突した。",
"freq:mediocrity":"その映画はたいていの続編の凡庸さを超えている。",
"freq:murky":"潜水士たちは運河の濁った水の中を捜索した。",
"freq:neutralize":"軍は数時間のうちにその脅威を無力化した。",
"freq:omen":"その暗い雲は悪い前兆に見えた。",
"freq:overgrown":"その小道は雑草に覆われていた。",
"freq:pedagogy":"その課程は教育学の理論を扱う。",
"freq:philanthropist":"その病院は裕福な慈善家の資金で建てられた。",
"freq:readership":"その雑誌の読者数は200万人だ。",
"freq:relinquish":"王は王位を手放すことを強いられた。",
"freq:resolute":"彼女は批判に直面しても断固としていた。",
"freq:salient":"その報告書は事件の主要な点を要約している。",
"freq:sentient":"多くの人は動物が感覚を持つ存在だと信じている。",
"freq:separatist":"分離独立派の反乱軍が北部の州を支配している。",
"freq:snippet":"私は彼らの会話の断片だけを耳にした。",
"freq:strenuous":"手術の後は激しい運動を避けなさい。",
"freq:surcharge":"その航空会社は運賃に燃料の追加料金を上乗せした。",
"freq:unharmed":"人質たちは無事に解放された。",
"freq:unspeakable":"難民たちは言語に絶する残虐な扱いを受けた。",
"freq:untimely":"彼の早すぎる死は国中に衝撃を与えた。",
"freq:workable":"私たちは実行可能な解決策を見つける必要がある。",
"freq:abundantly":"その計画が失敗したことは十分に明らかだ。",
"freq:adoration":"彼女は赤ん坊を愛情いっぱいに見つめた。",
"freq:affliction":"失明はその地域でよく見られる苦しみだ。",
"freq:backfire":"費用を削る計画はひどく裏目に出た。",
"freq:conspiring":"彼は詐欺を共謀した罪で有罪になった。",
"freq:corrosive":"その酸は腐食性が非常に高い。",
"freq:cowardice":"その兵士は臆病だと非難された。",
"freq:disqualification":"その走者は不正行為で失格になる恐れがある。",
"freq:enigmatic":"彼女は謎めいた笑みを浮かべ、何も言わなかった。",
"freq:exhale":"深く息を吸い、ゆっくり吐きなさい。",
"freq:fission":"核分裂は膨大なエネルギーを放出する。",
"freq:flurry":"締め切りの前に慌ただしい動きがあった。",
"freq:genomic":"ゲノム研究は現代医学を変えた。",
"freq:glimmer":"和平交渉にはかすかな希望がある。",
"freq:humankind":"その発見は人類にとって大きな一歩だった。",
"freq:limelight":"その不祥事は彼女を注目の的に押し出した。",
"freq:loathe":"彼は人前で話さなければならないことをひどく嫌う。",
"freq:momentous":"その投票は国の歴史における重大な出来事だった。",
"freq:observable":"彼の容体に目に見える変化はなかった。",
"freq:pang":"彼女は罪悪感のうずきを覚えた。",
"freq:participatory":"その市には参加型の予算編成の手続きがある。",
"freq:refurbishment":"そのホテルは改装のため休業している。",
"freq:revel":"彼女は突然の名声に酔いしれた。",
"freq:scapegoat":"その部長は失敗の身代わりにされた。",
"freq:shambles":"その会議は大混乱のうちに終わった。",
"freq:shrewd":"彼女は抜け目のない投資家だ。",
"freq:shudder":"何が起きていたかと思うと身震いする。",
"freq:smuggle":"彼らは金を国境を越えて密輸しようとした。",
"freq:spire":"その教会の尖塔は何マイルも先から見える。",
"freq:sprout":"新しい店が町中に次々と現れている。",
"freq:stench":"腐った魚の悪臭が港に充満した。",
"freq:subsistence":"多くの家族が最低限の生活水準で暮らしている。",
"freq:subterranean":"その都市には地下トンネルの網がある。",
"freq:superhuman":"期限どおりに終えるには超人的な努力が必要だった。",
"freq:tenacity":"彼女は大変な粘り強さでその事件を追った。",
"freq:tolerable":"日陰では暑さは耐えられる程度だ。",
"freq:trespass":"彼は鉄道用地への不法侵入で逮捕された。",
"freq:unknowingly":"彼女は知らずに盗品を買っていた。",
"freq:untouchable":"その一味の頭は、自分には誰も手出しできないと信じていた。",
"freq:unwarranted":"その批判はまったく不当だった。",
"freq:wishful":"早い勝利を望むのは希望的観測だ。",
"freq:actuality":"実際には、費用ははるかに高かった。",
"freq:alibi":"その容疑者にはその夜の確かなアリバイがあった。",
"freq:astute":"彼は政治の鋭い観察者だ。",
"freq:brazen":"それは不正を働こうとする厚かましい試みだった。",
"freq:burrow":"そのウサギは巣穴に姿を消した。",
"freq:causation":"相関関係は因果関係を証明しない。",
"freq:centerpiece":"減税がその予算の目玉だ。",
"freq:clasp":"彼女は祈るように両手を握り合わせた。",
"freq:compulsion":"彼はもう一度ドアを確かめたいという衝動を感じた。",
"freq:condescending":"彼は人を見下すような口調で私たちに話した。",
"freq:conjure":"その歌は夏の光景を思い起こさせる。",
"freq:copious":"彼女は講義の間、大量のメモを取った。",
"freq:cordial":"その2人の指導者は友好的な会談を行った。",
"freq:craftsmanship":"そのテーブルは見事な職人技を示している。",
"freq:creditor":"その会社は債権者に数百万の借りがある。",
"freq:custodial":"彼は2年の拘禁刑を言い渡された。",
"freq:derelict":"子どもたちは放置された工場で遊んだ。",
"freq:dispel":"大臣は危機への不安を払いのけようとした。",
"freq:edict":"皇帝はその宗教を禁じる勅令を出した。",
"freq:egregious":"それは目に余る権力の乱用だった。",
"freq:elasticity":"皮膚は年を取ると弾力を失う。",
"freq:epoxy":"そのひび割れはエポキシ樹脂でふさがれた。",
"freq:extraterrestrial":"科学者たちは地球外生命を探している。",
"freq:fiend":"新聞はその殺人犯を悪魔と呼んだ。",
"freq:fledgling":"その発足したばかりの会社には従業員が6人しかいない。",
"freq:flicker":"ろうそくが風に揺らめいた。",
"freq:flimsy":"その訴えは薄弱な証拠の上に組み立てられていた。",
"freq:gambit":"彼の最初の一手は値引きを申し出ることだった。",
"freq:gullible":"その手口はだまされやすい観光客にしか通用しない。",
"freq:gust":"突風が彼の帽子を吹き飛ばした。",
"freq:hearth":"暖炉で火が燃えていた。",
"freq:hemorrhage":"その患者は脳出血で死亡した。",
"freq:idealism":"彼女は若い頃の理想主義を少しも失っていない。",
"freq:impeach":"議会は大統領を弾劾することを可決した。",
"freq:improvisation":"ジャズは即興に大きく頼っている。",
"freq:jeopardize":"その不祥事は彼の経歴を危険にさらしかねない。",
"freq:lexicon":"その語は実業界の語彙に加わった。",
"freq:lobbyist":"石油業界のロビイストが数人の上院議員と会った。",
"freq:lurk":"危険はあらゆる角に潜んでいる。",
"freq:metaphorical":"彼は比喩的な意味で話していた。",
"freq:mismatch":"技能と仕事の間に不一致がある。",
"freq:monastic":"彼は静かで禁欲的な生活を選んだ。",
"freq:multilateral":"その2国は多国間の協定を望んでいる。",
"freq:namesake":"その船は有名な同名の船より大きい。",
"freq:normative":"その研究は倫理に規範的な取り組み方をしている。",
"freq:objectivity":"良い裁判官は客観性を保たなければならない。",
"freq:palliative":"その病院は死期の近い人に緩和ケアを提供している。",
"freq:parable":"司祭は迷える羊のたとえ話をした。",
"freq:pastime":"釣りは彼のお気に入りの娯楽だ。",
"freq:patchwork":"その地域は小さな農場の寄せ集めだ。",
"freq:pesky":"厄介なハエがピクニックを台無しにした。",
"freq:plunder":"兵士たちは戦闘の後、その町を略奪した。",
"freq:pseudonym":"彼女は筆名でその小説を書いた。",
"freq:rationality":"彼はその決定の合理性を疑った。",
"freq:rebuke":"裁判官はその弁護士に厳しい叱責を与えた。",
"freq:rebuttal":"その会社は報告書への反論を出した。",
"freq:retaliate":"軍は空爆で報復した。",
"freq:rouse":"その演説は群衆を行動へと奮い立たせた。",
"freq:scant":"その報告書は安全にわずかな注意しか払わなかった。",
"freq:semblance":"生活はどうにか平常らしい姿を取り戻した。",
"freq:slowdown":"経済は減速の兆しを見せている。",
"freq:snug":"その小屋は暖かく、居心地がよかった。",
"freq:spoof":"その映画はスパイ映画のパロディだ。",
"freq:susceptibility":"喫煙は感染のしやすさを高める。",
"freq:tangle":"嵐の後、彼女の髪はもつれていた。",
"freq:transcend":"音楽は文化の違いを超えることができる。",
"freq:trope":"失われた世継ぎは小説でおなじみの筋立てだ。",
"freq:undercut":"そのスーパーは地元の店より安い価格で売った。",
"freq:unproductive":"その会議は長く、実りがなかった。",
"freq:whence":"彼は自分がやって来た村へ戻った。",
"freq:whimsical":"その本には風変わりで愉快な動物の絵が載っている。",
"freq:anthropological":"その博物館には人類学の収集品がある。",
"freq:apprehension":"彼女は面接について少し不安を感じた。",
"freq:articulation":"その演説は彼の信念を明確に表現したものだった。",
"freq:assailant":"被害者は自分を襲った者を見ていなかった。",
"freq:atonement":"彼は罪の償いとして慈善団体に寄付した。",
"freq:auspicious":"そのチームは幸先のよい開幕を迎えた。",
"freq:barricade":"抗議者たちは道路にバリケードを築いた。",
"freq:baseless":"その告発はまったく根拠がなかった。",
"freq:benefactor":"名前のわからない後援者が新しい図書館の費用を出した。",
"freq:dichotomy":"仕事と遊びの間には誤った二分法がある。",
"freq:diminutive":"その小柄な女優は女王を演じた。",
"freq:dispensary":"彼女は薬局で薬を受け取った。",
"freq:doubtless":"彼はきっとまた遅刻するだろう。",
"freq:emphatic":"彼女の答えはきっぱりとした拒否だった。",
"freq:gait":"彼はゆっくりした重い足取りで歩いた。",
"freq:heyday":"全盛期には、その港は年に1,000隻の船を扱った。",
"freq:impart":"教師は生徒に知識を授ける。",
"freq:incoherent":"彼はひどく怒っていて、話が支離滅裂だった。",
"freq:interlude":"戦争と戦争の間に短い平和の合間があった。",
"freq:irritable":"睡眠不足は彼を怒りっぽくする。",
"freq:lukewarm":"その計画は気乗りしない反応を受けた。",
"freq:mismanagement":"その会社は財務管理の誤りのせいで倒産した。",
"freq:motley":"雑多なボランティアの一団が手伝いにやって来た。",
"freq:nuance":"その翻訳は原文の微妙な意味合いをことごとく落としている。",
"freq:obstruct":"倒木が道路をふさいだ。",
"freq:outcast":"彼は新しい学校でのけ者のように感じた。",
"freq:penultimate":"その謎は最後から2番目の章で解決される。",
"freq:pleasurable":"読書は夜を過ごす楽しい方法だ。",
"freq:propagate":"その団体は自らの考えを広めるためにインターネットを使う。",
"freq:redefine":"その発明は電話という概念を再定義した。",
"freq:reinstate":"裁判所はその会社に彼女を復職させるよう命じた。",
"freq:remit":"その件は委員会の権限の外だ。",
"freq:resumption":"双方は交渉の再開を求めた。",
"freq:retrograde":"その学校を閉鎖することは後退の一歩になるだろう。",
"freq:revere":"その詩人は国中であがめられている。",
"freq:rout":"その戦いは敵の総崩れに終わった。",
"freq:stardom":"彼女は18歳でスターの座に上った。",
"freq:subtlety":"その劇は非常に繊細に書かれている。",
"freq:symptomatic":"その暴動はもっと深い問題の表れだ。",
"freq:watchful":"子どもたちは母親の注意深い目のもとで遊んだ。",
"freq:wayward":"その学校は言うことを聞かない生徒たちを抑えるのに苦労した。",
"freq:yoke":"その国は外国支配のくびきを振り払った。",
"freq:ailing":"政府は不振の自動車産業を救おうとした。",
"freq:aloft":"勝者は優勝杯を高く掲げた。",
"freq:amalgamation":"その会社は3社の合併によって作られた。",
"freq:beset":"その事業は遅延に悩まされた。",
"freq:cavern":"探検家たちは丘の下に巨大な洞窟を見つけた。",
"freq:chivalry":"その物語は騎士道の時代をたたえている。",
"freq:cocoon":"そのガはまゆから出てきた。",
"freq:credence":"その新しい証拠は彼女の話に信ぴょう性を与える。",
"freq:debtor":"その銀行は債務者に対して法的措置を取った。",
"freq:derail":"その不祥事は和平交渉を頓挫させかねない。",
"freq:distort":"その記事は事件の事実をゆがめている。",
"freq:dreary":"寒く、わびしい午後だった。",
"freq:evaporation":"塩は海水の蒸発によって作られる。",
"freq:foregoing":"前述の例は改革の必要性を示している。",
"freq:gallows":"その殺人犯は絞首台へ送られた。",
"freq:henceforth":"今後、来訪者は全員、身分証明書を提示しなければならない。",
"freq:heterogeneous":"その都市の人口は多様な人々から成る。",
"freq:huddle":"子どもたちは暖を取るために身を寄せ合った。",
"freq:indignation":"その決定は世間の憤りを招いた。",
"freq:ingrained":"そのような態度は社会に深く根づいている。",
"freq:lesion":"その検査画像は肺に小さな病変を示した。",
"freq:lull":"戦闘に短い小休止があった。",
"freq:moratorium":"政府は捕鯨の一時停止を宣言した。",
"freq:munch":"子どもたちはバスの中でリンゴをむしゃむしゃ食べた。",
"freq:nascent":"その国には生まれたばかりの映画産業がある。",
"freq:neurotic":"彼女はばい菌について神経質だ。",
"freq:prerogative":"選手を選ぶのは監督の特権だ。",
"freq:prudence":"その銀行は財務面の慎重さで知られている。",
"freq:remedial":"その学校は読み方の補習授業を行っている。",
"freq:repressive":"その国は何十年も抑圧的な政権のもとで暮らした。",
"freq:resourceful":"彼女は危機に際して機転の利く指導者だ。",
"freq:sacrificial":"司祭はいけにえの子羊を祭壇へ連れて行った。",
"freq:scorching":"彼らは焼けつくような暑さの中を何時間も歩いた。",
"freq:scribe":"写字生がその文書を手で書き写した。",
"freq:sentry":"歩哨が門で見張りに立っていた。",
"freq:specter":"戦争の影がその地域を覆っている。",
"freq:strewn":"床には割れたガラスが散らばっていた。",
"freq:tact":"彼女はその苦情をとても如才なく処理した。",
"freq:taxonomy":"昆虫の分類は極めて複雑だ。",
"freq:uncompromising":"彼は汚職に対して妥協しない立場をとった。",
"freq:unruly":"その教師は手に負えないクラスに苦労した。",
"freq:venomous":"その島には数種類の毒ヘビが生息している。",
"freq:willful":"その火事は故意の破壊行為だった。",
"freq:abstain":"3人の委員が投票を棄権した。",
"freq:allegory":"その小説は冷戦の寓話だ。",
"freq:banish":"王は弟を国から追放した。",
"freq:callous":"それは高齢の男性に対する冷酷な襲撃だった。",
"freq:churn":"その船のエンジンは水をかき回して白くした。",
"freq:commendable":"そのチームは称賛に値する努力をした。",
"freq:dainty":"彼女はきゃしゃな銀色の靴を履いていた。",
"freq:deliverance":"村人たちは洪水からの救いを祈った。",
"freq:destitute":"その戦争は数千の家族を極貧にした。",
"freq:dexterity":"その仕事には手先の大変な器用さが必要だ。",
"freq:dilution":"批判者たちはその変更を法律の骨抜きと呼んだ。",
"freq:dissipated":"正午までに霧は晴れていた。",
"freq:elitist":"その大学はエリート主義だと非難された。",
"freq:exclusivity":"そのブランドは高級感で知られている。",
"freq:feisty":"彼女は決してあきらめない、負けん気の強い女性だ。",
"freq:foothold":"その会社はアジア市場に足がかりを得た。",
"freq:fraternal":"その2つの組合の間には兄弟のようなきずながある。",
"freq:ghastly":"その事故は恐ろしい光景だった。",
"freq:gratifying":"学生たちが成功するのを見るのはうれしい。",
"freq:hunch":"私は彼がうそをついているという予感がした。",
"freq:impenetrable":"その要塞には突き破れない壁があった。",
"freq:inconceivable":"彼女がうそをつくなどありえない。",
"freq:industrialization":"急速な工業化は田舎を変えた。",
"freq:mysticism":"その詩人は東洋の神秘主義に引かれた。",
"freq:nauseous":"ペンキの臭いで彼女は吐き気がした。",
"freq:nimble":"ヤギは機敏に岩を登る。",
"freq:objectionable":"その冗談を不快に感じた視聴者もいた。",
"freq:opportunistic":"それは計画的な犯罪ではなく、機会に便乗した犯罪だった。",
"freq:outlandish":"彼はパーティーに奇抜な衣装を着て行った。",
"freq:outlying":"バスは辺ぴな村々にはめったに来ない。",
"freq:pacifist":"彼は戦うことを拒んだ平和主義者だった。",
"freq:penchant":"彼女は高価な靴に目がない。",
"freq:primordial":"生命は太古の海で始まった。",
"freq:quorum":"その会議は定足数に足りず中止された。",
"freq:rascal":"そのいたずらっ子は私の靴を隠した。",
"freq:rigor":"その研究は科学的な厳密さを欠いている。",
"freq:shortlist":"彼女の小説はその賞の最終候補に入っていた。",
"freq:tenancy":"その借用期間は2年間だ。",
"freq:testimonial":"そのサイトは満足した客からの推薦の言葉を載せている。",
"freq:thence":"彼らはリスボンへ、そこからアフリカへ航海した。",
"freq:unfaithful":"彼女は夫を不貞だと非難した。",
"freq:unholy":"その2人の競争相手はよこしまな同盟を結んだ。",
"freq:unregulated":"これらの薬の市場はほとんど規制されていない。",
"freq:unscrupulous":"悪徳業者が偽の薬を売った。",
"freq:unwittingly":"彼は知らずに泥棒たちの逃走を助けた。",
"freq:verbatim":"その記者は演説を一語一語そのまま引用した。",
"freq:antiquated":"その事務所はいまだに時代遅れのコンピューターを使っている。",
"freq:averse":"彼は危険を冒すことを嫌っていない。",
"freq:brim":"そのグラスは縁までいっぱいだった。",
"freq:dribble":"壊れた管から水がしたたった。",
"freq:egalitarian":"彼女はもっと平等な社会を夢見ている。",
"freq:gout":"彼は左足の痛風を患っている。",
"freq:mythological":"その絵は神話の一場面を描いている。",
"freq:palatable":"大臣はその削減をもっと受け入れやすくしようとした。",
"freq:solicit":"その慈善団体は郵便で寄付を募っている。",
"freq:succumb":"彼はついにその病気に倒れた。",
"freq:thwart":"警察はその銀行を襲う計画を阻止した。",
"freq:unequivocally":"彼女はその告発を明確に否定した。",
"freq:acreage":"その農場は10年で面積を倍にした。",
"freq:assimilate":"移民たちは次第にその地域社会に同化した。",
"freq:convoluted":"その映画は入り組んだ筋を持っている。",
"freq:counterproductive":"子どもたちを罰することは逆効果だとわかった。",
"freq:impediment":"資金不足が前進の主な妨げだ。",
"freq:materialism":"彼は現代生活の物質主義を拒んだ。",
"freq:meager":"彼らはわずかな収入で暮らしていた。",
"freq:parochial":"彼の世界観は狭く、視野が限られている。",
"freq:somber":"葬儀の雰囲気は厳粛だった。",
"freq:utilitarian":"その建物は質素で実用本位だ。",
"freq:belligerent":"彼は数杯飲むとけんか腰になった。",
"freq:depraved":"法廷は彼の邪悪な犯罪の詳細を聞いた。",
"freq:ebb":"世間の支持は衰え始めた。",
"freq:emulation":"彼の成功は見習う価値がある。",
"freq:forfeiture":"その犯罪は彼の財産の没収につながるかもしれない。",
"freq:instinctive":"彼女はその見知らぬ人に本能的な不信を感じた。",
"freq:magnate":"海運業界の大物がその島を買った。",
"freq:poise":"彼女はその質問に非常に落ち着いて答えた。",
"freq:sanctity":"裁判所は人命の尊厳を擁護した。",
"freq:alienate":"彼の無礼な発言は多くの有権者を遠ざけた。",
"freq:confrontational":"その組合は対決的な姿勢をとった。",
"freq:contagion":"医師たちは感染がその都市に広がることを恐れた。",
"freq:curate":"彼女は現代美術の展覧会を企画した。",
"freq:deviant":"その研究は十代の逸脱行動を調べている。",
"freq:disseminate":"その機関は学校に健康の情報を広めている。",
"freq:dynamically":"価格は需要に応じて動的に変わる。",
"freq:insular":"その村は小さく、かなり閉鎖的だ。",
"freq:jarring":"そのけばけばしい色は不快な印象を与える。",
"freq:magnetism":"その俳優には人を引きつける大きな力がある。",
"freq:mariner":"その老いた船乗りは海の物語を語った。",
"freq:methodological":"その研究には方法論上の重大な欠陥がある。",
"freq:scavenger":"カラスは賢い腐肉食の動物だ。",
"freq:stuffy":"その部屋は暑く、息苦しかった。",
"freq:uniformity":"その規則にはほとんど統一性がない。",
"freq:apprehend":"警察は空港でその容疑者を逮捕した。",
"freq:axiom":"価格が需要に従うというのは自明の理だ。",
"freq:cleanly":"そのナイフは綱をきれいに切った。",
"freq:infallible":"絶対に誤らない医師はいない。",
"freq:methodical":"彼女は仕事が遅いが几帳面だ。",
"freq:socialization":"学校は子どもの社会化に重要な役割を果たす。",
"freq:tranquility":"彼らは田舎の静けさを楽しんだ。",
"freq:detract":"その醜い看板は通りの美しさを損なっている。",
"freq:dissection":"学生たちはカエルの解剖を見学した。",
"freq:distillation":"ウイスキーは穀物の蒸留によって作られる。",
"freq:hibernation":"クマは冬に冬眠に入る。",
"freq:hindrance":"重いかばんは長い歩行の妨げになる。",
"freq:inexplicably":"そのファイルは不可解にも消えていた。",
"freq:placid":"その湖は静かで穏やかだった。",
"freq:reissue":"そのアルバムは20年後に再発売された。",
"freq:skew":"その結果は標本の少なさでゆがめられた。",
"freq:unwavering":"彼女は揺るぎない支持をくれたファンに感謝した。",
"freq:veritable":"その庭は鳥たちにとってまさしく楽園だ。",
"freq:abject":"数百万人が絶望的な貧困の中で暮らしている。",
"freq:austere":"修道士たちは質素な生活を送っている。",
"freq:blister":"新しい靴のせいで彼はかかとに水ぶくれができた。",
"freq:commendation":"その警官は勇敢さで表彰された。",
"freq:gusto":"そのバンドは大変な熱意で演奏した。",
"freq:individualism":"アメリカ文化は個人主義を重んじる。",
"freq:infernal":"誰かあのひどい騒音を止めてくれないか。",
"freq:mystique":"その古いホテルには今も一種の神秘的な雰囲気がある。",
"freq:overalls":"その整備士は青い作業服を着ていた。",
"freq:quell":"暴動を鎮圧するために部隊が送られた。",
"freq:succulent":"その料理店は汁気たっぷりの焼いた子羊肉を出す。",
"freq:superfluous":"編集者は余分な言葉をすべて削った。",
"freq:arcane":"そのゲームの規則は難解だ。",
"freq:behest":"その調査は王の命令で行われた。",
"freq:ephemeral":"ポップ音楽界の名声ははかない。",
"freq:extracurricular":"彼女はいくつかの課外活動に参加している。",
"freq:lackluster":"そのチームは精彩を欠いた試合をした。",
"freq:manicure":"彼女は結婚式の前に爪の手入れをしてもらった。",
"freq:materialistic":"彼はその時代の物質主義的な価値観を批判した。",
"freq:materialize":"約束された資金は結局実現しなかった。",
"freq:perceptive":"彼女はその計画について鋭い意見をいくつか述べた。",
"freq:riveting":"その裁判は目が離せないテレビ番組になった。",
"freq:sprawl":"その都市は海岸沿いに何マイルも無秩序に広がっている。",
"freq:swivel":"彼は椅子を回してドアのほうを向いた。",
"freq:wayside":"その危機の間に多くの小企業が脱落した。",
"freq:aberration":"その悪い結果は傾向ではなく、一時的な異常だった。",
"freq:athleticism":"その踊り手は運動能力の高さで称賛されている。",
"freq:daydream":"彼は海辺で暮らすことを空想している。",
"freq:figuratively":"その都市は、比喩的に言えば、燃え上がっていた。",
"freq:habitation":"その家は人が住むのに適していない。",
"freq:interlocking":"その床はかみ合わせ式のタイルでできている。",
"freq:repertory":"彼は20代でレパートリー劇団に入った。",
"freq:shimmer":"湖は月明かりにちらちら光った。",
"freq:snooze":"彼は昼食の後にうたた寝するのが好きだ。",
"freq:suitor":"その王女は求婚者をことごとく断った。",
"freq:abhorrent":"奴隷制はまともな人なら誰にとっても忌まわしいものだ。",
"freq:carpentry":"彼は父親から大工仕事を習った。",
"freq:crumb":"鳥たちが地面のパンくずを食べた。",
"freq:elated":"彼女はその賞を取って大喜びした。",
"freq:exuberant":"群衆は元気いっぱいの気分だった。",
"freq:facsimile":"その博物館は古い地図の複製を売っている。",
"freq:fanciful":"その話は空想的すぎて本当とは思えない。",
"freq:posterity":"その手紙は後世のために保存された。",
"freq:pounce":"猫はネズミに飛びかかった。",
"freq:scathing":"その批評家はその映画について痛烈な批評を書いた。",
"freq:antithesis":"彼の物静かな態度は兄とは正反対だ。",
"freq:archetype":"彼女は成功した弁護士の典型だ。",
"freq:chisel":"その彫刻家はのみで石を形作った。",
"freq:coax":"彼女はその子をなだめすかして野菜を食べさせた。",
"freq:cull":"政府は数千頭のシカを間引く計画だ。",
"freq:flattery":"お世辞を言われても私の決定は変わらない。",
"freq:restorative":"熱い風呂には元気を回復させる効果がある。",
"freq:spurious":"彼は偽りの容疑で逮捕された。",
"freq:vermin":"その納屋はネズミなどの害獣だらけだった。",
"freq:altruistic":"彼女の動機は完全に利他的というわけではなかった。",
"freq:amorphous":"その計画はまだ漠然としていて形が定まっていない。",
"freq:enterprising":"ある積極的な学生が配達の事業を始めた。",
"freq:honk":"運転者たちは渋滞の中で警笛を鳴らした。",
"freq:inexcusable":"会議での彼の振る舞いは許しがたいものだった。",
"freq:minster":"その大聖堂は市の中心部にそびえている。",
"freq:monotonous":"組み立てラインの仕事は単調だ。",
"freq:prohibitive":"その修理の費用は法外だ。",
"freq:topple":"その不祥事は政府を倒した。",
"freq:allusion":"その詩には聖書へのほのめかしが含まれている。",
"freq:altruism":"貧しい人々のための彼女の活動は利他の心から出ている。",
"freq:connotation":"その語には否定的な含みがある。",
"freq:exorcist":"その一家は悪魔払いの祈祷師を家に呼んだ。",
"freq:idiosyncratic":"その監督は独特の作風を持っている。",
"freq:plumage":"その鳥の雄は鮮やかな青い羽毛をしている。",
"freq:profess":"彼は最後まで自分の無実を主張した。",
"freq:tacit":"その計画は大臣の暗黙の承認を得ていた。",
"freq:colloquial":"その小説は口語の英語で書かれている。",
"freq:devotee":"彼女は古典音楽の熱心な愛好者だ。",
"freq:docile":"その馬はおとなしく、乗りやすい。",
"freq:edifice":"その宮殿は白い石でできた堂々たる大建築物だ。",
"freq:macabre":"その映画には気味の悪いユーモアがある。",
"freq:midwifery":"彼女はロンドンの病院で助産術の訓練を受けた。",
"freq:milieu":"彼は芸術的な環境で育った。",
"freq:overseer":"その現場監督は毎晩、作業を点検した。",
"freq:painstaking":"その本は入念な調査の成果だ。",
"freq:patchy":"山の中では電話の電波にむらがある。",
"freq:resuscitation":"その看護師はただちに蘇生処置を始めた。",
"freq:shoal":"銀色の魚の群れが船のそばを泳いで通った。",
"freq:tantamount":"彼の沈黙は自白に等しかった。",
"freq:trifle":"彼らはほんのささいなことで口論した。",
"freq:unoccupied":"その家は1年間空き家になっている。",
"freq:vindication":"その評決は彼女の長い運動の正しさを証明するものだった。",
"freq:artistically":"その料理は皿の上に芸術的に盛り付けられていた。",
"freq:congregate":"群衆が宮殿の外に集まった。",
"freq:corroborate":"2人の証人が彼の説明を裏づけた。",
"freq:euphemism":"「亡くなった」は「死んだ」の婉曲表現だ。",
"freq:exacerbate":"干ばつは食料不足を悪化させた。",
"freq:facilitation":"その機関の役割は貿易の促進だ。",
"freq:impersonal":"その病院は冷たく、人間味がないように感じられた。",
"freq:minefield":"税法は小企業にとって危険だらけの分野だ。",
"freq:recluse":"その作家は30年間、世捨て人として暮らした。",
"freq:reverb":"その歌手の声は強い残響を付けて録音された。",
"freq:stipulation":"その契約には残業についての規定がある。",
"freq:accrue":"その口座には毎月利子が付く。",
"freq:chronologically":"その写真は年代順に並べられている。",
"freq:opulent":"彼らはパリの豪華なホテルに泊まった。",
"freq:recessive":"青い目は劣性遺伝子によって生じる。",
"freq:taut":"その綱はぴんと引っ張られた。",
"freq:uneventful":"その飛行は長かったが、何事もなかった。",
"freq:confide":"彼女は自分の不安を親友に打ち明けた。",
"freq:dissect":"批評家たちはその演説の一行一行を詳しく分析した。",
"freq:ferocity":"その嵐の激しさは誰もを驚かせた。",
"freq:homely":"その宿には温かく、家庭的な雰囲気がある。",
"freq:innuendo":"その記事は彼の過去についての当てこすりだらけだった。",
"freq:interrogate":"警察はその容疑者を6時間尋問した。",
"freq:lavatory":"便所は廊下の突き当たりにある。",
"freq:magpie":"カササギがその光る指輪を盗んだ。",
"freq:recitation":"その晩は詩の朗読で始まった。",
"freq:reprimand":"その警官は正式な叱責を受けた。",
"freq:stratosphere":"その気球は成層圏まで上昇した。",
"freq:telltale":"押し入った形跡を示すしるしがあった。",
"freq:torrential":"激しい雨で通りが水浸しになった。",
"freq:virtuoso":"彼はバイオリンの名手だ。",
"freq:connoisseur":"彼女はフランスワインの目利きだ。",
"freq:divination":"祭司たちは動物の骨で占いを行った。",
"freq:exorcism":"司祭はその古い家で悪魔払いを行った。",
"freq:fabricate":"警察は証拠をでっち上げたとして非難された。",
"freq:fluctuation":"価格の変動は計画を難しくする。",
"freq:strapping":"彼は体格のよい若者に成長した。",
"freq:archetypal":"彼はうっかり者の教授の典型だ。",
"freq:attuned":"良い教師は一人ひとりの子どもの必要に敏感だ。",
"freq:cinematographer":"その撮影監督はその映画で賞を取った。",
"freq:hapless":"その不運な観光客たちは金をすべて失った。",
"freq:impervious":"彼は批判に動じないようだ。",
"freq:locomotion":"歩行は最も単純な移動の形だ。",
"freq:paradoxical":"休むと疲れることがあるというのは逆説的だ。",
"freq:sandwiched":"その店は2つの銀行の間に挟まれている。",
"freq:climactic":"その映画は山場の戦闘で終わる。",
"freq:detest":"彼女はどんな形の残酷さもひどく嫌う。",
"freq:enviable":"その会社はうらやましいほどの成功の実績を持っている。",
"freq:gravitate":"若者は大都市へと引き寄せられる。",
"freq:impersonation":"彼は大統領の面白い物まねをする。",
"freq:preoccupation":"彼の最大の関心事は自分の健康だ。",
"freq:rescind":"その議会は以前の決定を取り消した。",
"freq:supple":"ヨガは体をしなやかに保つ。",
"freq:veneration":"その聖人は村人たちに崇拝されている。",
"freq:allegorical":"その絵には寓意的な意味がある。",
"freq:coerce":"彼は強要されてその自白書に署名した。",
"freq:depravity":"その裁判はその犯罪の邪悪さを明らかにした。",
"freq:indignant":"彼女はその不公平な扱いに憤慨した。",
"freq:precocious":"その早熟な子は3歳で字が読めた。",
"freq:wry":"彼はその悪い知らせに苦笑いをした。",
"freq:brevity":"その報告書は簡潔さで称賛されている。",
"freq:claustrophobic":"その小さな部屋は息が詰まるように感じられた。",
"freq:desertion":"その兵士は脱走の罪で銃殺された。",
"freq:euphoric":"ファンたちは勝利の後、有頂天だった。",
"freq:plummet":"株価は一晩で急落した。",
"freq:romp":"子どもたちは庭ではしゃぎ回った。",
"freq:spontaneity":"その番組は初期の自然さを失った。",
"freq:tarnish":"その不祥事は彼の評判を傷つけた。",
"freq:verve":"そのオーケストラは大変な活気で演奏した。",
"freq:billiards":"彼らは毎晩、クラブでビリヤードをした。",
"freq:collider":"物理学者たちは巨大な粒子衝突型加速器を建設した。",
"freq:demography":"その国の人口構成は急速に変わっている。",
"freq:eccentricity":"彼の風変わりさは町で彼を有名にした。",
"freq:heighten":"その知らせは戦争への不安を高めた。",
"freq:implicate":"その手紙は2人の大臣がその不祥事に関与していたことを示した。",
"freq:justly":"その町が歴史を誇りにしているのは当然だ。",
"freq:lyricist":"その作詞家は200曲を超える歌の歌詞を書いた。",
"freq:menial":"彼は家賃を払うために単純な下働きの仕事に就いた。",
"freq:opacity":"批判者たちはその会社の会計の不透明さを攻撃した。",
"freq:overdraft":"その銀行は彼の借り越し限度を広げることに同意した。",
"freq:quiver":"泣くまいとして、彼女の唇は震えた。",
"freq:reminisce":"その旧友たちは学生時代の思い出を語り合った。",
"freq:buzzard":"ノスリが畑のはるか上を旋回した。",
"freq:commensurate":"給与は経験に見合ったものだ。",
"freq:diverge":"その2本の道は橋の先で分かれる。",
"freq:fiddler":"バイオリン弾きが村の踊りの会で演奏した。",
"freq:flagging":"その知らせはチームの沈みかけた士気を高めた。",
"freq:forlorn":"わびしげな犬が空き家のそばに座っていた。",
"freq:gush":"壊れた管から水がどっと流れ出た。",
"freq:pathos":"その映画はユーモアと哀感を織り交ぜている。",
"freq:physicality":"その踊り手は肉体的な力強さのある作風で知られている。",
"freq:portraiture":"彼女は子どもを描いた肖像画で有名だ。",
"freq:seedy":"彼らは駅の近くのいかがわしい酒場で会った。",
"freq:substantiate":"彼は自分の主張を立証できなかった。",
"freq:summarily":"その労働者たちは即座に解雇された。",
"freq:wane":"その話への世間の関心は衰え始めた。",
"freq:brimstone":"その説教師は業火と硫黄の責め苦を警告した。",
"freq:contraption":"彼はリンゴの皮をむく奇妙な仕掛けを作った。",
"freq:disillusionment":"政府への幻滅が広がっている。",
"freq:elaboration":"その計画はさらに詳しい説明が必要だ。",
"freq:fissure":"岩の裂け目から蒸気が立ち上った。",
"freq:malleable":"金は柔らかく、加工しやすい金属だ。",
"freq:acrobatic":"サルたちは軽業のような動きを見せた。",
"freq:consternation":"その発表は投資家たちをろうばいさせた。",
"freq:cynic":"皮肉屋なら、彼は金が欲しいだけだと言うだろう。",
"freq:dampen":"雨は彼らの意気をそがなかった。",
"freq:extravagance":"その宮殿は王室の浪費の象徴だ。",
"freq:raunchy":"そのコメディアンはきわどい冗談で知られている。",
"freq:salve":"彼女はやけどに軟膏を塗った。",
"freq:bereft":"彼は敗北の後、希望を失っていた。",
"freq:buffoon":"彼はパーティーで道化者のように振る舞った。",
"freq:derision":"彼の提案は嘲笑で迎えられた。",
"freq:dramatist":"その劇作家は30本の戯曲を書いた。",
"freq:grumble":"乗客たちは長い遅れに不平を言った。",
"freq:rediscover":"彼女は絵を描く喜びを再発見した。",
"freq:selectivity":"その薬は高い選択性を持って作用する。",
"freq:squint":"彼は小さな活字を目を細めて見た。",
"freq:topographical":"軍はその地域の地形図を使った。",
"freq:verily":"「まことに、あなたがたに言う」と説教師は始めた。",
"freq:wallow":"彼は何週間も自己憐憫に浸った。",
"freq:allot":"各講演者には10分が割り当てられた。",
"freq:blurb":"カバーの宣伝文はその著者を称賛している。",
"freq:ewe":"その雌羊は子羊のそばを離れなかった。",
"freq:exuberance":"子どもたちは若さあふれる元気で走り回った。",
"freq:familiarize":"新しい職員は規則に習熟しなければならない。",
"freq:obliterate":"その爆弾は村を完全に破壊した。",
"freq:persecute":"その政権は政敵を迫害した。",
"freq:preeminent":"彼女はその時代の卓越した歴史家だ。",
"freq:showy":"彼は派手な赤いスポーツカーに乗っている。",
"freq:suburbia":"その小説は静かな郊外での生活を描いている。",
"freq:vandal":"破壊者たちがその学校の窓を割った。",
"freq:elongate":"その画家は絵の中の人物を細長く描いた。",
"freq:elude":"その泥棒は何か月も警察を巧みに逃れた。",
"freq:etch":"その光景は私の記憶に刻まれている。",
"freq:irate":"激怒した客が返金を要求した。",
"freq:lethargic":"暑さで誰もがだるくなった。",
"freq:maggot":"その肉にはウジ虫がわいていた。",
"freq:scoff":"批評家たちはその考えをあざ笑った。",
"freq:sketchbook":"彼女は写生帳を鳥の絵でいっぱいにした。",
"freq:squirm":"その少年は席でもじもじした。",
"freq:surrealism":"その美術館は超現実主義の展覧会を開いている。",
"freq:telescopic":"そのカメラには望遠レンズが付いている。",
"freq:babble":"その赤ん坊はベッドで機嫌よく片言をしゃべった。",
"freq:haphazard":"その本はでたらめに並べられていた。",
"freq:irrevocably":"その戦争はその国を取り返しがつかないほど変えた。",
"freq:oddity":"その両面とも表の硬貨は実に珍しいものだ。",
"freq:placate":"その支配人は怒った客たちをなだめようとした。",
"freq:prescriptive":"その規則は小企業にとって細かく指図しすぎている。",
"freq:slob":"彼は自分の部屋を決して掃除しない無精者だ。",
"freq:stipulate":"その契約は納期を明記している。",
"freq:voracious":"彼女は小説をむさぼるように読む。",
"freq:banishment":"その詩人は故郷から遠く離れた流刑の地で亡くなった。",
"freq:conciliatory":"大臣は融和的な口調で話した。",
"freq:irrevocable":"その決定は最終的で、取り消せない。",
"freq:mottled":"その鳥はまだらの茶色い羽をしている。",
"freq:mountaineer":"その登山家は単独で頂上に達した。",
"freq:posit":"その理論は食事と気分の関連を仮定している。",
"freq:reclusive":"その隠遁した作家はめったに取材に応じない。",
"freq:scrutinize":"検査官たちは誤りがないか会計を綿密に調べた。",
"freq:sedate":"その町はゆったりした調子で動いている。",
"freq:cloister":"修道士たちは黙って回廊を歩いた。",
"freq:credential":"彼女はその仕事にふさわしい資格を持っている。",
"freq:monotony":"音楽はその旅の単調さを破る助けになった。",
"freq:prowl":"キツネが夜、その農場の周りをうろついた。",
"freq:repose":"休んでいるときの彼女の顔は穏やかだった。",
"freq:reptilian":"その生き物は冷たい、は虫類のような目をしていた。",
"freq:seedling":"その苗を日当たりのよい場所に植えなさい。",
"freq:surrealist":"その画廊は超現実主義の絵を展示している。",
"freq:temperamental":"そのスターは才能があるが気まぐれだ。",
"freq:conciliation":"その争いは調停によって解決された。",
"freq:culminate":"その抗議は最終的にゼネストに至った。",
"freq:domestication":"馬の家畜化は人類の歴史を変えた。",
"freq:enabler":"技術は成長を可能にする重要な要素だ。",
"freq:nonchalant":"彼は面接の間、平然として見えるよう努めた。",
"freq:squander":"彼は財産を賭け事で浪費した。",
"freq:cay":"その船は小さな砂の小島のそばに停泊した。",
"freq:crony":"市長は自分の取り巻きに契約を与えた。",
"freq:glean":"記者たちは地元住民から詳細を少しずつ集めた。",
"freq:gutsy":"仕事を辞めたのは度胸のある決断だった。",
"freq:impersonator":"そのショーにはエルビスの物まね芸人が出演した。",
"freq:lurid":"その新聞は殺人事件のどぎつい詳細を載せた。",
"freq:recuperate":"彼は手術の後、自宅で回復に努めている。",
"freq:detritus":"その浜辺は嵐の残骸に覆われていた。",
"freq:patronize":"私を見下さないで。ちゃんと理解しています。",
"freq:rustle":"夕方のそよ風で木の葉がさらさら音を立てた。",
"freq:cogent":"彼女は改革について説得力のある議論を展開した。",
"freq:floodgates":"その判決は新たな請求のせきを切った。",
"freq:pedicure":"彼女は自分へのごほうびに足の爪の手入れをしてもらった。",
"freq:primeval":"その谷は太古の森に覆われている。",
"freq:revulsion":"彼女はその血を見て嫌悪感を覚えた。",
"freq:unsurpassed":"その地域は自然の美しさで並ぶものがない。",
"freq:wistful":"彼女はその古い写真を物思いに沈んだ目で見た。",
"freq:allude":"彼は自分の結婚生活に問題があることをほのめかした。",
"freq:elation":"勝利に対するチームの大喜びは誰の目にも明らかだった。",
"freq:envisage":"その計画は2040年までに新空港を造ることを見込んでいる。",
"freq:hibernate":"コウモリの中には洞窟で冬眠するものがいる。",
"freq:usurp":"その将軍は王位を奪おうとした。",
"freq:cleverness":"その計画は巧妙さを称賛された。",
"freq:fabulously":"その一家は石油で途方もなく裕福になった。",
"freq:headstrong":"その強情な少年は耳を貸そうとしなかった。",
"freq:incongruous":"その現代的な塔は旧市街では場違いに見える。",
"freq:lethargy":"その病気は患者をけだるい状態にする。",
"freq:maelstrom":"その国は戦争の大混乱に引き込まれた。",
"freq:opulence":"訪問者はその宮殿の豪華さに驚く。",
"freq:personalize":"短い伝言を添えて、その贈り物を自分だけのものにできる。",
"freq:proliferate":"偽ニュースのサイトは近年急増している。",
"freq:pyre":"その遺体は火葬のまきの山の上で焼かれた。",
"freq:requisition":"軍はその学校を病院として徴発した。",
"freq:retrace":"彼女はなくした鍵を探すために来た道を引き返した。",
"freq:thicket":"シカがやぶの中に姿を消した。",
"freq:unconvincing":"彼は説得力のない説明をした。",
"freq:undaunted":"失敗にひるむことなく、彼女はもう一度挑戦した。",
"freq:fete":"その村は毎年、夏の祭りを開く。",
"freq:frolic":"子羊たちが春の日差しの中ではしゃぎ回った。",
"freq:haughty":"彼女は彼に高慢な視線を向けた。",
"freq:headmistress":"女性校長は全校生徒に話をした。",
"freq:prostrate":"彼は床にうつぶせに横たわっていた。",
"freq:rickety":"私たちはぐらぐらする木の橋を渡った。",
"freq:supersede":"来年、新しい規則が古い規則に取って代わる。",
"freq:sustainably":"その木材は持続可能な形で管理された森林から来ている。",
"freq:unmanageable":"その債務は手に負えない規模に膨らんだ。",
"freq:extrapolate":"これらの数字から将来の売上を推定できる。",
"freq:quip":"彼は大臣の帽子について気の利いた冗談を言った。",
"freq:unadulterated":"その晩は純粋で、まったくの楽しみだった。",
"freq:zany":"その映画は2人の強盗を描いたばかばかしく愉快な喜劇だ。",
"freq:abdicate":"王は退位を強いられた。",
"freq:brainwash":"そのカルト集団は若い信者を洗脳しようとした。",
"freq:breadwinner":"彼の事故の後、彼女が一家の主な稼ぎ手になった。",
"freq:darkroom":"彼は暗室でその写真を現像した。",
"freq:glitz":"彼女はハリウッドの派手さにうんざりしていた。",
"freq:insubordination":"その兵士は不服従で処罰された。",
"freq:salivary":"その感染症は唾液腺を侵す。",
"freq:aimless":"彼は当てのない旅に何か月も費やした。",
"freq:clench":"彼は怒りでこぶしを固く握った。",
"freq:farcical":"その審理は茶番のような言い争いに成り下がった。",
"freq:haggle":"観光客は市場で値切り交渉をする。",
"freq:minutiae":"彼はどの報告書でも細かい点にとらわれてしまう。",
"freq:paralyze":"そのストライキは市の交通をまひさせた。",
"freq:unobtrusive":"そのカメラは小さく、目立たない。",
"freq:abhor":"ほとんどの人は動物への残酷な行為をひどく嫌う。",
"freq:aghast":"彼女は請求額の大きさに仰天した。",
"freq:contemptuous":"彼は競争相手をさげすんでいた。",
"freq:crystallization":"その報告書は新しい政策が具体的な形になったことを示した。",
"freq:inexorably":"価格は1年を通じて止めようもなく上がった。",
"freq:nondescript":"彼は特徴のない灰色の建物に住んでいる。",
"freq:recuperation":"彼には長い療養期間が必要だ。",
"freq:repute":"彼女は評判の高い弁護士だ。",
"freq:dutiful":"彼は毎週訪ねて来る孝行息子だった。",
"freq:engender":"その方針は労働者の間に憤りを生んだ。",
"freq:impeccably":"彼は面接のために申し分のない服装をしていた。",
"freq:stoicism":"彼女は冷静にその痛みに耐えた。",
"freq:verandah":"彼らは夕方、ベランダに座った。",
"freq:plausibly":"彼はその容疑をもっともらしく否定することができなかった。",
"freq:remittance":"多くの家族が海外からの送金に頼っている。",
"freq:resuscitate":"医師たちはその患者を蘇生させようとした。",
"freq:smattering":"彼にはドイツ語の生かじりの知識がある。",
"freq:amply":"彼女の努力は十分に報われた。",
"freq:antithetical":"そのような秘密主義は民主主義と相いれない。",
"freq:denunciation":"その演説は戦争への激しい非難だった。",
"freq:exonerate":"新しい証拠がその囚人の疑いを晴らした。",
"freq:indiscretion":"彼は若気の至りの軽率な行いで職を失った。",
"freq:magnanimous":"勝者は競争相手に対して寛大だった。",
"freq:chrysalis":"さなぎからチョウが出てきた。",
"freq:heifer":"その農家は市場で若い雌牛を買った。",
"freq:laud":"批評家たちはその映画を傑作として称賛した。",
"freq:remorseful":"彼は自分の言ったことを深く後悔していた。",
"freq:sheaf":"彼女は紙の束を部屋に運び込んだ。",
"freq:unencumbered":"彼は荷物に煩わされることなく、身軽に旅をした。",
"freq:virtuosity":"そのピアニストは目もくらむような名人芸で演奏した。",
"freq:wrangle":"双方はその土地をめぐって法廷で争っている。",
"freq:tactful":"彼女はその気まずい質問に如才なく答えた。",
"freq:artifice":"彼は策略によって彼女の信頼を得た。",
"freq:disparage":"彼は決して他人の仕事をけなさない。",
"freq:drudgery":"機械は労働者を日々の骨の折れる単調な仕事から解放した。",
"freq:feign":"彼が部屋に入ると、彼女は眠ったふりをした。",
"freq:melodious":"その鳥は澄んだ、耳に心地よい声でさえずる。",
"freq:naivety":"彼は自分の世間知らずぶりに衝撃を受けた。",
"freq:philistine":"彼はその批評家たちを教養のない俗物の集まりと呼んだ。",
"freq:possessor":"彼は希少な切手の誇り高い所有者だ。",
"freq:staccato":"彼は短く、ぶつ切りの文で話した。",
"freq:ceaseless":"絶え間ない車の騒音で彼女は眠れなかった。",
"freq:credibly":"その計画が安全だと信頼できる形で主張できる人はいない。",
"freq:inexhaustible":"彼女には尽きることのない活力がある。",
"freq:inexorable":"止めようのない物価の上昇が家庭を不安にさせている。",
"freq:moribund":"その改革は瀕死の産業をよみがえらせた。",
"freq:personalization":"そのアプリは話題ごとにニュースを個人向けに合わせる機能を提供している。",
"freq:refurbish":"その議会は古い図書館を改装する計画だ。",
"freq:torturous":"その登りは遅く、ひどく苦しかった。",
"freq:unassisted":"彼女は今では助けを借りずに歩ける。",
"freq:ameliorate":"その新薬は症状を改善できる。",
"freq:claustrophobia":"彼はエレベーターの中で閉所恐怖症になる。",
"freq:concurrence":"その計画には両大臣の同意が必要だ。",
"freq:gnaw":"その犬は庭で骨をかじった。",
"freq:hermetic":"その瓶は密閉されている。",
"freq:inscrutable":"彼の顔は会議の間ずっと何を考えているのかわからないままだった。",
"freq:postural":"机での長時間の作業は姿勢の問題を引き起こすことがある。",
"freq:puritanical":"彼は厳格で禁欲的な家庭で育てられた。",
"freq:suds":"流しはせっけんの泡でいっぱいだった。",
"freq:anarchic":"その番組には型破りで無秩序なユーモアがある。",
"freq:beguiling":"その島には人を引きつける魅力がある。",
"freq:dissension":"その党の中で意見の対立が広がっている。",
"freq:exhilaration":"彼は斜面を滑り降りる爽快感を味わった。",
"freq:outmoded":"その工場はいまだに旧式の機械を使っている。",
"freq:plausibility":"専門家たちはその理論の妥当性を疑っている。",
"freq:subsist":"その難民たちは米と水で命をつないでいる。",
"freq:tedium":"彼は航海の退屈を紛らわすために小説を読んだ。",
"freq:uninspiring":"その候補者は面白みのない演説をした。",
"freq:axiomatic":"すべての市民が法の前に平等であることは自明だ。",
"freq:colloquium":"彼女はローマの学術会議で論文を発表した。",
"freq:gape":"子どもたちはその巨大なゾウをぽかんと口を開けて見た。",
"freq:impresario":"その興行主はそのオペラをロンドンに持ってきた。",
"freq:incipient":"医師たちは初期の感染を見つけた。",
"freq:vindicate":"その結果は彼女の決定の正しさを立証した。",
"freq:blubber":"クジラは脂肪の層によって寒さから守られている。",
"freq:ephemera":"彼はポスターや切符などの一時的な印刷物を集めている。",
"freq:gauche":"彼は優雅な客たちの中で気後れし、自分が不器用に感じた。",
"freq:inducement":"その会社はとどまる誘因として賞与を出している。",
"freq:slither":"ヘビが小道をするすると横切った。",
"freq:snobbery":"なまりについてはいまだに上流気取りの偏見が多い。",
"freq:sterility":"その病気は男性の不妊を引き起こすことがある。",
"freq:exude":"彼女はどの面接でも自信を漂わせている。",
"freq:glum":"選手たちは敗戦の後、ふさぎ込んで見えた。",
"freq:improvisational":"その俳優は即興の技で有名だ。",
"freq:predilection":"彼は辛い食べ物を好む。",
"freq:ruthlessness":"彼は商売での冷酷さで恐れられている。",
"freq:utensil":"その店は鍋やフライパンなどの台所用具を売っている。",
"freq:astringent":"その批評家は辛辣な機知で知られている。",
"freq:gruelling":"そのチームは過酷な試合日程に直面した。",
"freq:liaise":"彼女の仕事は地元の学校と連絡を取り合うことだ。",
"freq:zoologist":"その動物学者は何年もオオカミを研究した。",
"freq:capitulate":"政府はストライキ参加者に屈服することを拒んだ。",
"freq:hypothesize":"科学者たちは、その病気は鳥に由来するという仮説を立てている。",
"freq:ostensible":"彼の訪問の表向きの理由は仕事だった。",
"freq:imperceptible":"彼女の声にはほとんど気づかないほどの変化があった。",
"freq:intuit":"彼女は彼が何を考えているかを直感で知るようだった。",
"freq:protrude":"壁からくぎが突き出ていた。",
"freq:romper":"その赤ん坊は青いつなぎ服を着ていた。",
"freq:stiffen":"その足音を聞いて彼は身をこわばらせた。",
"freq:unfeasible":"その計画は実行不可能として退けられた。",
"freq:confection":"その店はチョコレートなどの菓子を売っている。",
"freq:delicatessen":"彼女は地元の総菜店でチーズを買った。",
"freq:ordain":"彼は1990年に司祭に任命された。",
"freq:protrusion":"その岩は片側に鋭い突起がある。",
"freq:somersault":"その体操選手は完璧な宙返りをした。",
"freq:adornment":"彼女は簡素な指輪のほかには何の飾りも着けていなかった。",
"freq:bequeath":"彼は蔵書をその大学に遺贈した。",
"freq:clammy":"彼の手は冷たく、じっとりしていた。",
"freq:detestable":"それは憎むべき残酷な行為だった。",
"freq:distill":"その本は20年の研究の精髄を抽出している。",
"freq:explosively":"戦後、人口は爆発的に増えた。",
"freq:ponderous":"その映画は遅く、重苦しい。",
"freq:vestigial":"その鳥には小さな、痕跡程度の翼がある。",
"freq:virginal":"その丘は誰も踏んでいない雪に覆われていた。",
"freq:consign":"その古いコンピューターは地下室に追いやられた。",
"freq:fiendish":"その試験には極めて難しい問題が含まれていた。",
"freq:flit":"チョウが花から花へひらひら飛んだ。",
"freq:idiomatic":"彼女は流ちょうで自然なフランス語を話す。",
"freq:neglectful":"裁判所はその両親が養育を怠っていたと認めた。",
"freq:paternalistic":"その会社は従業員に対して温情主義的な態度をとっている。",
"freq:recumbent":"その像は横たわるライオンを表している。",
"freq:angsty":"その映画は小さな町の悩み多き十代を追っている。",
"freq:impressionistic":"その本はその戦争を印象に基づいて描いている。",
"freq:prise":"彼はナイフで箱のふたをこじ開けた。",
"freq:repudiate":"大臣はその報告書の結論を否認した。",
"freq:revelatory":"そのインタビューは視聴者にとって目を開かされる体験だった。",
"freq:blithely":"彼はあらゆる警告をのんきに無視した。",
"freq:fiddly":"電池の交換は細かくて面倒な作業だ。",
"freq:happenstance":"彼らは空港でまったくの偶然から出会った。",
"freq:settee":"その猫は長いすの上で眠っていた。",
"freq:calamitous":"その決定は町に悲惨な結果をもたらした。",
"freq:deplore":"私たちは民間人に対する暴力の行使を強く非難する。",
"freq:ecotourism":"その島は収入の大半をエコツーリズムから得ている。",
"freq:infallibility":"専門家が絶対に誤らないと信じている人はいない。",
"freq:singe":"炎が彼の眉を焦がした。",
"freq:catastrophically":"そのエンジンは試験中に壊滅的な故障を起こした。",
"freq:exhibitionist":"彼は舞台に立つのが大好きな目立ちたがり屋だ。",
"freq:reenact":"毎年夏、役者たちがその戦いを再現する。",
"freq:reverberation":"その不祥事の余波は何年も続いた。",
"freq:buccaneer":"その島はかつて海賊の拠点だった。",
"freq:rapturous":"その歌手は熱狂的な歓迎を受けた。",
"freq:truism":"健康が金より大切だというのは自明の理だ。",
"freq:wheeze":"彼は階段を上りながらぜいぜい息をした。",
"freq:lamentation":"その村は嘆きの叫び声で満ちた。",
"freq:mangle":"その機械は書類をめちゃめちゃにした。",
"freq:loiter":"十代の若者たちが駅の外でぶらついていた。",
"freq:interject":"「それは本当ではない」と彼女は口を挟んだ。",
"freq:taciturn":"彼はめったに笑わない無口な男だ。",
"freq:besiege":"軍はその都市を3か月間包囲した。",
"freq:derisive":"彼の演説はあざけりの笑いで迎えられた。",
"freq:remorseless":"容赦のない暑さが井戸を干上がらせた。",
"freq:crystallize":"その考えは彼女の頭の中で明確になり始めた。",
"freq:disdainful":"彼女はその安いワインに軽蔑的な視線を向けた。",
"freq:ardor":"彼は自分の国について情熱を込めて語った。",
"freq:fractious":"そのむずかる子は寝るのを嫌がった。",
"freq:ignominious":"そのチームは屈辱的な敗北を喫した。",
"freq:timidity":"彼女は内気さのせいで声を上げられなかった。",
"freq:disquieting":"国境から不安を呼ぶ報告が届いている。",
"freq:neophyte":"その講座は初心者には難しすぎる。",
"freq:galvanize":"その攻撃は国民を奮い立たせて行動に向かわせた。",
"freq:extol":"その記事は田舎暮らしの良さを激賞している。",
"freq:affectation":"彼の外国なまりは単なる気取りだ。",
"freq:histrionic":"彼女は絶望を表す芝居がかった身ぶりをした。",
"freq:reverberate":"その爆発は谷中に反響した。",
"freq:scornful":"彼は彼らの努力をあざけった。",
"freq:ventilate":"部屋を換気するために窓を開けなさい。",
"freq:surreptitious":"彼は彼女のメモをこっそりのぞいた。",
"freq:venerate":"村人たちはその古いオークの木をあがめている。",
"freq:resound":"歓声が競技場に鳴り響いた。",
"freq:unsettle":"その突然の変更は職員を動揺させた。",
"freq:circumnavigate":"彼は単独で地球を一周した最初の人だった。",
"freq:indolent":"彼は怠惰すぎて仕事を探そうとしなかった。",
"freq:unenviable":"彼女には家族に知らせるというありがたくない役目がある。",
"freq:induct":"彼女は殿堂入りを果たした。",
"freq:mutinous":"船長は反抗的な乗組員に直面した。",
"freq:ingratiate":"彼は取締役に取り入ろうとした。",
"freq:anticlimactic":"あれだけ待った末に、その結末は拍子抜けだった。",
"freq:perversity":"まったくのつむじ曲がりから、彼は手伝うことを拒んだ。",
"freq:magnanimity":"彼女は競争相手に対して大きな寛大さを見せた。",
"freq:incarcerate":"彼は10年間投獄された。",
"freq:brandish":"その強盗は店員にナイフを振りかざした。",
"freq:incongruity":"彼はその状況のちぐはぐさを笑った。",
"freq:insubordinate":"その反抗的な将校は罷免された。",
"freq:decentralize":"政府は権力を地方に分散させる計画だ。",
"freq:contrive":"彼女は偶然を装って彼に会うようにたくらんだ。",
"freq:verisimilitude":"細かい描写がその小説に本当らしさを与えている。",
"freq:prurient":"その新聞は不祥事への下世話な興味に訴えている。",
"freq:ruminate":"彼は彼女の言葉の意味を思いめぐらした。",
"freq:brouhaha":"新しい制服をめぐって大騒ぎがあった。",
"freq:demystify":"その本は金融の世界をわかりやすく解き明かしている。",
"freq:juxtapose":"その展覧会は古い絵と新しい絵を並べて対比させている。",
"freq:totter":"その老人はよろめきながら道路を渡った。",
"freq:agonize":"彼女はその決断について何日もひどく悩んだ。",
"freq:belligerence":"彼のけんか腰の態度が話し合いを不可能にした。",
"freq:salivate":"その犬は肉のにおいによだれを垂らした。",
"freq:dither":"ぐずぐず迷うのをやめて、決断しなさい。",
"freq:laudatory":"その本は称賛の書評を受けた。",
"freq:preconception":"先入観を持たずにその報告書を読むようにしなさい。",
"freq:solipsism":"その詩人は自己中心的だと非難された。",
"freq:wizened":"しわだらけの老人が火のそばに座っていた。",
"freq:domesticate":"人間は何千年も前に犬を飼いならした。",
"freq:presuppose":"その計画は売上の着実な伸びを前提としている。",
"freq:antediluvian":"彼は教育についてひどく時代遅れの考えを持っている。",
"freq:indolence":"彼の失敗は怠惰の結果だった。",
"freq:teem":"その川は春には魚で満ちあふれる。",
"freq:immortalize":"その詩人はその戦いを詩にして永遠に残した。",
"freq:inchoate":"彼女の考えはまだ漠然としていて、まとまっていなかった。",
"freq:euphemistic":"その報告書は人員削減について婉曲的な言葉を使っている。",
"freq:daunt":"その仕事の大きさは彼女をひるませなかった。",
"freq:mollify":"その支配人は怒った客たちをなだめようとした。",
"freq:embezzle":"その会計係は100万ドルを横領した。",
"freq:economize":"この冬は燃料を節約しなければならない。",
"freq:revile":"その独裁者は自国民から激しくののしられた。",
"freq:connote":"「home」という語は温かさと安全を暗示する。",
"freq:edify":"その講演は一般の人々を啓発するためのものだった。",
"freq:idiosyncrasy":"植物に話しかけるのは彼の特有の癖の一つだ。",
"freq:ingenuous":"彼女は無邪気な笑みを浮かべた。",
"freq:unnerve":"その家の静けさは彼を不安にさせた。",
"freq:exasperate":"彼の絶え間ない言い訳は教師たちをいら立たせる。",
"freq:qualm":"彼は報道陣にうそをつくことに何のためらいもなかった。",
"freq:deprecate":"彼は自分の業績を軽んじる傾向がある。",
"freq:dissemble":"彼女は正直すぎて本心を偽ることができない。",
"freq:proscribe":"その法律はそのような武器の販売を禁じている。",
"freq:remonstrate":"彼女は運転手に速度について抗議した。",
"freq:engross":"そのゲームは子どもたちを何時間も夢中にさせることがある。",
"freq:tantalize":"パンの焼けるにおいが空腹の少年たちをじらした。",
"freq:munificence":"その博物館は一つの家の気前のよい寄付によって建てられた。",
"freq:lassitude":"暑さはけだるい気分を生んだ。",
"freq:encumber":"重いかばんで身動きを取りにくくしてはいけない。",
"freq:adulterate":"牛乳に水を混ぜる業者もいる。",
"freq:intersperse":"彼は話の所々に冗談を入れるのが好きだ。",
"freq:appall":"その野営地の状況は訪れる人を誰もがく然とさせる。",
"freq:suffuse":"暖かな光が東の空を満たし始めた。",
"freq:transfix":"その奇妙な光は見る人を誰もくぎ付けにする。",
"freq:exhilarate":"速い乗り物は、ある人を爽快にし、別の人を怖がらせる。",
"freq:stultify":"退屈な決まりきった作業は頭を鈍らせる。"});
const TAGS = {"criteria":"g","scenario":"g","sustainable":"n","chill":"n","structural":"s","magnetic":"s","counsel":"l","marvel":"f","harbor":"f","vertical":"s","conviction":"l","trauma":"m","linear":"s","provisions":"l","cognitive":"m","restoration":"c","facial":"g","jurisdiction":"l","ore":"n","governance":"p","provincial":"p","ethical":"g","hostile":"f","momentum":"g","notable":"g","testament":"g","allegedly":"l","demo":"p","elaborate":"g","hull":"s","realm":"g","bout":"m","hack":"s","stance":"p","echo":"g","peninsula":"n","sentiment":"f","thereby":"g","threshold":"e","aesthetic":"c","ego":"f","fusion":"s","gauge":"g","inclusion":"g","pending":"l","bail":"l","harassment":"l","precision":"s","stark":"g","void":"f","voluntary":"g","coup":"p","crude":"e","disclosure":"l","magnitude":"g","pledge":"p","affiliate":"e","asylum":"p","fossil":"n","offset":"e","speculation":"e","successor":"g","wicked":"h","acoustic":"c","doctrine":"p","gig":"c","intact":"g","prey":"n","prophet":"c","referendum":"p","sequel":"c","clan":"c","clash":"p","coupled":"g","mandate":"p","revealing":"g","succession":"g","tactical":"p","clearance":"g","deceased":"l","detention":"l","explicit":"g","fraction":"g","viable":"g","amid":"g","herald":"g","plea":"l","rhetoric":"p","salvation":"c","secular":"c","sovereign":"p","synthetic":"s","optimal":"s","profound":"g","rebellion":"p","robust":"e","swap":"g","terrain":"n","acre":"n","descent":"g","halt":"g","litigation":"l","norm":"p","orthodox":"c","prone":"g","sanctuary":"n","siege":"p","tenure":"g","delegation":"p","demographic":"p","subsidiary":"e","velocity":"s","accountability":"p","albeit":"g","deployment":"p","exterior":"g","fury":"f","genocide":"p","humanitarian":"p","immunity":"m","likelihood":"g","pioneer":"g","suburban":"g","accountable":"p","advocacy":"p","aftermath":"g","aggression":"p","blunt":"h","clarity":"g","discretion":"g","elevation":"n","esteem":"f","hostage":"l","mortality":"m","reservoir":"n","sworn":"l","transparency":"p","withdrawn":"h","heir":"l","liable":"l","rogue":"h","solidarity":"p","clutch":"g","credibility":"g","haul":"g","juvenile":"l","leverage":"e","militia":"p","tribunal":"l","abusive":"l","gem":"g","hypothesis":"s","psychiatric":"m","repeal":"l","saga":"c","surplus":"e","woo":"p","autonomy":"p","commodity":"e","correlation":"s","fragile":"g","fringe":"p","irony":"g","judiciary":"l","legion":"g","lethal":"m","scroll":"c","sovereignty":"p","thrust":"g","arbitrary":"g","autonomous":"s","bait":"g","levy":"e","manipulation":"g","niche":"e","obscure":"g","proposition":"g","stretching":"m","therapeutic":"m","atmospheric":"n","disclose":"g","exploitation":"p","goose":"n","monopoly":"e","synthesis":"s","treason":"l","violet":"n","critique":"c","discourse":"c","dominance":"g","inherent":"g","justification":"g","outright":"g","oversight":"g","refreshing":"f","statute":"l","vicious":"h","wholly":"g","assassination":"p","citation":"c","congregation":"c","decree":"l","drift":"g","geological":"n","methodology":"s","predecessor":"g","premise":"g","reckless":"h","redemption":"c","unprecedented":"g","accord":"p","boycott":"p","eclipse":"n","inferior":"g","injustice":"p","privileged":"p","reliance":"g","retention":"g","definitive":"g","epidemic":"m","extraction":"n","homicide":"l","inheritance":"l","ironic":"g","righteous":"h","vicinity":"g","curb":"e","faction":"p","inconsistent":"g","probation":"l","strap":"g","subjective":"g","traumatic":"m","alignment":"g","apparatus":"s","bliss":"f","buffer":"g","collaborative":"g","compromised":"m","cosmic":"s","exempt":"l","foremost":"g","forge":"g","hierarchy":"p","invalid":"l","metabolism":"m","parody":"c","parole":"l","render":"g","traction":"g","contested":"p","continuity":"g","credible":"g","felony":"l","ideological":"p","incumbent":"p","maternal":"m","memoir":"c","mold":"g","offspring":"n","prop":"g","simplicity":"g","vegetation":"n","behold":"g","bypass":"g","corpse":"l","dementia":"m","phenomenal":"g","spatial":"s","statutory":"l","stellar":"g","turf":"g","twitch":"m","endorsement":"p","finite":"g","flagship":"e","forensic":"l","infamous":"g","mesh":"g","migrant":"p","naive":"h","remotely":"g","rigid":"h","utilize":"g","allocation":"e","beacon":"g","bounty":"g","clergy":"c","dwelling":"g","expenditure":"e","scrutiny":"g","seizure":"l","stray":"g","systemic":"g","uprising":"p","whereby":"g","contention":"g","covenant":"l","greed":"f","pact":"p","paramount":"g","paranoid":"f","proxy":"l","revolt":"p","shrine":"c","solitary":"h","stoke":"g","thrive":"g","arbitration":"l","bilateral":"p","classy":"g","confrontation":"p","dismissal":"l","empathy":"f","feasible":"g","insecure":"f","lust":"f","occupational":"g","onset":"m","persecution":"p","reconciliation":"p","specimen":"s","sponsorship":"e","unlawful":"l","accredited":"g","apex":"g","consolidation":"e","convoy":"p","diplomacy":"p","directive":"p","friction":"g","magistrate":"l","marginal":"g","milestone":"g","predator":"n","prophecy":"c","salute":"g","severity":"g","slack":"e","spontaneous":"g","tract":"n","akin":"g","beware":"g","comprehend":"g","contamination":"n","counterpart":"g","creed":"c","domination":"p","fracture":"m","genome":"s","indictment":"l","meaningless":"g","premature":"g","psychiatrist":"m","validity":"g","wrath":"f","aide":"p","allegiance":"p","apt":"g","constituency":"p","contingent":"g","entirety":"g","exodus":"p","invasive":"n","irrigation":"n","monarch":"p","persona":"h","plaque":"c","preach":"c","purity":"g","realism":"c","stigma":"p","betrayal":"f","communal":"g","consortium":"e","efficacy":"m","manifest":"g","mutually":"g","perimeter":"g","preacher":"c","procurement":"e","ransom":"l","rigorous":"g","skeptical":"h","suppression":"p","trustee":"l","turnout":"p","unanimous":"g","vengeance":"f","cite":"g","commercially":"e","imminent":"g","inaugural":"p","lure":"g","malicious":"h","muscular":"m","neutrality":"p","partition":"p","proprietary":"e","protagonist":"c","snail":"n","susceptible":"m","verge":"g","vibrant":"g","collateral":"e","demise":"g","dire":"g","dominion":"p","misconduct":"l","mute":"g","prevalence":"m","saturated":"e","tangible":"g","tilt":"g","veil":"g","versatile":"h","anthropology":"s","caliber":"g","deception":"l","helm":"g","hypocrisy":"h","incompetent":"h","intervene":"p","manifesto":"p","negligence":"l","obsolete":"s","posture":"m","resonance":"g","ruthless":"h","salvage":"g","satire":"c","standpoint":"g","sway":"g","undermine":"g","veto":"p","vocational":"g","withstand":"g","accustomed":"g","corpus":"s","dictatorship":"p","electorate":"p","erosion":"n","flank":"g","incidence":"m","mutation":"s","mythology":"c","pest":"n","pillar":"g","precipitation":"n","restraint":"g","rift":"p","supremacy":"p","affiliation":"p","align":"g","amnesty":"l","assertion":"g","atop":"g","cache":"l","displacement":"p","drastic":"g","edible":"n","flick":"g","legitimacy":"p","portray":"c","practitioner":"g","stationary":"g","temporal":"s","ambient":"s","comprise":"g","conceptual":"s","demolition":"g","differentiate":"g","empirical":"s","fertile":"n","feud":"g","fuse":"s","gale":"n","mantle":"g","militant":"p","nostalgia":"f","peasant":"c","presume":"g","sabotage":"l","sarcasm":"h","tally":"g","vile":"g","wedge":"g","adaptive":"s","affinity":"f","apartheid":"p","casualty":"p","cavity":"m","dissolution":"p","enclosure":"g","famine":"p","fraudulent":"l","homage":"c","hostility":"f","hypothetical":"g","paradigm":"s","perpetual":"g","pigeon":"n","plateau":"n","precinct":"l","regeneration":"g","reminiscent":"g","resentment":"f","resin":"s","scarce":"g","sibling":"g","stint":"g","trajectory":"s","utmost":"g","adjustable":"g","authenticity":"c","caste":"p","cerebral":"m","chant":"c","climax":"c","contender":"g","degradation":"n","equilibrium":"s","isolate":"m","nominal":"e","ordinance":"l","prolific":"c","proportional":"g","quarry":"n","restless":"f","sap":"n","sarcastic":"h","scholarly":"c","segregation":"p","sinister":"h","ventilation":"g","accumulation":"e","authoritarian":"p","avail":"g","calorie":"m","commence":"g","conditional":"g","crusade":"p","cynical":"h","elastic":"s","exposition":"c","gracious":"h","humility":"h","impeachment":"l","marital":"g","multitude":"g","plumbing":"g","resemblance":"g","sermon":"c","slender":"g","societal":"p","transmitter":"s","upheld":"l","adolescent":"m","backdrop":"g","bluff":"g","cartel":"l","caucus":"p","clad":"g","constituent":"p","contagious":"m","eccentric":"h","emblem":"c","influx":"g","kernel":"g","liaison":"g","resilience":"f","rotate":"s","toxicity":"m","autopsy":"l","blitz":"g","blockade":"p","circa":"c","cloak":"g","combustion":"s","deportation":"l","disposable":"g","dwell":"g","fiery":"h","flux":"g","hassle":"g","immensely":"g","inauguration":"p","indicative":"g","intercept":"l","intuitive":"g","latitude":"n","majestic":"g","metropolis":"g","orchard":"n","parameter":"s","pathology":"m","procession":"c","purge":"p","secrecy":"g","venom":"n","victorious":"g","wary":"h","amidst":"g","aquarium":"n","batter":"g","captivity":"g","complementary":"g","convict":"l","discrete":"g","dissent":"p","eminent":"g","endeavor":"g","fraternity":"g","interrogation":"l","pagan":"c","pursuant":"l","repetitive":"g","reversal":"g","savvy":"h","spree":"g","subsidy":"e","superficial":"g","waterfront":"g","ambush":"p","arrogance":"h","comrade":"g","curator":"c","deity":"c","detrimental":"m","entitlement":"l","garner":"g","gypsy":"c","impairment":"m","intricate":"g","longevity":"m","lore":"c","obstruction":"l","plaintiff":"l","portrayal":"c","rampant":"g","replicate":"s","retaliation":"p","sewage":"n","summon":"g","urgency":"g","accreditation":"g","clarification":"g","covert":"p","cringe":"f","dialect":"c","downside":"g","flair":"h","fugitive":"l","inmate":"l","intuition":"f","menace":"g","misuse":"l","nausea":"m","optimum":"s","physiological":"m","restrictive":"l","screenplay":"c","sect":"c","seismic":"n","slain":"g","stash":"g","stroll":"g","whereabouts":"g","backbone":"g","brawl":"l","celestial":"s","characterization":"c","customary":"c","flourish":"g","heroine":"c","hoax":"l","insignificant":"g","maneuver":"g","numb":"m","pawn":"g","plaster":"g","quirky":"h","quota":"e","rationale":"g","reap":"g","rebound":"e","redeem":"g","residue":"s","runoff":"p","sentimental":"f","snatch":"g","stealth":"g","subset":"s","suspense":"f","tandem":"g","tertiary":"g","upbeat":"f","vanguard":"g","vulgar":"h","waiver":"l","watershed":"g","adrenaline":"m","alleviate":"g","anarchy":"p","ashore":"g","aura":"g","canopy":"n","condemnation":"p","dependency":"m","dosage":"m","dysfunction":"g","endowment":"e","enrichment":"g","fauna":"n","fidelity":"g","forefront":"g","harden":"g","initiation":"g","jeopardy":"g","residual":"g","truce":"p","uphold":"l","abolition":"p","acquainted":"g","angular":"g","benign":"m","brethren":"c","brink":"g","collaborate":"g","delusional":"m","deposition":"l","empower":"p","mediation":"l","parasite":"n","perennial":"g","procedural":"l","relentless":"g","speculative":"e","submerged":"n","symmetry":"s","syndicate":"l","wholesome":"g","adjoining":"g","ancestry":"c","annex":"p","avid":"h","bland":"g","bribe":"l","canoe":"g","decency":"h","havoc":"g","locomotive":"s","mantra":"g","monumental":"g","pilgrimage":"c","pivot":"g","pivotal":"g","profitability":"e","provoke":"g","reconcile":"g","regression":"g","resilient":"h","staggering":"g","synonymous":"g","tedious":"g","utilization":"g","astronomical":"s","ceremonial":"c","choreography":"c","cling":"g","concurrent":"l","dubious":"g","folklore":"c","gravitational":"s","hereditary":"m","hiatus":"g","homestead":"g","intellect":"g","lapse":"g","loot":"l","mindful":"g","myriad":"g","noteworthy":"g","odor":"g","plunge":"e","pragmatic":"h","quasi":"g","radiant":"g","remorse":"f","sanity":"m","showdown":"g","shuffle":"g","slab":"g","supplemental":"g","tariff":"e","trance":"f","unconditional":"g","volatility":"e","anthology":"c","avalanche":"n","banter":"g","blockbuster":"c","charismatic":"h","commencement":"g","corrosion":"s","defiance":"p","deter":"g","envoy":"p","fabrication":"l","formulation":"g","hysterical":"f","incompatible":"g","injunction":"l","kidnap":"l","notwithstanding":"g","placebo":"m","retrospective":"c","speculate":"e","sublime":"g","terrestrial":"n","thug":"l","anomaly":"s","apprenticeship":"g","breadth":"g","centralized":"p","cleanse":"m","consolidate":"e","containment":"m","crave":"f","elusive":"g","espionage":"p","existential":"g","flashback":"c","gloss":"g","graft":"m","grumpy":"h","guise":"g","immersion":"g","intrinsic":"g","moderation":"g","ordeal":"f","puberty":"m","taboo":"c","throttle":"s","trivia":"g","vortex":"n","alias":"l","anchored":"g","apostle":"c","concise":"g","confinement":"l","consultancy":"e","convergence":"g","criterion":"g","despicable":"h","diminish":"g","disclaimer":"l","discriminatory":"p","disruptive":"g","estimation":"g","excavation":"c","extremist":"p","forcibly":"l","imbalance":"e","intolerance":"p","lineage":"c","martyr":"c","mitigation":"n","obscene":"g","onward":"g","penal":"l","plight":"p","privy":"g","propulsion":"s","rejoice":"f","smear":"p","stabilize":"g","stalk":"g","symbolism":"c","astounding":"g","audible":"g","blatant":"g","boon":"g","candid":"h","caretaker":"g","confidentiality":"l","cunning":"h","depiction":"c","diaspora":"p","discord":"g","divinity":"c","durability":"g","heed":"g","hideous":"g","imperfect":"g","implicit":"g","insensitive":"h","lieu":"g","liquidity":"e","mayhem":"g","nostalgic":"f","oppressive":"p","patronage":"g","pinnacle":"g","qualitative":"s","recognizable":"g","reconnaissance":"p","reluctantly":"f","rendition":"c","sham":"g","stature":"g","steward":"g","stout":"g","tentative":"g","topical":"g","variance":"s","contingency":"g","deprivation":"m","duly":"g","dusk":"n","feasibility":"g","frenzy":"f","inadvertently":"g","insistence":"g","invincible":"g","kinetic":"s","mania":"f","mythical":"c","outset":"g","peacock":"n","precursor":"g","preparatory":"g","proclamation":"p","provocative":"g","reflex":"m","repayment":"e","simulate":"s","soluble":"s","sturdy":"g","wrought":"g","abduction":"l","ancestral":"c","antiquity":"c","aqua":"g","bleak":"g","bogus":"l","collusion":"l","contractual":"l","correctional":"l","creamy":"g","deterioration":"g","disbelief":"f","discreet":"h","enact":"l","fiddle":"g","grit":"h","horrendous":"g","illegitimate":"l","illicit":"l","incompetence":"h","insomnia":"m","lunatic":"h","lyrical":"c","manifestation":"g","migrate":"n","miraculous":"g","mundane":"g","posterior":"m","repository":"g","rumble":"g","saloon":"g","sanction":"p","stale":"g","sterile":"m","stringent":"g","torrent":"n","unjust":"l","wager":"g","annexation":"p","ascent":"g","bigotry":"p","brute":"g","camouflage":"g","compliant":"g","continuum":"s","devoid":"g","disparity":"p","facade":"g","haze":"n","hitch":"g","incarnation":"c","inverse":"s","lavish":"g","livelihood":"e","miscellaneous":"g","misguided":"g","override":"l","paranoia":"m","plurality":"p","psyche":"f","reluctance":"f","replication":"s","sediment":"n","solitude":"f","stronghold":"p","therein":"g","turret":"g","ubiquitous":"g","unconventional":"g","unnoticed":"g","visionary":"h","adultery":"l","agile":"g","artifact":"c","austerity":"e","bouquet":"g","candidacy":"p","commonplace":"g","constrained":"g","contemplate":"g","crook":"l","depict":"c","dormant":"n","emulate":"g","evasion":"l","eviction":"l","expulsion":"g","filth":"g","foliage":"n","foreclosure":"e","hurdle":"g","indefinite":"g","insightful":"g","irrespective":"g","moderator":"g","monstrous":"g","novice":"g","parity":"p","populous":"p","reliant":"g","reputable":"g","ripple":"g","solemn":"g","substantive":"g","unleash":"g","vitality":"g","abyss":"g","accession":"p","arson":"l","bourgeois":"p","bribery":"l","buzzer":"g","cohort":"s","culprit":"l","diffusion":"s","distrust":"f","embark":"g","etiquette":"c","extravagant":"h","heartfelt":"f","hypocrite":"h","leftover":"g","mammoth":"g","motif":"c","ominous":"g","peril":"g","precaution":"g","principally":"g","professionalism":"g","rampage":"l","recharge":"g","scrape":"g","semantic":"c","skepticism":"g","startling":"g","strife":"p","thrift":"e","turnaround":"e","anonymity":"g","appropriation":"e","barrage":"g","brilliance":"g","cocky":"h","conglomerate":"e","counterfeit":"l","edgy":"f","enormously":"g","evade":"g","futile":"g","gritty":"g","hinder":"g","inhibition":"f","intermittent":"g","intimidation":"l","iteration":"s","maxim":"c","melancholy":"f","meteorological":"n","negligible":"g","obligatory":"g","outpost":"p","overflow":"g","panorama":"g","pervasive":"g","predatory":"g","preface":"c","punitive":"l","shameless":"h","skeletal":"m","sprinkle":"g","stamina":"m","stimuli":"s","utopia":"c","abrupt":"g","acronym":"c","affidavit":"l","antics":"g","defamation":"l","divergent":"g","downright":"g","electrode":"s","exemplary":"g","expansive":"g","hysteria":"f","imperialism":"p","imprint":"g","incremental":"g","infancy":"g","manslaughter":"l","misdemeanor":"l","obnoxious":"h","rake":"g","resent":"f","retribution":"l","rhetorical":"c","rightful":"l","spawn":"g","suffrage":"p","surrogate":"g","synopsis":"c","treatise":"c","variability":"s","wooded":"n","adhesive":"s","affluent":"e","annals":"c","antitrust":"l","arid":"n","bandit":"l","beneficiary":"l","bipartisan":"p","buildup":"g","colossal":"g","conserve":"n","constellation":"s","contour":"g","curfew":"p","delusion":"m","depreciation":"e","endemic":"m","futuristic":"g","hallmark":"g","illiterate":"g","inclination":"f","inward":"g","legality":"l","loosen":"g","murderous":"l","notoriously":"g","opaque":"g","otter":"n","populist":"p","porous":"g","rein":"g","rustic":"g","saturation":"e","sizable":"g","spartan":"g","subdued":"f","triumphant":"f","undisclosed":"g","wrench":"g","wretched":"f","adolescence":"m","analogous":"g","archaic":"c","attribution":"c","censor":"p","centennial":"c","colonization":"p","cosmopolitan":"c","crippling":"g","deductible":"e","equitable":"l","exert":"g","feudal":"c","fodder":"g","fumble":"g","gourmet":"g","hefty":"g","incarceration":"l","intrigue":"g","mastermind":"l","noticeably":"g","overrun":"g","pasture":"n","pathological":"m","plentiful":"g","rarity":"g","satirical":"c","slump":"e","sparse":"g","supplementary":"g","temperament":"h","torment":"f","understatement":"c","undesirable":"g","unification":"p","wildfire":"n","afar":"g","awaken":"g","conjecture":"g","conspicuous":"g","crackdown":"l","craze":"g","escalate":"g","fiercely":"g","genealogy":"c","heresy":"c","hostess":"g","ignite":"g","illumination":"g","impoverished":"e","ingenious":"g","moor":"n","ostensibly":"g","outspoken":"h","palate":"m","pedestal":"g","pedigree":"g","phony":"g","pinpoint":"g","prowess":"g","repent":"c","revert":"g","senseless":"g","slay":"g","unavoidable":"g","unilateral":"p","acidic":"s","adherence":"g","amnesia":"m","bearded":"g","bombardment":"p","borderline":"g","capitalize":"e","charisma":"h","cognition":"m","devastation":"g","devout":"c","disproportionate":"g","divisive":"p","embryo":"s","erratic":"g","foreseeable":"g","hindsight":"g","indifference":"f","inflict":"g","inhibit":"g","intoxicated":"m","involuntary":"g","libel":"l","lofty":"g","loom":"g","ludicrous":"g","malice":"f","nemesis":"g","ornamental":"c","populace":"p","propagation":"g","radiator":"g","regal":"h","ridicule":"f","sinful":"c","slander":"l","sleek":"g","socioeconomic":"p","subpoena":"l","undeniable":"g","vigilant":"h","additive":"m","adept":"h","advantageous":"g","afloat":"e","agility":"g","alteration":"g","archipelago":"n","causal":"s","citadel":"c","colonialism":"p","deficient":"m","degenerate":"g","deterrent":"p","disdain":"f","eerie":"f","enraged":"f","exponential":"s","farce":"c","fling":"g","frantic":"f","grudge":"f","hectic":"g","informant":"l","intrusive":"g","malignant":"m","maverick":"h","molten":"s","negligent":"l","optimize":"s","precedence":"g","pristine":"n","prognosis":"m","retrieval":"s","thematic":"c","unbiased":"g","uncanny":"g","underdog":"g","vandalism":"l","wrongful":"l","antagonist":"c","approximation":"s","baroque":"c","characterize":"g","ethos":"g","eyewitness":"l","forfeit":"l","hinge":"g","manifold":"g","measurable":"g","meek":"h","mellow":"g","narration":"c","oblivion":"g","perish":"g","perpetrator":"l","philanthropy":"e","primal":"g","receptive":"h","redundancy":"e","relapse":"m","relish":"f","rendezvous":"g","reversible":"g","shred":"g","simplistic":"g","supervisory":"g","treacherous":"g","untold":"g","versatility":"g","attributable":"g","bastion":"g","bolster":"g","cohesive":"g","contentious":"p","denomination":"c","embargo":"p","embodiment":"g","extremism":"p","gloom":"f","hypocritical":"h","incidental":"g","insurgency":"p","intimidate":"l","labyrinth":"g","limbo":"g","nurture":"g","oblivious":"h","overt":"g","patriarch":"c","perjury":"l","pious":"c","proprietor":"e","seamless":"g","silhouette":"g","smug":"h","stagnant":"e","toughness":"g","unethical":"g","valiant":"h","vigilante":"l","abstraction":"g","adjunct":"g","blasphemy":"c","bulky":"g","carnage":"p","conclusive":"g","conservatory":"c","depressive":"m","descendant":"c","disperse":"g","exhaustive":"g","fermentation":"s","fiasco":"g","fruitful":"g","inaccessible":"g","inferno":"g","omission":"g","periphery":"g","prelude":"c","remnant":"g","serenity":"f","subtly":"g","toxin":"m","unequal":"p","unresolved":"g","writ":"l","adversary":"g","afflicted":"g","ascertain":"g","bloodshed":"p","clinch":"g","collide":"g","commemoration":"c","compulsive":"m","congenital":"m","corrective":"g","crumble":"g","denote":"g","dossier":"l","eradicate":"g","extortion":"l","feral":"n","ineligible":"l","infusion":"g","mediator":"p","mirage":"g","mockery":"g","occult":"c","ovation":"c","perch":"g","perpendicular":"s","physique":"m","proficient":"g","purification":"s","readable":"c","recourse":"l","regimen":"m","roundup":"g","sequential":"s","sporadic":"g","undue":"g","wreckage":"g","adamant":"h","archival":"c","ardent":"h","assorted":"g","barbarian":"c","bedrock":"g","brittle":"g","cohesion":"p","compel":"g","conduit":"g","constraint":"g","defunct":"g","degrade":"g","diffuse":"g","emancipation":"p","entropy":"s","epitome":"g","extradition":"l","frail":"m","fray":"g","grotesque":"g","harass":"l","interchangeable":"g","irreversible":"g","lawless":"l","predominant":"g","refine":"g","rupture":"g","scandalous":"g","solace":"f","splinter":"g","tinker":"g","topography":"n","unintended":"g","unmanned":"s","vantage":"g","whim":"f","withhold":"g","zeal":"f","abort":"g","abound":"g","audacity":"h","barbaric":"g","coercion":"l","competency":"g","dogma":"c","encompass":"g","evoke":"g","fixation":"f","flatter":"h","formative":"g","fret":"f","gratification":"f","gruesome":"g","inhuman":"g","latent":"g","limitless":"g","literate":"g","lucid":"g","merciful":"h","midwife":"m","misinformation":"g","mobilization":"p","monologue":"c","mutiny":"p","parasitic":"n","pendulum":"g","poignant":"f","potency":"m","precarious":"g","pretext":"g","quaint":"g","reassurance":"f","redistribution":"e","restrain":"g","secession":"p","sectarian":"p","seminal":"c","snag":"g","sophistication":"g","tweak":"g","unison":"g","unthinkable":"g","uplift":"f","venerable":"g","angst":"f","apathy":"f","artisan":"c","bane":"g","concerto":"c","contraception":"m","crouch":"g","detriment":"g","dismal":"g","dismay":"f","disparate":"g","dissemination":"g","domestically":"e","expel":"g","frown":"f","hamper":"g","heroism":"g","hierarchical":"p","infidelity":"g","inventive":"h","knack":"h","liquidation":"e","mercenary":"p","morbid":"f","ordinarily":"g","orthodoxy":"c","paternal":"g","polarization":"p","projectile":"g","protracted":"g","realist":"h","remuneration":"e","revoke":"l","secretive":"h","undisputed":"g","visceral":"f","wrongdoing":"l","aggregation":"s","antidote":"m","attest":"l","auditory":"m","avenge":"g","aversion":"f","brood":"f","cessation":"g","commend":"g","emigration":"p","emit":"s","extant":"c","fathom":"g","fictitious":"g","firsthand":"g","hedgehog":"n","heinous":"l","impeccable":"g","infiltrate":"l","intolerant":"h","lament":"f","malpractice":"l","manipulative":"h","payoff":"g","pesticide":"n","prodigy":"h","reptile":"n","sluggish":"e","slum":"p","snare":"g","strata":"n","submissive":"h","timid":"h","trickle":"g","ultimatum":"p","uninterrupted":"g","affirmation":"g","ascend":"g","bittersweet":"f","blight":"g","cinematography":"c","conducive":"g","conscientious":"h","consensual":"l","deceit":"h","denounce":"p","derogatory":"g","dismantle":"g","enigma":"g","euphoria":"f","firewall":"s","forceful":"h","forte":"g","insidious":"g","jargon":"c","leakage":"g","logistical":"g","loophole":"l","luminous":"g","malnutrition":"m","meticulous":"h","modesty":"h","nigh":"g","nocturnal":"n","overlay":"g","patriarchal":"p","pitiful":"f","plethora":"g","prerequisite":"g","recount":"g","recurrent":"m","requisite":"g","secluded":"g","seduce":"g","shun":"g","upkeep":"e","vigil":"c","whirlwind":"g","aristocratic":"c","clout":"p","commemorative":"c","converge":"g","cryptic":"g","discern":"g","fanatic":"h","formulate":"g","fragmentation":"g","hoard":"g","horde":"g","imp":"c","inconsistency":"g","ingenuity":"g","moot":"g","partake":"g","plagiarism":"c","puncture":"g","renegade":"p","seductive":"g","summarize":"g","unfounded":"g","valor":"g","vernacular":"c","virtuous":"h","abrasive":"h","accomplice":"l","annihilation":"g","armistice":"p","armory":"p","auspices":"g","calamity":"g","chronology":"c","diversification":"e","enactment":"l","enlighten":"g","envious":"f","erroneous":"g","familial":"g","frivolous":"h","fruition":"g","giddy":"f","grandeur":"g","homogeneous":"g","intangible":"g","metaphysical":"c","meteorology":"n","mindless":"g","negotiable":"e","nudge":"g","ploy":"g","presumption":"l","reactionary":"p","reconstruct":"g","stewardship":"g","synergy":"e","whopping":"g","absurdity":"g","alchemy":"c","clandestine":"g","clutter":"g","conqueror":"p","crafty":"h","debacle":"g","defiant":"h","deformed":"g","disarm":"p","eminence":"g","entail":"g","fallacy":"g","feeble":"g","fend":"g","ferocious":"g","fragrant":"g","gallant":"h","hermit":"c","indecent":"l","inquest":"l","mercantile":"e","migratory":"n","mingle":"g","nomenclature":"s","outcry":"p","panoramic":"g","preferential":"g","prolong":"g","rambling":"g","rowdy":"h","subversive":"p","suggestive":"g","totalitarian":"p","translucent":"g","unfavorable":"g","wield":"g","affirm":"l","agrarian":"e","anecdote":"c","appease":"p","aptitude":"g","assassinate":"p","bespoke":"g","brisk":"g","bubbly":"h","climatic":"n","conformity":"g","correlate":"s","courteous":"h","defer":"g","demeanor":"h","deplorable":"g","deranged":"m","detour":"g","equate":"g","ethereal":"g","expanse":"n","fanfare":"g","favorably":"g","flask":"s","frosty":"g","individuality":"g","insurgent":"p","oblique":"g","obscurity":"g","onslaught":"p","paramilitary":"p","permissible":"l","platonic":"g","recurrence":"g","refinement":"g","repel":"g","revamp":"g","sensibility":"f","slumber":"g","staunch":"h","swoop":"g","transatlantic":"g","unparalleled":"g","unsolicited":"g","unveil":"g","unworthy":"g","vocation":"g","agitation":"f","agreeable":"h","assertive":"h","assimilation":"p","augment":"g","breakaway":"p","caricature":"c","companionship":"f","complacent":"h","counteract":"g","courtship":"g","deepen":"g","devise":"g","enclave":"p","entourage":"g","epoch":"c","forgery":"l","gimmick":"g","groundwork":"g","imposition":"g","impromptu":"g","indulgence":"f","intersect":"g","nonexistent":"g","notoriety":"g","ornate":"c","palpable":"g","perk":"e","perpetuate":"g","perverse":"h","plume":"g","plump":"g","prophetic":"g","provocation":"g","recoil":"f","remission":"m","renounce":"g","repentance":"c","resonate":"g","restitution":"l","scholastic":"g","scourge":"g","sobriety":"m","stagnation":"e","tangent":"g","unearthed":"c","unqualified":"g","unquestionably":"g","unravel":"g","wasteland":"n","watchdog":"p","zest":"f","zoology":"s","abstinence":"m","allege":"l","arduous":"g","composure":"f","concur":"g","deport":"l","dispersion":"s","entangled":"g","exploratory":"g","facet":"g","finesse":"g","gist":"g","grievous":"g","impunity":"l","infertility":"m","insolvency":"e","intermediary":"g","laughable":"g","makeshift":"g","mobilize":"p","perilous":"g","repulsive":"g","sadistic":"h","slant":"g","slur":"g","sulphur":"s","tacky":"g","thaw":"g","tout":"g","transnational":"p","wares":"e","anecdotal":"g","animosity":"f","cavalier":"h","condone":"g","congested":"g","consecrated":"c","contiguous":"g","deflect":"g","desolate":"g","devour":"g","disarmament":"p","divergence":"g","embody":"g","envision":"g","equivalence":"g","esoteric":"c","euthanasia":"m","flammable":"s","grapefruit":"g","incomprehensible":"g","inertia":"g","infestation":"n","insurrection":"p","intolerable":"g","mutilation":"g","nifty":"g","pathogen":"m","pretentious":"h","promenade":"g","proximal":"m","rapport":"f","rapture":"f","rectify":"g","rudimentary":"g","screenwriter":"c","shroud":"g","solicitation":"l","uncharted":"g","unspoken":"g","vendetta":"g","alienation":"f","anthropologist":"s","attrition":"g","autopilot":"s","budgetary":"e","cliche":"c","collaborator":"g","cumbersome":"g","curt":"h","cyclical":"e","diversify":"e","elixir":"c","epiphany":"f","fable":"c","fatality":"g","foresight":"g","forsaken":"g","incision":"m","indistinguishable":"g","intensify":"g","martyrdom":"c","procure":"g","propensity":"g","ruse":"g","seniority":"g","severance":"e","singularity":"s","socialize":"g","strut":"g","swirl":"g","tycoon":"e","undeniably":"g","unorthodox":"g","uproar":"g","vigilance":"g","allure":"g","authorship":"c","burnout":"m","buyout":"e","caveat":"g","chore":"g","circumvent":"g","clique":"g","contemplation":"g","cranky":"h","distraught":"f","drizzle":"n","emergent":"g","enchanting":"g","exalted":"g","formality":"g","fortitude":"h","geopolitical":"p","grievance":"g","grunt":"g","harmonious":"g","hitherto":"g","incline":"g","incubation":"m","insignia":"g","interplay":"g","kindred":"g","mischievous":"h","nameless":"g","outburst":"f","preventable":"m","provenance":"c","ravine":"n","redress":"l","regenerate":"g","reincarnation":"c","rife":"g","sever":"g","sharpen":"g","stoic":"h","unchecked":"g","unsustainable":"n","utopian":"g","wholeheartedly":"g","zenith":"g","abbreviation":"c","adhesion":"s","atrocious":"g","avert":"g","avian":"n","chastity":"c","circumstantial":"l","claimant":"l","closeness":"g","contextual":"c","cordon":"l","cram":"g","decipher":"g","delve":"g","depletion":"n","dispersal":"g","effortless":"g","fluke":"g","gauntlet":"g","ghostly":"g","idealistic":"h","impede":"g","inflamed":"m","inhumane":"g","instantaneous":"g","jinx":"g","jobless":"e","jurisprudence":"l","justifiable":"l","linkage":"g","ratification":"p","reclamation":"n","resettlement":"p","sedentary":"m","situational":"g","soggy":"g","steadfast":"h","stoop":"g","stylistic":"c","superstitious":"h","touchy":"h","trampoline":"g","tranquil":"g","transformative":"g","unsuspecting":"g","unwelcome":"g","abode":"g","abomination":"g","acutely":"g","allotment":"g","antisocial":"h","astray":"g","blunder":"g","commotion":"g","cynicism":"h","debatable":"g","diligently":"h","duality":"g","endearing":"h","extermination":"g","habitable":"g","hegemony":"p","hypnotic":"g","inaction":"g","inconclusive":"g","inept":"h","inexplicable":"g","innovate":"e","kinship":"g","lenient":"h","mediate":"p","modernism":"c","nomadic":"c","penance":"c","preposterous":"g","preventative":"m","proverbial":"c","quirk":"g","rabid":"g","reiterate":"g","scorn":"f","skillful":"h","stampede":"g","standoff":"p","stately":"g","tantrum":"f","tectonic":"n","treachery":"g","unmatched":"g","upheaval":"p","veneer":"g","vouch":"g","aggravating":"f","altercation":"g","amplification":"s","brunt":"g","burgeoning":"e","cadence":"c","condensation":"s","confluence":"n","contraband":"l","custodian":"g","degeneration":"m","delinquent":"l","eradication":"m","fickle":"h","forage":"n","fraught":"g","grapple":"g","groan":"g","hoist":"g","incite":"l","intoxication":"m","jagged":"g","mediocrity":"g","murky":"g","neutralize":"g","omen":"c","overgrown":"n","pedagogy":"c","philanthropist":"e","readership":"c","relinquish":"g","resolute":"h","salient":"g","sentient":"g","separatist":"p","snippet":"g","strenuous":"g","surcharge":"e","unharmed":"g","unspeakable":"g","untimely":"g","workable":"g","abundantly":"g","adoration":"f","affliction":"m","backfire":"g","conspiring":"l","corrosive":"s","cowardice":"h","disqualification":"g","enigmatic":"g","exhale":"m","fission":"s","flurry":"g","genomic":"s","glimmer":"g","humankind":"g","limelight":"g","loathe":"f","momentous":"g","observable":"g","pang":"f","participatory":"p","refurbishment":"g","revel":"f","scapegoat":"g","shambles":"g","shrewd":"h","shudder":"f","smuggle":"l","spire":"c","sprout":"n","stench":"g","subsistence":"e","subterranean":"n","superhuman":"g","tenacity":"h","tolerable":"g","trespass":"l","unknowingly":"g","untouchable":"g","unwarranted":"g","wishful":"f","actuality":"g","alibi":"l","astute":"h","brazen":"h","burrow":"n","causation":"s","centerpiece":"g","clasp":"g","compulsion":"f","condescending":"h","conjure":"g","copious":"g","cordial":"h","craftsmanship":"c","creditor":"e","custodial":"l","derelict":"g","dispel":"g","edict":"p","egregious":"g","elasticity":"s","epoxy":"s","extraterrestrial":"s","fiend":"g","fledgling":"g","flicker":"g","flimsy":"g","gambit":"g","gullible":"h","gust":"n","hearth":"g","hemorrhage":"m","idealism":"g","impeach":"l","improvisation":"c","jeopardize":"g","lexicon":"c","lobbyist":"p","lurk":"g","metaphorical":"c","mismatch":"g","monastic":"c","multilateral":"p","namesake":"g","normative":"g","objectivity":"g","palliative":"m","parable":"c","pastime":"g","patchwork":"g","pesky":"g","plunder":"g","pseudonym":"c","rationality":"g","rebuke":"g","rebuttal":"l","retaliate":"p","rouse":"g","scant":"g","semblance":"g","slowdown":"e","snug":"g","spoof":"c","susceptibility":"m","tangle":"g","transcend":"g","trope":"c","undercut":"e","unproductive":"g","whence":"g","whimsical":"h","anthropological":"s","apprehension":"f","articulation":"g","assailant":"l","atonement":"c","auspicious":"g","barricade":"p","baseless":"g","benefactor":"g","dichotomy":"g","diminutive":"g","dispensary":"m","doubtless":"g","emphatic":"g","gait":"m","heyday":"g","impart":"g","incoherent":"g","interlude":"c","irritable":"h","lukewarm":"g","mismanagement":"e","motley":"g","nuance":"c","obstruct":"g","outcast":"g","penultimate":"g","pleasurable":"f","propagate":"g","redefine":"g","reinstate":"l","remit":"g","resumption":"g","retrograde":"g","revere":"c","rout":"p","stardom":"c","subtlety":"g","symptomatic":"m","watchful":"h","wayward":"h","yoke":"p","ailing":"e","aloft":"g","amalgamation":"e","beset":"g","cavern":"n","chivalry":"c","cocoon":"n","credence":"g","debtor":"e","derail":"g","distort":"g","dreary":"f","evaporation":"s","foregoing":"g","gallows":"l","henceforth":"g","heterogeneous":"g","huddle":"g","indignation":"f","ingrained":"g","lesion":"m","lull":"g","moratorium":"p","munch":"g","nascent":"g","neurotic":"m","prerogative":"l","prudence":"h","remedial":"g","repressive":"p","resourceful":"h","sacrificial":"c","scorching":"n","scribe":"c","sentry":"p","specter":"g","strewn":"g","tact":"h","taxonomy":"s","uncompromising":"h","unruly":"h","venomous":"n","willful":"l","abstain":"p","allegory":"c","banish":"g","callous":"h","churn":"g","commendable":"g","dainty":"g","deliverance":"c","destitute":"e","dexterity":"g","dilution":"s","dissipated":"g","elitist":"p","exclusivity":"e","feisty":"h","foothold":"g","fraternal":"g","ghastly":"g","gratifying":"f","hunch":"f","impenetrable":"g","inconceivable":"g","industrialization":"e","mysticism":"c","nauseous":"m","nimble":"g","objectionable":"g","opportunistic":"h","outlandish":"g","outlying":"g","pacifist":"p","penchant":"f","primordial":"s","quorum":"p","rascal":"h","rigor":"g","shortlist":"g","tenancy":"l","testimonial":"g","thence":"g","unfaithful":"g","unholy":"g","unregulated":"e","unscrupulous":"h","unwittingly":"g","verbatim":"g","antiquated":"g","averse":"f","brim":"g","dribble":"g","egalitarian":"p","gout":"m","mythological":"c","palatable":"g","solicit":"g","succumb":"g","thwart":"g","unequivocally":"g","acreage":"n","assimilate":"p","convoluted":"g","counterproductive":"g","impediment":"g","materialism":"c","meager":"e","parochial":"h","somber":"f","utilitarian":"g","belligerent":"h","depraved":"h","ebb":"g","emulation":"g","forfeiture":"l","instinctive":"f","magnate":"e","poise":"h","sanctity":"c","alienate":"g","confrontational":"h","contagion":"m","curate":"c","deviant":"g","disseminate":"g","dynamically":"g","insular":"h","jarring":"g","magnetism":"s","mariner":"g","methodological":"s","scavenger":"n","stuffy":"g","uniformity":"g","apprehend":"l","axiom":"s","cleanly":"g","infallible":"g","methodical":"h","socialization":"p","tranquility":"f","detract":"g","dissection":"s","distillation":"s","hibernation":"n","hindrance":"g","inexplicably":"g","placid":"h","reissue":"c","skew":"g","unwavering":"h","veritable":"g","abject":"g","austere":"h","blister":"m","commendation":"g","gusto":"f","individualism":"p","infernal":"g","mystique":"g","overalls":"g","quell":"p","succulent":"g","superfluous":"g","arcane":"g","behest":"g","ephemeral":"g","extracurricular":"g","lackluster":"g","manicure":"g","materialistic":"h","materialize":"g","perceptive":"h","riveting":"g","sprawl":"g","swivel":"g","wayside":"g","aberration":"g","athleticism":"g","daydream":"f","figuratively":"c","habitation":"g","interlocking":"g","repertory":"c","shimmer":"g","snooze":"g","suitor":"g","abhorrent":"g","carpentry":"g","crumb":"g","elated":"f","exuberant":"f","facsimile":"g","fanciful":"g","posterity":"g","pounce":"g","scathing":"g","antithesis":"g","archetype":"g","chisel":"g","coax":"g","cull":"n","flattery":"h","restorative":"m","spurious":"g","vermin":"n","altruistic":"h","amorphous":"g","enterprising":"h","honk":"g","inexcusable":"g","minster":"c","monotonous":"g","prohibitive":"e","topple":"p","allusion":"c","altruism":"h","connotation":"c","exorcist":"c","idiosyncratic":"h","plumage":"n","profess":"g","tacit":"g","colloquial":"c","devotee":"g","docile":"h","edifice":"g","macabre":"g","midwifery":"m","milieu":"g","overseer":"g","painstaking":"h","patchy":"g","resuscitation":"m","shoal":"n","tantamount":"g","trifle":"g","unoccupied":"g","vindication":"g","artistically":"c","congregate":"g","corroborate":"l","euphemism":"c","exacerbate":"g","facilitation":"g","impersonal":"g","minefield":"g","recluse":"h","reverb":"c","stipulation":"l","accrue":"e","chronologically":"g","opulent":"g","recessive":"s","taut":"g","uneventful":"g","confide":"f","dissect":"g","ferocity":"g","homely":"g","innuendo":"g","interrogate":"l","lavatory":"g","magpie":"n","recitation":"c","reprimand":"g","stratosphere":"n","telltale":"g","torrential":"n","virtuoso":"c","connoisseur":"c","divination":"c","exorcism":"c","fabricate":"l","fluctuation":"e","strapping":"g","archetypal":"g","attuned":"g","cinematographer":"c","hapless":"g","impervious":"g","locomotion":"s","paradoxical":"g","sandwiched":"g","climactic":"c","detest":"f","enviable":"g","gravitate":"g","impersonation":"g","preoccupation":"f","rescind":"l","supple":"m","veneration":"c","allegorical":"c","coerce":"l","depravity":"h","indignant":"f","precocious":"h","wry":"h","brevity":"g","claustrophobic":"f","desertion":"l","euphoric":"f","plummet":"e","romp":"g","spontaneity":"g","tarnish":"g","verve":"g","billiards":"g","collider":"s","demography":"p","eccentricity":"h","heighten":"g","implicate":"l","justly":"g","lyricist":"c","menial":"e","opacity":"g","overdraft":"e","quiver":"f","reminisce":"f","buzzard":"n","commensurate":"g","diverge":"g","fiddler":"c","flagging":"g","forlorn":"f","gush":"g","pathos":"c","physicality":"g","portraiture":"c","seedy":"g","substantiate":"l","summarily":"l","wane":"g","brimstone":"c","contraption":"g","disillusionment":"f","elaboration":"g","fissure":"n","malleable":"s","acrobatic":"g","consternation":"f","cynic":"h","dampen":"g","extravagance":"e","raunchy":"g","salve":"m","bereft":"f","buffoon":"h","derision":"f","dramatist":"c","grumble":"g","rediscover":"g","selectivity":"s","squint":"g","topographical":"n","verily":"c","wallow":"f","allot":"g","blurb":"c","ewe":"n","exuberance":"f","familiarize":"g","obliterate":"g","persecute":"p","preeminent":"g","showy":"g","suburbia":"g","vandal":"l","elongate":"g","elude":"g","etch":"g","irate":"f","lethargic":"m","maggot":"n","scoff":"f","sketchbook":"c","squirm":"g","surrealism":"c","telescopic":"s","babble":"g","haphazard":"g","irrevocably":"g","oddity":"g","placate":"g","prescriptive":"g","slob":"h","stipulate":"l","voracious":"h","banishment":"p","conciliatory":"h","irrevocable":"g","mottled":"g","mountaineer":"g","posit":"s","reclusive":"h","scrutinize":"g","sedate":"h","cloister":"c","credential":"g","monotony":"g","prowl":"g","repose":"g","reptilian":"n","seedling":"n","surrealist":"c","temperamental":"h","conciliation":"l","culminate":"g","domestication":"n","enabler":"g","nonchalant":"h","squander":"g","cay":"n","crony":"p","glean":"g","gutsy":"h","impersonator":"c","lurid":"g","recuperate":"m","detritus":"n","patronize":"h","rustle":"g","cogent":"g","floodgates":"g","pedicure":"g","primeval":"n","revulsion":"f","unsurpassed":"g","wistful":"f","allude":"g","elation":"f","envisage":"g","hibernate":"n","usurp":"p","cleverness":"g","fabulously":"g","headstrong":"h","incongruous":"g","lethargy":"m","maelstrom":"g","opulence":"g","personalize":"g","proliferate":"g","pyre":"c","requisition":"p","retrace":"g","thicket":"n","unconvincing":"g","undaunted":"h","fete":"c","frolic":"g","haughty":"h","headmistress":"g","prostrate":"g","rickety":"g","supersede":"g","sustainably":"n","unmanageable":"g","extrapolate":"s","quip":"g","unadulterated":"g","zany":"g","abdicate":"p","brainwash":"g","breadwinner":"e","darkroom":"c","glitz":"g","insubordination":"g","salivary":"m","aimless":"g","clench":"g","farcical":"g","haggle":"e","minutiae":"g","paralyze":"g","unobtrusive":"g","abhor":"f","aghast":"f","contemptuous":"h","crystallization":"s","inexorably":"g","nondescript":"g","recuperation":"m","repute":"g","dutiful":"h","engender":"g","impeccably":"g","stoicism":"h","verandah":"g","plausibly":"g","remittance":"e","resuscitate":"m","smattering":"g","amply":"g","antithetical":"g","denunciation":"p","exonerate":"l","indiscretion":"g","magnanimous":"h","chrysalis":"n","heifer":"n","laud":"g","remorseful":"f","sheaf":"g","unencumbered":"g","virtuosity":"c","wrangle":"l","tactful":"h","artifice":"g","disparage":"g","drudgery":"g","feign":"g","melodious":"c","naivety":"h","philistine":"h","possessor":"g","staccato":"c","ceaseless":"g","credibly":"g","inexhaustible":"g","inexorable":"g","moribund":"g","personalization":"s","refurbish":"g","torturous":"g","unassisted":"g","ameliorate":"g","claustrophobia":"m","concurrence":"g","gnaw":"g","hermetic":"g","inscrutable":"h","postural":"m","puritanical":"h","suds":"g","anarchic":"g","beguiling":"g","dissension":"p","exhilaration":"f","outmoded":"g","plausibility":"g","subsist":"g","tedium":"f","uninspiring":"g","axiomatic":"g","colloquium":"c","gape":"g","impresario":"c","incipient":"g","vindicate":"g","blubber":"n","ephemera":"c","gauche":"h","inducement":"e","slither":"g","snobbery":"h","sterility":"m","exude":"g","glum":"f","improvisational":"c","predilection":"f","ruthlessness":"h","utensil":"g","astringent":"g","gruelling":"g","liaise":"g","zoologist":"s","capitulate":"p","hypothesize":"s","ostensible":"g","imperceptible":"g","intuit":"f","protrude":"g","romper":"g","stiffen":"g","unfeasible":"g","confection":"g","delicatessen":"g","ordain":"c","protrusion":"g","somersault":"g","adornment":"c","bequeath":"l","clammy":"g","detestable":"g","distill":"s","explosively":"g","ponderous":"g","vestigial":"s","virginal":"g","consign":"g","fiendish":"g","flit":"g","idiomatic":"c","neglectful":"h","paternalistic":"p","recumbent":"g","angsty":"f","impressionistic":"c","prise":"g","repudiate":"g","revelatory":"g","blithely":"h","fiddly":"g","happenstance":"g","settee":"g","calamitous":"g","deplore":"g","ecotourism":"n","infallibility":"g","singe":"g","catastrophically":"g","exhibitionist":"h","reenact":"c","reverberation":"g","buccaneer":"c","rapturous":"f","truism":"g","wheeze":"m","lamentation":"f","mangle":"g","loiter":"g","interject":"g","taciturn":"h","besiege":"p","derisive":"f","remorseless":"g","crystallize":"g","disdainful":"h","ardor":"f","fractious":"h","ignominious":"g","timidity":"h","disquieting":"f","neophyte":"g","galvanize":"g","extol":"g","affectation":"h","histrionic":"h","reverberate":"g","scornful":"h","ventilate":"g","surreptitious":"g","venerate":"c","resound":"g","unsettle":"f","circumnavigate":"g","indolent":"h","unenviable":"g","induct":"g","mutinous":"p","ingratiate":"h","anticlimactic":"g","perversity":"h","magnanimity":"h","incarcerate":"l","brandish":"g","incongruity":"g","insubordinate":"h","decentralize":"p","contrive":"g","verisimilitude":"c","prurient":"h","ruminate":"f","brouhaha":"g","demystify":"g","juxtapose":"c","totter":"g","agonize":"f","belligerence":"h","salivate":"m","dither":"h","laudatory":"g","preconception":"g","solipsism":"c","wizened":"g","domesticate":"n","presuppose":"g","antediluvian":"g","indolence":"h","teem":"g","immortalize":"c","inchoate":"g","euphemistic":"c","daunt":"f","mollify":"g","embezzle":"l","economize":"e","revile":"g","connote":"c","edify":"g","idiosyncrasy":"h","ingenuous":"h","unnerve":"f","exasperate":"f","qualm":"f","deprecate":"g","dissemble":"h","proscribe":"l","remonstrate":"g","engross":"f","tantalize":"f","munificence":"h","lassitude":"m","encumber":"g","adulterate":"g","intersperse":"g","appall":"f","suffuse":"g","transfix":"f","exhilarate":"f","stultify":"g"};
