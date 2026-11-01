// ==========================================
// 1. 題庫資料定義 (2 題鐘聲是非題 + 10 題情境選擇題)
// ==========================================

// (A) 2 題音效是非題 (每次測驗必出)
const audioTrueFalseBank = [
  {
    type: "bell_on",
    isTrueFalse: true,
    story: "請點擊下方按鈕聽聽看這個聲音。",
    question: "請問聽到這個鐘聲，代表是「上課時間」到了，應該趕快回教室坐好嗎？",
    options: ["是 (對)", "不是 (錯)"],
    correct: 0,
    audioSoundType: "bell_on_sound",
    explanation: "清脆的鐘聲是上課的信號，聽到它就要馬上回座位準備上課喔！"
  },
  {
    type: "bell_off",
    isTrueFalse: true,
    story: "請點擊下方按鈕聽聽看這個聲音。",
    question: "請問聽到這個鐘聲，代表可以不用收拾桌面，直接衝出去奔跑玩耍嗎？",
    options: ["是 (對)", "不是 (錯)"],
    correct: 1,
    audioSoundType: "bell_off_sound",
    explanation: "下課時要先收好桌面、準備好下一節課用品，並在走廊慢慢走、不奔跑喔！"
  }
];

// (B) 10 題情境選擇題 (每次隨機抽 6 題)
const scenarioChoiceBank = [
  {
    type: "slide_bell",
    story: "正在操場玩溜滑梯時，突然聽到「噹噹噹噹～」的上課鐘聲響起。",
    question: "聽到上課鐘聲響了，你應該怎麼做？",
    options: [
      "繼續把溜滑梯玩完再回教室",
      "馬上停止玩耍，快步走回教室坐好",
      "躲在樹後面跟同學玩捉迷藏"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "鐘聲是提醒我們「學習時間到了」，馬上回座位坐好，就能準時開始上精彩的課喔！"
  },
  {
    type: "stomach_hand",
    story: "上課到一半時，你突然覺得肚子痛很想上廁所，但老師正在黑板前講課。",
    question: "課堂中想上廁所或不舒服時，該怎麼辦？",
    options: [
      "先舉手，等老師叫你時，大聲告訴老師想去廁所",
      "忍耐不說，一直等到下課",
      "不打招呼，直接站起來走出去"
    ],
    correct: 0,
    audioSoundType: "normal",
    explanation: "在學校有任何不舒服或急事，只要先舉手告訴老師，老師一定會溫柔地幫忙你！"
  },
  {
    type: "blackboard_answer",
    story: "老師在課堂上問大家：「誰知道這張圖片裡是什麼？」你正好知道答案，覺得很興奮。",
    question: "想回答老師的問題或說話時，怎樣才是棒棒的表現？",
    options: [
      "直接大聲喊出答案：「我知道！是我！」",
      "先舉手，靜靜等待老師叫你的名字再回答",
      "拍桌子吸引老師的注意"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "先舉手安靜等叫號，大家才能輪流說話，聽清楚彼此精彩的回答喔！"
  },
  {
    type: "clean_desk",
    story: "鐘聲響起下課了，大家想衝出去玩，但是你的桌上還堆滿了剛剛畫畫的彩色筆和紙張。",
    question: "下課時，應該先做什麼事才能出去玩？",
    options: [
      "把彩色筆留在桌上，直接跑出去玩",
      "把東西塞進同學的抽屜裡",
      "先把彩色筆收好、收拾桌面，並準備下一節課的用品"
    ],
    correct: 2,
    audioSoundType: "normal",
    explanation: "先幫文具找回自己的家，下一節課就不會慌張，更能開心地享受下課時間！"
  },
  {
    type: "swing_queue",
    story: "下課時，遊樂場的鞦韆很多人想玩，前面已經有好幾個同學在排隊了。",
    question: "想玩熱門的遊樂設施時，你應該怎麼做？",
    options: [
      "悄悄插隊擠到最前面",
      "站在隊伍最後面安靜排隊，耐心等待",
      "把正在玩的人拉下來換自己玩"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "遵守秩序排隊輪流玩，大家都能玩得安全又開心，還能結交好朋友！"
  },
  {
    type: "bump_pencils",
    story: "在走廊走動時，你不小心撞到了同學，讓他的彩色筆散落一地。",
    question: "不小心撞到同學時，第一時間應該怎麼做？",
    options: [
      "裝作沒看到，快速跑開",
      "說「對不起」，並主動幫忙把筆撿起來",
      "大聲怪同學：「是你自己擋路！」"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "勇敢說聲「對不起」並幫忙撿東西，同學一定會原諒你，這就是有責任感的表現！"
  },
  {
    type: "soap_water",
    story: "中午打飯時間到了，肚子好餓，大家準備排隊領午餐。",
    question: "吃午餐前，哪一個步驟最重要？",
    options: [
      "先用肥皂把手洗乾淨，再回座位用餐",
      "直接拿湯匙開始吃",
      "拿濕抹布擦完桌子後直接抓東西吃"
    ],
    correct: 0,
    audioSoundType: "normal",
    explanation: "用肥皂把手上的細菌通通洗掉，身體健健康康，飯菜吃起來也會更香更美味！"
  },
  {
    type: "search_eraser",
    story: "上課要拿橡皮擦時，發現在鉛筆盒裡找不到，抽屜裡也沒有。",
    question: "當你發現文具或物品找不到時，該怎麼辦？",
    options: [
      "坐在座位上大哭，不肯上課",
      "舉手向老師求助，或禮貌地向旁邊同學借用",
      "偷偷拿隔壁同學桌上的橡皮擦來用"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "不用害怕大哭，有禮貌地請求老師或同學幫忙，問題一下子就能解決了！"
  },
  {
    type: "nap_time",
    story: "吃完午餐、刷完牙後，午休鐘聲響起，教室點亮了小夜燈。",
    question: "午休時間到了，在教室裡應該怎麼做？",
    options: [
      "趴在桌上安靜休息，不發出聲音打擾別人",
      "找隔壁同學低聲講話聊天",
      "在教室後面玩積木"
    ],
    correct: 0,
    audioSoundType: "normal",
    explanation: "中午安靜趴下充充電，下午才會精神百倍，這也是體貼其他想休息同學的貼心舉動！"
  },
  {
    type: "corridor_walk",
    story: "下課時，你想去圖書館借書，走廊上有好多同學走來走去。",
    question: "在教室外的走廊上移動時，怎樣才安全？",
    options: [
      "像跑步比賽一樣用最快速度衝過去",
      "靠右側輕聲慢步走，不奔跑、不推擠",
      "邊走邊跳繩或踢球"
    ],
    correct: 1,
    audioSoundType: "normal",
    explanation: "走廊是大家通行的地方，慢慢走、靠右行，才不會撞傷自己和別人喔！"
  }
];

// ==========================================
// 2. 音效系統與狀態管理
// ==========================================
let gameState = "START"; 
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = -1;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playSound(type) {
  initAudio();
  if (!audioCtx) return;

  let now = audioCtx.currentTime;
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === "correct") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.12);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === "wrong") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.setValueAtTime(174.61, now + 0.15);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === "click") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, now);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  } else if (type === "bell_on_sound") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.setValueAtTime(783.99, now + 0.25);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc.start(now);
    osc.stop(now + 0.6);
  } else if (type === "bell_off_sound") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(587.33, now + 0.15);
    osc.frequency.setValueAtTime(659.25, now + 0.3);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
    osc.start(now);
    osc.stop(now + 0.65);
  }
}

