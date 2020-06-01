

const country = `印度尼西亚
印度
越南
伊朗
泰国
以色列
南非
摩洛哥
埃及
乌干达
坦桑尼亚
尼日利亚
毛里求斯
莫桑比克
阿尔及利亚
利比亚
安哥拉
加纳
马达加斯加
喀麦隆
苏丹
吉布提
贝宁
塞拉利昂
科特迪瓦
埃塞俄比亚
津巴布韦
刚果(金)
科威特
约旦
沙特阿拉伯
伊拉克
也门
阿联酋（迪拜）
卡塔尔
阿曼
菲律宾
马来西亚
缅甸
斯里兰卡
利比里亚
乌兹别克斯坦
吉尔吉斯斯坦
土库曼斯坦
土耳其
乌克兰
阿塞拜疆
格鲁吉亚
亚美尼亚
巴拿马
澳大利亚
肯尼亚共和国
刚果(布)
哈萨克斯坦
斐济
马尔代夫
塔吉克斯坦
塞尔维亚
几内亚
孟加拉
白俄罗斯
巴林
黎巴嫩
布隆迪
塞内加尔
突尼斯
叙利亚
韩国
香港
巴基斯坦
蒙古
尼泊尔
柬埔寨
索马里
摩尔多瓦
多米尼加
巴哈马
巴拉圭
厄瓜多尔
厄瓜多尔
哥伦比亚
巴勒斯坦
马里
南苏丹
摩尔多瓦
加蓬
毛里塔尼亚
尼日尔
布基纳法索
乍得
几内亚
厄立特里亚
卢旺达
赞比亚
马拉维共和国
莫桑比克
纳米比亚
博茨瓦纳
塞舌尔
阿尔巴尼亚
留尼旺
马约特
新西兰
`

const engName = `Indonesia 
India 
Vietnam 
Iran
Thailand
Israel
South Africa
Morocco
Egypt
Uganda
Tanzania
Nigeria
Mauritius
Mozambique
Algeria
Libya
Angola
Ghana
Madagascar
Cameroon
Sudan
Djibouti
Benin
Sierra Leone
Cote d'Ivoire
Ethiopia
Zimbabwe
Congo-Kinshasa
Kuwait
Jordan
Saudi Arabia
Iraq
Yemen
United Emirates
Qatar
Oman
Philippines
Malaysia
Myanmar
Sri Lanka
Republic of Liberia
Uzbekistan
The Kyrgyz Republic
Turkmenistan
Turkey
Ukraine
Azerbaijan
Georgia
Armenia
Panama
Australia
Kenya
The Republic of Congo
The Republic of Kazakhstan
Fiji
Maldives
Tajikistan
Serbia
Guinea
Bangladesh
Belarus
Bahrain
Lebanon
Burundi
Senegal
Tunisia
Syria
Korea
Hong Kong
Pakistan
Mongolia
Nepal
Cambodia
Somalia
Moldova
Dominica
Bahamas
Paraguay
Ecuador
Ecuador
Colombia
Palestine
Mali
South Sudan
Moldova
Gabonese
Mauritania
Niger
Burkina Faso
Chad
Guinea
Eritrea
Rwanda
Zambia
Malawi
Mozambique
Namibia
Botswana
Seychelles
Albania
Reunion
Mayotte
New Zealand
`

