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

let info = [
    // E, I를 결정하는 문제 1: I, 2: E
    ["one", "둘 중 어느 쪽에 더 가까우신가요?", "혼자서 일 하는 것을 선호한다.", "팀원 간 협력하는 것을 선호한다."],
    ["two", "학교에서 '나'는 어느 쪽에 더 가까우신가요?", "조용히 있고, 되도록 말을 하지 않으려고 한다.", "친구들과 과제부터 일상까지 대화하며 즐긴다."],
    ["three", "발표 진행에 있어 어느 쪽에 더 가까우신가요?", "여러 사람들 앞에서 실수 하지는 않을지 부담스럽다.", "여러 사람들 앞에서 나의 의견을 표출한다는 것이 설렌다."],
    // N, S를 결정하는 문제 1: S, 2: N
    ["four", "과제 및 프로젝트에 있어 어느 쪽에 더 가까우신가요?", "어느 정도 수준이 되면 충분하다고 생각한다.", "어느 정도 수준이 넘어도 더 잘할 수 있는 방법을 생각한다."],
    ["five", "자료조사 진행에 있어 어느 쪽에 더 가까우신가요?", "명확하고 구체적인 수치 데이터를 넣는 것을 선호한다.", "수치 데이터만 다루기 보다는 나의 아이디어가 잘 들어나는 것을 선호한다."],
    ["six", "과제 및 프로젝트 기준에 있어 어느 쪽에 더 가까우신가요?", "주제부터 구현 내용까지 모든 기준을 제시하는 것", "주제만 제시해주고 나머지는 자유에 맡기는 것"],
    // T, F를 결정하는 문제 1: T, 2: F
    ["seven", "학교 생활에 있어 어떤 사람으로 인식되고 싶은가요?", "주변 사람들에게 능력있는 사람으로 인식되는 것", "주변 사람들에게 따뜻한 사람으로 인식되는 것"],
    ["eight", "팀프로젝트를 진행하는 중에 \"무임승차\"를 하려는 사람이 있을 때 어느 쪽에 더 가까우신가요? ", "팀원들에게 피해를 주는 것이므로 냉정하고, 무정하지만 단호한 결정을 내린다.", "최대한 상대방의 상황을 이해한 후에 결정을 내린다."],
    ["nine", "친구가 과제를 어려워하고 있을 때 어느 쪽에 더 가까우신가요?", "\"너무 어려우면 다른 방향으로 생각해봐\"라며 해결책을 제시한다.", "\"완전 어려운 보이는데 잘하고 있어\"라며 공감해준다."],
    // J, P를 결정하는 문제 1: J, 2: P
    ["ten", "팀프로젝트 첫 회의 시간에 늦은 팀원이 있을 때 어느 쪽에 더 가까우신가요?", "시간 약속은 칼같이 좋지 않은 시각으로 본다.", "늦은 이유에 대해서 들어보고 생각한다."],
    ["eleven", "팀프로젝트 진행 계획을 정할 때 어느 쪽에 더 가까우신가요?", "해야할 일을 시간에 맞게 딱딱 계획한다.", "계획은 널널하게 짜고, 시간을 유동적으로 활용한다."],
    ["twelve", "조장들이 앞에 주제 발표를 진행하였을 때 어느 조장을 더 선호하시나요?", "본인이 하고 싶은게 많아서 1등을 위해 체계적으로 일을 진행하려는 조장", "팀원들이 너무 압박을 받지 않는 선에서 여유롭게 일을 진행하려는 조장"],
]
const max_question_length = info.length;
let info_structure = [];

function info_to_structure(value) {
    let info = {};
    info.name = value[0];
    info.question = value[1];
    info.answer_1 = value[2];
    info.answer_2 = value[3];
    return info;
}

