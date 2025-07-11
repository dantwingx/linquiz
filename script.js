const multilingualData = {
    // Basic Greetings & Politeness
    greetings: [
        {
            id: "hello",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "你好", pronunciation: "nǐ hǎo" },
                ko: { text: "안녕하세요", pronunciation: "annyeonghaseyo" },
                en: { text: "Hello", pronunciation: "heh-loh" },
                ja: { text: "こんにちは", pronunciation: "konnichiwa" },
                es: { text: "Hola", pronunciation: "OH-lah" },
                vi: { text: "Xin chào", pronunciation: "sin chao" },
                fr: { text: "Bonjour", pronunciation: "bon-zhoor" },
                de: { text: "Hallo", pronunciation: "hah-loh" },
                tr: { text: "Merhaba", pronunciation: "mer-ha-BAH" }
            },
            meanings: {
                en: "Hello",
                zh: "你好",
                ko: "안녕하세요",
                ja: "こんにちは",
                es: "Hola",
                vi: "Xin chào",
                fr: "Bonjour",
                de: "Hallo",
                tr: "Merhaba"
            }
        },
        {
            id: "goodbye",
            type: "word",
            translations: {
                zh: { text: "再见", pronunciation: "zài jiàn" },
                ko: { text: "안녕히 가세요", pronunciation: "annyeonghi gaseyo" },
                en: { text: "Goodbye", pronunciation: "good-bye" },
                ja: { text: "さようなら", pronunciation: "sayounara" },
                es: { text: "Adiós", pronunciation: "ah-THEE-ohs" },
                vi: { text: "Tạm biệt", pronunciation: "tam biet" },
                fr: { text: "Au revoir", pronunciation: "oh ruh-vwahr" },
                de: { text: "Auf Wiedersehen", pronunciation: "owf VEE-der-zayn" },
                tr: { text: "Hoşça kal", pronunciation: "hosh-cha KAL" }
            },
            meanings: {
                en: "Goodbye",
                zh: "再见",
                ko: "안녕히 가세요",
                ja: "さようなら",
                es: "Adiós",
                vi: "Tạm biệt",
                fr: "Au revoir",
                de: "Auf Wiedersehen",
                tr: "Hoşça kal"
            }
        },
        {
            id: "thank_you",
            type: "word",
            translations: {
                zh: { text: "谢谢", pronunciation: "xiè xiè" },
                ko: { text: "감사합니다", pronunciation: "gamsahamnida" },
                en: { text: "Thank you", pronunciation: "thank yoo" },
                ja: { text: "ありがとう", pronunciation: "arigatou" },
                es: { text: "Gracias", pronunciation: "GRAH-see-ahs" },
                vi: { text: "Cảm ơn", pronunciation: "cam urn" },
                fr: { text: "Merci", pronunciation: "mer-see" },
                de: { text: "Danke", pronunciation: "dahn-keh" },
                tr: { text: "Teşekkür ederim", pronunciation: "te-shek-KUR eh-deh-rim" }
            },
            meanings: {
                en: "Thank you",
                zh: "谢谢",
                ko: "감사합니다",
                ja: "ありがとう",
                es: "Gracias",
                vi: "Cảm ơn",
                fr: "Merci",
                de: "Danke",
                tr: "Teşekkür ederim"
            }
        },
        {
            id: "sorry",
            type: "word",
            translations: {
                zh: { text: "对不起", pronunciation: "duì bù qǐ" },
                ko: { text: "죄송합니다", pronunciation: "joesonghamnida" },
                en: { text: "Sorry", pronunciation: "sor-ee" },
                ja: { text: "すみません", pronunciation: "sumimasen" },
                es: { text: "Lo siento", pronunciation: "loh see-EN-toh" },
                vi: { text: "Xin lỗi", pronunciation: "sin loy" },
                fr: { text: "Désolé", pronunciation: "day-zoh-lay" },
                de: { text: "Entschuldigung", pronunciation: "ent-SHOOL-di-goong" },
                tr: { text: "Özür dilerim", pronunciation: "oh-ZUR dee-leh-rim" }
            },
            meanings: {
                en: "Sorry",
                zh: "对不起",
                ko: "죄송합니다",
                ja: "すみません",
                es: "Lo siento",
                vi: "Xin lỗi",
                fr: "Désolé",
                de: "Entschuldigung",
                tr: "Özür dilerim"
            }
        },
        {
            id: "please",
            type: "word",
            translations: {
                zh: { text: "请", pronunciation: "qǐng" },
                ko: { text: "부탁합니다", pronunciation: "butakhamnida" },
                en: { text: "Please", pronunciation: "pleez" },
                ja: { text: "お願いします", pronunciation: "onegaishimasu" },
                es: { text: "Por favor", pronunciation: "por fah-VOR" },
                vi: { text: "Xin", pronunciation: "sin" },
                fr: { text: "S'il vous plaît", pronunciation: "seel voo play" },
                de: { text: "Bitte", pronunciation: "bit-teh" },
                tr: { text: "Lütfen", pronunciation: "LUT-fen" }
            },
            meanings: {
                en: "Please",
                zh: "请",
                ko: "부탁합니다",
                ja: "お願いします",
                es: "Por favor",
                vi: "Xin",
                fr: "S'il vous plaît",
                de: "Bitte",
                tr: "Lütfen"
            }
        }
    ],
    
    // Family & Relationships
    family: [
        {
            id: "family",
            type: "word",
            translations: {
                zh: { text: "家庭", pronunciation: "jiā tíng" },
                ko: { text: "가족", pronunciation: "gajok" },
                en: { text: "Family", pronunciation: "fam-i-lee" },
                ja: { text: "家族", pronunciation: "kazoku" },
                es: { text: "Familia", pronunciation: "fah-MEE-lee-ah" },
                vi: { text: "Gia đình", pronunciation: "ya dinh" },
                fr: { text: "Famille", pronunciation: "fah-mee" },
                de: { text: "Familie", pronunciation: "fah-mee-lee-eh" },
                tr: { text: "Aile", pronunciation: "ah-EE-leh" }
            },
            meanings: {
                en: "Family",
                zh: "家庭",
                ko: "가족",
                ja: "家族",
                es: "Familia",
                vi: "Gia đình",
                fr: "Famille",
                de: "Familie",
                tr: "Aile"
            }
        },
        {
            id: "father",
            type: "word",
            translations: {
                zh: { text: "爸爸", pronunciation: "bà ba" },
                ko: { text: "아버지", pronunciation: "a-beo-ji" },
                en: { text: "Father", pronunciation: "fah-ther" },
                ja: { text: "お父さん", pronunciation: "o-tou-san" },
                es: { text: "Padre", pronunciation: "PAH-dreh" },
                vi: { text: "Bố", pronunciation: "boh" },
                fr: { text: "Père", pronunciation: "pair" },
                de: { text: "Vater", pronunciation: "fah-ter" },
                tr: { text: "Baba", pronunciation: "ba-BAH" }
            },
            meanings: {
                en: "Father",
                zh: "爸爸",
                ko: "아버지",
                ja: "お父さん",
                es: "Padre",
                vi: "Bố",
                fr: "Père",
                de: "Vater",
                tr: "Baba"
            }
        },
        {
            id: "mother",
            type: "word",
            translations: {
                zh: { text: "妈妈", pronunciation: "mā ma" },
                ko: { text: "어머니", pronunciation: "eo-meo-ni" },
                en: { text: "Mother", pronunciation: "muh-ther" },
                ja: { text: "お母さん", pronunciation: "o-kaa-san" },
                es: { text: "Madre", pronunciation: "MAH-dreh" },
                vi: { text: "Mẹ", pronunciation: "meh" },
                fr: { text: "Mère", pronunciation: "mair" },
                de: { text: "Mutter", pronunciation: "moot-ter" },
                tr: { text: "Anne", pronunciation: "AH-neh" }
            },
            meanings: {
                en: "Mother",
                zh: "妈妈",
                ko: "어머니",
                ja: "お母さん",
                es: "Madre",
                vi: "Mẹ",
                fr: "Mère",
                de: "Mutter",
                tr: "Anne"
            }
        },
        {
            id: "friend",
            type: "word",
            translations: {
                zh: { text: "朋友", pronunciation: "péng yǒu" },
                ko: { text: "친구", pronunciation: "chingu" },
                en: { text: "Friend", pronunciation: "frend" },
                ja: { text: "友達", pronunciation: "tomodachi" },
                es: { text: "Amigo", pronunciation: "ah-MEE-goh" },
                vi: { text: "Bạn", pronunciation: "ban" },
                fr: { text: "Ami", pronunciation: "ah-mee" },
                de: { text: "Freund", pronunciation: "froynd" },
                tr: { text: "Arkadaş", pronunciation: "ar-ka-DASH" }
            },
            meanings: {
                en: "Friend",
                zh: "朋友",
                ko: "친구",
                ja: "友達",
                es: "Amigo",
                vi: "Bạn",
                fr: "Ami",
                de: "Freund",
                tr: "Arkadaş"
            }
        }
    ],
    
    // Basic Verbs
    verbs: [
        {
            id: "eat",
            type: "word",
            translations: {
                zh: { text: "吃", pronunciation: "chī" },
                ko: { text: "먹다", pronunciation: "meokda" },
                en: { text: "Eat", pronunciation: "eet" },
                ja: { text: "食べる", pronunciation: "taberu" },
                es: { text: "Comer", pronunciation: "ko-MER" },
                vi: { text: "Ăn", pronunciation: "an" },
                fr: { text: "Manger", pronunciation: "mahn-zhay" },
                de: { text: "Essen", pronunciation: "es-sen" },
                tr: { text: "Yemek", pronunciation: "ye-MEK" }
            },
            meanings: {
                en: "To eat",
                zh: "吃",
                ko: "먹다",
                ja: "食べる",
                es: "Comer",
                vi: "Ăn",
                fr: "Manger",
                de: "Essen",
                tr: "Yemek"
            }
        },
        {
            id: "drink",
            type: "word",
            translations: {
                zh: { text: "喝", pronunciation: "hē" },
                ko: { text: "마시다", pronunciation: "masida" },
                en: { text: "Drink", pronunciation: "drink" },
                ja: { text: "飲む", pronunciation: "nomu" },
                es: { text: "Beber", pronunciation: "be-BER" },
                vi: { text: "Uống", pronunciation: "oong" },
                fr: { text: "Boire", pronunciation: "bwahr" },
                de: { text: "Trinken", pronunciation: "trin-ken" },
                tr: { text: "İçmek", pronunciation: "ich-MEK" }
            },
            meanings: {
                en: "To drink",
                zh: "喝",
                ko: "마시다",
                ja: "飲む",
                es: "Beber",
                vi: "Uống",
                fr: "Boire",
                de: "Trinken",
                tr: "İçmek"
            }
        },
        {
            id: "sleep",
            type: "word",
            translations: {
                zh: { text: "睡觉", pronunciation: "shuì jiào" },
                ko: { text: "자다", pronunciation: "jada" },
                en: { text: "Sleep", pronunciation: "sleep" },
                ja: { text: "寝る", pronunciation: "neru" },
                es: { text: "Dormir", pronunciation: "dor-MIR" },
                vi: { text: "Ngủ", pronunciation: "ngoo" },
                fr: { text: "Dormir", pronunciation: "dor-MEER" },
                de: { text: "Schlafen", pronunciation: "shlah-fen" },
                tr: { text: "Uyumak", pronunciation: "u-yu-MAK" }
            },
            meanings: {
                en: "To sleep",
                zh: "睡觉",
                ko: "자다",
                ja: "寝る",
                es: "Dormir",
                vi: "Ngủ",
                fr: "Dormir",
                de: "Schlafen",
                tr: "Uyumak"
            }
        },
        {
            id: "study",
            type: "word",
            translations: {
                zh: { text: "学习", pronunciation: "xué xí" },
                ko: { text: "공부하다", pronunciation: "gongbuhada" },
                en: { text: "Study", pronunciation: "stuh-dee" },
                ja: { text: "勉強する", pronunciation: "benkyou suru" },
                es: { text: "Estudiar", pronunciation: "es-tu-THEE-ar" },
                vi: { text: "Học", pronunciation: "hok" },
                fr: { text: "Étudier", pronunciation: "ay-too-dee-ay" },
                de: { text: "Lernen", pronunciation: "ler-nen" },
                tr: { text: "Çalışmak", pronunciation: "cha-lush-MAK" }
            },
            meanings: {
                en: "To study",
                zh: "学习",
                ko: "공부하다",
                ja: "勉強する",
                es: "Estudiar",
                vi: "Học",
                fr: "Étudier",
                de: "Lernen",
                tr: "Çalışmak"
            }
        },
        {
            id: "work",
            type: "word",
            translations: {
                zh: { text: "工作", pronunciation: "gōng zuò" },
                ko: { text: "일하다", pronunciation: "ilhada" },
                en: { text: "Work", pronunciation: "wurk" },
                ja: { text: "働く", pronunciation: "hataraku" },
                es: { text: "Trabajar", pronunciation: "tra-ba-HAR" },
                vi: { text: "Làm việc", pronunciation: "lam viec" },
                fr: { text: "Travailler", pronunciation: "trah-vah-yay" },
                de: { text: "Arbeiten", pronunciation: "ar-bye-ten" },
                tr: { text: "Çalışmak", pronunciation: "cha-lush-MAK" }
            },
            meanings: {
                en: "To work",
                zh: "工作",
                ko: "일하다",
                ja: "働く",
                es: "Trabajar",
                vi: "Làm việc",
                fr: "Travailler",
                de: "Arbeiten",
                tr: "Çalışmak"
            }
        }
    ],
    
    // Colors
    colors: [
        {
            id: "red",
            type: "word",
            translations: {
                zh: { text: "红色", pronunciation: "hóng sè" },
                ko: { text: "빨간색", pronunciation: "ppalgansaek" },
                en: { text: "Red", pronunciation: "red" },
                ja: { text: "赤", pronunciation: "aka" },
                es: { text: "Rojo", pronunciation: "ROH-hoh" },
                vi: { text: "Màu đỏ", pronunciation: "mau do" },
                fr: { text: "Rouge", pronunciation: "roozh" },
                de: { text: "Rot", pronunciation: "roht" },
                tr: { text: "Kırmızı", pronunciation: "kir-mi-ZI" }
            },
            meanings: {
                en: "Red",
                zh: "红色",
                ko: "빨간색",
                ja: "赤",
                es: "Rojo",
                vi: "Màu đỏ",
                fr: "Rouge",
                de: "Rot",
                tr: "Kırmızı"
            }
        },
        {
            id: "blue",
            type: "word",
            translations: {
                zh: { text: "蓝色", pronunciation: "lán sè" },
                ko: { text: "파란색", pronunciation: "paransaek" },
                en: { text: "Blue", pronunciation: "bloo" },
                ja: { text: "青", pronunciation: "ao" },
                es: { text: "Azul", pronunciation: "ah-THOOL" },
                vi: { text: "Màu xanh", pronunciation: "mau sahn" },
                fr: { text: "Bleu", pronunciation: "bleu" },
                de: { text: "Blau", pronunciation: "blau" },
                tr: { text: "Mavi", pronunciation: "ma-VEE" }
            },
            meanings: {
                en: "Blue",
                zh: "蓝色",
                ko: "파란색",
                ja: "青",
                es: "Azul",
                vi: "Màu xanh",
                fr: "Bleu",
                de: "Blau",
                tr: "Mavi"
            }
        },
        {
            id: "green",
            type: "word",
            translations: {
                zh: { text: "绿色", pronunciation: "lǜ sè" },
                ko: { text: "초록색", pronunciation: "choroksaek" },
                en: { text: "Green", pronunciation: "green" },
                ja: { text: "緑", pronunciation: "midori" },
                es: { text: "Verde", pronunciation: "VER-deh" },
                vi: { text: "Màu xanh lá", pronunciation: "mau sahn la" },
                fr: { text: "Vert", pronunciation: "vair" },
                de: { text: "Grün", pronunciation: "groon" },
                tr: { text: "Yeşil", pronunciation: "ye-SHIL" }
            },
            meanings: {
                en: "Green",
                zh: "绿色",
                ko: "초록색",
                ja: "緑",
                es: "Verde",
                vi: "Màu xanh lá",
                fr: "Vert",
                de: "Grün",
                tr: "Yeşil"
            }
        }
    ],
    
    // Numbers
    numbers: [
        {
            id: "one",
            type: "word",
            translations: {
                zh: { text: "一", pronunciation: "yī" },
                ko: { text: "하나", pronunciation: "hana" },
                en: { text: "One", pronunciation: "wuhn" },
                ja: { text: "一", pronunciation: "ichi" },
                es: { text: "Uno", pronunciation: "OO-noh" },
                vi: { text: "Một", pronunciation: "mot" },
                fr: { text: "Un", pronunciation: "ahn" },
                de: { text: "Eins", pronunciation: "ains" },
                tr: { text: "Bir", pronunciation: "BEER" }
            },
            meanings: {
                en: "One",
                zh: "一",
                ko: "하나",
                ja: "一",
                es: "Uno",
                vi: "Một",
                fr: "Un",
                de: "Eins",
                tr: "Bir"
            }
        },
        {
            id: "two",
            type: "word",
            translations: {
                zh: { text: "二", pronunciation: "èr" },
                ko: { text: "둘", pronunciation: "dul" },
                en: { text: "Two", pronunciation: "too" },
                ja: { text: "二", pronunciation: "ni" },
                es: { text: "Dos", pronunciation: "DOHS" },
                vi: { text: "Hai", pronunciation: "hai" },
                fr: { text: "Deux", pronunciation: "deu" },
                de: { text: "Zwei", pronunciation: "tsvai" },
                tr: { text: "İki", pronunciation: "ee-KEE" }
            },
            meanings: {
                en: "Two",
                zh: "二",
                ko: "둘",
                ja: "二",
                es: "Dos",
                vi: "Hai",
                fr: "Deux",
                de: "Zwei",
                tr: "İki"
            }
        },
        {
            id: "three",
            type: "word",
            translations: {
                zh: { text: "三", pronunciation: "sān" },
                ko: { text: "셋", pronunciation: "set" },
                en: { text: "Three", pronunciation: "three" },
                ja: { text: "三", pronunciation: "san" },
                es: { text: "Tres", pronunciation: "TREHS" },
                vi: { text: "Ba", pronunciation: "ba" },
                fr: { text: "Trois", pronunciation: "trwa" },
                de: { text: "Drei", pronunciation: "drai" },
                tr: { text: "Üç", pronunciation: "UCH" }
            },
            meanings: {
                en: "Three",
                zh: "三",
                ko: "셋",
                ja: "三",
                es: "Tres",
                vi: "Ba",
                fr: "Trois",
                de: "Drei",
                tr: "Üç"
            }
        }
    ],
    
    // Food & Drinks
    food: [
        {
            id: "rice",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "米饭", pronunciation: "mǐ fàn" },
                ko: { text: "밥", pronunciation: "bap" },
                en: { text: "Rice", pronunciation: "rahys" },
                ja: { text: "ご飯", pronunciation: "gohan" },
                es: { text: "Arroz", pronunciation: "ah-ROHS" },
                vi: { text: "Cơm", pronunciation: "com" },
                fr: { text: "Riz", pronunciation: "ree" },
                de: { text: "Reis", pronunciation: "rahys" },
                tr: { text: "Pirinç", pronunciation: "pi-RINCH" }
            },
            meanings: {
                en: "Rice",
                zh: "米饭",
                ko: "밥",
                ja: "ご飯",
                es: "Arroz",
                vi: "Cơm",
                fr: "Riz",
                de: "Reis",
                tr: "Pirinç"
            }
        },
        {
            id: "water",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "水", pronunciation: "shuǐ" },
                ko: { text: "물", pronunciation: "mul" },
                en: { text: "Water", pronunciation: "WAW-ter" },
                ja: { text: "水", pronunciation: "mizu" },
                es: { text: "Agua", pronunciation: "AH-gwah" },
                vi: { text: "Nước", pronunciation: "nuoc" },
                fr: { text: "Eau", pronunciation: "oh" },
                de: { text: "Wasser", pronunciation: "VAH-ser" },
                tr: { text: "Su", pronunciation: "soo" }
            },
            meanings: {
                en: "Water",
                zh: "水",
                ko: "물",
                ja: "水",
                es: "Agua",
                vi: "Nước",
                fr: "Eau",
                de: "Wasser",
                tr: "Su"
            }
        },
        {
            id: "coffee",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "咖啡", pronunciation: "kā fēi" },
                ko: { text: "커피", pronunciation: "keo-pi" },
                en: { text: "Coffee", pronunciation: "KAW-fee" },
                ja: { text: "コーヒー", pronunciation: "koohii" },
                es: { text: "Café", pronunciation: "kah-FEH" },
                vi: { text: "Cà phê", pronunciation: "ca phe" },
                fr: { text: "Café", pronunciation: "kah-FEH" },
                de: { text: "Kaffee", pronunciation: "kah-FEH" },
                tr: { text: "Kahve", pronunciation: "kah-VEH" }
            },
            meanings: {
                en: "Coffee",
                zh: "咖啡",
                ko: "커피",
                ja: "コーヒー",
                es: "Café",
                vi: "Cà phê",
                fr: "Café",
                de: "Kaffee",
                tr: "Kahve"
            }
        },
        {
            id: "tea",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "茶", pronunciation: "chá" },
                ko: { text: "차", pronunciation: "cha" },
                en: { text: "Tea", pronunciation: "tee" },
                ja: { text: "お茶", pronunciation: "ocha" },
                es: { text: "Té", pronunciation: "teh" },
                vi: { text: "Trà", pronunciation: "tra" },
                fr: { text: "Thé", pronunciation: "teh" },
                de: { text: "Tee", pronunciation: "teh" },
                tr: { text: "Çay", pronunciation: "chah-ee" }
            },
            meanings: {
                en: "Tea",
                zh: "茶",
                ko: "차",
                ja: "お茶",
                es: "Té",
                vi: "Trà",
                fr: "Thé",
                de: "Tee",
                tr: "Çay"
            }
        },
        {
            id: "bread",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "面包", pronunciation: "miàn bāo" },
                ko: { text: "빵", pronunciation: "ppang" },
                en: { text: "Bread", pronunciation: "bred" },
                ja: { text: "パン", pronunciation: "pan" },
                es: { text: "Pan", pronunciation: "pahn" },
                vi: { text: "Bánh mì", pronunciation: "banh mi" },
                fr: { text: "Pain", pronunciation: "pahn" },
                de: { text: "Brot", pronunciation: "broht" },
                tr: { text: "Ekmek", pronunciation: "ek-MEK" }
            },
            meanings: {
                en: "Bread",
                zh: "面包",
                ko: "빵",
                ja: "パン",
                es: "Pan",
                vi: "Bánh mì",
                fr: "Pain",
                de: "Brot",
                tr: "Ekmek"
            }
        },
        {
            id: "meat",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "肉", pronunciation: "ròu" },
                ko: { text: "고기", pronunciation: "gogi" },
                en: { text: "Meat", pronunciation: "meet" },
                ja: { text: "肉", pronunciation: "niku" },
                es: { text: "Carne", pronunciation: "KAR-neh" },
                vi: { text: "Thịt", pronunciation: "thit" },
                fr: { text: "Viande", pronunciation: "vee-AHND" },
                de: { text: "Fleisch", pronunciation: "flahysh" },
                tr: { text: "Et", pronunciation: "et" }
            },
            meanings: {
                en: "Meat",
                zh: "肉",
                ko: "고기",
                ja: "肉",
                es: "Carne",
                vi: "Thịt",
                fr: "Viande",
                de: "Fleisch",
                tr: "Et"
            }
        },
        {
            id: "fish",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "鱼", pronunciation: "yú" },
                ko: { text: "생선", pronunciation: "saengseon" },
                en: { text: "Fish", pronunciation: "fish" },
                ja: { text: "魚", pronunciation: "sakana" },
                es: { text: "Pescado", pronunciation: "pes-KAH-doh" },
                vi: { text: "Cá", pronunciation: "ca" },
                fr: { text: "Poisson", pronunciation: "pwah-SOHN" },
                de: { text: "Fisch", pronunciation: "fish" },
                tr: { text: "Balık", pronunciation: "bah-LUK" }
            },
            meanings: {
                en: "Fish",
                zh: "鱼",
                ko: "생선",
                ja: "魚",
                es: "Pescado",
                vi: "Cá",
                fr: "Poisson",
                de: "Fisch",
                tr: "Balık"
            }
        },
        {
            id: "vegetables",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "蔬菜", pronunciation: "shū cài" },
                ko: { text: "채소", pronunciation: "chaeso" },
                en: { text: "Vegetables", pronunciation: "VEJ-tuh-buhls" },
                ja: { text: "野菜", pronunciation: "yasai" },
                es: { text: "Verduras", pronunciation: "ver-DOO-rahs" },
                vi: { text: "Rau", pronunciation: "rau" },
                fr: { text: "Légumes", pronunciation: "leh-GOOM" },
                de: { text: "Gemüse", pronunciation: "geh-MUE-zeh" },
                tr: { text: "Sebze", pronunciation: "seb-ZEH" }
            },
            meanings: {
                en: "Vegetables",
                zh: "蔬菜",
                ko: "채소",
                ja: "野菜",
                es: "Verduras",
                vi: "Rau",
                fr: "Légumes",
                de: "Gemüse",
                tr: "Sebze"
            }
        },
        {
            id: "fruit",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "水果", pronunciation: "shuǐ guǒ" },
                ko: { text: "과일", pronunciation: "gwail" },
                en: { text: "Fruit", pronunciation: "froot" },
                ja: { text: "果物", pronunciation: "kudamono" },
                es: { text: "Fruta", pronunciation: "FROO-tah" },
                vi: { text: "Trái cây", pronunciation: "trai kay" },
                fr: { text: "Fruit", pronunciation: "froo-EE" },
                de: { text: "Obst", pronunciation: "ohpst" },
                tr: { text: "Meyve", pronunciation: "mey-VEH" }
            },
            meanings: {
                en: "Fruit",
                zh: "水果",
                ko: "과일",
                ja: "果物",
                es: "Fruta",
                vi: "Trái cây",
                fr: "Fruit",
                de: "Obst",
                tr: "Meyve"
            }
        },
        {
            id: "dessert",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "甜点", pronunciation: "tián diǎn" },
                ko: { text: "디저트", pronunciation: "dijeo-teu" },
                en: { text: "Dessert", pronunciation: "dih-ZURT" },
                ja: { text: "デザート", pronunciation: "dezaato" },
                es: { text: "Postre", pronunciation: "POHS-treh" },
                vi: { text: "Tráng miệng", pronunciation: "trang mieng" },
                fr: { text: "Dessert", pronunciation: "deh-SER" },
                de: { text: "Nachtisch", pronunciation: "NAHKH-tish" },
                tr: { text: "Tatlı", pronunciation: "tat-LUH" }
            },
            meanings: {
                en: "Dessert",
                zh: "甜点",
                ko: "디저트",
                ja: "デザート",
                es: "Postre",
                vi: "Tráng miệng",
                fr: "Dessert",
                de: "Nachtisch",
                tr: "Tatlı"
            }
        }
    ],
    
    // Weather
    weather: [
        {
            id: "sunny",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "晴天", pronunciation: "qíng tiān" },
                ko: { text: "맑은", pronunciation: "malgeun" },
                en: { text: "Sunny", pronunciation: "SUHN-ee" },
                ja: { text: "晴れ", pronunciation: "hare" },
                es: { text: "Soleado", pronunciation: "so-leh-AH-doh" },
                vi: { text: "Nắng", pronunciation: "nang" },
                fr: { text: "Ensoleillé", pronunciation: "ahn-so-lay-YEH" },
                de: { text: "Sonnig", pronunciation: "ZON-ikh" },
                tr: { text: "Güneşli", pronunciation: "gue-nesh-LI" }
            },
            meanings: {
                en: "Sunny",
                zh: "晴天",
                ko: "맑은",
                ja: "晴れ",
                es: "Soleado",
                vi: "Nắng",
                fr: "Ensoleillé",
                de: "Sonnig",
                tr: "Güneşli"
            }
        },
        {
            id: "rain",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "雨", pronunciation: "yǔ" },
                ko: { text: "비", pronunciation: "bi" },
                en: { text: "Rain", pronunciation: "rayn" },
                ja: { text: "雨", pronunciation: "ame" },
                es: { text: "Lluvia", pronunciation: "LYOO-vee-ah" },
                vi: { text: "Mưa", pronunciation: "mua" },
                fr: { text: "Pluie", pronunciation: "ploo-EE" },
                de: { text: "Regen", pronunciation: "REH-gen" },
                tr: { text: "Yağmur", pronunciation: "yah-MOOR" }
            },
            meanings: {
                en: "Rain",
                zh: "雨",
                ko: "비",
                ja: "雨",
                es: "Lluvia",
                vi: "Mưa",
                fr: "Pluie",
                de: "Regen",
                tr: "Yağmur"
            }
        },
        {
            id: "snow",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "雪", pronunciation: "xuě" },
                ko: { text: "눈", pronunciation: "nun" },
                en: { text: "Snow", pronunciation: "snoh" },
                ja: { text: "雪", pronunciation: "yuki" },
                es: { text: "Nieve", pronunciation: "nee-EH-veh" },
                vi: { text: "Tuyết", pronunciation: "tuyet" },
                fr: { text: "Neige", pronunciation: "nezh" },
                de: { text: "Schnee", pronunciation: "shneh" },
                tr: { text: "Kar", pronunciation: "kar" }
            },
            meanings: {
                en: "Snow",
                zh: "雪",
                ko: "눈",
                ja: "雪",
                es: "Nieve",
                vi: "Tuyết",
                fr: "Neige",
                de: "Schnee",
                tr: "Kar"
            }
        },
        {
            id: "wind",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "风", pronunciation: "fēng" },
                ko: { text: "바람", pronunciation: "baram" },
                en: { text: "Wind", pronunciation: "wind" },
                ja: { text: "風", pronunciation: "kaze" },
                es: { text: "Viento", pronunciation: "vee-EHN-toh" },
                vi: { text: "Gió", pronunciation: "gio" },
                fr: { text: "Vent", pronunciation: "vahn" },
                de: { text: "Wind", pronunciation: "vint" },
                tr: { text: "Rüzgar", pronunciation: "ruez-GAR" }
            },
            meanings: {
                en: "Wind",
                zh: "风",
                ko: "바람",
                ja: "風",
                es: "Viento",
                vi: "Gió",
                fr: "Vent",
                de: "Wind",
                tr: "Rüzgar"
            }
        },
        {
            id: "cloudy",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "多云", pronunciation: "duō yún" },
                ko: { text: "흐린", pronunciation: "heurin" },
                en: { text: "Cloudy", pronunciation: "KLOU-dee" },
                ja: { text: "曇り", pronunciation: "kumori" },
                es: { text: "Nublado", pronunciation: "noo-BLAH-doh" },
                vi: { text: "Có mây", pronunciation: "co may" },
                fr: { text: "Nuageux", pronunciation: "noo-ah-ZHUH" },
                de: { text: "Wolkig", pronunciation: "VOL-kikh" },
                tr: { text: "Bulutlu", pronunciation: "bu-loot-LU" }
            },
            meanings: {
                en: "Cloudy",
                zh: "多云",
                ko: "흐린",
                ja: "曇り",
                es: "Nublado",
                vi: "Có mây",
                fr: "Nuageux",
                de: "Wolkig",
                tr: "Bulutlu"
            }
        },
        {
            id: "hot",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "热", pronunciation: "rè" },
                ko: { text: "뜨거운", pronunciation: "tteugeoun" },
                en: { text: "Hot", pronunciation: "hot" },
                ja: { text: "暑い", pronunciation: "atsui" },
                es: { text: "Caliente", pronunciation: "ka-lee-EHN-teh" },
                vi: { text: "Nóng", pronunciation: "nong" },
                fr: { text: "Chaud", pronunciation: "shoh" },
                de: { text: "Heiß", pronunciation: "hahys" },
                tr: { text: "Sıcak", pronunciation: "suh-JAK" }
            },
            meanings: {
                en: "Hot",
                zh: "热",
                ko: "뜨거운",
                ja: "暑い",
                es: "Caliente",
                vi: "Nóng",
                fr: "Chaud",
                de: "Heiß",
                tr: "Sıcak"
            }
        },
        {
            id: "cold",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "冷", pronunciation: "lěng" },
                ko: { text: "차가운", pronunciation: "chagaun" },
                en: { text: "Cold", pronunciation: "kohld" },
                ja: { text: "寒い", pronunciation: "samui" },
                es: { text: "Frío", pronunciation: "FREE-oh" },
                vi: { text: "Lạnh", pronunciation: "lanh" },
                fr: { text: "Froid", pronunciation: "frwah" },
                de: { text: "Kalt", pronunciation: "kalt" },
                tr: { text: "Soğuk", pronunciation: "so-UUK" }
            },
            meanings: {
                en: "Cold",
                zh: "冷",
                ko: "차가운",
                ja: "寒い",
                es: "Frío",
                vi: "Lạnh",
                fr: "Froid",
                de: "Kalt",
                tr: "Soğuk"
            }
        }
    ],
    
    // Travel
    travel: [
        {
            id: "airport",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "机场", pronunciation: "jī chǎng" },
                ko: { text: "공항", pronunciation: "gonghang" },
                en: { text: "Airport", pronunciation: "AIR-port" },
                ja: { text: "空港", pronunciation: "kuukou" },
                es: { text: "Aeropuerto", pronunciation: "ah-eh-ro-PWER-toh" },
                vi: { text: "Sân bay", pronunciation: "san bay" },
                fr: { text: "Aéroport", pronunciation: "ah-eh-ro-POR" },
                de: { text: "Flughafen", pronunciation: "FLOOK-hah-fen" },
                tr: { text: "Havaalanı", pronunciation: "ha-va-ah-la-NUH" }
            },
            meanings: {
                en: "Airport",
                zh: "机场",
                ko: "공항",
                ja: "空港",
                es: "Aeropuerto",
                vi: "Sân bay",
                fr: "Aéroport",
                de: "Flughafen",
                tr: "Havaalanı"
            }
        },
        {
            id: "hotel",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "酒店", pronunciation: "jiǔ diàn" },
                ko: { text: "호텔", pronunciation: "hotel" },
                en: { text: "Hotel", pronunciation: "ho-TEL" },
                ja: { text: "ホテル", pronunciation: "hoteru" },
                es: { text: "Hotel", pronunciation: "o-TEL" },
                vi: { text: "Khách sạn", pronunciation: "khach san" },
                fr: { text: "Hôtel", pronunciation: "o-TEL" },
                de: { text: "Hotel", pronunciation: "ho-TEL" },
                tr: { text: "Otel", pronunciation: "o-TEL" }
            },
            meanings: {
                en: "Hotel",
                zh: "酒店",
                ko: "호텔",
                ja: "ホテル",
                es: "Hotel",
                vi: "Khách sạn",
                fr: "Hôtel",
                de: "Hotel",
                tr: "Otel"
            }
        },
        {
            id: "train",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "火车", pronunciation: "huǒ chē" },
                ko: { text: "기차", pronunciation: "gicha" },
                en: { text: "Train", pronunciation: "trayn" },
                ja: { text: "電車", pronunciation: "densha" },
                es: { text: "Tren", pronunciation: "tren" },
                vi: { text: "Xe lửa", pronunciation: "xe lua" },
                fr: { text: "Train", pronunciation: "trahn" },
                de: { text: "Zug", pronunciation: "tsook" },
                tr: { text: "Tren", pronunciation: "tren" }
            },
            meanings: {
                en: "Train",
                zh: "火车",
                ko: "기차",
                ja: "電車",
                es: "Tren",
                vi: "Xe lửa",
                fr: "Train",
                de: "Zug",
                tr: "Tren"
            }
        },
        {
            id: "taxi",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "出租车", pronunciation: "chū zū chē" },
                ko: { text: "택시", pronunciation: "taeksi" },
                en: { text: "Taxi", pronunciation: "TAK-see" },
                ja: { text: "タクシー", pronunciation: "takushii" },
                es: { text: "Taxi", pronunciation: "TAK-see" },
                vi: { text: "Taxi", pronunciation: "tak-see" },
                fr: { text: "Taxi", pronunciation: "tak-SEE" },
                de: { text: "Taxi", pronunciation: "TAK-see" },
                tr: { text: "Taksi", pronunciation: "tak-SEE" }
            },
            meanings: {
                en: "Taxi",
                zh: "出租车",
                ko: "택시",
                ja: "タクシー",
                es: "Taxi",
                vi: "Taxi",
                fr: "Taxi",
                de: "Taxi",
                tr: "Taksi"
            }
        },
        {
            id: "passport",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "护照", pronunciation: "hù zhào" },
                ko: { text: "여권", pronunciation: "yeogwon" },
                en: { text: "Passport", pronunciation: "PAS-port" },
                ja: { text: "パスポート", pronunciation: "pasupooto" },
                es: { text: "Pasaporte", pronunciation: "pa-sa-POR-teh" },
                vi: { text: "Hộ chiếu", pronunciation: "ho chieu" },
                fr: { text: "Passeport", pronunciation: "pas-POR" },
                de: { text: "Pass", pronunciation: "pas" },
                tr: { text: "Pasaport", pronunciation: "pa-sa-PORT" }
            },
            meanings: {
                en: "Passport",
                zh: "护照",
                ko: "여권",
                ja: "パスポート",
                es: "Pasaporte",
                vi: "Hộ chiếu",
                fr: "Passeport",
                de: "Pass",
                tr: "Pasaport"
            }
        },
        {
            id: "luggage",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "行李", pronunciation: "xíng lǐ" },
                ko: { text: "짐", pronunciation: "jim" },
                en: { text: "Luggage", pronunciation: "LUG-ij" },
                ja: { text: "荷物", pronunciation: "nimotsu" },
                es: { text: "Equipaje", pronunciation: "eh-kee-PAH-heh" },
                vi: { text: "Hành lý", pronunciation: "hanh ly" },
                fr: { text: "Bagages", pronunciation: "ba-GAZH" },
                de: { text: "Gepäck", pronunciation: "geh-PAEK" },
                tr: { text: "Bagaj", pronunciation: "ba-GAZH" }
            },
            meanings: {
                en: "Luggage",
                zh: "行李",
                ko: "짐",
                ja: "荷物",
                es: "Equipaje",
                vi: "Hành lý",
                fr: "Bagages",
                de: "Gepäck",
                tr: "Bagaj"
            }
        },
        {
            id: "ticket",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "票", pronunciation: "piào" },
                ko: { text: "표", pronunciation: "pyo" },
                en: { text: "Ticket", pronunciation: "TIK-it" },
                ja: { text: "チケット", pronunciation: "chiketto" },
                es: { text: "Boleto", pronunciation: "bo-LEH-toh" },
                vi: { text: "Vé", pronunciation: "ve" },
                fr: { text: "Billet", pronunciation: "bee-YEH" },
                de: { text: "Ticket", pronunciation: "TI-ket" },
                tr: { text: "Bilet", pronunciation: "bi-LET" }
            },
            meanings: {
                en: "Ticket",
                zh: "票",
                ko: "표",
                ja: "チケット",
                es: "Boleto",
                vi: "Vé",
                fr: "Billet",
                de: "Ticket",
                tr: "Bilet"
            }
        },
        {
            id: "map",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "地图", pronunciation: "dì tú" },
                ko: { text: "지도", pronunciation: "jido" },
                en: { text: "Map", pronunciation: "map" },
                ja: { text: "地図", pronunciation: "chizu" },
                es: { text: "Mapa", pronunciation: "MAH-pah" },
                vi: { text: "Bản đồ", pronunciation: "ban do" },
                fr: { text: "Carte", pronunciation: "kart" },
                de: { text: "Karte", pronunciation: "KAR-teh" },
                tr: { text: "Harita", pronunciation: "ha-ri-TA" }
            },
            meanings: {
                en: "Map",
                zh: "地图",
                ko: "지도",
                ja: "地図",
                es: "Mapa",
                vi: "Bản đồ",
                fr: "Carte",
                de: "Karte",
                tr: "Harita"
            }
        }
    ],
    
    // Business
    business: [
        {
            id: "meeting",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "会议", pronunciation: "huì yì" },
                ko: { text: "회의", pronunciation: "hoeui" },
                en: { text: "Meeting", pronunciation: "MEE-ting" },
                ja: { text: "会議", pronunciation: "kaigi" },
                es: { text: "Reunión", pronunciation: "reh-oo-nee-OHN" },
                vi: { text: "Cuộc họp", pronunciation: "cuoc hop" },
                fr: { text: "Réunion", pronunciation: "reh-oo-nee-OHN" },
                de: { text: "Besprechung", pronunciation: "beh-SHPREH-khung" },
                tr: { text: "Toplantı", pronunciation: "top-lan-TUH" }
            },
            meanings: {
                en: "Meeting",
                zh: "会议",
                ko: "회의",
                ja: "会議",
                es: "Reunión",
                vi: "Cuộc họp",
                fr: "Réunion",
                de: "Besprechung",
                tr: "Toplantı"
            }
        },
        {
            id: "office",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "办公室", pronunciation: "bàn gōng shì" },
                ko: { text: "사무실", pronunciation: "samusil" },
                en: { text: "Office", pronunciation: "AW-fis" },
                ja: { text: "オフィス", pronunciation: "ofisu" },
                es: { text: "Oficina", pronunciation: "o-fee-SEE-nah" },
                vi: { text: "Văn phòng", pronunciation: "van phong" },
                fr: { text: "Bureau", pronunciation: "boo-ROH" },
                de: { text: "Büro", pronunciation: "bue-ROH" },
                tr: { text: "Ofis", pronunciation: "o-FIS" }
            },
            meanings: {
                en: "Office",
                zh: "办公室",
                ko: "사무실",
                ja: "オフィス",
                es: "Oficina",
                vi: "Văn phòng",
                fr: "Bureau",
                de: "Büro",
                tr: "Ofis"
            }
        },
        {
            id: "computer",
            type: "word",
            difficulty: "beginner",
            translations: {
                zh: { text: "电脑", pronunciation: "diàn nǎo" },
                ko: { text: "컴퓨터", pronunciation: "keompyuteo" },
                en: { text: "Computer", pronunciation: "kuhm-PYOO-ter" },
                ja: { text: "コンピューター", pronunciation: "konpyuutaa" },
                es: { text: "Computadora", pronunciation: "kom-poo-ta-DO-rah" },
                vi: { text: "Máy tính", pronunciation: "may tinh" },
                fr: { text: "Ordinateur", pronunciation: "or-dee-na-TUR" },
                de: { text: "Computer", pronunciation: "kom-PYOO-ter" },
                tr: { text: "Bilgisayar", pronunciation: "bil-gi-sa-YAR" }
            },
            meanings: {
                en: "Computer",
                zh: "电脑",
                ko: "컴퓨터",
                ja: "コンピューター",
                es: "Computadora",
                vi: "Máy tính",
                fr: "Ordinateur",
                de: "Computer",
                tr: "Bilgisayar"
            }
        },
        {
            id: "email",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "电子邮件", pronunciation: "diàn zǐ yóu jiàn" },
                ko: { text: "이메일", pronunciation: "imeil" },
                en: { text: "Email", pronunciation: "EE-mayl" },
                ja: { text: "メール", pronunciation: "meeru" },
                es: { text: "Correo", pronunciation: "ko-REH-oh" },
                vi: { text: "Email", pronunciation: "ee-mayl" },
                fr: { text: "Courriel", pronunciation: "koo-ree-EL" },
                de: { text: "E-Mail", pronunciation: "EE-mayl" },
                tr: { text: "E-posta", pronunciation: "eh-pos-TA" }
            },
            meanings: {
                en: "Email",
                zh: "电子邮件",
                ko: "이메일",
                ja: "メール",
                es: "Correo",
                vi: "Email",
                fr: "Courriel",
                de: "E-Mail",
                tr: "E-posta"
            }
        },
        {
            id: "contract",
            type: "word",
            difficulty: "advanced",
            translations: {
                zh: { text: "合同", pronunciation: "hé tóng" },
                ko: { text: "계약", pronunciation: "gyeyak" },
                en: { text: "Contract", pronunciation: "KON-trakt" },
                ja: { text: "契約", pronunciation: "keiyaku" },
                es: { text: "Contrato", pronunciation: "kon-TRA-toh" },
                vi: { text: "Hợp đồng", pronunciation: "hop dong" },
                fr: { text: "Contrat", pronunciation: "kon-TRA" },
                de: { text: "Vertrag", pronunciation: "fer-TRAHK" },
                tr: { text: "Sözleşme", pronunciation: "soez-lesh-MEH" }
            },
            meanings: {
                en: "Contract",
                zh: "合同",
                ko: "계약",
                ja: "契約",
                es: "Contrato",
                vi: "Hợp đồng",
                fr: "Contrat",
                de: "Vertrag",
                tr: "Sözleşme"
            }
        },
        {
            id: "salary",
            type: "word",
            difficulty: "intermediate",
            translations: {
                zh: { text: "工资", pronunciation: "gōng zī" },
                ko: { text: "급여", pronunciation: "geupyeo" },
                en: { text: "Salary", pronunciation: "SAL-uh-ree" },
                ja: { text: "給料", pronunciation: "kyuuryou" },
                es: { text: "Salario", pronunciation: "sa-LAH-ree-oh" },
                vi: { text: "Lương", pronunciation: "luong" },
                fr: { text: "Salaire", pronunciation: "sa-LER" },
                de: { text: "Gehalt", pronunciation: "geh-HALT" },
                tr: { text: "Maaş", pronunciation: "ma-ASH" }
            },
            meanings: {
                en: "Salary",
                zh: "工资",
                ko: "급여",
                ja: "給料",
                es: "Salario",
                vi: "Lương",
                fr: "Salaire",
                de: "Gehalt",
                tr: "Maaş"
            }
        }
    ],
    
    // Advanced phrases and expressions
    advanced: [
        {
            id: "how_are_you",
            type: "phrase",
            difficulty: "advanced",
            translations: {
                zh: { text: "你好吗？", pronunciation: "nǐ hǎo ma?" },
                ko: { text: "어떻게 지내세요?", pronunciation: "eotteoke jinaeseyo?" },
                en: { text: "How are you?", pronunciation: "how are you" },
                ja: { text: "元気ですか？", pronunciation: "genki desu ka?" },
                es: { text: "¿Cómo estás?", pronunciation: "KOH-moh es-TAHS" },
                vi: { text: "Bạn có khỏe không?", pronunciation: "ban co khoe khong?" },
                fr: { text: "Comment allez-vous?", pronunciation: "koh-mahn tah-lay voo" },
                de: { text: "Wie geht es dir?", pronunciation: "vee gayt es deer" },
                tr: { text: "Nasılsın?", pronunciation: "nah-suhl-suhn" }
            },
            meanings: {
                en: "How are you?",
                zh: "你好吗？",
                ko: "어떻게 지내세요?",
                ja: "元気ですか？",
                es: "¿Cómo estás?",
                vi: "Bạn có khỏe không?",
                fr: "Comment allez-vous?",
                de: "Wie geht es dir?",
                tr: "Nasılsın?"
            }
        },
        {
            id: "excuse_me",
            type: "phrase",
            difficulty: "advanced",
            translations: {
                zh: { text: "不好意思", pronunciation: "bù hǎo yì si" },
                ko: { text: "실례합니다", pronunciation: "sillyehamnida" },
                en: { text: "Excuse me", pronunciation: "ik-SKYOOZ mee" },
                ja: { text: "すみません", pronunciation: "sumimasen" },
                es: { text: "Disculpe", pronunciation: "dees-KOOL-peh" },
                vi: { text: "Xin lỗi", pronunciation: "sin loy" },
                fr: { text: "Excusez-moi", pronunciation: "ex-koo-zay mwah" },
                de: { text: "Entschuldigung", pronunciation: "ent-SHOOL-di-goong" },
                tr: { text: "Özür dilerim", pronunciation: "UH-zur di-leh-rim" }
            },
            meanings: {
                en: "Excuse me",
                zh: "不好意思",
                ko: "실례합니다",
                ja: "すみません",
                es: "Disculpe",
                vi: "Xin lỗi",
                fr: "Excusez-moi",
                de: "Entschuldigung",
                tr: "Özür dilerim"
            }
        },
        {
            id: "where_is_bathroom",
            type: "phrase",
            difficulty: "advanced",
            culturalNote: "A polite and essential phrase for travelers. In many cultures, asking directions politely is important.",
            translations: {
                zh: { text: "洗手间在哪里？", pronunciation: "xǐ shǒu jiān zài nǎ lǐ?" },
                ko: { text: "화장실이 어디에 있어요?", pronunciation: "hwajangsil-i eodie isseoyo?" },
                en: { text: "Where is the bathroom?", pronunciation: "where is the BATH-room" },
                ja: { text: "トイレはどこですか？", pronunciation: "toire wa doko desu ka?" },
                es: { text: "¿Dónde está el baño?", pronunciation: "DON-deh es-TAH el BAH-nyoh" },
                vi: { text: "Phòng tắm ở đâu?", pronunciation: "phong tam o dau?" },
                fr: { text: "Où sont les toilettes?", pronunciation: "oo sohn lay twa-LET" },
                de: { text: "Wo ist die Toilette?", pronunciation: "voh ist dee toy-LET-teh" },
                tr: { text: "Tuvalet nerede?", pronunciation: "too-va-LET neh-reh-DEH" }
            },
            meanings: {
                en: "Where is the bathroom?",
                zh: "洗手间在哪里？",
                ko: "화장실이 어디에 있어요?",
                ja: "トイレはどこですか？",
                es: "¿Dónde está el baño?",
                vi: "Phòng tắm ở đâu?",
                fr: "Où sont les toilettes?",
                de: "Wo ist die Toilette?",
                tr: "Tuvalet nerede?"
            }
        },
        {
            id: "how_much_cost",
            type: "phrase",
            difficulty: "advanced",
            culturalNote: "Essential for shopping and negotiations. In some cultures, bargaining is expected.",
            translations: {
                zh: { text: "这个多少钱？", pronunciation: "zhè ge duō shǎo qián?" },
                ko: { text: "이거 얼마예요?", pronunciation: "igeo eolmayeyo?" },
                en: { text: "How much does this cost?", pronunciation: "how much does this cost" },
                ja: { text: "これはいくらですか？", pronunciation: "kore wa ikura desu ka?" },
                es: { text: "¿Cuánto cuesta esto?", pronunciation: "KWAN-toh KWES-tah ES-toh" },
                vi: { text: "Cái này giá bao nhiêu?", pronunciation: "cai nay gia bao nhieu?" },
                fr: { text: "Combien ça coûte?", pronunciation: "kom-bee-AHN sah koot" },
                de: { text: "Wie viel kostet das?", pronunciation: "vee feel KOS-tet das" },
                tr: { text: "Bu ne kadar?", pronunciation: "boo neh ka-DAR" }
            },
            meanings: {
                en: "How much does this cost?",
                zh: "这个多少钱？",
                ko: "이거 얼마예요?",
                ja: "これはいくらですか？",
                es: "¿Cuánto cuesta esto?",
                vi: "Cái này giá bao nhiêu?",
                fr: "Combien ça coûte?",
                de: "Wie viel kostet das?",
                tr: "Bu ne kadar?"
            }
        }
    ],
    
    // Grammar patterns (focused on sentence structure)
    grammar: [
        {
            id: "subject_verb_object",
            type: "grammar",
            difficulty: "intermediate",
            grammarPoint: "Basic sentence structure: Subject + Verb + Object",
            translations: {
                zh: { text: "我吃苹果", pronunciation: "wǒ chī píng guǒ" },
                ko: { text: "나는 사과를 먹어요", pronunciation: "naneun sagwareul meogeoyo" },
                en: { text: "I eat an apple", pronunciation: "I eat an AP-pul" },
                ja: { text: "私はりんごを食べます", pronunciation: "watashi wa ringo wo tabemasu" },
                es: { text: "Yo como una manzana", pronunciation: "yoh KO-moh OO-nah man-SAH-nah" },
                vi: { text: "Tôi ăn táo", pronunciation: "toi an tao" },
                fr: { text: "Je mange une pomme", pronunciation: "zhuh mahnzh oon pom" },
                de: { text: "Ich esse einen Apfel", pronunciation: "ikh ES-seh AY-nen AP-fel" },
                tr: { text: "Ben elma yerim", pronunciation: "ben el-MA yeh-RIM" }
            },
            meanings: {
                en: "I eat an apple",
                zh: "我吃苹果",
                ko: "나는 사과를 먹어요",
                ja: "私はりんごを食べます",
                es: "Yo como una manzana",
                vi: "Tôi ăn táo",
                fr: "Je mange une pomme",
                de: "Ich esse einen Apfel",
                tr: "Ben elma yerim"
            }
        },
        {
            id: "question_formation",
            type: "grammar",
            difficulty: "intermediate",
            grammarPoint: "Question formation with 'what'",
            translations: {
                zh: { text: "这是什么？", pronunciation: "zhè shì shén me?" },
                ko: { text: "이게 뭐예요?", pronunciation: "ige mwoyeyo?" },
                en: { text: "What is this?", pronunciation: "what is this" },
                ja: { text: "これは何ですか？", pronunciation: "kore wa nan desu ka?" },
                es: { text: "¿Qué es esto?", pronunciation: "keh es ES-toh" },
                vi: { text: "Cái này là gì?", pronunciation: "cai nay la gi?" },
                fr: { text: "Qu'est-ce que c'est?", pronunciation: "kes-kuh say" },
                de: { text: "Was ist das?", pronunciation: "vas ist das" },
                tr: { text: "Bu nedir?", pronunciation: "boo neh-DIR" }
            },
            meanings: {
                en: "What is this?",
                zh: "这是什么？",
                ko: "이게 뭐예요?",
                ja: "これは何ですか？",
                es: "¿Qué es esto?",
                vi: "Cái này là gì?",
                fr: "Qu'est-ce que c'est?",
                de: "Was ist das?",
                tr: "Bu nedir?"
            }
        }
    ]
};

