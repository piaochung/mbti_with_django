function scrollUp(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    $('html, body').animate({
        scrollTop: top - vheight - margin_top
    }, 500);
};

function scrollDown(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    console.log(top + vheight - margin_top);
    $('html, body').animate({
        scrollTop: top + vheight - margin_top
    }, 500);
}

function on_submit() {
    let question_length = document.getElementsByClassName("answer").length;
    let result = []
    console.log(question_length);

    for (let i = 0; i < question_length; i++) {
        for (let j = 0; j < 2; j++) {
            if (document.getElementsByName(`answer_${i + 1}`)[j].checked == true) {
                result.push(document.getElementsByName(`answer_${i + 1}`)[j].value);
            }
        }
    }
    localStorage.setItem("result", JSON.stringify(result));
}

$(function () {
    $('.next_btn:button').click(function (e) {
        let divs = $(this).parent().prev().children();
        let parent_top = $(this).parent().parent()[0].offsetTop;
        let inputs = divs.find('input:checked');
        if (inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown(parent_top);
    });

    $('.prev_btn:button').click(function (e) {
        let parent_top = $(this).parent().parent()[0].offsetTop;
        e.preventDefault();
        scrollUp(parent_top);
    });

    $("#form").submit(function () {
        let radios = $('input[type=radio]:checked');
        if (radios.length < max_question_length) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        return true;
    });

    $("html, body").animate({
        scrollTop: 0
    }, 500);
});