import { MultilingualData } from '@/types/quiz';

export const multilingualData: MultilingualData = {
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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
      difficulty: "beginner",
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

  // Colors
  colors: [
    {
      id: "red",
      type: "word",
      difficulty: "beginner",
      translations: {
        zh: { text: "红色", pronunciation: "hóng sè" },
        ko: { text: "빨간색", pronunciation: "ppalgansaek" },
        en: { text: "Red", pronunciation: "red" },
        ja: { text: "赤", pronunciation: "aka" },
        es: { text: "Rojo", pronunciation: "ROH-hoh" },
        vi: { text: "Đỏ", pronunciation: "doh" },
        fr: { text: "Rouge", pronunciation: "roozh" },
        de: { text: "Rot", pronunciation: "roht" },
        tr: { text: "Kırmızı", pronunciation: "kur-muh-ZUH" }
      },
      meanings: {
        en: "Red",
        zh: "红色",
        ko: "빨간색",
        ja: "赤",
        es: "Rojo",
        vi: "Đỏ",
        fr: "Rouge",
        de: "Rot",
        tr: "Kırmızı"
      }
    },
    {
      id: "blue",
      type: "word",
      difficulty: "beginner",
      translations: {
        zh: { text: "蓝色", pronunciation: "lán sè" },
        ko: { text: "파란색", pronunciation: "paransaek" },
        en: { text: "Blue", pronunciation: "bloo" },
        ja: { text: "青", pronunciation: "ao" },
        es: { text: "Azul", pronunciation: "ah-SOOL" },
        vi: { text: "Xanh", pronunciation: "sang" },
        fr: { text: "Bleu", pronunciation: "bluh" },
        de: { text: "Blau", pronunciation: "blow" },
        tr: { text: "Mavi", pronunciation: "MAH-vee" }
      },
      meanings: {
        en: "Blue",
        zh: "蓝色",
        ko: "파란색",
        ja: "青",
        es: "Azul",
        vi: "Xanh",
        fr: "Bleu",
        de: "Blau",
        tr: "Mavi"
      }
    }
  ],

  // Numbers
  numbers: [
    {
      id: "one",
      type: "word",
      difficulty: "beginner",
      translations: {
        zh: { text: "一", pronunciation: "yī" },
        ko: { text: "하나", pronunciation: "hana" },
        en: { text: "One", pronunciation: "wun" },
        ja: { text: "一", pronunciation: "ichi" },
        es: { text: "Uno", pronunciation: "OO-noh" },
        vi: { text: "Một", pronunciation: "mot" },
        fr: { text: "Un", pronunciation: "uhn" },
        de: { text: "Eins", pronunciation: "eyns" },
        tr: { text: "Bir", pronunciation: "beer" }
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
      difficulty: "beginner",
      translations: {
        zh: { text: "二", pronunciation: "èr" },
        ko: { text: "둘", pronunciation: "dul" },
        en: { text: "Two", pronunciation: "too" },
        ja: { text: "二", pronunciation: "ni" },
        es: { text: "Dos", pronunciation: "dohs" },
        vi: { text: "Hai", pronunciation: "hai" },
        fr: { text: "Deux", pronunciation: "duh" },
        de: { text: "Zwei", pronunciation: "tsvy" },
        tr: { text: "İki", pronunciation: "ee-kee" }
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
    }
  ],

  // Food
  food: [
    {
      id: "rice",
      type: "word",
      difficulty: "beginner",
      translations: {
        zh: { text: "米饭", pronunciation: "mǐ fàn" },
        ko: { text: "밥", pronunciation: "bap" },
        en: { text: "Rice", pronunciation: "ryes" },
        ja: { text: "ご飯", pronunciation: "gohan" },
        es: { text: "Arroz", pronunciation: "ah-RROHS" },
        vi: { text: "Cơm", pronunciation: "kum" },
        fr: { text: "Riz", pronunciation: "ree" },
        de: { text: "Reis", pronunciation: "ryes" },
        tr: { text: "Pirinç", pronunciation: "pee-RINCH" }
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
        ko: { text: "맑음", pronunciation: "malgeum" },
        en: { text: "Sunny", pronunciation: "sun-ee" },
        ja: { text: "晴れ", pronunciation: "hare" },
        es: { text: "Soleado", pronunciation: "soh-leh-AH-doh" },
        vi: { text: "Nắng", pronunciation: "nang" },
        fr: { text: "Ensoleillé", pronunciation: "ahn-soh-lay" },
        de: { text: "Sonnig", pronunciation: "ZON-nig" },
        tr: { text: "Güneşli", pronunciation: "gu-NESH-lee" }
      },
      meanings: {
        en: "Sunny",
        zh: "晴天",
        ko: "맑음",
        ja: "晴れ",
        es: "Soleado",
        vi: "Nắng",
        fr: "Ensoleillé",
        de: "Sonnig",
        tr: "Güneşli"
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
        en: { text: "Airport", pronunciation: "air-port" },
        ja: { text: "空港", pronunciation: "kuukou" },
        es: { text: "Aeropuerto", pronunciation: "ah-eh-roh-PWEHR-toh" },
        vi: { text: "Sân bay", pronunciation: "san bay" },
        fr: { text: "Aéroport", pronunciation: "ah-eh-roh-por" },
        de: { text: "Flughafen", pronunciation: "FLOOG-hah-fen" },
        tr: { text: "Havaalanı", pronunciation: "ha-va-la-NUH" }
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
        ko: { text: "회의", pronunciation: "hoeeui" },
        en: { text: "Meeting", pronunciation: "mee-ting" },
        ja: { text: "会議", pronunciation: "kaigi" },
        es: { text: "Reunión", pronunciation: "reh-oo-NYOHN" },
        vi: { text: "Cuộc họp", pronunciation: "kuok hop" },
        fr: { text: "Réunion", pronunciation: "ray-oo-nyohn" },
        de: { text: "Besprechung", pronunciation: "beh-SHPREH-khung" },
        tr: { text: "Toplantı", pronunciation: "toh-plan-TUH" }
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
    }
  ],

  // Verbs
  verbs: [
    {
      id: "eat",
      type: "word",
      difficulty: "intermediate",
      translations: {
        zh: { text: "吃", pronunciation: "chī" },
        ko: { text: "먹다", pronunciation: "meokda" },
        en: { text: "Eat", pronunciation: "eet" },
        ja: { text: "食べる", pronunciation: "taberu" },
        es: { text: "Comer", pronunciation: "koh-MEHR" },
        vi: { text: "Ăn", pronunciation: "an" },
        fr: { text: "Manger", pronunciation: "mahn-zhay" },
        de: { text: "Essen", pronunciation: "ESS-en" },
        tr: { text: "Yemek", pronunciation: "ye-MEK" }
      },
      meanings: {
        en: "Eat",
        zh: "吃",
        ko: "먹다",
        ja: "食べる",
        es: "Comer",
        vi: "Ăn",
        fr: "Manger",
        de: "Essen",
        tr: "Yemek"
      }
    }
  ],

  // Grammar
  grammar: [
    {
      id: "because",
      type: "word",
      difficulty: "intermediate",
      translations: {
        zh: { text: "因为", pronunciation: "yīn wèi" },
        ko: { text: "왜냐하면", pronunciation: "waenyahamyeon" },
        en: { text: "Because", pronunciation: "bee-kuz" },
        ja: { text: "なぜなら", pronunciation: "nazenara" },
        es: { text: "Porque", pronunciation: "por-KEH" },
        vi: { text: "Vì", pronunciation: "vee" },
        fr: { text: "Parce que", pronunciation: "pars kuh" },
        de: { text: "Weil", pronunciation: "vile" },
        tr: { text: "Çünkü", pronunciation: "chun-KU" }
      },
      meanings: {
        en: "Because",
        zh: "因为",
        ko: "왜냐하면",
        ja: "なぜなら",
        es: "Porque",
        vi: "Vì",
        fr: "Parce que",
        de: "Weil",
        tr: "Çünkü"
      }
    }
  ],

  // Advanced
  advanced: [
    {
      id: "philosophy",
      type: "word",
      difficulty: "advanced",
      translations: {
        zh: { text: "哲学", pronunciation: "zhé xué" },
        ko: { text: "철학", pronunciation: "cheolhak" },
        en: { text: "Philosophy", pronunciation: "fi-los-uh-fee" },
        ja: { text: "哲学", pronunciation: "tetsugaku" },
        es: { text: "Filosofía", pronunciation: "fee-loh-soh-FEE-ah" },
        vi: { text: "Triết học", pronunciation: "trieet hoc" },
        fr: { text: "Philosophie", pronunciation: "fee-loh-soh-fee" },
        de: { text: "Philosophie", pronunciation: "fee-loh-soh-FEE" },
        tr: { text: "Felsefe", pronunciation: "fel-se-FEH" }
      },
      meanings: {
        en: "Philosophy",
        zh: "哲学",
        ko: "철학",
        ja: "哲学",
        es: "Filosofía",
        vi: "Triết học",
        fr: "Philosophie",
        de: "Philosophie",
        tr: "Felsefe"
      }
    }
  ]
}; 