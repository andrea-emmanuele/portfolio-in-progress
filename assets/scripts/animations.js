title();
subTitle();
buttons();
illustration();

function floatingWindow() {
    const window = document.querySelector('svg #window');

    let tl = gsap.timeline({repeat: -1, repeatDelay: .4});
    tl.to(window, {y: 20, duration: 2});
    tl.to(window, {y: 0, duration: 2});

    TweenLite.to(tl, 27, {ease: Power1.easeInOut})
}

function movingPainterHead() {
    const head = document.querySelector('svg #head_2');

    let tl = gsap.timeline({repeat: -1, repeatDelay: .4, yoyo: true});
    tl.to(head, {rotation: 0, duration: 2, transformOrigin:"50% 50%"});
    tl.to(head, {rotation: 20, duration: 2, transformOrigin:"50% 50%"});

    TweenLite.to(tl, 27, {ease: Power1.easeInOut})
}

function movingBrush() {
    const brush = document.querySelector('svg #brush');

    let tl = gsap.timeline({repeat: -1, repeatDelay: .1, yoyo: true});
    tl.to(brush, {rotation: 0, duration: 1, transformOrigin:"left 50%"});
    tl.to(brush, {rotation: 15, y: 5, duration: .5, transformOrigin:"right bottom"});

    TweenLite.to(tl, 20, {ease: Power1.easeInOut})
}

function movingDrops() {
    const drops = [];

    drops.push(document.querySelector('#drop1'));
    drops.push(document.querySelector('#drop2'));
    drops.push(document.querySelector('#drop3'));
    drops.push(document.querySelector('#drop4'));
    drops.push(document.querySelector('#drop5'));
    drops.push(document.querySelector('#drop6'));
    drops.push(document.querySelector('#drop7'));

    let tl = gsap.timeline({repeat: -1, repeatDelay: 1});
    tl.fromTo(drops[0], {opacity: 0, y: -20}, {opacity: 1, y: 100, duration: .3, transformOrigin:"50% 50%"}, "1");
    tl.fromTo(drops[1], {opacity: 0, y: -20}, {opacity: 1, y: 110, x: 8, duration: .4, transformOrigin:"50% 50%"}, "2");
    tl.fromTo(drops[2], {opacity: 0, y: -10}, {opacity: 1, y: 110, x: 9, duration: .2, transformOrigin:"50% 50%"}, "2.5");
    tl.to(drops[0], {opacity: 0, y: 100, duration: .1, transformOrigin:"50% 50%"}, "1.3");
    tl.to(drops[1], {opacity: 0, y: 110, x: 8, duration: .1, transformOrigin:"50% 50%"}, "2.4");
    tl.to(drops[2], {opacity: 0, y: 110, x: 9, duration: .1, transformOrigin:"50% 50%"}, "2.7");
    tl.fromTo(drops[3], {opacity: 0}, {opacity: 1, duration: .2, transformOrigin:"50% 50%"}, "1.3");
    tl.fromTo(drops[4], {opacity: 0}, {opacity: 1, duration: .2, transformOrigin:"50% 50%"}, "2.4");
    tl.fromTo(drops[5], {opacity: 0}, {opacity: 1, duration: .2, transformOrigin:"50% 50%"}, "2.7");
    tl.to(drops[3], {opacity: 0, duration: .45, transformOrigin:"50% 50%"}, "1.5");
    tl.to(drops[4], {opacity: 0, duration: .4, transformOrigin:"50% 50%"}, "2.6");
    tl.to(drops[5], {opacity: 0, duration: .3, transformOrigin:"50% 50%"}, "2.9");

    TweenLite.to(tl, 27, {ease: Power1.easeInOut})
}

function movingCatTail() {
    const tail = document.querySelector('svg #tail');

    let tl = gsap.timeline({repeat: -1, repeatDelay: .1, yoyo: true});
    tl.to(tail, {rotation: 0, duration: 1, transformOrigin:"left 50%"});
    tl.to(tail, {rotation: -15, duration: .5, transformOrigin:"left bottom"});

    TweenLite.to(tl, 20, {ease: Power1.easeInOut})
}

