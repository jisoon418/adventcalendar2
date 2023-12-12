// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "문배랑 2023년 마지막 달의 시작" },
  { "number": 2, "message": "12월의 2일 토요일은 마라떡볶이 먹는 날!" },
  { "number": 3, "message": "문배랑 함께한지 벌써 일!년! 사랑해:)" },
  { "number": 4, "message": "12월은 우리가 함께할 수 있는 시간이 적어서 조금 슬퍼영ㅠㅠ" },
  { "number": 5, "message": "우리의 소소한 행복을 모아 만드는 특별한 크리스마스!" },
  { "number": 6, "message": "문배가 오늘도 행복한 하루를 보냈기를!" },
  { "number": 7, "message": "함께하는 우리의 두번째 크리스마스가 기대되시나용?ㅎㅎ" },
  { "number": 8, "message": "12월은 행복한 순간들만 가득한 달이길:)" },
  { "number": 9, "message": "추운 겨울이지만 문배와 함께해서 따뜻한 겨울이 될지두" },
  { "number": 10, "message": "문배가 없는 주말이여서 너무 심심해용:(" },
  { "number": 11, "message": "12월은 연말이니 고마운 사람한테는 '고맙다!'라고 표현하기!" },
  { "number": 12, "message": "올해를 잘 지나오느라 고생 많이한 자신에게 작은 칭찬하기! " },
  { "number": 13, "message": "좋은 사람들만 곁에 남고 좋은 생각들만 떠오르기를 :)" },
  { "number": 14, "message": "내가 가끔 무너질 것만 같을 때 옆에서 잡아줘서 고마워" },
  { "number": 15, "message": "문배는 린스 안써도 되겠다.. 나만의 프린스니까..." },
  { "number": 16, "message": "우리의 지난 추억들이 찬란한 빛으로 가득 물들이기를 바라!." },
  { "number": 17, "message": "문배랑 함께한다는 것만으로도 행복한 일 :)" },
  { "number": 18, "message": "나도 문배가 힘들 때 늘 힘이 되어줄께 :)" },
  { "number": 19, "message": "늘 보고싶은 우리 문배 :) 사랑해 :)" },
  { "number": 20, "message": "문배 보고싶을때마다 이마 쳤더니 거북목 완치 ㅇㅅㅇ;" },
  { "number": 21, "message": "지금까지도 잘해왔고 앞으로도 잘할거니까 우리 너무 걱정하지말자!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두 문배에게 가기를!" },
  { "number": 23, "message": "올해의 너는 나에게 햇살같은 존재였어:) 늘 고마워!" },
  { "number": 24, "message": "즐거운 크리스마스보내면서 내년도 잘 부탁해! 사랑해!" }
];

