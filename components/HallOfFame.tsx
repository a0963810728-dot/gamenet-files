import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trophy, Crown, Sword, Shield, Star, Skull } from 'lucide-react';

// ====================================================================
// 🏆 名人堂資料 — 老爹，要新增或修改排行角色，只要改這裡就好！
// ====================================================================

// 全服52等前三名 — 死亡騎士系列
const level52Ranking = [
  { rank: 1, name: '幫我擦皮鞋', title: '死亡騎士', color: '#e74c3c' },
  { rank: 2, name: '一刀斬雲空', title: '死亡騎士', color: '#c0c0c0' },
  { rank: 3, name: '我是一隻雞', title: '死亡騎士', color: '#cd7f32' },
];

// 全服55等前三名 — 黑暗系列
const level55Ranking = [
  { rank: 1, name: '一刀斬雲空', title: '黑暗騎士', color: '#a855f7' },
  { rank: 2, name: '龍塵', title: '黑暗刺客', color: '#c0c0c0' },
  { rank: 3, name: '不好說', title: '黑暗騎士', color: '#cd7f32' },
];

// 全服60等前三名 — 銀光系列（目前無人認領）
const level60Ranking = [
  { rank: 1, name: '尚未認領', title: '—', color: '#fccd4d' },
  { rank: 2, name: '尚未認領', title: '—', color: '#c0c0c0' },
  { rank: 3, name: '尚未認領', title: '—', color: '#cd7f32' },
];

// +10 武器持有人（目前無人認領）
const weaponHolders = [
  { name: '尚未認領', title: '名人堂', color: '#fccd4d', ability: '尚未選擇' },
];

// +9 防具持有人（目前無人認領）
const armorHolders = [
  { name: '尚未認領', title: '名人堂', color: '#fccd4d', ability: '尚未選擇' },
];

// ====================================================================

const RankBadge: React.FC<{ rank: number; gradient?: string }> = ({ rank, gradient }) => {
  const defaultColors: Record<number, string> = {
    1: 'from-yellow-400 to-amber-600',
    2: 'from-gray-300 to-gray-500',
    3: 'from-amber-600 to-amber-800',
  };
  return (
    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient || defaultColors[rank] || 'from-slate-500 to-slate-700'} flex items-center justify-center text-black font-black text-lg shadow-lg`}>
      {rank}
    </div>
  );
};

// 通用等級排行區塊
const LevelSection: React.FC<{
  level: number;
  icon: React.ReactNode;
  titleColor: string;
  borderColor: string;
  seriesName: string;
  description: string;
  ranking: typeof level52Ranking;
  badgeGradient?: string;
  delay?: string;
}> = ({ level, icon, titleColor, borderColor, seriesName, description, ranking, badgeGradient, delay }) => (
  <div className="mb-16" data-aos="fade-up" data-aos-delay={delay || '0'}>
    <div className="flex items-center gap-3 mb-8">
      {icon}
      <h2 className={`text-2xl font-bold tracking-widest`} style={{ color: titleColor }}>
        全服 Lv.{level} 前三名
        <span className="ml-3 text-base font-normal text-slate-500">— {seriesName}</span>
      </h2>
    </div>
    <p className="text-slate-500 text-sm mb-6 ml-9">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {ranking.map((player) => (
        <div
          key={player.rank}
          className={`relative group bg-white/5 border border-white/10 hover:border-opacity-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/[0.08]`}
          style={{ ['--tw-border-opacity' as string]: undefined }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = borderColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, transparent, ${borderColor}, transparent)` }}></div>
          <div className="flex justify-center mb-4">
            <RankBadge rank={player.rank} gradient={badgeGradient} />
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: player.color }}>
            {player.name}
          </h3>
          <p className="text-sm tracking-wider" style={{ color: titleColor, opacity: 0.8 }}>
            【{player.title}】
          </p>
        </div>
      ))}
    </div>
  </div>
);

