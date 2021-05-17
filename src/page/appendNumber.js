import $ from 'jquery';
import getColor, { getRandom } from '../util/radomColor'
export default function (n, isPrime) {
    const color = getColor()

    let span = $('<span>').text(n)
    if (isPrime) {
        $('#divContainer').append(span)
        span.css('color', color)
        createCenter(n, color)
    }
    $('#divContainer').append(span)
}


function createCenter(n, color) {
    var div = $("<div>").addClass("center").css("color", color).text(n);
    $("body").append(div);

    getComputedStyle(div[0]).left
    // div.css('transform', `translate(${getRandom(-200, 200)}px,${getRandom(-200, 200)}px)`).css('opacity',0)
    div.css("transform", `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`).css("opacity", 0)

}