// Combine all categories into one array
const getAllWords = () => {
    const allWords = [];
    Object.values(multilingualData).forEach(category => {
        allWords.push(...category);
    });
    return allWords;
};

// Assign difficulty levels based on categories and word complexity
const assignDifficultyLevels = (words) => {
    return words.map(word => {
        if (word.difficulty) {
            return word; // Already has difficulty assigned
        }
        
        // Category-based difficulty assignment
        const categoryDifficulties = {
            'greetings': 'beginner',
            'family': 'beginner',
            'colors': 'beginner',
            'numbers': 'beginner',
            'food': 'beginner',
            'weather': 'beginner',
            'travel': 'intermediate',
            'business': 'intermediate',
            'verbs': 'intermediate',
            'grammar': 'intermediate',
            'advanced': 'advanced'
        };
        
        // Find which category this word belongs to
        let category = 'intermediate'; // default
        for (const [catName, catWords] of Object.entries(multilingualData)) {
            if (catWords.includes(word)) {
                category = catName;
                break;
            }
        }
        
        // Assign difficulty based on category
        const difficulty = categoryDifficulties[category] || 'intermediate';
        
        // Advanced difficulty for longer/complex words
        const text = word.translations.en?.text || '';
        if (text.length > 12 || text.includes(' ')) {
            return { ...word, difficulty: 'advanced' };
        }
        
        return { ...word, difficulty };
    });
};

