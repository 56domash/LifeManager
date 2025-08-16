import React, { useState, useEffect } from 'react';
import {
  Wallet, TrendingUp, ArrowUp, ArrowDown, Newspaper, Heart, Moon, Flame, Apple, Scale, Eye, Clock,
  Calendar, Target, Book, Briefcase, MapPin, Cloud, Sun, CloudRain, Wind, Thermometer,
  Users, Coffee, Car, Home, ShoppingCart, Gift, Star, Award, Zap
} from 'lucide-react';

const LifeManagementDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 天気データ（ダミー）
  const [weatherData] = useState({
    current: { temp: 24, condition: 'sunny', humidity: 65, windSpeed: 8 },
    forecast: [
      { day: '今日', temp: 24, condition: 'sunny', rain: 10 },
      { day: '明日', temp: 22, condition: 'cloudy', rain: 30 },
      { day: '明後日', temp: 26, condition: 'rainy', rain: 80 },
      { day: '月曜', temp: 21, condition: 'sunny', rain: 0 }
    ]
  });

  // タスク・目標データ（ダミー）
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

  // ソーシャル・ライフスタイルデータ（ダミー）
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

  // 学習・スキルデータ（ダミー）
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

  // 家計簿データ（ダミー）
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

  // 投資（ダミー）
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

  // ニュース（ダミー）
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

  // 健康（ダミー）
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

  // AIエージェント（ダミー）
  const [aiAgent] = useState({
    name: 'ARIA',
    currentTask: '分析中…',
    notifications: [
      { id: 1, type: 'warning', icon: '⚠️', title: '予算オーバーの可能性', message: '今月の食費が予算の92%に到達。残り8日間で5,000円以内に抑えることをお勧めします。', time: '2分前', priority: 'high' },
      { id: 2, type: 'success', icon: '📈', title: '投資パフォーマンス良好', message: 'NVDA株の上昇により、今日の利益は+45,000円。利益確定を検討してはいかがでしょうか。', time: '15分前', priority: 'medium' },
      { id: 3, type: 'info', icon: '🎯', title: 'タスク完了率向上', message: '今週のタスク完了率85%で前週比+15%向上。この調子で継続しましょう。', time: '1時間前', priority: 'low' }
    ]
  });

  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { type: 'ai', message: 'こんにちは！AIエージェントのARIAです。何かお手伝いできますか？', time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', minimumFractionDigits: 0 }).format(amount);

  const formatNumber = (n) => new Intl.NumberFormat('ja-JP').format(n);

  const formatStockPrice = (symbol, price) => {
    if (/^\d+$/.test(symbol)) return `¥${formatNumber(price)}`;
    const v = typeof price === 'number' ? price.toFixed(2) : price;
    return `$${v}`;
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;
      default: return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  const toggleTask = (taskId) => {
    // タスク完了状態の切り替え（実装は省略）
    console.log('Toggle task:', taskId);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    const mine = { type: 'user', message: userInput, time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }) };
    setAiMessages((p) => [...p, mine]);
    setUserInput('');
    setTimeout(() => {
      const responses = [
        '分析結果：現在の支出ペースから来月は10%の節約が可能です。',
        '投資は分散を心がけ、リスクを管理しましょう。',
        '健康管理は順調です。この調子で継続できそうです。',
        '今日のタスクを2つ完了すれば目標達成率90%になります。',
        '天気予報によると明日は雨なので、屋内での運動をお勧めします。'
      ];
      const ai = { type: 'ai', message: responses[Math.floor(Math.random() * responses.length)], time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }) };
      setAiMessages((p) => [...p, ai]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-2 relative">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">ライフ管理ダッシュボード</h1>
        <p className="text-gray-600 text-lg">
          {currentTime.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}{' '}
          {currentTime.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {/* 天気情報バー */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
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

      {/* AIエージェント常駐バー */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 shadow-lg border-2 border-white">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="text-white">
              <div className="font-bold text-sm">{aiAgent.name}</div>
              <div className="text-xs opacity-90">{aiAgent.currentTask}</div>
            </div>
            <button
              onClick={() => setShowAIChat((v) => !v)}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 text-white text-sm font-medium transition-all"
            >
              {showAIChat ? '閉じる' : 'チャット'}
            </button>
          </div>
        </div>

        <div className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
          {aiAgent.notifications.filter((n) => n.priority === 'high').length}
        </div>
      </div>

      {/* AIチャット */}
      {showAIChat && (
        <div className="fixed top-20 right-4 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-t-2xl text-white">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🤖</span>
              <div>
                <h3 className="font-bold">AIエージェント {aiAgent.name}</h3>
                <p className="text-xs opacity-90">ライフマネジメント専門AI</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {aiMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-500 text-white ml-4' : 'bg-gray-100 text-gray-800 mr-4'}`}>
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="AIに質問してください..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                送信
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AIインサイト（上に3件表示） */}
      <div className="absolute top-4 left-4 z-30 space-y-2">
        {aiAgent.notifications.slice(0, 3).map((n) => (
          <div key={n.id} className={`bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border-l-4 max-w-sm
            ${n.priority === 'high' ? 'border-red-500' : n.priority === 'medium' ? 'border-yellow-500' : 'border-blue-500'}`}>
            <div className="flex items-start space-x-2">
              <span className="text-lg">{n.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-800">{n.title}</h4>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">{n.message}</p>
                <p className="text-xs text-gray-400 mt-2">{n.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3×3 グリッドに変更 */}
      <div className="grid grid-cols-6 gap-4 h-full">
        {/* 左上：家計 */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col relative col-span-2">
          <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">AI分析済み</div>
          <div className="flex items-center space-x-3 mb-4">
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

          <div className="flex-1 overflow-y-auto">
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

          <div className="mt-4 pt-3 border-t">
            <h4 className="font-medium text-gray-700 text-sm mb-2">最近の支出</h4>
            <div className="space-y-2">
              {socialData.recentActivities.slice(0, 3).map((activity, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2">
                    {activity.category === 'food' && <Coffee className="w-4 h-4 text-orange-500" />}
                    {activity.category === 'transport' && <Car className="w-4 h-4 text-blue-500" />}
                    {activity.category === 'shopping' && <ShoppingCart className="w-4 h-4 text-purple-500" />}
                    <span className="text-gray-700">{activity.action}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(activity.amount)}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中央上：投資 */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col relative col-span-2">
          <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">AI推奨あり</div>
          <div className="flex items-center space-x-3 mb-4">
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

          <div className="mb-3 flex-1">
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

          <div>
            <h3 className="font-semibold text-gray-700 text-sm mb-3">📈 投資関連ニュース</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {investmentData.stockNews.map((news, i) => (
                <div key={i} className="p-2 border-l-4 border-blue-400 bg-blue-50">
                  <div className="text-sm text-gray-800 mb-1">{news.title}</div>
                  <div className="text-xs text-gray-500">{news.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右上：タスク・目標管理 */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"><Target className="w-6 h-6 text-indigo-600" /></div>
            <h2 className="text-xl font-bold text-gray-800">タスク・目標管理</h2>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">今日のタスク</h3>
            <div className="space-y-2">
              {taskData.todayTasks.map((task) => (
                <div key={task.id} className={`flex items-center justify-between p-2 rounded-lg border ${task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.text}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high' ? 'bg-red-100 text-red-700' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{task.deadline}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">週間目標</h3>
            <div className="space-y-3">
              {taskData.weeklyGoals.map((goal, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-800">{goal.goal}</span>
                    <span className="text-sm text-gray-600">{goal.progress}/{goal.target} {goal.unit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${goal.progress >= goal.target ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ width: `${Math.min((goal.progress / goal.target) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {((goal.progress / goal.target) * 100).toFixed(0)}% 達成
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t">
            <h4 className="font-medium text-gray-700 text-sm mb-2">🏆 最近の実績</h4>
            <div className="space-y-2">
              {skillData.achievements.slice(0, 2).map((achievement, i) => (
                <div key={i} className="flex items-center space-x-2 p-2 bg-yellow-50 rounded-lg">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">{achievement.title}</div>
                    <div className="text-xs text-gray-500">{achievement.date}</div>
                  </div>
                  <div className="text-sm font-bold text-yellow-600">+{achievement.points}pt</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 左中：ニュース */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center"><Newspaper className="w-6 h-6 text-red-600" /></div>
            <h2 className="text-xl font-bold text-gray-800">ニュース管理</h2>
          </div>

          <div className="flex-1 overflow-hidden">
            <h3 className="font-semibold text-gray-700 text-sm mb-4">🔥 Breaking News Top8</h3>
            <div className="space-y-2 h-full overflow-y-auto">
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
        </div>

        {/* 中央中：健康管理 */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-2">
          <div className="flex items-center space-x-3 mb-4">
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

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-purple-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2"><Zap className="w-5 h-5 text-purple-600" /><span className="text-sm font-medium text-gray-700">歩数</span></div>
              <div className="text-xl font-bold text-gray-800">{formatNumber(healthData.steps)}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: `${Math.min((healthData.steps / healthData.stepGoal) * 100, 100)}%` }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">{((healthData.steps / healthData.stepGoal) * 100).toFixed(0)}% 達成</div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2"><span className="w-5 h-5 text-cyan-600">💧</span><span className="text-sm font-medium text-gray-700">水分摂取</span></div>
              <div className="text-xl font-bold text-gray-800">{healthData.waterIntake}L</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="h-2 bg-cyan-500 rounded-full" style={{ width: `${Math.min((healthData.waterIntake / healthData.waterGoal) * 100, 100)}%` }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">{((healthData.waterIntake / healthData.waterGoal) * 100).toFixed(0)}% 達成</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white mt-auto">
            <div className="text-sm opacity-90">カロリー収支</div>
            <div className="text-2xl font-bold">-{formatNumber(healthData.caloriesBurned - healthData.caloriesConsumed)} cal</div>
            <div className="text-sm opacity-80">
              {healthData.caloriesBurned > healthData.caloriesConsumed ? '消費カロリーが上回っています' : '摂取カロリーが上回っています'}
            </div>
          </div>
        </div>

        {/* 右中：天気・スケジュール */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center"><Calendar className="w-6 h-6 text-yellow-600" /></div>
            <h2 className="text-xl font-bold text-gray-800">天気・スケジュール</h2>
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

          <div className="flex-1">
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
        </div>

        {/* 左下：学習・スキル */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-3">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center"><Book className="w-6 h-6 text-emerald-600" /></div>
            <h2 className="text-xl font-bold text-gray-800">学習・スキル管理</h2>
          </div>

          <div className="mb-4">
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

          <div className="flex-1">
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
        </div>

        {/* 右下：ライフスタイル・ソーシャル */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 h-full flex flex-col col-span-3">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-rose-600" /></div>
            <h2 className="text-xl font-bold text-gray-800">ライフスタイル・ソーシャル</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div>
              <h3 className="font-semibold text-gray-700 text-sm mb-3">今後のイベント</h3>
              <div className="space-y-2">
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

            <div>
              <h3 className="font-semibold text-gray-700 text-sm mb-3">最近のアクティビティ</h3>
              <div className="space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default LifeManagementDashboard;