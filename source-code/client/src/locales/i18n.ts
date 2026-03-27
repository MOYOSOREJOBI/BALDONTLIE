import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Scout Mode": "Scout Mode",
      "Intelligence": "Intelligence",
      "Community & Personal": "Community & Personal",
      "Dashboard": "Dashboard",
      "Player Explorer": "Player Explorer",
      "Player Compare": "Player Compare",
      "Team Compare": "Team Compare",
      "Team Fit": "Team Fit",
      "Transfers Room": "Transfers Room",
      "Predictions & xG": "Predictions & xG",
      "Prediction Markets": "Prediction Markets",
      "League Tables": "League Tables",
      "Fan Sentiment": "Fan Sentiment",
      "Rankings": "Rankings",
      "For You Feed": "For You Feed",
      "My Shortlist": "My Shortlist",
      "Social & Chats": "Social & Chats",
      "Games & Fantasy": "Games & Fantasy",
      "Global Intelligence Hub": "Global Intelligence Hub",
      "The epicenter of world football data": "The epicenter of world football data",
      "Total Players Tracked": "Total Players Tracked",
      "Active Predictions": "Active Predictions",
      "Market Sentiment": "Market Sentiment",
      "Global Matches Today": "Global Matches Today",
      "Search": "Search players, clubs, managers, odds...",
      "Ballon d'Or Power Index": "Ballon d'Or Power Index"
    }
  },
  pt: {
    translation: {
      "Scout Mode": "Modo Olheiro",
      "Intelligence": "Inteligência",
      "Community & Personal": "Comunidade e Pessoal",
      "Dashboard": "Painel",
      "Player Explorer": "Explorar Jogadores",
      "Player Compare": "Comparar Jogadores",
      "Team Compare": "Comparar Equipes",
      "Team Fit": "Encaixe na Equipe",
      "Transfers Room": "Sala de Transferências",
      "Predictions & xG": "Previsões e xG",
      "Live Odds": "Odds ao Vivo",
      "League Tables": "Tabelas das Ligas",
      "Fan Sentiment": "Sentimento da Torcida",
      "Rankings": "Classificações",
      "For You Feed": "Feed Para Você",
      "My Shortlist": "Minha Lista",
      "Social & Chats": "Social e Chats",
      "Games & Fantasy": "Jogos e Fantasy",
      "Global Intelligence Hub": "Centro de Inteligência Global",
      "The epicenter of world football data": "O epicentro dos dados do futebol mundial",
      "Total Players Tracked": "Total de Jogadores",
      "Active Predictions": "Previsões Ativas",
      "Market Sentiment": "Sentimento do Mercado",
      "Global Matches Today": "Partidas Globais Hoje",
      "Search": "Pesquisar jogadores, clubes, técnicos, odds...",
      "Ballon d'Or Power Index": "Índice Bola de Ouro"
    }
  },
  es: {
    translation: {
      "Scout Mode": "Modo Scout",
      "Intelligence": "Inteligencia",
      "Community & Personal": "Comunidad y Personal",
      "Dashboard": "Tablero",
      "Player Explorer": "Explorador",
      "Player Compare": "Comparar Jugadores",
      "Team Compare": "Comparar Equipos",
      "Team Fit": "Encaje Táctico",
      "Transfers Room": "Fichajes",
      "Predictions & xG": "Predicciones y xG",
      "Live Odds": "Cuotas en Vivo",
      "League Tables": "Clasificaciones",
      "Fan Sentiment": "Sentimiento",
      "Rankings": "Rankings",
      "For You Feed": "Tu Feed",
      "My Shortlist": "Mi Lista",
      "Social & Chats": "Social y Chats",
      "Games & Fantasy": "Juegos y Fantasy",
      "Global Intelligence Hub": "Centro de Inteligencia Global",
      "The epicenter of world football data": "El epicentro de los datos del fútbol mundial",
      "Search": "Buscar jugadores, clubes...",
      "Ballon d'Or Power Index": "Índice Balón de Oro"
    }
  },
  fr: {
    translation: {
      "Scout Mode": "Mode Recrutement",
      "Intelligence": "Intelligence",
      "Community & Personal": "Communauté",
      "Dashboard": "Tableau de bord",
      "Player Explorer": "Explorateur",
      "Player Compare": "Comparer Joueurs",
      "Team Compare": "Comparer Équipes",
      "Team Fit": "Compatibilité",
      "Transfers Room": "Transferts",
      "Predictions & xG": "Prédictions",
      "Live Odds": "Cotes en Direct",
      "League Tables": "Classements",
      "Fan Sentiment": "Sentiment des Fans",
      "Rankings": "Classements",
      "For You Feed": "Pour Vous",
      "Search": "Rechercher...",
      "Ballon d'Or Power Index": "Indice Ballon d'Or"
    }
  },
  ar: {
    translation: {
      "Scout Mode": "وضع الكشاف",
      "Intelligence": "الذكاء",
      "Community & Personal": "المجتمع والشخصية",
      "Dashboard": "لوحة القيادة",
      "Player Explorer": "مستكشف اللاعبين",
      "Player Compare": "مقارنة اللاعبين",
      "Team Compare": "مقارنة الفرق",
      "Team Fit": "تناسب الفريق",
      "Transfers Room": "غرفة الانتقالات",
      "Predictions & xG": "التوقعات والأهداف المتوقعة",
      "Prediction Markets": "أسواق التوقعات",
      "League Tables": "جداول الدوري",
      "Fan Sentiment": "مشاعر الجماهير",
      "Rankings": "التصنيفات",
      "For You Feed": "خلاصة لك",
      "My Shortlist": "قائمتي المختصرة",
      "Social & Chats": "الاجتماعية والدردشات",
      "Games & Fantasy": "الألعاب والفانتازيا",
      "Global Intelligence Hub": "مركز الذكاء العالمي",
      "The epicenter of world football data": "مركز بيانات كرة القدم العالمية",
      "Total Players Tracked": "إجمالي اللاعبين المتتبعين",
      "Active Predictions": "التوقعات النشطة",
      "Market Sentiment": "مشاعر السوق",
      "Global Matches Today": "المباريات العالمية اليوم",
      "Search": "ابحث عن اللاعبين والأندية والمديرين والتوقعات...",
      "Ballon d'Or Power Index": "مؤشر قوة الكرة الذهبية"
    }
  },
  ja: {
    translation: {
      "Scout Mode": "スカウトモード",
      "Intelligence": "インテリジェンス",
      "Community & Personal": "コミュニティと個人",
      "Dashboard": "ダッシュボード",
      "Player Explorer": "選手探索",
      "Player Compare": "選手比較",
      "Team Compare": "チーム比較",
      "Team Fit": "チームフィット",
      "Transfers Room": "移籍情報",
      "Predictions & xG": "予測とxG",
      "Live Odds": "ライブオッズ",
      "League Tables": "順位表",
      "Fan Sentiment": "ファンの感情",
      "Rankings": "ランキング",
      "For You Feed": "おすすめ",
      "My Shortlist": "マイリスト",
      "Search": "検索...",
      "Ballon d'Or Power Index": "バロンドールパワー指数"
    }
  },
  yo: {
    translation: {
      "Scout Mode": "Ipo Sikaotu",
      "Intelligence": "Oye",
      "Community & Personal": "Agbegbe & Ara Ẹni",
      "Dashboard": "Akojọpọ",
      "Player Explorer": "Wá Awọn Oṣere",
      "Player Compare": "Fiwe Awọn Oṣere",
      "Team Compare": "Fiwe Awọn Ẹgbẹ",
      "Team Fit": "Ibamu Ẹgbẹ",
      "Transfers Room": "Yara Gbigbe",
      "Predictions & xG": "Awọn Asọtẹlẹ",
      "Live Odds": "Awọn Aidọgba",
      "League Tables": "Awọn Tabili",
      "Fan Sentiment": "Imọlara Olufẹ",
      "Rankings": "Awọn Ipele",
      "For You Feed": "Fun Ọ",
      "Search": "Wa...",
      "Ballon d'Or Power Index": "Atọka Ballon d'Or"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;