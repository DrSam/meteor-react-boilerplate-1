$(document).ready(function() {
    $('select').material_select();
    $(".button-collapse").sideNav();

    $('.range-slider').each(function() {
        var $this = $(this),
            configs = new Array();

        configs['min'] = ($this.data('min') === undefined) ? 0 : $this.data('min');
        configs['max'] = ($this.data('max') === undefined) ? 100 : $this.data('max');
        configs['start'] = ($this.data('start') === undefined) ? [configs['min'], configs['max']] : $this.data('start');
        configs['step'] = ($this.data('step') === undefined) ? 1 : $this.data('step');
        configs['currency'] = ($this.data('currency') === undefined) ? $('.dropdown-money #symbol').text() : $this.data('currency');

        $this.noUiSlider({
            range: {
                min: configs['min'],
                max: configs['max']
            },
            start: configs['start'],
            step: configs['step'],
            connect: true,
            handles: 2
        });

        $this.siblings('.range-slider-value').find('> .min').text(configs['currency'] + $this.val()[0]);
        $this.siblings('.range-slider-value').find('> .max').text(configs['currency'] + $this.val()[1]);
    });

});