const language = `印尼语 (Indonesian)
印地语 (Hindi)
越南语 (Vietnamese)
波斯语 (Persian)
泰语 (Thai)
希伯来语 (Hebrew)
英语 (English)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
英语 (English)
英语 (English)
英语 (English)
英语 (English)
葡萄牙语 (Portuguese)
法语 (French)
阿拉伯语 (Arabic)
葡萄牙语 (Portuguese)
英语 (English)
法语 (French)
法语 (French)
阿拉伯语 (Arabic)
法语 (French)
法语 (French)
英语 (English)
法语 (French)
英语 (English)
英语 (English)
法语 (French)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
英语 (English)
马来西亚语 (Malaysian)
缅甸语 (Burmese)
英语 (English)
英语 (English)
乌兹别克语 (Uzbek language)
俄语 (Russian)
俄语 (Russian)
土耳其语 (Turkish)
乌克兰语 (Ukrainian)
俄语 (Russian)
格鲁吉亚语 (Georgian)
俄语 (Russian)
西班牙语 (Spanish)
英语 (English)
英语 (English)
法语 (French)
俄语 (Russian)
英语 (English)
英语 (English)
俄语 (Russian)
塞尔维亚语（ Serbian）
法语 (French)
英语 (English)
白俄罗斯语(Belarusian)
英语 (English)
阿拉伯语 (Arabic)
法语 (French)
法语 (French)
阿拉伯语 (Arabic)
阿拉伯语 (Arabic)
韩语 (Korean)
繁体中文 (Traditional Chinese)
英语 (English)
英语 (English)
英语 (English)
法语 (French)
阿拉伯语 (Arabic)
罗马尼亚语(Romanian)
西班牙语 (Spanish)
英语 (English)
西班牙语 (Spanish)
西班牙语 (Spanish)
西班牙语 (Spanish)
西班牙语 (Spanish)
阿拉伯语 (Arabic)
法语 (French)
英语 (English)
俄语 (Russian)
法语 (French)
阿拉伯语 (Arabic)
法语 (French)
法语 (French)
法语 (French)
法语 (French)
英语 (English)
卢旺达语（Kinyarwanda）
英语 (English)
英语 (English)
葡萄牙语 (Portuguese)
英语 (English)
英语 (English)
英语 (English)
阿尔巴尼亚语(Albanian)
法语 (French)
法语 (French)
英语 (English)
`

const exlCountry = `其它
埃及
摩洛哥
尼日利亚
利比亚
加纳
塞拉利昂
科特迪瓦
安哥拉
贝宁
利比里亚
刚果(金)
喀麦隆
津巴布韦
乌干达
坦桑尼亚
毛里求斯
苏丹
吉布提
埃塞俄比亚
莫桑比克
马达加斯加
阿尔及利亚
南非
泰国
越南
缅甸
马来西亚
俄罗斯
乌兹别克斯坦
吉尔吉斯斯坦
土库曼斯坦
土耳其
乌克兰
阿塞拜疆
格鲁吉亚
亚美尼亚
印度
印度尼西亚
伊拉克
沙特阿拉伯
阿联酋
科威特
也门
阿曼
卡塔尔
约旦
伊朗
以色列
迪拜
澳大利亚
台湾
巴西
委内瑞拉
阿根廷
菲律宾
巴拿马
巴拿马
美国
加拿大
墨西哥
德国
奥地利
意大利
英国
西班牙
法国
瑞士
葡萄牙
瑞典
丹麦
芬兰
挪威
捷克
斯洛伐克
波兰
匈牙利
保加利亚
刚果(布)
肯尼亚
斯里兰卡
厄瓜多尔
哥伦比亚
秘鲁
哈萨克斯坦
智利
哥斯达黎加
马尔代夫
斐济
塔吉克斯坦
塞尔维亚
白俄罗斯
摩尔多瓦
几内亚
布隆迪
塞内加尔
突尼斯
索马里
孟加拉
巴基斯坦
蒙古
尼泊尔
柬埔寨
巴林
黎巴嫩
叙利亚
巴勒斯坦
巴拉圭
玻利维亚
克罗地亚
拉脱维亚
爱沙尼亚
立陶宛
尼加拉瓜
洪都拉斯
萨尔瓦多
危地马拉
多米尼加
古巴
特立尼达
牙买加
库拉索
巴巴多斯
圣马丁
波多黎各
新加坡
斯洛文尼亚
荷兰
马里
南苏丹
希腊
波黑
博茨瓦纳
布基纳法索
厄立特里亚
加蓬
卢旺达
马拉维
毛里塔尼亚
纳米比亚
尼日尔
塞舌尔
赞比亚
乍得
北马其顿
阿尔巴尼亚
黑山
巴哈马
比利时
留尼汪
马约特
新西兰
罗马尼亚
香港
卢森堡
阿富汗
奥兰
美属萨摩亚
安道尔
安圭拉
安巴
阿鲁巴
伯利兹
百慕大
不丹
荷兰加勒比区
布韦岛
英属印度洋领地
文莱
佛得角
开曼群岛
中非
中国
圣诞岛
科科斯(基林)群岛
科摩罗
库克群岛
塞浦路斯
多米尼克
赤道几内亚
斯威士兰
福克兰群岛
法罗群岛
法属圭亚那
法属波利尼西亚
法属南方和南极洲领地
冈比亚
直布罗陀
格陵兰
格林纳达
瓜德罗普
关岛
根西
几内亚比绍
圭亚那
海地
赫德岛和麦克唐纳群岛
梵蒂冈
冰岛
爱尔兰
马恩岛
日本
泽西
基里巴斯
朝鲜
韩国
老挝
列支敦士登
立陶宛
澳门
马耳他
马绍尔群岛
马提尼克
密克罗尼西亚联邦
蒙特塞拉特
摩洛哥
瑙鲁
新喀里多尼亚
纽埃
诺福克岛
北马里亚纳群岛
帕劳
皮特凯恩群岛
圣巴泰勒米
圣赫勒拿阿森松和特里斯坦达库尼亚
圣基茨和尼维斯
圣卢西亚
圣皮埃尔和密克隆
圣文森特和格林纳丁斯
萨摩亚
圣马力诺
圣普
荷属圣马丁
所罗门群岛
南乔治亚和南桑威奇群岛
苏里南
斯瓦尔巴和扬马延
东帝汶
多哥
托克劳
汤加
特克斯和凯科斯群岛
图瓦卢
美国本土外小岛屿
瓦努阿图
英属维尔京群岛
美属维尔京群岛
瓦利斯和富图纳
巴布亚新几内亚
科索沃
阿森松岛
`

