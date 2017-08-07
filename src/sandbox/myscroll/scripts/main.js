window.addEventListener('load', function () {
    new Scrollify('#transformer')
        .addScene({
            start: 0.2, // start the Scene when the element reaches 20% of the viewport
            duration: '300px',
            effects: [{
                    fn: Scrollify.fx.translateY,
                    options: {
                        from: -400,
                        to: 0
                    }
                },
                {
                    fn: Scrollify.fx.fade,
                    options: {
                        from: -1,
                        to: 1
                    }
                }
            ]
        });
    new Scrollify('#robust')
        .addScene({
            start: 0.1,
            duration: '200px',
            effects: [{
                    fn: Scrollify.fx.translateX,
                    options: {
                        from: 0,
                        to: 500
                    }
                },
                {
                    fn: Scrollify.fx.rotate,
                    options: {
                        rad: Math.PI
                    }
                }
            ]
        });
    new Scrollify('#notes')
        .addScene({
            start: 0.1,
            duration: '200px',
            effects: [{
                    fn: Scrollify.fx.translateX,
                    options: {
                        from: 0,
                        to: -500
                    }
                },
                {
                    fn: Scrollify.fx.rotate,
                    options: {
                        rad: Math.PI
                    }
                }
            ]
        });
    new Scrollify('#sticky')
        .addScene({
            trigger: '#trigger',
            start: 0.2,
            duration: '300px',
            effects: [{
                fn: Scrollify.fx.rotate,
                options: {
                    rad: Math.PI * 2
                }
            }]
        });
    new Scrollify('#transformer-4')
        .addScene({
            start: 0.3,
            duration: '500px',
            easing: Scrollify.easings.easeInElastic,
            effects: [{
                fn: Scrollify.fx.scale,
                options: {
                    to: 1.5,
                    from: 1.0
                }
            }]
        });
    new Scrollify('#transformer-5')
        .addScene({
            start: 0.4,
            effects: [{
                fn: Scrollify.fx.scale,
                options: {
                    to: 0.5,
                    from: 1.0
                },
            }, {
                fn: Scrollify.fx.rotate,
                options: {
                    rad: Math.PI
                }
            }, {
                fn: Scrollify.fx.translateX,
                options: {
                    to: 400,
                    from: 0
                }
            }]
        });
    new Scrollify('#sticky')
        .addScene({
            trigger: '#multiple',
            duration: '300px',
            easing: Scrollify.easings.easeIn,
            effects: [{
                fn: Scrollify.fx.translateY,
                options: {
                    to: 300,
                    from: 0 // TODO: getComputedStyle instead
                }
            }, {
                fn: Scrollify.fx.fade,
                options: {
                    to: 0.2,
                    from: 1
                }
            }, {
                fn: Scrollify.fx.rotate,
                options: {
                    rad: Math.PI * 4
                }
            }]
        })
        .addScene({
            trigger: '#multiple',
            start: 0.7,
            duration: '300px',
            effects: [{
                fn: Scrollify.fx.translateY,
                options: {
                    to: 0, // TODO -=, or skip from
                    from: 300 // TODO: getComputedStyle instead
                }
            }, {
                fn: Scrollify.fx.fade,
                options: {
                    to: 1,
                    from: 0.2
                }
            }]
        });
    new Scrollify('#parallax').addEffect(Scrollify.fx.parallax, {
        range: 300
    });
    new Scrollify('#stick') // the element to target
        .addScene({ // start / stop, duration etc. of the effect
            'start': 0.5, //   'start': when at 50% of the viewport
            'duration': '500px', //   'duration': 300 pixels
            'effects': [{
                'fn': Scrollify.fx.stick // the effect to apply, and when (within the progress of the scene)
            }]
        });
    new Scrollify('#transformer-8')
        .addScene({
            'applyTransform': false,
            'effects': [{
                'fn': Scrollify.fx.toggle,
                'options': {
                    0.2: 'red',
                    0.5: 'blue',
                    0.7: 'green'
                }
            }]
        });
});