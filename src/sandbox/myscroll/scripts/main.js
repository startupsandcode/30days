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

});