const exlEngName = `Others
Egypt
Morocco
Nigeria
Libya
Ghana
Sierra Leone
Côte d'Ivoire
Angola
Benin
Liberia
Congo - Kinshasa
Cameroon
Zimbabwe
Uganda
Tanzania
Mauritius
Sudan
Djibouti
Ethiopia
Mozambique
Madagascar
Algeria
South Africa
Thailand
Vietnam
Myanmar (Burma)
Malaysia
Russian Federation
Uzbekistan
Kyrgyzstan
Turkmenistan
Turkey
Ukraine
Azerbaijan
Georgia
Armenia
India
Indonesia
Iraq
Saudi Arabia
United Arab Emirates
Kuwait
Yemen
Oman
Qatar
Jordan
Iran
Israel
Dubai
Australia
Taiwan
Brazil
Venezuela
Argentina
Philippines
Panama
Uruguay
United States
Canada
Mexico
Germany
Austria
Italy
United Kingdom
Spain
France
Switzerland
Portugal
Sweden
Denmark
Finland
Norway
Czechia
Slovakia
Poland
Hungary
Bulgaria
Congo - Brazzaville
Kenya
Sri Lanka
Ecuador
Colombia
Peru
Kazakhstan
Chile
Costa Rica
Maldives
Fiji
Tajikistan
Serbia
Belarus
Moldova
Guinea
Burundi
Senegal
Tunisia
Somalia
Bangladesh
Pakistan
Mongolia
Nepal
Cambodia
Bahrain
Lebanon
Syria
Palestine, State of
Paraguay
Bolivia
Croatia
Latvia
Estonia
Lithuania
Nicaragua
Honduras
El Salvador
Guatemala
Dominican Republic
Cuba
Trinidad & Tobago
Jamaica
Curaçao
Barbados
Sint Maarten
Puerto Rico
Singapore
Slovenia
Netherlands
Mali
South Sudan
Greece
Bosnia & Herzegovina
Botswana
Burkina Faso
Eritrea
Gabon
Rwanda
Malawi
Mauritania
Namibia
Niger
Seychelles
Zambia
Chad
North Macedonia
Albania
Montenegro
Bahamas
Belgium
Réunion
Mayotte
New Zealand
Romania
Hong Kong
Luxembourg
Afghanistan
Åland Islands
American Samoa
Andorra
Anguilla
Antigua & Barbuda
Aruba
Belize
Bermuda
Bhutan
Caribbean Netherlands
Bouvet Island
British Indian Ocean Territory
Brunei
Cape Verde
Cayman Islands
Central African Republic
China
Christmas Island
Cocos (Keeling) Islands
Comoros
Cook Islands
Cyprus
Dominica
Equatorial Guinea
Eswatini
Falkland Islands (Islas Malvinas)
Faroe Islands
French Guiana
French Polynesia
French Southern Territories
Gambia
Gibraltar
Greenland
Grenada
Guadeloupe
Guam
Guernsey
Guinea-Bissau
Guyana
Haiti
Heard Island and McDonald Islands
Vatican City
Iceland
Ireland
Isle of Man
Japan
Jersey
Kiribati
North Korea
South Korea
Laos
Liechtenstein
Lithuania
Macau
Malta
Marshall Islands
Martinique
Micronesia
Montserrat
Morocco
Nauru
New Caledonia
Niue
Norfolk Island
Northern Mariana Islands
Palau
Pitcairn
St. Barthélemy
St. Helena
St. Kitts & Nevis
St. Lucia
St. Pierre & Miquelon
St. Vincent & Grenadines
Samoa
San Marino
Sao Tome & Principe
Sint Maarten
Solomon Islands
South Georgia and the South Sandwich Islands
Suriname
Svalbard and Jan Mayen
Timor-Leste
Togo
Tokelau
Tonga
Turks & Caicos Islands
Tuvalu
United States Minor Outlying Islands
Vanuatu
British Virgin Islands
U.S. Virgin Islands
Wallis & Futuna
Papua New Guinea
Kosovo
Ascension Island
`


