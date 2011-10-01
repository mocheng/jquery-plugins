(function($) {

$.fn.tooltip = function(options) {

    function getTip() {
        return '<p style="font-size:32px; position:absolute; background:yellow; display:none; zIndex:9999" class="content">hide</p>';
    }

    function setTip(content) {
        tip.html(content);
    }

    function showTip(x, y) {
        tip.css({top : y, left : x});
        tip.fadeIn('slow');
    }

    function hideTip() {
        tip.fadeOut('slow');
    }

    var tip = tip || $(getTip()).appendTo($('body'));
    //console.log(tip.html());

    return this.each(function() {
        var $this = $(this),
            title = $this.attr('title');

        if (title) {
            this.title = '';

            $this.hover(function(e) {
                setTip(title);
                //showTip($this.offset());
                showTip(e.pageX, e.pageY);
            }, function(e){
                hideTip();
            });
        }
    });
};

}(jQuery));
