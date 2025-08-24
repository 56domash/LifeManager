import React, { useEffect, useState } from 'react';
import {
  Wallet, TrendingUp, ArrowUp, ArrowDown, Newspaper, Heart, Moon, Flame, Apple, Scale, Eye, Clock,
  Calendar, Target, Book, Briefcase, MapPin, Cloud, Sun, CloudRain, Wind, Thermometer,
  Users, Coffee, Car, ShoppingCart, Gift, Star, Award, Zap
} from 'lucide-react';

import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

// 保存用キー
const LS_KEY = 'life-dashboard.layouts.v1';

// 12列ベースの初期レイアウト（上6：2,2,1,1,1,1 / 下2：4,4）
const initialLg: Layout[] = [
  { i: 'finance',  x: 0,  y: 0,  w: 3, h: 30 }, // 2倍幅相当（後でrowHeightで高さ調整）
  { i: 'invest',   x: 3,  y: 0,  w: 3, h: 30 },
  { i: 'tasks',    x: 6,  y: 0,  w: 2, h: 30 },
  { i: 'news',     x: 8,  y: 0,  w: 2, h: 30 },
  { i: 'health',   x:10,  y: 0,  w: 2, h: 30 },
  { i: 'weather',  x: 6,  y:30,  w: 6, h: 30 }, // 1行目の右側に続くよう並べ替えてOK
  // 2段目
  { i: 'learning', x: 0,  y:60,  w: 6, h: 32 },
  { i: 'social',   x: 6,  y:60,  w: 6, h: 32 },
];

const cols = { lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 };
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

