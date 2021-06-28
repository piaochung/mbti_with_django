const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');
const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('14121d7d465e6381593bb178928a0f00');

const base_url = "img/character_image/"
let info = [
  // ISTJ 0000
  ["ISTJ", "청렴결백한 논리주의자", "정리의 달인", "정리된 것을 좋아하는 편입니다.", "계획에 맞게 필요한만큼만 일하는 것을 좋아합니다.", base_url + "0000.png"],
  // ISTP 0001
  ["ISTP", "만능 재주군", "설계 달인", "관심없는 분야에는 상관을 쓰지 않는 편입니다.", "하나에 꽂히면 해결될 때까지 일에 신경씁니다.", base_url + "0001.png"],
  // ISFJ 0010
  ["ISFJ", "용감한 수호자", "최고의 서포터", "다수의 의견을 따르는 편입니다.", "차분하고 협조적입니다.", base_url + "0010.png"],
  // INTJ 0100
  ["INTJ", "용의주도한 전략가", "이성적인 전략가", "이성적인 계획을 세우는 편입니다.", "처음부터 나서기보다는 어려운 상황에서 빛을 발합니다.", base_url + "0100.png"],
  // ESTJ 1000
  ["ESTJ", "엄격한 관리자", "계획왕", "정확하고, 세부적인 계획을 세우는 편입니다.", "질서있는 것을 좋아합니다.", base_url + "1000.png"],
  // ISFP 0011
  ["ISFP", "호기심 많은 예술가", "날개 없는 천사", "거절을 못하고, 양보는 잘하는 편입니다.", "개인과제는 미뤄도 조별과제는 미뤄지 않습니다.", base_url + "0011.png"],
  // INTP 0101
  ["INTP", "논리적인 사색가", "게으른 천재", "협동심보다는 효율성을 추구하는 편입니다.", "팀이 구성되면 자신을 포함한 팀원들의 역량을 파악합니다.", base_url + "0101.png"],
  // ESTP 1001
  ["ESTP", "모함을 즐기는 사업가", "현실적 중재자", "호기심이 많고 표현에 솔직한 편입니다.", "팀에 갈등이 발생하면 빠르게 중재합니다.", base_url + "1001.png"],
  // INFJ 0110
  ["INFJ", "선의의 옹호자", "성실한 완벽주의자", "의견은 내야 할 때에만 내는 편입니다.", "회의 중 무의미한 대화로 시간을 보내는 것을 싫어합니다.", base_url + "0110.png"],
  // ENTJ 1100
  ["ENTJ", "대담한 통솔자", "본투비 조장", "조장이 조장답지 못하다면 조장의 일까지 하는 편입니다.", "인간관계보다는 일을 못하는 것에 더 힘들어합니다.", base_url + "1100.png"],
  // ESFJ 1010
  ["ESFJ", "사교적인 외교관", "분위기 메이커", "어색한 분위기를 참지 못하고, 칭찬에 능숙한 편입니다.", "팀 내부에 갈등이 발생하는 것을 힘들어합니다.", base_url + "1010.png"],
  // ENFJ 1110
  ["ENFJ", "정의로운 사회운동가", "열정가득 배려왕", "계획대로 일이 진행되지 않는 것을 힘들어하는 편입니다.", "조원들이 못 미더운 경우에 혼자서 모든 것을 해결합니다.", base_url + "1110.png"],
  // ENTP 1101
  ["ENTP", "뜨거운 논쟁을 즐기는 변론가", "창의력 대장", "논리적이지 않고, 비합리적인 결론을 나오는 경우 참지 못하는 편입니다.", "정해진 틀을 좋아하지 않고, 남 눈치를 보지 않습니다.", base_url + "1101.png"],
  // ESFP 1011
  ["ESFP", "자유로운 영혼의 연예인", "에너지 뿜뿜", "팀원들을 잘 챙기고, 팀프로젝트가 끝나도 두루두루 친하게 지내는 편입니다.", "좋게 이야기할 때 해결되지 않으면 선을 그어버립니다.", base_url + "1011.png"],
  // INFP 0111
  ["INFP", "열정적인 중재자", "게으른 완벽주의자", "팀원들에게 폐 끼치지는 않을까 고민을 많이하는 편입니다.", "맡은 일에 책임감을 가지고 해결하려고 합니다.", base_url + "0111.png"],
  // ENFP 1111
  ["ENFP", "재기발랄한 활동가", "칭찬은 나를 숨쉬게 해", "일을 즉흥적이고, 마감일이 다가왔을 때 해결하는 편입니다.", "아이디어가 많고, 발표를 잘합니다.", base_url + "1111.png"],
];

