document.addEventListener('DOMContentLoaded', function() {
    const references = {
        'a': 'D&C 49:15 - And again, verily I say unto you, that whoso forbiddeth to marry is not ordained of God, for marriage is ordained of God unto man.',
        'b': 'D&C 132:19 - And again, verily I say unto you, if a man marry a wife by my word, which is my law, and by the new and everlasting covenant, and it is sealed unto them by the Holy Spirit of promise, by him who is anointed, unto whom I have appointed this power and the keys of this priesthood; and it shall be said unto them—Ye shall come forth in the first resurrection; and if it be after the first resurrection, in the next resurrection; and shall inherit thrones, kingdoms, principalities, and powers, dominions, all heights and depths—then shall it be written in the Lamb`s Book of Life, that he shall commit no murder whereby to shed innocent blood, and if ye abide in my covenant, and commit no murder whereby to shed innocent blood, it shall be done unto them in all things whatsoever my servant hath put upon them, in time, and through all eternity; and shall be of full force when they are out of the world; and they shall pass by the angels, and the gods, which are set there, to their exaltation and glory in all things, as hath been sealed upon their heads, which glory shall be a fulness and a continuation of the seeds forever and ever.',
        'c': 'Genesis 1:27 - So God created man in his own image, in the image of God created he him; male and female created he them.',
        'd': 'Acts 17:29 - Forasmuch then as we are the offspring of God, we ought not to think that the Godhead is like unto gold, or silver, or stone, graven by art and man’s device.',
        'e': 'Psalm 82:6 - I have said, Ye are gods; and all of you are children of the most High.',
        'f': 'Genesis 1:26 - And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.',
        'g': 'Abraham 4:26 - And the Gods took counsel among themselves and said: Let us go down and form man in our image, after our likeness; and we will give them dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.',
        'h': 'D&C 130:2 - And that same sociality which exists among us here will exist among us there, only it will be coupled with eternal glory, which glory we do not now enjoy.',
        'i': 'D&C 128:15 - And now, my dearly beloved brethren and sisters, let me assure you that these are principles in relation to the dead and the living that cannot be lightly passed over, as pertaining to our salvation. For their salvation is necessary and essential to our salvation, as Paul says concerning the fathers—that they without us cannot be made perfect—neither can we without our dead be made perfect.',
        'j': 'Genesis 1:28 - God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.',
        'k': 'Moses 2:28 - And I, God, blessed them, and said unto them: Be fruitful, and multiply, and replenish the earth, and subdue it, and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.',
        'l': '2 Corinthians 7:1 - Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh and spirit, perfecting holiness in the fear of God.',
        'm': '1 Nephi 7:1 - And now I would that ye might know, that after my father, Lehi, had made an end of prophesying concerning his seed, it came to pass that the Lord spake unto him again, saying that it was not meet for him, Lehi, that he should take his family into the wilderness alone; but that his sons should take daughters to wife, that they might raise up seed unto the Lord in the land of promise.',
        'n': '1 Corinthians 3:16 - Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?',
        'o': 'D&C 93:40 - But I have commanded you to bring up your children in light and truth.',
        'p': 'Psalm 127:3 - Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.',
        'q': 'Mosiah 4:15 - But ye will teach them to walk in the ways of truth and soberness; ye will teach them to love one another, and to serve one another.',
        'r': 'D&C 68:25 - And again, inasmuch as parents have children in Zion, or in any of her stakes which are organized, that teach them not to understand the doctrine of repentance, faith in Christ the Son of the living God, and of baptism and the gift of the Holy Ghost by the laying on of the hands, when eight years old, the sin be upon the heads of the parents.',
        's': 'Jeremiah 31:1 - At the same time, saith the Lord, will I be the God of all the families of Israel, and they shall be my people.',
        't': 'D&C 49:15 - And again, verily I say unto you, that whoso forbiddeth to marry is not ordained of God, for marriage is ordained of God unto man.',
        'u': 'Isaiah 54:13 - And all thy children shall be taught of the Lord; and great shall be the peace of thy children.',
        'v': 'Jacob 3:7 - Behold, their husbands love their wives, and their wives love their husbands; and their husbands and their wives love their children; and their unbelief and their hatred towards you is because of the iniquity of their fathers; wherefore, how much better are you than they, in the sight of your great Creator?',
        'w': '3 Nephi 18:21 - Pray in your families unto the Father, always in my name, that your wives and your children may be blessed.',
        'x': 'D&C 75:28 - And again, verily I say unto you, that every man who is obliged to provide for his own family, let him provide, and he shall in nowise lose his crown; and let him labor in the church.',
        'y': 'Alma 57:21 - Yea, and they did obey and observe to perform every word of command with exactness; yea, and even according to their faith it was done unto them; and I did remember the words which they said unto me that their mothers had taught them.',
        'z': '1 Corinthians 7:3 - Let the husband render unto the wife due benevolence: and likewise also the wife unto the husband.',
        'aa': 'John 9:2-3 - And his disciples asked him, saying, Master, who did sin, this man, or his parents, that he was born blind? Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.',
        'bb': 'D&C 84:103 - And again, verily, verily, I say unto you, it is expedient that every man who goes forth to proclaim mine everlasting gospel, that inasmuch as they have families, and receive money by gift, that they should send it unto them or make use of it for their benefit, as the Lord shall direct them, for thus it seemeth me good.',
        'cc': 'Jacob 2:35 - Behold, ye have done greater iniquities than the Lamanites, our brethren. Ye have broken the hearts of your tender wives, and lost the confidence of your children, because of your bad examples before them; and the sobbings of their hearts ascend up to God against you. And because of the strictness of the word of God, which cometh down against you, many hearts died, pierced with deep wounds.',
        'dd': '1 Nephi 14:17 - And when the day cometh that the wrath of God is poured out upon the mother of harlots, which is the great and abominable church of all the earth, whose founder is the devil, then, at that day, the work of the Father shall commence, in preparing the way for the fulfilling of his covenants, which he hath made to his people who are of the house of Israel.',
        'ee': 'D&C 134:1 - We believe that governments were instituted of God for the benefit of man; and that he holds men accountable for their acts in relation to them, both in making laws and administering them, for the good and safety of society.'
    };

    let lastClickedRef = null;

    document.querySelectorAll('.interactive').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            const refKey = element.getAttribute('data-ref');
            const refText = references[refKey];
            document.getElementById('reference-text').textContent = refText;
            if (lastClickedRef !== element) {
                highlightTarget(element);
            }
        });

        element.addEventListener('mouseout', function() {
            if (lastClickedRef !== element) {
                document.getElementById('reference-text').textContent = 'Select a reference to see more information here.';
                removeHighlight(element.getAttribute('data-target'));
            }
        });
        
        element.addEventListener('click', function(event) {
            event.stopPropagation();
            if (lastClickedRef === element) {
                removeHighlight(element.getAttribute('data-target'));
                lastClickedRef = null;
                document.getElementById('reference-text').textContent = 'Select a reference to see more information here.';
            } else {
                const refKey = element.getAttribute('data-ref');
                const refText = references[refKey];
                document.getElementById('reference-text').textContent = refText;

                if (lastClickedRef) {
                    removeHighlight(lastClickedRef.getAttribute('data-target'));
                }
                lastClickedRef = element;
                highlightTarget(element);
            }
        })
    });

    document.addEventListener('click', function() {
        if (lastClickedRef) {
            removeHighlight(lastClickedRef.getAttribute('data-target'));
            lastClickedRef = null;
            document.getElementById('reference-text').textContent = 'Select a reference to see more information here.';
        }
    });

    function highlightTarget(element) {
        const targetId = element.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.add('highlighted');
        }
    }

    function removeHighlight(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.remove('highlighted');
        }
    }
});