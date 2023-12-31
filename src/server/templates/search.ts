import * as mock from 'mockjs';
const Random = mock.Random;
export const searchTip = (qs?: string) => {
  if (qs) {
    Random.extend({
      qs: function (date?: any) {
        const qsArr = qs.split('').concat(qs);
        console.log(qsArr);
        return this.pick(qsArr);
      }
    });
    Random.qs();
  }
  return {
    keyword: qs,
    list: [],
    'records|2': [
      {
        type: 3,
        word: '精品小说',
        categoryId: '100000',
        totalCount: 19740
      },
      {
        type: 1,
        word: '兰小欢',
        categoryId: '',
        totalCount: 1
      },
      {
        type: 1,
        word: '渤海小吏',
        categoryId: '',
        totalCount: 4
      },
      {
        type: 1,
        word: '陈磊·半小时漫画团队',
        categoryId: '',
        totalCount: 28
      },
      {
        type: 1,
        word: '王小波',
        categoryId: '',
        totalCount: 29
      },
      {
        type: 0,
        word: '色（贡布罗维奇小说全集）',
        categoryId: '',
        totalCount: 0,
        bookId: '37058350'
      },
      {
        type: 0,
        word: '满：一部异乡小说',
        categoryId: '',
        totalCount: 0,
        bookId: '3300060719'
      },
      {
        type: 0,
        word: '100：小小说百篇',
        categoryId: '',
        totalCount: 0,
        bookId: '23796228'
      },
      {
        type: 0,
        word: '霄（民国通俗小说典藏文库·冯玉奇卷）',
        categoryId: '',
        totalCount: 0,
        bookId: '3300025880'
      },
      {
        type: 0,
        word: '斗（民国通俗小说典藏文库·冯玉奇卷）',
        categoryId: '',
        totalCount: 0,
        bookId: '3300025875'
      },
      {
        type: 0,
        word: '孽（民国通俗小说典藏文库·冯玉奇卷）',
        categoryId: '',
        totalCount: 0,
        bookId: '3300025858'
      },
      {
        type: 0,
        word: '桥（中小学生必读丛书）',
        categoryId: '',
        totalCount: 0,
        bookId: '166651'
      },
      {
        type: 0,
        word: '罪（民国通俗小说典藏文库·冯玉奇卷）',
        categoryId: '',
        totalCount: 0,
        bookId: '3300025836'
      },
      {
        type: 0,
        word: 'LOL：一并超，小伙子什么挂？',
        categoryId: '',
        totalCount: 0,
        bookId: '46537312'
      },
      {
        type: 0,
        word: '小巷人家',
        categoryId: '',
        totalCount: 0,
        bookId: '3300049180'
      },
      {
        type: 0,
        word: '小王子',
        categoryId: '',
        totalCount: 0,
        bookId: '216212',
        author: '安托万·德·圣埃克苏佩里著'
      },
      {
        type: 0,
        word: '小镇喧嚣：一个乡镇政治运作的演绎与阐释',
        categoryId: '',
        totalCount: 0,
        bookId: '3300019741'
      },
      {
        type: 0,
        word: '小王子（英文版）',
        categoryId: '',
        totalCount: 0,
        bookId: '22720170'
      },
      {
        type: 0,
        word: '小米创业思考',
        categoryId: '',
        totalCount: 0,
        bookId: '3300024931',
        author: '雷军 徐洁云'
      },
      {
        type: 0,
        word: '小岛经济学',
        categoryId: '',
        totalCount: 0,
        bookId: '912417',
        author: '彼得·D.希夫 安德鲁·J.希夫'
      },
      {
        type: 0,
        word: '小妇人（经典译林）',
        categoryId: '',
        totalCount: 0,
        bookId: '855754',
        author: '奥尔科特'
      },
      {
        type: 0,
        word: '小王子（译文40）',
        categoryId: '',
        totalCount: 0,
        bookId: '40527666',
        author: '圣埃克絮佩里'
      },
      {
        type: 0,
        word: '小王子（中英文对照版）',
        categoryId: '',
        totalCount: 0,
        bookId: '43318721',
        author: '安东尼·德·圣埃克苏佩里'
      },
      {
        type: 0,
        word: '小女生职场修行记',
        categoryId: '',
        totalCount: 0,
        bookId: '630821'
      },
      {
        type: 0,
        word: '小孩',
        categoryId: '',
        totalCount: 0,
        bookId: '27058200'
      },
      {
        type: 0,
        word: '小家，越住越大',
        categoryId: '',
        totalCount: 0,
        bookId: '26433739'
      },
      {
        type: 0,
        word: '小而美：持续盈利的经营法则',
        categoryId: '',
        totalCount: 0,
        bookId: '3300050592'
      },
      {
        type: 0,
        word: '小英雄雨来',
        categoryId: '',
        totalCount: 0,
        bookId: '33820297'
      },
      {
        type: 0,
        word: '小逻辑',
        categoryId: '',
        totalCount: 0,
        bookId: '842282'
      },
      {
        type: 0,
        word: '小妇人：LITTLE WOMEN（英文原版）',
        categoryId: '',
        totalCount: 0,
        bookId: '820028'
      },
      {
        type: 0,
        word: '小窗幽记',
        categoryId: '',
        totalCount: 0,
        bookId: '919921'
      },
      {
        type: 0,
        word: '小团圆',
        categoryId: '',
        totalCount: 0,
        bookId: '22799665'
      },
      {
        type: 0,
        word: '小说的骨架：好提纲成就好故事',
        categoryId: '',
        totalCount: 0,
        bookId: '23071748'
      }
    ],
    'parts|2': [mock.mock('@qs')]
  };
};