function movingCatPupils() {
    const pupilSx = document.querySelector('svg #pupil_sx');
    const pupilDx = document.querySelector('svg #pupil_dx');

    let tl = gsap.timeline({repeat: -1, repeatDelay: .35, yoyo: true});
    tl.to(pupilSx, {rotation: 0, y: 0, duration: 1}, "2");
    tl.to(pupilSx, {rotation: -15, y: -5, duration: .5}, "3");
    tl.to(pupilSx, {rotation: 0, y: 0, duration: .5}, "5");
    tl.to(pupilSx, {rotation: 10, y: -6, x: 12, duration: .7}, "7");
    tl.to(pupilSx, {rotation: 0, y: -4, x: 5, duration: .4}, "9");
    tl.to(pupilSx, {rotation: 0, y: -4, x: 5, duration: .4}, "11");
    tl.to(pupilSx, {rotation: 0, y: 0, x: 0, duration: 1, delay: 2}, "12");

    tl.to(pupilDx, {rotation: 0, y: 0, duration: 1}, "2");
    tl.to(pupilDx, {rotation: -15, y: -5, duration: .5}, "3");
    tl.to(pupilDx, {rotation: 0, y: 0, duration: .5}, "5");
    tl.to(pupilDx, {rotation: 10, y: -6, x: 12, duration: .7}, "7");
    tl.to(pupilDx, {rotation: 0, y: -4, x: 5, duration: .6}, "9");
    tl.to(pupilDx, {rotation: 0, y: -4, x: 5, duration: .6}, "11");
    tl.to(pupilDx, {rotation: 0, y: 0, x: 0, duration: 1, delay: 2}, "12");

    TweenLite.to(tl, 27, {ease: Power1.easeInOut})
}

function illustration() {
    const illustration = document.querySelector('#illustration');
    gsap.fromTo(illustration, {opacity: 0, x: 1000, duration: 1}, {opacity: 1, x: 0});

    floatingWindow();
    movingPainterHead();
    movingBrush();
    movingDrops();
    movingCatPupils();
    movingCatTail();
}

function subTitle() {
    const subtitleContainer = document.querySelector('#sub-title');
    const subtitle = 'Thank you for being here.';
    const splittedSubtitle = subtitle.split('');

    splittedSubtitle.forEach(item => {
        subtitleContainer.innerHTML += `<span class="letter">${item}</span>`;
    })

    textAnimation(subtitleContainer, 30, 1000);
}

function buttons() {
    const buttons = document.querySelectorAll(".buttons-group");
    gsap.fromTo(buttons, {opacity: 0, x: -1000, duration: 1}, {opacity: 1, x: 0, delay: 2});
}

function title() {
    const titleContainer = document.querySelector('#title');
    const title = 'Still in progress.';
    let titleAnimDuration = 0;
    const duration = 3;

    const splittedTitle = title.split('');

    splittedTitle.forEach(item => {
        titleContainer.innerHTML += `<span class="letter">${item}</span>`;
        titleAnimDuration += duration;
    })

    titleContainer.children[titleContainer.children.length - 1].classList.remove('letter');
    titleContainer.children[titleContainer.children.length - 1].classList.add('point');

    textAnimation(titleContainer, titleAnimDuration, 0);
}

function textAnimation(el, animDuration, animDelay) {
    let i = 0;

    setTimeout( () => {
        const dropdownAnim = setInterval(() => {
            if (el.children[i].classList.contains('letter'))
                gsap.fromTo(el.children[i], {opacity: 0}, {opacity: 1, duration: 1});
            else
                gsap.to(el.children[i], {y: 0, duration: 1.2, ease: "elastic.out(1, 1"});

            i++;

            if (i === el.children.length)
                clearInterval(dropdownAnim);
        }, animDuration);
    }, animDelay);
}