function shuffleArray(arr) {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getWrappedLines(txt, maxWidth) {
  let words = txt.split("");
  let line = "";
  let lines = [];
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n];
    let testWidth = textWidth(testLine);
    if (testWidth > maxWidth && n > 0) {
      lines.push(line);
      line = words[n];
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  return lines;
}

function drawLines(lines, x, startY, lineHeight) {
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], x, startY + i * lineHeight);
  }
}

// ==========================================
// 3. 高幀率類 GIF 動畫繪圖 Engine (即時算繪)
// ==========================================
function drawScenarioImage(type, x, y, size) {
  push();
  translate(x, y);

  // 卡片背景框
  fill(245, 250, 255);
  stroke("#2660A4");
  strokeWeight(3);
  rect(-size / 2, -size / 2, size, size, 15);

  noStroke();
  let s = size / 100;
  let t = frameCount * 0.08; // 全域時間循環因子

  if (type === "bell_on" || type === "bell_off") {
    // 廣播喇叭與波紋擴散 GIF 特效
    fill("#2660A4");
    rect(-20 * s, -10 * s, 15 * s, 20 * s, 3);
    triangle(-5 * s, -20 * s, 15 * s, -30 * s, 15 * s, 30 * s);

    noFill();
    stroke("#FF5722");
    strokeWeight(3 * s);
    let wave1 = (t * 12) % 25;
    let wave2 = (t * 12 + 12) % 25;
    arc(20 * s, 0, (15 + wave1) * s, (25 + wave1) * s, -QUARTER_PI, QUARTER_PI);
    arc(20 * s, 0, (15 + wave2) * s, (25 + wave2) * s, -QUARTER_PI, QUARTER_PI);
  } else if (type === "slide_bell") {
    // 溜滑梯 + 動態鐘擺與下滑小球
    fill("#4CAF50");
    rect(-45 * s, 25 * s, 90 * s, 15 * s, 5);
    fill("#FF5722");
    triangle(-30 * s, 25 * s, -10 * s, -20 * s, 10 * s, 25 * s);
    fill("#FFC107");
    rect(-10 * s, -20 * s, 35 * s, 8 * s, 3);

    // 下滑小球
    let slideProgress = (t * 0.3) % 1;
    let px = lerp(-10 * s, 25 * s, slideProgress);
    let py = lerp(-25 * s, 20 * s, slideProgress);
    fill("#E76F51");
    ellipse(px, py, 12 * s, 12 * s);

    // 搖擺大鐘
    push();
    translate(25 * s, -20 * s);
    rotate(sin(t * 2) * 0.25);
    fill("#2660A4");
    ellipse(0, 0, 25 * s, 25 * s);
    pop();
  } else if (type === "stomach_hand") {
    // 肚子痛 + 揮手發言動畫
    fill("#FFD166");
    ellipse(-15 * s, -10 * s, 35 * s, 35 * s);
    fill("#EF476F");
    ellipse(-15 * s, 20 * s, 30 * s, 25 * s);

    stroke("#2660A4");
    strokeWeight(4 * s);
    let handAngle = sin(t * 3) * 0.2;
    push();
    translate(10 * s, 25 * s);
    rotate(handAngle);
    line(0, 0, 15 * s, -50 * s);
    noStroke();
    fill("#FFD166");
    ellipse(15 * s, -52 * s, 12 * s, 12 * s);
    pop();
  } else if (type === "blackboard_answer") {
    // 黑板動態寫字
    fill("#2D6A4F");
    rect(-40 * s, -35 * s, 80 * s, 40 * s, 4);
    fill(255);
    let lineW = (sin(t * 2) + 1) * 15 * s;
    rect(-30 * s, -25 * s, 10 * s + lineW, 5 * s);
    rect(-30 * s, -15 * s, 40 * s, 5 * s);

    fill("#FFD166");
    ellipse(0, 25 * s, 28 * s, 28 * s);
  } else if (type === "clean_desk") {
    // 彩色筆上下跳動 GIF
    fill("#B07D62");
    rect(-40 * s, 5 * s, 80 * s, 25 * s, 4);

    let penY = sin(t * 2) * 4 * s;
    fill("#E63946");
    rect(-25 * s, -20 * s + penY, 8 * s, 25 * s, 2);
    fill("#457B9D");
    rect(-10 * s, -25 * s - penY, 8 * s, 30 * s, 2);
    fill("#2A9D8F");
    rect(15 * s, -15 * s, 20 * s, 20 * s, 5);
  } else if (type === "swing_queue") {
    // 盪鞦韆擺盪動畫
    stroke("#6C757D");
    strokeWeight(3 * s);
    let swingAngle = sin(t * 1.8) * 0.35;

    push();
    translate(-30 * s, -40 * s);
    rotate(swingAngle);
    line(0, 0, -5 * s, 50 * s);
    line(0, 0, 15 * s, 50 * s);
    fill("#D62828");
    noStroke();
    rect(-10 * s, 50 * s, 25 * s, 6 * s);
    pop();

    fill("#2660A4");
    ellipse(15 * s, -5 * s, 18 * s, 18 * s);
    ellipse(32 * s, -5 * s, 18 * s, 18 * s);
  } else if (type === "bump_pencils") {
    // 禮貌愛心跳動動畫
    let heartScale = 1 + sin(t * 3) * 0.12;
    push();
    scale(heartScale);
    fill("#FF4D6D");
    ellipse(-5 * s, -15 * s, 22 * s, 22 * s);
    ellipse(10 * s, -15 * s, 22 * s, 22 * s);
    triangle(-15 * s, -10 * s, 20 * s, -10 * s, 2.5 * s, 10 * s);
    pop();

    fill("#E76F51");
    rect(-30 * s, 20 * s, 25 * s, 6 * s, 2);
    fill("#2A9D8F");
    rect(-5 * s, 25 * s, 25 * s, 6 * s, 2);
  } else if (type === "soap_water") {
    // 洗手泡泡上升動畫
    fill("#90E0EF");
    rect(-3 * s, -10 * s, 6 * s, 30 * s, 2);

    fill("#0077B6");
    rect(-10 * s, -35 * s, 20 * s, 25 * s, 4);
    fill("#F72585");
    rect(-20 * s, -5 * s, 25 * s, 15 * s, 5);

    fill(255, 255, 255, 200);
    let bY1 = (t * 12) % 35;
    let bY2 = (t * 10 + 15) % 35;
    ellipse(-15 * s, 15 * s - bY1, 10 * s, 10 * s);
    ellipse(15 * s, 20 * s - bY2, 14 * s, 14 * s);
  } else if (type === "search_eraser") {
    // 放大鏡旋轉搜尋
    fill("#F4A261");
    rect(-35 * s, -10 * s, 70 * s, 35 * s, 5);

    push();
    translate(5 * s, -15 * s);
    rotate(sin(t * 2) * 0.45);
    stroke("#2660A4");
    strokeWeight(4 * s);
    noFill();
    ellipse(0, 0, 30 * s, 30 * s);
    line(12 * s, 12 * s, 25 * s, 25 * s);
    pop();
  } else if (type === "nap_time") {
    // 午休燈光與星星閃爍
    fill("#2660A4");
    rect(-35 * s, 0, 70 * s, 25 * s, 5);
    fill("#FFD166");
    ellipse(-10 * s, -10 * s, 25 * s, 25 * s);

    let glow = 140 + sin(t * 2.5) * 110;
    fill(255, 209, 102, glow);
    ellipse(25 * s, -20 * s, 24 * s, 24 * s);
  } else if (type === "corridor_walk") {
    // 走廊腳印交替踩踏
    fill("#ADB5BD");
    rect(-40 * s, -30 * s, 80 * s, 60 * s, 8);
    fill(255);
    rect(-10 * s, -30 * s, 20 * s, 60 * s);

    let step = Math.floor(t * 2.5) % 2;
    fill(step === 0 ? "#2660A4" : 180);
    ellipse(5 * s, 10 * s, 10 * s, 16 * s);
    fill(step === 1 ? "#2660A4" : 180);
    ellipse(5 * s, -15 * s, 10 * s, 16 * s);
  }
  pop();
}