// Generate quiz question based on selected languages
const generateQuestion = (word, quizLanguage, answerLanguage, questionType = 'multiple-choice') => {
    const questionText = word.translations[quizLanguage].text;
    const pronunciation = word.translations[quizLanguage].pronunciation;
    const correctAnswer = word.translations[answerLanguage].text;
    
    // Get all words for generating wrong answers
    const allWords = getAllWords();
    const wrongAnswers = allWords
        .filter(w => w.id !== word.id && w.translations[answerLanguage])
        .map(w => w.translations[answerLanguage].text)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    // Create options array with correct answer
    const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(correctAnswer);
    
    return {
        type: word.type,
        questionType: questionType,
        questionText,
        pronunciation,
        options,
        correctAnswer: correctIndex,
        correctAnswerText: correctAnswer,
        word: word
    };
};

// Generate fill-in-the-blank question
const generateFillBlankQuestion = (word, quizLanguage, answerLanguage) => {
    const questionText = word.translations[quizLanguage].text;
    const pronunciation = word.translations[quizLanguage].pronunciation;
    const correctAnswer = word.translations[answerLanguage].text;
    
    return {
        type: word.type,
        questionType: 'fill-blank',
        questionText,
        pronunciation,
        correctAnswerText: correctAnswer.toLowerCase(),
        word: word
    };
};

// Generate audio-only question
const generateAudioOnlyQuestion = (word, quizLanguage, answerLanguage) => {
    const questionText = word.translations[quizLanguage].text;
    const pronunciation = word.translations[quizLanguage].pronunciation;
    const correctAnswer = word.translations[answerLanguage].text;
    
    // Get all words for generating wrong answers
    const allWords = getAllWords();
    const wrongAnswers = allWords
        .filter(w => w.id !== word.id && w.translations[answerLanguage])
        .map(w => w.translations[answerLanguage].text)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    // Create options array with correct answer
    const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(correctAnswer);
    
    return {
        type: word.type,
        questionType: 'audio-only',
        questionText,
        pronunciation,
        options,
        correctAnswer: correctIndex,
        correctAnswerText: correctAnswer,
        word: word
    };
};

// Generate reverse translation question
const generateReverseQuestion = (word, quizLanguage, answerLanguage) => {
    const questionText = word.translations[answerLanguage].text; // Show meaning
    const correctAnswer = word.translations[quizLanguage].text; // Answer is foreign word
    
    // Get all words for generating wrong answers
    const allWords = getAllWords();
    const wrongAnswers = allWords
        .filter(w => w.id !== word.id && w.translations[quizLanguage])
        .map(w => w.translations[quizLanguage].text)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    // Create options array with correct answer
    const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(correctAnswer);
    
    return {
        type: word.type,
        questionType: 'reverse',
        questionText,
        pronunciation: word.translations[quizLanguage].pronunciation,
        options,
        correctAnswer: correctIndex,
        correctAnswerText: correctAnswer,
        word: word
    };
};

