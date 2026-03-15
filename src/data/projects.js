import mangaBuddyImg from "../assets/manga-buddy/manga-buddy.png";
import liCathodeOverview from "../assets/lithium-cathode-ml/overview.png";
import liCathodeModelComparison from "../assets/lithium-cathode-ml/model-comparison.png";
import liCathodeDataExplorer from "../assets/lithium-cathode-ml/data-explorer.png";
import liCathodeMaterialsExplorer from "../assets/lithium-cathode-ml/materials-explorer.png";
import liCathodePredict from "../assets/lithium-cathode-ml/predict.png";
import liCathodeCrystalViewer from "../assets/lithium-cathode-ml/crystal-viewer.png";

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
  {
    slug: "lithium-cathode-ml",
    title: "Lithium Cathode ML",
    subtitle: "Predicting battery cathode properties with ML and graph neural networks",
    description:
      "An end-to-end machine learning pipeline for predicting lithium-ion battery cathode material properties — voltage, capacity, formation energy, and thermodynamic stability — from crystal structure. Benchmarks traditional ML baselines (Random Forest, XGBoost) against graph neural networks (CGCNN, M3GNet, TensorNet) on a curated dataset of 46,000+ materials from Materials Project, OQMD, AFLOW, and JARVIS. CGCNN achieves R² of 0.995 on formation energy, demonstrating the value of structural information. Includes a 6-page interactive Streamlit dashboard for data exploration, model comparison, and real-time predictions from composition strings or uploaded CIF files.",
    tags: ["Python", "PyTorch", "Streamlit", "XGBoost", "PyTorch Geometric"],
    color: "#4CAF50",
    icon: "🔋",
    image: liCathodeOverview,
    images: [
      { src: liCathodeOverview, label: "Overview" },
      { src: liCathodeModelComparison, label: "Model Comparison" },
      { src: liCathodeDataExplorer, label: "Data Explorer" },
      { src: liCathodeMaterialsExplorer, label: "Materials Explorer" },
      { src: liCathodePredict, label: "Predict" },
      { src: liCathodeCrystalViewer, label: "Crystal Viewer" },
    ],
    repo: "https://github.com/Xeposem/lithium-cathode-ml",
  },
];

export default projects;