// ==========================================
// 4. p5.js 生命週期
// ==========================================
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("Noto Serif TC");
}

function draw() {
  background("#CBEEF3");

  if (gameState === "START") {
    drawStartScreen();
  } else if (gameState === "QUESTION") {
    drawQuestionScreen();
  } else if (gameState === "EXPLANATION") {
    drawExplanationScreen();
  } else if (gameState === "RESULT") {
    drawResultScreen();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ==========================================
// 5. 各畫面繪製邏輯
// ==========================================

function drawStartScreen() {
  fill("#2660A4");
  noStroke();

  let titleSize = constrain(width * 0.045, 24, 42);
  textSize(titleSize);
  textStyle(BOLD);
  text("你準備好成為小一新鮮人了嗎?", width / 2, height * 0.32);

  textSize(constrain(width * 0.022, 16, 22));
  textStyle(NORMAL);
  fill(50);
  text("請完成 8 道校園生活情境小挑戰！", width / 2, height * 0.42);

  drawScenarioImage("bell_on", width / 2, height * 0.53, 90);

  let btnW = constrain(width * 0.25, 180, 260);
  let btnH = 60;
  let btnX = width / 2 - btnW / 2;
  let btnY = height * 0.68;

  let isHover =
    mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH;

  fill(0, 30);
  rect(btnX + 4, btnY + 4, btnW, btnH, 30);
  fill(isHover ? "#1D497D" : "#2660A4");
  rect(btnX, btnY, btnW, btnH, 30);

  fill(255);
  textSize(22);
  textStyle(BOLD);
  text("開始測驗", width / 2, btnY + btnH / 2);
}

function drawQuestionScreen() {
  let q = selectedQuestions[currentIndex];
  let cardW = min(width * 0.85, 750);
  let cardX = width / 2 - cardW / 2;

  fill("#2660A4");
  textSize(constrain(width * 0.02, 16, 20));
  textStyle(BOLD);
  text(
    `第 ${currentIndex + 1} / ${selectedQuestions.length} 題`,
    width / 2,
    height * 0.05
  );

  let storyY = height * 0.08;
  let storyH = height * 0.17;
  let imgSize = min(storyH * 0.85, 90);

  fill(255, 245);
  stroke("#2660A4");
  strokeWeight(2);
  rect(cardX, storyY, cardW, storyH, 15);

  drawScenarioImage(q.type, cardX + imgSize / 2 + 15, storyY + storyH / 2, imgSize);

  noStroke();
  fill(40);
  textSize(constrain(width * 0.017, 14, 17));
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  let textMaxW = cardW - imgSize - 50;
  let storyLines = getWrappedLines("【情境】" + q.story, textMaxW);
  let storyStartY = storyY + storyH / 2 - ((storyLines.length - 1) * 24) / 2;
  drawLines(storyLines, cardX + imgSize + 30, storyStartY, 24);
  textAlign(CENTER, CENTER);

  if (q.audioSoundType && q.audioSoundType !== "normal") {
    let playBtnW = 160;
    let playBtnH = 34;
    let playBtnX = width / 2 - playBtnW / 2;
    let playBtnY = storyY + storyH + 8;
    fill("#EF476F");
    rect(playBtnX, playBtnY, playBtnW, playBtnH, 17);
    fill(255);
    textSize(15);
    textStyle(BOLD);
    text("🔊 點我播放鐘聲", width / 2, playBtnY + playBtnH / 2);
  }

  fill("#2660A4");
  textSize(constrain(width * 0.02, 16, 21));
  textStyle(BOLD);
  let qY = storyY + storyH + height * 0.08;
  let qLines = getWrappedLines(q.question, cardW - 20);
  let qStartY = qY - ((qLines.length - 1) * 28) / 2;
  drawLines(qLines, width / 2, qStartY, 28);

  let startOptY = qY + height * 0.05;
  let optH = constrain(height * 0.1, 50, 70);
  let gap = height * 0.018;
  let fontSize = constrain(width * 0.016, 14, 17);

  for (let i = 0; i < q.options.length; i++) {
    let optY = startOptY + i * (optH + gap);
    let isHover =
      mouseX > cardX &&
      mouseX < cardX + cardW &&
      mouseY > optY &&
      mouseY < optY + optH;

    fill(255);
    stroke(isHover ? "#2660A4" : "#A0C4E2");
    strokeWeight(isHover ? 3 : 1.5);
    rect(cardX, optY, cardW, optH, 12);

    let prefix = String.fromCharCode(65 + i);
    noStroke();
    fill("#2660A4");
    rect(cardX + 12, optY + optH / 2 - 18, 36, 36, 8);
    fill(255);
    textSize(18);
    textStyle(BOLD);
    text(prefix, cardX + 30, optY + optH / 2);

    fill(30);
    textSize(fontSize);
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);

    let optTextW = cardW - 75;
    let optLines = getWrappedLines(q.options[i], optTextW);
    let lineHeight = 22;
    let textStartY = optY + optH / 2 - ((optLines.length - 1) * lineHeight) / 2;

    drawLines(optLines, cardX + 60, textStartY, lineHeight);
    textAlign(CENTER, CENTER);
  }
}

function drawExplanationScreen() {
  let q = selectedQuestions[currentIndex];
  let cardW = min(width * 0.85, 750);
  let isCorrect = selectedOption === q.correct;

  fill(0);
  textSize(constrain(width * 0.038, 24, 38));
  textStyle(BOLD);

  if (isCorrect) {
    text("答對了！太棒了！", width / 2, height * 0.16);
  } else {
    text("答錯囉！沒關係，我們一起學習！", width / 2, height * 0.16);
  }

  let cardY = height * 0.23;
  let cardH = height * 0.45;
  fill(255);
  stroke(isCorrect ? "#4CAF50" : "#FF5722");
  strokeWeight(3);
  rect(width / 2 - cardW / 2, cardY, cardW, cardH, 20);

  drawScenarioImage(q.type, width / 2, cardY + 65, 80);

  noStroke();
  fill(0);
  textSize(constrain(width * 0.02, 16, 21));
  textStyle(NORMAL);

  let expLines = getWrappedLines(q.explanation, cardW - 60);
  let expStartY = cardY + cardH / 2 + 40 - ((expLines.length - 1) * 30) / 2;
  drawLines(expLines, width / 2, expStartY, 30);

  let btnW = constrain(width * 0.25, 180, 260);
  let btnH = 55;
  let btnX = width / 2 - btnW / 2;
  let btnY = height * 0.75;

  let isHover =
    mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH;

  fill(isHover ? "#1D497D" : "#2660A4");
  rect(btnX, btnY, btnW, btnH, 30);

  fill(255);
  textSize(20);
  textStyle(BOLD);
  let btnText =
    currentIndex < selectedQuestions.length - 1 ? "下一題" : "查看測驗結果";
  text(btnText, width / 2, btnY + btnH / 2);
}

function drawResultScreen() {
  fill("#2660A4");
  textSize(constrain(width * 0.04, 26, 44));
  textStyle(BOLD);
  text("測驗完成！", width / 2, height * 0.2);

  drawScenarioImage("blackboard_answer", width / 2, height * 0.33, 85);

  let scoreCardW = min(width * 0.6, 450);
  fill(255);
  rect(width / 2 - scoreCardW / 2, height * 0.43, scoreCardW, 70, 15);

  fill(30);
  textSize(22);
  text(`答對題數： ${score} / ${selectedQuestions.length} 題`, width / 2, height * 0.48);

  let feedback = "";
  if (score === 8) {
    feedback = "太厲害了！你已經完全準備好成為稱職的小一新鮮人了！加油！";
  } else if (score >= 5) {
    feedback = "很棒的表現！你對小一的校園生活已經相當熟悉囉！繼續保持！";
  } else {
    feedback = "別灰心！第一次接觸校園生活難免不熟悉，多練習與複習，你一定會越來越棒！";
  }

  let fbW = min(width * 0.8, 650);
  fill(50);
  textSize(constrain(width * 0.02, 16, 22));
  textStyle(NORMAL);
  let fbLines = getWrappedLines(feedback, fbW);
  let fbStartY = height * 0.62 - ((fbLines.length - 1) * 30) / 2;
  drawLines(fbLines, width / 2, fbStartY, 30);

  let btnW = constrain(width * 0.25, 180, 260);
  let btnH = 60;
  let btnX = width / 2 - btnW / 2;
  let btnY = height * 0.74;

  let isHover =
    mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH;

  fill(isHover ? "#1D497D" : "#2660A4");
  rect(btnX, btnY, btnW, btnH, 30);

  fill(255);
  textSize(22);
  textStyle(BOLD);
  text("再測驗一次", width / 2, btnY + btnH / 2);
}

// ==========================================
// 6. 事件處理
// ==========================================
function mousePressed() {
  initAudio();

  if (gameState === "START") {
    let btnW = constrain(width * 0.25, 180, 260);
    let btnH = 60;
    let btnX = width / 2 - btnW / 2;
    let btnY = height * 0.68;

    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      playSound("click");
      startQuiz();
    }
  } else if (gameState === "QUESTION") {
    let q = selectedQuestions[currentIndex];
    let cardW = min(width * 0.85, 750);
    let cardX = width / 2 - cardW / 2;

    let storyY = height * 0.08;
    let storyH = height * 0.17;

    if (q.audioSoundType && q.audioSoundType !== "normal") {
      let playBtnW = 160;
      let playBtnH = 34;
      let playBtnX = width / 2 - playBtnW / 2;
      let playBtnY = storyY + storyH + 8;
      if (
        mouseX > playBtnX &&
        mouseX < playBtnX + playBtnW &&
        mouseY > playBtnY &&
        mouseY < playBtnY + playBtnH
      ) {
        playSound(q.audioSoundType);
        return;
      }
    }

    let qY = storyY + storyH + height * 0.08;
    let startOptY = qY + height * 0.05;
    let optH = constrain(height * 0.1, 50, 70);
    let gap = height * 0.018;

    for (let i = 0; i < q.options.length; i++) {
      let optY = startOptY + i * (optH + gap);
      if (
        mouseX > cardX &&
        mouseX < cardX + cardW &&
        mouseY > optY &&
        mouseY < optY + optH
      ) {
        selectedOption = i;
        if (selectedOption === q.correct) {
          score++;
          playSound("correct");
        } else {
          playSound("wrong");
        }
        gameState = "EXPLANATION";
        break;
      }
    }
  } else if (gameState === "EXPLANATION") {
    let btnW = constrain(width * 0.25, 180, 260);
    let btnH = 55;
    let btnX = width / 2 - btnW / 2;
    let btnY = height * 0.75;

    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      playSound("click");
      if (currentIndex < selectedQuestions.length - 1) {
        currentIndex++;
        let nextQ = selectedQuestions[currentIndex];
        if (nextQ.audioSoundType && nextQ.audioSoundType !== "normal") {
          playSound(nextQ.audioSoundType);
        }
        gameState = "QUESTION";
      } else {
        gameState = "RESULT";
      }
    }
  } else if (gameState === "RESULT") {
    let btnW = constrain(width * 0.25, 180, 260);
    let btnH = 60;
    let btnX = width / 2 - btnW / 2;
    let btnY = height * 0.74;

    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      playSound("click");
      startQuiz();
    }
  }
}

function startQuiz() {
  let selectedScenario = shuffleArray(scenarioChoiceBank).slice(0, 6);
  selectedQuestions = shuffleArray([...audioTrueFalseBank, ...selectedScenario]);
  currentIndex = 0;
  score = 0;

  let firstQ = selectedQuestions[0];
  if (firstQ.audioSoundType && firstQ.audioSoundType !== "normal") {
    playSound(firstQ.audioSoundType);
  }

  gameState = "QUESTION";
}