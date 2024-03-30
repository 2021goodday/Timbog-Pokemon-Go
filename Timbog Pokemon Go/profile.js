window.addEventListener('load', () => {
    let skillSets = document.getElementsByClassName('XP-bar')
    for (let set of skillSets) {
        let bounds = set.dataset.range.split(',').map(v => parseFloat(v));
        let range = bounds[1] - bounds[0];

        let skills = set.children;
        let i = 0;
        for (let s of skills) {
            let progress = document.createElement('div');
            progress.className = 'progress';
            let bar = document.createElement('span');
            bar.className = 'level-bar';
            progress.appendChild(bar);
            s.appendChild(progress);

            let level = parseFloat(s.dataset.level);
            const zoom = 4;
            const width = 200;
            const newWidth = zoom * width;
            const minLeft = width - newWidth;
            const newLeft = Math.min(0,
                (level - bounds[0]) / range * minLeft);

            anime({
                targets: bar,
                width: [0, level * 100 + '%'],
                backgroundSize: [`${width}px`, `${newWidth}px`],
                backgroundPosition: [`${0}px`, `${newLeft}px`],
                easing: 'easeOutSine',
                duration: 1500,
                delay: i++ * 300
            });
        }
    }
});
