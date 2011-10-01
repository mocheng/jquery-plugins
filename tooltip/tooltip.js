(function($) {

$.fn.tooltip = function(options) {

    function getTip() {
        return '<p style="font-size:32px; position:absolute; background:yellow; display:none; zIndex:9999" class="content">hide</p>';
    }

    var tip = tip || $(getTip()).appendTo($('body'));

    $.extend(tip, {
        set: function (content) {
            return this.html(content);
        },

        show: function(x, y) {
            return this.css({top : y, left : x}).fadeIn('slow');
        },

        hide: function() {
            return this.fadeOut('slow');
        }
    });

    return this.each(function() {
        var $this = $(this),
            title = $this.attr('title');

        if (title) {
            this.title = '';

            $this.hover(function(e) {
                tip.set(title);
                tip.show(e.pageX, e.pageY);
            }, function(e){
                tip.hide();
            });
        }
    });
};

}(jQuery));