export default function LifeManagementDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // ======== ダミーデータ（元のまま） ========
  const [weatherData] = useState({
    current: { temp: 24, condition: 'sunny', humidity: 65, windSpeed: 8 },
    forecast: [
      { day: '今日', temp: 24, condition: 'sunny', rain: 10 },
      { day: '明日', temp: 22, condition: 'cloudy', rain: 30 },
      { day: '明後日', temp: 26, condition: 'rainy', rain: 80 },
      { day: '月曜', temp: 21, condition: 'sunny', rain: 0 }
    ]
  });

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

  const [financeData] = useState({
    balance: 780000,
    monthlyExpense: 245000,
    budget: 280000,
    categories: [
      { name: '食費', amount: 65000, budget: 70000, color: 'bg-orange-500' },
      { name: '住居費', amount: 120000, budget: 120000, color: 'bg-blue-500' },
      { name: '交通費', amount: 25000, budget: 30000, color: 'bg-green-500' },
      { name: '光熱費', amount: 18000, budget: 20000, color: 'bg-yellow-500' },
      { name: '娯楽費', amount: 12000, budget: 15000, color: 'bg-purple-500' },
      { name: 'その他', amount: 5000, budget: 25000, color: 'bg-gray-500' }
    ]
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
    stockNews: [
      { title: 'NVIDIA、AI需要拡大で業績好調', time: '2時間前' },
      { title: 'トヨタ、新型EV発表で株価上昇', time: '4時間前' },
      { title: '日経平均、3日続伸で年初来高値', time: '6時間前' }
    ]
  });

  const [newsData] = useState({
    breakingNews: [
      { title: '政府、新経済政策発表 - 株式市場に大きな影響', views: 125000, time: '1時間前' },
      { title: 'AI技術の進歩で労働市場に変化', views: 98000, time: '2時間前' },
      { title: '円安進行、輸出企業に追い風', views: 87000, time: '3時間前' },
      { title: '新型コロナ変異株、感染者数増加', views: 76000, time: '4時間前' },
      { title: '気候変動対策、国際会議で合意', views: 65000, time: '5時間前' },
      { title: 'スポーツ界で新記録達成', views: 54000, time: '6時間前' },
      { title: 'テクノロジー企業、大型買収発表', views: 43000, time: '7時間前' },
      { title: '不動産市場、価格上昇傾向続く', views: 38000, time: '8時間前' }
    ]
  });

  const [healthData] = useState({
    weight: 68.5,
    weightGoal: 65.0,
    sleepHours: 7.2,
    sleepGoal: 8.0,
    caloriesBurned: 2150,
    caloriesConsumed: 1850,
    calorieGoal: 2000,
    steps: 8540,
    stepGoal: 10000,
    waterIntake: 1.8,
    waterGoal: 2.5
  });

  // ======== DnD レイアウト管理 ========
  const [locked, setLocked] = useState(false);
  const [layouts, setLayouts] = useState<{ [k: string]: Layout[] }>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return { lg: initialLg };
  });

  const handleLayoutChange = (_: Layout[], all: { [k: string]: Layout[] }) => {
    setLayouts(all);
    localStorage.setItem(LS_KEY, JSON.stringify(all));
  };

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const [balance, setBalance] = useState("");

  // ======== フォーマッタ ========
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', minimumFractionDigits: 0 }).format(amount);
  const formatNumber = (n: number) => new Intl.NumberFormat('ja-JP').format(n);
  const formatStockPrice = (symbol: string, price: number) => (/^\d+$/.test(symbol) ? `¥${formatNumber(price)}` : `$${price.toFixed(2)}`);
  const getWeatherIcon = (condition: string) => condition === 'cloudy'
    ? <Cloud className="w-5 h-5 text-gray-500" />
    : condition === 'rainy'
    ? <CloudRain className="w-5 h-5 text-blue-500" />
    : <Sun className="w-5 h-5 text-yellow-500" />;

  // ======== UI ========
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
      {/* ヘッダー */}
      <header className="shrink-0 text-center py-2">
        <h1 className="text-3xl font-bold text-gray-800">ライフ管理ダッシュボード</h1>
        <p className="text-gray-600 text-sm">
          {currentTime.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}{' '}
          {currentTime.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </header>

      {/* 天気チップ */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-200 flex items-center space-x-4">
          {getWeatherIcon(weatherData.current.condition)}
          <span className="font-medium text-gray-800">{weatherData.current.temp}°C</span>
          <div className="w-px h-4 bg-gray-300" />
          <Wind className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{weatherData.current.windSpeed}m/s</span>
          <div className="w-px h-4 bg-gray-300" />
          <Thermometer className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{weatherData.current.humidity}%</span>
        </div>
      </div>

      {/* 操作ボタン */}
      <div className="px-4 pb-2 flex justify-end gap-2">
        <button
          className={`px-3 py-1 rounded-md text-sm border ${locked ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setLocked(v => !v)}
          title="ロック切替（ドラッグ/リサイズON/OFF）"
        >
          {locked ? '🔒 ロック中' : '🔓 編集モード'}
        </button>
        <button
          className="px-3 py-1 rounded-md text-sm border bg-white"
          onClick={() => {
            localStorage.removeItem(LS_KEY);
            setLayouts({ lg: initialLg });
          }}
          title="初期配置にリセット"
        >
          ↺ レイアウトリセット
        </button>
      </div>

      {/* 本体：DnD 対応グリッド */}
      <main className="h-[calc(100vh-110px)] px-4 pb-4 overflow-hidden">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          cols={cols}
          breakpoints={breakpoints}
          onLayoutChange={handleLayoutChange}
          isDraggable={!locked}
          isResizable={!locked}
          draggableHandle=".drag-handle"      // タイトル行に付与
          margin={[16, 16]}
          containerPadding={[0, 0]}
          compactType="vertical"
          rowHeight={6}                        // h=30 → 約180px 目安（調整OK）
          preventCollision={false}
          useCSSTransforms
        >
          {/* ===== 1段目（6枚） ===== */}
          <div key="finance" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col relative">
              <div className="drag-handle absolute top-4 right-4 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">AI分析済み</div>
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center"><Wallet className="w-6 h-6 text-green-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">家計簿管理</h2>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600">⚠️</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">AI予測</p>
                    <p className="text-xs text-amber-700">このペースだと今月は予算を5,000円オーバーします</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white mb-3">
                <div className="text-sm opacity-90">総残高</div>
                <div className="text-3xl font-bold">{formatCurrency(financeData.balance)}</div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-sm text-gray-600">今月の支出</div>
                  <div className="text-xl font-bold text-gray-800">{formatCurrency(financeData.monthlyExpense)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">予算まで</div>
                  <div className={`text-xl font-bold ${financeData.monthlyExpense < financeData.budget ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(financeData.budget - financeData.monthlyExpense)}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className={`h-4 rounded-full ${financeData.monthlyExpense > financeData.budget ? 'bg-red-500' : 'bg-green-500'}`}
                       style={{ width: `${Math.min((financeData.monthlyExpense / financeData.budget) * 100, 100)}%` }} />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {((financeData.monthlyExpense / financeData.budget) * 100).toFixed(1)}% 使用
                </div>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">カテゴリ別内訳</h3>
                <div className="space-y-3">
                  {financeData.categories.map((c, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 ${c.color} rounded-full`} />
                        <span className="text-sm text-gray-700">{c.name}</span>
                        {c.amount > c.budget * 0.9 && <span className="text-xs text-amber-600">⚠️</span>}
                      </div>
                      <div className="text-sm font-medium text-gray-800">{formatCurrency(c.amount)}</div>
                    </div>
                  ))}
                </div>
              </div>

            {/* 入力欄追加 */}
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  残高入力
                </label>
                <input
                  type="text"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  placeholder="例: 150000"
                  className="w-full border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  現在の入力値: {balance || "未入力"}
                </p>
              </div>

            </section>
          </div>

          <div key="invest" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col relative">
              <div className="drag-handle absolute top-4 right-4 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">AI推奨あり</div>
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-blue-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">投資管理</h2>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📈</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">AI推奨</p>
                    <p className="text-xs text-blue-700">NVDA株は利益確定のタイミングです</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 text-white mb-3">
                <div className="text-sm opacity-90">総投資資産</div>
                <div className="text-3xl font-bold">{formatCurrency(investmentData.totalAssets)}</div>
                <div className="flex items-center mt-1">
                  {investmentData.dailyChange > 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                  <span className="text-sm">
                    {investmentData.dailyChange > 0 ? '+' : ''}{formatCurrency(investmentData.dailyChange)}
                    ({investmentData.dailyChange > 0 ? '+' : ''}{investmentData.dailyChangePercent}%)
                  </span>
                </div>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">🔥 HOT銘柄</h3>
                <div className="space-y-2">
                  {investmentData.hotStocks.map((stock, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg relative">
                      <div>
                        <div className="font-medium text-base text-gray-800">{stock.symbol}</div>
                        <div className="text-sm text-gray-500">{stock.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-medium text-gray-800">{formatStockPrice(stock.symbol, stock.price)}</div>
                        <div className={`text-sm ${stock.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change > 0 ? '+' : ''}{stock.change}%
                        </div>
                      </div>
                      {stock.symbol === 'NVDA' && <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 mt-3">
                <h3 className="font-semibold text-gray-700 text-sm mb-2">📈 投資関連ニュース</h3>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {investmentData.stockNews.map((news, i) => (
                    <div key={i} className="p-2 border-l-4 border-blue-400 bg-blue-50">
                      <div className="text-sm text-gray-800 mb-1">{news.title}</div>
                      <div className="text-xs text-gray-500">{news.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div key="tasks" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-indigo-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">タスク・目標管理</h2>
              </div>

              <div className="shrink-0 mb-3">
                <h3 className="font-semibold text-gray-700 text-sm mb-2">今日のタスク</h3>
                <div className="space-y-2 max-h-28 overflow-auto">
                  {taskData.todayTasks.map((task) => (
                    <div key={task.id} className={`flex items-center justify-between p-2 rounded-lg border ${task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" checked={task.completed} readOnly className="w-4 h-4 text-blue-600 rounded" />
                        <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{task.text}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          task.priority === 'high' ? 'bg-red-100 text-red-700' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>{task.priority}</span>
                      </div>
                      <div className="text-xs text-gray-500">{task.deadline}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-2">週間目標</h3>
                <div className="space-y-2">
                  {taskData.weeklyGoals.map((goal, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-800">{goal.goal}</span>
                        <span className="text-sm text-gray-600">{goal.progress}/{goal.target} {goal.unit}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${goal.progress >= goal.target ? 'bg-green-500' : 'bg-blue-500'}`}
                             style={{ width: `${Math.min((goal.progress / goal.target) * 100, 100)}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{((goal.progress / goal.target) * 100).toFixed(0)}% 達成</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div key="news" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center"><Newspaper className="w-6 h-6 text-red-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">ニュース管理</h2>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-4">🔥 Breaking News Top8</h3>
                <div className="space-y-2">
                  {newsData.breakingNews.map((n, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-800 font-medium leading-tight mb-1">{n.title}</div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1"><Eye className="w-3 h-3" /><span>{formatNumber(n.views)}</span></div>
                          <div className="flex items-center space-x-1"><Clock className="w-3 h-3" /><span>{n.time}</span></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div key="health" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center"><Heart className="w-6 h-6 text-pink-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">健康管理</h2>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-pink-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2"><Scale className="w-5 h-5 text-pink-600" /><span className="text-sm font-medium text-gray-700">体重</span></div>
                  <div className="text-xl font-bold text-gray-800">{healthData.weight}kg</div>
                  <div className="text-xs text-gray-500">目標: {healthData.weightGoal}kg (-{(healthData.weight - healthData.weightGoal).toFixed(1)}kg)</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2"><Moon className="w-5 h-5 text-blue-600" /><span className="text-sm font-medium text-gray-700">睡眠時間</span></div>
                  <div className="text-xl font-bold text-gray-800">{healthData.sleepHours}h</div>
                  <div className="text-xs text-gray-500">目標: {healthData.sleepGoal}h (-{(healthData.sleepGoal - healthData.sleepHours).toFixed(1)}h)</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2"><Flame className="w-5 h-5 text-orange-600" /><span className="text-sm font-medium text-gray-700">消費カロリー</span></div>
                  <div className="text-xl font-bold text-gray-800">{formatNumber(healthData.caloriesBurned)}</div>
                  <div className="text-xs text-orange-600">目標達成!</div>
                </div>
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2"><Apple className="w-5 h-5 text-green-600" /><span className="text-sm font-medium text-gray-700">摂取カロリー</span></div>
                  <div className="text-xl font-bold text-gray-800">{formatNumber(healthData.caloriesConsumed)}</div>
                  <div className="text-xs text-gray-500">目標: {formatNumber(healthData.calorieGoal)} (-{healthData.calorieGoal - healthData.caloriesConsumed})</div>
                </div>
              </div>

              <div className="mt-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-3 text-white">
                <div className="text-xs opacity-90">カロリー収支</div>
                <div className="text-lg font-bold">-{formatNumber(healthData.caloriesBurned - healthData.caloriesConsumed)} cal</div>
              </div>
            </section>
          </div>

          <div key="weather" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center"><Calendar className="w-6 h-6 text-yellow-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">天気・スケジュール</h2>
              </div>

              <div className="shrink-0 mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">4日間天気予報</h3>
                <div className="grid grid-cols-4 gap-2">
                  {weatherData.forecast.map((day, i) => (
                    <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">{day.day}</div>
                      <div className="mb-2">{getWeatherIcon(day.condition)}</div>
                      <div className="text-sm font-bold text-gray-800">{day.temp}°</div>
                      <div className="text-xs text-blue-600">{day.rain}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">upcoming予定</h3>
                <div className="space-y-2">
                  {socialData.upcomingEvents.map((event, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        event.type === 'work' ? 'bg-blue-500' :
                        event.type === 'social' ? 'bg-green-500' :
                        event.type === 'health' ? 'bg-pink-500' :
                        'bg-purple-500'
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">{event.name}</div>
                        <div className="text-xs text-gray-500">{event.date}</div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ===== 2段目（2枚） ===== */}
          <div key="learning" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center"><Book className="w-6 h-6 text-emerald-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">学習・スキル管理</h2>
              </div>

              <div className="shrink-0 mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">進行中のコース</h3>
                <div className="space-y-3">
                  {skillData.currentCourses.map((course, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-800">{course.name}</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${course.progress}%` }} />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>次: {course.nextLesson}</span>
                        <span>残り: {course.timeLeft}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grow min-h-0 overflow-auto">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">🏆 実績・達成</h3>
                <div className="space-y-2">
                  {skillData.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">{achievement.title}</div>
                        <div className="text-xs text-gray-500">{achievement.date}</div>
                      </div>
                      <div className="text-lg font-bold text-yellow-600">+{achievement.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div key="social" className="h-full">
            <section className="h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col">
              <div className="drag-handle flex items-center space-x-3 mb-4 cursor-move">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-rose-600" /></div>
                <h2 className="text-xl font-bold text-gray-800">ライフスタイル・ソーシャル</h2>
              </div>

              <div className="grow grid grid-cols-2 gap-4 min-h-0">
                <div className="min-h-0 flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm mb-3">今後のイベント</h3>
                  <div className="space-y-2 grow min-h-0 overflow-auto">
                    {socialData.upcomingEvents.map((event, i) => (
                      <div key={i} className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                        <div className="flex items-center space-x-2 mb-1">
                          {event.type === 'social' && <Users className="w-4 h-4 text-green-600" />}
                          {event.type === 'work' && <Briefcase className="w-4 h-4 text-blue-600" />}
                          {event.type === 'health' && <Heart className="w-4 h-4 text-pink-600" />}
                          {event.type === 'entertainment' && <Gift className="w-4 h-4 text-purple-600" />}
                          <span className="text-sm font-medium text-gray-800">{event.name}</span>
                        </div>
                        <div className="text-xs text-gray-600">{event.date}</div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-h-0 flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm mb-3">最近のアクティビティ</h3>
                  <div className="space-y-2 grow min-h-0 overflow-auto">
                    {socialData.recentActivities.map((activity, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          {activity.category === 'food' && <Coffee className="w-4 h-4 text-orange-500" />}
                          {activity.category === 'transport' && <Car className="w-4 h-4 text-blue-500" />}
                          {activity.category === 'shopping' && <ShoppingCart className="w-4 h-4 text-purple-500" />}
                          <span className="text-sm font-medium text-gray-800">{activity.action}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600 font-medium">{formatCurrency(activity.amount)}</span>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-4 text-white">
                  <h4 className="font-bold mb-2">今日のライフスコア</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold">85点</div>
                      <div className="text-sm opacity-90">健康・仕事・社交のバランス良好</div>
                    </div>
                    <div className="text-4xl">🌟</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ResponsiveGridLayout>
      </main>
    </div>
  );
}
