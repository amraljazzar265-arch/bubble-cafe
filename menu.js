/* ============================================================
   Bubble Café — بيانات المنيو
   هذا الملف تكتبه لوحة التحكم. عدّل الأسعار والتوفّر من /admin
   وليس من هنا، حتى لا يضيع التعديل مع أول حفظ من اللوحة.

   soldout: true  =  الصنف غير متوفّر اليوم (يظهر بالمنيو ولا يُطلب)
   ============================================================ */
const MENU_VERSION = 1786815756949;
const P = [
  {"img":"03.jpeg","cat":"hot","ar":"إسبيرسو","en":"Espresso","d":"جرعة مركّزة من أجود حبوب البن.","price":"60 سنجل / 100 دبل","note":"إضافة مبيّض 20 ل.س","opts":[{"ar":"سنجل","p":60},{"ar":"دبل","p":100}],"extra":{"ar":"إضافة مبيّض","p":20,"off":"بدون مبيّض","title":"المبيّض"}},
  {"img":"14.jpeg","cat":"hot","ar":"أمريكانو","en":"Americano","d":"إسبريسو ممدود بالماء الساخن.","price":"80 / 120","opts":[{"ar":"صغير","p":80},{"ar":"كبير","p":120}]},
  {"img":"28.jpeg","cat":"hot","ar":"كابتشينو","en":"Cappuccino","d":"إسبريسو مع رغوة حليب مخمليّة.","price":"80 / 100","opts":[{"ar":"صغير","p":80},{"ar":"كبير","p":100}]},
  {"img":"31.jpeg","cat":"hot","ar":"لاتيه","en":"Latte","d":"حليب مبخّر ناعم فوق إسبريسو.","price":"130"},
  {"img":"23.jpeg","cat":"hot","ar":"سبانيش لاتيه","en":"Spanish Latte","d":"لاتيه بالحليب المكثّف المحلّى.","price":"150"},
  {"img":"29.jpeg","cat":"hot","ar":"كراميل لاتيه","en":"Caramel Latte","d":"لاتيه بلمسة كراميل ذهبية.","price":"150"},
  {"img":"32.jpeg","cat":"hot","ar":"موكا","en":"Mocha","d":"إسبريسو وشوكولاتة وحليب.","price":"150"},
  {"img":"40.jpeg","cat":"hot","ar":"وايت موكا","en":"White Mocha","d":"موكا بالشوكولاتة البيضاء.","price":"150"},
  {"img":"39.jpeg","cat":"hot","ar":"هوت شوكليت","en":"Hot Chocolate","d":"شوكولاتة ساخنة كريمية.","price":"80 / 100","opts":[{"ar":"صغير","p":80},{"ar":"كبير","p":100}]},
  {"img":"41.jpg","cat":"hot","ar":"نسكافيه","en":"Nescafe","d":"نسكافيه ساخن سريع التحضير.","price":"60 / 100","opts":[{"ar":"صغير","p":60},{"ar":"كبير","p":100}]},
  {"img":"26.jpeg","cat":"hot","ar":"3 in 1","en":"3 in 1","d":"قهوة سريعة بطعم متكامل.","price":"80 / 100","opts":[{"ar":"صغير","p":80},{"ar":"كبير","p":100}]},
  {"img":"27.jpeg","cat":"hot","ar":"V60 Hot","en":"V60 Hot","d":"تقطير يدوي يبرز نكهة الحبة.","price":"200"},
  {"img":"42.jpg","cat":"cold","ar":"آيس أمريكانو","en":"Iced Americano","d":"أمريكانو بارد منعش على الثلج.","price":"120"},
  {"img":"09.jpeg","cat":"cold","ar":"آيس لاتيه","en":"Iced Latte","d":"لاتيه بارد منعش على الثلج.","price":"150"},
  {"img":"06.jpeg","cat":"cold","ar":"آيس سبانيش لاتيه","en":"Iced Spanish Latte","d":"سبانيش لاتيه مثلّج بالحليب المكثّف.","price":"190"},
  {"img":"07.jpeg","cat":"cold","ar":"آيس كراميل لاتيه","en":"Iced Caramel Latte","d":"كراميل لاتيه بارد بطبقات ذهبية.","price":"190"},
  {"img":"10.jpeg","cat":"cold","ar":"آيس موكا","en":"Iced Mocha","d":"موكا باردة بالشوكولاتة.","price":"190"},
  {"img":"11.jpeg","cat":"cold","ar":"آيس وايت موكا","en":"Iced White Mocha","d":"وايت موكا مثلّجة كريمية.","price":"190"},
  {"img":"05.jpeg","cat":"cold","ar":"V60 Cold","en":"V60 Cold","d":"تقطير V60 على الثلج.","price":"250"},
  {"img":"08.jpg","cat":"bubble","ar":"آيس كراميل لاتيه بابل","en":"Iced Caramel Latte Bubble","d":"كراميل لاتيه مثلّج مع لؤلؤ البوبا.","price":"250","star":true},
  {"img":"43.jpg","cat":"bubble","ar":"آيس سبانيش لاتيه بابل","en":"Iced Spanish Latte Bubble","d":"سبانيش لاتيه مثلّج مع لؤلؤ البوبا.","price":"240","star":true},
  {"img":"20.jpg","cat":"bubble","ar":"حليب وفريز بابل","en":"Strawberry Milk Bubble","d":"حليب الفراولة مع لؤلؤ البوبا.","price":"240","star":true},
  {"img":"44.jpg","cat":"bubble","ar":"آيس موكا بابل","en":"Iced Mocha Bubble","d":"موكا مثلّجة مع لؤلؤ البوبا.","price":"250","star":true},
  {"img":"19.jpg","cat":"mojito","ar":"بلو هاواي","en":"Blue Hawaii","d":"أزرق استوائي منعش.","price":"190","star":true},
  {"img":"18.jpg","cat":"mojito","ar":"بلو بيري","en":"Blueberry","d":"توت أزرق حلو ومنعش.","price":"190"},
  {"img":"25.jpg","cat":"mojito","ar":"فريز","en":"Strawberry","d":"فراولة منعشة على الثلج.","price":"190 / 260","boba":"260","opts":[{"ar":"بدون بوبا","p":190},{"ar":"مع بوبا","p":260}]},
  {"img":"17.jpg","cat":"mojito","ar":"بطيخ","en":"Watermelon","d":"بطيخ منعش على الثلج.","price":"190"},
  {"img":"22.jpg","cat":"mojito","ar":"رمان","en":"Pomegranate","d":"رمان طبيعي منعش.","price":"190"},
  {"img":"16.jpg","cat":"mojito","ar":"باشن فروت","en":"Passion Fruit","d":"نكهة الباشن فروت الاستوائية.","price":"190 / 260","boba":"260","opts":[{"ar":"بدون بوبا","p":190},{"ar":"مع بوبا","p":260}]},
  {"img":"30.jpg","cat":"mojito","ar":"كيوي","en":"Kiwi","d":"كيوي أخضر منعش.","price":"190","star":true},
  {"img":"45.jpg","cat":"mojito","ar":"رازبيري","en":"Raspberry","d":"توت العليق المنعش.","price":"190"},
  {"img":"46.jpg","cat":"mojito","ar":"مانجا","en":"Mango","d":"مانجا استوائية كريمية.","price":"190 / 260","boba":"260","opts":[{"ar":"بدون بوبا","p":190},{"ar":"مع بوبا","p":260}]},
  {"img":"04.jpg","cat":"mojito","ar":"ليمون","en":"Lemon","d":"ليمون ونعناع منعش على الثلج.","price":"220 / 260","boba":"260","opts":[{"ar":"بدون بوبا","p":220},{"ar":"مع بوبا","p":260}]},
  {"img":"mix-4.webp","cat":"mojito","ar":"بلوبيري بلو هاواي","en":"Blueberry Blue Hawaii","d":"توت أزرق مع بلو هاواي.","price":"220","deck":"mix"},
  {"img":"mix-5.webp","cat":"mojito","ar":"كيوي ليمون","en":"Kiwi Lemon","d":"كيوي مع ليمون.","price":"220","deck":"mix"},
  {"img":"mix-1.webp","cat":"mojito","ar":"تروبيكال فيوجن","en":"Tropical Fusion","d":"مانجا مع باشن فروت.","price":"220","deck":"mix"},
  {"img":"mix-2.webp","cat":"mojito","ar":"بوم راز","en":"PomeRazz","d":"رمان مع رازبيري.","price":"220","deck":"mix"},
  {"img":"mix-3.webp","cat":"mojito","ar":"بيري ميلون","en":"Berry Melon","d":"فراولة مع بطيخ.","price":"220","deck":"mix"},
  {"img":"34.jpg","cat":"shake","ar":"شوكولا","en":"Chocolate","d":"شوكولاتة غنية ومثلّجة.","price":"190"},
  {"img":"35.jpg","cat":"shake","ar":"فانيلا","en":"Vanilla","d":"فانيلا كريمية كلاسيكية.","price":"190"},
  {"img":"36.jpg","cat":"shake","ar":"فريز","en":"Strawberry","d":"فراولة طازجة ومثلّجة.","price":"190"},
  {"img":"37.jpg","cat":"shake","ar":"كيندر","en":"Kinder","d":"بنكهة كيندر المحبوبة.","price":"230","star":true},
  {"img":"38.jpg","cat":"shake","ar":"لوتس","en":"Lotus","d":"بسكويت لوتس كراميلي.","price":"190","star":true},
  {"img":"33.jpg","cat":"shake","ar":"براونيز","en":"Brownies","d":"ميلك شيك بقطع البراوني.","price":"230","star":true}
];
