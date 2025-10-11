import type { MultilingualQuestion } from '../../types/multilingualQuestion';

// Multilingual version of Traffic Lights & Signals questions
export const trafficLightsSignalsMultilingual: MultilingualQuestion[] = [
  {
    id: 'q-tls-1',
    text: {
      en: 'You are approaching traffic lights that have just changed to amber (yellow). What is the general rule you should follow?',
      nl: 'Je nadert verkeerslichten die net op oranje (geel) zijn gesprongen. Wat is de algemene regel die je moet volgen?',
      ar: 'أنت تقترب من إشارات المرور التي تحولت للتو إلى الكهرماني (الأصفر). ما هي القاعدة العامة التي يجب عليك اتباعها؟'
    },
    options: [
      {
        id: 'q-tls-1o1',
        text: {
          en: 'Accelerate to pass through before it turns red.',
          nl: 'Versnel om erdoorheen te rijden voordat het rood wordt.',
          ar: 'تسريع المرور قبل أن يتحول إلى الأحمر.'
        }
      },
      {
        id: 'q-tls-1o2',
        text: {
          en: 'Stop before the stop line, unless you are so close that to stop safely would cause an accident.',
          nl: 'Stop voor de stopstreep, tenzij je zo dichtbij bent dat veilig stoppen een ongeval zou veroorzaken.',
          ar: 'توقف قبل خط التوقف، إلا إذا كنت قريبًا جدًا بحيث يؤدي التوقف بأمان إلى وقوع حادث.'
        }
      },
      {
        id: 'q-tls-1o3',
        text: {
          en: 'Continue at the same speed as it means the lights are about to turn green.',
          nl: 'Ga door met dezelfde snelheid omdat dit betekent dat de lichten op groen gaan springen.',
          ar: 'استمر بنفس السرعة لأن ذلك يعني أن الإشارات على وشك التحول إلى الأخضر.'
        }
      }
    ],
    correctAnswerId: 'q-tls-1o2',
    explanation: {
      en: 'Amber means stop unless you\'ve already crossed the stop line or are so close that stopping suddenly might cause a collision.',
      nl: 'Oranje betekent stoppen, tenzij je de stopstreep al bent gepasseerd of zo dichtbij bent dat plotseling stoppen een botsing zou kunnen veroorzaken.',
      ar: 'الكهرماني يعني التوقف ما لم تكن قد تجاوزت خط التوقف بالفعل أو كنت قريبًا جدًا بحيث قد يتسبب التوقف المفاجئ في حدوث تصادم.'
    },
    subject: 'Traffic Lights & Signals'
  },
  {
    id: 'q-tls-2',
    text: {
      en: 'What does a green filter arrow (e.g., for turning left) at traffic lights indicate when the main light is red?',
      nl: 'Wat betekent een groene filterpijl (bijv. voor linksaf) bij verkeerslichten wanneer het hoofdlicht rood is?',
      ar: 'ماذا يعني السهم الأخضر المرشح (مثلاً، للانعطاف يسارًا) عند إشارات المرور عندما يكون الضوء الرئيسي أحمر؟'
    },
    options: [
      {
        id: 'q-tls-2o1',
        text: {
          en: 'You may turn left if the way is clear, but give way to pedestrians crossing.',
          nl: 'Je mag linksaf als de weg vrij is, maar geef voetgangers die oversteken voorrang.',
          ar: 'يمكنك الانعطاف يسارًا إذا كان الطريق خاليًا، ولكن أعط الأولوية للمشاة الذين يعبرون.'
        }
      },
      {
        id: 'q-tls-2o2',
        text: {
          en: 'You must wait for the main green light before turning left.',
          nl: 'Je moet wachten op het groene hoofdlicht voordat je linksaf gaat.',
          ar: 'يجب عليك انتظار الضوء الأخضر الرئيسي قبل الانعطاف يسارًا.'
        }
      },
      {
        id: 'q-tls-2o3',
        text: {
          en: 'You have priority over all other traffic and pedestrians when turning left.',
          nl: 'Je hebt voorrang op al het andere verkeer en voetgangers bij het linksaf slaan.',
          ar: 'لديك الأولوية على جميع المركبات والمشاة الآخرين عند الانعطاف يسارًا.'
        }
      }
    ],
    correctAnswerId: 'q-tls-2o1',
    explanation: {
      en: 'A green filter arrow allows you to proceed in the direction of the arrow, even if the main light is red, provided you give way to any pedestrians or other road users who have priority.',
      nl: 'Een groene filterpijl laat je toe om in de richting van de pijl te rijden, zelfs als het hoofdlicht rood is, mits je voorrang geeft aan voetgangers of andere weggebruikers die voorrang hebben.',
      ar: 'يسمح لك السهم الأخضر المرشح بالمضي في اتجاه السهم، حتى لو كان الضوء الرئيسي أحمر، بشرط أن تعطي الأولوية لأي مشاة أو مستخدمي طريق آخرين لديهم الأولوية.'
    },
    subject: 'Traffic Lights & Signals'
  },
  {
    id: 'q-tls-3',
    text: {
      en: 'If traffic lights are out of order (not working at all), how should you treat the junction?',
      nl: 'Als verkeerslichten defect zijn (helemaal niet werken), hoe moet je dan de kruising behandelen?',
      ar: 'إذا كانت إشارات المرور معطلة (لا تعمل على الإطلاق)، كيف يجب أن تتعامل مع التقاطع؟'
    },
    options: [
      {
        id: 'q-tls-3o1',
        text: {
          en: 'Treat it as if you have priority over all traffic.',
          nl: 'Behandel het alsof je voorrang hebt op al het verkeer.',
          ar: 'تعامل معه كما لو كان لديك الأولوية على جميع المركبات.'
        }
      },
      {
        id: 'q-tls-3o2',
        text: {
          en: 'Proceed with extreme caution and treat the junction as an unmarked crossroads or give way, depending on road markings or signs.',
          nl: 'Ga met uiterste voorzichtigheid verder en behandel de kruising als een ongemarkeerd kruispunt of verlenen voorrang, afhankelijk van wegmarkeringen of borden.',
          ar: 'تابع بحذر شديد وتعامل مع التقاطع كتقاطع غير مميز أو أعط الأولوية، اعتمادًا على علامات الطريق أو اللافتات.'
        }
      },
      {
        id: 'q-tls-3o3',
        text: {
          en: 'Wait for a police officer to direct traffic before proceeding.',
          nl: 'Wacht tot een politieagent het verkeer regelt voordat je verder gaat.',
          ar: 'انتظر حتى يوجه ضابط شرطة حركة المرور قبل المتابعة.'
        }
      }
    ],
    correctAnswerId: 'q-tls-3o2',
    explanation: {
      en: 'When traffic lights are out of order, revert to standard priority rules as if the junction is unmarked, or follow any existing give way/stop signs. Always proceed with caution.',
      nl: 'Wanneer verkeerslichten defect zijn, keer terug naar standaard voorrangsregels alsof de kruising ongemarkeerd is, of volg eventuele bestaande voorrangs-/stopborden. Ga altijd voorzichtig verder.',
      ar: 'عندما تكون إشارات المرور معطلة، ارجع إلى قواعد الأولوية القياسية كما لو كان التقاطع غير مميز، أو اتبع أي لافتات منح الأولوية/التوقف الموجودة. تابع دائمًا بحذر.'
    },
    subject: 'Traffic Lights & Signals'
  },
  {
    id: 'q-tls-4',
    text: {
      en: 'What does a flashing amber beacon mounted above a pedestrian crossing (Pelican or Puffin crossing) signify when pedestrians are crossing?',
      nl: 'Wat betekent een knipperend oranje baken boven een voetgangersoversteekplaats (Pelican of Puffin oversteekplaats) wanneer voetgangers oversteken?',
      ar: 'ماذا يعني المنارة الكهرمانية الوامضة المركبة فوق معبر المشاة (معبر Pelican أو Puffin) عندما يعبر المشاة؟'
    },
    options: [
      {
        id: 'q-tls-4o1',
        text: {
          en: 'You must stop and wait until the beacon stops flashing.',
          nl: 'Je moet stoppen en wachten totdat het baken stopt met knipperen.',
          ar: 'يجب عليك التوقف والانتظار حتى تتوقف المنارة عن الوميض.'
        }
      },
      {
        id: 'q-tls-4o2',
        text: {
          en: 'You may proceed if the way is clear, giving way to pedestrians still on the crossing.',
          nl: 'Je mag doorrijden als de weg vrij is, terwijl je voorrang geeft aan voetgangers die nog op de oversteekplaats zijn.',
          ar: 'يمكنك المتابعة إذا كان الطريق خاليًا، مع إعطاء الأولوية للمشاة الذين لا يزالون على المعبر.'
        }
      },
      {
        id: 'q-tls-4o3',
        text: {
          en: 'The crossing is out of order; proceed normally.',
          nl: 'De oversteekplaats is defect; ga normaal verder.',
          ar: 'المعبر معطل؛ تابع بشكل طبيعي.'
        }
      }
    ],
    correctAnswerId: 'q-tls-4o2',
    explanation: {
      en: 'A flashing amber beacon at a pedestrian crossing means you must give way to pedestrians on the crossing, but you may proceed if the crossing is clear.',
      nl: 'Een knipperend oranje baken bij een voetgangersoversteekplaats betekent dat je voorrang moet geven aan voetgangers op de oversteekplaats, maar je mag doorrijden als de oversteekplaats vrij is.',
      ar: 'تعني المنارة الكهرمانية الوامضة عند معبر المشاة أنه يجب عليك إعطاء الأولوية للمشاة على المعبر، ولكن يمكنك المتابعة إذا كان المعبر خاليًا.'
    },
    subject: 'Traffic Lights & Signals'
  },
  {
    id: 'q-tls-5',
    text: {
      en: 'A police officer is directing traffic at a junction and signals you to stop, but the traffic light for you is green. What must you do?',
      nl: 'Een politieagent regelt het verkeer bij een kruising en geeft je het signaal om te stoppen, maar het verkeerslicht voor jou is groen. Wat moet je doen?',
      ar: 'ضابط شرطة يوجه حركة المرور عند تقاطع ويشير لك بالتوقف، لكن إشارة المرور لك خضراء. ماذا يجب عليك أن تفعل؟'
    },
    options: [
      {
        id: 'q-tls-5o1',
        text: {
          en: 'Obey the green traffic light and proceed.',
          nl: 'Gehoorzaam het groene verkeerslicht en ga verder.',
          ar: 'امتثل لإشارة المرور الخضراء وتابع.'
        }
      },
      {
        id: 'q-tls-5o2',
        text: {
          en: 'Point to the green light to inform the officer and then proceed.',
          nl: 'Wijs naar het groene licht om de agent te informeren en ga dan verder.',
          ar: 'أشر إلى الضوء الأخضر لإبلاغ الضابط ثم تابع.'
        }
      },
      {
        id: 'q-tls-5o3',
        text: {
          en: 'Obey the police officer\'s signal and stop.',
          nl: 'Gehoorzaam het signaal van de politieagent en stop.',
          ar: 'امتثل لإشارة ضابط الشرطة وتوقف.'
        }
      }
    ],
    correctAnswerId: 'q-tls-5o3',
    explanation: {
      en: 'Signals given by a police officer directing traffic override all other traffic signals and signs. You must obey the officer.',
      nl: 'Signalen gegeven door een politieagent die het verkeer regelt, hebben voorrang op alle andere verkeerssignalen en borden. Je moet de agent gehoorzamen.',
      ar: 'الإشارات التي يعطيها ضابط شرطة يوجه حركة المرور تتجاوز جميع إشارات ولافتات المرور الأخرى. يجب عليك الامتثال للضابط.'
    },
    subject: 'Traffic Lights & Signals'
  }
];