// Legacy data structure for backward compatibility
const legacyQuizData = [
    {type: "word", chinese: "谢谢", pinyin: "xiè xiè", question: "What does '谢谢' mean?", options: ["Sorry", "Thank you", "Excuse me", "Please"], correct: 1},
    {type: "word", chinese: "对不起", pinyin: "duì bù qǐ", question: "What does '对不起' mean?", options: ["Thank you", "Hello", "Sorry", "Goodbye"], correct: 2},
    {type: "word", chinese: "请", pinyin: "qǐng", question: "What does '请' mean?", options: ["Thank you", "Please", "Sorry", "Excuse me"], correct: 1},
    {type: "word", chinese: "不客气", pinyin: "bù kè qì", question: "What does '不客气' mean?", options: ["Thank you", "You're welcome", "Sorry", "Excuse me"], correct: 1},
    {type: "word", chinese: "欢迎", pinyin: "huān yíng", question: "What does '欢迎' mean?", options: ["Goodbye", "Welcome", "Thank you", "Sorry"], correct: 1},
    {type: "word", chinese: "没关系", pinyin: "méi guān xì", question: "What does '没关系' mean?", options: ["Very important", "It doesn't matter", "Thank you", "Excuse me"], correct: 1},
    
    // Family & Relationships
    {type: "word", chinese: "家庭", pinyin: "jiā tíng", question: "What does '家庭' mean?", options: ["School", "Office", "Family", "Hospital"], correct: 2},
    {type: "word", chinese: "爸爸", pinyin: "bà ba", question: "What does '爸爸' mean?", options: ["Mother", "Father", "Brother", "Sister"], correct: 1},
    {type: "word", chinese: "妈妈", pinyin: "mā ma", question: "What does '妈妈' mean?", options: ["Mother", "Father", "Brother", "Sister"], correct: 0},
    {type: "word", chinese: "儿子", pinyin: "ér zi", question: "What does '儿子' mean?", options: ["Daughter", "Son", "Brother", "Sister"], correct: 1},
    {type: "word", chinese: "女儿", pinyin: "nǚ ér", question: "What does '女儿' mean?", options: ["Daughter", "Son", "Brother", "Sister"], correct: 0},
    {type: "word", chinese: "哥哥", pinyin: "gē ge", question: "What does '哥哥' mean?", options: ["Younger brother", "Older brother", "Sister", "Father"], correct: 1},
    {type: "word", chinese: "弟弟", pinyin: "dì di", question: "What does '弟弟' mean?", options: ["Older brother", "Younger brother", "Sister", "Father"], correct: 1},
    {type: "word", chinese: "姐姐", pinyin: "jiě jie", question: "What does '姐姐' mean?", options: ["Younger sister", "Older sister", "Brother", "Mother"], correct: 1},
    {type: "word", chinese: "妹妹", pinyin: "mèi mei", question: "What does '妹妹' mean?", options: ["Older sister", "Younger sister", "Brother", "Mother"], correct: 1},
    {type: "word", chinese: "爷爷", pinyin: "yé ye", question: "What does '爷爷' mean?", options: ["Grandmother", "Grandfather", "Uncle", "Aunt"], correct: 1},
    {type: "word", chinese: "奶奶", pinyin: "nǎi nai", question: "What does '奶奶' mean?", options: ["Grandmother", "Grandfather", "Uncle", "Aunt"], correct: 0},
    {type: "word", chinese: "朋友", pinyin: "péng yǒu", question: "What does '朋友' mean?", options: ["Enemy", "Stranger", "Friend", "Teacher"], correct: 2},
    {type: "word", chinese: "同学", pinyin: "tóng xué", question: "What does '同学' mean?", options: ["Teacher", "Classmate", "Friend", "Stranger"], correct: 1},
    
    // People & Professions
    {type: "word", chinese: "老师", pinyin: "lǎo shī", question: "What does '老师' mean?", options: ["Student", "Teacher", "Doctor", "Worker"], correct: 1},
    {type: "word", chinese: "学生", pinyin: "xué shēng", question: "What does '学生' mean?", options: ["Teacher", "Student", "Worker", "Doctor"], correct: 1},
    {type: "word", chinese: "医生", pinyin: "yī shēng", question: "What does '医生' mean?", options: ["Teacher", "Student", "Doctor", "Nurse"], correct: 2},
    {type: "word", chinese: "护士", pinyin: "hù shì", question: "What does '护士' mean?", options: ["Doctor", "Nurse", "Teacher", "Student"], correct: 1},
    {type: "word", chinese: "警察", pinyin: "jǐng chá", question: "What does '警察' mean?", options: ["Doctor", "Teacher", "Police", "Lawyer"], correct: 2},
    {type: "word", chinese: "律师", pinyin: "lǜ shī", question: "What does '律师' mean?", options: ["Doctor", "Teacher", "Police", "Lawyer"], correct: 3},
    {type: "word", chinese: "工程师", pinyin: "gōng chéng shī", question: "What does '工程师' mean?", options: ["Doctor", "Engineer", "Teacher", "Artist"], correct: 1},
    {type: "word", chinese: "司机", pinyin: "sī jī", question: "What does '司机' mean?", options: ["Mechanic", "Driver", "Pilot", "Captain"], correct: 1},
    {type: "word", chinese: "厨师", pinyin: "chú shī", question: "What does '厨师' mean?", options: ["Waiter", "Chef", "Baker", "Farmer"], correct: 1},
    {type: "word", chinese: "服务员", pinyin: "fú wù yuán", question: "What does '服务员' mean?", options: ["Manager", "Waiter", "Chef", "Customer"], correct: 1},
    
    // Places & Locations
    {type: "word", chinese: "学校", pinyin: "xué xiào", question: "What does '学校' mean?", options: ["Hospital", "School", "Office", "Home"], correct: 1},
    {type: "word", chinese: "医院", pinyin: "yī yuàn", question: "What does '医院' mean?", options: ["Hospital", "School", "Office", "Home"], correct: 0},
    {type: "word", chinese: "公司", pinyin: "gōng sī", question: "What does '公司' mean?", options: ["School", "Hospital", "Company", "Restaurant"], correct: 2},
    {type: "word", chinese: "餐厅", pinyin: "cān tīng", question: "What does '餐厅' mean?", options: ["Kitchen", "Restaurant", "Cafeteria", "Bar"], correct: 1},
    {type: "word", chinese: "银行", pinyin: "yín háng", question: "What does '银行' mean?", options: ["Store", "Bank", "Post office", "Library"], correct: 1},
    {type: "word", chinese: "图书馆", pinyin: "tú shū guǎn", question: "What does '图书馆' mean?", options: ["Bookstore", "Library", "Museum", "School"], correct: 1},
    {type: "word", chinese: "超市", pinyin: "chāo shì", question: "What does '超市' mean?", options: ["Restaurant", "Supermarket", "Mall", "Store"], correct: 1},
    {type: "word", chinese: "公园", pinyin: "gōng yuán", question: "What does '公园' mean?", options: ["Garden", "Park", "Zoo", "Forest"], correct: 1},
    {type: "word", chinese: "机场", pinyin: "jī chǎng", question: "What does '机场' mean?", options: ["Train station", "Airport", "Bus stop", "Parking lot"], correct: 1},
    {type: "word", chinese: "车站", pinyin: "chē zhàn", question: "What does '车站' mean?", options: ["Airport", "Station", "Parking lot", "Road"], correct: 1},
    {type: "word", chinese: "房子", pinyin: "fáng zi", question: "What does '房子' mean?", options: ["Car", "House", "Office", "School"], correct: 1},
    {type: "word", chinese: "宾馆", pinyin: "bīn guǎn", question: "What does '宾馆' mean?", options: ["Restaurant", "Hotel", "Apartment", "House"], correct: 1},
    
    // Daily Actions & Verbs
    {type: "word", chinese: "学习", pinyin: "xué xí", question: "What does '学习' mean?", options: ["Work", "Study/Learn", "Play", "Sleep"], correct: 1},
    {type: "word", chinese: "工作", pinyin: "gōng zuò", question: "What does '工作' mean?", options: ["Study", "Work", "Rest", "Play"], correct: 1},
    {type: "word", chinese: "吃饭", pinyin: "chī fàn", question: "What does '吃饭' mean?", options: ["Drink water", "Eat food", "Sleep", "Work"], correct: 1},
    {type: "word", chinese: "喝水", pinyin: "hē shuǐ", question: "What does '喝水' mean?", options: ["Eat food", "Drink water", "Take medicine", "Wash hands"], correct: 1},
    {type: "word", chinese: "睡觉", pinyin: "shuì jiào", question: "What does '睡觉' mean?", options: ["Wake up", "Sleep", "Eat", "Work"], correct: 1},
    {type: "word", chinese: "起床", pinyin: "qǐ chuáng", question: "What does '起床' mean?", options: ["Go to bed", "Get up", "Sit down", "Stand up"], correct: 1},
    {type: "word", chinese: "洗澡", pinyin: "xǐ zǎo", question: "What does '洗澡' mean?", options: ["Wash face", "Take a shower", "Brush teeth", "Comb hair"], correct: 1},
    {type: "word", chinese: "刷牙", pinyin: "shuā yá", question: "What does '刷牙' mean?", options: ["Wash face", "Take shower", "Brush teeth", "Comb hair"], correct: 2},
    {type: "word", chinese: "看书", pinyin: "kàn shū", question: "What does '看书' mean?", options: ["Write book", "Read book", "Buy book", "Sell book"], correct: 1},
    {type: "word", chinese: "看电视", pinyin: "kàn diàn shì", question: "What does '看电视' mean?", options: ["Buy TV", "Watch TV", "Fix TV", "Turn off TV"], correct: 1},
    {type: "word", chinese: "听音乐", pinyin: "tīng yīn yuè", question: "What does '听音乐' mean?", options: ["Play music", "Listen to music", "Write music", "Buy music"], correct: 1},
    {type: "word", chinese: "跑步", pinyin: "pǎo bù", question: "What does '跑步' mean?", options: ["Walk", "Run", "Jump", "Swim"], correct: 1},
    {type: "word", chinese: "游泳", pinyin: "yóu yǒng", question: "What does '游泳' mean?", options: ["Run", "Jump", "Swim", "Walk"], correct: 2},
    {type: "word", chinese: "打篮球", pinyin: "dǎ lán qiú", question: "What does '打篮球' mean?", options: ["Play soccer", "Play basketball", "Play tennis", "Play volleyball"], correct: 1},
    {type: "word", chinese: "踢足球", pinyin: "tī zú qiú", question: "What does '踢足球' mean?", options: ["Play soccer", "Play basketball", "Play tennis", "Play volleyball"], correct: 0},
    {type: "word", chinese: "唱歌", pinyin: "chàng gē", question: "What does '唱歌' mean?", options: ["Listen to music", "Sing", "Dance", "Play instrument"], correct: 1},
    {type: "word", chinese: "跳舞", pinyin: "tiào wǔ", question: "What does '跳舞' mean?", options: ["Sing", "Dance", "Play music", "Listen"], correct: 1},
    {type: "word", chinese: "买东西", pinyin: "mǎi dōng xī", question: "What does '买东西' mean?", options: ["Sell things", "Buy things", "Make things", "Break things"], correct: 1},
    {type: "word", chinese: "开车", pinyin: "kāi chē", question: "What does '开车' mean?", options: ["Buy car", "Drive car", "Fix car", "Sell car"], correct: 1},
    {type: "word", chinese: "走路", pinyin: "zǒu lù", question: "What does '走路' mean?", options: ["Drive", "Walk", "Run", "Fly"], correct: 1},
    {type: "word", chinese: "坐飞机", pinyin: "zuò fēi jī", question: "What does '坐飞机' mean?", options: ["Fly plane", "Take airplane", "Buy plane", "See plane"], correct: 1},
    
    // Objects & Things
    {type: "word", chinese: "书", pinyin: "shū", question: "What does '书' mean?", options: ["Pen", "Book", "Paper", "Table"], correct: 1},
    {type: "word", chinese: "笔", pinyin: "bǐ", question: "What does '笔' mean?", options: ["Pen", "Book", "Paper", "Table"], correct: 0},
    {type: "word", chinese: "纸", pinyin: "zhǐ", question: "What does '纸' mean?", options: ["Pen", "Book", "Paper", "Table"], correct: 2},
    {type: "word", chinese: "桌子", pinyin: "zhuō zi", question: "What does '桌子' mean?", options: ["Chair", "Table", "Bed", "Sofa"], correct: 1},
    {type: "word", chinese: "椅子", pinyin: "yǐ zi", question: "What does '椅子' mean?", options: ["Chair", "Table", "Bed", "Sofa"], correct: 0},
    {type: "word", chinese: "床", pinyin: "chuáng", question: "What does '床' mean?", options: ["Chair", "Table", "Bed", "Sofa"], correct: 2},
    {type: "word", chinese: "电脑", pinyin: "diàn nǎo", question: "What does '电脑' mean?", options: ["Television", "Computer", "Phone", "Radio"], correct: 1},
    {type: "word", chinese: "手机", pinyin: "shǒu jī", question: "What does '手机' mean?", options: ["Computer", "Television", "Mobile phone", "Radio"], correct: 2},
    {type: "word", chinese: "电视", pinyin: "diàn shì", question: "What does '电视' mean?", options: ["Computer", "Television", "Phone", "Radio"], correct: 1},
    {type: "word", chinese: "相机", pinyin: "xiàng jī", question: "What does '相机' mean?", options: ["Phone", "Camera", "Computer", "TV"], correct: 1},
    {type: "word", chinese: "钥匙", pinyin: "yào shi", question: "What does '钥匙' mean?", options: ["Door", "Key", "Lock", "Window"], correct: 1},
    {type: "word", chinese: "杯子", pinyin: "bēi zi", question: "What does '杯子' mean?", options: ["Plate", "Cup", "Bowl", "Spoon"], correct: 1},
    {type: "word", chinese: "盘子", pinyin: "pán zi", question: "What does '盘子' mean?", options: ["Plate", "Cup", "Bowl", "Spoon"], correct: 0},
    {type: "word", chinese: "筷子", pinyin: "kuài zi", question: "What does '筷子' mean?", options: ["Fork", "Chopsticks", "Spoon", "Knife"], correct: 1},
    {type: "word", chinese: "衣服", pinyin: "yī fu", question: "What does '衣服' mean?", options: ["Shoes", "Clothes", "Hat", "Bag"], correct: 1},
    {type: "word", chinese: "鞋子", pinyin: "xié zi", question: "What does '鞋子' mean?", options: ["Shoes", "Clothes", "Hat", "Bag"], correct: 0},
    {type: "word", chinese: "帽子", pinyin: "mào zi", question: "What does '帽子' mean?", options: ["Shoes", "Clothes", "Hat", "Bag"], correct: 2},
    {type: "word", chinese: "包", pinyin: "bāo", question: "What does '包' mean?", options: ["Shoes", "Clothes", "Hat", "Bag"], correct: 3},
    {type: "word", chinese: "钱包", pinyin: "qián bāo", question: "What does '钱包' mean?", options: ["Bag", "Wallet", "Purse", "Pocket"], correct: 1},
    {type: "word", chinese: "手表", pinyin: "shǒu biǎo", question: "What does '手表' mean?", options: ["Ring", "Watch", "Bracelet", "Necklace"], correct: 1},
    
    // Transportation
    {type: "word", chinese: "汽车", pinyin: "qì chē", question: "What does '汽车' mean?", options: ["Bicycle", "Car", "Bus", "Train"], correct: 1},
    {type: "word", chinese: "自行车", pinyin: "zì xíng chē", question: "What does '自行车' mean?", options: ["Bicycle", "Car", "Bus", "Train"], correct: 0},
    {type: "word", chinese: "公共汽车", pinyin: "gōng gòng qì chē", question: "What does '公共汽车' mean?", options: ["Car", "Bus", "Train", "Taxi"], correct: 1},
    {type: "word", chinese: "出租车", pinyin: "chū zū chē", question: "What does '出租车' mean?", options: ["Car", "Bus", "Train", "Taxi"], correct: 3},
    {type: "word", chinese: "火车", pinyin: "huǒ chē", question: "What does '火车' mean?", options: ["Car", "Train", "Bus", "Airplane"], correct: 1},
    {type: "word", chinese: "飞机", pinyin: "fēi jī", question: "What does '飞机' mean?", options: ["Car", "Train", "Airplane", "Ship"], correct: 2},
    {type: "word", chinese: "船", pinyin: "chuán", question: "What does '船' mean?", options: ["Car", "Train", "Airplane", "Ship"], correct: 3},
    {type: "word", chinese: "地铁", pinyin: "dì tiě", question: "What does '地铁' mean?", options: ["Bus", "Subway", "Train", "Taxi"], correct: 1},
    
    // Food & Drink
    {type: "word", chinese: "米饭", pinyin: "mǐ fàn", question: "What does '米饭' mean?", options: ["Noodles", "Rice", "Bread", "Soup"], correct: 1},
    {type: "word", chinese: "面条", pinyin: "miàn tiáo", question: "What does '面条' mean?", options: ["Noodles", "Rice", "Bread", "Soup"], correct: 0},
    {type: "word", chinese: "面包", pinyin: "miàn bāo", question: "What does '面包' mean?", options: ["Noodles", "Rice", "Bread", "Soup"], correct: 2},
    {type: "word", chinese: "汤", pinyin: "tāng", question: "What does '汤' mean?", options: ["Noodles", "Rice", "Bread", "Soup"], correct: 3},
    {type: "word", chinese: "肉", pinyin: "ròu", question: "What does '肉' mean?", options: ["Fish", "Meat", "Vegetable", "Fruit"], correct: 1},
    {type: "word", chinese: "鱼", pinyin: "yú", question: "What does '鱼' mean?", options: ["Fish", "Meat", "Vegetable", "Fruit"], correct: 0},
    {type: "word", chinese: "鸡蛋", pinyin: "jī dàn", question: "What does '鸡蛋' mean?", options: ["Chicken", "Egg", "Fish", "Meat"], correct: 1},
    {type: "word", chinese: "牛奶", pinyin: "niú nǎi", question: "What does '牛奶' mean?", options: ["Water", "Milk", "Juice", "Tea"], correct: 1},
    {type: "word", chinese: "茶", pinyin: "chá", question: "What does '茶' mean?", options: ["Water", "Milk", "Juice", "Tea"], correct: 3},
    {type: "word", chinese: "咖啡", pinyin: "kā fēi", question: "What does '咖啡' mean?", options: ["Tea", "Coffee", "Juice", "Water"], correct: 1},
    {type: "word", chinese: "果汁", pinyin: "guǒ zhī", question: "What does '果汁' mean?", options: ["Water", "Milk", "Juice", "Tea"], correct: 2},
    {type: "word", chinese: "苹果", pinyin: "píng guǒ", question: "What does '苹果' mean?", options: ["Apple", "Orange", "Banana", "Grape"], correct: 0},
    {type: "word", chinese: "橙子", pinyin: "chéng zi", question: "What does '橙子' mean?", options: ["Apple", "Orange", "Banana", "Grape"], correct: 1},
    {type: "word", chinese: "香蕉", pinyin: "xiāng jiāo", question: "What does '香蕉' mean?", options: ["Apple", "Orange", "Banana", "Grape"], correct: 2},
    {type: "word", chinese: "蔬菜", pinyin: "shū cài", question: "What does '蔬菜' mean?", options: ["Fruit", "Vegetable", "Meat", "Fish"], correct: 1},
    {type: "word", chinese: "水果", pinyin: "shuǐ guǒ", question: "What does '水果' mean?", options: ["Fruit", "Vegetable", "Meat", "Fish"], correct: 0},
    
    // Time & Dates
    {type: "word", chinese: "时间", pinyin: "shí jiān", question: "What does '时间' mean?", options: ["Money", "Time", "Space", "Food"], correct: 1},
    {type: "word", chinese: "今天", pinyin: "jīn tiān", question: "What does '今天' mean?", options: ["Yesterday", "Today", "Tomorrow", "Next week"], correct: 1},
    {type: "word", chinese: "明天", pinyin: "míng tiān", question: "What does '明天' mean?", options: ["Yesterday", "Today", "Tomorrow", "Next week"], correct: 2},
    {type: "word", chinese: "昨天", pinyin: "zuó tiān", question: "What does '昨天' mean?", options: ["Yesterday", "Today", "Tomorrow", "Last week"], correct: 0},
    {type: "word", chinese: "现在", pinyin: "xiàn zài", question: "What does '现在' mean?", options: ["Later", "Now", "Before", "After"], correct: 1},
    {type: "word", chinese: "早上", pinyin: "zǎo shàng", question: "What does '早上' mean?", options: ["Morning", "Afternoon", "Evening", "Night"], correct: 0},
    {type: "word", chinese: "下午", pinyin: "xià wǔ", question: "What does '下午' mean?", options: ["Morning", "Afternoon", "Evening", "Night"], correct: 1},
    {type: "word", chinese: "晚上", pinyin: "wǎn shàng", question: "What does '晚上' mean?", options: ["Morning", "Afternoon", "Evening", "Night"], correct: 2},
    {type: "word", chinese: "年", pinyin: "nián", question: "What does '年' mean?", options: ["Month", "Year", "Day", "Week"], correct: 1},
    {type: "word", chinese: "月", pinyin: "yuè", question: "What does '月' mean?", options: ["Month", "Year", "Day", "Week"], correct: 0},
    {type: "word", chinese: "星期", pinyin: "xīng qī", question: "What does '星期' mean?", options: ["Month", "Year", "Day", "Week"], correct: 3},
    {type: "word", chinese: "小时", pinyin: "xiǎo shí", question: "What does '小时' mean?", options: ["Minute", "Hour", "Second", "Day"], correct: 1},
    {type: "word", chinese: "分钟", pinyin: "fēn zhōng", question: "What does '分钟' mean?", options: ["Minute", "Hour", "Second", "Day"], correct: 0},
    
    // Weather & Nature
    {type: "word", chinese: "天气", pinyin: "tiān qì", question: "What does '天气' mean?", options: ["Time", "Weather", "Season", "Temperature"], correct: 1},
    {type: "word", chinese: "太阳", pinyin: "tài yáng", question: "What does '太阳' mean?", options: ["Moon", "Sun", "Star", "Cloud"], correct: 1},
    {type: "word", chinese: "月亮", pinyin: "yuè liàng", question: "What does '月亮' mean?", options: ["Moon", "Sun", "Star", "Cloud"], correct: 0},
    {type: "word", chinese: "星星", pinyin: "xīng xing", question: "What does '星星' mean?", options: ["Moon", "Sun", "Star", "Cloud"], correct: 2},
    {type: "word", chinese: "云", pinyin: "yún", question: "What does '云' mean?", options: ["Moon", "Sun", "Star", "Cloud"], correct: 3},
    {type: "word", chinese: "雨", pinyin: "yǔ", question: "What does '雨' mean?", options: ["Snow", "Rain", "Wind", "Sun"], correct: 1},
    {type: "word", chinese: "雪", pinyin: "xuě", question: "What does '雪' mean?", options: ["Snow", "Rain", "Wind", "Sun"], correct: 0},
    {type: "word", chinese: "风", pinyin: "fēng", question: "What does '风' mean?", options: ["Snow", "Rain", "Wind", "Sun"], correct: 2},
    {type: "word", chinese: "热", pinyin: "rè", question: "What does '热' mean?", options: ["Cold", "Hot", "Warm", "Cool"], correct: 1},
    {type: "word", chinese: "冷", pinyin: "lěng", question: "What does '冷' mean?", options: ["Cold", "Hot", "Warm", "Cool"], correct: 0},
    {type: "word", chinese: "花", pinyin: "huā", question: "What does '花' mean?", options: ["Tree", "Flower", "Grass", "Leaf"], correct: 1},
    {type: "word", chinese: "树", pinyin: "shù", question: "What does '树' mean?", options: ["Tree", "Flower", "Grass", "Leaf"], correct: 0},
    {type: "word", chinese: "草", pinyin: "cǎo", question: "What does '草' mean?", options: ["Tree", "Flower", "Grass", "Leaf"], correct: 2},
    {type: "word", chinese: "水", pinyin: "shuǐ", question: "What does '水' mean?", options: ["Fire", "Water", "Earth", "Air"], correct: 1},
    {type: "word", chinese: "火", pinyin: "huǒ", question: "What does '火' mean?", options: ["Fire", "Water", "Earth", "Air"], correct: 0},
    
    // Colors
    {type: "word", chinese: "颜色", pinyin: "yán sè", question: "What does '颜色' mean?", options: ["Shape", "Color", "Size", "Weight"], correct: 1},
    {type: "word", chinese: "红色", pinyin: "hóng sè", question: "What does '红色' mean?", options: ["Blue", "Red", "Green", "Yellow"], correct: 1},
    {type: "word", chinese: "蓝色", pinyin: "lán sè", question: "What does '蓝色' mean?", options: ["Blue", "Red", "Green", "Yellow"], correct: 0},
    {type: "word", chinese: "绿色", pinyin: "lǜ sè", question: "What does '绿色' mean?", options: ["Blue", "Red", "Green", "Yellow"], correct: 2},
    {type: "word", chinese: "黄色", pinyin: "huáng sè", question: "What does '黄色' mean?", options: ["Blue", "Red", "Green", "Yellow"], correct: 3},
    {type: "word", chinese: "白色", pinyin: "bái sè", question: "What does '白色' mean?", options: ["Black", "White", "Gray", "Brown"], correct: 1},
    {type: "word", chinese: "黑色", pinyin: "hēi sè", question: "What does '黑色' mean?", options: ["Black", "White", "Gray", "Brown"], correct: 0},
    {type: "word", chinese: "灰色", pinyin: "huī sè", question: "What does '灰色' mean?", options: ["Black", "White", "Gray", "Brown"], correct: 2},
    {type: "word", chinese: "棕色", pinyin: "zōng sè", question: "What does '棕色' mean?", options: ["Black", "White", "Gray", "Brown"], correct: 3},
    {type: "word", chinese: "粉色", pinyin: "fěn sè", question: "What does '粉色' mean?", options: ["Purple", "Pink", "Orange", "Silver"], correct: 1},
    {type: "word", chinese: "紫色", pinyin: "zǐ sè", question: "What does '紫色' mean?", options: ["Purple", "Pink", "Orange", "Silver"], correct: 0},
    {type: "word", chinese: "橙色", pinyin: "chéng sè", question: "What does '橙色' mean?", options: ["Purple", "Pink", "Orange", "Silver"], correct: 2},
    
    // Numbers
    {type: "word", chinese: "一", pinyin: "yī", question: "What does '一' mean?", options: ["One", "Two", "Three", "Four"], correct: 0},
    {type: "word", chinese: "二", pinyin: "èr", question: "What does '二' mean?", options: ["One", "Two", "Three", "Four"], correct: 1},
    {type: "word", chinese: "三", pinyin: "sān", question: "What does '三' mean?", options: ["One", "Two", "Three", "Four"], correct: 2},
    {type: "word", chinese: "四", pinyin: "sì", question: "What does '四' mean?", options: ["One", "Two", "Three", "Four"], correct: 3},
    {type: "word", chinese: "五", pinyin: "wǔ", question: "What does '五' mean?", options: ["Four", "Five", "Six", "Seven"], correct: 1},
    {type: "word", chinese: "六", pinyin: "liù", question: "What does '六' mean?", options: ["Four", "Five", "Six", "Seven"], correct: 2},
    {type: "word", chinese: "七", pinyin: "qī", question: "What does '七' mean?", options: ["Four", "Five", "Six", "Seven"], correct: 3},
    {type: "word", chinese: "八", pinyin: "bā", question: "What does '八' mean?", options: ["Seven", "Eight", "Nine", "Ten"], correct: 1},
    {type: "word", chinese: "九", pinyin: "jiǔ", question: "What does '九' mean?", options: ["Seven", "Eight", "Nine", "Ten"], correct: 2},
    {type: "word", chinese: "十", pinyin: "shí", question: "What does '十' mean?", options: ["Seven", "Eight", "Nine", "Ten"], correct: 3},
    {type: "word", chinese: "百", pinyin: "bǎi", question: "What does '百' mean?", options: ["Ten", "Hundred", "Thousand", "Ten thousand"], correct: 1},
    {type: "word", chinese: "千", pinyin: "qiān", question: "What does '千' mean?", options: ["Ten", "Hundred", "Thousand", "Ten thousand"], correct: 2},
    {type: "word", chinese: "万", pinyin: "wàn", question: "What does '万' mean?", options: ["Ten", "Hundred", "Thousand", "Ten thousand"], correct: 3},
    
    // Adjectives - Size & Quantity
    {type: "word", chinese: "大", pinyin: "dà", question: "What does '大' mean?", options: ["Small", "Big", "Medium", "Tiny"], correct: 1},
    {type: "word", chinese: "小", pinyin: "xiǎo", question: "What does '小' mean?", options: ["Big", "Small", "Medium", "Huge"], correct: 1},
    {type: "word", chinese: "多", pinyin: "duō", question: "What does '多' mean?", options: ["Few", "Many", "Some", "None"], correct: 1},
    {type: "word", chinese: "少", pinyin: "shǎo", question: "What does '少' mean?", options: ["Many", "Few", "Some", "All"], correct: 1},
    {type: "word", chinese: "长", pinyin: "cháng", question: "What does '长' mean?", options: ["Short", "Long", "Medium", "Wide"], correct: 1},
    {type: "word", chinese: "短", pinyin: "duǎn", question: "What does '短' mean?", options: ["Long", "Short", "Medium", "Tall"], correct: 1},
    {type: "word", chinese: "高", pinyin: "gāo", question: "What does '高' mean?", options: ["Low", "High", "Medium", "Short"], correct: 1},
    {type: "word", chinese: "低", pinyin: "dī", question: "What does '低' mean?", options: ["High", "Low", "Medium", "Tall"], correct: 1},
    {type: "word", chinese: "宽", pinyin: "kuān", question: "What does '宽' mean?", options: ["Narrow", "Wide", "Thick", "Thin"], correct: 1},
    {type: "word", chinese: "窄", pinyin: "zhǎi", question: "What does '窄' mean?", options: ["Wide", "Narrow", "Thick", "Thin"], correct: 1},
    {type: "word", chinese: "厚", pinyin: "hòu", question: "What does '厚' mean?", options: ["Thin", "Thick", "Wide", "Narrow"], correct: 1},
    {type: "word", chinese: "薄", pinyin: "báo", question: "What does '薄' mean?", options: ["Thick", "Thin", "Wide", "Narrow"], correct: 1},
    {type: "word", chinese: "重", pinyin: "zhòng", question: "What does '重' mean?", options: ["Light", "Heavy", "Soft", "Hard"], correct: 1},
    {type: "word", chinese: "轻", pinyin: "qīng", question: "What does '轻' mean?", options: ["Heavy", "Light", "Soft", "Hard"], correct: 1},
    
    // Adjectives - Quality & Condition
    {type: "word", chinese: "好", pinyin: "hǎo", question: "What does '好' mean?", options: ["Bad", "Good", "Okay", "Terrible"], correct: 1},
    {type: "word", chinese: "坏", pinyin: "huài", question: "What does '坏' mean?", options: ["Good", "Bad", "Okay", "Great"], correct: 1},
    {type: "word", chinese: "新", pinyin: "xīn", question: "What does '新' mean?", options: ["Old", "New", "Used", "Broken"], correct: 1},
    {type: "word", chinese: "旧", pinyin: "jiù", question: "What does '旧' mean?", options: ["New", "Old", "Fresh", "Modern"], correct: 1},
    {type: "word", chinese: "快", pinyin: "kuài", question: "What does '快' mean?", options: ["Slow", "Fast", "Medium", "Stop"], correct: 1},
    {type: "word", chinese: "慢", pinyin: "màn", question: "What does '慢' mean?", options: ["Fast", "Slow", "Medium", "Quick"], correct: 1},
    {type: "word", chinese: "容易", pinyin: "róng yì", question: "What does '容易' mean?", options: ["Difficult", "Easy", "Hard", "Impossible"], correct: 1},
    {type: "word", chinese: "难", pinyin: "nán", question: "What does '难' mean?", options: ["Easy", "Difficult", "Simple", "Possible"], correct: 1},
    {type: "word", chinese: "漂亮", pinyin: "piào liàng", question: "What does '漂亮' mean?", options: ["Ugly", "Beautiful", "Plain", "Old"], correct: 1},
    {type: "word", chinese: "丑", pinyin: "chǒu", question: "What does '丑' mean?", options: ["Beautiful", "Ugly", "Pretty", "Handsome"], correct: 1},
    {type: "word", chinese: "干净", pinyin: "gān jìng", question: "What does '干净' mean?", options: ["Dirty", "Clean", "Messy", "Broken"], correct: 1},
    {type: "word", chinese: "脏", pinyin: "zāng", question: "What does '脏' mean?", options: ["Clean", "Dirty", "Fresh", "New"], correct: 1},
    {type: "word", chinese: "安全", pinyin: "ān quán", question: "What does '安全' mean?", options: ["Dangerous", "Safe", "Risky", "Scary"], correct: 1},
    {type: "word", chinese: "危险", pinyin: "wēi xiǎn", question: "What does '危险' mean?", options: ["Safe", "Dangerous", "Secure", "Protected"], correct: 1},
    {type: "word", chinese: "有趣", pinyin: "yǒu qù", question: "What does '有趣' mean?", options: ["Boring", "Interesting", "Dull", "Tired"], correct: 1},
    {type: "word", chinese: "无聊", pinyin: "wú liáo", question: "What does '无聊' mean?", options: ["Interesting", "Boring", "Fun", "Exciting"], correct: 1},
    {type: "word", chinese: "聪明", pinyin: "cōng míng", question: "What does '聪明' mean?", options: ["Stupid", "Smart", "Silly", "Confused"], correct: 1},
    {type: "word", chinese: "笨", pinyin: "bèn", question: "What does '笨' mean?", options: ["Smart", "Stupid", "Clever", "Wise"], correct: 1},
    {type: "word", chinese: "有名", pinyin: "yǒu míng", question: "What does '有名' mean?", options: ["Unknown", "Famous", "Secret", "Hidden"], correct: 1},
    {type: "word", chinese: "便宜", pinyin: "pián yí", question: "What does '便宜' mean?", options: ["Expensive", "Cheap", "Free", "Costly"], correct: 1},
    {type: "word", chinese: "贵", pinyin: "guì", question: "What does '贵' mean?", options: ["Cheap", "Expensive", "Free", "Worthless"], correct: 1},
    {type: "word", chinese: "免费", pinyin: "miǎn fèi", question: "What does '免费' mean?", options: ["Expensive", "Cheap", "Free", "Costly"], correct: 2},
    
    // Emotions & Feelings
    {type: "word", chinese: "高兴", pinyin: "gāo xìng", question: "What does '高兴' mean?", options: ["Sad", "Happy", "Angry", "Worried"], correct: 1},
    {type: "word", chinese: "伤心", pinyin: "shāng xīn", question: "What does '伤心' mean?", options: ["Happy", "Sad", "Angry", "Excited"], correct: 1},
    {type: "word", chinese: "生气", pinyin: "shēng qì", question: "What does '生气' mean?", options: ["Happy", "Sad", "Angry", "Calm"], correct: 2},
    {type: "word", chinese: "害怕", pinyin: "hài pà", question: "What does '害怕' mean?", options: ["Brave", "Afraid", "Excited", "Calm"], correct: 1},
    {type: "word", chinese: "紧张", pinyin: "jǐn zhāng", question: "What does '紧张' mean?", options: ["Relaxed", "Nervous", "Excited", "Calm"], correct: 1},
    {type: "word", chinese: "累", pinyin: "lèi", question: "What does '累' mean?", options: ["Energetic", "Tired", "Excited", "Strong"], correct: 1},
    {type: "word", chinese: "饿", pinyin: "è", question: "What does '饿' mean?", options: ["Full", "Hungry", "Thirsty", "Satisfied"], correct: 1},
    {type: "word", chinese: "渴", pinyin: "kě", question: "What does '渴' mean?", options: ["Hungry", "Thirsty", "Full", "Satisfied"], correct: 1},
    {type: "word", chinese: "困", pinyin: "kùn", question: "What does '困' mean?", options: ["Awake", "Sleepy", "Energetic", "Alert"], correct: 1},
    {type: "word", chinese: "舒服", pinyin: "shū fu", question: "What does '舒服' mean?", options: ["Uncomfortable", "Comfortable", "Painful", "Sick"], correct: 1},
    {type: "word", chinese: "不舒服", pinyin: "bù shū fu", question: "What does '不舒服' mean?", options: ["Comfortable", "Uncomfortable", "Happy", "Relaxed"], correct: 1},
    {type: "word", chinese: "健康", pinyin: "jiàn kāng", question: "What does '健康' mean?", options: ["Sick", "Healthy", "Weak", "Tired"], correct: 1},
    {type: "word", chinese: "生病", pinyin: "shēng bìng", question: "What does '生病' mean?", options: ["Healthy", "Sick", "Strong", "Energetic"], correct: 1},
    
    // Body Parts
    {type: "word", chinese: "头", pinyin: "tóu", question: "What does '头' mean?", options: ["Hand", "Head", "Foot", "Eye"], correct: 1},
    {type: "word", chinese: "眼睛", pinyin: "yǎn jīng", question: "What does '眼睛' mean?", options: ["Nose", "Eye", "Mouth", "Ear"], correct: 1},
    {type: "word", chinese: "鼻子", pinyin: "bí zi", question: "What does '鼻子' mean?", options: ["Nose", "Eye", "Mouth", "Ear"], correct: 0},
    {type: "word", chinese: "嘴巴", pinyin: "zuǐ ba", question: "What does '嘴巴' mean?", options: ["Nose", "Eye", "Mouth", "Ear"], correct: 2},
    {type: "word", chinese: "耳朵", pinyin: "ěr duo", question: "What does '耳朵' mean?", options: ["Nose", "Eye", "Mouth", "Ear"], correct: 3},
    {type: "word", chinese: "手", pinyin: "shǒu", question: "What does '手' mean?", options: ["Hand", "Foot", "Arm", "Leg"], correct: 0},
    {type: "word", chinese: "脚", pinyin: "jiǎo", question: "What does '脚' mean?", options: ["Hand", "Foot", "Arm", "Leg"], correct: 1},
    {type: "word", chinese: "胳膊", pinyin: "gē bo", question: "What does '胳膊' mean?", options: ["Hand", "Foot", "Arm", "Leg"], correct: 2},
    {type: "word", chinese: "腿", pinyin: "tuǐ", question: "What does '腿' mean?", options: ["Hand", "Foot", "Arm", "Leg"], correct: 3},
    {type: "word", chinese: "肚子", pinyin: "dù zi", question: "What does '肚子' mean?", options: ["Chest", "Stomach", "Back", "Shoulder"], correct: 1},
    {type: "word", chinese: "心", pinyin: "xīn", question: "What does '心' mean?", options: ["Brain", "Heart", "Lung", "Kidney"], correct: 1},
    
    // Directions & Locations
    {type: "word", chinese: "东", pinyin: "dōng", question: "What does '东' mean?", options: ["North", "South", "East", "West"], correct: 2},
    {type: "word", chinese: "西", pinyin: "xī", question: "What does '西' mean?", options: ["North", "South", "East", "West"], correct: 3},
    {type: "word", chinese: "南", pinyin: "nán", question: "What does '南' mean?", options: ["North", "South", "East", "West"], correct: 1},
    {type: "word", chinese: "北", pinyin: "běi", question: "What does '北' mean?", options: ["North", "South", "East", "West"], correct: 0},
    {type: "word", chinese: "上", pinyin: "shàng", question: "What does '上' mean?", options: ["Down", "Up", "Left", "Right"], correct: 1},
    {type: "word", chinese: "下", pinyin: "xià", question: "What does '下' mean?", options: ["Up", "Down", "Left", "Right"], correct: 1},
    {type: "word", chinese: "左", pinyin: "zuǒ", question: "What does '左' mean?", options: ["Right", "Left", "Up", "Down"], correct: 1},
    {type: "word", chinese: "右", pinyin: "yòu", question: "What does '右' mean?", options: ["Left", "Right", "Up", "Down"], correct: 1},
    {type: "word", chinese: "前", pinyin: "qián", question: "What does '前' mean?", options: ["Back", "Front", "Side", "Middle"], correct: 1},
    {type: "word", chinese: "后", pinyin: "hòu", question: "What does '后' mean?", options: ["Front", "Back", "Side", "Middle"], correct: 1},
    {type: "word", chinese: "中间", pinyin: "zhōng jiān", question: "What does '中间' mean?", options: ["Side", "Edge", "Middle", "Corner"], correct: 2},
    {type: "word", chinese: "旁边", pinyin: "páng biān", question: "What does '旁边' mean?", options: ["Far", "Near", "Beside", "Above"], correct: 2},
    {type: "word", chinese: "里面", pinyin: "lǐ miàn", question: "What does '里面' mean?", options: ["Outside", "Inside", "Beside", "Above"], correct: 1},
    {type: "word", chinese: "外面", pinyin: "wài miàn", question: "What does '外面' mean?", options: ["Inside", "Outside", "Beside", "Above"], correct: 1},
    {type: "word", chinese: "附近", pinyin: "fù jìn", question: "What does '附近' mean?", options: ["Far", "Nearby", "Inside", "Outside"], correct: 1},
    {type: "word", chinese: "远", pinyin: "yuǎn", question: "What does '远' mean?", options: ["Near", "Far", "Close", "Inside"], correct: 1},
    {type: "word", chinese: "近", pinyin: "jìn", question: "What does '近' mean?", options: ["Far", "Near", "Inside", "Outside"], correct: 1},
    
    // Common Verbs
    {type: "word", chinese: "来", pinyin: "lái", question: "What does '来' mean?", options: ["Go", "Come", "Stay", "Leave"], correct: 1},
    {type: "word", chinese: "去", pinyin: "qù", question: "What does '去' mean?", options: ["Come", "Go", "Stay", "Return"], correct: 1},
    {type: "word", chinese: "回", pinyin: "huí", question: "What does '回' mean?", options: ["Go", "Come", "Return", "Stay"], correct: 2},
    {type: "word", chinese: "到", pinyin: "dào", question: "What does '到' mean?", options: ["From", "To/Arrive", "With", "For"], correct: 1},
    {type: "word", chinese: "进", pinyin: "jìn", question: "What does '进' mean?", options: ["Exit", "Enter", "Stay", "Wait"], correct: 1},
    {type: "word", chinese: "出", pinyin: "chū", question: "What does '出' mean?", options: ["Enter", "Exit", "Stay", "Wait"], correct: 1},
    {type: "word", chinese: "坐", pinyin: "zuò", question: "What does '坐' mean?", options: ["Stand", "Sit", "Lie", "Run"], correct: 1},
    {type: "word", chinese: "站", pinyin: "zhàn", question: "What does '站' mean?", options: ["Sit", "Stand", "Lie", "Run"], correct: 1},
    {type: "word", chinese: "躺", pinyin: "tǎng", question: "What does '躺' mean?", options: ["Sit", "Stand", "Lie down", "Run"], correct: 2},
    {type: "word", chinese: "给", pinyin: "gěi", question: "What does '给' mean?", options: ["Take", "Give", "Keep", "Throw"], correct: 1},
    {type: "word", chinese: "拿", pinyin: "ná", question: "What does '拿' mean?", options: ["Give", "Take", "Put", "Throw"], correct: 1},
    {type: "word", chinese: "放", pinyin: "fàng", question: "What does '放' mean?", options: ["Take", "Give", "Put", "Throw"], correct: 2},
    {type: "word", chinese: "找", pinyin: "zhǎo", question: "What does '找' mean?", options: ["Hide", "Find", "Lose", "Keep"], correct: 1},
    {type: "word", chinese: "等", pinyin: "děng", question: "What does '等' mean?", options: ["Leave", "Wait", "Hurry", "Stop"], correct: 1},
    {type: "word", chinese: "帮助", pinyin: "bāng zhù", question: "What does '帮助' mean?", options: ["Hurt", "Help", "Ignore", "Disturb"], correct: 1},
    {type: "word", chinese: "告诉", pinyin: "gào sù", question: "What does '告诉' mean?", options: ["Hide", "Tell", "Ask", "Forget"], correct: 1},
    {type: "word", chinese: "问", pinyin: "wèn", question: "What does '问' mean?", options: ["Answer", "Ask", "Tell", "Forget"], correct: 1},
    {type: "word", chinese: "回答", pinyin: "huí dá", question: "What does '回答' mean?", options: ["Ask", "Answer", "Tell", "Forget"], correct: 1},
    {type: "word", chinese: "知道", pinyin: "zhī dào", question: "What does '知道' mean?", options: ["Forget", "Know", "Guess", "Wonder"], correct: 1},
    {type: "word", chinese: "认识", pinyin: "rèn shi", question: "What does '认识' mean?", options: ["Forget", "Know/Recognize", "Ignore", "Avoid"], correct: 1},
    {type: "word", chinese: "记住", pinyin: "jì zhù", question: "What does '记住' mean?", options: ["Forget", "Remember", "Ignore", "Confuse"], correct: 1},
    {type: "word", chinese: "忘记", pinyin: "wàng jì", question: "What does '忘记' mean?", options: ["Remember", "Forget", "Know", "Learn"], correct: 1},
    {type: "word", chinese: "想", pinyin: "xiǎng", question: "What does '想' mean?", options: ["Forget", "Think", "Know", "Ignore"], correct: 1},
    {type: "word", chinese: "希望", pinyin: "xī wàng", question: "What does '希望' mean?", options: ["Fear", "Hope", "Worry", "Doubt"], correct: 1},
    {type: "word", chinese: "喜欢", pinyin: "xǐ huān", question: "What does '喜欢' mean?", options: ["Hate", "Like", "Fear", "Ignore"], correct: 1},
    {type: "word", chinese: "爱", pinyin: "ài", question: "What does '爱' mean?", options: ["Hate", "Love", "Fear", "Ignore"], correct: 1},
    {type: "word", chinese: "讨厌", pinyin: "tǎo yàn", question: "What does '讨厌' mean?", options: ["Like", "Hate", "Love", "Enjoy"], correct: 1},
    {type: "word", chinese: "需要", pinyin: "xū yào", question: "What does '需要' mean?", options: ["Want", "Need", "Have", "Give"], correct: 1},
    {type: "word", chinese: "要", pinyin: "yào", question: "What does '要' mean?", options: ["Give", "Want", "Have", "Need"], correct: 1},
    {type: "word", chinese: "有", pinyin: "yǒu", question: "What does '有' mean?", options: ["Want", "Need", "Have", "Give"], correct: 2},
    {type: "word", chinese: "没有", pinyin: "méi yǒu", question: "What does '没有' mean?", options: ["Have", "Don't have", "Want", "Need"], correct: 1},
    {type: "word", chinese: "是", pinyin: "shì", question: "What does '是' mean?", options: ["Not", "Is/Am/Are", "Have", "Want"], correct: 1},
    {type: "word", chinese: "不是", pinyin: "bù shì", question: "What does '不是' mean?", options: ["Is", "Is not", "Have", "Want"], correct: 1},
    {type: "word", chinese: "可以", pinyin: "kě yǐ", question: "What does '可以' mean?", options: ["Cannot", "Can", "Must", "Should"], correct: 1},
    {type: "word", chinese: "不可以", pinyin: "bù kě yǐ", question: "What does '不可以' mean?", options: ["Can", "Cannot", "Must", "Should"], correct: 1},
    {type: "word", chinese: "应该", pinyin: "yīng gāi", question: "What does '应该' mean?", options: ["Cannot", "Can", "Must", "Should"], correct: 3},
    {type: "word", chinese: "必须", pinyin: "bì xū", question: "What does '必须' mean?", options: ["Can", "Should", "Must", "May"], correct: 2},
    {type: "word", chinese: "会", pinyin: "huì", question: "What does '会' mean?", options: ["Cannot", "Can/Will", "Must", "Should"], correct: 1},
    {type: "word", chinese: "能", pinyin: "néng", question: "What does '能' mean?", options: ["Cannot", "Can/Able", "Must", "Should"], correct: 1},
    
    // Money & Shopping
    {type: "word", chinese: "钱", pinyin: "qián", question: "What does '钱' mean?", options: ["Time", "Money", "Food", "Water"], correct: 1},
    {type: "word", chinese: "买", pinyin: "mǎi", question: "What does '买' mean?", options: ["Sell", "Buy", "Give", "Take"], correct: 1},
    {type: "word", chinese: "卖", pinyin: "mài", question: "What does '卖' mean?", options: ["Buy", "Sell", "Give", "Take"], correct: 1},
    {type: "word", chinese: "付钱", pinyin: "fù qián", question: "What does '付钱' mean?", options: ["Earn money", "Pay money", "Save money", "Find money"], correct: 1},
    {type: "word", chinese: "价格", pinyin: "jià gé", question: "What does '价格' mean?", options: ["Quality", "Price", "Size", "Color"], correct: 1},
    {type: "word", chinese: "商店", pinyin: "shāng diàn", question: "What does '商店' mean?", options: ["Restaurant", "Shop", "Bank", "Hospital"], correct: 1},
    {type: "word", chinese: "市场", pinyin: "shì chǎng", question: "What does '市场' mean?", options: ["Store", "Market", "Mall", "Bank"], correct: 1},
    {type: "word", chinese: "顾客", pinyin: "gù kè", question: "What does '顾客' mean?", options: ["Seller", "Customer", "Manager", "Worker"], correct: 1},
    {type: "word", chinese: "老板", pinyin: "lǎo bǎn", question: "What does '老板' mean?", options: ["Worker", "Boss", "Customer", "Manager"], correct: 1},
    {type: "word", chinese: "员工", pinyin: "yuán gōng", question: "What does '员工' mean?", options: ["Boss", "Employee", "Customer", "Manager"], correct: 1},
    
    // Technology & Modern Life
    {type: "word", chinese: "网络", pinyin: "wǎng luò", question: "What does '网络' mean?", options: ["Phone", "Internet", "Computer", "TV"], correct: 1},
    {type: "word", chinese: "网站", pinyin: "wǎng zhàn", question: "What does '网站' mean?", options: ["Internet", "Website", "Email", "Phone"], correct: 1},
    {type: "word", chinese: "邮件", pinyin: "yóu jiàn", question: "What does '邮件' mean?", options: ["Letter", "Email", "Package", "Phone"], correct: 1},
    {type: "word", chinese: "密码", pinyin: "mì mǎ", question: "What does '密码' mean?", options: ["Username", "Password", "Email", "Phone"], correct: 1},
    {type: "word", chinese: "软件", pinyin: "ruǎn jiàn", question: "What does '软件' mean?", options: ["Hardware", "Software", "Computer", "Phone"], correct: 1},
    {type: "word", chinese: "程序", pinyin: "chéng xù", question: "What does '程序' mean?", options: ["Hardware", "Program", "Computer", "Phone"], correct: 1},
    {type: "word", chinese: "下载", pinyin: "xià zài", question: "What does '下载' mean?", options: ["Upload", "Download", "Delete", "Save"], correct: 1},
    {type: "word", chinese: "上传", pinyin: "shàng chuán", question: "What does '上传' mean?", options: ["Download", "Upload", "Delete", "Save"], correct: 1},
    {type: "word", chinese: "保存", pinyin: "bǎo cún", question: "What does '保存' mean?", options: ["Delete", "Save", "Upload", "Download"], correct: 1},
    {type: "word", chinese: "删除", pinyin: "shān chú", question: "What does '删除' mean?", options: ["Save", "Delete", "Upload", "Download"], correct: 1},
    
    // Common Idioms
    {type: "idiom", chinese: "一石二鸟", pinyin: "yī shí èr niǎo", question: "What does '一石二鸟' mean?", options: ["Kill two birds with one stone", "Stone and bird friends", "Two stones, one bird", "Birds love stones"], correct: 0},
    {type: "idiom", chinese: "画蛇添足", pinyin: "huà shé tiān zú", question: "What does '画蛇添足' mean?", options: ["Draw perfect snake", "Add feet to snake (unnecessary)", "Snake with feet", "Artist draws animals"], correct: 1},
    {type: "idiom", chinese: "井底之蛙", pinyin: "jǐng dǐ zhī wā", question: "What does '井底之蛙' mean?", options: ["Frog in pond", "Deep well water", "Frog in well (narrow-minded)", "Green frog"], correct: 2},
    {type: "idiom", chinese: "亡羊补牢", pinyin: "wáng yáng bǔ láo", question: "What does '亡羊补牢' mean?", options: ["Sheep in field", "Mend pen after sheep lost", "Counting sheep", "Sheep and wolf"], correct: 1},
    {type: "idiom", chinese: "守株待兔", pinyin: "shǒu zhū dài tù", question: "What does '守株待兔' mean?", options: ["Rabbit tree friends", "Wait by stump for rabbits", "Rabbit climbs tree", "Tree grows rabbits"], correct: 1},
    {type: "idiom", chinese: "三心二意", pinyin: "sān xīn èr yì", question: "What does '三心二意' mean?", options: ["Very focused", "Half-hearted", "Three hearts", "Two minds"], correct: 1},
    {type: "idiom", chinese: "一心一意", pinyin: "yī xīn yī yì", question: "What does '一心一意' mean?", options: ["Half-hearted", "Wholeheartedly", "One heart", "One mind"], correct: 1},
    {type: "idiom", chinese: "马马虎虎", pinyin: "mǎ mǎ hǔ hǔ", question: "What does '马马虎虎' mean?", options: ["Very careful", "So-so", "Horse and tiger", "Very good"], correct: 1},
    {type: "idiom", chinese: "九牛一毛", pinyin: "jiǔ niú yī máo", question: "What does '九牛一毛' mean?", options: ["Many cows", "Drop in ocean", "Nine cows", "One hair"], correct: 1},
    {type: "idiom", chinese: "对牛弹琴", pinyin: "duì niú tán qín", question: "What does '对牛弹琴' mean?", options: ["Cow loves music", "Cast pearls before swine", "Musical cow", "Play to cow"], correct: 1},
    {type: "idiom", chinese: "鸡飞狗跳", pinyin: "jī fēi gǒu tiào", question: "What does '鸡飞狗跳' mean?", options: ["Animals playing", "Chaos everywhere", "Flying chicken", "Jumping dog"], correct: 1},
    {type: "idiom", chinese: "虎头蛇尾", pinyin: "hǔ tóu shé wěi", question: "What does '虎头蛇尾' mean?", options: ["Strong animal", "Start strong, finish weak", "Tiger head", "Snake tail"], correct: 1},
    {type: "idiom", chinese: "狐假虎威", pinyin: "hú jiǎ hǔ wēi", question: "What does '狐假虎威' mean?", options: ["Fox and tiger", "Bully with borrowed power", "Fake tiger", "Fox power"], correct: 1},
    {type: "idiom", chinese: "画龙点睛", pinyin: "huà lóng diǎn jīng", question: "What does '画龙点睛' mean?", options: ["Draw dragon", "Add finishing touch", "Dragon eyes", "Point painting"], correct: 1},
    {type: "idiom", chinese: "拔苗助长", pinyin: "bá miáo zhù zhǎng", question: "What does '拔苗助长' mean?", options: ["Help plants grow", "Haste makes waste", "Pull seedlings", "Plant growth"], correct: 1},
    {type: "idiom", chinese: "熟能生巧", pinyin: "shú néng shēng qiǎo", question: "What does '熟能生巧' mean?", options: ["Cook well", "Practice makes perfect", "Skilled cooking", "Generate skill"], correct: 1},
    {type: "idiom", chinese: "水滴石穿", pinyin: "shuǐ dī shí chuān", question: "What does '水滴石穿' mean?", options: ["Water and stone", "Persistence pays off", "Dripping water", "Stone hole"], correct: 1},
    {type: "idiom", chinese: "入乡随俗", pinyin: "rù xiāng suí sú", question: "What does '入乡随俗' mean?", options: ["Visit village", "When in Rome, do as Romans", "Follow customs", "Rural life"], correct: 1},
    {type: "idiom", chinese: "杯水车薪", pinyin: "bēi shuǐ chē xīn", question: "What does '杯水车薪' mean?", options: ["Cup of water", "Drop in bucket", "Water cart", "Firewood"], correct: 1},
    {type: "idiom", chinese: "班门弄斧", pinyin: "bān mén nòng fǔ", question: "What does '班门弄斧' mean?", options: ["Master carpenter", "Show off before expert", "Gate and axe", "Skill display"], correct: 1},
    {type: "idiom", chinese: "半途而废", pinyin: "bàn tú ér fèi", question: "What does '半途而废' mean?", options: ["Half journey", "Give up halfway", "Waste effort", "Abandon path"], correct: 1},
    {type: "idiom", chinese: "本末倒置", pinyin: "běn mò dào zhì", question: "What does '本末倒置' mean?", options: ["Tree roots", "Put cart before horse", "Upside down", "Wrong order"], correct: 1},
    {type: "idiom", chinese: "雪上加霜", pinyin: "xuě shàng jiā shuāng", question: "What does '雪上加霜' mean?", options: ["Snow and frost", "Add insult to injury", "Winter weather", "Cold season"], correct: 1},
    {type: "idiom", chinese: "火上浇油", pinyin: "huǒ shàng jiāo yóu", question: "What does '火上浇油' mean?", options: ["Cooking oil", "Add fuel to fire", "Oil fire", "Pour oil"], correct: 1},
    {type: "idiom", chinese: "落井下石", pinyin: "luò jǐng xià shí", question: "What does '落井下石' mean?", options: ["Fall in well", "Hit when down", "Stone well", "Drop stones"], correct: 1},
    {type: "idiom", chinese: "趁火打劫", pinyin: "chèn huǒ dǎ jié", question: "What does '趁火打劫' mean?", options: ["Fight fire", "Rob during chaos", "Fire robbery", "Take advantage"], correct: 1},
    {type: "idiom", chinese: "纸上谈兵", pinyin: "zhǐ shàng tán bīng", question: "What does '纸上谈兵' mean?", options: ["Paper soldiers", "Armchair strategist", "War plans", "Military theory"], correct: 1},
    {type: "idiom", chinese: "夜郎自大", pinyin: "yè láng zì dà", question: "What does '夜郎自大' mean?", options: ["Night country", "Arrogant ignorance", "Self importance", "Big ego"], correct: 1},
    {type: "idiom", chinese: "鱼目混珠", pinyin: "yú mù hùn zhū", question: "What does '鱼目混珠' mean?", options: ["Fish and pearls", "Pass off fake as real", "Mixed jewels", "Fish eyes"], correct: 1},
    {type: "idiom", chinese: "掩耳盗铃", pinyin: "yǎn ěr dào líng", question: "What does '掩耳盗铃' mean?", options: ["Cover ears", "Self-deception", "Steal bell", "Block sound"], correct: 1},
    {type: "idiom", chinese: "指鹿为马", pinyin: "zhǐ lù wéi mǎ", question: "What does '指鹿为马' mean?", options: ["Point at deer", "Call black white", "Deer and horse", "Confuse animals"], correct: 1},
    {type: "idiom", chinese: "南辕北辙", pinyin: "nán yuán běi zhé", question: "What does '南辕北辙' mean?", options: ["South and north", "Opposite directions", "Wrong way", "Contradictory"], correct: 1},
    {type: "idiom", chinese: "刻舟求剑", pinyin: "kè zhōu qiú jiàn", question: "What does '刻舟求剑' mean?", options: ["Carve boat", "Inflexible thinking", "Find sword", "Boat mark"], correct: 1},
    {type: "idiom", chinese: "盲人摸象", pinyin: "máng rén mō xiàng", question: "What does '盲人摸象' mean?", options: ["Blind person", "Partial understanding", "Touch elephant", "Limited view"], correct: 1},
    {type: "idiom", chinese: "坐井观天", pinyin: "zuò jǐng guān tiān", question: "What does '坐井观天' mean?", options: ["Sit in well", "Limited perspective", "Watch sky", "Narrow view"], correct: 1},
    {type: "idiom", chinese: "叶公好龙", pinyin: "yè gōng hào lóng", question: "What does '叶公好龙' mean?", options: ["Love dragons", "Professed love", "Dragon fan", "Fake interest"], correct: 1},
    {type: "idiom", chinese: "东施效颦", pinyin: "dōng shī xiào pín", question: "What does '东施效颦' mean?", options: ["Copy beauty", "Clumsy imitation", "Ugly woman", "Imitate badly"], correct: 1},
    {type: "idiom", chinese: "邯郸学步", pinyin: "hán dān xué bù", question: "What does '邯郸学步' mean?", options: ["Learn walking", "Lose original skill", "Copy others", "Walking style"], correct: 1},
    {type: "idiom", chinese: "买椟还珠", pinyin: "mǎi dú huán zhū", question: "What does '买椟还珠' mean?", options: ["Buy box", "Miss the point", "Return pearl", "Wrong choice"], correct: 1},
    {type: "idiom", chinese: "舍本逐末", pinyin: "shě běn zhú mò", question: "What does '舍本逐末' mean?", options: ["Give up roots", "Ignore fundamentals", "Chase details", "Wrong priority"], correct: 1},
    {type: "idiom", chinese: "得不偿失", pinyin: "dé bù cháng shī", question: "What does '得不偿失' mean?", options: ["Get and lose", "Not worth it", "Gain loss", "Poor trade"], correct: 1},
    {type: "idiom", chinese: "因小失大", pinyin: "yīn xiǎo shī dà", question: "What does '因小失大' mean?", options: ["Small and big", "Penny wise pound foolish", "Lose big", "Small mistake"], correct: 1},
    {type: "idiom", chinese: "舍近求远", pinyin: "shě jìn qiú yuǎn", question: "What does '舍近求远' mean?", options: ["Near and far", "Ignore obvious solution", "Seek distance", "Overlook close"], correct: 1},
    {type: "idiom", chinese: "缘木求鱼", pinyin: "yuán mù qiú yú", question: "What does '缘木求鱼' mean?", options: ["Climb tree", "Impossible task", "Find fish", "Wrong method"], correct: 1},
    {type: "idiom", chinese: "竹篮打水", pinyin: "zhú lán dǎ shuǐ", question: "What does '竹篮打水' mean?", options: ["Bamboo basket", "Futile effort", "Fetch water", "Wasted work"], correct: 1},
    {type: "idiom", chinese: "空中楼阁", pinyin: "kōng zhōng lóu gé", question: "What does '空中楼阁' mean?", options: ["Air castle", "Pipe dream", "Sky building", "Impossible plan"], correct: 1},
    {type: "idiom", chinese: "海市蜃楼", pinyin: "hǎi shì shèn lóu", question: "What does '海市蜃楼' mean?", options: ["Sea city", "Mirage", "Ocean building", "Illusion"], correct: 1},
    {type: "idiom", chinese: "画饼充饥", pinyin: "huà bǐng chōng jī", question: "What does '画饼充饥' mean?", options: ["Draw cake", "Empty promise", "Painted food", "False hope"], correct: 1},
    {type: "idiom", chinese: "望梅止渴", pinyin: "wàng méi zhǐ kě", question: "What does '望梅止渴' mean?", options: ["Look at plums", "False comfort", "Thirst quench", "Imaginary relief"], correct: 1},
    {type: "idiom", chinese: "掩耳盗铃", pinyin: "yǎn ěr dào líng", question: "What does '掩耳盗铃' mean?", options: ["Cover ears", "Self-deception", "Steal bell", "False security"], correct: 1},
    {type: "idiom", chinese: "自欺欺人", pinyin: "zì qī qī rén", question: "What does '自欺欺人' mean?", options: ["Self cheat", "Deceive oneself and others", "Mutual deception", "False belief"], correct: 1},
    {type: "idiom", chinese: "自食其果", pinyin: "zì shí qí guǒ", question: "What does '自食其果' mean?", options: ["Eat fruit", "Reap what you sow", "Own consequence", "Self punishment"], correct: 1},
    {type: "idiom", chinese: "自作自受", pinyin: "zì zuò zì shòu", question: "What does '自作自受' mean?", options: ["Self made", "You asked for it", "Own doing", "Self inflicted"], correct: 1}
];