const HallOfFame: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>名人堂 - 大道 M 天堂</title>
        <meta name="description" content="大道 M 天堂名人堂，記錄全伺服器頂尖冒險者的傳奇成就。" />
      </Helmet>

      <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden py-20">
        {/* 背景光暈 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#fccd4d] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b38728] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* 標題 */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-[#fccd4d]" />
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fff0c0] to-[#b38728] tracking-widest">
                名人堂
              </h1>
              <Trophy className="w-8 h-8 text-[#fccd4d]" />
            </div>
            <p className="text-slate-500 text-sm tracking-widest">HALL OF FAME — 記錄亞丁大陸最強冒險者的傳奇</p>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#b38728] to-transparent mx-auto mt-4"></div>
          </div>

          {/* ===== 區塊：全服52等前三名 — 死亡騎士 ===== */}
          <LevelSection
            level={52}
            icon={<Skull className="w-6 h-6 text-red-500" />}
            titleColor="#e74c3c"
            borderColor="#e74c3c"
            seriesName="死亡系列"
            description="依回報客服時間點計算 · 獲得專屬稱號【死亡騎士】"
            ranking={level52Ranking}
            badgeGradient="from-red-500 to-red-800"
          />

          {/* ===== 區塊：全服55等前三名 — 黑暗系列 ===== */}
          <LevelSection
            level={55}
            icon={<Crown className="w-6 h-6 text-purple-400" />}
            titleColor="#a855f7"
            borderColor="#a855f7"
            seriesName="黑暗系列"
            description="依回報客服時間點計算 · 獲得專屬稱號【黑暗騎士】【黑暗刺客】任選"
            ranking={level55Ranking}
            badgeGradient="from-purple-500 to-purple-800"
            delay="100"
          />

          {/* ===== 區塊：全服60等前三名 — 銀光系列 ===== */}
          <LevelSection
            level={60}
            icon={<Crown className="w-6 h-6 text-[#fccd4d]" />}
            titleColor="#fccd4d"
            borderColor="#b38728"
            seriesName="銀光系列"
            description="依回報客服時間點計算 · 可領取專屬稱號【銀光騎士】【銀光巡守】【銀光法師】【銀光刺客】任選 · 可自訂顏色"
            ranking={level60Ranking}
            delay="200"
          />

          {/* ===== 區塊：+10 武器持有人 ===== */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-8">
              <Sword className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400 tracking-widest">全服首位 +10 武器持有人</h2>
            </div>
            <p className="text-slate-500 text-sm mb-6 ml-9">
              可領取專屬稱號【名人堂】 · 可自訂顏色 · 可自訂能力（近距離傷害+1 / 遠距離傷害+1 / 近距離命中+1 / 遠距離命中+1 / SP+1 擇一）
            </p>

            {weaponHolders.map((player, idx) => (
              <div
                key={idx}
                className="relative group bg-white/5 border border-white/10 hover:border-red-500/40 rounded-xl p-6 flex items-center gap-6 transition-all duration-300 hover:bg-white/[0.08]"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-700 flex items-center justify-center shadow-lg">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: player.color }}>
                    {player.name}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    稱號：<span className="text-slate-300">{player.title}</span> · 能力：<span className="text-slate-300">{player.ability}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== 區塊：+9 防具持有人 ===== */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-400 tracking-widest">全服首位 +9 防具持有人</h2>
            </div>
            <p className="text-slate-500 text-sm mb-6 ml-9">
              可領取專屬稱號【名人堂】 · 可自訂顏色 · 可自訂能力（減少傷害+1 / HP+50 / MP+50 / 回血+5 / 回魔+5 擇一）
            </p>

            {armorHolders.map((player, idx) => (
              <div
                key={idx}
                className="relative group bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-xl p-6 flex items-center gap-6 transition-all duration-300 hover:bg-white/[0.08]"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: player.color }}>
                    {player.name}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    稱號：<span className="text-slate-300">{player.title}</span> · 能力：<span className="text-slate-300">{player.ability}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 說明 */}
          <div className="text-center text-slate-600 text-xs tracking-wider border-t border-white/5 pt-8" data-aos="fade-up">
            <p>※ 以上排行依回報客服時間點計算，如有疑問請聯繫客服確認。</p>
            <p className="mt-1">※ 稱號顏色與能力皆可於領取時自訂。</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default HallOfFame;
