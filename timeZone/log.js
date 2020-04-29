

let  different = `其它
俄罗斯
阿联酋
台湾
巴西
委内瑞拉
阿根廷
乌拉圭
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
秘鲁
智利
哥斯达黎加
玻利维亚
克罗地亚
拉脱维亚
爱沙尼亚
立陶宛
尼加拉瓜
洪都拉斯
萨尔瓦多
危地马拉
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
希腊
波黑
马其顿
黑山
比利时
罗马尼亚
阿富汗`

// console.log(different.split('\n').length)



let diffTimezone = [ 
    { country: '摩洛哥', resTimeZone: 'UTC+0', xmlTimeZone: 'UTC+1' },
    { country: '苏丹', resTimeZone: 'UTC+3', xmlTimeZone: 'UTC+2' },
    { country: '土耳其', resTimeZone: 'UTC+2', xmlTimeZone: 'UTC+3' } 
]


let diffCity = [ 
    {
         timezone: 'UTC+1',
        city: 'Africa/Porto-Novo',
        id: '10',
        excelCity: 'PortoNovo' 
    },
    {
         timezone: 'UTC+3',
        city: 'Africa/Dar_es_Salaam',
        id: '16',
        excelCity: 'Dodoma' 
    },
    {
         timezone: 'UTC+4',
        city: 'Indian/Mauritius',
        id: '17',
        excelCity: 'PortLouis' 
    },
    { 
        timezone: 'UTC+3',
        city: 'Africa/Addis_Ababa',
        id: '20',
        excelCity: 'AddisAbaba'
    },
    { 
        timezone: 'UTC+7',
        city: 'Asia/Ho_Chi_Minh',
        id: '26',
        excelCity: 'Hanoi'
    },
    { 
        timezone: 'UTC+6.5',
        city: 'Asia/Rangoon',
        id: '27',
        excelCity: 'Yangon'
    },
    { 
        timezone: 'UTC+3',
        city: 'Asia/Kuwait',
        id: '43',
        excelCity: 'KuwaitCity'
    },
    { 
        timezone: 'UTC-5',
        city: 'America/Panama',
        id: '57',
        excelCity: 'PanamaCity'
    },
    { 
        timezone: 'UTC+8',
        city: 'Asia/Ulaanbaatar',
        id: '101',
        excelCity: 'UlanBator'
    },
    { 
        timezone: 'UTC+7',
        city: 'Asia/Phnom_Penh',
        id: '103',
        excelCity: 'PhnomPenh'
    },
    { 
        timezone: 'UTC+1',
        city: 'Africa/Ndjamena',
        id: '144',
        excelCity: 'N\'Djamena'
    }
 ]



