$(function() {
    console.log('DOM załadowany - można się bawić');
});

function Button(text) {
    this.text = text || ‘Hello’;
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $(‘ < button > ’);
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        $(‘body’).append(this.$element);
    }
}

this.$element.click(function() {
    alert(self.text);
});

var btn1 = new Button(‘Hello!’);

btn1.create();