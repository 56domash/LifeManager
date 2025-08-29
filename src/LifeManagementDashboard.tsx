import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import {
  Wallet, TrendingUp, ArrowUp, Newspaper, Heart, Moon, Flame, Apple, Scale, Eye, Clock,
  Calendar, MapPin, Cloud, Sun, CloudRain, Target, Book, Coffee, Car, ShoppingCart, Star,
  MessageCircle, Send, Save, RotateCcw, Plus, Trash, Edit, Check
} from 'lucide-react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 時刻表示を分離したコンポーネント
const CurrentTimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    // ダミーデータ
    const [weatherData] = useState({
        current: { temp: 24, condition: 'sunny' },
        forecast: [
            { day: '今日', temp: 24, condition: 'sunny', rain: 10 },
            { day: '明日', temp: 22, condition: 'cloudy', rain: 30 },
            { day: '明後日', temp: 26, condition: 'rainy', rain: 80 },
            { day: '月曜', temp: 21, condition: 'sunny', rain: 0 }
        ]
    });
    
    const getWeatherIcon = (condition) => {
        if (condition === 'cloudy') return <Cloud className="w-5 h-5 text-gray-500" />;
        if (condition === 'rainy') return <CloudRain className="w-5 h-5 text-blue-500" />;
        return <Sun className="w-5 h-5 text-yellow-500" />;
    };

    return (
        <header className="text-center mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">ライフ管理ダッシュボード</h1>
                <div className="flex items-center justify-center space-x-6 text-base">
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{currentTime.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span>{currentTime.toLocaleTimeString('ja-JP')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        {getWeatherIcon(weatherData.current.condition)}
                        <span>{weatherData.current.temp}°C</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default function LifeManagementDashboard() {

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const defaultLayouts = {
    lg: [ // 1200px以上の画面用レイアウト
      { i: 'finance', x: 0, y: 0, w: 3, h: 4, minW: 1, minH: 1 },
      { i: 'investment', x: 3, y: 0, w: 3, h: 5, minW: 1, minH: 1 },
      { i: 'health', x: 6, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
      { i: 'news', x: 8, y: 0, w: 4, h: 5, minW: 1, minH: 1 },
      { i: 'ai-chat', x: 8, y: 5, w: 4, h: 2, minW: 1, minH: 1 },
      { i: 'reading', x: 0, y: 4, w: 6, h: 3, minW: 1, minH: 1 },
      { i: 'weather', x: 6, y: 2, w: 2, h: 2, minW: 1, minH: 1 },
      { i: 'sticky-memo', x: 6, y: 4, w: 2, h: 2, minW: 1, minH: 1},
    ],
    // ここに md, sm などの小さい画面用のレイアウトも追加できます
    md: [
      { i: 'finance', x: 0, y: 0, w: 5, h: 4 },
      { i: 'investment', x: 5, y: 0, w: 5, h: 5 },
      { i: 'news', x: 0, y: 4, w: 10, h: 2 },
      { i: 'health', x: 0, y: 6, w: 5, h: 2 },
      { i: 'weather', x: 5, y: 6, w: 5, h: 2 },
      { i: 'reading', x: 0, y: 8, w: 5, h: 3 },
      { i: 'ai-chat', x: 5, y: 8, w: 5, h: 2 },
      { i: 'sticky-memo', x: 0, y: 11, w: 5, h: 2},
    ],
    sm: [
      { i: 'finance', x: 0, y: 0, w: 6, h: 4 },
      { i: 'investment', x: 0, y: 4, w: 6, h: 5 },
      { i: 'news', x: 0, y: 9, w: 6, h: 2 },
      { i: 'health', x: 0, y: 11, w: 6, h: 2 },
      { i: 'weather', x: 0, y: 13, w: 6, h: 2 },
      { i: 'reading', x: 0, y: 15, w: 6, h: 3 },
      { i: 'ai-chat', x: 0, y: 18, w: 6, h: 2 },
      { i: 'sticky-memo', x: 0, y: 20, w: 6, h: 2},
    ],
  };

  const getSavedLayouts = () => {
    try {
      const saved = localStorage.getItem('dashboardLayouts');
      return saved ? JSON.parse(saved) : defaultLayouts;
    } catch (e) {
      console.error("Failed to load layout from localStorage", e);
      return defaultLayouts;
    }
  };

  const [layouts, setLayouts] = useState(getSavedLayouts());

  const onLayoutChange = (newLayout, newLayouts) => {
    setLayouts(newLayouts);
    try {
      localStorage.setItem('dashboardLayouts', JSON.stringify(newLayouts));
    } catch (e) {
      console.error("Failed to save layout to localStorage", e);
    }
  };

  const saveLayout = () => {
    try {
      localStorage.setItem('dashboardLayouts', JSON.stringify(layouts));
      alert('レイアウトが保存されました！');
    } catch (e) {
      alert('レイアウトの保存に失敗しました。');
      console.error("Failed to save layout manually", e);
    }
  };

  const resetLayout = () => {
    try {
      localStorage.removeItem('dashboardLayouts');
      setLayouts(defaultLayouts);
      alert('レイアウトが初期化されました。');
    } catch (e) {
      alert('レイアウトのリセットに失敗しました。');
      console.error("Failed to reset layout", e);
    }
  };
  
  // ダミーデータ
  const [taskData] = useState({
    todayTasks: [
      { id: 1, text: '月次レポート作成', completed: true, priority: 'high', deadline: '17:00' },
      { id: 2, text: 'ミーティング資料準備', completed: false, priority: 'high', deadline: '14:00' },
      { id: 3, text: '英語学習30分', completed: true, priority: 'medium', deadline: '20:00' },
      { id: 4, text: '運動（ジョギング）', completed: false, priority: 'medium', deadline: '19:00' },
      { id: 5, text: '家計簿更新', completed: false, priority: 'low', deadline: '22:00' }
    ],
    weeklyGoals: [
      { goal: '読書5時間', progress: 3.5, target: 5, unit: '時間' },
      { goal: '運動3回', progress: 2, target: 3, unit: '回' },
      { goal: '節約10万円', progress: 7.5, target: 10, unit: '万円' },
      { goal: 'スキル学習', progress: 4, target: 7, unit: '日' }
    ]
  });
  const [socialData] = useState({
    upcomingEvents: [
      { name: '友人との食事', date: '今日 19:00', location: '渋谷', type: 'social' },
      { name: 'チームミーティング', date: '明日 10:00', location: 'オフィス', type: 'work' },
      { name: 'ヨガクラス', date: '土曜 9:00', location: 'スタジオ', type: 'health' },
      { name: '映画鑑賞', date: '日曜 14:00', location: '新宿', type: 'entertainment' }
    ],
    recentActivities: [
      { action: 'コーヒーを購入', amount: 450, time: '2時間前', category: 'food' },
      { action: '電車代', amount: 280, time: '3時間前', category: 'transport' },
      { action: 'ランチ', amount: 1200, time: '4時間前', category: 'food' },
      { action: 'Amazon購入', amount: 2500, time: '昨日', category: 'shopping' }
    ]
  });
  const [skillData] = useState({
    currentCourses: [
      { name: 'React開発', progress: 75, nextLesson: '状態管理', timeLeft: '2時間' },
      { name: '英語会話', progress: 60, nextLesson: 'ビジネス英語', timeLeft: '30分' },
      { name: 'マーケティング', progress: 30, nextLesson: 'SEO基礎', timeLeft: '1時間' }
    ],
    achievements: [
      { title: '連続学習7日達成', date: '今日', points: 100 },
      { title: '目標体重達成', date: '昨日', points: 200 },
      { title: '投資利益10%達成', date: '3日前', points: 300 }
    ]
  });
  const [readingData, setReadingData] = useState({
    recentBooks: [
      { id: 1, title: 'ジェネラリストのためのWeb3', author: '坂尻 航', notes: 'ブロックチェーン技術の基礎を理解。Web3のビジネスへの応用例が参考になった。', progress: 70 },
      { id: 2, title: 'FACTFULNESS(ファクトフルネス)', author: 'ハンス・ロスリング', notes: '世界を正しく見るための10の思い込みについて学ぶ。データを元に物事を考える重要性を再認識。', progress: 100 },
      { id: 3, title: 'サイコロジー・オブ・マネー', author: 'モーガン・ハウセル', notes: 'お金に関する心理学的な側面を深掘り。投資や貯蓄における行動経済学の視点が面白い。', progress: 45 },
    ]
  });
  const [newReading, setNewReading] = useState({
    title: '',
    author: '',
    notes: '',
    progress: 0
  });

  const [stickyNotes, setStickyNotes] = useState([
    { id: 1, text: '朝のジョギングを忘れない' },
    { id: 2, text: '牛乳を買って帰る' }
  ]);
  const [newNote, setNewNote] = useState('');

  const [chatHistory] = useState([
    { role: 'user', text: '今日のタスクを教えて' },
    { role: 'ai', text: 'はい、今日のタスクは「月次レポート作成」と「ミーティング資料準備」です。' },
    { role: 'user', text: '今日の運動の目標は？' },
    { role: 'ai', text: 'ジョギングが予定されています。' },
  ]);
  const [weatherData] = useState({
    current: { temp: 24, condition: 'sunny' },
    forecast: [
      { day: '今日', temp: 24, condition: 'sunny', rain: 10 },
      { day: '明日', temp: 22, condition: 'cloudy', rain: 30 },
      { day: '明後日', temp: 26, condition: 'rainy', rain: 80 },
      { day: '月曜', temp: 21, condition: 'sunny', rain: 0 }
    ]
  });
  const [financeData, setFinanceData] = useState({
    balance: 780000,
    monthlyExpense: 245000,
    monthlyIncome: 300000,
    budget: 280000,
    expenses: [
        { category: '食費', amount: 85000 },
        { category: '交通費', amount: 25000 },
        { category: '家賃', amount: 100000 },
        { category: '趣味・娯楽', amount: 35000 },
    ]
  });
  const [healthData] = useState({
    weight: 65.5,
    weightGoal: 62.0,
    sleepHours: 7.2,
    sleepGoal: 8.0,
    caloriesBurned: 550,
    caloriesConsumed: 2100,
    // グラフ用のダミーデータ追加
    weightHistory: [
        { date: '8/1', value: 66.5 },
        { date: '8/8', value: 66.1 },
        { date: '8/15', value: 65.8 },
        { date: '8/22', value: 65.5 },
    ],
    sleepHistory: [
        { date: '8/19', value: 7.5 },
        { date: '8/20', value: 6.8 },
        { date: '8/21', value: 8.0 },
        { date: '8/22', value: 7.2 },
    ]
  });
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: ''
  });
  const [newIncome, setNewIncome] = useState({
    category: '',
    amount: ''
  });

  const [investmentData, setInvestmentData] = useState({
    totalAssets: 2450000,
    dailyChange: 45000,
    dailyChangePercent: 1.87,
    stocks: [
      { symbol: 'NVDA', name: 'エヌビディア', change: 8.5, price: 125.30 },
      { symbol: '7203', name: 'トヨタ自動車', change: 2.1, price: 2890 },
      { symbol: 'AAPL', name: 'アップル', change: -1.2, price: 189.50 },
      { symbol: '6758', name: 'ソニーグループ', change: 3.4, price: 13250 }
    ],
    investmentTrusts: [
      { name: 'eMAXIS Slim 全世界株式', change: 1.5, price: 23500 },
      { name: 'S&P500インデックスファンド', change: -0.5, price: 42100 }
    ]
  });
  const [activeInvestmentTab, setActiveInvestmentTab] = useState('stocks');

  // ダミーの関連ニュースデータ
  const [relatedNews] = useState([
    {
      symbol: 'NVDA',
      title: 'エヌビディア、決算受け時間外で下落 ＡＩ投資の持続性への懸念',
      source: 'みんかぶ',
      url: 'https://us.minkabu.jp/stocks/NVDA/news'
    },
    {
      symbol: 'NVDA',
      title: 'エヌビディア決算詳細 データセンターが予想下回る',
      source: 'みんかぶ',
      url: 'https://us.minkabu.jp/stocks/NVDA/news'
    },
    {
      symbol: '7203',
      title: '【アナリスト評価】トヨタ自動車、レーティング強気を継続、目標株価3,400円に引上げ',
      source: 'アイフィス株予報',
      url: 'https://finance.yahoo.co.jp/quote/7203.T/news'
    },
    {
      symbol: 'AAPL',
      title: 'ジェフリーズ、アップルのiPhone 17 Proの販売は史上最も厳しくなる可能性を警告',
      source: 'Investing.com',
      url: 'https://jp.investing.com/equities/apple-computer-inc-news'
    },
    {
      symbol: '6758',
      title: 'ソニー、非接触IC「フェリカ」に脆弱性＝17年以前出荷の一部チップで',
      source: '時事通信',
      url: 'https://finance.yahoo.co.jp/quote/6758.T/news'
    },
  ]);

  const formatCurrency = (amount) => new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  const formatNumber = (n) => new Intl.NumberFormat('ja-JP').format(n);
  const formatStockPrice = (symbol, price) => (/^\d+$/.test(symbol) ? `¥${formatNumber(price)}` : `$${price.toFixed(2)}`);
  const getWeatherIcon = (condition) => {
    if (condition === 'cloudy') return <Cloud className="w-8 h-8 text-gray-500" />;
    if (condition === 'rainy') return <CloudRain className="w-8 h-8 text-blue-500" />;
    return <Sun className="w-8 h-8 text-yellow-500" />;
  };
  
  const netWorth = financeData.balance + financeData.monthlyIncome - financeData.monthlyExpense;
  const expensePercentage = (financeData.monthlyExpense / financeData.budget) * 100;

  // 動的にウィジェットのサイズを取得
  const currentLayout = layouts['lg'] || [];
  const financeWidget = currentLayout.find(item => item.i === 'finance');
  const newsWidget = currentLayout.find(item => item.i === 'news');
  const isFinanceSmall = financeWidget ? financeWidget.w <= 2 : false;
  const isNewsWide = newsWidget ? newsWidget.w >= 4 : false;

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.category && newExpense.amount) {
      const newAmount = parseInt(newExpense.amount, 10);
      setFinanceData(prev => ({
        ...prev,
        monthlyExpense: prev.monthlyExpense + newAmount,
        expenses: [...prev.expenses, { category: newExpense.category, amount: newAmount }]
      }));
      setNewExpense({ category: '', amount: '' });
    }
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (newIncome.category && newIncome.amount) {
      const newAmount = parseInt(newIncome.amount, 10);
      setFinanceData(prev => ({
        ...prev,
        monthlyIncome: prev.monthlyIncome + newAmount,
      }));
      setNewIncome({ category: '', amount: '' });
    }
  };

  const handleAddReading = (e) => {
    e.preventDefault();
    if (newReading.title && newReading.author) {
      setReadingData(prev => ({
        recentBooks: [...prev.recentBooks, {
          ...newReading,
          id: prev.recentBooks.length + 1,
        }]
      }));
      setNewReading({ title: '', author: '', notes: '', progress: 0 });
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      setStickyNotes(prev => [...prev, { id: Date.now(), text: newNote.trim() }]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id) => {
    setStickyNotes(prev => prev.filter(note => note.id !== id));
  };
  
  // グラフデータの設定
  const weightData = {
    labels: healthData.weightHistory.map(d => d.date),
    datasets: [
        {
            label: '体重 (kg)',
            data: healthData.weightHistory.map(d => d.value),
            borderColor: 'rgb(236, 72, 153)',
            backgroundColor: 'rgba(236, 72, 153, 0.5)',
            tension: 0.4
        }
    ]
  };

  const sleepData = {
    labels: healthData.sleepHistory.map(d => d.date),
    datasets: [
        {
            label: '睡眠時間 (時間)',
            data: healthData.sleepHistory.map(d => d.value),
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
            tension: 0.4
        }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: '過去の推移',
            font: {
                size: 14,
            },
            color: 'rgb(55, 65, 81)'
        },
    },
    scales: {
        y: {
            beginAtZero: false,
            grid: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-4 w-full">
      {/* ヘッダーは新しいコンポーネントとして分離 */}
      <CurrentTimeDisplay />

      {/* 保存・リセットボタンを追加 */}
      <div className="flex justify-end space-x-2 mb-4">
        <button 
          onClick={saveLayout} 
          className="flex items-center space-x-2 bg-blue-500 text-white text-base py-2 px-4 rounded-full hover:bg-blue-600 transition-colors shadow-md"
        >
          <Save size={18}/><span>レイアウトを保存</span>
        </button>
        <button 
          onClick={resetLayout} 
          className="flex items-center space-x-2 bg-gray-300 text-gray-800 text-base py-2 px-4 rounded-full hover:bg-gray-400 transition-colors shadow-md"
        >
          <RotateCcw size={18}/><span>リセット</span>
        </button>
      </div>

      <ResponsiveGridLayout 
        className="layout" 
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={150}
        isDraggable={true}
        isResizable={true}
      >
        {/* --- 家計簿管理 --- */}
        <div key="finance" className="bg-white rounded-2xl p-6 shadow-lg border flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Wallet className="mr-2 text-green-500"/>家計簿管理</h2>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg flex flex-col justify-center mb-4">
              <p className="text-base font-medium">総残高</p>
              <p className="text-3xl font-bold">{formatCurrency(netWorth)}</p>
          </div>
          <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-500">今月支出</span>
                  <span className="font-bold text-gray-800">{formatCurrency(financeData.monthlyExpense)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${expensePercentage > 100 ? 100 : expensePercentage}%` }}></div>
              </div>
              <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">予算まで</span>
                  <span className="font-bold text-green-600">{formatCurrency(financeData.budget - financeData.monthlyExpense)}</span>
              </div>
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">支出内訳</h3>
          <ul className="space-y-2 text-sm overflow-y-auto max-h-40">
              {financeData.expenses.map((exp, index) => (
                  <li key={index} className="flex justify-between items-center p-2 rounded-md bg-gray-50">
                      <span>{exp.category}</span>
                      <span className="font-semibold text-red-600">{formatCurrency(exp.amount)}</span>
                  </li>
              ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">支出入力</h3>
          <form onSubmit={handleAddExpense} className="flex flex-col space-y-2">
              <input
                  type="text"
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                  placeholder="項目名（例：食費）"
                  className="p-2 border rounded-md text-sm"
                  required
              />
              <div className="flex items-center space-x-2">
                <input
                    type="number"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    placeholder="金額"
                    className="p-2 border rounded-md w-full text-sm"
                    required
                />
                <button type="submit" className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    <Plus size={20} />
                </button>
              </div>
          </form>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">収入入力</h3>
          <form onSubmit={handleAddIncome} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input
                    type="number"
                    value={newIncome.amount}
                    onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
                    placeholder="金額"
                    className="p-2 border rounded-md w-full text-sm"
                    required
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    <Plus size={20} />
                </button>
              </div>
          </form>
        </div>

        {/* --- 投資管理 --- */}
        <div key="investment" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><TrendingUp className="mr-2 text-blue-500"/>投資管理</h2>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg mb-4">
                <p className="text-base font-medium">総投資資産</p>
                <p className="text-3xl font-bold">{formatCurrency(investmentData.totalAssets)}</p>
                <p className="text-base flex items-center"><ArrowUp className="w-4 h-4"/>+{formatCurrency(investmentData.dailyChange)} (+{investmentData.dailyChangePercent}%)</p>
            </div>
            
            {/* タブ切り替え */}
            <div className="flex space-x-2 mb-4">
                <button 
                    onClick={() => setActiveInvestmentTab('stocks')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeInvestmentTab === 'stocks' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    株式
                </button>
                <button 
                    onClick={() => setActiveInvestmentTab('investmentTrusts')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeInvestmentTab === 'investmentTrusts' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    投資信託
                </button>
            </div>

            {/* 株式リスト */}
            {activeInvestmentTab === 'stocks' && (
                <>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">保有株</h3>
                    <div className="space-y-2">
                        {investmentData.stocks.map(stock => (
                            <div key={stock.symbol} className="flex justify-between items-center text-sm">
                                <span>{stock.symbol} {stock.name}</span>
                                <span className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                            </div>
                        ))}
                    </div>

                    {/* 関連ニュース */}
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">関連ニュース</h3>
                    <ul className="space-y-2 text-sm max-h-40 overflow-y-auto">
                        {relatedNews.map((news, index) => (
                            <li key={index} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {news.title}
                                </a>
                                <p className="text-xs text-gray-500">出典: {news.source}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* 投資信託リスト */}
            {activeInvestmentTab === 'investmentTrusts' && (
                <>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">投資信託</h3>
                    <div className="space-y-2">
                        {investmentData.investmentTrusts.map((fund, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                                <span>{fund.name}</span>
                                <span className={fund.change > 0 ? 'text-green-600' : 'text-red-600'}>{fund.change > 0 ? '+' : ''}{fund.change}%</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

        {/* --- 健康管理 --- */}
        <div key="health" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Heart className="mr-2 text-pink-500"/>健康管理</h2>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-pink-50 p-4 rounded-lg"><Scale className="mx-auto mb-1 w-6 h-6 text-pink-500"/>
                    <p className="text-lg font-bold">{healthData.weight}kg</p>
                    <p className="text-sm text-gray-500">目標: {healthData.weightGoal}kg</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg"><Moon className="mx-auto mb-1 w-6 h-6 text-blue-500"/>
                    <p className="text-lg font-bold">{healthData.sleepHours}h</p>
                    <p className="text-sm text-gray-500">目標: {healthData.sleepGoal}h</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg"><Flame className="mx-auto mb-1 w-6 h-6 text-orange-500"/>
                    <p className="text-lg font-bold">{formatNumber(healthData.caloriesBurned)}kcal</p>
                    <p className="text-sm text-gray-500">消費カロリー</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg"><Apple className="mx-auto mb-1 w-6 h-6 text-green-500"/>
                    <p className="text-lg font-bold">{formatNumber(healthData.caloriesConsumed)}kcal</p>
                    <p className="text-sm text-gray-500">摂取カロリー</p>
                </div>
            </div>
            {/* グラフ表示 */}
            <div className="mt-6 space-y-4">
                <div className="w-full h-40">
                    <Line options={chartOptions} data={weightData} />
                </div>
                <div className="w-full h-40">
                    <Line options={chartOptions} data={sleepData} />
                </div>
            </div>
        </div>

        {/* --- 天気・スケジュール --- */}
        <div key="weather" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Calendar className="mr-2 text-yellow-500"/>天気・スケジュール</h2>
            <div className="flex justify-around text-center">
                {weatherData.forecast.map((day, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold">{day.day}</p>
                        {getWeatherIcon(day.condition)}
                        <p className="font-bold text-2xl">{day.temp}°</p>
                        <p className="text-sm text-blue-600">{day.rain}%</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- 読書管理 --- */}
        <div key="reading" className="bg-white rounded-2xl p-6 shadow-lg border flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Book className="mr-2 text-indigo-500"/>最近の読書メモ</h2>
            <div className="space-y-4 overflow-y-auto max-h-56 pr-2 mb-4">
                {readingData.recentBooks.map(book => (
                    <div key={book.id} className="p-3 bg-gray-50 rounded-lg">
                        <h3 className="text-base font-bold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-500">著者: {book.author}</p>
                        <p className="text-sm mt-1 text-gray-700">{book.notes}</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-indigo-600 h-2 rounded-full" 
                                style={{ width: `${book.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleAddReading} className="flex flex-col space-y-2">
                <input
                    type="text"
                    value={newReading.title}
                    onChange={(e) => setNewReading({ ...newReading, title: e.target.value })}
                    placeholder="本のタイトル"
                    className="p-2 border rounded-md text-sm"
                    required
                />
                <input
                    type="text"
                    value={newReading.author}
                    onChange={(e) => setNewReading({ ...newReading, author: e.target.value })}
                    placeholder="著者"
                    className="p-2 border rounded-md text-sm"
                    required
                />
                <textarea
                    value={newReading.notes}
                    onChange={(e) => setNewReading({ ...newReading, notes: e.target.value })}
                    placeholder="メモ"
                    className="p-2 border rounded-md text-sm"
                />
                <div className="flex items-center space-x-2">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={newReading.progress}
                        onChange={(e) => setNewReading({ ...newReading, progress: parseInt(e.target.value, 10) })}
                        className="w-full"
                    />
                    <span className="text-sm">{newReading.progress}%</span>
                    <button type="submit" className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
                        <Plus size={20} />
                    </button>
                </div>
            </form>
        </div>

        {/* --- スティッキー・メモ --- */}
        <div key="sticky-memo" className="bg-yellow-50 rounded-2xl p-6 shadow-lg border border-yellow-200 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Star className="mr-2 text-yellow-600"/>メモ</h2>
            <div className="flex-grow space-y-2 overflow-y-auto pr-2 mb-4">
                {stickyNotes.map(note => (
                    <div key={note.id} className="bg-white p-3 rounded-md shadow flex justify-between items-center text-sm">
                        <span>{note.text}</span>
                        <button onClick={() => handleDeleteNote(note.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash size={16}/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex mt-auto">
                <input 
                    type="text" 
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="新しいメモを追加..."
                    className="flex-grow rounded-full py-2 px-4 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    onKeyDown={(e) => { if (e.key === 'Enter') handleAddNote(); }}
                />
                <button onClick={handleAddNote} className="ml-2 bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-600 transition-colors">
                    <Plus size={20}/>
                </button>
            </div>
        </div>

        {/* --- AIチャット --- */}
        <div key="ai-chat" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><MessageCircle className="mr-2 text-blue-500"/>AIアシスタント</h2>
            <div className="h-40 overflow-y-auto space-y-4 pr-2">
                {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-xl max-w-[70%] text-base ${msg.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input 
                    type="text" 
                    className="flex-grow rounded-full py-2 px-4 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" 
                    placeholder="AIに話しかける..."
                />
                <button className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors">
                    <Send className="w-5 h-5"/>
                </button>
            </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}