// 캐릭터 데이터
const characters = [
    {
        name: "[ LCB 수감자 ] 이상",
        image: "images/Yi Sang/기본이상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 이상",
        image: "images/Yi Sang/세븐이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 디에치 협회 ] 이상",
        image: "images/Yi Sang/디에치상.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 사무소 해결사 ] 이상",
        image: "images/Yi Sang/어금니이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 피쿼드호 일등 항해사 ] 이상",
        image: "images/Yi Sang/피쿼드상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 검계 살수 ] 이상",
        image: "images/Yi Sang/검계살수 이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 개화 E.G.O 동백 ] 이상",
        image: "images/Yi Sang/동백 이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 3등급 정리요원 ] 이상",
        image: "images/Yi Sang/W상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 이상",
        image: "images/Yi Sang/약상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::엄숙한 애도 ] 이상",
        image: "images/Yi Sang/엄숙한애도이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 파우스트",
        image: "images/Faust/기본파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 파우스트",
        image: "images/Faust/w파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 살아남은 로보토미 직원 ] 파우스트",
        image: "images/Faust/살아남은파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 파우스트",
        image: "images/Faust/츠파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 워더링하이츠 버틀러 ] 파우스트",
        image: "images/Faust/버파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 쥐는 자 ] 파우스트",
        image: "images/Faust/쥐파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 파우스트",
        image: "images/Faust/셰파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::후회 ] 파우스트",
        image: "images/Faust/후파우.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 검계 살수 ] 파우스트",
        image: "images/Faust/검파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 멀티크랙 사무소 대표 ] 파우스트",
        image: "images/Faust/멀파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 돈키호테",
        image: "images/DON QUIXOTE/기본돈키.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 시 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/시돈키.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ N사 중간 망치 ] 돈키호테",
        image: "images/DON QUIXOTE/N돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 검계 살수 ] 돈키호테",
        image: "images/DON QUIXOTE/검돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 돈키호테",
        image: "images/DON QUIXOTE/w돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 섕크 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/섕돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 돈키호테",
        image: "images/DON QUIXOTE/중돈.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ T사 3등급 징수직 직원 ] 돈키호테",
        image: "images/DON QUIXOTE/T돈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 료슈",
        image: "images/Ryoshu/기본료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 료슈",
        image: "images/Ryoshu/세븐료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCCB 대리 ] 료슈",
        image: "images/Ryoshu/LCCB료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 ] 료슈",
        image: "images/Ryoshu/리우료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 20구 유로지비 ] 료슈",
        image: "images/Ryoshu/유료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 료슈",
        image: "images/Ryoshu/흑슈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 료.고.파. 주방장 ] 료슈",
        image: "images/Ryoshu/료료슈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 료슈",
        image: "images/Ryoshu/w료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 에드가 가문 치프 버틀러 ] 료슈",
        image: "images/Ryoshu/넬슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O::적안 · 참회 ] 료슈",
        image: "images/Ryoshu/로료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 뫼르소",
        image: "images/MEURSAULT/기본뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 6과 ] 뫼르소",
        image: "images/MEURSAULT/리우뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 뫼르소",
        image: "images/MEURSAULT/장미뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 뫼르소",
        image: "images/MEURSAULT/중뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 데드레빗츠 보스 ] 뫼르소",
        image: "images/MEURSAULT/데뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 뫼르소",
        image: "images/MEURSAULT/w뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ N사 큰 망치 ] 뫼르소",
        image: "images/MEURSAULT/N뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ R사 제 4무리 코뿔소팀 ] 뫼르소",
        image: "images/MEURSAULT/코뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 우두머리 ] 뫼르소",
        image: "images/MEURSAULT/검뫼.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 부장 ] 뫼르소",
        image: "images/MEURSAULT/디뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 서부 섕크 협회 3과 ] 뫼르소",
        image: "images/MEURSAULT/섕뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    
];

// 코드
const recommendBtn = document.getElementById('recommend-btn');
const characterName = document.getElementById('character-name');
const characterImage = document.getElementById('character-image');
const slashResistance = document.getElementById('slash-resistance');
const pierceResistance = document.getElementById('pierce-resistance');
const bluntResistance = document.getElementById('blunt-resistance');

function recommendCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selectedCharacter = characters[randomIndex];

    characterName.textContent = selectedCharacter.name;
    characterImage.src = selectedCharacter.image;
    slashResistance.textContent = selectedCharacter.resistances.slash;
    pierceResistance.textContent = selectedCharacter.resistances.pierce;
    bluntResistance.textContent = selectedCharacter.resistances.blunt;
}

recommendBtn.addEventListener('click', recommendCharacter);