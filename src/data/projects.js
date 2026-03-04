import mangaBuddyImg from "../assets/manga-buddy.png";

const projects = [
  {
    slug: "manga-buddy",
    title: "Manga Buddy",
    subtitle: "A manga translation and annotation tool",
    description:
      "Manga Buddy is a desktop application that translates and annotates manga in real time. Capture any region of your screen and the app detects text using PaddleOCR and manga-ocr, then translates it to English or adds phonetic annotations like pinyin, furigana, romaji, or Korean romanization. It features automatic language detection for Chinese, Japanese, and Korean, smart collision-aware text placement, and a dark-themed PyQt5 interface.",
    tags: ["Python", "PaddleOCR", "PyQt5", "manga-ocr", "OpenCV"],
    color: "#E94560",
    icon: "漫",
    image: mangaBuddyImg,
    repo: "https://github.com/Xeposem/manga-buddy",
  },
];

export default projects;
