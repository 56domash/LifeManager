import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import {
  Wallet, TrendingUp, ArrowUp, Newspaper, Heart, Moon, Flame, Apple, Scale, Eye, Clock,
  Calendar, MapPin, Cloud, Sun, CloudRain, Target, Book, Coffee, Car, ShoppingCart, Star,
} from 'lucide-react';
// ▼▼▼ 変更点: Responsive, WidthProvider をインポート ▼▼▼
import { Responsive, WidthProvider } from 'react-grid-layout';


export default function LifeManagementDashboard() {
  // const [currentTime, setCurrentTime] = useState(new Date());

  // ▼▼▼ 変更点: レスポンシブ対応のGridLayoutを作成 ▼▼▼
const ResponsiveGridLayout = WidthProvider(Responsive);

  // --- ユーザーの要望により、削除せずに残したダミーデータ ---
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

  const [readingData] = useState({
    recentBooks: [
      { id: 1, title: 'ジェネラリストのためのWeb3', author: '坂尻 航', notes: 'ブロックチェーン技術の基礎を理解。Web3のビジネスへの応用例が参考になった。', progress: 70 },
      { id: 2, title: 'FACTFULNESS(ファクトフルネス)', author: 'ハンス・ロスリング', notes: '世界を正しく見るための10の思い込みについて学ぶ。データを元に物事を考える重要性を再認識。', progress: 100 },
      { id: 3, title: 'サイコロジー・オブ・マネー', author: 'モーガン・ハウセル', notes: 'お金に関する心理学的な側面を深掘り。投資や貯蓄における行動経済学の視点が面白い。', progress: 45 },
    ]
  });

  // --- ダッシュボードで使用するデータ ---
  const [weatherData] = useState({
    current: { temp: 24, condition: 'sunny' },
    forecast: [
      { day: '今日', temp: 24, condition: 'sunny', rain: 10 },
      { day: '明日', temp: 22, condition: 'cloudy', rain: 30 },
      { day: '明後日', temp: 26, condition: 'rainy', rain: 80 },
      { day: '月曜', temp: 21, condition: 'sunny', rain: 0 }
    ]
  });
  const [financeData] = useState({
    balance: 780000,
    monthlyExpense: 245000,
    budget: 280000,
  });
  const [investmentData] = useState({
    totalAssets: 2450000,
    dailyChange: 45000,
    dailyChangePercent: 1.87,
    hotStocks: [
      { symbol: 'NVDA', name: 'エヌビディア', change: 8.5, price: 125.30 },
      { symbol: '7203', name: 'トヨタ自動車', change: 2.1, price: 2890 },
      { symbol: 'AAPL', name: 'アップル', change: -1.2, price: 189.50 },
      { symbol: '6758', name: 'ソニーグループ', change: 3.4, price: 13250 }
    ],
  });
  const [newsData] = useState({
    breakingNews: [
        { title: '政府、新経済政策発表', views: 125000, time: '1時間前' },
        { title: 'AI技術の進歩で労働市場に変化', views: 98000, time: '2時間前' },
        { title: '円安進行、輸出企業に追い風', views: 87000, time: '3時間前' },
        { title: '新型コロナ変異株、感染者数増加', views: 76000, time: '4時間前' },
    ]
  });
  const [healthData] = useState({
    weight: 68.5,
    weightGoal: 65.0,
    sleepHours: 7.2,
    sleepGoal: 8.0,
    caloriesBurned: 2150,
    caloriesConsumed: 1850,
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (amount) => new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  const formatNumber = (n) => new Intl.NumberFormat('ja-JP').format(n);
  const formatStockPrice = (symbol, price) => (/^\d+$/.test(symbol) ? `¥${formatNumber(price)}` : `$${price.toFixed(2)}`);
  const getWeatherIcon = (condition) => {
    if (condition === 'cloudy') return <Cloud className="w-8 h-8 text-gray-500" />;
    if (condition === 'rainy') return <CloudRain className="w-8 h-8 text-blue-500" />;
    return <Sun className="w-8 h-8 text-yellow-500" />;
  };
  
  // ▼▼▼ 変更点: layoutsを画面サイズ別に定義 ▼▼▼
 const layouts = {
    lg: [ // 1200px以上の画面用レイアウト
      { i: 'finance', x: 0, y: 0, w: 4, h: 2, minW: 3, minH: 2 },
      { i: 'investment', x: 4, y: 0, w: 4, h: 2, minW: 3, minH: 2 },
      { i: 'news', x: 8, y: 0, w: 4, h: 2, minW: 3, minH: 2 },
      { i: 'health', x: 0, y: 2, w: 6, h: 2, minW: 3, minH: 2 },
      { i: 'weather', x: 6, y: 2, w: 6, h: 2, minW: 3, minH: 2 },
      { i: 'reading', x: 0, y: 4, w: 6, h: 2, minW: 3, minH: 2 }, // ▼▼▼ 追加 ▼▼▼
    ]
    // ここに md, sm などの小さい画面用のレイアウトも追加できます
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 w-full">
      {/* ヘッダー */}
      <header className="text-center mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">ライフ管理ダッシュボード</h1>
              <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      {/* <span>{currentTime.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span> */}
                  </div>
                  <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      {/* <span>{currentTime.toLocaleTimeString('ja-JP')}</span> */}
                  </div>
                  <div className="flex items-center space-x-2">
                      {getWeatherIcon(weatherData.current.condition)}
                      <span>{weatherData.current.temp}°C</span>
                  </div>
              </div>
          </div>
      </header>

      {/* ▼▼▼ 変更点: ResponsiveGridLayoutを使用 ▼▼▼ */}
      <ResponsiveGridLayout 
        className="layout" 
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={150} // 高さを少し調整
        isDraggable={true}
        isResizable={true}
      >
        {/* --- 家計簿管理 --- */}
        <div key="finance" className="bg-white rounded-2xl p-6 shadow-lg border">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Wallet className="mr-2 text-green-500"/>家計簿管理</h2>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg mb-4">
              <p>総残高</p>
              <p className="text-2xl font-bold">{formatCurrency(financeData.balance)}</p>
          </div>
          <div className="flex justify-between">
              <div><p className="text-sm text-gray-500">今月支出</p><p className="font-bold">{formatCurrency(financeData.monthlyExpense)}</p></div>
              <div><p className="text-sm text-gray-500">予算まで</p><p className="font-bold text-green-600">{formatCurrency(financeData.budget - financeData.monthlyExpense)}</p></div>
          </div>
        </div>

        {/* --- 投資管理 --- */}
        <div key="investment" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><TrendingUp className="mr-2 text-blue-500"/>投資管理</h2>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg mb-4">
                <p>総投資資産</p>
                <p className="text-2xl font-bold">{formatCurrency(investmentData.totalAssets)}</p>
                <p className="text-sm flex items-center"><ArrowUp className="w-4 h-4"/>+{formatCurrency(investmentData.dailyChange)} (+{investmentData.dailyChangePercent}%)</p>
            </div>
            {investmentData.hotStocks.map(stock => (
                <div key={stock.symbol} className="flex justify-between items-center text-sm mb-1">
                    <span>{stock.symbol} {stock.name}</span>
                    <span className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                </div>
            ))}
        </div>

        {/* --- ニュース管理 --- */}
        <div key="news" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Newspaper className="mr-2 text-red-500"/>ニュース管理</h2>
            {newsData.breakingNews.map((n, i) => (
                <div key={i} className="mb-2 p-2 hover:bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-800 font-medium">{n.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Eye className="w-3 h-3" />
                        <span>{formatNumber(n.views)}</span>
                        <span>{n.time}</span>
                    </div>
                </div>
            ))}
        </div>
        
        {/* --- 健康管理 --- */}
        <div key="health" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Heart className="mr-2 text-pink-500"/>健康管理</h2>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-pink-50 p-3 rounded-lg"><Scale className="mx-auto mb-1 text-pink-500"/>{healthData.weight}kg <p className="text-xs text-gray-500">目標: {healthData.weightGoal}kg</p></div>
                <div className="bg-blue-50 p-3 rounded-lg"><Moon className="mx-auto mb-1 text-blue-500"/>{healthData.sleepHours}h <p className="text-xs text-gray-500">目標: {healthData.sleepGoal}h</p></div>
                <div className="bg-orange-50 p-3 rounded-lg"><Flame className="mx-auto mb-1 text-orange-500"/>消費 {formatNumber(healthData.caloriesBurned)}kcal</div>
                <div className="bg-green-50 p-3 rounded-lg"><Apple className="mx-auto mb-1 text-green-500"/>摂取 {formatNumber(healthData.caloriesConsumed)}kcal</div>
            </div>
        </div>

        {/* --- 天気・スケジュール --- */}
        <div key="weather" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Calendar className="mr-2 text-yellow-500"/>天気・スケジュール</h2>
            <div className="flex justify-around text-center">
                {weatherData.forecast.map((day, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-semibold">{day.day}</p>
                        {getWeatherIcon(day.condition)}
                        <p className="font-bold">{day.temp}°</p>
                        <p className="text-xs text-blue-600">{day.rain}%</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- 読書管理 --- */}
        <div key="reading" className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Book className="mr-2 text-indigo-500"/>最近の読書メモ</h2>
            <div className="space-y-4 overflow-y-auto max-h-56">
                {readingData.recentBooks.map(book => (
                    <div key={book.id} className="p-3 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-bold text-gray-800">{book.title}</h3>
                        <p className="text-xs text-gray-500">著者: {book.author}</p>
                        <p className="text-xs mt-1 text-gray-700">{book.notes}</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                                className="bg-indigo-600 h-1.5 rounded-full" 
                                style={{ width: `${book.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </ResponsiveGridLayout>
    </div>
  );
}