// UI translations for different languages
const uiTranslations = {
    en: {
        title: "🌍 Multi-Language Quiz",
        subtitle: "Test your knowledge across 9 different languages",
        welcome: "Welcome to Multi-Language Quiz!",
        welcomeSubtitle: "Test your language knowledge with customizable quiz settings",
        quizLanguageLabel: "Quiz Language (Questions will be in):",
        answerLanguageLabel: "Answer Language (Options will be in):",
        startQuiz: "Start Quiz",
        selectAnswer: "Select an Answer",
        confirmAnswer: "Confirm Answer",
        nextQuestion: "Next Question",
        showResults: "Show Results",
        quizComplete: "Quiz Complete!",
        tryAgain: "Try Again",
        reviewHistory: "📚 Review History",
        quizHistory: "📚 Quiz History",
        totalQuizzes: "Total Quizzes:",
        averageScore: "Average Score:",
        wordsLearned: "Words Learned:",
        showAll: "Show All",
        wrongAnswersOnly: "Wrong Answers Only",
        clearHistory: "Clear History",
        backToQuiz: "Back to Quiz",
        home: "🏠 Home",
        autoPlayOn: "🔊 Auto-Play: ON",
        autoPlayOff: "🔊 Auto-Play: OFF",
        clearHistoryConfirm: "Are you sure you want to clear all quiz history?",
        speechNotSupported: "Text-to-speech not supported in this browser"
    },
    zh: {
        title: "🌍 多语言测验",
        subtitle: "测试您在9种不同语言中的知识",
        welcome: "欢迎来到多语言测验！",
        welcomeSubtitle: "通过可自定义的测验设置测试您的语言知识",
        quizLanguageLabel: "测验语言（问题将使用）：",
        answerLanguageLabel: "答案语言（选项将使用）：",
        startQuiz: "开始测验",
        selectAnswer: "选择答案",
        confirmAnswer: "确认答案",
        nextQuestion: "下一题",
        showResults: "显示结果",
        quizComplete: "测验完成！",
        tryAgain: "再试一次",
        reviewHistory: "📚 查看历史",
        quizHistory: "📚 测验历史",
        totalQuizzes: "总测验数：",
        averageScore: "平均分：",
        wordsLearned: "已学单词：",
        showAll: "显示全部",
        wrongAnswersOnly: "仅显示错误答案",
        clearHistory: "清除历史",
        backToQuiz: "返回测验",
        home: "🏠 主页",
        autoPlayOn: "🔊 自动播放：开启",
        autoPlayOff: "🔊 自动播放：关闭",
        clearHistoryConfirm: "您确定要清除所有测验历史吗？",
        speechNotSupported: "此浏览器不支持文本转语音"
    },
    ko: {
        title: "🌍 다국어 퀴즈",
        subtitle: "9개 다른 언어로 지식을 테스트하세요",
        welcome: "다국어 퀴즈에 오신 것을 환영합니다!",
        welcomeSubtitle: "맞춤형 퀴즈 설정으로 언어 지식을 테스트하세요",
        quizLanguageLabel: "퀴즈 언어 (질문이 나올 언어):",
        answerLanguageLabel: "답변 언어 (선택지가 나올 언어):",
        startQuiz: "퀴즈 시작",
        selectAnswer: "답 선택",
        confirmAnswer: "답 확인",
        nextQuestion: "다음 질문",
        showResults: "결과 보기",
        quizComplete: "퀴즈 완료!",
        tryAgain: "다시 시도",
        reviewHistory: "📚 이력 검토",
        quizHistory: "📚 퀴즈 이력",
        totalQuizzes: "총 퀴즈 수:",
        averageScore: "평균 점수:",
        wordsLearned: "학습한 단어:",
        showAll: "모두 보기",
        wrongAnswersOnly: "틀린 답만 보기",
        clearHistory: "이력 지우기",
        backToQuiz: "퀴즈로 돌아가기",
        home: "🏠 홈",
        autoPlayOn: "🔊 자동 재생: 켜짐",
        autoPlayOff: "🔊 자동 재생: 꺼짐",
        clearHistoryConfirm: "모든 퀴즈 이력을 지우시겠습니까?",
        speechNotSupported: "이 브라우저에서는 텍스트 음성 변환이 지원되지 않습니다"
    },
    ja: {
        title: "🌍 多言語クイズ",
        subtitle: "9つの異なる言語で知識をテストしましょう",
        welcome: "多言語クイズへようこそ！",
        welcomeSubtitle: "カスタマイズ可能なクイズ設定で言語知識をテストしましょう",
        quizLanguageLabel: "クイズ言語（質問が出される言語）：",
        answerLanguageLabel: "回答言語（選択肢が出される言語）：",
        startQuiz: "クイズ開始",
        selectAnswer: "答えを選択",
        confirmAnswer: "答えを確認",
        nextQuestion: "次の質問",
        showResults: "結果を表示",
        quizComplete: "クイズ完了！",
        tryAgain: "もう一度挑戦",
        reviewHistory: "📚 履歴をレビュー",
        quizHistory: "📚 クイズ履歴",
        totalQuizzes: "総クイズ数：",
        averageScore: "平均スコア：",
        wordsLearned: "学習した単語：",
        showAll: "すべて表示",
        wrongAnswersOnly: "間違った答えのみ",
        clearHistory: "履歴をクリア",
        backToQuiz: "クイズに戻る",
        home: "🏠 ホーム",
        autoPlayOn: "🔊 自動再生：オン",
        autoPlayOff: "🔊 自動再生：オフ",
        clearHistoryConfirm: "すべてのクイズ履歴を削除してもよろしいですか？",
        speechNotSupported: "このブラウザでは音声合成がサポートされていません"
    },
    es: {
        title: "🌍 Quiz Multiidioma",
        subtitle: "Pon a prueba tu conocimiento en 9 idiomas diferentes",
        welcome: "¡Bienvenido al Quiz Multiidioma!",
        welcomeSubtitle: "Pon a prueba tu conocimiento de idiomas con configuraciones de quiz personalizables",
        quizLanguageLabel: "Idioma del Quiz (Las preguntas estarán en):",
        answerLanguageLabel: "Idioma de las Respuestas (Las opciones estarán en):",
        startQuiz: "Comenzar Quiz",
        selectAnswer: "Seleccionar Respuesta",
        confirmAnswer: "Confirmar Respuesta",
        nextQuestion: "Siguiente Pregunta",
        showResults: "Mostrar Resultados",
        quizComplete: "¡Quiz Completado!",
        tryAgain: "Intentar de Nuevo",
        reviewHistory: "📚 Revisar Historial",
        quizHistory: "📚 Historial del Quiz",
        totalQuizzes: "Total de Quizzes:",
        averageScore: "Puntuación Promedio:",
        wordsLearned: "Palabras Aprendidas:",
        showAll: "Mostrar Todo",
        wrongAnswersOnly: "Solo Respuestas Incorrectas",
        clearHistory: "Limpiar Historial",
        backToQuiz: "Volver al Quiz",
        home: "🏠 Inicio",
        autoPlayOn: "🔊 Reproducción Automática: ENCENDIDA",
        autoPlayOff: "🔊 Reproducción Automática: APAGADA",
        clearHistoryConfirm: "¿Estás seguro de que quieres limpiar todo el historial del quiz?",
        speechNotSupported: "La síntesis de voz no está soportada en este navegador"
    },
    vi: {
        title: "🌍 Bài Kiểm Tra Đa Ngôn Ngữ",
        subtitle: "Kiểm tra kiến thức của bạn qua 9 ngôn ngữ khác nhau",
        welcome: "Chào mừng đến với Bài Kiểm Tra Đa Ngôn Ngữ!",
        welcomeSubtitle: "Kiểm tra kiến thức ngôn ngữ của bạn với cài đặt bài kiểm tra có thể tùy chỉnh",
        quizLanguageLabel: "Ngôn ngữ bài kiểm tra (Câu hỏi sẽ ở):",
        answerLanguageLabel: "Ngôn ngữ trả lời (Các tùy chọn sẽ ở):",
        startQuiz: "Bắt đầu bài kiểm tra",
        selectAnswer: "Chọn câu trả lời",
        confirmAnswer: "Xác nhận câu trả lời",
        nextQuestion: "Câu hỏi tiếp theo",
        showResults: "Hiển thị kết quả",
        quizComplete: "Hoàn thành bài kiểm tra!",
        tryAgain: "Thử lại",
        reviewHistory: "📚 Xem lại lịch sử",
        quizHistory: "📚 Lịch sử bài kiểm tra",
        totalQuizzes: "Tổng số bài kiểm tra:",
        averageScore: "Điểm trung bình:",
        wordsLearned: "Từ đã học:",
        showAll: "Hiển thị tất cả",
        wrongAnswersOnly: "Chỉ câu trả lời sai",
        clearHistory: "Xóa lịch sử",
        backToQuiz: "Trở lại bài kiểm tra",
        home: "🏠 Trang chủ",
        autoPlayOn: "🔊 Tự động phát: BẬT",
        autoPlayOff: "🔊 Tự động phát: TẮT",
        clearHistoryConfirm: "Bạn có chắc chắn muốn xóa tất cả lịch sử bài kiểm tra không?",
        speechNotSupported: "Trình duyệt này không hỗ trợ tổng hợp giọng nói"
    },
    fr: {
        title: "🌍 Quiz Multilingue",
        subtitle: "Testez vos connaissances dans 9 langues différentes",
        welcome: "Bienvenue au Quiz Multilingue!",
        welcomeSubtitle: "Testez vos connaissances linguistiques avec des paramètres de quiz personnalisables",
        quizLanguageLabel: "Langue du Quiz (Les questions seront en):",
        answerLanguageLabel: "Langue des Réponses (Les options seront en):",
        startQuiz: "Commencer le Quiz",
        selectAnswer: "Sélectionner une Réponse",
        confirmAnswer: "Confirmer la Réponse",
        nextQuestion: "Question Suivante",
        showResults: "Afficher les Résultats",
        quizComplete: "Quiz Terminé!",
        tryAgain: "Réessayer",
        reviewHistory: "📚 Revoir l'Historique",
        quizHistory: "📚 Historique du Quiz",
        totalQuizzes: "Total des Quiz:",
        averageScore: "Score Moyen:",
        wordsLearned: "Mots Appris:",
        showAll: "Tout Afficher",
        wrongAnswersOnly: "Mauvaises Réponses Seulement",
        clearHistory: "Effacer l'Historique",
        backToQuiz: "Retour au Quiz",
        home: "🏠 Accueil",
        autoPlayOn: "🔊 Lecture Automatique: ACTIVÉE",
        autoPlayOff: "🔊 Lecture Automatique: DÉSACTIVÉE",
        clearHistoryConfirm: "Êtes-vous sûr de vouloir effacer tout l'historique du quiz?",
        speechNotSupported: "La synthèse vocale n'est pas prise en charge dans ce navigateur"
    },
    de: {
        title: "🌍 Mehrsprachiges Quiz",
        subtitle: "Testen Sie Ihr Wissen in 9 verschiedenen Sprachen",
        welcome: "Willkommen zum Mehrsprachigen Quiz!",
        welcomeSubtitle: "Testen Sie Ihr Sprachwissen mit anpassbaren Quiz-Einstellungen",
        quizLanguageLabel: "Quiz-Sprache (Fragen werden in sein):",
        answerLanguageLabel: "Antwort-Sprache (Optionen werden in sein):",
        startQuiz: "Quiz Starten",
        selectAnswer: "Antwort Auswählen",
        confirmAnswer: "Antwort Bestätigen",
        nextQuestion: "Nächste Frage",
        showResults: "Ergebnisse Anzeigen",
        quizComplete: "Quiz Abgeschlossen!",
        tryAgain: "Erneut Versuchen",
        reviewHistory: "📚 Verlauf Überprüfen",
        quizHistory: "📚 Quiz-Verlauf",
        totalQuizzes: "Gesamte Quizzes:",
        averageScore: "Durchschnittliche Punktzahl:",
        wordsLearned: "Gelernte Wörter:",
        showAll: "Alles Anzeigen",
        wrongAnswersOnly: "Nur Falsche Antworten",
        clearHistory: "Verlauf Löschen",
        backToQuiz: "Zurück zum Quiz",
        home: "🏠 Startseite",
        autoPlayOn: "🔊 Automatische Wiedergabe: EIN",
        autoPlayOff: "🔊 Automatische Wiedergabe: AUS",
        clearHistoryConfirm: "Sind Sie sicher, dass Sie den gesamten Quiz-Verlauf löschen möchten?",
        speechNotSupported: "Sprachsynthese wird in diesem Browser nicht unterstützt"
    },
    tr: {
        title: "🌍 Çok Dilli Sınav",
        subtitle: "9 farklı dilde bilginizi test edin",
        welcome: "Çok Dilli Sınav'a Hoş Geldiniz!",
        welcomeSubtitle: "Özelleştirilebilir sınav ayarlarıyla dil bilginizi test edin",
        quizLanguageLabel: "Sınav Dili (Sorular şu dilde olacak):",
        answerLanguageLabel: "Cevap Dili (Seçenekler şu dilde olacak):",
        startQuiz: "Sınavı Başlat",
        selectAnswer: "Cevap Seç",
        confirmAnswer: "Cevabı Onayla",
        nextQuestion: "Sonraki Soru",
        showResults: "Sonuçları Göster",
        quizComplete: "Sınav Tamamlandı!",
        tryAgain: "Tekrar Dene",
        reviewHistory: "📚 Geçmişi İncele",
        quizHistory: "📚 Sınav Geçmişi",
        totalQuizzes: "Toplam Sınav:",
        averageScore: "Ortalama Puan:",
        wordsLearned: "Öğrenilen Kelimeler:",
        showAll: "Tümünü Göster",
        wrongAnswersOnly: "Sadece Yanlış Cevaplar",
        clearHistory: "Geçmişi Temizle",
        backToQuiz: "Sınava Dön",
        home: "🏠 Ana Sayfa",
        autoPlayOn: "🔊 Otomatik Çalma: AÇIK",
        autoPlayOff: "🔊 Otomatik Çalma: KAPALI",
        clearHistoryConfirm: "Tüm sınav geçmişini temizlemek istediğinizden emin misiniz?",
        speechNotSupported: "Bu tarayıcıda konuşma sentezi desteklenmiyor"
    }
};

class ChineseQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
        this.quizQuestions = [];
        this.selectedAnswer = null;
        this.currentQuizHistory = [];
        this.autoPlay = false;
        this.quizLanguage = 'zh';
        this.answerLanguage = 'en';
        this.currentUILanguage = 'en';
        this.difficultyLevel = 'beginner';
        this.questionCount = 10;
        this.timeLimit = 0;
        this.currentTimer = null;
        this.timeRemaining = 0;
        this.questionType = 'mixed';
        this.init();
    }
    
    init() {
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.historyScreen = document.getElementById('history-screen');
        
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.actionBtn = document.getElementById('action-btn');
        this.historyBtn = document.getElementById('history-btn');
        this.autoPlayBtn = document.getElementById('autoplay-btn');
        this.homeBtn = document.getElementById('home-btn');
        this.clearHistoryBtn = document.getElementById('clear-history-btn');
        this.backToQuizBtn = document.getElementById('back-to-quiz-btn');
        this.quizLanguageSelect = document.getElementById('quiz-language');
        this.answerLanguageSelect = document.getElementById('answer-language');
        this.difficultySelect = document.getElementById('difficulty-level');
        this.questionCountSelect = document.getElementById('question-count');
        this.timeLimitSelect = document.getElementById('time-limit');
        this.questionTypeSelect = document.getElementById('question-type');
        this.timerDisplay = document.getElementById('timer-display');
        this.timerText = document.getElementById('timer-text');
        this.fillBlankContainer = document.querySelector('.fill-blank-container');
        this.fillBlankInput = document.getElementById('fill-blank-input');
        this.optionsContainer = document.querySelector('.options-container');
        this.showAllBtn = document.getElementById('show-all-btn');
        this.showWrongOnlyBtn = document.getElementById('show-wrong-only-btn');
        this.currentHistoryFilter = 'all';
        
        // Add language switcher references
        this.quizLanguageSwitch = document.getElementById('quiz-language-switch');
        this.answerLanguageSwitch = document.getElementById('answer-language-switch');
        
        this.currentQuestionEl = document.getElementById('current-question');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.progressEl = document.getElementById('progress');
        
        this.questionContainer = document.getElementById('question-container');
        this.feedbackEl = document.getElementById('feedback');
        this.finalScoreEl = document.getElementById('final-score');
        this.scoreMessageEl = document.getElementById('score-message');
        
        this.bindEvents();
        this.totalQuestionsEl.textContent = 10; // Always show 10 questions
        this.loadHistory();
        this.updateHistoryStats();
        this.loadAutoPlaySetting();
        this.updateUILanguage();
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.actionBtn.addEventListener('click', () => this.handleActionButton());
        this.historyBtn.addEventListener('click', () => this.showHistory());
        this.autoPlayBtn.addEventListener('click', () => this.toggleAutoPlay());
        this.homeBtn.addEventListener('click', () => this.goHome());
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        this.backToQuizBtn.addEventListener('click', () => this.backToQuiz());
        
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectOption(e));
        });
        
        document.getElementById('listen-btn').addEventListener('click', () => this.playAudio());
        
        this.quizLanguageSelect.addEventListener('change', (e) => {
            this.quizLanguage = e.target.value;
        });
        
        this.answerLanguageSelect.addEventListener('change', (e) => {
            this.answerLanguage = e.target.value;
            this.currentUILanguage = e.target.value;
            this.updateUILanguage();
        });
        
        this.difficultySelect.addEventListener('change', (e) => {
            this.difficultyLevel = e.target.value;
        });
        
        this.questionCountSelect.addEventListener('change', (e) => {
            this.questionCount = parseInt(e.target.value);
        });
        
        this.timeLimitSelect.addEventListener('change', (e) => {
            this.timeLimit = parseInt(e.target.value);
        });
        
        this.questionTypeSelect.addEventListener('change', (e) => {
            this.questionType = e.target.value;
        });
        
        this.showAllBtn.addEventListener('click', () => this.setHistoryFilter('all'));
        this.showWrongOnlyBtn.addEventListener('click', () => this.setHistoryFilter('wrong'));
        
        // Add language switcher event listeners
        if (this.quizLanguageSwitch) {
            this.quizLanguageSwitch.addEventListener('change', (e) => this.handleLanguageSwitch('quiz', e.target.value));
        }
        if (this.answerLanguageSwitch) {
            this.answerLanguageSwitch.addEventListener('change', (e) => this.handleLanguageSwitch('answer', e.target.value));
        }
    }
    
    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.currentQuizHistory = [];
        this.generateRandomQuiz();
        this.showScreen('quiz-screen');
        
        // Sync in-quiz language switchers with main selectors
        if (this.quizLanguageSwitch) {
            this.quizLanguageSwitch.value = this.quizLanguage;
        }
        if (this.answerLanguageSwitch) {
            this.answerLanguageSwitch.value = this.answerLanguage;
        }
        
        this.displayQuestion();
    }
    
    generateRandomQuiz() {
        // Get all words from multilingual data and assign difficulty levels
        const allWordsWithDifficulty = assignDifficultyLevels(getAllWords());
        
        // Filter words that have translations in both selected languages
        let availableWords = allWordsWithDifficulty.filter(word => 
            word.translations[this.quizLanguage] && 
            word.translations[this.answerLanguage]
        );
        
        // Filter by difficulty level
        availableWords = availableWords.filter(word => word.difficulty === this.difficultyLevel);
        
        // If not enough words for selected difficulty, mix with easier levels
        if (availableWords.length < this.questionCount) {
            const difficultyHierarchy = ['beginner', 'intermediate', 'advanced'];
            const currentIndex = difficultyHierarchy.indexOf(this.difficultyLevel);
            
            // Add words from easier levels if needed
            for (let i = 0; i < currentIndex && availableWords.length < this.questionCount; i++) {
                const easierWords = allWordsWithDifficulty.filter(word => 
                    word.difficulty === difficultyHierarchy[i] &&
                    word.translations[this.quizLanguage] && 
                    word.translations[this.answerLanguage]
                );
                availableWords.push(...easierWords);
            }
        }
        
        // Shuffle and take selected number of words
        const shuffled = [...availableWords].sort(() => 0.5 - Math.random());
        const selectedWords = shuffled.slice(0, this.questionCount);
        
        // Generate questions from selected words based on question type
        this.quizQuestions = selectedWords.map(word => {
            if (this.questionType === 'mixed') {
                // Random question type for mixed mode
                const questionTypes = ['multiple-choice', 'fill-blank', 'audio-only', 'reverse'];
                const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                return this.generateQuestionByType(word, randomType);
            } else {
                return this.generateQuestionByType(word, this.questionType);
            }
        });
        
        console.log(`Generated ${this.quizQuestions.length} questions for ${this.difficultyLevel} difficulty`);
    }
    
    generateQuestionByType(word, questionType) {
        switch (questionType) {
            case 'fill-blank':
                return generateFillBlankQuestion(word, this.quizLanguage, this.answerLanguage);
            case 'audio-only':
                return generateAudioOnlyQuestion(word, this.quizLanguage, this.answerLanguage);
            case 'reverse':
                return generateReverseQuestion(word, this.quizLanguage, this.answerLanguage);
            case 'multiple-choice':
            default:
                return generateQuestion(word, this.quizLanguage, this.answerLanguage, 'multiple-choice');
        }
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    displayQuestion() {
        const question = this.quizQuestions[this.currentQuestion];
        const questionTypeEl = this.questionContainer.querySelector('.question-type');
        const chineseTextEl = this.questionContainer.querySelector('.chinese-text');
        const questionTextEl = this.questionContainer.querySelector('.question-text');
        const optionBtns = this.questionContainer.querySelectorAll('.option-btn');
        
        // Reset UI elements
        this.optionsContainer.classList.remove('hidden');
        this.fillBlankContainer.classList.add('hidden');
        this.fillBlankInput.value = '';
        
        // Update question type display
        const questionTypeText = question.questionType === 'fill-blank' ? 'Fill in the Blank' :
                                question.questionType === 'audio-only' ? 'Audio Only' :
                                question.questionType === 'reverse' ? 'Reverse Translation' :
                                question.type === 'grammar' ? 'Grammar Pattern' :
                                question.type === 'phrase' ? 'Phrase' :
                                question.type === 'word' ? 'Word' : 'Idiom (成语)';
        questionTypeEl.textContent = questionTypeText;
        
        // Handle different question types
        switch (question.questionType) {
            case 'fill-blank':
                this.displayFillBlankQuestion(question, chineseTextEl, questionTextEl);
                break;
            case 'audio-only':
                this.displayAudioOnlyQuestion(question, chineseTextEl, questionTextEl, optionBtns);
                break;
            case 'reverse':
                this.displayReverseQuestion(question, chineseTextEl, questionTextEl, optionBtns);
                break;
            case 'multiple-choice':
            default:
                this.displayMultipleChoiceQuestion(question, chineseTextEl, questionTextEl, optionBtns);
                break;
        }
        
        this.currentQuestionEl.textContent = this.currentQuestion + 1;
        this.updateProgress();
        this.feedbackEl.classList.add('hidden');
        this.answered = false;
        this.selectedAnswer = null;
        this.updateActionButton(question.questionType === 'fill-blank' ? 'select' : 'select');
        
        // Start timer if time limit is set
        this.startTimer();
        
        // Auto-play pronunciation if enabled (except for audio-only questions)
        if (this.autoPlay && question.questionType !== 'audio-only') {
            setTimeout(() => this.playAudio(), 500);
        }
    }
    
    displayMultipleChoiceQuestion(question, chineseTextEl, questionTextEl, optionBtns) {
        chineseTextEl.textContent = `${question.questionText} (${question.pronunciation})`;
        questionTextEl.textContent = `What does this mean in ${this.getLanguageName(this.answerLanguage)}?`;
        
        optionBtns.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove('correct', 'incorrect', 'disabled', 'selected');
            btn.disabled = false;
        });
    }
    
    displayFillBlankQuestion(question, chineseTextEl, questionTextEl) {
        chineseTextEl.textContent = `${question.questionText} (${question.pronunciation})`;
        questionTextEl.textContent = `Type the translation in ${this.getLanguageName(this.answerLanguage)}:`;
        
        // Hide options, show input field
        this.optionsContainer.classList.add('hidden');
        this.fillBlankContainer.classList.remove('hidden');
        this.fillBlankInput.placeholder = `Type your answer in ${this.getLanguageName(this.answerLanguage)}...`;
        this.fillBlankInput.focus();
        
        // Add event listeners for fill-blank input
        this.fillBlankInput.addEventListener('input', () => {
            if (this.fillBlankInput.value.trim()) {
                this.updateActionButton('confirm');
            } else {
                this.updateActionButton('select');
            }
        });
        
        this.fillBlankInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.fillBlankInput.value.trim()) {
                this.handleFillBlankAnswer();
            }
        });
    }
    
    displayAudioOnlyQuestion(question, chineseTextEl, questionTextEl, optionBtns) {
        chineseTextEl.textContent = '🎵 Listen to the audio';
        questionTextEl.textContent = `What does this mean in ${this.getLanguageName(this.answerLanguage)}?`;
        
        optionBtns.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove('correct', 'incorrect', 'disabled', 'selected');
            btn.disabled = false;
        });
        
        // Auto-play for audio-only questions
        setTimeout(() => this.playAudio(), 500);
    }
    
    displayReverseQuestion(question, chineseTextEl, questionTextEl, optionBtns) {
        chineseTextEl.textContent = `"${question.questionText}"`;
        questionTextEl.textContent = `Which ${this.getLanguageName(this.quizLanguage)} word means this?`;
        
        optionBtns.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove('correct', 'incorrect', 'disabled', 'selected');
            btn.disabled = false;
        });
    }
    
    handleLanguageSwitch(switchType, newLanguage) {
        // Only allow language switching if not in the middle of answering a question
        if (this.answered) return;
        
        // Update the appropriate language setting
        if (switchType === 'quiz') {
            this.quizLanguage = newLanguage;
            // Sync with main quiz language selector
            if (this.quizLanguageSelect) {
                this.quizLanguageSelect.value = newLanguage;
            }
        } else if (switchType === 'answer') {
            this.answerLanguage = newLanguage;
            this.currentUILanguage = newLanguage;
            // Sync with main answer language selector
            if (this.answerLanguageSelect) {
                this.answerLanguageSelect.value = newLanguage;
            }
            // Update UI language
            this.updateUILanguage();
        }
        
        // Get all words from multilingual data and assign difficulty levels
        const allWordsWithDifficulty = assignDifficultyLevels(getAllWords());
        
        // Check if current question is still available in new language combination
        const currentWord = this.quizQuestions[this.currentQuestion];
        const wordStillAvailable = currentWord && 
            currentWord.translations[this.quizLanguage] && 
            currentWord.translations[this.answerLanguage];
        
        if (wordStillAvailable) {
            // Regenerate the current question with new language
            const currentQuestionType = this.quizQuestions[this.currentQuestion].questionType;
            this.quizQuestions[this.currentQuestion] = this.generateQuestionByType(currentWord, currentQuestionType);
            
            // Update the current question display
            this.displayQuestion();
        } else {
            // If current word not available in new language combo, regenerate entire quiz
            this.generateRandomQuiz();
            this.currentQuestion = 0;
            this.displayQuestion();
        }
    }
    
    selectOption(e) {
        if (this.answered) return;
        
        const selectedOption = parseInt(e.target.dataset.option);
        
        // Remove previous selection
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        e.target.classList.add('selected');
        
        // Enable confirm button
        this.selectedAnswer = selectedOption;
        this.updateActionButton('confirm');
    }
    
    handleFillBlankAnswer() {
        if (this.answered) return;
        
        const userAnswer = this.fillBlankInput.value.trim().toLowerCase();
        const question = this.quizQuestions[this.currentQuestion];
        const correctAnswer = question.correctAnswerText.toLowerCase();
        
        // Clear timer when answer is submitted
        this.clearTimer();
        
        const isCorrect = userAnswer === correctAnswer;
        this.answered = true;
        
        // Disable input
        this.fillBlankInput.disabled = true;
        
        // Record the answer
        this.currentQuizHistory.push({
            question: `${question.questionText} (${question.pronunciation})`,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswerText,
            isCorrect: isCorrect,
            word: question.word
        });
        
        if (isCorrect) {
            this.score++;
            this.showFeedback('correct', `Correct! "${question.correctAnswerText}"`);
        } else {
            this.showFeedback('incorrect', `Incorrect. The correct answer is "${question.correctAnswerText}"`);
        }
        
        // Update action button
        this.updateActionButton('next');
    }
    
    confirmAnswer() {
        const question = this.quizQuestions[this.currentQuestion];
        
        // Handle fill-blank questions
        if (question.questionType === 'fill-blank') {
            this.handleFillBlankAnswer();
            return;
        }
        
        // Handle multiple choice questions
        if (this.answered || this.selectedAnswer === null) return;
        
        // Clear timer when answer is confirmed
        this.clearTimer();
        
        const selectedOption = this.selectedAnswer;
        const isCorrect = selectedOption === question.correctAnswer;
        
        this.answered = true;
        
        // Record the answer with timestamp
        this.currentQuizHistory.push({
            question: `What does this mean in ${this.getLanguageName(this.answerLanguage)}?`,
            chinese: question.questionText,
            pinyin: question.pronunciation,
            options: question.options,
            userAnswer: selectedOption,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect,
            timestamp: new Date().toISOString()
        });
        
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            btn.disabled = true;
            btn.classList.remove('selected');
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        if (isCorrect) {
            this.score++;
            let feedback = 'Correct! 正确!';
            if (question.word && question.word.culturalNote) {
                feedback += `\n💡 ${question.word.culturalNote}`;
            }
            if (question.word && question.word.grammarPoint) {
                feedback += `\n📝 ${question.word.grammarPoint}`;
            }
            this.showFeedback(feedback, 'correct');
        } else {
            let feedback = `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`;
            if (question.word && question.word.culturalNote) {
                feedback += `\n💡 ${question.word.culturalNote}`;
            }
            if (question.word && question.word.grammarPoint) {
                feedback += `\n📝 ${question.word.grammarPoint}`;
            }
            this.showFeedback(feedback, 'incorrect');
        }
        
        // Update action button for next step
        if (this.currentQuestion < this.quizQuestions.length - 1) {
            this.updateActionButton('next');
        } else {
            this.updateActionButton('results');
        }
    }
    
    showFeedback(message, type) {
        const feedbackTextEl = this.feedbackEl.querySelector('.feedback-text');
        feedbackTextEl.textContent = message;
        feedbackTextEl.className = `feedback-text ${type}`;
        this.feedbackEl.classList.remove('hidden');
    }
    
    nextQuestion() {
        this.clearTimer();
        
        // Reset fill-blank input
        this.fillBlankInput.disabled = false;
        this.fillBlankInput.value = '';
        
        this.currentQuestion++;
        if (this.currentQuestion < this.quizQuestions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }
    
    updateProgress() {
        const progress = ((this.currentQuestion) / this.quizQuestions.length) * 100;
        this.progressEl.style.width = `${progress}%`;
    }
    
    showResults() {
        const percentage = Math.round((this.score / this.quizQuestions.length) * 100);
        this.finalScoreEl.textContent = percentage;
        
        let message = '';
        if (percentage >= 90) {
            message = 'Excellent! 优秀! You have great knowledge of Chinese!';
        } else if (percentage >= 70) {
            message = 'Good job! 很好! Keep practicing!';
        } else if (percentage >= 50) {
            message = 'Not bad! 不错! You can improve with more practice.';
        } else {
            message = 'Keep studying! 继续学习! Practice makes perfect.';
        }
        
        this.scoreMessageEl.textContent = message;
        
        // Save quiz history
        this.saveQuizHistory();
        
        this.showScreen('result-screen');
    }
    
    restartQuiz() {
        this.showScreen('start-screen');
    }
    
    saveQuizHistory() {
        const quizRecord = {
            id: Date.now() + Math.random(), // Unique ID for each quiz
            date: new Date().toISOString(),
            score: this.score,
            totalQuestions: this.quizQuestions.length,
            percentage: Math.round((this.score / this.quizQuestions.length) * 100),
            questions: [...this.currentQuizHistory],
            quizLanguage: this.quizLanguage,
            answerLanguage: this.answerLanguage
        };
        
        let history = this.loadHistory();
        history.push(quizRecord);
        
        // Keep only last 20 quiz records
        if (history.length > 20) {
            history = history.slice(-20);
        }
        
        localStorage.setItem('chineseQuizHistory', JSON.stringify(history));
        this.updateHistoryStats();
    }
    
    loadHistory() {
        const saved = localStorage.getItem('chineseQuizHistory');
        return saved ? JSON.parse(saved) : [];
    }
    
    updateHistoryStats() {
        const history = this.loadHistory();
        const totalQuizzes = history.length;
        
        document.getElementById('total-quizzes').textContent = totalQuizzes;
        
        if (totalQuizzes > 0) {
            const avgScore = Math.round(history.reduce((sum, quiz) => sum + quiz.percentage, 0) / totalQuizzes);
            document.getElementById('avg-score').textContent = `${avgScore}%`;
            
            const allWords = new Set();
            history.forEach(quiz => {
                quiz.questions.forEach(q => allWords.add(q.chinese));
            });
            document.getElementById('words-learned').textContent = allWords.size;
        } else {
            document.getElementById('avg-score').textContent = '0%';
            document.getElementById('words-learned').textContent = '0';
        }
    }
    
    showHistory() {
        const history = this.loadHistory();
        this.renderHistoryList(history);
        this.showScreen('history-screen');
    }
    
    setHistoryFilter(filter) {
        this.currentHistoryFilter = filter;
        
        // Update button states
        this.showAllBtn.classList.toggle('active', filter === 'all');
        this.showWrongOnlyBtn.classList.toggle('active', filter === 'wrong');
        
        // Re-render history with filter
        const history = this.loadHistory();
        this.renderHistoryList(history);
    }
    
    renderHistoryList(history) {
        const historyList = document.getElementById('history-list');
        
        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #6c757d;">No quiz history yet. Take a quiz to see your progress!</p>';
            return;
        }
        
        // Get all individual questions from all quizzes
        const allQuestions = [];
        history.forEach(quiz => {
            quiz.questions.forEach(question => {
                allQuestions.push({
                    ...question,
                    quizDate: quiz.date,
                    quizId: quiz.id || Date.now() // fallback for older entries
                });
            });
        });
        
        // Filter questions based on current filter
        let filteredQuestions = allQuestions;
        if (this.currentHistoryFilter === 'wrong') {
            filteredQuestions = allQuestions.filter(q => !q.isCorrect);
        }
        
        // Sort by date (newest first)
        filteredQuestions.sort((a, b) => new Date(b.quizDate) - new Date(a.quizDate));
        
        if (filteredQuestions.length === 0) {
            const message = this.currentHistoryFilter === 'wrong' ? 
                'No wrong answers found! You\'re doing great!' : 
                'No quiz history yet. Take a quiz to see your progress!';
            historyList.innerHTML = `<p style="text-align: center; color: #6c757d;">${message}</p>`;
            return;
        }
        
        // Group questions by quiz date for better organization
        const groupedQuestions = {};
        filteredQuestions.forEach(question => {
            const dateKey = new Date(question.quizDate).toLocaleDateString();
            if (!groupedQuestions[dateKey]) {
                groupedQuestions[dateKey] = [];
            }
            groupedQuestions[dateKey].push(question);
        });
        
        // Render grouped questions
        const htmlContent = Object.entries(groupedQuestions).map(([date, questions]) => {
            const questionsHtml = questions.map(q => this.createQuestionHistoryItem(q)).join('');
            return `
                <div class="history-date-group">
                    <h4 class="history-date-header">${date}</h4>
                    <div class="history-questions-group">
                        ${questionsHtml}
                    </div>
                </div>
            `;
        }).join('');
        
        historyList.innerHTML = htmlContent;
    }
    
    createQuestionHistoryItem(question) {
        const answerClass = question.isCorrect ? 'correct' : 'incorrect';
        const answerText = question.isCorrect ? '✓' : '✗';
        const time = new Date(question.quizDate).toLocaleTimeString();
        
        return `
            <div class="history-question-item">
                <div class="question-info">
                    <span class="chinese-word">${question.chinese}</span> (${question.pinyin})
                    <br><small>${question.question}</small>
                    <br><small>Your answer: ${question.options[question.userAnswer]}</small>
                    ${!question.isCorrect ? `<br><small class="correct-answer">Correct answer: ${question.options[question.correctAnswer]}</small>` : ''}
                    <br><small class="question-time">${time}</small>
                </div>
                <span class="user-answer ${answerClass}">${answerText}</span>
            </div>
        `;
    }
    
    createHistoryItem(quiz) {
        const date = new Date(quiz.date).toLocaleDateString();
        const time = new Date(quiz.date).toLocaleTimeString();
        const scoreClass = quiz.percentage >= 80 ? 'high' : quiz.percentage >= 60 ? 'medium' : 'low';
        
        const questionsHtml = quiz.questions.map(q => {
            const answerClass = q.isCorrect ? 'correct' : 'incorrect';
            const answerText = q.isCorrect ? '✓' : '✗';
            
            return `
                <div class="history-question">
                    <div class="question-info">
                        <span class="chinese-word">${q.chinese}</span> (${q.pinyin})
                        <br><small>${q.question}</small>
                        <br><small>Your answer: ${q.options[q.userAnswer]}</small>
                    </div>
                    <span class="user-answer ${answerClass}">${answerText}</span>
                </div>
            `;
        }).join('');
        
        return `
            <div class="history-item">
                <div class="history-header">
                    <span class="history-date">${date} ${time}</span>
                    <span class="history-score ${scoreClass}">${quiz.score}/${quiz.totalQuestions} (${quiz.percentage}%)</span>
                </div>
                <div class="history-questions">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }
    
    clearHistory() {
        const t = uiTranslations[this.currentUILanguage];
        if (confirm(t.clearHistoryConfirm)) {
            localStorage.removeItem('chineseQuizHistory');
            this.updateHistoryStats();
            this.showHistory();
        }
    }
    
    backToQuiz() {
        this.showScreen('start-screen');
    }
    
    goHome() {
        this.showScreen('start-screen');
    }
    
    toggleAutoPlay() {
        this.autoPlay = !this.autoPlay;
        this.updateAutoPlayButton();
        this.saveAutoPlaySetting();
    }
    
    updateAutoPlayButton() {
        const t = uiTranslations[this.currentUILanguage];
        if (this.autoPlay) {
            this.autoPlayBtn.textContent = t.autoPlayOn;
            this.autoPlayBtn.classList.add('active');
        } else {
            this.autoPlayBtn.textContent = t.autoPlayOff;
            this.autoPlayBtn.classList.remove('active');
        }
    }
    
    updateUILanguage() {
        const t = uiTranslations[this.currentUILanguage];
        
        // Update header
        document.querySelector('header h1').textContent = t.title;
        document.querySelector('header p').textContent = t.subtitle;
        
        // Update start screen
        document.querySelector('#start-screen h2').textContent = t.welcome;
        document.querySelector('#start-screen p').textContent = t.welcomeSubtitle;
        document.querySelector('label[for="quiz-language"]').textContent = t.quizLanguageLabel;
        document.querySelector('label[for="answer-language"]').textContent = t.answerLanguageLabel;
        this.startBtn.textContent = t.startQuiz;
        
        // Update buttons
        this.homeBtn.textContent = t.home;
        this.historyBtn.textContent = t.reviewHistory;
        this.restartBtn.textContent = t.tryAgain;
        this.clearHistoryBtn.textContent = t.clearHistory;
        this.backToQuizBtn.textContent = t.backToQuiz;
        
        // Update result screen
        document.querySelector('#result-screen h2').textContent = t.quizComplete;
        
        // Update history screen
        document.querySelector('#history-screen h2').textContent = t.quizHistory;
        document.querySelector('.stat-label').textContent = t.totalQuizzes;
        document.querySelectorAll('.stat-label')[1].textContent = t.averageScore;
        document.querySelectorAll('.stat-label')[2].textContent = t.wordsLearned;
        this.showAllBtn.textContent = t.showAll;
        this.showWrongOnlyBtn.textContent = t.wrongAnswersOnly;
        
        // Update auto play button
        this.updateAutoPlayButton();
        
        // Update action button if visible
        if (this.actionBtn) {
            this.updateActionButton(this.actionBtn.dataset.state || 'select');
        }
    }
    
    saveAutoPlaySetting() {
        localStorage.setItem('chineseQuizAutoPlay', JSON.stringify(this.autoPlay));
    }
    
    loadAutoPlaySetting() {
        const saved = localStorage.getItem('chineseQuizAutoPlay');
        if (saved !== null) {
            this.autoPlay = JSON.parse(saved);
        }
        this.updateAutoPlayButton();
    }
    
    handleActionButton() {
        const currentState = this.actionBtn.dataset.state;
        
        switch (currentState) {
            case 'confirm':
                this.confirmAnswer();
                break;
            case 'next':
                this.nextQuestion();
                break;
            case 'results':
                this.showResults();
                break;
            default:
                // Do nothing for 'select' state
                break;
        }
    }
    
    updateActionButton(state) {
        const t = uiTranslations[this.currentUILanguage];
        
        // Remove all state classes
        this.actionBtn.classList.remove('select-state', 'confirm-state', 'next-state', 'results-state');
        
        // Set the current state
        this.actionBtn.dataset.state = state;
        
        switch (state) {
            case 'select':
                this.actionBtn.textContent = t.selectAnswer;
                this.actionBtn.classList.add('select-state');
                this.actionBtn.disabled = true;
                break;
            case 'confirm':
                this.actionBtn.textContent = t.confirmAnswer;
                this.actionBtn.classList.add('confirm-state');
                this.actionBtn.disabled = false;
                break;
            case 'next':
                this.actionBtn.textContent = t.nextQuestion;
                this.actionBtn.classList.add('next-state');
                this.actionBtn.disabled = false;
                break;
            case 'results':
                this.actionBtn.textContent = t.showResults;
                this.actionBtn.classList.add('results-state');
                this.actionBtn.disabled = false;
                break;
        }
    }
    
    getLanguageName(code) {
        const languageNames = {
            'zh': 'Chinese',
            'ko': 'Korean',
            'en': 'English',
            'ja': 'Japanese',
            'es': 'Spanish',
            'vi': 'Vietnamese',
            'fr': 'French',
            'de': 'German',
            'tr': 'Turkish'
        };
        return languageNames[code] || 'Unknown';
    }
    
    getLanguageCode(code) {
        const languageCodes = {
            'zh': 'zh-CN',
            'ko': 'ko-KR',
            'en': 'en-US',
            'ja': 'ja-JP',
            'es': 'es-ES',
            'vi': 'vi-VN',
            'fr': 'fr-FR',
            'de': 'de-DE',
            'tr': 'tr-TR'
        };
        return languageCodes[code] || 'en-US';
    }
    
    playAudio() {
        const question = this.quizQuestions[this.currentQuestion];
        if (question && question.questionText) {
            // Use Web Speech API for text-to-speech
            if ('speechSynthesis' in window) {
                // Stop any ongoing speech
                speechSynthesis.cancel();
                
                const speakText = () => {
                    const utterance = new SpeechSynthesisUtterance(question.questionText);
                    utterance.lang = this.getLanguageCode(this.quizLanguage);
                    utterance.rate = 0.8; // Slightly slower for clarity
                    utterance.pitch = 1.0;
                    utterance.volume = 1.0;
                    
                    // Debug: Log available voices and selected language
                    const voices = speechSynthesis.getVoices();
                    console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
                    console.log('Target language:', this.quizLanguage, 'Target lang code:', this.getLanguageCode(this.quizLanguage));
                    
                    // Improved voice selection for Japanese
                    let targetVoice = null;
                    
                    if (this.quizLanguage === 'ja') {
                        // First try to find a Japanese voice
                        targetVoice = voices.find(voice => 
                            voice.lang.toLowerCase().includes('ja') || 
                            voice.lang.toLowerCase().includes('jp') ||
                            voice.name.toLowerCase().includes('japanese')
                        );
                        
                        // If no Japanese voice found, try any available voice
                        if (!targetVoice) {
                            console.log('No Japanese voice found, using default voice');
                            targetVoice = voices[0]; // Use first available voice
                        }
                    } else {
                        // For other languages, use the original logic
                        targetVoice = voices.find(voice => 
                            voice.lang.includes(this.quizLanguage) || 
                            voice.lang.includes(this.getLanguageCode(this.quizLanguage).split('-')[0])
                        );
                    }
                    
                    if (targetVoice) {
                        utterance.voice = targetVoice;
                        console.log('Selected voice:', targetVoice.name, targetVoice.lang);
                    } else {
                        console.log('No suitable voice found, using default');
                    }
                    
                    // Add error handling
                    utterance.onerror = (event) => {
                        console.log('Speech synthesis error:', event.error);
                    };
                    
                    utterance.onstart = () => {
                        console.log('Speech started');
                    };
                    
                    utterance.onend = () => {
                        console.log('Speech ended');
                    };
                    
                    speechSynthesis.speak(utterance);
                };
                
                // Check if voices are loaded
                if (speechSynthesis.getVoices().length > 0) {
                    speakText();
                } else {
                    // Wait for voices to load
                    speechSynthesis.onvoiceschanged = () => {
                        speakText();
                    };
                }
            } else {
                // Fallback: show alert if speech synthesis not supported
                const t = uiTranslations[this.currentUILanguage];
                alert(t.speechNotSupported);
            }
        }
    }
    
    startTimer() {
        // Clear any existing timer
        this.clearTimer();
        
        // Only start timer if time limit is set
        if (this.timeLimit > 0) {
            this.timeRemaining = this.timeLimit;
            this.timerDisplay.classList.remove('hidden');
            this.updateTimerDisplay();
            
            this.currentTimer = setInterval(() => {
                this.timeRemaining--;
                this.updateTimerDisplay();
                
                if (this.timeRemaining <= 0) {
                    this.handleTimeUp();
                }
            }, 1000);
        } else {
            this.timerDisplay.classList.add('hidden');
        }
    }
    
    clearTimer() {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
            this.currentTimer = null;
        }
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.timerText.textContent = `⏱️ ${timeString}`;
        
        // Add warning color when time is running low
        if (this.timeRemaining <= 10) {
            this.timerText.style.color = '#ff4444';
        } else if (this.timeRemaining <= 30) {
            this.timerText.style.color = '#ffaa00';
        } else {
            this.timerText.style.color = '#333';
        }
    }
    
    handleTimeUp() {
        this.clearTimer();
        
        // Mark as answered to prevent further selection
        this.answered = true;
        
        // Disable all option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        // Show feedback for time up
        this.feedbackEl.classList.remove('hidden');
        this.feedbackEl.querySelector('.feedback-text').textContent = 'Time\'s up! The correct answer was: ' + 
            this.quizQuestions[this.currentQuestion].options[this.quizQuestions[this.currentQuestion].correctAnswer];
        this.feedbackEl.querySelector('.feedback-text').style.color = '#ff4444';
        
        // Update action button
        this.updateActionButton('next');
        
        // Record this as a wrong answer in history
        this.currentQuizHistory.push({
            question: this.quizQuestions[this.currentQuestion].questionText,
            userAnswer: 'Time\'s up',
            correctAnswer: this.quizQuestions[this.currentQuestion].options[this.quizQuestions[this.currentQuestion].correctAnswer],
            isCorrect: false,
            word: this.quizQuestions[this.currentQuestion].word
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChineseQuiz();
});