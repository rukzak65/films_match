
// src/data/movie.js
export const movies = [
    // 1. Фантастика (12 фильмов)
    { id: 1, title: "Интерстеллар", year: 2014, genre: "Фантастика", description: "Путешествие через червоточины", poster: "https://image.tmdb.org/t/p/w500/vReLRjDV9XPhiOSEW7QWow4DXwf.jpg", rating: 8.7 },
    { id: 2, title: "Начало", year: 2010, genre: "Фантастика", description: "Сны внутри снов", poster: "https://image.tmdb.org/t/p/w500/piQXcdOGgv1O9HQ07pI0tnjkGJw.jpg", rating: 8.8 },
    { id: 3, title: "Матрица", year: 1999, genre: "Фантастика", description: "Красная таблетка или синяя", poster: "https://image.tmdb.org/t/p/w500/ahxs2iYHjp6dMHjJORdF5K0deHm.jpg", rating: 8.7 },
    { id: 4, title: "Дюна: Часть вторая", year: 2024, genre: "Фантастика", description: "Восстание на Арракисе", poster: "https://image.tmdb.org/t/p/w500/3aLghRkuJc9cs770fxo4a6YWht3.jpg", rating: 8.6 },
    { id: 5, title: "Бегущий по лезвию 2049", year: 2017, genre: "Фантастика", description: "Репликанты и память", poster: "https://image.tmdb.org/t/p/w500/oRQYib2BKxtUpsAbPNeI4MKBYND.jpg", rating: 8.0 },
    { id: 6, title: "Прибытие", year: 2016, genre: "Фантастика", description: "Язык пришельцев", poster: "https://image.tmdb.org/t/p/w500/3K1byNV0CfChvJFNbe2ZAkiro4U.jpg", rating: 7.9 },
    { id: 7, title: "Гравитация", year: 2013, genre: "Фантастика", description: "Выживание в космосе", poster: "https://image.tmdb.org/t/p/w500/u8cZd9KAS0LvLTf2Z4cPflAf0Wz.jpg", rating: 7.7 },
    { id: 8, title: "К звёздам", year: 2019, genre: "Фантастика", description: "Поиски отца в космосе", poster: "https://image.tmdb.org/t/p/w500/5XUhgB6j13XGo7CflM6YLovJ28R.jpg", rating: 6.5 },
    { id: 9, title: "2001: Космическая одиссея", year: 1968, genre: "Фантастика", description: "Классика Кубрика", poster: "https://image.tmdb.org/t/p/w500/sEVu8HjXIdxVEPYP5dDKxJmp757.jpg", rating: 8.3 },
    { id: 10, title: "Пятый элемент", year: 1997, genre: "Фантастика", description: "Любовь спасает мир", poster: "https://image.tmdb.org/t/p/w500/bqALmWhVaqfQedyPZn7MeuOjfSk.jpg", rating: 7.7 },
    { id: 11, title: "Солярис", year: 1972, genre: "Фантастика", description: "Планета-океан и воспоминания", poster: "https://image.tmdb.org/t/p/w500/xYN3dwytiL3vgcuynzYitIcKmKS.jpg", rating: 8.0 },
    { id: 12, title: "Аватар", year: 2009, genre: "Фантастика", description: "Пандора и синие люди", poster: "https://image.tmdb.org/t/p/w500/lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg", rating: 7.9 },

    // 2. Хоррор (10 фильмов)
    { id: 13, title: "Оно", year: 2017, genre: "Хоррор", description: "Клоун-убийца", poster: "https://image.tmdb.org/t/p/w500/tM3xcPo8UNuJFCXO0CkmchBjPvd.jpg", rating: 7.3 },
    { id: 14, title: "Сияние", year: 1980, genre: "Хоррор", description: "Отель и безумие", poster: "https://image.tmdb.org/t/p/w500/bu3Qb0fpAFtTLcRAPgj8bK5KrIG.jpg", rating: 8.4 },
    { id: 15, title: "Заклятие", year: 2013, genre: "Хоррор", description: "Паранормальные явления", poster: "https://image.tmdb.org/t/p/w500/dq99MpZPTpHOFaZCGvYz3o2uwQk.jpg", rating: 7.5 },
    { id: 16, title: "Пила", year: 2004, genre: "Хоррор", description: "Игра на выживание", poster: "https://image.tmdb.org/t/p/w500/ghBc5iOJxDcEHPi7OvQYdVXiGeF.jpg", rating: 7.3 },
    { id: 17, title: "Кошмар на улице Вязов", year: 1984, genre: "Хоррор", description: "Фредди Крюгер", poster: "https://image.tmdb.org/t/p/w500/hIpbRqUph6nP5Akyy3n6ChmDV2X.jpg", rating: 7.5 },
    { id: 18, title: "Хэллоуин", year: 1978, genre: "Хоррор", description: "Майкл Майерс", poster: "https://image.tmdb.org/t/p/w500/8D13ar6xuL4HWfWfNjUjzhWRs3k.jpg", rating: 7.8 },
    { id: 19, title: "Прочь", year: 2017, genre: "Хоррор", description: "Гипноз и заговор", poster: "https://image.tmdb.org/t/p/w500/4Jysc15DPKSyWWYByDaXVv3Y6rn.jpg", rating: 7.8 },
    { id: 20, title: "Репортаж", year: 2007, genre: "Хоррор", description: "Зомби в прямом эфире", poster: "https://image.tmdb.org/t/p/w500/cuHjDhCBdaOkuYoDVUggcu1Hi5q.jpg", rating: 7.5 },
    { id: 21, title: "Ведьма из Блэр", year: 1999, genre: "Хоррор", description: "Found footage классика", poster: "https://image.tmdb.org/t/p/w500/hSIeucQLGO0yILPGi1pB5Q334B7.jpg", rating: 6.5 },
    { id: 22, title: "Астрал", year: 2010, genre: "Хоррор", description: "Параллельные миры", poster: "https://image.tmdb.org/t/p/w500/xWQzDOslE1XrpnmflRakEEnBIBC.jpg", rating: 6.8 },

    // 3. Драма (12 фильмов)
    { id: 23, title: "Побег из Шоушенка", year: 1994, genre: "Драма", description: "Надежда и дружба", poster: "https://image.tmdb.org/t/p/w500/yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg", rating: 9.3 },
    { id: 24, title: "Форрест Гамп", year: 1994, genre: "Драма", description: "Жизнь одного человека", poster: "https://image.tmdb.org/t/p/w500/ejDjdjHHE1T0T7Bo8Ghj2y8gR02.jpg", rating: 8.8 },
    { id: 25, title: "Зелёная миля", year: 1999, genre: "Драма", description: "Чудеса в тюрьме", poster: "https://image.tmdb.org/t/p/w500/lHxe8t4B0CKv4DO0C0B4rsuiG95.jpg", rating: 8.6 },
    { id: 26, title: "Список Шиндлера", year: 1993, genre: "Драма", description: "Спасение во время Холокоста", poster: "https://image.tmdb.org/t/p/w500/4K8fGGcJP2EoGDucILnaJcOJhZl.jpg", rating: 9.0 },
    { id: 27, title: "Бойцовский клуб", year: 1999, genre: "Драма", description: "Анархия и самопознание", poster: "https://image.tmdb.org/t/p/w500/66RvLrRJTm4J8l3uHXWF09AICol.jpg", rating: 8.8 },
    { id: 28, title: "1+1", year: 2011, genre: "Драма", description: "Дружба через различия", poster: "https://image.tmdb.org/t/p/w500/zQsq95pYgjhJwYKqoFdeXlVse88.jpg", rating: 8.5 },
    { id: 29, title: "Вечное сияние чистого разума", year: 2004, genre: "Драма", description: "Стирание воспоминаний", poster: "https://image.tmdb.org/t/p/w500/sigtn1tCMBOcHUB4kAMapb5tO4U.jpg", rating: 8.3 },
    { id: 30, title: "Ла-Ла Ленд", year: 2016, genre: "Драма", description: "Музыка и мечты", poster: "https://image.tmdb.org/t/p/w500/g7f8GdnJKS0Z3QJ5G6P9BZrqs36.jpg", rating: 8.0 },
    { id: 31, title: "Джокер", year: 2019, genre: "Драма", description: "Путь к безумию", poster: "https://image.tmdb.org/t/p/w500/5itx9nz3gXWgoD2I1UdaqOrphYm.jpg", rating: 8.4 },
    { id: 32, title: "Паразиты", year: 2019, genre: "Драма", description: "Социальное неравенство", poster: "https://image.tmdb.org/t/p/w500/9xL2PwIOerz8jld06J9cxwuJfoD.jpg", rating: 8.5 },
    { id: 33, title: "Крестный отец", year: 1972, genre: "Драма", description: "Мафия и семья", poster: "https://image.tmdb.org/t/p/w500/hoowzozsn0XQGtgH8nyivAMZfPN.jpg", rating: 9.2 },
    { id: 34, title: "12 разгневанных мужчин", year: 1957, genre: "Драма", description: "Суд присяжных", poster: "https://image.tmdb.org/t/p/w500/uDFEvhvKrH61KuGWWozRtbw2Rjv.jpg", rating: 9.0 },

    // 4. Комедия (10 фильмов)
    { id: 35, title: "1+1", year: 2011, genre: "Комедия", description: "Дружба миллионера и сиделки", poster: "https://image.tmdb.org/t/p/w500/zQsq95pYgjhJwYKqoFdeXlVse88.jpg", rating: 8.5 },
    { id: 36, title: "Большой Лебовски", year: 1998, genre: "Комедия", description: "Ковёр и приключения", poster: "https://image.tmdb.org/t/p/w500/r18wYWEiQxrspk5ogEX4S8HUIvB.jpg", rating: 8.1 },
    { id: 37, title: "Назад в будущее", year: 1985, genre: "Комедия", description: "Путешествие во времени", poster: "https://image.tmdb.org/t/p/w500/9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg", rating: 8.5 },
    { id: 38, title: "Один дома", year: 1990, genre: "Комедия", description: "Рождественская ловушка", poster: "https://image.tmdb.org/t/p/w500/yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg", rating: 7.6 },
    { id: 39, title: "Маска", year: 1994, genre: "Комедия", description: "Сверхсила и хаос", poster: "https://image.tmdb.org/t/p/w500/q1lEcpir3jbKFv4nnoze95GBpVx.jpg", rating: 7.0 },
    { id: 40, title: "Дэдпул", year: 2016, genre: "Комедия", description: "Самоирония и насилие", poster: "https://image.tmdb.org/t/p/w500/r5PYZGOiIQuGpaZas9TTplNZ5Ox.jpg", rating: 8.0 },
    { id: 41, title: "Очень страшное кино", year: 2000, genre: "Комедия", description: "Пародия на хорроры", poster: "https://image.tmdb.org/t/p/w500/w3kWWWWgE7hxQOP8fyDangxtiga.jpg", rating: 6.3 },
    { id: 42, title: "Шрек", year: 2001, genre: "Комедия", description: "Огр и принцесса", poster: "https://image.tmdb.org/t/p/w500/5OPCH713UIEeWuvRZpVkkzrZ3Hd.jpg", rating: 7.9 },
    { id: 43, title: "Мистер и миссис Смит", year: 2005, genre: "Комедия", description: "Семья шпионов", poster: "https://image.tmdb.org/t/p/w500/i3hxOQV0F334Vb4HMFxhI1J0iyZ.jpg", rating: 6.5 },
    { id: 44, title: "Суперсемейка", year: 2004, genre: "Комедия", description: "Семья супергероев", poster: "https://image.tmdb.org/t/p/w500/nVJGGWCs8CQ41G4fzJoTttfCgpQ.jpg", rating: 8.0 },

    // 5. Боевик (10 фильмов)
    { id: 45, title: "Джон Уик", year: 2014, genre: "Боевик", description: "Месть за собаку", poster: "https://image.tmdb.org/t/p/w500/2hfeF2566IKZ30c1BAay0N2lxBr.jpg", rating: 7.4 },
    { id: 46, title: "Безумный Макс: Дорога ярости", year: 2015, genre: "Боевик", description: "Пустыня и погоня", poster: "https://image.tmdb.org/t/p/w500/3tdXXuXIWU26LffOntbYFfX1SNN.jpg", rating: 8.1 },
    { id: 47, title: "Крепкий орешек", year: 1988, genre: "Боевик", description: "Один против всех", poster: "https://image.tmdb.org/t/p/w500/4Y6ClpOYfQJtrQ6jGxEfq8tqOpi.jpg", rating: 8.2 },
    { id: 48, title: "Терминатор 2", year: 1991, genre: "Боевик", description: "Защита Джона Коннора", poster: "https://image.tmdb.org/t/p/w500/67MopMcqqke4sJmcOwY5zu3kmYz.jpg", rating: 8.6 },
    { id: 49, title: "Рейд", year: 2011, genre: "Боевик", description: "Штурм здания", poster: "https://image.tmdb.org/t/p/w500/owbpAPpgUGUmK2O0Ig9T6hbI6ED.jpg", rating: 7.6 },
    { id: 50, title: "Никто", year: 2021, genre: "Боевик", description: "Обычный мужик против мафии", poster: "https://image.tmdb.org/t/p/w500/izl5fI8GnvT9NGCacv3VjxlvViJ.jpg", rating: 7.4 },
    { id: 51, title: "Джон Уик 4", year: 2023, genre: "Боевик", description: "Битва за свободу", poster: "https://image.tmdb.org/t/p/w500/o29otcx30U3EkqNVGC2feJVz5yr.jpg", rating: 7.7 },
    { id: 52, title: "Рейд 2", year: 2014, genre: "Боевик", description: "Война банд", poster: "https://image.tmdb.org/t/p/w500/cfmZohbi3XUyWdiO9LOx8XzKdTF.jpg", rating: 8.0 },
    { id: 53, title: "Гнев человеческий", year: 2021, genre: "Боевик", description: "Месть за сына", poster: "https://image.tmdb.org/t/p/w500/nRE9zOfzdp4uQMeDOgCvMf6izNh.jpg", rating: 7.6 },
    { id: 54, title: "Эквалайзер", year: 2014, genre: "Боевик", description: "Защита слабых", poster: "https://image.tmdb.org/t/p/w500/hc1tXFITduL2nm5CqORSmlwAOlI.jpg", rating: 7.2 },

    // 6. Мелодрама (10 фильмов)
    { id: 55, title: "Дневник памяти", year: 2004, genre: "Мелодрама", description: "Любовь через годы", poster: "https://image.tmdb.org/t/p/w500/ideBX5vDPECNb1sHGm16aRrBN4e.jpg", rating: 7.8 },
    { id: 56, title: "Ла-Ла Ленд", year: 2016, genre: "Мелодрама", description: "Музыка и мечты", poster: "https://image.tmdb.org/t/p/w500/g7f8GdnJKS0Z3QJ5G6P9BZrqs36.jpg", rating: 8.0 },
    { id: 57, title: "До встречи с тобой", year: 2016, genre: "Мелодрама", description: "Любовь и инвалидное кресло", poster: "https://image.tmdb.org/t/p/w500/30xQ7FYFBrIXK5Y63jq1ilMD1Xk.jpg", rating: 7.3 },
    { id: 58, title: "Виноваты звёзды", year: 2014, genre: "Мелодрама", description: "Любовь и рак", poster: "https://image.tmdb.org/t/p/w500/Avyndi4kkJqorPVPKd9fRTNMWJ3.jpg", rating: 7.7 },
    { id: 59, title: "Титаник", year: 1997, genre: "Мелодрама", description: "Любовь на корабле", poster: "https://image.tmdb.org/t/p/w500/r3sYKBtoNHPyS9vkaA8dJyh8grG.jpg", rating: 7.9 },
    { id: 60, title: "Достучаться до небес", year: 1997, genre: "Мелодрама", description: "Дорога в последний путь", poster: "https://image.tmdb.org/t/p/w500/cWNzClIEf3bb4Cq1NH47QHCHUW.jpg", rating: 8.0 },
    { id: 61, title: "Амели", year: 2001, genre: "Мелодрама", description: "Маленькие радости жизни", poster: "https://image.tmdb.org/t/p/w500/k6aTGIysigjJIU7X72DBbdFkrWR.jpg", rating: 8.3 },
    { id: 62, title: "Реальная любовь", year: 2003, genre: "Мелодрама", description: "Рождественские истории любви", poster: "https://image.tmdb.org/t/p/w500/bvgazyuurl8il9nYsXMU7aulWGL.jpg", rating: 7.6 },
    { id: 63, title: "Прежде чем я уйду", year: 2012, genre: "Мелодрама", description: "Любовь и потеря памяти", poster: "https://image.tmdb.org/t/p/w500/pyqJSqD8MlhOSVR4HDNY3M9JUHE.jpg", rating: 7.4 },
    { id: 64, title: "Гордость и предубеждение", year: 2005, genre: "Мелодрама", description: "Классика Джейн Остин", poster: "https://image.tmdb.org/t/p/w500/rsEbvbXJlD3u9eJlIoK39ugFhPg.jpg", rating: 7.8 },

    // 7. Детектив / Триллер (10 фильмов)
    { id: 65, title: "Семь", year: 1995, genre: "Детектив", description: "Семь смертных грехов", poster: "https://image.tmdb.org/t/p/w500/uMCOaHZb772QZVdNpUqt02krmYi.jpg", rating: 8.6 },
    { id: 66, title: "Исчезнувшая", year: 2014, genre: "Детектив", description: "Пропажа жены", poster: "https://image.tmdb.org/t/p/w500/dBFu1XPsa8NptOJnGiKUJKMVe3C.jpg", rating: 8.1 },
    { id: 67, title: "Остров проклятых", year: 2010, genre: "Детектив", description: "Тайна психиатрической клиники", poster: "https://image.tmdb.org/t/p/w500/3UVMyefkUBiktshtKIEnNXvOFKH.jpg", rating: 8.2 },
    { id: 68, title: "Престиж", year: 2006, genre: "Детектив", description: "Соперничество фокусников", poster: "https://image.tmdb.org/t/p/w500/9jMvxh1Ib6BPnE0pprRcaNibKDO.jpg", rating: 8.5 },
    { id: 69, title: "Зодиак", year: 2007, genre: "Детектив", description: "Охота на серийного убийцу", poster: "https://image.tmdb.org/t/p/w500/1ypQRKw54EC29oPhEQBimxutulI.jpg", rating: 7.7 },
    { id: 70, title: "Молчание ягнят", year: 1991, genre: "Детектив", description: "Ганнибал Лектер", poster: "https://image.tmdb.org/t/p/w500/5vhSSCYd6DIVleZBYDxdgzc6i8w.jpg", rating: 8.6 },
    { id: 71, title: "Секреты Лос-Анджелеса", year: 1997, genre: "Детектив", description: "Коррупция в полиции", poster: "https://image.tmdb.org/t/p/w500/egK9WwQ1UL9YmftX5RiRHVZqizQ.jpg", rating: 8.2 },
    { id: 72, title: "Олдбой", year: 2003, genre: "Детектив", description: "Месть и тайна", poster: "https://image.tmdb.org/t/p/w500/uQ1l2vj1AQJdDqyBAWb8VEEkHCl.jpg", rating: 8.3 },
    { id: 73, title: "Пленницы", year: 2013, genre: "Детектив", description: "Похищение детей", poster: "https://image.tmdb.org/t/p/w500/iBuJWQEJLOhsN40GiXM6lJyoklW.jpg", rating: 8.1 },
    { id: 74, title: "Гонка", year: 2013, genre: "Детектив", description: "Расследование аварий", poster: "https://image.tmdb.org/t/p/w500/gcpESEfY64N2BJkLBtTCz8qtila.jpg", rating: 8.1 },

    // 8. Приключения (10 фильмов)
    { id: 75, title: "Индиана Джонс: В поисках утраченного ковчега", year: 1981, genre: "Приключения", description: "Охота за ковчегом", poster: "https://image.tmdb.org/t/p/w500/u2Pg18N9naAgOFIucYxWm13rkIE.jpg", rating: 8.4 },
    { id: 76, title: "Пираты Карибского моря: Проклятие Чёрной жемчужины", year: 2003, genre: "Приключения", description: "Проклятие и сокровища", poster: "https://image.tmdb.org/t/p/w500/70xRYK8orGWA7NfxvzhtkjpZAD6.jpg", rating: 8.1 },
    { id: 77, title: "Властелин колец: Братство кольца", year: 2001, genre: "Приключения", description: "Путешествие за кольцом", poster: "https://image.tmdb.org/t/p/w500/lxaDSQCLsMRRbp4UsfvsxzOq1OB.jpg", rating: 8.9 },
    { id: 78, title: "Хоббит: Нежданное путешествие", year: 2012, genre: "Приключения", description: "Начало пути Бильбо", poster: "https://image.tmdb.org/t/p/w500/zTnup9V8UJEG4jWULQQpyKB6Tq0.jpg", rating: 7.8 },
    { id: 79, title: "Король Лев", year: 1994, genre: "Приключения", description: "Путь Симбы к трону", poster: "https://image.tmdb.org/t/p/w500/j8tdiuhbF9p5mnAeA1YOUvz82xY.jpg", rating: 8.5 },
    { id: 80, title: "Аладдин", year: 1992, genre: "Приключения", description: "Волшебная лампа", poster: "https://image.tmdb.org/t/p/w500/92GjkHUHMn9HIZqihuradZNZNLb.jpg", rating: 8.0 },
    { id: 81, title: "Мулан", year: 1998, genre: "Приключения", description: "Девушка-воин", poster: "https://image.tmdb.org/t/p/w500/wLB0VhC2FafMr6QEVH9ReX0Id3j.jpg", rating: 7.9 },
    { id: 82, title: "Тачки", year: 2006, genre: "Приключения", description: "Гонки и дружба", poster: "https://image.tmdb.org/t/p/w500/fnM322LJHBPFiwYLHe5KHSdYKfZ.jpg", rating: 7.2 },
    { id: 83, title: "Зверополис", year: 2016, genre: "Приключения", description: "Город животных", poster: "https://image.tmdb.org/t/p/w500/5qcww3ZqlpCqPrUessuFkdwsDL2.jpg", rating: 8.0 },
    { id: 84, title: "Как приручить дракона", year: 2010, genre: "Приключения", description: "Дружба викинга и дракона", poster: "https://image.tmdb.org/t/p/w500/cMUmeDM2QRlSOAK9onB8PhXtdZJ.jpg", rating: 8.1 }
];