let info_structure = []
function info_to_structure(value) {
  let info = {};
  info.type = value[0];
  info.sub_title = value[1];
  info.title = value[2];
  info.description_1 = value[3];
  info.description_2 = value[4];
  info.image_url = value[5];
  return info;
}

window.onload = function (e) {
  let type = "";
  set_participant();
  if (localStorage.getItem("result") != null) {
    const result = JSON.parse(localStorage.getItem("result"));
    console.log(result);
    let select_sum = 0;
    let step = 0;

    for (let i = 0; i < result.length + 1; i++) {
      if (i % 3 == 0 && i != 0) {
        type += discriminate_type(step, select_sum);
        select_sum = 0;
        step += 1
      }
      select_sum += parseInt(result[i]);
    }
    console.log(type);
  }

  for (let i = 0; i < info.length; i++) {
    info_structure.push(info_to_structure(info[i]));
  }

  for (let i = 0; i < info.length; i++) {
    if (info_structure[i].type == type) {
      // 계산된 타입과 맞는 정보를 연결
      set_value_to_element(info_structure[i]);
    }
  }
}

function set_value_to_element(value) {
  const sub_title = document.getElementById("sub_title");
  const explain_title = document.getElementById("title");
  const title = document.getElementById("head_title");
  const img_type = document.getElementById("img_type");
  const description_1 = document.getElementById("description_1");
  const description_2 = document.getElementById("description_2");
  const mbti = document.getElementById("mbti");

  sub_title.innerText = value.sub_title;
  explain_title.innerText = `나의 팀프로젝트 유형은 ${value.title}?!?!`;
  title.innerText = value.title;
  img_type.src = value.image_url;
  description_1.innerText = value.description_1;
  description_2.innerText = value.description_2;
  mbti.href = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-" + value.type;
}

function set_participant() {
  if (localStorage.getItem("participant") != null) {
    let participant = localStorage.getItem("participant");
    participant = parseInt(participant) + 1;
    localStorage.setItem("participant", participant);
  }
  else {
    localStorage.setItem("participant", 1);
  }
  console.log(localStorage.getItem("participant"));
}

function discriminate_type(step, select_sum) {
  const positive_type = ["I", "S", "T", "J"]
  const negative_type = ["E", "N", "F", "P"];
  console.log(select_sum);
  if (select_sum > 0) {
    // I, S, T, J
    return positive_type[step];
  }
  else {
    // E, N, F, P
    return negative_type[step];
  }
}

$(function () {
  let url = window.location.href;
  let img = $('.result_img img').attr('src');
  $("meta[property='og:\\:url']").attr('content', url);
  $("meta[property='og:\\:image']").attr('content', img);
});

function shareKakao() {
  let result_url = window.location.href;
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 팀프로젝트 유형은?',
      description: '나의 팀프로젝트 유형을 알아보자!!',
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecParams: 'test',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '결과 보러가기',
        link: {
          webUrl: result_url,
          mobileWebUrl: result_url,
        },
      },
      {
        title: '테스트 하러가기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });
}


function copy_url() {
  let tmp = document.createElement('input');
  let url = location.href;

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);
  alert("URL이 복사되었습니다.");
}

function share_facebook() {
  let url = window.location.href;
  let facebook = 'http://www.facebook.com/sharer/sharer/php?u=';
  let link = facebook + encodeURIComponent(url);
  window.open(link, "_blank", "width=600, height=400");
}

copyBtn.addEventListener('click', copy_url);
facebookShare.addEventListener('click', share_facebook);
kakaoShare.addEventListener('click', shareKakao);