export const searchGlobal = (qs?: string) => {
  return {
    'books|2': [
      {
        bookInfo: {
          bookId: '3002719690',
          title: '为什么不长大/中国儿童文学畅销名家精品小说集',
          author: '章红',
          cover: 'https://weread-1258476243.file.myqcloud.com/outpic/690/3002719690.jpg',
          intro:
            '　　《为什么不长大/中国儿童文学畅销名家精品小说集》是著名儿童文学作家章红撰写的中短篇小说集。这是一部少女成长小说集，故事中的主人公从各自不同的背景中走来，走进中学的课堂，走进她们各自的少女时代。在平淡无奇的生活里无时不涌动着青春的潮汐：关于友情，关于代沟，关于难于摆脱的学业竞争……她们义无反顾地踏入青春的门槛，完成了从心智初开的少年到初谙人事的青年的转变。',
          publisher: '新世纪出版社',
          price: -1,
          type: 0,
          payType: 0,
          bookStatus: 5,
          ispub: 1,
          cpid: 0,
          soldout: 1,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: '11942782'
          }
        },
        searchIdx: 1,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MSwiaXRlbV9pZCI6IjMwMDI3MTk2OTAiLCJpdGVtX3R5cGUiOjR9',
        scope: 3,
        scopeCount: 252,
        subscribeCount: 1,
        seq: 1,
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '585067',
          title: '杨家将（中国古典演义小说精品书库）',
          author: '熊大木',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/11/YueWen_585067/s_YueWen_585067.jpg',
          intro:
            '    该书记叙的是北宋杨家将抗击辽邦入侵的传奇故事。此书从宋太祖平定北汉写起，演述杨业归宋和以他为首的杨门将士在与辽作战中出生入死：杨业遭奸臣陷害、作战失利后的壮烈牺牲，杨六郞继承父志的不屈不挠，杨宗保、穆桂英的威震敌胆，焦赞、孟良的忠勇无畏，以及后来十二寡妇征西等，故事流传很广，向为读者所喜爱。\n',
          publisher: '北京燕山出版社',
          price: 3.43,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          },
          star: 76,
          newRating: 760,
          newRatingCount: 242,
          newRatingDetail: {
            title: ''
          }
        },
        searchIdx: 2,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MiwiaXRlbV9pZCI6IjU4NTA2NyIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 21,
        reading: 21
      },
      {
        bookInfo: {
          bookId: '3300034709',
          title: '诺贝尔文学奖得主莫言中篇小说精品系列（套装全8册）',
          author: '莫言',
          cover:
            'https://weread-1258476243.file.myqcloud.com/weread/cover/56/cpPlatform_5LiVpxbShjangfj19VAshL/s_cpPlatform_5LiVpxbShjangfj19VAshL.jpg',
          intro:
            '莫言中篇小说8本，含《透明的红萝卜》《爆炸》《你的行为使我们恐惧》《白棉花》《筑路》《梦境与杂种》《三十年前的一次长跑比赛》《司令的女人》。囊括了莫言自创作开始到获得诺贝尔文学奖期间全部中篇作品，表现了不同时期的艺术风格，可以帮助读者深入了解莫言中篇小说的丰富内涵和体量，为学者、评论家研究提供材料。莫言长篇写作中经常表现的主题，在中篇的创作中也多有所表现。比如初恋情结、异禀儿童、超感与通感、饥饿与狂欢、“计划生育”与高考等，都是莫言经常表现的主题。在反复的表现过程中，形成了莫言式的象征意味，也显露出莫言对生命的重视和对现代社会人类生存状态的反思。',
          publisher: '浙江文艺出版社',
          price: 179.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 8980449,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 3,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MywiaXRlbV9pZCI6IjMzMDAwMzQ3MDkiLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 13,
        reading: 13
      },
      {
        bookInfo: {
          bookId: '3300041327',
          title: '长篇小说的高度：茅盾文学奖获奖作品精读',
          author: '王春林',
          cover:
            'https://weread-1258476243.file.myqcloud.com/weread/cover/51/cpPlatform_iMiwiPGANf6SzKrTPArb5q/s_cpPlatform_iMiwiPGANf6SzKrTPArb5q.jpg',
          intro:
            '本书是当代著名文学评论家王春林对茅盾文学奖获奖作品的细读与评析，收录了其对于《人世间》《推拿》《白鹿原》《蛙》《一句顶一万句》《繁花》等广受读者欢迎的18部获奖作品的解读。茅盾文学奖文学奖是中国当代极具权威和影响力的文学奖项之一，代表着中国当代长篇小说创作的高度。自首届至今，茅盾文学奖历经40载，已评出近50部各具特色特色的长篇小说。王春林曾任多届茅盾文学奖、鲁迅文学奖等重要文学奖项的评委，长期从事中国现当代文学研究与批评，对中国当代文学有着深入、独特的见解。本书中，他从小说的结构方式、叙事手法、语言特色、主旨意蕴等多个角度切入，带领读者品赏、领略这些获奖作品的丰厚内涵和艺术魅力。',
          publisher: '浙江文艺出版社',
          price: 29.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 8980449,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 4,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6NCwiaXRlbV9pZCI6IjMzMDAwNDEzMjciLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 8,
        reading: 8
      },
      {
        bookInfo: {
          bookId: '581808',
          title: '包公案（中国古典公案小说精品书库）',
          author: '安遇时',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/808/581808/s_581808.jpg',
          intro: '    再版的《包公案》由《百家公案》、《龙图公案》和《五鼠闹东京》三部我国历史悠久、流传极广、影响深远的公案小说合集成。\n',
          publisher: '北京燕山出版社',
          price: 3.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          },
          newRating: 697,
          newRatingCount: 33,
          newRatingDetail: {
            title: ''
          }
        },
        searchIdx: 5,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6NSwiaXRlbV9pZCI6IjU4MTgwOCIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 6,
        reading: 6
      },
      {
        bookInfo: {
          bookId: '581809',
          title: '施公案（上）（中国古典公案小说精品书库）',
          author: '佚名',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/51/YueWen_581809/s_YueWen_581809.jpg',
          intro:
            '    《施公案》又名《百断奇观》、《施案奇闻》，是以清人施世纶（小说为施仕伦）生平为原型，敷演而成的一部公案侠义小说。施世纶，字文贤，清康熙年代人。\n',
          publisher: '北京燕山出版社',
          price: 2.25,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          },
          newRating: 795,
          newRatingCount: 44,
          newRatingDetail: {
            title: ''
          }
        },
        searchIdx: 6,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6NiwiaXRlbV9pZCI6IjU4MTgwOSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 4,
        reading: 4
      },
      {
        bookInfo: {
          bookId: '553149',
          title: '微型小说·智慧珍品（世界百年传世文学精品）',
          author: '金诚编译',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/67/YueWen_553149/s_YueWen_553149.jpg',
          intro:
            '一位机灵的崇拜者突然闯进著名演员库兹金娜的化妆室,疯狂地吻起库兹金娜的皮靴,女演员被他的行为惊呆了,当她清醒过来时,崇拜者和皮靴却神秘失踪了；通往天堂的道路是一条弯弯曲曲的小路,每个人在转变处都有不同的表现,虽然不管什么错误最终都能得到上帝的宽恕,表面上殊途同归,但结局去不相同。',
          publisher: '新疆人民出版社',
          price: 8.81,
          type: 0,
          payType: 4097,
          bookStatus: 2,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 7,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6NywiaXRlbV9pZCI6IjU1MzE0OSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '634226',
          title: '罗家将（中国古典演义小说精品书库）',
          author: '佚名',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/47/YueWen_634226/s_YueWen_634226.jpg',
          intro:
            '    在中国古代通俗文学作品中，以著名军事将领英雄事迹为主要内容的“家将”系列小说，一直深受平民百姓的喜爱，出现于清乾隆年间的《罗家将》就是完整、系统地演述罗家将故事的唯一一部通俗小说。\n',
          publisher: '北京燕山出版社',
          price: 3.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          },
          newRating: 473,
          newRatingCount: 55,
          newRatingDetail: {
            title: ''
          }
        },
        searchIdx: 8,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6OCwiaXRlbV9pZCI6IjYzNDIyNiIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '26452090',
          title: '范小青小说精品集',
          author: '范小青',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/90/26452090/s_26452090.jpg',
          intro:
            '    本书收录了多篇范小青近些年的中、短篇小说作品，这些小说贴近生活和普通老百姓，专注于小人物的命运，把许多不为人知的人生背后的画面与秘密，用淡淡的笔黑写出来，让读者领悟到其独特的、不同他人的小说的审美价值。\r\n',
          publisher: '南海出版公司',
          price: 14.9,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 5075690,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 9,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6OSwiaXRlbV9pZCI6IjI2NDUyMDkwIiwiaXRlbV90eXBlIjowfQ==',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '31359525',
          title: '华纳电影中文小说精品合辑（套装共6册）',
          author: '华纳兄弟娱乐公司',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/99/YueWen_31359525/s_YueWen_31359525.jpg',
          intro:
            '华纳电影正版同名小说套装，华纳兄弟娱乐公司正版授权。《海王》海洋给予他原始的力量。因此，海王从小就展现出了远超常人的各项体能，不仅能在水下自由活动与呼吸，还能与海洋生物沟通感应；而在陆地上，他懂得了生命中最重要的东西——珍惜身边的一切。比国王更伟大的是英雄，亚特兰蒂斯不单需要国王，更需要一个英雄。《神奇女侠》一场惊险而又意外的相遇，让黛安娜带着奥林匹斯众神赐予的武器，化身神奇女侠，远走他乡，与空军上尉史蒂夫一起来到人类世界，捍卫和平。她亲身体验到了人类战争的威力，并逐渐理解了身为英雄的意义和代价。打败“阿瑞斯”并不能结束战争，真正的敌人是创造战争的人性之恶。《星际穿越》一群科学探险家们为了真相，开启了星际间的穿越。他们从地球的守护者，转变为宇宙的开拓者，试图用自己的方式去挽救整个种群的命运……《雪怪大冒险》这是一个关乎友情、勇气与探索之趣的动人故事，一个老少咸宜，陪伴全家人的故事。故事满足了孩子们的很多幻想，比如，世界上真的有怪物吗？雪山上是不是住着许多我们不了解的生物？他们会不会有强大的魔力？ 《蝙蝠侠：黑暗骑士崛起》面临众叛亲离，作为血肉之躯的蝙蝠侠，他有着与我们普通人一样的情感。他会爱、会恨、会恐惧、会悲伤……但作为哥谭市真正的黑暗骑士，他必须重新站起来。或许，每个人心中都有一个蝙蝠侠，即便这么多年过去了，他的故事仍能让人血脉偾张。《超人：钢铁之躯》这是一个超越生命，又更具人性的传说。它既满足了我们对超级英雄坚不可摧的期待，又让我们看到了所有人类值得追求的品质：正直、勇敢、慈爱与善良。当超级英雄需要像普通人一样去重新认识自我，找寻生活中所处的位置时，我们会发现更具有血肉的现实意义……',
          publisher: '华东理工大学出版社有限公司',
          price: 99.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 4271730,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 10,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTAsIml0ZW1faWQiOiIzMTM1OTUyNSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '38130379',
          title: '许地山小说精品',
          author: '许地山',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/379/38130379/s_38130379.jpg',
          intro:
            '许地山的著作有《达衷集》《印度文学》《中国道教史》《扶箕迷信底心理》《国粹与国学》《危巢坠简》《空山灵雨》《道教史》。译著有《二十夜问》《太阳底下降》《孟加拉民间故事》等。主要文学作品有《命命鸟》《缀网劳蛛》《换巢鸾凤》《玉官》等。他后期小说现实主义倾向加重，社会不平和阶级对立成为他小说的基本背景，如《在费总理底客厅里》《春桃》《铁鱼的鳃》等，很具有现实性。',
          publisher: '北方妇女儿童出版社',
          price: 6,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: -3384134,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 11,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTEsIml0ZW1faWQiOiIzODEzMDM3OSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '41734301',
          title: '文摘小说精品：故事卷',
          author: '读者俱乐部',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/301/41734301/s_41734301.jpg',
          intro:
            'Craven“A”的纯正的烟味从爵士乐里边慢慢儿的飘过来。回过脑袋去——咦，又是她！坐在那边儿的一张桌子上，默默地抽着烟。时常碰到的，那个有一张巴黎风的小方脸的，每次都带了一个新的男子的姑娘。从第一次看到她就注意着她了，她有两种眼珠子；抽着Craven“A”的时候，那眼珠子是浅灰色的维也勒绒似的，从淡淡的烟雾里，眼光淡到望不见人似的，不经意地，看着前面；照着手提袋上的镜子擦粉的时候，舞着的时候，笑着的时候，说话的时候，她有一对狡黠的，耗子似的深黑眼珠子，从镜子边上，从舞伴的肩上，从酒杯上，灵活地瞧着人，想把每个男子的灵魂全偷了去似的。',
          publisher: '吉林大学出版社',
          price: 11.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 47959,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 12,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTIsIml0ZW1faWQiOiI0MTczNDMwMSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '23507716',
          title: '惊悚小说天王斯蒂芬·金作品精选（全2册）',
          author: '斯蒂芬·金',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/49/YueWen_23507716/s_YueWen_23507716.jpg',
          intro: '美国国民作家斯蒂芬·金备受欢迎的超自然惊悚代表作！作品精选：《重生》、《它》。',
          publisher: '湖南文艺出版社',
          price: 35.99,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 7029174,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          },
          newRating: 812,
          newRatingCount: 69,
          newRatingDetail: {
            title: ''
          }
        },
        searchIdx: 13,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTMsIml0ZW1faWQiOiIyMzUwNzcxNiIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 1,
        reading: 1
      },
      {
        bookInfo: {
          bookId: '581810',
          title: '施公案（中）（中国古典公案小说精品书库）',
          author: '佚名',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/810/581810/s_581810.jpg',
          intro:
            '    《施公案》又名《百断奇观》、《施案奇闻》，是以清人施世纶（小说为施仕伦）生平为原型，敷演而成的一部公案侠义小说。施世纶，字文贤，清康熙年代人。\n',
          publisher: '北京燕山出版社',
          price: 2.25,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 14,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTQsIml0ZW1faWQiOiI1ODE4MTAiLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '597533',
          title: '刘兆林小说精品集 短篇卷：违约公布的日记',
          author: '刘兆林',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/533/597533/s_597533.jpg',
          intro:
            '本书是著名作家刘兆林的作品。刘兆林，现任中国作协主席团委员、中国散文学会副会长、辽宁作协名誉（原）主席。有《不悔录》《啊，索伦河谷的枪声》《雪国热闹镇》《父亲祭》《在西藏想你》等小说、散文作品集四百多万字。曾获全国优秀中、短篇小说奖，冰心散文奖、曹雪芹长篇小说奖。系国家特殊贡献专家奖获得者。',
          publisher: '华夏出版社',
          price: 13,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 5075690,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 15,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTUsIml0ZW1faWQiOiI1OTc1MzMiLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '597600',
          title: '刘兆林小说精品集（长篇卷）：绿色青春期',
          author: '刘兆林',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/600/597600/s_597600.jpg',
          intro:
            '本卷收入了作家近年创作的一部长篇。这是作家创作生涯中不可多得的一部力作，既有对军装崇拜年代中“我”的反省，又有对那疯狂岁月里军营生活畸变的深刻沉思。其间，真诚与虚伪，善良与邪恶，美好与丑陋，人性中对立的两极几乎完全被颠倒的大背景下，特别是对那些正处于青春期的年青人，更是必然造成对人性的贬损、压抑和阉割，进而形成欲哭无泪、欲罢不能的悲剧式结局。对此，作家以时间为经、事件为纬，通过主人公柳直由学校到军营，从支农、支左、游行到调防、野营拉练、走上战场的一系列的场景变换中，对特定时代下人们的思想、人际关系、性爱等诸问题，做了全景式、漫画风格般逼真描写，看似幽默，实则冷峻，读后令人回味无穷。',
          publisher: '华夏出版社',
          price: 6,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 5075690,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 16,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTYsIml0ZW1faWQiOiI1OTc2MDAiLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '915737',
          title: '鲁迅小说精品',
          author: '鲁迅著 周丽霞主编',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/737/915737/s_915737.jpg',
          intro:
            '由周丽霞主编的《鲁迅小说精品》收集了多篇鲁迅的短篇小说作品。包括他从1918年在《新青年》中发表第一篇白话小说《狂人日记》，直到1936年陆续创作出版了短篇小说集《呐喊》、《彷徨》等。鲁迅先生的小说作品数量不多，意义却十分重大。鲁迅把目光集中到社会最底层，描写这些底层人民的日常生活状况和精神状况。鲁迅的小说之所以开掘深，立意新，主要是因为他在构思时高瞻远瞩，熔铸古今，他是从国家、民族生死存亡的高度，从现实与历史血肉相连的深度来认识、分析、发掘事物的内在本质，铸造艺术形象的。',
          publisher: '北方妇女儿童出版社',
          price: 4.47,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 9454704,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 17,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTcsIml0ZW1faWQiOiI5MTU3MzciLCJpdGVtX3R5cGUiOjB9',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '23600152',
          title: '刘兆林小说精品集：父亲祭（中篇卷）',
          author: '刘兆林',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/152/23600152/s_23600152.jpg',
          intro:
            '    作为新时期著名军旅作家，刘兆林以自己作品独具的“气味（时代气息）、风味（地方特色）、入味（人情味）、兵味（军营生活）”而享誉文坛。本卷收入了作家自80年代中期以来创作的中篇佳作。这些作品多半以军营生活为题材，描写了看似单调实则丰富多彩的军营生活，刻划出一批血肉丰满、催人泪下的中国当代军人形象，较为全面地反映了军营文化所具有的独特魅力，而这一魅力也正是我军军魂的具体体现。\r\n',
          publisher: '华夏出版社',
          price: 10.5,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: 5075690,
          soldout: 0,
          format: 'epub',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 18,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTgsIml0ZW1faWQiOiIyMzYwMDE1MiIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '38130373',
          title: '蒋光慈小说精品',
          author: '蒋光慈著 郭艳红主编',
          cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/373/38130373/s_38130373.jpg',
          intro: '本书内容包括了有少年飘泊者、野祭、徐州旅馆之一夜、寻爱等内容。',
          publisher: '北方妇女儿童出版社',
          price: 6,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: -3384134,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: ''
          }
        },
        searchIdx: 19,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MTksIml0ZW1faWQiOiIzODEzMDM3MyIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 0,
        reading: 0
      },
      {
        bookInfo: {
          bookId: '38130381',
          title: '萧红小说精品（中国文学名家精品）',
          author: '肖红著 郭艳红主编',
          cover: 'https://weread-1258476243.file.myqcloud.com/weread/cover/39/YueWen_38130381/s_YueWen_38130381.jpg',
          intro: '本书内容包括了有看风筝、夜风、叶子、离去、出嫁、小六、夏夜、花狗、旷野的呼喊、孩子的讲演、小城三月、牛车上、访问等内容。',
          publisher: '北方妇女儿童出版社',
          price: 6,
          type: 0,
          payType: 4097,
          bookStatus: 1,
          ispub: 1,
          cpid: -3384134,
          soldout: 0,
          format: 'txt',
          finished: 1,
          paperBook: {
            skuId: '13492818'
          }
        },
        searchIdx: 20,
        searchReport:
          'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInF1ZXJ5X3VpZCI6IjBuX1JzNVNXZFFHRzRwRkoiLCJpdGVtX2lkeCI6MjAsIml0ZW1faWQiOiIzODEzMDM4MSIsIml0ZW1fdHlwZSI6MH0=',
        type: 0,
        readingCount: 0,
        reading: 0
      }
    ],
    parts: ['精品小说', '小说', '精品'],
    'totalCount|200': 70,
    correction: '',
    hasMore: 1,
    queryUid: 'eyJxdWVyeSI6IueyvuWTgeWwj+ivtCIsInJhblN0ciI6IjBuX1JzNVNXZFFHRzRwRkoiLCJzY29wZSI6MH0=',
    sid: '9vVGIv2t57'
  };
};
