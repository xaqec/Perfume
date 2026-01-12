/* data.js */

// --- 1. OYUN HİKAYESİ VE SORULAR (20 ADIM - BAĞIMLI HİKAYE) ---
/*
  Her adım bir öncekiyle bağlantılıdır.
  bg: 'f_1' -> Female Scene 1
  bg: 'm_1' -> Male Scene 1
*/
const STORY_DATA = {
    female: [
        // BÖLÜM 1: GİRİŞ (The Awakening)
        { text: "1/20. Gözlerini araladığında, kendini hiç bilmediğin, gümüşi bir sisle kaplı antik bir korunun kıyısında buluyorsun. Ay ışığı sisin içinden süzülüyor. İlk hissettiğin şey ne?", bg: "f_1", opts: [{ t: "Derin bir huzur.", c: "temiz" }, { t: "Kalbimde bir çarpıntı.", c: "romantik" }, { t: "Bilinmeze duyulan merak.", c: "gizemli" }, { t: "Buradan çıkma arzusu.", c: "enerjik" }] },
        { text: "2/20. Korunun derinliklerinden gelen melodi seni çağırıyor. Yürümeye başlıyorsun. Yoluna çıkan ilk engel ne?", bg: "f_2", opts: [{ t: "Dikenli, koyu sarmaşıklar.", c: "gizemli" }, { t: "Gürül gürül akan bir dere.", c: "enerjik" }, { t: "Yolu kapatan devasa bir kaya.", c: "sik" }, { t: "Aniden bastıran yoğun sis.", c: "temiz" }] },
        { text: "3/20. Engeli aştın ve karşına terk edilmiş gibi duran, ama pencerelerinden ılık bir ışık sızan o Malikaneyi gördün. Kapısı sana neyi anımsatıyor?", bg: "f_3", opts: [{ t: "Çocukluğumun masallarını.", c: "romantik" }, { t: "Eski bir krallığın girişini.", c: "sik" }, { t: "Unutulmuş bir tapınağı.", c: "gizemli" }, { t: "Sıcak bir yuvayı.", c: "gurme" }] },
        { text: "4/20. Büyük kapı gıcırdayarak açıldı. Holde kimse yok ama havada çok tanıdık bir koku var. Bu koku ne olabilir?", bg: "f_4", opts: [{ t: "Taze kesilmiş güller.", c: "romantik" }, { t: "Eski kitaplar ve ahşap.", c: "sik" }, { t: "Okyanus esintisi.", c: "temiz" }, { t: "Kavrulmuş şeker ve vanilya.", c: "gurme" }] },

        // BÖLÜM 2: KEŞİF (The Exploration)
        { text: "5/20. Salonun ortasında kristal bir masa var. Üzerinde dört farklı anahtar duruyor. Hangisini alırsın?", bg: "f_5", opts: [{ t: "Paslı, demir anahtar.", c: "gizemli" }, { t: "Parlak altın anahtar.", c: "sik" }, { t: "Camdan, şeffaf anahtar.", c: "temiz" }, { t: "Çiçeklerle süslü anahtar.", c: "romantik" }] },
        { text: "6/20. Seçtiğin anahtar seni üst kattaki bir odaya yönlendirdi. Odaya girdiğinde ilk dikkatini çeken obje ne?", bg: "f_6", opts: [{ t: "Devasa, antika bir ayna.", c: "sik" }, { t: "Pencere önündeki teleskop.", c: "gizemli" }, { t: "Yerdeki renkli halı.", c: "enerjik" }, { t: "Kadife bir koltuk.", c: "gurme" }] },
        { text: "7/20. Aynaya yaklaştın ama yansıman farklı. Kendini nasıl görüyorsun?", bg: "f_7", opts: [{ t: "Bir kraliçe gibi güçlü.", c: "sik" }, { t: "Bir peri gibi ışıldayan.", c: "temiz" }, { t: "Gözleri parlayan bir savaşçı.", c: "enerjik" }, { t: "Gizemli bir gölge.", c: "gizemli" }] },
        { text: "8/20. Aniden pencere açıldı ve içeri bir kuş süzüldü. Bu kuşun rengi ne?", bg: "f_8", opts: [{ t: "Zümrüt yeşili.", c: "enerjik" }, { t: "Gece karası.", c: "gizemli" }, { t: "İnci beyazı.", c: "temiz" }, { t: "Alev kırmızısı.", c: "romantik" }] },

        // BÖLÜM 3: GİZEM (The Mystery)
        { text: "9/20. Kuş, gagasıyla gardırobun kapağını işaret etti. Gardırobu açtığında içerisi kıyafet değil, başka bir dünyaya açılan bir geçit! Geçitten ne görünüyor?", bg: "f_9", opts: [{ t: "Yıldızlarla dolu uzay.", c: "gizemli" }, { t: "Güneşli bir sahil.", c: "enerjik" }, { t: "Çiçek bahçeleri.", c: "romantik" }, { t: "Lüks bir balo salonu.", c: "sik" }] },
        { text: "10/20. Geçitten geçmeye cesaret ettin. Ayakların yere bastığında zemin neyden yapılmış?", bg: "f_10", opts: [{ t: "Yumuşacık bulutlardan.", c: "temiz" }, { t: "Soğuk mermerden.", c: "sik" }, { t: "Ilık kumlardan.", c: "enerjik" }, { t: "Kuru yapraklardan.", c: "gizemli" }] },
        { text: "11/20. Karşında bir kadın belirdi. Sana 'Aradığın şey burada değil, kalbinde' dedi. Sesi nasıldı?", bg: "f_11", opts: [{ t: "Fısıltı gibi, yumuşak.", c: "temiz" }, { t: "Güçlü ve otoriter.", c: "sik" }, { t: "Şarkı söyler gibi.", c: "romantik" }, { t: "Boğuk ve derinden.", c: "gizemli" }] },
        { text: "12/20. Kadın sana bir iksir uzattı. İksirin rengi ne?", bg: "f_12", opts: [{ t: "Altın sarısı.", c: "sik" }, { t: "Menekşe moru.", c: "gizemli" }, { t: "Okyanus mavisi.", c: "enerjik" }, { t: "Tatlı pembe.", c: "gurme" }] },

        // BÖLÜM 4: DÖNÜŞÜM (The Transformation)
        { text: "13/20. İksiri içtin. Vücudunda bir enerji dalgası yayıldı. Hangi elementi kontrol edebildiğini hissediyorsun?", bg: "f_13", opts: [{ t: "Ateş.", c: "romantik" }, { t: "Su.", c: "temiz" }, { t: "Toprak.", c: "sik" }, { t: "Hava.", c: "enerjik" }] },
        { text: "14/20. Artık o dünyadan ayrılma vakti. Geri dönerken yanına bir hatıra almak istiyorsun. Ne alırsın?", bg: "f_14", opts: [{ t: "Parlayan bir taş.", c: "gizemli" }, { t: "Egzotik bir meyve.", c: "gurme" }, { t: "Bir avuç kum.", c: "temiz" }, { t: "Kurutulmuş bir çiçek.", c: "romantik" }] },
        { text: "15/20. Tekrar malikanedesin. Ama artık malikane değişti. Duvarlar ne renk?", bg: "f_15", opts: [{ t: "Beyaz ve ferah.", c: "temiz" }, { t: "Siyah ve asil.", c: "sik" }, { t: "Kırmızı ve sıcak.", c: "romantik" }, { t: "Altın varaklı.", c: "gurme" }] },
        { text: "16/20. Dışarıda yağmur başladı ama bu normal bir yağmur değil. Damlalar neye benziyor?", bg: "f_16", opts: [{ t: "Elmasa.", c: "sik" }, { t: "Gözyaşlarına.", c: "romantik" }, { t: "Işık huzmelerine.", c: "enerjik" }, { t: "Gümüş ipliklere.", c: "gizemli" }] },

        // BÖLÜM 5: SONUÇ (The Resolution)
        { text: "17/20. Yağmurun altında dans etmek istiyorsun. Hangi müzik çalıyor?", bg: "f_17", opts: [{ t: "Klasik bir senfoni.", c: "sik" }, { t: "Modern bir pop şarkısı.", c: "enerjik" }, { t: "Hüzünlü bir jazz.", c: "romantik" }, { t: "Doğa sesleri.", c: "temiz" }] },
        { text: "18/20. Ve orman seni serbest bırakıyor. Şehre dönüyorsun. İlk yapacağın şey ne?", bg: "f_18", opts: [{ t: "Sıcak bir kahve içmek.", c: "gurme" }, { t: "Arkadaşlarımla buluşmak.", c: "enerjik" }, { t: "Uzun bir banyo yapmak.", c: "temiz" }, { t: "Yaşadıklarımı yazmak.", c: "gizemli" }] },
        { text: "19/20. Aynaya son bir kez baktığında gözlerinde bir parıltı gördün. Bu parıltı sana neyi fısıldıyor?", bg: "f_19", opts: [{ t: "\"Sen özelsin.\"", c: "sik" }, { t: "\"Macera bitmedi.\"", c: "enerjik" }, { t: "\"Sevgi her şeydir.\"", c: "romantik" }, { t: "\"Sırlarını koru.\"", c: "gizemli" }] },
        { text: "20/20. Yolculuğun sonuna geldin. Ruhunun özünü tek bir kelimeyle tanımla.", bg: "f_20", opts: [{ t: "Tutku.", c: "romantik" }, { t: "Zarafet.", c: "sik" }, { t: "Özgürlük.", c: "temiz" }, { t: "Gizem.", c: "gizemli" }] }
    ],

    male: [
        // BÖLÜM 1: GÖREV (The Mission)
        { text: "1/20. Telefonun ekranı, zifiri karanlık odada mavi bir ışıkla parlıyor. Gece yarısı gelen çağrı. Görev başlıyor. Neredesin?", bg: "m_1", opts: [{ t: "Tokyo'nun neon ışıklı bir çatısında.", c: "enerjik" }, { t: "Londra'da, yağmurlu bir sokakta.", c: "sik" }, { t: "Sahra çölünde, bir kampta.", c: "maskulen" }, { t: "Eski bir kütüphanenin mahzeninde.", c: "gizemli" }] },
        { text: "2/20. Hedefe gitmek için hazırlanman gerek. Dolabını açtın. İlk eline gelen parça ne?", bg: "m_2", opts: [{ t: "Siyah deri ceket.", c: "maskulen" }, { t: "Jilet gibi bir takım elbise.", c: "sik" }, { t: "Rahat bir keten gömlek.", c: "centilmen" }, { t: "Koyu renkli bir kapüşonlu.", c: "gizemli" }] },
        { text: "3/20. Garajdasın. Motorun sesi kükrüyor. Altındaki araç ne?", bg: "m_3", opts: [{ t: "Modifiye edilmiş bir Japon canavarı.", c: "enerjik" }, { t: "Klasik bir İngiliz leydisi.", c: "centilmen" }, { t: "Simsiyah bir Amerikan kası.", c: "maskulen" }, { t: "Zırhlı, teknolojik bir SUV.", c: "sik" }] },
        { text: "4/20. Buluşma noktası lüks bir otelin lobisi. İçeri girdin. İnsanlar sana nasıl bakıyor?", bg: "m_4", opts: [{ t: "Hayranlıkla.", c: "sik" }, { t: "Korkuyla.", c: "maskulen" }, { t: "Merakla.", c: "gizemli" }, { t: "Saygıyla.", c: "centilmen" }] },

        // BÖLÜM 2: OYUN (The Game)
        { text: "5/20. Barda hedefi bekliyorsun. Barmen \"Ne alırsınız?\" diye sordu. Cevabın?", bg: "m_5", opts: [{ t: "Sek bir viski.", c: "maskulen" }, { t: "Martini, çalkalanmış.", c: "sik" }, { t: "Sadece soda.", c: "enerjik" }, { t: "Özel bir kokteyl.", c: "centilmen" }] },
        { text: "6/20. Hedef geldi. Bir kadın. Yanına oturdu ve parfümleri hakkında bir yorum yaptı. Ne dedi?", bg: "m_6", opts: [{ t: "\"Tehlikeli kokuyorsun.\"", c: "maskulen" }, { t: "\"Çok zarif bir seçim.\"", c: "sik" }, { t: "\"Bu koku bana denizleri hatırlattı.\"", c: "enerjik" }, { t: "\"Sırlarla dolusun.\"", c: "gizemli" }] },
        { text: "7/20. Bir kart oyunu başlıyor. Masaya ne koyuyorsun?", bg: "m_7", opts: [{ t: "Tüm servetimi.", c: "sik" }, { t: "Sillahımı.", c: "maskulen" }, { t: "Sadece şansımı.", c: "enerjik" }, { t: "Zekamı.", c: "centilmen" }] },
        { text: "8/20. Oyun kızıştı. Rakibin blöf yapıyor. Tepkin ne?", bg: "m_8", opts: [{ t: "Gözlerinin içine dik dik bakarım.", c: "maskulen" }, { t: "Hafifçe gülümserim.", c: "sik" }, { t: "Umursamazca omuz silkerim.", c: "enerjik" }, { t: "Analiz etmeye devam ederim.", c: "gizemli" }] },

        // BÖLÜM 3: KAOS (The Chaos)
        { text: "9/20. Işıklar aniden kesildi. Kaos başladı. İlk hamlen ne?", bg: "m_9", opts: [{ t: "Siper alırım.", c: "maskulen" }, { t: "Kadını korurum.", c: "centilmen" }, { t: "Kalabalığa karışıp kaçarım.", c: "enerjik" }, { t: "Karanlıkta avlanırım.", c: "gizemli" }] },
        { text: "10/20. Dışarı çıktın. Yağmur yağıyor. Sokaklar ıslak ve neon ışıklarıyla parlıyor. Nereye gidiyorsun?", bg: "m_10", opts: [{ t: "Yeraltı kulübüne.", c: "enerjik" }, { t: "Güvenli eve.", c: "gizemli" }, { t: "Limana, tekneye.", c: "maskulen" }, { t: "Özel jet pistine.", c: "sik" }] },
        { text: "11/20. Takip ediliyorsun. İzini kaybettirmek için nereye girersin?", bg: "m_11", opts: [{ t: "Kalabalık bir metro istasyonuna.", c: "enerjik" }, { t: "Eski bir müzeye.", c: "centilmen" }, { t: "Karanlık bir ara sokağa.", c: "maskulen" }, { t: "Lüks bir mağazaya.", c: "sik" }] },
        { text: "12/20. İzini kaybettirdin. Nefeslenmek için durdun. Cebinden ne çıkardın?", bg: "m_12", opts: [{ t: "Eski bir köstekli saat.", c: "centilmen" }, { t: "Metal bir çakmak.", c: "maskulen" }, { t: "Son teknoloji bir cihaz.", c: "sik" }, { t: "Bir fotoğraf.", c: "gizemli" }] },

        // BÖLÜM 4: ZİRVE (The Climax)
        { text: "13/20. Şehrin en yüksek binasının tepesindesin. Rüzgar yüzüne vuruyor. Aşağıdaki şehre bakınca ne hissediyorsun?", bg: "m_13", opts: [{ t: "Burası benim krallığım.", c: "sik" }, { t: "Her şey çok küçük.", c: "gizemli" }, { t: "Özgürlük.", c: "enerjik" }, { t: "Yalnızlık.", c: "maskulen" }] },
        { text: "14/20. Gökyüzünde şimşekler çakıyor. Doğanın gücü sana neyi hatırlatıyor?", bg: "m_14", opts: [{ t: "Kendi içimdeki öfkeyi.", c: "maskulen" }, { t: "Evrenin dengesini.", c: "centilmen" }, { t: "Değişimin kaçınılmazlığını.", c: "enerjik" }, { t: "Kontrolün illüzyon olduğunu.", c: "gizemli" }] },
        { text: "15/20. Sabahın ilk ışıkları ufukta beliriyor. Yeni bir gün. Planın ne?", bg: "m_15", opts: [{ t: "Dünyayı değiştirmek.", c: "sik" }, { t: "Sadece hayatta kalmak.", c: "maskulen" }, { t: "Yeni yerler keşfetmek.", c: "enerjik" }, { t: "Bilgeliğimi artırmak.", c: "centilmen" }] },
        { text: "16/20. Telefonun tekrar çaldı. Açtın mı?", bg: "m_16", opts: [{ t: "Evet, her zaman hazırım.", c: "enerjik" }, { t: "Hayır, artık kendi yolumdayım.", c: "maskulen" }, { t: "Kim olduğuna bağlı.", c: "sik" }, { t: "Sessize aldım.", c: "gizemli" }] },

        // BÖLÜM 5: FİNAL (The Legacy)
        { text: "17/20. Aynaya baktığında kimi görüyorsun?", bg: "m_17", opts: [{ t: "Bir lideri.", c: "sik" }, { t: "Bir savaşçıyı.", c: "maskulen" }, { t: "Bir gezgini.", c: "enerjik" }, { t: "Bir beyefendiyi.", c: "centilmen" }] },
        { text: "18/20. Hayattaki en büyük lüksün nedir?", bg: "m_18", opts: [{ t: "Zaman.", c: "sik" }, { t: "Sessizlik.", c: "maskulen" }, { t: "Sağlık.", c: "enerjik" }, { t: "Dostluk.", c: "centilmen" }] },
        { text: "19/20. İnsanlar seni yıllar sonra nasıl hatırlasın?", bg: "m_19", opts: [{ t: "Efsanevi bir ikon olarak.", c: "sik" }, { t: "Korkusuz biri olarak.", c: "maskulen" }, { t: "Asil biri olarak.", c: "centilmen" }, { t: "Hiç çözülememiş bir sır olarak.", c: "gizemli" }] },
        { text: "20/20. Son karar. Bu hikayenin kahramanı sensin. İmzan ne olacak?", bg: "m_20", opts: [{ t: "Güç.", c: "maskulen" }, { t: "Zeka.", c: "sik" }, { t: "Tutku.", c: "enerjik" }, { t: "Karakter.", c: "centilmen" }] }
    ]
};