const shorName = `ZZZ
EGY
MAR
NGA
LBY
GHA
SLE
CIV
AGO
BEN
LBR
COD
CMR
ZWE
UGA
TZA
MUS
SDN
DJI
ETH
MOZ
MDG
DZA
ZAF
THA
VNM
MMR
MYS
RUS
UZB
KGZ
TKM
TUR
UKR
AZE
GEO
ARM
IND
IDN
IRQ
SAU
ARE
KWT
YEM
OMN
QAT
JOR
IRN
ISR
DXB
AUS
TWN
BRA
VEN
ARG
PHL
PAN
URY
USA
CAN
MEX
DEU
AUT
ITA
GBR
ESP
FRA
CHE
PRT
SWE
DNK
FIN
NOR
CZE
SVK
POL
HUN
BGR
COG
KEN
LKA
ECU
COL
PER
KAZ
CHL
CRI
MDV
FJI
TJK
SRB
BLR
MDA
GIN
BDI
SEN
TUN
SOM
BGD
PAK
MNG
NPL
KHM
BHR
LBN
SYR
PSE
PRY
BOL
HRV
LVA
EST
LTU
NIC
HND
SLV
GTM
DOM
CUB
TTO
JAM
CUW
BRB
MAF
PRI
SGP
SVN
NLD
MLI
SSD
GRC
BIH
BWA
BFA
ERI
GAB
RWA
MWI
MRT
NAM
NER
SYC
ZMB
TCD
MKD
ALB
MNE
BHS
BEL
REU
MYT
NZL
ROU
HKG
LUX
AFG
ALA
ASM
AND
AIA
ATG
ABW
BLZ
BMU
BTN
BES
BVT
IOT
BRN
CPV
CYM
CAF
CHN
CXR
CCK
COM
COK
CYP
DMA
GNQ
SWZ
FLK
FRO
GUF
PYF
ATF
GMB
GIB
GRL
GRD
GLP
GUM
GGY
GNB
GUY
HTI
HMD
VAT
ISL
IRL
IMN
JPN
JEY
KIR
PRK
KOR
LAO
LIE
LTU
MAC
MLT
MHL
MTQ
FSM
MSR
MAR
NRU
NCL
NIU
NFK
MNP
PLW
PCN
BLM
SHN
KNA
LCA
SPM
VCT
WSM
SMR
STP
SXM
SLB
SGS
SUR
SJM
TLS
TGO
TKL
TON
TCA
TUV
UMI
VUT
VGB
VIR
WLF
PNG
KOS
ASC
`


module.exports = {
    'DCountry': country,
    'DEngName': engName,
    'DLanguage': language,
    'exlCountry': exlCountry,
    'exlEngName': exlEngName,
    'exlSortName': shorName
}