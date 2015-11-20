var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/ bring/gi, 'camel');
            replacedText = replacedText.replace(/ brought/gi, 'cameled');
            replacedText = replacedText.replace(/ get/gi, 'camel');
            replacedText = replacedText.replace(/ got/gi, 'cameled');
            replacedText = replacedText.replace(/ gotten/gi, 'cameled');
            replacedText = replacedText.replace(/ Ivan/gi, 'gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay');
            replacedText = replacedText.replace(/ Ivans/gi, 'Faggyboi');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}