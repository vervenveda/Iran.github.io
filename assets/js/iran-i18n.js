(function(){
  "use strict";

  const STORAGE_KEY="VNV_IRAN_LANG";
  const TEXT={
    "Skip to main content":"رفتن به محتوای اصلی",
    "Culture · Memory · Inquiry":"فرهنگ · حافظه · پژوهش",
    "Culture":"فرهنگ",
    "Legacy":"میراث",
    "Research":"پژوهش",
    "Sources":"منابع",
    "Free Academy ↗":"آکادمی رایگان ↗",
    "Free Khaemenes Academy ↗":"آکادمی رایگان خامنس ↗",
    "Open 333 →":"باز کردن شبکه ۳۳۳ ←",
    "VERVE N VEDA · COUNTRY CULTURE GATEWAY":"VERVE N VEDA · درگاه فرهنگی کشورها",
    "Iran":"ایران",
    "Art · Music · Script · Legacy · Innovation":"هنر · موسیقی · خط · میراث · نوآوری",
    "A clean doorway into thousands of years of Iranian cultural expression—manuscripts and miniature painting, music and oral transmission, Persian script and calligraphy, gardens and architecture, water engineering, literature, craft, science, and living innovation.":"درگاهی روشن به هزاران سال بیان فرهنگی ایرانی؛ از نسخه‌های خطی و نگارگری، موسیقی و انتقال شفاهی، خط فارسی و خوشنویسی، باغ و معماری، مهندسی آب، ادبیات و صنایع‌دستی تا دانش و نوآوری زنده.",
    "Explore Iran":"کاوش ایران",
    "Research Notebook →":"دفتر پژوهش ←",
    "Hero photograph: Fin Garden, Kashan · Ninaras · 2013 · CC BY 4.0 ·":"عکس اصلی: باغ فین کاشان · Ninaras · ۲۰۱۳ · CC BY 4.0 ·",
    "source":"منبع",
    "Geometry, water, shade, architecture and garden design.":"هندسه، آب، سایه، معماری و طراحی باغ.",
    "SIX DOORWAYS":"شش درگاه",
    "Enter Iran through a cultural thread":"از یک رشته فرهنگی وارد ایران شوید",
    "Each card has a quick-view pop-up for orientation and a dedicated page for deeper learning.":"هر کارت یک نمای سریع برای آشنایی و یک صفحه مستقل برای یادگیری عمیق‌تر دارد.",
    "Art":"هنر",
    "Miniature painting, illumination, carpets, tilework, mirror-work and the garden as visual design.":"نگارگری، تذهیب، فرش، کاشی‌کاری، آینه‌کاری و باغ به‌مثابه طراحی بصری.",
    "Quick view":"نمای سریع",
    "Explore Art →":"کاوش هنر ←",
    "Music":"موسیقی",
    "The Radif, improvisation, tar, setar, santur, kamancheh, ney and regional traditions.":"ردیف، بداهه‌نوازی، تار، سه‌تار، سنتور، کمانچه، نی و سنت‌های منطقه‌ای.",
    "Explore Music →":"کاوش موسیقی ←",
    "Script":"خط",
    "Persian writing, nastaʿlīq, manuscript culture and the relationship between language and visual form.":"نوشتار فارسی، نستعلیق، فرهنگ نسخه‌های خطی و پیوند زبان با فرم بصری.",
    "Explore Script →":"کاوش خط ←",
    "Empires, poetry, gardens, cities, pilgrimage, storytelling and traditions carried across centuries.":"شاهنشاهی‌ها، شعر، باغ‌ها، شهرها، زیارت، روایت‌گری و سنت‌هایی که در طول سده‌ها منتقل شده‌اند.",
    "Explore Legacy →":"کاوش میراث ←",
    "Innovation":"نوآوری",
    "Qanats, hydraulic systems, gardens, urban adaptation, architecture and knowledge shaped by difficult environments.":"قنات‌ها، سامانه‌های آبی، باغ‌ها، سازگاری شهری، معماری و دانشی که در محیط‌های دشوار شکل گرفته است.",
    "Explore Innovation →":"کاوش نوآوری ←",
    "Evidence":"شواهد",
    "Inquiry":"پرسشگری",
    "Research & Academy":"پژوهش و آکادمی",
    "Primary sources, timelines, historical chapters, Academic Evidence, and free Khaemenes Academy learning.":"منابع اولیه، خط زمانی، فصل‌های تاریخی، شواهد دانشگاهی و آموزش رایگان آکادمی خامنس.",
    "Open Research →":"باز کردن پژوهش ←",
    "FREE EDUCATION · KHAEMENES ACADEMY":"آموزش رایگان · آکادمی خامنس",
    "Turn cultural curiosity into academic evidence.":"کنجکاوی فرهنگی را به شواهد دانشگاهی تبدیل کنید.",
    "Choose a portal, investigate a source-led question, save notes in the Iran Research Notebook, then continue into free Academy learning.":"یک درگاه را انتخاب کنید، پرسشی مبتنی بر منبع را بررسی کنید، یادداشت‌ها را در دفتر پژوهش ایران ذخیره کنید و سپس یادگیری رایگان آکادمی را ادامه دهید.",
    "1 · Open Iran Research Notebook":"۱ · باز کردن دفتر پژوهش ایران",
    "2 · Enter Free Academy ↗":"۲ · ورود به آکادمی رایگان ↗",
    "High School Social Studies ↗":"مطالعات اجتماعی دبیرستان ↗",
    "CONTINUITY WITHOUT FLATTENING":"تداوم بدون ساده‌سازی",
    "Iran is many eras, communities and traditions—not one uninterrupted political form.":"ایران مجموعه‌ای از دوره‌ها، جوامع و سنت‌های گوناگون است، نه یک شکل سیاسیِ پیوسته و تغییرناپذیر.",
    "Ancient":"باستان",
    "Elam · Media · Achaemenids":"ایلام · ماد · هخامنشیان",
    "Archaeology, inscriptions, imperial administration and early monumental landscapes.":"باستان‌شناسی، کتیبه‌ها، اداره شاهنشاهی و چشم‌اندازهای یادمانیِ آغازین.",
    "Late Antique":"اواخر باستان",
    "Parthian · Sasanian":"اشکانی · ساسانی",
    "Regional power, religion, trade, court culture and interaction with Rome and Byzantium.":"قدرت منطقه‌ای، دین، تجارت، فرهنگ درباری و تعامل با روم و بیزانس.",
    "Islamic-era":"دوره اسلامی",
    "Poetry · science · manuscript culture":"شعر · دانش · فرهنگ نسخه‌های خطی",
    "Persian literary renewal, dynastic change, scholarship, crafts and urban life.":"نوزایی ادبی فارسی، دگرگونی سلسله‌ها، دانش، صنایع‌دستی و زندگی شهری.",
    "Early modern to modern":"از اوایل دوران جدید تا معاصر",
    "Safavid · Qajar · constitutional change":"صفوی · قاجار · تحول مشروطه",
    "State formation, Shiʿi institutions, artistic patronage, reform and political transformation.":"دولت‌سازی، نهادهای شیعی، حمایت هنری، اصلاحات و دگرگونی سیاسی.",
    "Open the historical research archive →":"باز کردن آرشیو پژوهش تاریخی ←",
    "TRUSTED STARTING POINTS":"نقاط آغاز معتبر",
    "Source the culture, not just the aesthetic.":"فرهنگ را مستند کنید، نه فقط زیبایی‌شناسی را.",
    "UNESCO, Encyclopaedia Iranica, museum collections, primary records and scholarly references anchor the cultural pages.":"یونسکو، دانشنامه ایرانیکا، مجموعه‌های موزه‌ای، اسناد اولیه و منابع پژوهشی پایه صفحات فرهنگی هستند.",
    "Source register →":"فهرست منابع ←",
    "Citation policy →":"سیاست استناد ←",
    "Research archive →":"آرشیو پژوهش ←",
    "IRAN CULTURE":"فرهنگ ایران",
    "Open full page →":"باز کردن صفحه کامل ←",
    "Close":"بستن",
    "Ecosystem":"زیست‌بوم",
    "Iran":"ایران",
    "Culture Portals":"درگاه‌های فرهنگی",
    "Research Archive":"آرشیو پژوهش",
    "Research Notebook":"دفتر پژوهش",
    "Education":"آموزش",
    "Free Khaemenes Academy":"آکادمی رایگان خامنس",
    "High School Social Studies":"مطالعات اجتماعی دبیرستان",
    "World & Diplomacy":"جهان و دیپلماسی",
    "Palestine":"فلسطین",
    "Saudi Arabia":"عربستان سعودی",
    "Network":"شبکه",
    "Verve N Veda Home":"خانه Verve N Veda",
    "333 Network":"شبکه ۳۳۳",
    "Source-led cultural research by Verve N Veda.":"پژوهش فرهنگی مبتنی بر منبع از Verve N Veda.",
    "README":"راهنما",
    "Changelog":"گزارش تغییرات",
    "← Iran Cultural Gateway":"درگاه فرهنگی ایران →",
    "Open Iran Research Notebook":"باز کردن دفتر پژوهش ایران",
    "Enter Free Academy ↗":"ورود به آکادمی رایگان ↗",
    "KHAEMENES ACADEMY":"آکادمی خامنس",
    "Turn this page into a research question.":"این صفحه را به یک پرسش پژوهشی تبدیل کنید.",
    "Use the Iran Research Notebook to record sources, vocabulary, observations, claims, limitations and cross-subject connections.":"با دفتر پژوهش ایران، منابع، واژگان، مشاهدات، ادعاها، محدودیت‌ها و پیوندهای میان‌رشته‌ای را ثبت کنید.",
    "Follow the evidence":"شواهد را دنبال کنید",
    "SOURCES":"منابع",
    "Iran Home":"خانه ایران",
    "Source-led cultural research.":"پژوهش فرهنگی مبتنی بر منبع.",

    "MINIATURE · ILLUMINATION · CARPET · ARCHITECTURAL ORNAMENT":"نگارگری · تذهیب · فرش · آرایه‌های معماری",
    "Iranian visual culture includes manuscript painting, calligraphy, illumination, textiles, carpets, ceramics, tilework, metalwork, mirror-work and designed landscapes. These traditions changed across courts, cities, workshops and communities rather than forming one fixed style.":"فرهنگ بصری ایران نگارگری نسخه‌های خطی، خوشنویسی، تذهیب، منسوجات، فرش، سفال، کاشی‌کاری، فلزکاری، آینه‌کاری و مناظر طراحی‌شده را دربر می‌گیرد. این سنت‌ها در دربارها، شهرها، کارگاه‌ها و جوامع گوناگون دگرگون شده‌اند و یک سبک ثابت واحد نبوده‌اند.",
    "01 / MANUSCRIPT ART":"۰۱ / هنر نسخه‌های خطی",
    "Painting and the page":"نقاشی و صفحه",
    "Persian manuscript arts joined text, image, paper, pigment, gold and calligraphy into carefully designed books.":"هنر نسخه‌پردازی فارسی، متن، تصویر، کاغذ، رنگدانه، طلا و خوشنویسی را در کتاب‌هایی با طراحی دقیق به هم پیوند می‌داد.",
    "Miniature painting":"نگارگری",
    "UNESCO includes the art of miniature among Iran's intangible cultural heritage. Miniatures developed in multiple regional schools and often illustrated poetry, history and courtly literature.":"یونسکو هنر نگارگری را در میان میراث فرهنگی ناملموس مرتبط با ایران ثبت کرده است. نگارگری در مکتب‌های منطقه‌ای گوناگون رشد کرد و اغلب شعر، تاریخ و ادبیات درباری را تصویر می‌کرد.",
    "Illumination":"تذهیب",
    "Tazhib uses gold and intricate ornament to frame and structure manuscripts. UNESCO inscribed the multinational art of illumination in 2023.":"تذهیب با طلا و آرایه‌های پیچیده، ساختار و قاب صفحات نسخه‌های خطی را شکل می‌دهد. یونسکو هنر چندملیتی تذهیب را در سال ۲۰۲۳ ثبت کرد.",
    "Books as designed objects":"کتاب به‌مثابه اثر طراحی‌شده",
    "Fine manuscripts can combine calligraphy, painted scenes, decorated headings, borders and bindings, making the book itself an integrated visual artwork.":"نسخه‌های نفیس می‌توانند خوشنویسی، صحنه‌های نقاشی‌شده، سرعنوان‌های آراسته، حاشیه و جلد را در یک اثر بصری یکپارچه گرد آورند.",
    "02 / TEXTILE & SURFACE":"۰۲ / منسوجات و سطح",
    "Pattern carried across materials":"نقش‌هایی که میان مواد سفر می‌کنند",
    "Iranian design vocabularies move across carpets, textiles, architecture and garden planning.":"واژگان طراحی ایرانی میان فرش، منسوجات، معماری و طرح باغ حرکت می‌کنند.",
    "Carpet weaving":"قالی‌بافی",
    "UNESCO recognizes traditional carpet-weaving skills in Fars and Kashan. Materials, dyes, motifs and teaching practices differ by region.":"یونسکو مهارت‌های سنتی قالی‌بافی در فارس و کاشان را به رسمیت می‌شناسد. مواد، رنگ‌ها، نقش‌ها و شیوه‌های آموزش در مناطق مختلف تفاوت دارند.",
    "Tilework":"کاشی‌کاری",
    "Architectural surfaces in cities such as Isfahan use geometry, vegetal ornament, calligraphy and color to organize large civic and sacred spaces.":"سطوح معماری در شهرهایی مانند اصفهان از هندسه، نقوش گیاهی، خوشنویسی و رنگ برای سامان‌دهی فضاهای بزرگ عمومی و مذهبی بهره می‌برند.",
    "Mirror-work":"آینه‌کاری",
    "Ayeneh-kari, the art of mirror-work in Persian architecture, entered UNESCO's Representative List in 2025.":"آینه‌کاری، هنر کار با آینه در معماری ایرانی، در سال ۲۰۲۵ وارد فهرست نماینده میراث فرهنگی ناملموس یونسکو شد.",

    "RADIF · IMPROVISATION · INSTRUMENT · TRANSMISSION":"ردیف · بداهه‌نوازی · ساز · انتقال",
    "Iranian classical and regional music traditions are built through listening, memory, technique, improvisation and long teacher-student transmission. The Radif provides a central repertoire, while regional forms preserve additional instruments, languages and performance practices.":"سنت‌های موسیقی کلاسیک و منطقه‌ای ایران بر شنیدن، حافظه، فن، بداهه‌نوازی و انتقال طولانی‌مدت استاد به شاگرد استوارند. ردیف مجموعه‌ای مرکزی فراهم می‌کند و سنت‌های منطقه‌ای سازها، زبان‌ها و شیوه‌های اجرایی دیگری را حفظ می‌کنند.",
    "01 / RADIF":"۰۱ / ردیف",
    "A repertoire designed for living performance":"مجموعه‌ای برای اجرای زنده",
    "UNESCO describes the Radif as the traditional repertoire at the heart of Iranian classical music.":"یونسکو ردیف را مجموعه سنتیِ مرکزی در موسیقی کلاسیک ایران توصیف می‌کند.",
    "More than 250 gushe":"بیش از ۲۵۰ گوشه",
    "The Radif organizes more than 250 melodic units called gushe into modal cycles.":"ردیف بیش از ۲۵۰ واحد ملودیک به نام گوشه را در چرخه‌های مُدال سامان می‌دهد.",
    "Memory and improvisation":"حافظه و بداهه‌نوازی",
    "Musicians spend years learning the repertoire, then use its materials in improvisation and composition.":"نوازندگان سال‌ها این مجموعه را می‌آموزند و سپس مواد آن را در بداهه‌نوازی و آهنگسازی به کار می‌گیرند.",
    "Oral transmission":"انتقال شفاهی",
    "The tradition has historically passed from master to disciple through sustained study and performance.":"این سنت در طول تاریخ از طریق آموزش و اجرای پیوسته از استاد به شاگرد منتقل شده است.",
    "02 / INSTRUMENTS & REGIONS":"۰۲ / سازها و مناطق",
    "Many sounds, many traditions":"صداهای بسیار، سنت‌های بسیار",
    "Iranian musical life extends beyond one classical canon.":"زندگی موسیقایی ایران فراتر از یک سنت کلاسیک واحد است.",
    "Tar & setar":"تار و سه‌تار",
    "Long-necked lutes are central to Persian classical practice and appear in historical collections as well as modern performance.":"سازهای زهی دسته‌بلند در موسیقی کلاسیک فارسی جایگاهی مرکزی دارند و هم در مجموعه‌های تاریخی و هم در اجرای معاصر دیده می‌شوند.",
    "Santur, kamancheh & ney":"سنتور، کمانچه و نی",
    "Hammered zither, bowed spike fiddle and reed flute each bring different timbres and techniques to classical ensembles.":"سنتورِ مضرابی، کمانچه آرشه‌ای و نی هر یک رنگ صوتی و فن متفاوتی به گروه‌های کلاسیک می‌آورند.",
    "Regional traditions":"سنت‌های منطقه‌ای",
    "UNESCO also recognizes the music of the Bakhshis of Khorasan, dotar traditions and kamancheh craftsmanship and playing.":"یونسکو همچنین موسیقی بخشی‌های خراسان، سنت‌های دوتار و ساخت و نوازندگی کمانچه را به رسمیت می‌شناسد.",

    "PERSIAN · NASTAʿLIQ · CALLIGRAPHY · MANUSCRIPT":"فارسی · نستعلیق · خوشنویسی · نسخه خطی",
    "Persian writing is both a language technology and a visual art. Modern Persian uses an Arabo-Persian script, while calligraphic traditions such as nastaʿlīq gave poetry and manuscripts a distinctive visual rhythm.":"نوشتار فارسی هم فناوری زبان است و هم هنر بصری. فارسی امروز از خط فارسی-عربی استفاده می‌کند و سنت‌هایی مانند نستعلیق به شعر و نسخه‌های خطی ریتم بصری ویژه‌ای بخشیده‌اند.",
    "01 / WRITING SYSTEM":"۰۱ / نظام نوشتاری",
    "Persian on the page":"فارسی بر صفحه",
    "The modern Persian writing system developed through adaptation rather than simple copying.":"نظام نوشتاری فارسی امروز از راه سازگارسازی شکل گرفت، نه صرفاً کپی‌برداری.",
    "Arabo-Persian script":"خط فارسی-عربی",
    "Encyclopaedia Iranica describes modern Persian as written in the Arabo-Persian script.":"دانشنامه ایرانیکا فارسی امروز را زبانی می‌داند که با خط فارسی-عربی نوشته می‌شود.",
    "Persian additions":"افزوده‌های فارسی",
    "Persian added letters for sounds not represented in the Arabic alphabet, including p, č, ž and g.":"فارسی برای صداهایی که در الفبای عربی نماینده نداشتند، حروفی مانند پ، چ، ژ و گ را افزود.",
    "Right to left":"راست به چپ",
    "Persian is written right to left, and most letters connect within words, giving typography a strongly flowing structure.":"فارسی از راست به چپ نوشته می‌شود و بیشتر حروف درون واژه‌ها به هم می‌پیوندند؛ ویژگی‌ای که به تایپوگرافی آن جریان بصری مشخصی می‌دهد.",
    "02 / CALLIGRAPHY":"۰۲ / خوشنویسی",
    "Writing becomes composition":"نوشتن به ترکیب‌بندی تبدیل می‌شود",
    "Calligraphy turns language into measured visual form.":"خوشنویسی زبان را به فرمی بصری و سنجیده تبدیل می‌کند.",
    "Nastaʿlīq":"نستعلیق",
    "Nastaʿlīq became especially associated with Persian poetry and literary manuscripts.":"نستعلیق به‌ویژه با شعر فارسی و نسخه‌های ادبی پیوند یافت.",
    "Safeguarding":"پاسداری",
    "UNESCO selected Iran's national calligraphy safeguarding programme for its Register of Good Safeguarding Practices in 2021.":"یونسکو برنامه ملی پاسداری از هنر سنتی خوشنویسی در ایران را در سال ۲۰۲۱ برای فهرست شیوه‌های خوب پاسداری برگزید.",
    "Manuscript integration":"یکپارچگی نسخه",
    "Calligraphy can be combined with illumination, diagonal text blocks, borders, miniatures and bindings as one designed object.":"خوشنویسی می‌تواند با تذهیب، سطرهای مورب، حاشیه، نگارگری و جلد در قالب یک اثر طراحی‌شده یکپارچه شود.",

    "ARCHAEOLOGY · POETRY · GARDENS · CITIES · LIVING HERITAGE":"باستان‌شناسی · شعر · باغ‌ها · شهرها · میراث زنده",
    "Iran's legacy is plural. Archaeological sites, imperial records, religious traditions, poetry, cities, gardens, craft knowledge and oral practices come from different periods and communities. Continuity matters, but so do rupture, migration, exchange and political change.":"میراث ایران چندگانه است. محوطه‌های باستانی، اسناد شاهنشاهی، سنت‌های دینی، شعر، شهرها، باغ‌ها، دانش صنایع‌دستی و شیوه‌های شفاهی از دوره‌ها و جوامع مختلف آمده‌اند. تداوم مهم است، اما گسست، مهاجرت، تبادل و تحول سیاسی نیز اهمیت دارند.",
    "01 / DEEP TIME":"۰۱ / ژرفای زمان",
    "Many historical Irans":"ایران‌های تاریخی متعدد",
    "The word Iran links long histories, but ancient empires, later dynasties and the modern state should not be treated as identical institutions.":"نام ایران تاریخ‌های طولانی را به هم پیوند می‌دهد، اما امپراتوری‌های باستان، سلسله‌های بعدی و دولت مدرن را نباید نهادهایی یکسان دانست.",
    "Ancient landscapes":"چشم‌اندازهای باستانی",
    "Susa, Persepolis, Pasargadae and Bisotun preserve archaeological and inscriptional evidence across major ancient periods.":"شوش، تخت‌جمشید، پاسارگاد و بیستون شواهد باستان‌شناختی و کتیبه‌ای مهمی از دوره‌های باستانی حفظ کرده‌اند.",
    "Late-antique Iran":"ایران در اواخر باستان",
    "The Sasanian period produced powerful institutions, monumental landscapes and long interaction with Roman and Byzantine worlds.":"دوره ساسانی نهادهای قدرتمند، چشم‌اندازهای یادمانی و تعامل طولانی با جهان روم و بیزانس پدید آورد.",
    "Islamic-era transformation":"دگرگونی در دوره اسلامی",
    "Persian language, literature, scholarship and art flourished through new dynasties, religious institutions and regional networks.":"زبان و ادبیات فارسی، دانش و هنر در بستر سلسله‌های جدید، نهادهای دینی و شبکه‌های منطقه‌ای شکوفا شدند.",
    "02 / LIVING MEMORY":"۰۲ / حافظه زنده",
    "Heritage still practiced":"میراثی که هنوز زندگی می‌شود",
    "Legacy survives not only in monuments but in skills and social practices.":"میراث نه فقط در بناها، بلکه در مهارت‌ها و شیوه‌های اجتماعی نیز ادامه می‌یابد.",
    "Poetry & storytelling":"شعر و روایت‌گری",
    "Ferdowsi, Saʿdi, Hafez, Rumi and other writers became part of Persianate literary memory far beyond modern Iran's borders.":"فردوسی، سعدی، حافظ، مولوی و دیگر نویسندگان بخشی از حافظه ادبی فارسی‌زبان در گستره‌ای فراتر از مرزهای ایران امروز شده‌اند.",
    "Nowruz & seasonal traditions":"نوروز و آیین‌های فصلی",
    "Iran participates in multinational living traditions including Nowruz, Yalda, Mehregan and Sadeh.":"ایران در سنت‌های زنده و چندملیتی مانند نوروز، یلدا، مهرگان و سده مشارکت دارد.",
    "Craft transmission":"انتقال مهارت‌های سنتی",
    "Carpet weaving, musical repertoires, calligraphy, miniature painting and instrument making continue through teaching and practice.":"قالی‌بافی، رپرتوارهای موسیقی، خوشنویسی، نگارگری و سازسازی از راه آموزش و تمرین ادامه پیدا می‌کنند.",

    "WATER · CLIMATE · ENGINEERING · GARDEN · CITY":"آب · اقلیم · مهندسی · باغ · شهر",
    "Innovation in Iran can be studied through technologies that solved practical problems: moving water through dry landscapes, shaping microclimates, building durable urban systems, coordinating communal maintenance, and joining engineering with beauty.":"نوآوری در ایران را می‌توان از خلال فناوری‌هایی مطالعه کرد که مسائل عملی را حل کرده‌اند: انتقال آب در سرزمین‌های خشک، شکل‌دادن به ریزاقلیم، ساخت سامانه‌های شهری پایدار، هماهنگی نگهداری جمعی و پیوند مهندسی با زیبایی.",
    "01 / QANAT":"۰۱ / قنات",
    "Gravity as infrastructure":"گرانش به‌مثابه زیرساخت",
    "The Persian qanat is a technological system for moving groundwater over long distances without mechanical pumping.":"قنات ایرانی سامانه‌ای فناورانه برای انتقال آب زیرزمینی در مسافت‌های طولانی بدون پمپاژ مکانیکی است.",
    "Underground flow":"جریان زیرزمینی",
    "A mother well reaches an aquifer and a gently sloping tunnel carries water by gravity toward fields and settlements.":"چاه مادر به سفره آب زیرزمینی می‌رسد و تونلی با شیب ملایم، آب را با نیروی گرانش به سوی مزارع و سکونتگاه‌ها می‌برد.",
    "Maintenance shafts":"میله‌های دسترسی",
    "Vertical shafts provide access for excavation, ventilation and maintenance along the tunnel.":"میله‌های عمودی امکان حفاری، تهویه و نگهداری در طول تونل را فراهم می‌کنند.",
    "Community management":"مدیریت جمعی",
    "UNESCO notes that traditional systems of shared management and water distribution remain part of the qanat tradition.":"یونسکو یادآور می‌شود که نظام‌های سنتی مدیریت مشترک و توزیع آب همچنان بخشی از سنت قنات‌اند.",
    "02 / DESIGNED ENVIRONMENTS":"۰۲ / محیط‌های طراحی‌شده",
    "Engineering and aesthetics meet":"دیدار مهندسی و زیبایی‌شناسی",
    "Iranian innovation often joins environmental adaptation with visual order.":"نوآوری ایرانی اغلب سازگاری محیطی را با نظم بصری پیوند می‌دهد.",
    "Persian Garden":"باغ ایرانی",
    "UNESCO describes the Persian Garden as combining geometry, water management, architecture, botany and agriculture.":"یونسکو باغ ایرانی را ترکیبی از هندسه، مدیریت آب، معماری، گیاه‌شناسی و کشاورزی توصیف می‌کند.",
    "Hydraulic systems":"سامانه‌های آبی",
    "The Shushtar Historical Hydraulic System demonstrates large-scale water diversion, channels, mills and urban infrastructure.":"سازه‌های آبی تاریخی شوشتر نمونه‌ای از انحراف آب در مقیاس بزرگ، کانال‌ها، آسیاب‌ها و زیرساخت شهری است.",
    "Climate-conscious cities":"شهرهای سازگار با اقلیم",
    "Historic cities such as Yazd developed architecture adapted to heat, aridity, water scarcity and dense urban life.":"شهرهای تاریخی مانند یزد معماری‌ای پرورش دادند که با گرما، خشکی، کمبود آب و زندگی متراکم شهری سازگار بود.",

    "Starting sources":"منابع آغازین",
    "UNESCO · Iran intangible heritage":"یونسکو · میراث ناملموس ایران",
    "UNESCO · Persian Garden":"یونسکو · باغ ایرانی",
    "UNESCO · Radif of Iranian music":"یونسکو · ردیف موسیقی ایرانی",
    "Encyclopaedia Iranica · writing systems":"دانشنامه ایرانیکا · نظام‌های نوشتاری",
    "UNESCO · calligraphy safeguarding":"یونسکو · پاسداری از خوشنویسی",
    "UNESCO · Iran World Heritage":"یونسکو · میراث جهانی ایران",
    "Encyclopaedia Iranica · Iran":"دانشنامه ایرانیکا · ایران",
    "UNESCO · Persian Qanat":"یونسکو · قنات ایرانی",
    "Iran source register":"فهرست منابع ایران",
    "Iran Research Notebook":"دفتر پژوهش ایران"
  };

  const TITLES={
    home:"ایران | هنر · موسیقی · خط · میراث · نوآوری",
    art:"هنر | ایران · Verve N Veda",
    music:"موسیقی | ایران · Verve N Veda",
    script:"خط | ایران · Verve N Veda",
    legacy:"میراث | ایران · Verve N Veda",
    innovation:"نوآوری | ایران · Verve N Veda"
  };

  const ATTR={
    "Open ecosystem menu":"باز کردن منوی زیست‌بوم",
    "Close ecosystem menu":"بستن منوی زیست‌بوم",
    "Pause 333 Network ticker":"توقف نوار شبکه ۳۳۳",
    "Resume 333 Network ticker":"ادامه نوار شبکه ۳۳۳",
    "Close quick view":"بستن نمای سریع",
    "Fin Garden in Kashan, Iran":"باغ فین در کاشان، ایران",
    "Safavid Persian miniature from Shiraz, second half of the sixteenth century":"نگارگری فارسی صفوی از شیراز، نیمه دوم سده شانزدهم",
    "Persian tar made in Isfahan in 1898":"تار ایرانی ساخته‌شده در اصفهان، ۱۸۹۸",
    "Nasta'liq Persian calligraphy by Mirza Mohammad Kazem Tehrani":"خوشنویسی نستعلیق فارسی اثر میرزا محمدکاظم تهرانی",
    "Inside a qanat tunnel near Isfahan, Iran":"درون تونل قنات در نزدیکی اصفهان، ایران"
  };

  const originalText=new WeakMap();
  const originalAttr=new WeakMap();
  let current="en";

  function shouldSkip(node){
    const p=node.parentElement;
    return !p || !!p.closest("script,style,noscript,code,pre");
  }

  function translateTextNode(node){
    if(shouldSkip(node)) return;
    const raw=node.nodeValue;
    if(!raw || !raw.trim()) return;
    if(!originalText.has(node)) originalText.set(node,raw);
    const original=originalText.get(node);
    if(current==="en"){
      if(node.nodeValue!==original) node.nodeValue=original;
      return;
    }
    const leading=(original.match(/^\s*/)||[""])[0];
    const trailing=(original.match(/\s*$/)||[""])[0];
    const core=original.trim();
    const fa=TEXT[core];
    if(fa) node.nodeValue=leading+fa+trailing;
  }

  function translateAttributes(el){
    if(!(el instanceof Element)) return;
    const attrs=["aria-label","title","alt"];
    let saved=originalAttr.get(el);
    if(!saved){saved={};originalAttr.set(el,saved)}
    attrs.forEach(name=>{
      if(!el.hasAttribute(name)) return;
      if(!(name in saved)) saved[name]=el.getAttribute(name);
      const original=saved[name];
      if(current==="en") el.setAttribute(name,original);
      else if(ATTR[original]) el.setAttribute(name,ATTR[original]);
    });
  }

  function walk(root=document.body){
    if(!root) return;
    if(root.nodeType===Node.TEXT_NODE){translateTextNode(root);return}
    if(root.nodeType===Node.ELEMENT_NODE) translateAttributes(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    let n;
    while((n=walker.nextNode())){
      if(n.nodeType===Node.TEXT_NODE) translateTextNode(n);
      else translateAttributes(n);
    }
  }

  function setToggle(){
    const b=document.getElementById("languageToggle");
    if(!b) return;
    b.textContent=current==="fa"?"English":"فارسی";
    b.setAttribute("aria-label",current==="fa"?"Switch to English":"تغییر زبان به فارسی");
    b.setAttribute("aria-pressed",String(current==="fa"));
  }

  function apply(lang){
    current=lang==="fa"?"fa":"en";
    document.documentElement.lang=current;
    document.documentElement.dir=current==="fa"?"rtl":"ltr";
    document.body.dataset.language=current;
    walk(document.body);
    const page=document.body.dataset.i18nPage||"home";
    document.title=current==="fa"?(TITLES[page]||TITLES.home):(document.body.dataset.enTitle||document.title);
    setToggle();
    try{localStorage.setItem(STORAGE_KEY,current)}catch(e){}
    window.dispatchEvent(new CustomEvent("iran-language-change",{detail:{language:current}}));
  }

  function init(){
    const body=document.body;
    if(!body) return;
    if(!body.dataset.enTitle) body.dataset.enTitle=document.title;
    const b=document.getElementById("languageToggle");
    if(b) b.addEventListener("click",()=>apply(current==="fa"?"en":"fa"));
    let saved="en";
    try{saved=localStorage.getItem(STORAGE_KEY)||"en"}catch(e){}
    apply(saved);
    const observer=new MutationObserver(records=>{
      if(current!=="fa") return;
      records.forEach(r=>r.addedNodes.forEach(n=>walk(n)));
    });
    observer.observe(document.body,{childList:true,subtree:true});
    window.IranI18n=Object.freeze({apply,language:()=>current});
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();