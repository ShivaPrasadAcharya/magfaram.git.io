const inventoryData = {
    मसलन्द: [
   { name: "१. अफिस-ID Card", code: "61611125551" },
   { name: "२. अन्डर फाइल", code: "61611125978" },
   { name: "३. आई-कार्ड", code: "61611120599" },
   { name: "४. इरेजर स्टेशनरी", code: "61611124929" },
   { name: "५. हाइलाइटर (Highlighter)", code: "61611125415" },
   { name: "६. काम फिटि", code: "61611120409" },
   { name: "७. कापी/किताब/डायरी", code: "61611125182" },
   { name: "८. काडा रजिस्टर", code: "61611120243" },
   { name: "९. कृपाही डोरी", code: "61611122961" },
   { name: "१०. खैरो / रबर", code: "61611124252" },
   { name: "११. गम टेप", code: "61611124107" },
   { name: "१२. गम टेप प्लास्टिक (काला)", code: "61611124114" },
   { name: "१३. गम स्टिकर थाम", code: "61611121993" },
   { name: "१४. गेम फोटो", code: "61611121280" },
   { name: "१५. चक मार्कर", code: "61611122082" },
   { name: "१६. चार्ज पेन काली/नीली", code: "61611120367" },
   { name: "१७. जाइरल नोट बुक", code: "61611125040" },
   { name: "१८. टेप", code: "61611124434" },
   { name: "१९. टेविक्स", code: "61611125693" },
   { name: "२०. टिपेक्स चार्ज", code: "61611124454" },
   { name: "२१. नम्बर अन्य सामान", code: "61611121791" },
   { name: "२२. नेपाली कागज (पहाडे कागज)", code: "61611126093" },
   { name: "२३. नेम प्लेट (Name Plate)", code: "61611128350" },
   { name: "२४. नोट बुक", code: "61611125982" },
   { name: "२५. पञ्चेज फाइल", code: "61611125566" },
   { name: "२६. पर्फेक्ट स्टेपलर", code: "61611128974" },
   { name: "२७. पाईलट पेन काली/निली", code: "61611129571" },
   { name: "२८. पि.पि. टेप", code: "61611129819" },
   { name: "२९. पुष्टिक", code: "61611120930" },
   { name: "३०. पेन्सल Pencil", code: "61611121093" },
   { name: "३१. पेन्सल कटर", code: "61611121942" },
   { name: "३२. प्याचबार सेतिन", code: "61611124400" },
   { name: "३३. प्लास्टिक कभर", code: "61611121722" },
   { name: "३४. प्लास्टिक टेप", code: "61611122179" },
   { name: "३५. प्लास्टिक पेपर", code: "61611121401" },
   { name: "३६. फाईल", code: "61611121919" },
   { name: "३७. फाईल नेट", code: "61611121973" },
   { name: "३८. फोटो पेपर", code: "61611121390" },
   { name: "३९. फोटोकपी पेपर", code: "61611121471" },
   { name: "४०. बक्स (पेपर नत्थी)", code: "61611120314" },
   { name: "४१. बक्स फाईल", code: "61611121857" },
   { name: "४२. बाइन पेन मोतीमोती", code: "61611122855" },
   { name: "४३. माईन्ड म्याप बुलेट", code: "61611121171" },
   { name: "४४. मासक", code: "61611122220" },
   { name: "४५. रजिस्टर", code: "61611126008" },
   { name: "४६. रिफिल फाइल", code: "61611121550" },
   { name: "४७. स्केल", code: "61611126111" },
   { name: "४८. स्टाम्प म्याटी", code: "61611120627" },
   { name: "४९. स्टाम्प प्याड", code: "61611124432" },
   { name: "५०. स्टिकर पेपर", code: "61611124807" },
   { name: "५१. स्टेपलर", code: "61611124202" },
   { name: "५२. स्ट्याम्प (Stamp)", code: "61611124357" },
],
    कम्प्युटर: [
    { name: "१. टेलिफोन सेट", code: "616111100233" },
    { name: "२. टेस्टिङ बल्ब", code: "616111100246" },
    { name: "३. नमुना (अफिस USB चेयर)", code: "616111100140" },
    { name: "४. नेटवर्क क्यारी", code: "616111100150" },
    { name: "५. नेटवर्क ट्राफिकस", code: "616111100159" },
    { name: "६. नेटवर्क रिकर्ड चार्ट", code: "616111100190" },
    { name: "७. नेटवर्को खारेज", code: "616111100262" },
    { name: "८. पावर सप्लाइ", code: "616111100247" },
    { name: "९. फाइल बोर्ड", code: "616111100217" },
    { name: "१०. मल्टिमीटर", code: "616111100207" },
    { name: "११. यन्त्र", code: "616111100275" },
    { name: "१२. यन्त्र (मिटर कार्डिङ्ग)", code: "616111100007" },
    { name: "१३. यन्त्र (स्थापना २०६२) २०२", code: "616111100009" },
    { name: "१४. यन्त्र 2320", code: "616111100013" },
    { name: "१५. यन्त्र 337", code: "616111100019" },
    { name: "१६. युपिएस क्यारी", code: "616111100213" },
    { name: "१७. यूपिएस पावर लाइन", code: "616111100210" },
    { name: "१८. राउटर (Router/Wifi Router)", code: "616111100198" },
    { name: "१९. लिक्विड", code: "616111100161" },
    { name: "२०. विद्युतीय तार", code: "616111100212" },
    { name: "२१. वेबक्याम तार", code: "616111100064" },
    { name: "२२. वेबक्याम स्टीक", code: "616111100065" },
    { name: "२३. सिसिटिभी तार", code: "616111100211" },
    { name: "२४. स्थिर केबल", code: "616111100302" },
    { name: "२५. हब स्वि एम आई केबल", code: "616111100208" },
    { name: "२६. हार्डवेयर", code: "616111100200" },
    ],
    भाडाकुडा: [
   { name: "१. अग्निविपक डब्बी", code: "616113100127" },
   { name: "२. अफिसको चुलो", code: "616113100032" },
   { name: "३. अल्मुनियम पन्जा चुलो", code: "616113100007" },
   { name: "४. अन्य खाद्यान्न सम्बन्धी सामाग्री", code: "616113100029" },
   { name: "५. अन्य भान्साघर सम्बन्धी सामाग्री", code: "616113100027" },
   { name: "६. एयर फ्रेसनर/Air Fresher", code: "616113100370" },
   { name: "७. एलुमिनियम डाँडु", code: "616113100437" },
   { name: "८. एल्मुनियम भाँडा", code: "616113100608" },
   { name: "९. एसी कभर", code: "616113100370" },
   { name: "१०. कफी मेकर", code: "616113100750" },
   { name: "११. कर्कर मग", code: "616113100086" },
   { name: "१२. काठको चम्चा", code: "616113100841" },
   { name: "१३. कार्टन बक्स", code: "616113100094" },
   { name: "१४. काश्मिर प्लेट", code: "616113101750" },
   { name: "१५. कुकर मेसा", code: "616113101801" },
   { name: "१६. कुकर सेट", code: "616113100807" },
   { name: "१७. कुलर", code: "616113102100" },
   { name: "१८. क्याफे सेट", code: "616113100094" },
   { name: "१९. क्यारियर", code: "616113102173" },
   { name: "२०. गिलास (Glass)", code: "616113101750" },
   { name: "२१. गैस चुल्हो", code: "616113102211" },
   { name: "२२. गैस रेगुलेटर", code: "616113101830" },
   { name: "२३. चकलेटो", code: "616113101329" },
   { name: "२४. चिनी डब्बा", code: "616113101176" },
   { name: "२५. चिनी राख्ने", code: "616113101193" },
   { name: "२६. चिया कप", code: "616113102033" },
   { name: "२७. टी-सेट", code: "616113101214" },
   { name: "२८. टिफिन बक्स", code: "616113102961" },
   { name: "२९. टिस्यु पेपर", code: "616113103075" },
   { name: "३०. टुथपेस्ट होल्डर", code: "616113103249" },
   { name: "३१. टावल (Towel)", code: "616113102932" },
   { name: "३२. टेबल क्लथ", code: "616113103431" },
   { name: "३३. ट्याग", code: "616113103677" },
   { name: "३४. डस्टबिन", code: "616113103048" },
   { name: "३५. डिब्बा कभर", code: "616113103799" },
   { name: "३६. डिश वासर", code: "616113104424" },
   { name: "३७. थर्मस", code: "616113104937" },
   { name: "३८. थाल", code: "616113105754" },
   { name: "३९. नेपियर Tissue पेपर", code: "616113105062" },
   { name: "४०. पत्थर सिल", code: "616113107556" },
   { name: "४१. पानी फिल्टर", code: "616113107489" },
   { name: "४२. पिकनिक कुलर", code: "616113107833" },
   { name: "४३. पिकनिक झोला", code: "616113107864" },
   { name: "४४. प्लाष्टिक बाल्टी", code: "616113105144" },
   { name: "४५. प्लाष्टिक मग", code: "616113105170" },
   { name: "४६. बटुका", code: "616113108996" },
   { name: "४७. बाटा", code: "616113108965" },
   { name: "४८. बोतल खोल्ने", code: "616113108967" },
   { name: "४९. भाँडा", code: "616113109027" },
   { name: "५०. लोटा", code: "616113108977" },
   { name: "५१. सेरामिक ग्लास", code: "616113103863" },
   { name: "५२. सौसपेन", code: "616113107933" },
   { name: "५३. स्टील काँटा", code: "616113107933" },
   { name: "५४. स्टेनलेस कचौरा", code: "616113101403" },
   { name: "५५. स्टेनलेस चम्चा", code: "616113102261" },
   { name: "५६. हट केस (Hot case)", code: "616113108833" },
   { name: "५७. हरियो मार्बल", code: "616113108807" },
]
};
