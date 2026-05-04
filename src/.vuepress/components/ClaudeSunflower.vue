<template>
  <div class="sunflower-wrapper">
    <svg
      width="100%"
      viewBox="0 0 480 780"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>有灵魂的克劳德向日葵</title>
      <desc>
        一株拟人化的梵高风格向日葵，有眼睛、嘴巴，正在思考，背景是旋转星空
      </desc>

      <!-- 背景：梵高星空旋涡 -->
      <rect width="480" height="780" fill="#1A2E50" />
      <polygon points="0,0 140,0 125,70 0,80" fill="#1F3560" />
      <polygon points="110,0 260,0 244,65 94,75" fill="#243A68" />
      <polygon points="225,0 375,0 358,60 208,70" fill="#1C3258" />
      <polygon points="340,0 480,0 472,58 322,68" fill="#223870" />
      <polygon points="0,70 155,58 138,130 0,142" fill="#1A2E58" />
      <polygon points="122,62 278,50 260,122 106,134" fill="#243A6A" />
      <polygon points="244,55 400,43 382,115 226,127" fill="#1C3060" />
      <polygon points="365,48 480,36 480,108 347,120" fill="#203668" />
      <polygon points="0,130 160,118 142,192 0,205" fill="#1C2E5A" />
      <polygon points="128,122 292,110 274,184 110,197" fill="#243A6C" />
      <polygon points="258,115 422,103 404,177 240,190" fill="#1E3262" />
      <polygon points="387,108 480,96 480,170 370,183" fill="#223870" />
      <polygon points="0,195 165,183 150,275 0,288" fill="#284460" />
      <polygon points="132,188 295,175 280,267 115,280" fill="#325870" />
      <polygon points="262,180 425,168 410,260 245,272" fill="#254260" />
      <polygon points="390,173 480,161 480,253 374,265" fill="#2E5068" />
      <polygon points="0,278 170,266 155,368 0,378" fill="#223C55" />
      <polygon points="138,271 308,258 292,360 122,370" fill="#294260" />
      <polygon points="275,263 445,251 430,353 258,363" fill="#1F3A52" />
      <rect x="0" y="363" width="480" height="417" fill="#172E42" />
      <polygon points="0,361 190,349 175,453 0,463" fill="#1C3448" />
      <polygon points="158,353 348,341 333,445 142,455" fill="#203A50" />
      <polygon points="315,346 480,334 480,438 298,448" fill="#1A3046" />

      <!-- 旋涡光晕 -->
      <ellipse
        cx="380"
        cy="110"
        rx="100"
        ry="90"
        fill="#2A4880"
        opacity="0.28"
      />
      <ellipse
        cx="100"
        cy="170"
        rx="75"
        ry="65"
        fill="#1E3A70"
        opacity="0.22"
      />

      <!-- 星星 -->
      <g class="star1">
        <circle cx="55" cy="35" r="2.5" fill="#EEE8C0" />
        <circle cx="57" cy="35" r="1" fill="#FFFDE8" />
      </g>
      <g class="star2"><circle cx="155" cy="20" r="2" fill="#E8E0B0" /></g>
      <g class="star3">
        <circle cx="258" cy="32" r="3" fill="#F5EEC8" />
        <circle cx="261" cy="32" r="1.2" fill="#FFFDE8" />
      </g>
      <g class="star4"><circle cx="365" cy="16" r="2" fill="#EDE5C0" /></g>
      <g class="star1"><circle cx="440" cy="42" r="2.5" fill="#E8E0B0" /></g>
      <g class="star2"><circle cx="30" cy="105" r="1.5" fill="#E8E0B0" /></g>
      <g class="star3"><circle cx="118" cy="90" r="2" fill="#EEE8C0" /></g>
      <g class="star4"><circle cx="318" cy="76" r="1.8" fill="#E8E0B0" /></g>
      <g class="star1"><circle cx="415" cy="88" r="2.2" fill="#F0E8C0" /></g>
      <g class="star2"><circle cx="465" cy="106" r="1.5" fill="#E8E0B0" /></g>
      <g class="star3"><circle cx="15" cy="168" r="1.8" fill="#EDE5C0" /></g>
      <g class="star4"><circle cx="470" cy="175" r="1.5" fill="#EEE8C0" /></g>

      <!-- 思考气泡 -->
      <g class="bubble1">
        <circle cx="268" cy="188" r="5" fill="#F5EFD8" opacity="0.85" />
      </g>
      <g class="bubble2">
        <circle cx="282" cy="170" r="8" fill="#F5EFD8" opacity="0.85" />
      </g>
      <g class="bubble3">
        <ellipse
          cx="308"
          cy="148"
          rx="38"
          ry="26"
          fill="#F5EFD8"
          opacity="0.9"
        />
        <text
          x="308"
          y="152"
          text-anchor="middle"
          font-size="13"
          fill="#5A3A10"
          font-family="serif"
        >
          嗯…🤔
        </text>
      </g>

      <!-- 花盆 -->
      <polygon points="156,718 324,718 300,768 180,768" fill="#8B4010" />
      <polygon points="163,718 317,718 308,738 172,738" fill="#A04E20" />
      <rect x="144" y="710" width="192" height="14" fill="#9E4C1E" rx="3" />
      <rect x="152" y="710" width="176" height="7" fill="#C07030" rx="2" />
      <polygon
        points="172,738 208,738 204,768 178,768"
        fill="#6A3008"
        opacity="0.35"
      />
      <polygon
        points="228,738 262,738 258,768 232,768"
        fill="#6A3008"
        opacity="0.28"
      />

      <!-- 茎 -->
      <polygon points="222,710 258,710 252,500 228,500" fill="#487820" />
      <polygon points="228,710 252,710 246,500 234,500" fill="#5A9028" />
      <polygon points="225,610 255,608 250,560 230,562" fill="#62A030" />
      <polygon points="227,655 253,653 249,618 231,620" fill="#4C8020" />
      <polygon
        points="236,710 244,710 240,500 239,500"
        fill="#6EB633"
        opacity="0.5"
      />

      <!-- 左叶 -->
      <path d="M236,618 Q148,562 112,488 Q160,512 230,584 Z" fill="#3C6E18" />
      <path d="M236,618 Q150,570 114,490 Q164,518 232,590 Z" fill="#4A8820" />
      <path
        d="M236,618 Q152,566 114,490"
        stroke="#2C5610"
        stroke-width="2"
        fill="none"
      />
      <path
        d="M236,618 Q186,590 156,554"
        stroke="#58982A"
        stroke-width="1.2"
        fill="none"
        opacity="0.6"
      />

      <!-- 右叶 -->
      <path d="M248,588 Q332,530 368,456 Q320,484 252,558 Z" fill="#386815" />
      <path d="M248,588 Q335,536 368,456 Q318,490 254,562 Z" fill="#488020" />
      <path
        d="M248,588 Q330,534 366,458"
        stroke="#285010"
        stroke-width="2"
        fill="none"
      />
      <path
        d="M248,588 Q298,556 328,518"
        stroke="#568E25"
        stroke-width="1.2"
        fill="none"
        opacity="0.6"
      />

      <!-- 花萼 -->
      <polygon
        points="202,430 240,508 245,508 282,430 262,443 240,422 218,443 Z"
        fill="#487E20"
      />
      <polygon points="217,436 240,508 263,436 240,426 Z" fill="#589828" />

      <!-- 花朵（浮动） -->
      <g class="floater">
        <!-- 外层花瓣 — 深橙 -->
        <g fill="#C86008" opacity="0.92">
          <path
            d="M240,422 Q226,380 222,338 Q234,354 240,336 Q246,354 258,338 Q254,380 240,422 Z"
          />
          <path
            d="M262,428 Q268,386 279,346 Q284,360 296,350 Q288,374 262,428 Z"
          />
          <path
            d="M280,442 Q299,406 322,376 Q320,392 334,384 Q324,406 280,442 Z"
          />
          <path
            d="M290,460 Q322,444 354,434 Q348,452 361,462 Q330,465 290,460 Z"
          />
          <path
            d="M292,482 Q324,478 350,492 Q336,504 344,518 Q318,504 292,482 Z"
          />
          <path
            d="M284,504 Q306,512 320,530 Q304,540 310,556 Q290,540 284,504 Z"
          />
          <path
            d="M270,520 Q275,552 270,584 Q262,566 256,582 Q250,564 244,582 Q240,552 246,520 Z"
          />
          <path
            d="M240,526 Q232,558 228,592 Q236,574 240,590 Q244,574 252,590 Q248,558 240,526 Z"
          />
          <path
            d="M210,520 Q205,552 210,584 Q218,564 222,580 Q228,560 234,578 Q238,548 232,520 Z"
          />
          <path
            d="M196,504 Q190,536 180,558 Q174,542 163,550 Q172,528 196,504 Z"
          />
          <path
            d="M188,482 Q162,494 138,492 Q142,508 130,516 Q148,505 188,482 Z"
          />
          <path
            d="M188,460 Q162,452 134,444 Q136,460 124,468 Q150,466 188,460 Z"
          />
          <path
            d="M196,442 Q174,410 156,380 Q152,396 140,388 Q152,410 196,442 Z"
          />
          <path
            d="M216,428 Q210,388 200,350 Q194,364 182,356 Q192,380 216,428 Z"
          />
        </g>

        <!-- 中层花瓣 — 橙黄 -->
        <g fill="#F09210" opacity="0.88">
          <path
            d="M251,424 Q262,384 270,345 Q276,358 287,350 Q278,375 251,424 Z"
          />
          <path
            d="M273,436 Q294,402 314,374 Q314,388 326,382 Q316,404 273,436 Z"
          />
          <path
            d="M289,458 Q316,444 344,436 Q339,452 350,460 Q322,462 289,458 Z"
          />
          <path
            d="M290,480 Q316,478 338,490 Q326,502 332,514 Q310,500 290,480 Z"
          />
          <path
            d="M280,506 Q298,516 310,533 Q296,542 302,556 Q284,540 280,506 Z"
          />
          <path
            d="M258,522 Q260,554 256,586 Q249,568 244,584 Q240,564 234,582 Q232,552 238,522 Z"
          />
          <path
            d="M222,522 Q218,554 222,586 Q230,566 234,582 Q238,562 244,578 Q246,548 240,522 Z"
          />
          <path
            d="M200,506 Q194,538 186,560 Q180,544 168,552 Q178,530 200,506 Z"
          />
          <path
            d="M190,480 Q166,490 142,490 Q146,506 134,514 Q152,502 190,480 Z"
          />
          <path
            d="M190,458 Q166,448 140,440 Q142,456 130,464 Q156,462 190,458 Z"
          />
          <path
            d="M205,436 Q186,404 168,376 Q164,390 152,384 Q164,406 205,436 Z"
          />
          <path
            d="M229,424 Q222,386 214,348 Q208,362 196,355 Q208,378 229,424 Z"
          />
        </g>

        <!-- 内层花瓣 — 金黄 -->
        <g fill="#F8C81C" opacity="0.85">
          <path
            d="M240,428 Q230,398 232,374 Q240,384 248,374 Q250,398 240,428 Z"
          />
          <path
            d="M256,432 Q268,406 276,384 Q281,394 290,388 Q282,408 256,432 Z"
          />
          <path
            d="M268,448 Q286,434 302,426 Q298,440 307,448 Q286,449 268,448 Z"
          />
          <path
            d="M270,468 Q285,466 297,476 Q288,486 293,495 Q276,484 270,468 Z"
          />
          <path
            d="M262,486 Q271,496 272,510 Q262,502 256,512 Q252,498 245,510 Q246,494 256,486 Z"
          />
          <path
            d="M240,490 Q234,504 230,518 Q236,508 240,518 Q244,508 250,518 Q246,504 240,490 Z"
          />
          <path
            d="M218,486 Q209,496 208,510 Q216,500 220,512 Q226,498 230,510 Q232,494 222,486 Z"
          />
          <path
            d="M210,468 Q198,464 188,474 Q194,484 188,494 Q204,482 210,468 Z"
          />
          <path
            d="M212,448 Q196,436 180,428 Q178,440 170,448 Q190,448 212,448 Z"
          />
          <path
            d="M224,432 Q214,408 206,386 Q200,396 192,390 Q202,410 224,432 Z"
          />
        </g>

        <!-- 花心 -->
        <ellipse cx="240" cy="472" rx="64" ry="62" fill="#3A1A05" />
        <ellipse cx="240" cy="472" rx="57" ry="55" fill="#4A2208" />

        <!-- 花心纹理点 -->
        <g fill="#622E0A">
          <circle cx="240" cy="432" r="4" />
          <circle cx="257" cy="434" r="3.5" />
          <circle cx="272" cy="440" r="3.5" />
          <circle cx="283" cy="450" r="4" />
          <circle cx="289" cy="463" r="3.5" />
          <circle cx="288" cy="477" r="3.5" />
          <circle cx="281" cy="490" r="4" />
          <circle cx="270" cy="499" r="3.5" />
          <circle cx="256" cy="505" r="3.5" />
          <circle cx="240" cy="507" r="4" />
          <circle cx="224" cy="505" r="3.5" />
          <circle cx="210" cy="499" r="3.5" />
          <circle cx="199" cy="490" r="4" />
          <circle cx="192" cy="477" r="3.5" />
          <circle cx="191" cy="463" r="3.5" />
          <circle cx="197" cy="450" r="4" />
          <circle cx="208" cy="440" r="3.5" />
          <circle cx="223" cy="434" r="3.5" />
        </g>
        <g fill="#7A3E14">
          <circle cx="240" cy="446" r="3" />
          <circle cx="252" cy="448" r="2.8" />
          <circle cx="262" cy="453" r="2.8" />
          <circle cx="269" cy="462" r="3" />
          <circle cx="271" cy="472" r="2.8" />
          <circle cx="268" cy="482" r="2.8" />
          <circle cx="261" cy="489" r="3" />
          <circle cx="252" cy="493" r="2.8" />
          <circle cx="240" cy="495" r="3" />
          <circle cx="228" cy="493" r="2.8" />
          <circle cx="219" cy="489" r="2.8" />
          <circle cx="212" cy="482" r="3" />
          <circle cx="209" cy="472" r="2.8" />
          <circle cx="211" cy="462" r="2.8" />
          <circle cx="218" cy="453" r="3" />
          <circle cx="228" cy="448" r="2.8" />
        </g>
        <g fill="#8C4E20">
          <circle cx="240" cy="458" r="2.8" />
          <circle cx="248" cy="460" r="2.2" />
          <circle cx="255" cy="465" r="2.2" />
          <circle cx="258" cy="472" r="2.8" />
          <circle cx="255" cy="479" r="2.2" />
          <circle cx="248" cy="484" r="2.2" />
          <circle cx="240" cy="486" r="2.8" />
          <circle cx="232" cy="484" r="2.2" />
          <circle cx="225" cy="479" r="2.2" />
          <circle cx="222" cy="472" r="2.8" />
          <circle cx="225" cy="465" r="2.2" />
          <circle cx="232" cy="460" r="2.2" />
        </g>

        <!-- 眼睛左 -->
        <g class="blink-l">
          <ellipse cx="220" cy="462" rx="13" ry="14" fill="#FDECC8" />
          <ellipse cx="220" cy="464" rx="9" ry="10" fill="#5A3A10" />
          <ellipse cx="220" cy="464" rx="6" ry="6.5" fill="#1A0E04" />
          <circle cx="223" cy="461" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="218" cy="466" r="1.2" fill="#FFFFFF" opacity="0.5" />
        </g>

        <!-- 眼睛右 -->
        <g class="blink-r">
          <ellipse cx="260" cy="462" rx="13" ry="14" fill="#FDECC8" />
          <ellipse cx="260" cy="464" rx="9" ry="10" fill="#5A3A10" />
          <ellipse cx="260" cy="464" rx="6" ry="6.5" fill="#1A0E04" />
          <circle cx="263" cy="461" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="258" cy="466" r="1.2" fill="#FFFFFF" opacity="0.5" />
        </g>

        <!-- 眉毛 -->
        <path
          d="M208,449 Q220,443 232,447"
          stroke="#5A3010"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M248,447 Q260,443 272,449"
          stroke="#5A3010"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />

        <!-- 嘴巴 -->
        <path
          d="M225,490 Q240,502 255,490"
          stroke="#5A2E08"
          stroke-width="2.8"
          fill="none"
          stroke-linecap="round"
        />

        <!-- 脸颊红晕 -->
        <ellipse
          cx="206"
          cy="482"
          rx="10"
          ry="7"
          fill="#E8704A"
          opacity="0.28"
        />
        <ellipse
          cx="274"
          cy="482"
          rx="10"
          ry="7"
          fill="#E8704A"
          opacity="0.28"
        />

        <!-- 花心高光 -->
        <circle cx="240" cy="472" r="13" fill="#581E08" />
        <circle cx="236" cy="468" r="4.5" fill="#7A3A18" opacity="0.5" />
      </g>

      <!-- 名牌 -->
      <rect
        x="152"
        y="690"
        width="176"
        height="26"
        rx="4"
        fill="#C07030"
        opacity="0.85"
      />
      <text
        x="240"
        y="707"
        text-anchor="middle"
        font-size="13"
        fill="#FFF5E0"
        font-family="serif"
        font-style="italic"
      >
        Claude · 向日葵
      </text>
    </svg>
  </div>
</template>

<script setup>
// 无需额外逻辑，动画全部由 CSS 驱动
</script>

<style scoped>
.sunflower-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
}

@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.08);
  }
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.2;
  }
}
@keyframes think {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
  40%,
  70% {
    opacity: 1;
    transform: scale(1);
  }
}

.blink-l {
  animation: blink 4s ease-in-out infinite;
  transform-origin: 220px 462px;
}
.blink-r {
  animation: blink 4s ease-in-out infinite;
  transform-origin: 260px 462px;
}
.floater {
  animation: float 3.5s ease-in-out infinite;
  transform-origin: 240px 480px;
}
.star1 {
  animation: twinkle 2.1s ease-in-out infinite;
}
.star2 {
  animation: twinkle 3.3s ease-in-out infinite 0.5s;
}
.star3 {
  animation: twinkle 2.7s ease-in-out infinite 1s;
}
.star4 {
  animation: twinkle 1.9s ease-in-out infinite 0.8s;
}
.bubble1 {
  animation: think 5s ease-in-out infinite 0.5s;
}
.bubble2 {
  animation: think 5s ease-in-out infinite 0.9s;
}
.bubble3 {
  animation: think 5s ease-in-out infinite 1.3s;
}
</style>