let aa = `<!--1 其它, please sort by country code value-->
<string-array name="timezone_name_1"></string-array>
<string-array name="timezone_id_1"></string-array>

<!--2 埃及, please sort by country code value-->
<string-array name="timezone_name_2">
    <item>Cairo</item>
</string-array>
<string-array name="timezone_id_2">
    <item>Africa/Cairo</item>
</string-array>

<!--3 摩洛哥, please sort by country code value-->
<string-array name="timezone_name_3">
    <item>UTC+1</item>  <!--todo UTC+0  Casablanca-->
</string-array>
<string-array name="timezone_id_3">
    <item>Africa/Casablanca</item>
</string-array>

<!--4 尼日利亚, please sort by country code value-->
<string-array name="timezone_name_4">
    <item>lagos</item>
</string-array>
<string-array name="timezone_id_4">
    <item>Africa/Lagos</item>
</string-array>

<!--5 利比亚, please sort by country code value-->
<string-array name="timezone_name_5">
    <item>Tripoli</item>
</string-array>
<string-array name="timezone_id_5">
    <item>Africa/Tripoli</item>
</string-array>

<!--6 加纳, please sort by country code value-->
<string-array name="timezone_name_6">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_6">
    <item>Africa/Accra</item>
</string-array>

<!--7 塞拉利昂, please sort by country code value-->
<string-array name="timezone_name_7">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_7">
    <item>Africa/Freetown</item>
</string-array>

<!--8 科特迪瓦, please sort by country code value-->
<string-array name="timezone_name_8">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_8">
    <item>Africa/Abidjan</item>
</string-array>

<!--9 安哥拉, please sort by country code value-->
<string-array name="timezone_name_9">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_9">
    <item>Africa/Luanda</item>
</string-array>

<!--10 贝宁, please sort by country code value-->
<string-array name="timezone_name_10">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_10">
    <item>Africa/Porto-Novo</item>
</string-array>

<!--11 利比里亚, please sort by country code value-->
<string-array name="timezone_name_11">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_11">
    <item>Africa/Monrovia</item>
</string-array>

<!--12 刚果金, please sort by country code value-->
<string-array name="timezone_name_12">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_12">
    <item>Africa/Kinshasa</item>
</string-array>

<!--13 喀麦隆, please sort by country code value-->
<string-array name="timezone_name_13">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_13">
    <item>Africa/Douala</item>
</string-array>

<!--14 津巴布韦, please sort by country code value-->
<string-array name="timezone_name_14">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_14">
    <item>Africa/Harare</item>
</string-array>

<!--15 乌干达, please sort by country code value-->
<string-array name="timezone_name_15">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_15">
    <item>Africa/Kampala</item>
</string-array>

<!--16 坦桑尼亚, please sort by country code value-->
<string-array name="timezone_name_16">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_16">
    <item>Africa/Dar_es_Salaam</item>
</string-array>

<!--17 毛里求斯, please sort by country code value-->
<string-array name="timezone_name_17">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_17">
    <item>Indian/Mauritius</item>
</string-array>

<!--18 苏丹, please sort by country code value-->
<string-array name="timezone_name_18">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_18">
    <item>Africa/Khartoum</item>
</string-array>

<!--19 吉布提, please sort by country code value-->
<string-array name="timezone_name_19">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_19">
    <item>Africa/Djibouti</item>
</string-array>

<!--20 埃塞俄比亚, please sort by country code value-->
<string-array name="timezone_name_20">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_20">
    <item>Africa/Addis_Ababa</item>
</string-array>

<!--21 莫桑比克, please sort by country code value-->
<string-array name="timezone_name_21">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_21">
    <item>Africa/Maputo</item>
</string-array>

<!--22 马达加斯加, please sort by country code value-->
<string-array name="timezone_name_22">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_22">
    <item>Indian/Antananarivo</item>
</string-array>

<!--23 阿尔及利亚, please sort by country code value-->
<string-array name="timezone_name_23">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_23">
    <item>Africa/Algiers</item>
</string-array>

<!--24 南非, please sort by country code value-->
<string-array name="timezone_name_24">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_24">
    <item>Africa/Johannesburg</item>
</string-array>

<!--25 泰国, please sort by country code value-->
<string-array name="timezone_name_25">
    <item>UTC+7</item>
</string-array>
<string-array name="timezone_id_25">
    <item>Asia/Bangkok</item>
</string-array>

<!--26 越南, please sort by country code value-->
<string-array name="timezone_name_26">
    <item>UTC+7</item>
</string-array>
<string-array name="timezone_id_26">
    <item>Asia/Ho_Chi_Minh</item>
</string-array>

<!--27 缅甸, please sort by country code value-->
<string-array name="timezone_name_27">
    <item>UTC+6.5</item>
</string-array>
<string-array name="timezone_id_27">
    <item>Asia/Rangoon</item>
</string-array>

<!--28 马来西亚, please sort by country code value-->
<string-array name="timezone_name_28">
    <item>UTC+8</item>
</string-array>
<string-array name="timezone_id_28">
    <item>Asia/Kuching</item>
</string-array>

<!--29 俄罗斯, please sort by country code value-->
<string-array name="timezone_name_29">
    <item>UTC+2</item>
    <item>UTC+3</item>
    <item>UTC+4</item>
    <item>UTC+5</item>
    <item>UTC+6</item>
    <item>UTC+7</item>
    <item>UTC+8</item>
    <item>UTC+9</item>
    <item>UTC+10</item>
    <item>UTC+11</item>
    <item>UTC+12</item>
</string-array>
<string-array name="timezone_id_29">
    <item>Europe/Kaliningrad</item><!-- UTC+2 -->
    <item>Europe/Moscow</item><!-- UTC+3 -->
    <item>Europe/Samara</item><!-- UTC+4 -->
    <item>Asia/Yekaterinburg</item><!-- UTC+5 -->
    <item>Asia/Omsk</item><!-- UTC+6 -->
    <item>Asia/Novosibirsk</item><!-- UTC+7 -->
    <item>Asia/Irkutsk</item><!-- UTC+8 -->
    <item>Asia/Chita</item><!-- UTC+9 -->
    <item>Asia/Vladivostok</item><!-- UTC+10 -->
    <item>Asia/Magadan</item><!-- UTC+11 -->
    <item>Asia/Anadyr</item><!-- UTC+12 -->
</string-array>

<!--30 乌兹别克斯坦, please sort by country code value-->
<string-array name="timezone_name_30">
    <item>UTC+5</item>
</string-array>
<string-array name="timezone_id_30">
    <item>Asia/Samarkand</item>
</string-array>

<!--31 吉尔吉斯斯坦, please sort by country code value-->
<string-array name="timezone_name_31">
    <item>UTC+6</item>
</string-array>
<string-array name="timezone_id_31">
    <item>Asia/Bishkek</item>
</string-array>

<!--32 土库曼斯坦, please sort by country code value-->
<string-array name="timezone_name_32">
    <item>UTC+5</item>
</string-array>
<string-array name="timezone_id_32">
    <item>Asia/Ashgabat</item>
</string-array>

<!--33 土耳其, please sort by country code value-->
<string-array name="timezone_name_33">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_33">
    <item>Europe/Istanbul</item>
</string-array>

<!--34 乌克兰, please sort by country code value-->
<string-array name="timezone_name_34">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_34">
    <item>Europe/Kiev</item>
</string-array>

<!--35 阿塞拜疆, please sort by country code value-->
<string-array name="timezone_name_35">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_35">
    <item>Asia/Baku</item>
</string-array>

<!--36 格鲁吉亚, please sort by country code value-->
<string-array name="timezone_name_36">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_36">
    <item>Asia/Tbilisi</item>
</string-array>

<!--37 亚美尼亚, please sort by country code value-->
<string-array name="timezone_name_37">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_37">
    <item>Asia/Yerevan</item>
</string-array>

<!--38 印度, please sort by country code value-->
<string-array name="timezone_name_38">
    <item>UTC+5.5</item>
</string-array>
<string-array name="timezone_id_38">
    <item>Asia/Kolkata</item>
</string-array>

<!--39 印尼, please sort by country code value-->
<string-array name="timezone_name_39">
    <item>UTC+7</item>
</string-array>
<string-array name="timezone_id_39">
    <item>Asia/Jakarta</item>
</string-array>

<!--40 伊拉克, please sort by country code value-->
<string-array name="timezone_name_40">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_40">
    <item>Asia/Baghdad</item>
</string-array>

<!--41 沙特, please sort by country code value-->
<string-array name="timezone_name_41">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_41">
    <item>Asia/Riyadh</item>
</string-array>

<!--42 阿联酋, please sort by country code value-->
<string-array name="timezone_name_42">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_42">
    <item>Asia/Dubai</item>
</string-array>

<!--43 科威特, please sort by country code value-->
<string-array name="timezone_name_43">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_43">
    <item>Asia/Kuwait</item>
</string-array>

<!--44 也门, please sort by country code value-->
<string-array name="timezone_name_44">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_44">
    <item>Asia/Aden</item>
</string-array>

<!--45 阿曼, please sort by country code value-->
<string-array name="timezone_name_45">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_45">
    <item>Asia/Muscat</item>
</string-array>

<!--46 卡塔尔, please sort by country code value-->
<string-array name="timezone_name_46">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_46">
    <item>Asia/Qatar</item>
</string-array>

<!--47 约旦, please sort by country code value-->
<string-array name="timezone_name_47">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_47">
    <item>Asia/Amman</item>
</string-array>

<!--48 伊朗, please sort by country code value-->
<string-array name="timezone_name_48">
    <item>@string/tehran_time_zone</item>
</string-array>
<string-array name="timezone_id_48">
    <item>Asia/Tehran</item>
</string-array>

<!--49 以色列, please sort by country code value-->
<string-array name="timezone_name_49">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_49">
    <item>Asia/Jerusalem</item>
</string-array>

<!--50 迪拜, please sort by country code value-->
<string-array name="timezone_name_50"></string-array>
<string-array name="timezone_id_50"></string-array>

<!--51 澳大利亚, please sort by country code value-->
<string-array name="timezone_name_51">
    <item>Victoria</item><!-- UTC+10 -->
    <item>Western Australia</item><!-- UTC+8 -->
    <item>Northern Territory</item><!-- UTC+9.5 -->
    <item>South Australia</item><!-- UTC+9.5 -->
    <item>Queensland</item><!-- UTC+10 -->
    <item>NSW/ACT</item><!-- UTC+10 -->
    <item>Tasmania</item><!-- UTC+10 -->
</string-array>
<string-array name="timezone_id_51">
    <item>Australia/Victoria</item>
    <item>Australia/West</item>
    <item>Australia/North</item>
    <item>Australia/South</item>
    <item>Australia/Queensland</item>
    <item>Australia/NSW</item>
    <item>Australia/Tasmania</item>
</string-array>

<!--52 台湾, please sort by country code value-->
<string-array name="timezone_name_52"></string-array>
<string-array name="timezone_id_52"></string-array>

<!--53 巴西, please sort by country code value-->
<string-array name="timezone_name_53">
    <item>Fernando de Noronha</item>
    <item>Sao Paulo</item>
    <item>Manaus</item>
    <item>Rio Branco</item>
</string-array>
<string-array name="timezone_id_53">
    <item>America/Noronha</item>
    <item>America/Sao_Paulo</item>
    <item>America/Manaus</item>
    <item>America/Rio_Branco</item>
</string-array>

<!--54 委内瑞拉, please sort by country code value-->
<string-array name="timezone_name_54">
    <item>Caracas</item>
</string-array>
<string-array name="timezone_id_54">
    <item>America/Caracas</item>
</string-array>

<!--55 阿根廷, please sort by country code value-->
<string-array name="timezone_name_55">
    <item>Buenos Aires</item>
</string-array>
<string-array name="timezone_id_55">
    <item>America/Argentina/Buenos_Aires</item>
</string-array>

<!--56 菲律宾, please sort by country code value-->
<string-array name="timezone_name_56">
    <item>Manila</item>
</string-array>
<string-array name="timezone_id_56">
    <item>Asia/Manila</item>
</string-array>

<!--57 巴拿马, please sort by country code value-->
<string-array name="timezone_name_57">
    <item>UTC-5</item>
</string-array>
<string-array name="timezone_id_57">
    <item>America/Panama</item>
</string-array>

<!--58 乌拉圭, please sort by country code value-->
<string-array name="timezone_name_58">
    <item>Montevideo</item>
</string-array>
<string-array name="timezone_id_58">
    <item>America/Montevideo</item>
</string-array>

<!--59 美国, please sort by country code value-->
<string-array name="timezone_name_59">
    <item>@string/timezone_eastern</item>
    <item>@string/timezone_central</item>
    <item>@string/timezone_mountain</item>
    <item>@string/timezone_arizona</item>
    <item>@string/timezone_pacific</item>
    <item>@string/timezone_alaska</item>
    <item>@string/timezone_hawaii</item>
</string-array>
<string-array name="timezone_id_59">
    <item>America/New_York</item>
    <item>America/Chicago</item>
    <item>America/Denver</item>
    <item>America/Phoenix</item>
    <item>America/Los_Angeles</item>
    <item>America/Anchorage</item>
    <item>Pacific/Honolulu</item>
</string-array>

<!--60 加拿大, please sort by country code value-->
<string-array name="timezone_name_60">
    <item>@string/timezone_eastern</item>
    <item>@string/timezone_central</item>
    <item>@string/timezone_mountain</item>
    <item>@string/timezone_pacific</item>
    <item>@string/timezone_newfoundland</item>
    <item>@string/timezone_atlantic</item>
</string-array>
<string-array name="timezone_id_60">
    <item>America/Toronto</item>
    <item>America/Winnipeg</item>
    <item>America/Edmonton</item>
    <item>America/Vancouver</item>
    <item>America/St_Johns</item>
    <item>America/Halifax</item>
</string-array>

<!--61 墨西哥, please sort by country code value-->
<string-array name="timezone_name_61">
    <item>@string/timezone_central</item>
    <item>@string/timezone_mountain</item>
    <item>@string/timezone_pacific</item>
</string-array>
<string-array name="timezone_id_61">
    <item>America/Mexico_City</item>
    <item>America/Chihuahua</item>
    <item>America/Tijuana</item>
</string-array>

<!--62 德国, please sort by country code value-->
<string-array name="timezone_name_62"></string-array>
<string-array name="timezone_id_62"></string-array>
<!--63 奥地利, please sort by country code value-->
<string-array name="timezone_name_63"></string-array>
<string-array name="timezone_id_63"></string-array>
<!--64 意大利, please sort by country code value-->
<string-array name="timezone_name_64"></string-array>
<string-array name="timezone_id_64"></string-array>
<!--65 英国, please sort by country code value-->
<string-array name="timezone_name_65"></string-array>
<string-array name="timezone_id_65"></string-array>
<!--66 西班牙, please sort by country code value-->
<string-array name="timezone_name_66"></string-array>
<string-array name="timezone_id_66"></string-array>
<!--67 法国, please sort by country code value-->
<string-array name="timezone_name_67"></string-array>
<string-array name="timezone_id_67"></string-array>
<!--68 瑞士, please sort by country code value-->
<string-array name="timezone_name_68"></string-array>
<string-array name="timezone_id_68"></string-array>
<!--69 葡萄牙, please sort by country code value-->
<string-array name="timezone_name_69"></string-array>
<string-array name="timezone_id_69"></string-array>
<!--70 瑞典, please sort by country code value-->
<string-array name="timezone_name_70"></string-array>
<string-array name="timezone_id_70"></string-array>
<!--71 丹麦, please sort by country code value-->
<string-array name="timezone_name_71"></string-array>
<string-array name="timezone_id_71"></string-array>
<!--72 芬兰, please sort by country code value-->
<string-array name="timezone_name_72"></string-array>
<string-array name="timezone_id_72"></string-array>
<!--73 挪威, please sort by country code value-->
<string-array name="timezone_name_73"></string-array>
<string-array name="timezone_id_73"></string-array>
<!--74 捷克, please sort by country code value-->
<string-array name="timezone_name_74"></string-array>
<string-array name="timezone_id_74"></string-array>
<!--75 斯洛伐克, please sort by country code value-->
<string-array name="timezone_name_75"></string-array>
<string-array name="timezone_id_75"></string-array>
<!--76 波兰, please sort by country code value-->
<string-array name="timezone_name_76"></string-array>
<string-array name="timezone_id_76"></string-array>
<!--77 匈牙利, please sort by country code value-->
<string-array name="timezone_name_77"></string-array>
<string-array name="timezone_id_77"></string-array>
<!--78 保加利亚, please sort by country code value-->
<string-array name="timezone_name_78"></string-array>
<string-array name="timezone_id_78"></string-array>

<!--79 刚果布, please sort by country code value-->
<string-array name="timezone_name_79">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_79">
    <item>Africa/Brazzaville</item>
</string-array>

<!--80 肯尼亚, please sort by country code value-->
<string-array name="timezone_name_80">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_80">
    <item>Africa/Nairobi</item>
</string-array>

<!--81 斯里兰卡, please sort by country code value-->
<string-array name="timezone_name_81">
    <item>UTC+5.5</item>
</string-array>
<string-array name="timezone_id_81">
    <item>Asia/Colombo</item>
</string-array>

<!--82 厄瓜多尔, please sort by country code value-->
<string-array name="timezone_name_82">
    <item>Quito</item>
    <item>Puerto Baquerizo Moreno</item>
</string-array>
<string-array name="timezone_id_82">
    <item>America/Guayaquil</item>
    <item>Pacific/Galapagos</item>
</string-array>

<!--83 哥伦比亚, please sort by country code value-->
<string-array name="timezone_name_83">
    <item>UTC-5</item>
</string-array>
<string-array name="timezone_id_83">
    <item>America/Bogota</item>
</string-array>

<!--84 秘鲁, please sort by country code value-->
<string-array name="timezone_name_84">
    <item>Lima</item>
</string-array>
<string-array name="timezone_id_84">
    <item>America/Lima</item>
</string-array>

<!--85 哈萨克斯坦, please sort by country code value-->
<string-array name="timezone_name_85">
    <item>UTC+6</item>
</string-array>
<string-array name="timezone_id_85">
    <item>Asia/Almaty</item>
</string-array>

<!--86 智利, please sort by country code value-->
<string-array name="timezone_name_86">
    <item>Santiago</item>
</string-array>
<string-array name="timezone_id_86">
    <item>America/Santiago</item>
</string-array>

<!--87 哥斯达黎加, please sort by country code value-->
<string-array name="timezone_name_87"></string-array>
<string-array name="timezone_id_87"></string-array>

<!--88 马尔代夫, please sort by country code value-->
<string-array name="timezone_name_88">
    <item>UTC+5</item>
</string-array>
<string-array name="timezone_id_88">
    <item>Indian/Maldives</item>
</string-array>

<!--89 斐济, please sort by country code value-->
<string-array name="timezone_name_89">
    <item>UTC+12</item>
</string-array>
<string-array name="timezone_id_89">
    <item>Pacific/Fiji</item>
</string-array>

<!--90 塔吉克斯坦, please sort by country code value-->
<string-array name="timezone_name_90">
    <item>UTC+5</item>
</string-array>
<string-array name="timezone_id_90">
    <item>Asia/Dushanbe</item>
</string-array>

<!--91 塞尔维亚, please sort by country code value-->
<string-array name="timezone_name_91">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_91">
    <item>Europe/Belgrade</item>
</string-array>

<!--92 白俄罗斯, please sort by country code value-->
<string-array name="timezone_name_92">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_92">
    <item>Europe/Minsk</item>
</string-array>

<!--93 摩尔多瓦, please sort by country code value-->
<string-array name="timezone_name_93">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_93">
    <item>Europe/Chisinau</item>
</string-array>

<!--94 几内亚, please sort by country code value-->
<string-array name="timezone_name_94">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_94">
    <item>Africa/Conakry</item>
</string-array>

<!--95 布隆迪, please sort by country code value-->
<string-array name="timezone_name_95"></string-array>
<string-array name="timezone_id_95"></string-array>

<!--96 塞内加尔, please sort by country code value-->
<string-array name="timezone_name_96">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_96">
    <item>Africa/Dakar</item>
</string-array>

<!--97 突尼斯, please sort by country code value-->
<string-array name="timezone_name_97">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_97">
    <item>Africa/Tunis</item>
</string-array>

<!--98 索马里, please sort by country code value-->
<string-array name="timezone_name_98">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_98">
    <item>Africa/Mogadishu</item>
</string-array>

<!--99 孟加拉国, please sort by country code value-->
<string-array name="timezone_name_99">
    <item>UTC+6</item>
</string-array>
<string-array name="timezone_id_99">
    <item>Asia/Dhaka</item>
</string-array>

<!--100 巴基斯坦, please sort by country code value-->
<string-array name="timezone_name_100">
    <item>UTC+5</item>
</string-array>
<string-array name="timezone_id_100">
    <item>Asia/Karachi</item>
</string-array>

<!--101 蒙古, please sort by country code value-->
<string-array name="timezone_name_101">
    <item>UTC+8</item>
</string-array>
<string-array name="timezone_id_101">
    <item>Asia/Ulaanbaatar</item>
</string-array>

<!--102 尼泊尔, please sort by country code value-->
<string-array name="timezone_name_102">
    <item>UTC+5.75</item>
</string-array>
<string-array name="timezone_id_102">
    <item>Asia/Kathmandu</item>
</string-array>

<!--103 柬埔寨, please sort by country code value-->
<string-array name="timezone_name_103">
    <item>UTC+7</item>
</string-array>
<string-array name="timezone_id_103">
    <item>Asia/Phnom_Penh</item>
</string-array>

<!--104 巴林, please sort by country code value-->
<string-array name="timezone_name_104">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_104">
    <item>Asia/Bahrain</item>
</string-array>

<!--105 黎巴嫩, please sort by country code value-->
<string-array name="timezone_name_105">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_105">
    <item>Asia/Beirut</item>
</string-array>

<!--106 叙利亚, please sort by country code value-->
<string-array name="timezone_name_106">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_106">
    <item>Asia/Damascus</item>
</string-array>

<!--107 巴勒斯坦, please sort by country code value-->
<string-array name="timezone_name_107"></string-array>
<string-array name="timezone_id_107"></string-array>

<!--108 巴拉圭, please sort by country code value-->
<string-array name="timezone_name_108">
    <item>Asuncion</item>
</string-array>
<string-array name="timezone_id_108">
    <item>America/Asuncion</item>
</string-array>

<!--109 玻利维亚, please sort by country code value-->
<string-array name="timezone_name_109">
    <item>La Paz</item>
</string-array>
<string-array name="timezone_id_109">
    <item>America/La_Paz</item>
</string-array>

<!--110 克罗地亚, please sort by country code value-->
<string-array name="timezone_name_110"></string-array>
<string-array name="timezone_id_110"></string-array>
<!--111 拉脱维亚, please sort by country code value-->
<string-array name="timezone_name_111"></string-array>
<string-array name="timezone_id_111"></string-array>
<!--112 爱沙尼亚, please sort by country code value-->
<string-array name="timezone_name_112"></string-array>
<string-array name="timezone_id_112"></string-array>
<!--113 立陶宛, please sort by country code value-->
<string-array name="timezone_name_113"></string-array>
<string-array name="timezone_id_113"></string-array>
<!--114 尼加拉瓜, please sort by country code value-->
<string-array name="timezone_name_114"></string-array>
<string-array name="timezone_id_114"></string-array>
<!--115 洪都拉斯, please sort by country code value-->
<string-array name="timezone_name_115"></string-array>
<string-array name="timezone_id_115"></string-array>
<!--116 萨尔瓦多, please sort by country code value-->
<string-array name="timezone_name_116"></string-array>
<string-array name="timezone_id_116"></string-array>
<!--117 危地马拉, please sort by country code value-->
<string-array name="timezone_name_117"></string-array>
<string-array name="timezone_id_117"></string-array>
<!--118 多米尼加, please sort by country code value-->
<string-array name="timezone_name_118"></string-array>
<string-array name="timezone_id_118"></string-array>
<!--119 古巴, please sort by country code value-->
<string-array name="timezone_name_119"></string-array>
<string-array name="timezone_id_119"></string-array>
<!--120 特立尼达, please sort by country code value-->
<string-array name="timezone_name_120"></string-array>
<string-array name="timezone_id_120"></string-array>
<!--121 牙买加, please sort by country code value-->
<string-array name="timezone_name_121"></string-array>
<string-array name="timezone_id_121"></string-array>
<!--122 库拉索, please sort by country code value-->
<string-array name="timezone_name_122"></string-array>
<string-array name="timezone_id_122"></string-array>
<!--123 巴巴多斯, please sort by country code value-->
<string-array name="timezone_name_123"></string-array>
<string-array name="timezone_id_123"></string-array>
<!--124 圣马丁, please sort by country code value-->
<string-array name="timezone_name_124"></string-array>
<string-array name="timezone_id_124"></string-array>
<!--125 波多黎各, please sort by country code value-->
<string-array name="timezone_name_125"></string-array>
<string-array name="timezone_id_125"></string-array>

<!--126 新加坡, please sort by country code value-->
<string-array name="timezone_name_126">
    <item>UTC+8</item>
</string-array>
<string-array name="timezone_id_126">
    <item>Asia/Singapore</item>
</string-array>

<!--127 斯洛文尼亚, please sort by country code value-->
<string-array name="timezone_name_127"></string-array>
<string-array name="timezone_id_127"></string-array>
<!--128 荷兰, please sort by country code value-->
<string-array name="timezone_name_128"></string-array>
<string-array name="timezone_id_128"></string-array>

<!--129 马里, please sort by country code value-->
<string-array name="timezone_name_129">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_129">
    <item>Africa/Bamako</item>
</string-array>

<!--130 南苏丹, please sort by country code value-->
<string-array name="timezone_name_130">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_130">
    <item>Africa/Juba</item>
</string-array>

<!--131 希腊, please sort by country code value-->
<string-array name="timezone_name_131"></string-array>
<string-array name="timezone_id_131"></string-array>
<!--132 波黑, please sort by country code value-->
<string-array name="timezone_name_132"></string-array>
<string-array name="timezone_id_132"></string-array>

<!--133 博茨瓦纳, please sort by country code value-->
<string-array name="timezone_name_133">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_133">
    <item>Africa/Gaborone</item>
</string-array>

<!--134 布基纳法索, please sort by country code value-->
<string-array name="timezone_name_134">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_134">
    <item>Africa/Ouagadougou</item>
</string-array>

<!--135 厄立特里亚, please sort by country code value-->
<string-array name="timezone_name_135">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_135">
    <item>Africa/Asmara</item>
</string-array>

<!--136 加蓬, please sort by country code value-->
<string-array name="timezone_name_136">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_136">
    <item>Africa/Libreville</item>
</string-array>

<!--137 卢旺达, please sort by country code value-->
<string-array name="timezone_name_137">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_137">
    <item>Africa/Kigali</item>
</string-array>

<!--138 马拉维共和国, please sort by country code value-->
<string-array name="timezone_name_138">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_138">
    <item>Africa/Blantyre</item>
</string-array>

<!--139 毛里塔尼亚, please sort by country code value-->
<string-array name="timezone_name_139">
    <item>UTC+0</item>
</string-array>
<string-array name="timezone_id_139">
    <item>Africa/Nouakchott</item>
</string-array>

<!--140 纳米比亚, please sort by country code value-->
<string-array name="timezone_name_140">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_140">
    <item>Africa/Windhoek</item>
</string-array>

<!--141 尼日尔, please sort by country code value-->
<string-array name="timezone_name_141">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_141">
    <item>Africa/Niamey</item>
</string-array>

<!--142 塞舌尔, please sort by country code value-->
<string-array name="timezone_name_142">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_142">
    <item>Indian/Mahe</item>
</string-array>

<!--143 赞比亚, please sort by country code value-->
<string-array name="timezone_name_143">
    <item>UTC+2</item>
</string-array>
<string-array name="timezone_id_143">
    <item>Africa/Lusaka</item>
</string-array>

<!--144 乍得, please sort by country code value-->
<string-array name="timezone_name_144">
    <item>UTC+1</item>
</string-array>
<string-array name="timezone_id_144">
    <item>Africa/Ndjamena</item>
</string-array>

<!--145 马其顿, please sort by country code value-->
<string-array name="timezone_name_145"></string-array>
<string-array name="timezone_id_145"></string-array>
<!--146 阿尔巴尼亚, please sort by country code value-->
<string-array name="timezone_name_146"></string-array>
<string-array name="timezone_id_146"></string-array>
<!--147 黑山, please sort by country code value-->
<string-array name="timezone_name_147"></string-array>
<string-array name="timezone_id_147"></string-array>
<!--148 巴哈马, please sort by country code value-->
<string-array name="timezone_name_148"></string-array>
<string-array name="timezone_id_148"></string-array>
<!--149 比利时, please sort by country code value-->
<string-array name="timezone_name_149"></string-array>
<string-array name="timezone_id_149"></string-array>

<!--150 留尼旺, please sort by country code value-->
<string-array name="timezone_name_150">
    <item>UTC+4</item>
</string-array>
<string-array name="timezone_id_150">
    <item>Indian/Reunion</item>
</string-array>

<!--151 马约特, please sort by country code value-->
<string-array name="timezone_name_151">
    <item>UTC+3</item>
</string-array>
<string-array name="timezone_id_151">
    <item>Indian/Mayotte</item>
</string-array>

<!--152 新西兰, please sort by country code value-->
<string-array name="timezone_name_152">
    <item>UTC+12</item>
</string-array>
<string-array name="timezone_id_152">
    <item>Pacific/Auckland</item>
</string-array>

<!--153 罗马尼亚, please sort by country code value-->
<string-array name="timezone_name_153"></string-array>
<string-array name="timezone_id_153"></string-array>

<!--156 阿富汗, please sort by country code value-->
<string-array name="timezone_name_156">
    <item>UTC+4:30</item>
</string-array>
<string-array name="timezone_id_156">
    <item>Asia/Kabul</item>
</string-array>`