// --- 2. GELİŞMİŞ DEVASA VERİTABANI (AYNI KALDI) ---
const PERFUME_DB = {
    female: [
        { cat: 'romantik', brand: 'GUCCI', name: 'Bloom', img: 'https://fimgs.net/mdimg/perfume/375x500.44894.jpg', desc: 'Ruhunuzu çiçek bahçesine götüren, son derece feminen bir imza.', top: 'Rangoon Sarmaşığı', heart: 'Yasemin Tomurcuğu', base: 'Sümbülteber' },
        { cat: 'romantik', brand: 'PARFUMS DE MARLY', name: 'Delina', img: 'https://fimgs.net/mdimg/perfume/375x500.43235.jpg', desc: 'Modern prenseslerin ikonik kokusu.', top: 'Bergamot, Ravent', heart: 'Türk Gülü', base: 'Kaşmir Ağacı' },
        { cat: 'romantik', brand: 'CHLOÉ', name: 'Signature', img: 'https://fimgs.net/mdimg/perfume/375x500.253.jpg', desc: 'Pudralı gül kokusunun en modern ve zarif hali.', top: 'Şakayık, Liçi', heart: 'Gül, Manolya', base: 'Amber, Sedir' },
        { cat: 'romantik', brand: 'DIOR', name: 'Miss Dior Blooming Bouquet', img: 'https://fimgs.net/mdimg/perfume/375x500.23281.jpg', desc: 'Bir bahar buketinin taze ve ışıltılı dokunuşu.', top: 'Sicilya Mandalinası', heart: 'Pembe Şakayık', base: 'Beyaz Misk' },
        { cat: 'romantik', brand: 'LANCÔME', name: 'Idôle', img: 'https://fimgs.net/mdimg/perfume/375x500.55795.jpg', desc: 'Geleceğin kadınları için temiz, ferah ve ışıltılı bir gül.', top: 'Armut, Bergamot', heart: 'Türk Gülü, Yasemin', base: 'Beyaz Misk, Vanilya' },
        { cat: 'romantik', brand: 'GIVENCHY', name: 'Irresistible', img: 'https://fimgs.net/mdimg/perfume/375x500.60872.jpg', desc: 'Dans eden güllerin ve sarışın ahşabın karşı konulamaz enerjisi.', top: 'Armut, Amber', heart: 'Gül, İris', base: 'Misk, Sedir' },
        { cat: 'romantik', brand: 'MARC JACOBS', name: 'Daisy', img: 'https://fimgs.net/mdimg/perfume/375x500.1361.jpg', desc: 'Güneşli, özgür ve masum papatyaların kokusu.', top: 'Menekşe Yaprağı', heart: 'Menekşe, Yasemin', base: 'Misk, Vanilya' },
        { cat: 'romantik', brand: 'VIKTOR&ROLF', name: 'Flowerbomb', img: 'https://fimgs.net/mdimg/perfume/375x500.255.jpg', desc: 'Binlerce çiçeğin patlamasıyla oluşan büyüleyici bir rüya.', top: 'Çay, Bergamot', heart: 'Orkide, Gül', base: 'Paçuli' },
        { cat: 'romantik', brand: 'AERIN', name: 'Rose de Grasse', img: 'https://fimgs.net/mdimg/perfume/375x500.29707.jpg', desc: 'Grasse güllerinin en saf ve lüks hali.', top: 'Amber', heart: 'Centifolia Gülü', base: 'Misk' },
        { cat: 'romantik', brand: 'JO MALONE', name: 'Red Roses', img: 'https://fimgs.net/mdimg/perfume/375x500.2285.jpg', desc: 'Dünyanın en güzel yedi gülünün romantik karışımı.', top: 'Limon', heart: 'Kırmızı Güller', base: 'Petek Bal' },

        { cat: 'sik', brand: 'CHANEL', name: 'Coco Mademoiselle', img: 'https://fimgs.net/mdimg/perfume/375x500.611.jpg', desc: 'Özgür ruhlu ve zarif kadınların vazgeçilmez modern klasiği.', top: 'Portakal', heart: 'Türk Gülü', base: 'Paçuli, Misk' },
        { cat: 'sik', brand: 'YSL', name: 'Libre', img: 'https://fimgs.net/mdimg/perfume/375x500.56586.jpg', desc: 'Özgürlüğün kokusu. Maskülen lavanta ile feminen portakal çiçeği.', top: 'Mandalina, Lavanta', heart: 'Portakal Çiçeği', base: 'Vanilya, Sedir' },
        { cat: 'sik', brand: 'GIORGIO ARMANI', name: 'Sì', img: 'https://fimgs.net/mdimg/perfume/375x500.18240.jpg', desc: 'İtalyan zarafeti. Hem tatlı hem de sofistike bir duruş.', top: 'Frenk Üzümü', heart: 'Frezya, Gül', base: 'Vanilya, Paçuli' },
        { cat: 'sik', brand: 'VALENTINO', name: 'Voce Viva', img: 'https://fimgs.net/mdimg/perfume/375x500.62776.jpg', desc: 'Sesim, gücüm. Modern kadının ışıltılı ve güçlü yanı.', top: 'Mandalina, Bergamot', heart: 'Portakal Çiçeği', base: 'Kristal Yosun, Vanilya' },
        { cat: 'sik', brand: 'BOTTEGA VENETA', name: 'Bottega Veneta', img: 'https://fimgs.net/mdimg/perfume/375x500.12863.jpg', desc: 'Venedik kırsalının ve lüks deri işçiliğinin kokusu.', top: 'Bergamot, Biber', heart: 'Yasemin', base: 'Deri, Meşe Yosunu' },
        { cat: 'sik', brand: 'BURBERRY', name: 'Her', img: 'https://fimgs.net/mdimg/perfume/375x500.51860.jpg', desc: 'Londra\'nın cesur ve maceracı ruhunu yansıtan meyvemsi bir imza.', top: 'Çilek, Ahududu', heart: 'Yasemin', base: 'Misk, Amber' },
        { cat: 'sik', brand: 'HERMÈS', name: 'Twilly d\'Hermès', img: 'https://fimgs.net/mdimg/perfume/375x500.46145.jpg', desc: 'Genç, baharatlı ve cüretkar bir zarafet.', top: 'Zencefil', heart: 'Sümbülteber', base: 'Sandal Ağacı' },
        { cat: 'sik', brand: 'CARTIER', name: 'La Panthere', img: 'https://fimgs.net/mdimg/perfume/375x500.23295.jpg', desc: 'Vahşi ama bir o kadar zarif. İkonik panterin izinde.', top: 'Kurutulmuş Meyve', heart: 'Gardenya', base: 'Misk, Meşe Yosunu' },
        { cat: 'sik', brand: 'TIFFANY & CO', name: 'Tiffany & Co', img: 'https://fimgs.net/mdimg/perfume/375x500.46237.jpg', desc: 'Pırlanta gibi ışıltılı, saf ve lüks bir dokunuş.', top: 'Mandalina', heart: 'İris Çiçeği', base: 'Paçuli, Misk' },
        { cat: 'sik', brand: 'PRADA', name: 'Infusion d\'Iris', img: 'https://fimgs.net/mdimg/perfume/375x500.1795.jpg', desc: 'Zamansız, temiz ve pudralı bir zarafet simgesi.', top: 'Portakal Çiçeği', heart: 'İris', base: 'Tütsü, Sedir' },

        { cat: 'enerjik', brand: 'DOLCE & GABBANA', name: 'Light Blue', img: 'https://fimgs.net/mdimg/perfume/375x500.1068.jpg', desc: 'Akdeniz\'in ferahlatıcı esintisi ve Sicilya yazlarının neşesi.', top: 'Sicilya Limonu', heart: 'Bambu, Yasemin', base: 'Sedir Ağacı' },
        { cat: 'enerjik', brand: 'VERSACE', name: 'Versense', img: 'https://fimgs.net/mdimg/perfume/375x500.5739.jpg', desc: 'Akdeniz doğasının uyanışını simgeleyen, canlı ve yeşil bir koku.', top: 'Bergamot, İncir', heart: 'Kakule, Yasemin', base: 'Zeytin Ağacı, Misk' },
        { cat: 'enerjik', brand: 'MOSCHINO', name: 'Funny!', img: 'https://fimgs.net/mdimg/perfume/375x500.1226.jpg', desc: 'Eğlenceli, kıpır kıpır ve turunçgil dolu bir gençlik iksiri.', top: 'Acı Portakal', heart: 'Yeşil Çay, Yasemin', base: 'Sedir, Amber' },
        { cat: 'enerjik', brand: 'CHANEL', name: 'Chance Eau Fraiche', img: 'https://fimgs.net/mdimg/perfume/375x500.1483.jpg', desc: 'Fırsatları yakalayanlar için taze, ışıltılı ve enerjik.', top: 'Limon, Sedir', heart: 'Pembe Biber', base: 'Tik Ağacı, İris' },
        { cat: 'enerjik', brand: 'HERMES', name: 'Un Jardin Sur Le Nil', img: 'https://fimgs.net/mdimg/perfume/375x500.18.jpg', desc: 'Nil nehrinde bir gezi. Yeşil mango ve lotusun ferahlığı.', top: 'Yeşil Mango', heart: 'Lotus, Sümbül', base: 'Tütsü, Çınar' },
        { cat: 'enerjik', brand: 'ACQUA DI PARMA', name: 'Blu Mediterraneo', img: 'https://fimgs.net/mdimg/perfume/375x500.1685.jpg', desc: 'Capri adasının portakal kokulu rüzgarları.', top: 'Portakal, Mandalina', heart: 'Kakule', base: 'Karamel, Misk' },
        { cat: 'enerjik', brand: 'JO MALONE', name: 'Lime Basil & Mandarin', img: 'https://fimgs.net/mdimg/perfume/375x500.2279.jpg', desc: 'Mandalina, fesleğen ve beyaz kekiğin modern klasiği.', top: 'Mandalina', heart: 'Fesleğen', base: 'Amber' },
        { cat: 'enerjik', brand: 'TOM FORD', name: 'Neroli Portofino', img: 'https://fimgs.net/mdimg/perfume/375x500.12192.jpg', desc: 'İtalyan rivierasının serin suları ve lüks narenciyeler.', top: 'Bergamot, Limon', heart: 'Portakal Çiçeği', base: 'Amber' },
        { cat: 'enerjik', brand: 'DKNY', name: 'Be Delicious', img: 'https://fimgs.net/mdimg/perfume/375x500.498.jpg', desc: 'New York enerjisi ve yeşil elmanın gevrekliği.', top: 'Salatalık, Greyfurt', heart: 'Yeşil Elma', base: 'Sandal Ağacı' },
        { cat: 'enerjik', brand: 'CLINIQUE', name: 'Happy', img: 'https://fimgs.net/mdimg/perfume/375x500.374.jpg', desc: 'Mutluluğun şişelenmiş hali. Narenciye ve çiçekler.', top: 'Portakal, Greyfurt', heart: 'Mimoza', base: 'Misk' },

        { cat: 'gizemli', brand: 'TOM FORD', name: 'Black Orchid', img: 'https://fimgs.net/mdimg/perfume/375x500.1018.jpg', desc: 'Karanlık, lüks ve şehvetli. Modern bir klasik.', top: 'Trüf, Ylang Ylang', heart: 'Siyah Orkide', base: 'Bitter Çikolata, Paçuli' },
        { cat: 'gizemli', brand: 'DIOR', name: 'Hypnotic Poison', img: 'https://fimgs.net/mdimg/perfume/375x500.219.jpg', desc: 'Yasak meyvenin cazibesi. Büyüleyici bir vanilya rüyası.', top: 'Kayısı, Erik', heart: 'Sümbülteber', base: 'Vanilya, Badem' },
        { cat: 'gizemli', brand: 'MUGLER', name: 'Alien', img: 'https://fimgs.net/mdimg/perfume/375x500.707.jpg', desc: 'Başka bir dünyadan gelen ışık. Güçlü ve gizemli.', top: 'Yasemin', heart: 'Kaşmir Ağacı', base: 'Beyaz Amber' },
        { cat: 'gizemli', brand: 'YSL', name: 'Opium', img: 'https://fimgs.net/mdimg/perfume/375x500.93.jpg', desc: 'Efsanevi, baharatlı ve kışkırtıcı bir doğu masalı.', top: 'Mandalina, Bergamot', heart: 'Mür, Yasemin', base: 'Amber, Vanilya' },
        { cat: 'gizemli', brand: 'VERSACE', name: 'Crystal Noir', img: 'https://fimgs.net/mdimg/perfume/375x500.631.jpg', desc: 'Gizemli gardenya ve sıcak baharatların geceye dokunuşu.', top: 'Zencefil, Biber', heart: 'Gardenya', base: 'Sandal Ağacı' },
        { cat: 'gizemli', brand: 'GIVENCHY', name: 'L\'Interdit Rouge', img: 'https://fimgs.net/mdimg/perfume/375x500.68656.jpg', desc: 'Yasak olanın çekiciliği. Ateşli ve tutkulu.', top: 'Kan Portakalı', heart: 'Sümbülteber', base: 'Sandal Ağacı' },
        { cat: 'gizemli', brand: 'NARCISO RODRIGUEZ', name: 'Musc Noir', img: 'https://fimgs.net/mdimg/perfume/375x500.64761.jpg', desc: 'Derin, bağımlılık yapan ve tenle bütünleşen misk.', top: 'Erik', heart: 'Misk', base: 'Süet' },
        { cat: 'gizemli', brand: 'KILIAN', name: 'Angels\' Share', img: 'https://fimgs.net/mdimg/perfume/375x500.62615.jpg', desc: 'Konyak fıçılarının melek payı. Lüks ve sarhoş edici.', top: 'Konyak', heart: 'Tarçın, Meşe', base: 'Pralin, Vanilya' },
        { cat: 'gizemli', brand: 'JO MALONE', name: 'Velvet Rose & Oud', img: 'https://fimgs.net/mdimg/perfume/375x500.15340.jpg', desc: 'Karanlık gül ve değerli öd ağacının manyetik çekimi.', top: 'Karanfil', heart: 'Şam Gülü', base: 'Öd Ağacı' },
        { cat: 'gizemli', brand: 'BYREDO', name: 'Bibliothèque', img: 'https://fimgs.net/mdimg/perfume/375x500.43798.jpg', desc: 'Eski kitapların, derinin ve mumların huzurlu gizemi.', top: 'Şeftali, Erik', heart: 'Menekşe, Şakayık', base: 'Deri, Vanilya' },

        { cat: 'gurme', brand: 'YSL', name: 'Black Opium', img: 'https://fimgs.net/mdimg/perfume/375x500.25324.jpg', desc: 'Kahve ve vanilyanın bağımlılık yapan rock-chic enerjisi.', top: 'Armut, Pembe Biber', heart: 'Kahve, Yasemin', base: 'Vanilya, Paçuli' },
        { cat: 'gurme', brand: 'KILIAN', name: 'Love, Don\'t Be Shy', img: 'https://fimgs.net/mdimg/perfume/375x500.4322.jpg', desc: 'Rihanna\'nın tercihi. Marshmallow ve portakal çiçeği rüyası.', top: 'Neroli, Bergamot', heart: 'Portakal Çiçeği', base: 'Marshmallow, Karamel' },
        { cat: 'gurme', brand: 'PRADA', name: 'Candy', img: 'https://fimgs.net/mdimg/perfume/375x500.12426.jpg', desc: 'Aşırı dozda karamel ve benzoin ile şımarık bir tatlılık.', top: 'Karamel', heart: 'Pudra', base: 'Benzoin, Vanilya' },
        { cat: 'gurme', brand: 'VIKTOR&ROLF', name: 'Bonbon', img: 'https://fimgs.net/mdimg/perfume/375x500.23316.jpg', desc: 'Karamelize şeftali ve portakal çiçeği şekeri.', top: 'Mandalina, Şeftali', heart: 'Karamel', base: 'Amber' },
        { cat: 'gurme', brand: 'ARIANA GRANDE', name: 'Cloud', img: 'https://fimgs.net/mdimg/perfume/375x500.50384.jpg', desc: 'Krem şanti ve hindistan cevizi bulutlarının üzerinde.', top: 'Lavanta, Bergamot', heart: 'Krem Şanti', base: 'Odunsu Notalar' },
        { cat: 'gurme', brand: 'BILLIE EILISH', name: 'Eilish No. 1', img: 'https://fimgs.net/mdimg/perfume/375x500.70293.jpg', desc: 'Sıcak kakao, vanilya ve baharatlı notaların kucaklaması.', top: 'Şekerli Yapraklar', heart: 'Kakao, Vanilya', base: 'Tonka, Odunsu' },
        { cat: 'gurme', brand: 'DOLCE & GABBANA', name: 'The Only One', img: 'https://fimgs.net/mdimg/perfume/375x500.51249.jpg', desc: 'Menekşe ve kahvenin beklenmedik, tatlı uyumu.', top: 'Menekşe', heart: 'Kahve, İris', base: 'Vanilya, Paçuli' },
        { cat: 'gurme', brand: 'JEAN PAUL GAULTIER', name: 'Scandal', img: 'https://fimgs.net/mdimg/perfume/375x500.45714.jpg', desc: 'Bal ve gardenyanın skandal yaratan birleşimi.', top: 'Kan Portakalı', heart: 'Bal, Gardenya', base: 'Paçuli' },
        { cat: 'gurme', brand: 'SOL DE JANEIRO', name: 'Cheirosa \'62', img: 'https://fimgs.net/mdimg/perfume/375x500.62365.jpg', desc: 'Brezilya plajları, fıstık ve tuzlu karamel.', top: 'Fıstık, Badem', heart: 'Tuzlu Karamel', base: 'Vanilya' },
        { cat: 'gurme', brand: 'KAYALI', name: 'Vanilla | 28', img: 'https://fimgs.net/mdimg/perfume/375x500.53127.jpg', desc: 'Saf esmer şeker ve zengin vanilyanın en yoğun hali.', top: 'Vanilya Orkidesi', heart: 'Esmer Şeker', base: 'Amber, Misk' },

        { cat: 'temiz', brand: 'MAISON MARGIELA', name: 'Lazy Sunday Morning', img: 'https://fimgs.net/mdimg/perfume/375x500.20542.jpg', desc: 'Pazar sabahı temiz çarşafların verdiği huzur ve tazelik.', top: 'Aldehitler', heart: 'İnci Çiçeği', base: 'Beyaz Misk' },
        { cat: 'temiz', brand: 'BYREDO', name: 'Blanche', img: 'https://fimgs.net/mdimg/perfume/375x500.6033.jpg', desc: 'Beyaz rengin parfüme dönüşmüş hali. Saf ve duru.', top: 'Beyaz Gül', heart: 'Menekşe', base: 'Sandal Ağacı' },
        { cat: 'temiz', brand: 'CLEAN', name: 'Warm Cotton', img: 'https://fimgs.net/mdimg/perfume/375x500.2526.jpg', desc: 'Kurutucudan yeni çıkmış sıcacık havlu kokusu.', top: 'Limon', heart: 'Deniz Notaları', base: 'Amber, Misk' },
        { cat: 'temiz', brand: 'JULIETTE HAS A GUN', name: 'Not A Perfume', img: 'https://fimgs.net/mdimg/perfume/375x500.10296.jpg', desc: 'Parfüm değil, sadece temizlik. Teninizin en güzel hali.', top: 'Cetalox', heart: 'Cetalox', base: 'Cetalox' },
        { cat: 'temiz', brand: 'PHILOSOPHY', name: 'Amazing Grace', img: 'https://fimgs.net/mdimg/perfume/375x500.2066.jpg', desc: 'Bergamot ve müge çiçeğinin inanılmaz hafifliği.', top: 'Bergamot', heart: 'Müge Çiçeği', base: 'Misk' },
        { cat: 'temiz', brand: 'NARCISO RODRIGUEZ', name: 'Pure Musc', img: 'https://fimgs.net/mdimg/perfume/375x500.53488.jpg', desc: 'Miskin en saf ve en bağımlılık yapıcı formu.', top: 'Misk', heart: 'Çiçeksi Notalar', base: 'Kaşmir' },
        { cat: 'temiz', brand: 'CHANEL', name: 'No 5 L\'Eau', img: 'https://fimgs.net/mdimg/perfume/375x500.40069.jpg', desc: 'Klasik No 5\'in su gibi berrak ve modern yorumu.', top: 'Limon, Mandalina', heart: 'Gül, Yasemin', base: 'Sedir, Misk' },
        { cat: 'temiz', brand: 'MOSCHINO', name: 'Toy 2', img: 'https://fimgs.net/mdimg/perfume/375x500.51327.jpg', desc: 'Elma ve temizlik hissinin oyuncak ayısı.', top: 'Elma, Mandalina', heart: 'Beyaz Frenk Üzümü', base: 'Misk' },
        { cat: 'temiz', brand: 'ACQUA DI PARMA', name: 'Colonia Pura', img: 'https://fimgs.net/mdimg/perfume/375x500.46083.jpg', desc: 'İtalyan bergamotu ile kristal gibi bir berraklık.', top: 'Bergamot', heart: 'Nergis', base: 'Paçuli, Misk' },
        { cat: 'temiz', brand: 'LE LABO', name: 'Another 13', img: 'https://fimgs.net/mdimg/perfume/375x500.12200.jpg', desc: 'Teninize yapışan, metalik ve temiz bir aura.', top: 'Armut', heart: 'Ambroxan', base: 'Misk' }
    ],
    male: [
        { cat: 'maskulen', brand: 'DIOR', name: 'Sauvage', img: 'https://fimgs.net/mdimg/perfume/375x500.31009.jpg', desc: 'Vahşi doğanın ve asilliğin buluşması. Güçlü bir imza.', top: 'Bergamot', heart: 'Biber, Lavanta', base: 'Ambroxan' },
        { cat: 'maskulen', brand: 'TERRE D\'HERMES', name: 'Terre d\'Hermes', img: 'https://fimgs.net/mdimg/perfume/375x500.17.jpg', desc: 'Toprağın gökyüzüyle buluştuğu yer. Mineral ve odunsu.', top: 'Portakal', heart: 'Biber', base: 'Sedir, Vetiver' },
        { cat: 'maskulen', brand: 'TOM FORD', name: 'Ombré Leather', img: 'https://fimgs.net/mdimg/perfume/375x500.50239.jpg', desc: 'Çölün kalbinden gelen özgür deri kokusu.', top: 'Kakule', heart: 'Deri, Yasemin', base: 'Amber, Yosun' },
        { cat: 'maskulen', brand: 'VIKTOR&ROLF', name: 'Spicebomb Extreme', img: 'https://fimgs.net/mdimg/perfume/375x500.30499.jpg', desc: 'Baharatların patlayıcı ve ateşli gücü.', top: 'Kimyon', heart: 'Karabiber', base: 'Tütün, Vanilya' },
        { cat: 'maskulen', brand: 'BVLGARI', name: 'Man in Black', img: 'https://fimgs.net/mdimg/perfume/375x500.26358.jpg', desc: 'Ateş tanrısının modern yorumu. Rom ve baharatlar.', top: 'Rom, Baharat', heart: 'Deri, Sümbülteber', base: 'Tonka, Guaiac' },
        { cat: 'maskulen', brand: 'YSL', name: 'Kouros', img: 'https://fimgs.net/mdimg/perfume/375x500.735.jpg', desc: 'Tanrıların gücü. Klasik, sert ve hayvansal.', top: 'Kişniş', heart: 'Karanfil', base: 'Misk, Deri' },
        { cat: 'maskulen', brand: 'GUCCI', name: 'Guilty Absolute', img: 'https://fimgs.net/mdimg/perfume/375x500.43040.jpg', desc: 'Kuru, odunsu ve tavizsiz bir deri kokusu.', top: 'Deri', heart: 'Paçuli', base: 'Odunsu Notalar' },
        { cat: 'maskulen', brand: 'BENTLEY', name: 'For Men Intense', img: 'https://fimgs.net/mdimg/perfume/375x500.17666.jpg', desc: 'Lüks arabaların deri koltukları ve rom.', top: 'Bergamot', heart: 'Rom, Tarçın', base: 'Deri, Tütsü' },
        { cat: 'maskulen', brand: 'LALIQUE', name: 'Encre Noire', img: 'https://fimgs.net/mdimg/perfume/375x500.1834.jpg', desc: 'Karanlık bir ormanda vetiverin en koyu hali.', top: 'Selvi', heart: 'Vetiver', base: 'Kaşmir Ağacı' },
        { cat: 'maskulen', brand: 'NARCISO RODRIGUEZ', name: 'For Him Bleu Noir', img: 'https://fimgs.net/mdimg/perfume/375x500.31175.jpg', desc: 'Modern erkeğin gizemli ve çekici karanlığı.', top: 'Hindistan Cevizi', heart: 'Misk', base: 'Sedir, Abanoz' },

        { cat: 'sik', brand: 'CHANEL', name: 'Bleu de Chanel', img: 'https://fimgs.net/mdimg/perfume/375x500.10786.jpg', desc: 'Özgürlüğe adanmış, derin bir odunsu koku.', top: 'Limon, Nane', heart: 'Zencefil', base: 'Tütsü, Sandal' },
        { cat: 'sik', brand: 'PRADA', name: 'L\'Homme', img: 'https://fimgs.net/mdimg/perfume/375x500.39029.jpg', desc: 'Temiz, sabunsu ve inanılmaz derecede sofistike.', top: 'Neroli', heart: 'İris, Menekşe', base: 'Amber' },
        { cat: 'sik', brand: 'ARMANI', name: 'Code Parfum', img: 'https://fimgs.net/mdimg/perfume/375x500.75110.jpg', desc: 'Yenilenmiş bir kod. Güçlü ve zarif.', top: 'Bergamot', heart: 'İris', base: 'Tonka, Sedir' },
        { cat: 'sik', brand: 'YSL', name: 'Y Le Parfum', img: 'https://fimgs.net/mdimg/perfume/375x500.64724.jpg', desc: 'Başarılı erkeğin karanlık ve yoğun imzası.', top: 'Elma, Aldehit', heart: 'Adaçayı', base: 'Tonka, Sedir' },
        { cat: 'sik', brand: 'DIOR', name: 'Homme Intense', img: 'https://fimgs.net/mdimg/perfume/375x500.13016.jpg', desc: 'İrisin en maskülen ve pudralı hali. Tam bir başyapıt.', top: 'Lavanta', heart: 'İris, Amber', base: 'Sedir, Vetiver' },
        { cat: 'sik', brand: 'GIVENCHY', name: 'Gentleman Reserve Privee', img: 'https://fimgs.net/mdimg/perfume/375x500.71457.jpg', desc: 'Viski fıçılarından ilham alan çiçeksi odunsu zarafet.', top: 'Bergamot', heart: 'İris, Kestane', base: 'Viski, Amber' },
        { cat: 'sik', brand: 'HERMES', name: 'H24', img: 'https://fimgs.net/mdimg/perfume/375x500.66037.jpg', desc: 'Teknolojik doğa. Metalik, yeşil ve yenilikçi.', top: 'Adaçayı', heart: 'Nergis', base: 'Gül Ağacı' },
        { cat: 'sik', brand: 'TOM FORD', name: 'Grey Vetiver', img: 'https://fimgs.net/mdimg/perfume/375x500.6697.jpg', desc: 'Karizmatik, serin ve profesyonel vetiver.', top: 'Greyfurt', heart: 'Adaçayı', base: 'Vetiver' },
        { cat: 'sik', brand: 'MONTBLANC', name: 'Explorer', img: 'https://fimgs.net/mdimg/perfume/375x500.52002.jpg', desc: 'Maceracı ruhlar için modern bir klasik.', top: 'Bergamot', heart: 'Vetiver', base: 'Paçuli' },
        { cat: 'sik', brand: 'VALENTINO', name: 'Uomo Born in Roma', img: 'https://fimgs.net/mdimg/perfume/375x500.56327.jpg', desc: 'Roma sokaklarının modern ve asi ruhu.', top: 'Mineral Tuz', heart: 'Adaçayı', base: 'Vetiver' },

        { cat: 'enerjik', brand: 'VERSACE', name: 'Eros', img: 'https://fimgs.net/mdimg/perfume/375x500.16677.jpg', desc: 'Aşk, tutku ve güzelliğin tanrısı. Nane ve vanilya patlaması.', top: 'Nane, Elma', heart: 'Tonka', base: 'Vanilya' },
        { cat: 'enerjik', brand: 'ARMANI', name: 'Acqua di Gio', img: 'https://fimgs.net/mdimg/perfume/375x500.410.jpg', desc: 'Denizin ve rüzgarın ferahlığı. Dünyanın en sevilen kokusu.', top: 'Deniz Notaları', heart: 'Yasemin', base: 'Misk' },
        { cat: 'enerjik', brand: 'PACO RABANNE', name: 'Invictus', img: 'https://fimgs.net/mdimg/perfume/375x500.18471.jpg', desc: 'Yenilmez şampiyonların kupası. Enerjik ve denizel.', top: 'Greyfurt', heart: 'Defne Yaprağı', base: 'Ambergris' },
        { cat: 'enerjik', brand: 'JEAN PAUL GAULTIER', name: 'Le Beau', img: 'https://fimgs.net/mdimg/perfume/375x500.55523.jpg', desc: 'Cennet bahçesinden hindistan cevizi ve bergamot.', top: 'Bergamot', heart: 'Hindistan Cevizi', base: 'Tonka' },
        { cat: 'enerjik', brand: 'DOLCE & GABBANA', name: 'Light Blue Pour Homme', img: 'https://fimgs.net/mdimg/perfume/375x500.1067.jpg', desc: 'Akdeniz erkeğinin çekiciliği ve ferahlığı.', top: 'Greyfurt', heart: 'Biber', base: 'Misk' },
        { cat: 'enerjik', brand: 'ISSEY MIYAKE', name: 'L\'Eau d\'Issey Pour Homme', img: 'https://fimgs.net/mdimg/perfume/375x500.721.jpg', desc: 'Yuzu ve baharatların zamansız ferahlığı.', top: 'Yuzu', heart: 'Hindistan Cevizi', base: 'Vetiver' },
        { cat: 'enerjik', brand: 'AZZARO', name: 'Wanted', img: 'https://fimgs.net/mdimg/perfume/375x500.36626.jpg', desc: 'Hedefi tutturanlar için limon ve zencefil enerjisi.', top: 'Limon', heart: 'Kakule', base: 'Tonka' },
        { cat: 'enerjik', brand: 'RALPH LAUREN', name: 'Polo Blue', img: 'https://fimgs.net/mdimg/perfume/375x500.1198.jpg', desc: 'Okyanusun derin maviliği ve özgürlük.', top: 'Salatalık', heart: 'Fesleğen', base: 'Süet' },
        { cat: 'enerjik', brand: 'DAVINDOFF', name: 'Cool Water', img: 'https://fimgs.net/mdimg/perfume/375x500.507.jpg', desc: 'Okyanus ferahlığının atası. Saf adrenalin.', top: 'Deniz Suyu', heart: 'Nane', base: 'Misk' },
        { cat: 'enerjik', brand: 'CHANEL', name: 'Allure Homme Sport', img: 'https://fimgs.net/mdimg/perfume/375x500.613.jpg', desc: 'Sınırları zorlayan sporcu ruhu. Kremamsı portakal.', top: 'Portakal', heart: 'Biber', base: 'Tonka, Vanilya' },

        { cat: 'gizemli', brand: 'TOM FORD', name: 'Oud Wood', img: 'https://fimgs.net/mdimg/perfume/375x500.1826.jpg', desc: 'Nadir, egzotik ve ayırt edici. Tapınak tütsüleri.', top: 'Gül Ağacı', heart: 'Öd Ağacı', base: 'Tonka, Amber' },
        { cat: 'gizemli', brand: 'AMOUAGE', name: 'Interlude Man', img: 'https://fimgs.net/mdimg/perfume/375x500.15294.jpg', desc: 'Mavi canavar. Kaosun ortasındaki huzur. Yoğun tütsü.', top: 'Kekik', heart: 'Tütsü, Amber', base: 'Deri, Öd' },
        { cat: 'gizemli', brand: 'NASOMATTO', name: 'Black Afgano', img: 'https://fimgs.net/mdimg/perfume/375x500.6093.jpg', desc: 'Karanlık, dumanlı ve hipnotize edici.', top: 'Kenevir', heart: 'Reçine', base: 'Tütsü, Öd' },
        { cat: 'gizemli', brand: 'MAISON FRANCIS KURKDJIAN', name: 'Grand Soir', img: 'https://fimgs.net/mdimg/perfume/375x500.40202.jpg', desc: 'Paris gecelerinin kehribar rengi parıltısı.', top: 'İspanyol Laden', heart: 'Benzoin', base: 'Vanilya, Amber' },
        { cat: 'gizemli', brand: 'INITIO', name: 'Oud for Greatness', img: 'https://fimgs.net/mdimg/perfume/375x500.53641.jpg', desc: 'Kutsal geometri ve öd ağacının yüceliği.', top: 'Safran', heart: 'Öd Ağacı', base: 'Misk, Paçuli' },
        { cat: 'gizemli', brand: 'KILIAN', name: 'Intoxicated', img: 'https://fimgs.net/mdimg/perfume/375x500.27092.jpg', desc: 'Türk kahvesinden ilham alan bağımlılık.', top: 'Kakule', heart: 'Kahve', base: 'Tarçın' },
        { cat: 'gizemli', brand: 'PENHALIGON\'S', name: 'The Tragedy of Lord George', img: 'https://fimgs.net/mdimg/perfume/375x500.40716.jpg', desc: 'Aristokrat, sabunsu ama gizli sırları olan bir koku.', top: 'Brendi', heart: 'Tıraş Sabunu', base: 'Tonka' },
        { cat: 'gizemli', brand: 'XERJOFF', name: 'Naxos', img: 'https://fimgs.net/mdimg/perfume/375x500.30693.jpg', desc: 'Sicilya\'nın kalbi. Bal, tütün ve lavanta.', top: 'Lavanta', heart: 'Bal, Tarçın', base: 'Tütün Yaprağı' },
        { cat: 'gizemli', brand: 'BYREDO', name: 'Tobacco Mandarin', img: 'https://fimgs.net/mdimg/perfume/375x500.63266.jpg', desc: 'Geçmişin dumanlı ve baharatlı izleri.', top: 'Mandalina', heart: 'Deri', base: 'Tütün, Öd' },
        { cat: 'gizemli', brand: 'MEMO PARIS', name: 'African Leather', img: 'https://fimgs.net/mdimg/perfume/375x500.31383.jpg', desc: 'Safari rüzgarı ve baharatlı deri.', top: 'Kakule', heart: 'Sardunya', base: 'Deri, Paçuli' },

        { cat: 'centilmen', brand: 'CREED', name: 'Aventus', img: 'https://fimgs.net/mdimg/perfume/375x500.9828.jpg', desc: 'Güç, vizyon ve başarıyı kutlayan imparator kokusu.', top: 'Ananas, Bergamot', heart: 'Huş Ağacı', base: 'Misk, Meşe Yosunu' },
        { cat: 'centilmen', brand: 'ROJA PARFUMS', name: 'Elysium', img: 'https://fimgs.net/mdimg/perfume/375x500.45229.jpg', desc: 'Cennet bahçelerinden gelen narenciye ve vetiver.', top: 'Greyfurt', heart: 'Ardıç', base: 'Ambergris' },
        { cat: 'centilmen', brand: 'PARFUMS DE MARLY', name: 'Layton', img: 'https://fimgs.net/mdimg/perfume/375x500.39314.jpg', desc: 'Versailles sarayının asaletini taşıyan elma ve vanilya.', top: 'Elma, Lavanta', heart: 'Menekşe', base: 'Vanilya' },
        { cat: 'centilmen', brand: 'ACQUA DI PARMA', name: 'Colonia', img: 'https://fimgs.net/mdimg/perfume/375x500.1681.jpg', desc: '1916\'dan beri değişmeyen İtalyan şıklığı.', top: 'Sicilya Narenciyesi', heart: 'Lavanta', base: 'Biberiye' },
        { cat: 'centilmen', brand: 'GUERLAIN', name: 'L\'Homme Idéal', img: 'https://fimgs.net/mdimg/perfume/375x500.25779.jpg', desc: 'İdeal erkeğin badem ve deri kokusu.', top: 'Badem', heart: 'Kiraz', base: 'Deri' },
        { cat: 'centilmen', brand: 'CARTIER', name: 'Pasha de Cartier', img: 'https://fimgs.net/mdimg/perfume/375x500.59628.jpg', desc: 'Zamanın ötesinde, karizmatik ve seçkin.', top: 'Nane', heart: 'Lavanta', base: 'Sandal Ağacı' },
        { cat: 'centilmen', brand: 'DUNHILL', name: 'Icon', img: 'https://fimgs.net/mdimg/perfume/375x500.29367.jpg', desc: 'İngiliz centilmeninin modern yorumu.', top: 'Neroli', heart: 'Karabiber', base: 'Vetiver' },
        { cat: 'centilmen', brand: 'NISHANE', name: 'Hacivat', img: 'https://fimgs.net/mdimg/perfume/375x500.44174.jpg', desc: 'Gölge oyunlarından ilham alan, kalıcı ve güçlü bir şipre.', top: 'Ananas, Greyfurt', heart: 'Yasemin', base: 'Meşe Yosunu' },
        { cat: 'centilmen', brand: 'FREDERIC MALLE', name: 'Musc Ravageur', img: 'https://fimgs.net/mdimg/perfume/375x500.2831.jpg', desc: 'Sofistike, sıcak ve tensel bir başyapıt.', top: 'Lavanta', heart: 'Tarçın', base: 'Vanilya, Misk' },
        { cat: 'centilmen', brand: 'MAISON MARGIELA', name: 'Jazz Club', img: 'https://fimgs.net/mdimg/perfume/375x500.20541.jpg', desc: 'Brooklyn caz kulübü. Puro, rom ve deri koltuklar.', top: 'Pembe Biber', heart: 'Rom', base: 'Tütün Yaprağı' }
    ]
};