window.onload = function (e) {
    const parent = document.getElementById("form");

    if (localStorage.getItem("result") != null) {
        localStorage.removeItem("result");
    }

    for (let i = 0; i < info.length; i++) {
        info_structure.push(info_to_structure(info[i]));
    }

    for (let i = 0; i < info_structure.length; i++) {
        add_value_to_parent(parent, info_structure[i], i + 1);
    }

}

function add_value_to_parent(parent, value, step) {
    const div_test = document.createElement("div");
    const div_question_container = document.createElement("div");
    const div_answer = document.createElement("div");
    const div_btn = document.createElement("div");
    const div_answer1 = document.createElement("div");
    const div_answer2 = document.createElement("div");

    const h3_number = document.createElement("h3");
    const h3_question = document.createElement("h3");

    const input_answer1 = document.createElement("input");
    const label_answer1 = document.createElement("label");
    const input_answer2 = document.createElement("input");
    const label_answer2 = document.createElement("label");
    const input_submit = document.createElement("input");

    const button_next = document.createElement("button");
    const button_prev = document.createElement("button");

    div_test.setAttribute("class", "test");
    // div class="question_container" 시작
    div_question_container.setAttribute("class", "qustion_container");
    h3_number.setAttribute("class", "number");
    h3_question.setAttribute("class", "question");

    let textNode = document.createTextNode(`${step} / ${max_question_length}`);
    h3_number.appendChild(textNode);

    textNode = document.createTextNode(value.question);
    h3_question.appendChild(textNode);
    div_question_container.appendChild(h3_number);
    div_question_container.appendChild(h3_question);
    div_test.appendChild(div_question_container);

    // div class="answer" 시작 - 첫번째 질문
    let input_id = value.name + "_1";
    div_answer.setAttribute("class", "answer");
    input_answer1.setAttribute("id", input_id);
    input_answer1.setAttribute("type", "radio");
    input_answer1.setAttribute("name", `answer_${step}`);
    input_answer1.setAttribute("value", "1");
    label_answer1.setAttribute("for", input_id);
    textNode = document.createTextNode(value.answer_1);
    label_answer1.appendChild(textNode);
    div_answer1.appendChild(input_answer1);
    div_answer1.appendChild(label_answer1);
    div_answer.appendChild(div_answer1);

    // 두번째 질문
    input_id = value.name + "_2";
    input_answer2.setAttribute("id", input_id);
    input_answer2.setAttribute("type", "radio");
    input_answer2.setAttribute("name", `answer_${step}`);
    input_answer2.setAttribute("value", "-1");
    label_answer2.setAttribute("for", input_id);
    textNode = document.createTextNode(value.answer_2);
    label_answer2.appendChild(textNode);
    div_answer2.appendChild(input_answer2);
    div_answer2.appendChild(label_answer2);
    div_answer.appendChild(div_answer2);
    div_test.appendChild(div_answer);

    // div class="btn_wrap" 시작
    textNode = document.createTextNode("다 음");
    button_next.setAttribute("class", "next_btn");
    button_next.setAttribute("type", "button");
    button_next.appendChild(textNode);

    textNode = document.createTextNode("이 전");
    button_prev.setAttribute("class", "prev_btn");
    button_prev.setAttribute("type", "button");
    button_prev.appendChild(textNode);

    div_btn.setAttribute("class", "btn_wrap btn_sort");

    if (step == 1) { // 처음 질문
        div_btn.setAttribute("class", "btn_wrap");
        div_btn.appendChild(button_next);
    }
    else if (step < max_question_length) { // 중간 질문
        div_btn.appendChild(button_prev);
        div_btn.appendChild(button_next);
    }
    else { // 마지막 질문
        input_submit.setAttribute("class", "submit_btn");
        input_submit.setAttribute("type", "submit");
        input_submit.setAttribute("value", "제 출");
        div_btn.appendChild(button_prev);
        div_btn.appendChild(input_submit);
    }
    div_test.appendChild(div_btn);

    parent.appendChild(div_test); // 이거는 마지막에 들어가야함
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