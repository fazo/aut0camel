//aut0camel v 0.0.4
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/\bbring/gi, 'camel');
            replacedText = replacedText.replace(/\bgetting/gi, 'cameling');
            replacedText = replacedText.replace(/\bbrought/gi, 'cameled');
            replacedText = replacedText.replace(/\bget/gi, 'camel');
            replacedText = replacedText.replace(/\bgot/gi, 'cameled');
            replacedText = replacedText.replace(/\bgotten/gi, 'cameled');
            replacedText = replacedText.replace(/\bboss/gi, 'b0ss');
            replacedText = replacedText.replace(/\bnews/gi, 'memes');
            replacedText = replacedText.replace(/\bfaso/gi, 'fatboi');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
