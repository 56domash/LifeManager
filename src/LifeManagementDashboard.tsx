import React, { useEffect, useState } from 'react';
import {
  Wallet, TrendingUp, ArrowUp, ArrowDown, Newspaper, Heart, Moon, Flame, Apple, Scale, Eye, Clock,
  Calendar, Target, Book, Briefcase, MapPin, Cloud, Sun, CloudRain, Wind, Thermometer,
  Users, Coffee, Car, ShoppingCart, Gift, Star, Award, Zap, DollarSign, Activity, 
  Bell, Settings, Home, BarChart3, PieChart
} from 'lucide-react';

export default function LifeManagementDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [balance, setBalance] = useState("");

  // ダミーデータ
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

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // フォーマッタ
  const formatCurrency = (amount) =>
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', minimumFractionDigits: 0 }).format(amount);
  const formatNumber = (n) => new Intl.NumberFormat('ja-JP').format(n);
  const formatStockPrice = (symbol, price) => (/^\d+$/.test(symbol) ? `¥${formatNumber(price)}` : `$${price.toFixed(2)}`);
  const getWeatherIcon = (condition) => condition === 'cloudy'
    ? <Cloud className="w-5 h-5 text-gray-500" />
    : condition === 'rainy'
    ? <CloudRain className="w-5 h-5 text-blue-500" />
    : <Sun className="w-5 h-5 text-yellow-500" />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-4">
      {/* ヘッダー */}
      <header className="text-center mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">ライフ管理ダッシュボード</h1>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">
                {currentTime.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">
                {currentTime.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {getWeatherIcon(weatherData.current.condition)}
              <span className="text-gray-700">{weatherData.current.temp}°C</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインダッシュボード */}
      <div className="max-w-7xl mx-auto">
        {/* 上段 */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
          {/* 家計簿管理 */}
          <div className="lg:col-span-2">
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">家計簿管理</h2>
                </div>
                <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  AI分析済み
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600">⚠️</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">AI予測</p>
                    <p className="text-xs text-amber-700">このペースだと今月は予算を5,000円オーバーします</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white mb-4">
                <div className="text-sm opacity-90">総残高</div>
                <div className="text-2xl font-bold">{formatCurrency(financeData.balance)}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">今月支出</div>
                  <div className="text-lg font-bold text-gray-800">{formatCurrency(financeData.monthlyExpense)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">予算まで</div>
                  <div className="text-lg font-bold text-green-600">{formatCurrency(financeData.budget - financeData.monthlyExpense)}</div>
                </div>
              </div>

              <div className="space-y-2">
                {financeData.categories.slice(0, 4).map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${c.color} rounded-full`} />
                      <span className="text-sm text-gray-700">{c.name}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-800">{formatCurrency(c.amount)}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  placeholder="残高を入力..."
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </section>
          </div>

          {/* 投資管理 */}
          <div className="lg:col-span-2">
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">投資管理</h2>
                </div>
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  AI推奨あり
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 text-white mb-4">
                <div className="text-sm opacity-90">総投資資産</div>
                <div className="text-2xl font-bold">{formatCurrency(investmentData.totalAssets)}</div>
                <div className="flex items-center mt-1">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">+{formatCurrency(investmentData.dailyChange)} (+{investmentData.dailyChangePercent}%)</span>
                </div>
              </div>

              <h3 className="font-semibold text-gray-700 text-sm mb-3">🔥 HOT銘柄</h3>
              <div className="space-y-2 mb-4">
                {investmentData.hotStocks.map((stock, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm text-gray-800">{stock.symbol}</div>
                      <div className="text-xs text-gray-500">{stock.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{formatStockPrice(stock.symbol, stock.price)}</div>
                      <div className={`text-xs ${stock.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 max-h-24 overflow-y-auto">
                {investmentData.stockNews.map((news, i) => (
                  <div key={i} className="p-2 border-l-4 border-blue-400 bg-blue-50 rounded">
                    <div className="text-xs text-gray-800">{news.title}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* タスク・目標管理 */}
          <div className="lg:col-span-1">
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-sm font-bold text-gray-800">タスク・目標管理</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 text-xs mb-2">今日のタスク</h3>
                <div className="space-y-1">
                  {taskData.todayTasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                      <input type="checkbox" checked={task.completed} readOnly className="w-3 h-3" />
                      <span className="text-xs text-gray-700 flex-1">{task.text}</span>
                      <span className="text-xs text-gray-500">{task.deadline}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 text-xs mb-2">進捗状況</h3>
                <div className="space-y-2">
                  {taskData.weeklyGoals.slice(0, 2).map((goal, i) => (
                    <div key={i} className="p-2 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-gray-700">{goal.goal}</span>
                        <span className="text-xs text-gray-600">{Math.round((goal.progress / goal.target) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: `${(goal.progress / goal.target) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ニュース管理 */}
          <div className="lg:col-span-1">
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-sm font-bold text-gray-800">ニュース管理</h2>
              </div>

              <div className="mb-2">
                <h3 className="font-semibold text-gray-700 text-xs mb-2">🔥 Breaking News Top8</h3>
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {newsData.breakingNews.map((n, i) => (
                  <div key={i} className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-800 font-medium leading-tight mb-1">{n.title}</div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{formatNumber(n.views)}</span>
                        </div>
                        <span>{n.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* 下段 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* 健康管理 */}
          <div>
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">健康管理</h2>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-pink-50 rounded-xl p-3 text-center">
                  <Scale className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{healthData.weight}kg</div>
                  <div className="text-xs text-gray-500">目標: {healthData.weightGoal}kg</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <Moon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{healthData.sleepHours}h</div>
                  <div className="text-xs text-gray-500">目標: {healthData.sleepGoal}h</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 rounded-xl p-3 text-center">
                  <Flame className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-800">{formatNumber(healthData.caloriesBurned)}</div>
                  <div className="text-xs text-orange-600">消費カロリー</div>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <Apple className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-800">{formatNumber(healthData.caloriesConsumed)}</div>
                  <div className="text-xs text-green-600">摂取カロリー</div>
                </div>
              </div>

              <div className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-3 text-white text-center">
                <div className="text-xs opacity-90">カロリー収支</div>
                <div className="text-lg font-bold">-{formatNumber(healthData.caloriesBurned - healthData.caloriesConsumed)} cal</div>
              </div>
            </section>
          </div>

          {/* 天気・スケジュール */}
          <div>
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">天気・スケジュール</h2>
              </div>

              <div className="mb-4">
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

              <div>
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

          {/* 学習・ソーシャル統合 */}
          <div>
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Book className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">学習・ソーシャル</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">進行中のコース</h3>
                <div className="space-y-2">
                  {skillData.currentCourses.map((course, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-800">{course.name}</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">🏆 最近の実績</h3>
                <div className="space-y-2">
                  {skillData.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-3 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">{achievement.title}</div>
                        <div className="text-xs text-gray-500">{achievement.date}</div>
                      </div>
                      <div className="text-sm font-bold text-yellow-600">+{achievement.points}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">最近のアクティビティ</h3>
                <div className="space-y-2">
                  {socialData.recentActivities.slice(0, 3).map((activity, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        {activity.category === 'food' && <Coffee className="w-4 h-4 text-orange-500" />}
                        {activity.category === 'transport' && <Car className="w-4 h-4 text-blue-500" />}
                        {activity.category === 'shopping' && <ShoppingCart className="w-4 h-4 text-purple-500" />}
                        <span className="text-sm text-gray-800">{activity.action}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-medium">{formatCurrency(activity.amount)}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-4 text-white text-center">
                <h4 className="font-bold mb-2">今日のライフスコア</h4>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold">85点</div>
                    <div className="text-sm opacity-90">バランス良好</div>
                  </div>
                  <div className="text-3xl">🌟</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* フッター統計情報 */}
        <div className="mt-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{formatCurrency(financeData.balance)}</div>
                  <div className="text-xs text-gray-600">総残高</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{formatCurrency(investmentData.totalAssets)}</div>
                  <div className="text-xs text-gray-600">投資資産</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Activity className="w-5 h-5 text-pink-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{healthData.weight}kg</div>
                  <div className="text-xs text-gray-600">現在体重</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{taskData.todayTasks.filter(t => t.completed).length}/{taskData.todayTasks.length}</div>
                  <div className="text-xs text-gray-600">完了タスク</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">85</div>
                  <div className="text-xs text-gray-600">ライフスコア</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* クイックアクション */}
        <div className="mt-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 text-center">クイックアクション</h3>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Home className="w-4 h-4" />
                <span className="text-sm">支出入力</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">投資記録</span>
              </button>
              <button className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">健康記録</span>
              </button>
              <button className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Book className="w-4 h-4" />
                <span className="text-sm">学習記録</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">設定</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}