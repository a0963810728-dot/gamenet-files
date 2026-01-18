import React, { useState } from 'react';

// 定義職業卡片元件
const ClassCard: React.FC<{ job: any }> = ({ job }) => (
  <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 hover:border-[#fccd4d]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden group relative">
    
    {/* 背景裝飾光暈 */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none"></div>

    {/* 職業圖片 */}
    {/* 🔥🔥🔥 修改重點：再次加大圖標尺寸 🔥🔥🔥 */}
    <div className="flex justify-center mb-6 relative z-10">
      <img 
        src={job.image} 
        alt={job.name} 
        // 將 w-32 h-32 改為 w-40 h-40 (160px)，尺寸更大
        className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    {/* 🔥🔥🔥 修改結束 🔥🔥🔥 */}

    {/* 標題與描述 */}
    <div className="text-center relative z-10">
      <h3 className="text-xl font-black text-[#fccd4d] mb-1 group-hover:text-white transition-colors">{job.name}</h3>
      <span className="text-xs text-slate-500 tracking-wider uppercase block mb-4">{job.title}</span>
      <p className="text-slate-400 text-sm leading-relaxed text-justify mb-6 h-24 overflow-hidden">{job.desc}</p>
    </div>

    {/* 能力值面板 */}
    <div className="bg-black/50 rounded-xl p-4 border border-white/5 relative z-10 space-y-2 text-xs font-mono text-slate-500">
      <div className="flex justify-between items-center">
        <span>攻擊力量</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.str}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>魔法智力</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.int}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>生存體質</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.con}</span>
      </div>
    </div>
  </div>
);

const GameGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('新手入門'); 

  // 外部查詢網址
  const DROP_SEARCH_URL = "https://cartest-ih32.onrender.com"; 

  const categories = [
    { name: '新手入門', icon: '🔰' },
    { name: '職業介紹', icon: '⚔️' },
    { name: '地圖資訊', icon: '🗺️' },
    { name: '掉落查詢', icon: '🔍' }, 
  ];

  // === 🔰 新手教學資料 (保持不變) ===
  const guideSteps = [
    {
      step: '01',
      title: '新手獎勵領取',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            請先聯繫客服 <span className="text-[#fccd4d] font-bold border-b border-[#fccd4d] whitespace-nowrap">@746pwlgu</span> 告知遊戲帳號。
            <br />客服發放後，請依照以下步驟領取：
          </p>
          <div className="bg-black/30 p-4 rounded border-l-2 border-[#b38728] text-sm space-y-2">
            <p>1. 進入遊戲，按下鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code></p>
            <p>2. 選擇 <span className="text-white font-bold">「行動視窗 / 隨身系統」</span></p>
            <p>3. 點擊 <span className="text-white font-bold">「領取獎勵」</span></p>
          </div>
        </div>
      ),
      images: ['/guide-step-1.jpg'] 
    },
    {
      step: '02',
      title: '舒壓消費環節 (商城)',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            點擊畫面上的<span className="text-[#fccd4d]">「潘朵拉的商城」</span>，建議優先購買以下高CP值禮盒：
          </p>
          <ul className="grid grid-cols-1 gap-1 text-sm bg-black/30 p-3 rounded border border-white/5">
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 史奈普戒指禮盒 x10</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 倫提斯耳環禮盒 x10</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 光之皮夾克禮盒 x5</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 守護徽章禮盒 x5</li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">※ 購買完成後，請點擊「開啟商城倉庫」提領。</p>
        </div>
      ),
      images: ['/guide-step-2a.jpg', '/guide-step-2b.jpg'] 
    },
    {
      step: '03',
      title: '起手練功地點',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            使用鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「傳送系統」。建議路線：
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span className="text-[#fccd4d] font-bold whitespace-nowrap">LV 50-60:</span> 
              <span className="text-slate-400">奇岩/海音地監 1F</span>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span className="text-[#fccd4d] font-bold whitespace-nowrap">LV 60-80:</span> 
              <span className="text-slate-400">夢幻之島、龍之谷地監</span>
            </div>
          </div>
        </div>
      ),
      images: ['/guide-step-3.jpg']
    },
    {
      step: '04',
      title: '魔法娃娃使用',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「魔法娃娃收藏系統」</p>
          <p>2. 挑選娃娃並點擊「召喚」</p>
          <p>3. 按下鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">HOME</code> 鍵，設置「自動召喚娃娃」</p>
          <p className="text-xs text-[#fccd4d] mt-1">※ 背包內需有「召喚娃娃卷軸」</p>
        </div>
      ),
      images: ['/guide-step-4a.jpg', '/guide-step-4b.jpg'] 
    },
    {
      step: '05',
      title: '變身系統使用',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「變身收藏系統」</p>
          <p>2. 挑選變身並「雙擊」卡片圖示即可變身</p>
          <p className="text-xs text-[#fccd4d] mt-1">※ 背包內需有「變形卷軸」</p>
        </div>
      ),
      images: ['/guide-step-5.jpg']
    },
    {
      step: '06',
      title: '內掛 (自動練功) 設置',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 雙擊「自動練功」圖示</p>
          <p>2. 或進入「設定系統」&gt;&gt;「內掛設定」調整細節</p>
          <p className="text-slate-400 mt-2 font-bold">設定完成後，角色將自動尋怪攻擊，解放雙手！</p>
        </div>
      ),
      images: ['/guide-step-6.jpg']
    }
  ];

  // === ⚔️ 職業資料 (保持不變) ===
  const classes = [
    { name: '王族', title: '血盟君主', desc: '唯一能創建血盟的職業，擁有凝聚眾人的領袖魅力。雖然戰鬥力平平，但能透過光環技能強化全隊素質，是攻城戰的核心指揮官。', stats: { str: '★★★', int: '★★', con: '★★★★' }, image: '/Class_Change_Prince.png' },
    { name: '騎士', title: '戰場先鋒', desc: '擁有極高的防禦力與各種減傷技能，是戰場上最堅實的肉盾。擅長使用雙手劍進行「衝擊之暈」控制敵人，是 PVP 前線的絕對主力。', stats: { str: '★★★★', int: '★', con: '★★★★★' }, image: '/Class_Change_Knight.png' },
    { name: '妖精', title: '森林守護', desc: '精通弓箭與精靈魔法，能召喚屬性精靈協助戰鬥。擁有地、水、火、風四大屬性變化，可攻可守，是遊戲中續航力與靈活度最高的職業。', stats: { str: '★★★', int: '★★★★', con: '★★★' }, image: '/Class_Change_Elf.png' },
    { name: '法師', title: '魔道宗師', desc: '掌握毀滅性的魔法力量，能施展流星雨瞬間消滅大量敵人，或使用聖結界保護隊友。雖然體質脆弱，但後期的爆發力與控場能力無人能敵。', stats: { str: '★★', int: '★★★★★', con: '★★' }, image: '/Class_Change_Magician.png' },
    { name: '黑暗妖精', title: '暗影刺客', desc: '追隨死亡女神席琳的暗殺者。放棄了盾牌，轉而使用雙刀與鋼爪，擁有獨特的「燃燒鬥志」與閃避技能，具備全職業最高的瞬間物理爆發力。', stats: { str: '★★★★★', int: '★★★', con: '★★★' }, image: '/Class_Change_DarkElf.png' },
    { name: '龍騎士', title: '龍之化身', desc: '龍族與人類的混血後裔，能覺醒體內的龍之力量。使用專屬武器「鎖鏈劍」，能施展招牌技能「屠宰者」進行三連擊，並透過龍語魔法壓制敵人。', stats: { str: '★★★★★', int: '★★', con: '★★★★' }, image: '/210707_Class_Change_berserker.png' },
    { name: '戰士', title: '狂暴戰神', desc: '來自海島的野蠻戰士，雙手各持一把戰斧進行毀滅性攻擊。擁有全職業最高的血量成長，並能透過「泰坦」系技能反彈傷害，是近戰中的絞肉機。', stats: { str: '★★★★★', int: '★', con: '★★★★★★' }, image: '/250917_Class_Change_Warrior.png' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 標題區 (保持不變) */}
        <div className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-widest">
            <span className="text-[#fccd4d]">GAME GUIDE</span> 遊戲攻略
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">最強勇者必讀的生存指南</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* 左側選單 (保持不變) */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 sticky top-28">
              <h3 className="text-slate-400 text-xs font-bold mb-4 px-2 uppercase tracking-wider">Categories</h3>
              <div className="space-y-1">
                {categories.map((cat) => {
                  if (cat.name === '掉落查詢') {
                    return (
                      <a key={cat.name} href={DROP_SEARCH_URL} target="_blank" rel="noreferrer" className="w-full text-left px-4 py-3 rounded transition-all flex items-center gap-3 text-[#fccd4d] hover:bg-[#b38728] hover:text-black border border-[#b38728]/30 hover:border-[#b38728]">
                        <span>{cat.icon}</span> {cat.name} <span className="text-[10px] ml-auto opacity-70">↗</span>
                      </a>
                    );
                  }
                  return (
                    <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`w-full text-left px-4 py-3 rounded transition-all flex items-center gap-3 ${activeCategory === cat.name ? 'bg-[#b38728] text-black font-bold shadow-lg shadow-[#b38728]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                      <span>{cat.icon}</span> {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* 右側內容區 */}
          <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-6 md:p-8 min-h-[500px]">
            
            {/* 1. 新手入門區塊 (保持不變) */}
            {activeCategory === '新手入門' && (
              <div className="animate-fadeIn">
                {/* ... (省略內容) ... */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex flex-wrap items-center gap-3">
                  🔰 新手入門六部曲
                  <span className="text-xs bg-[#b38728] text-black px-2 py-1 rounded font-bold whitespace-nowrap">圖文教學</span>
                </h2>
                
                <div className="grid gap-8">
                  {guideSteps.map((step, idx) => (
                    <div key={idx} className="bg-black/40 border border-white/10 p-5 md:p-6 rounded-xl hover:border-[#b38728]/50 transition group relative overflow-hidden">
                      <div className="absolute -right-2 -bottom-6 text-9xl font-black text-white opacity-[0.03] pointer-events-none group-hover:text-[#b38728] group-hover:opacity-[0.08] transition-colors">
                        {step.step}
                      </div>
                      
                      <div className="flex items-start gap-3 mb-4">
                        <span className="bg-[#b38728]/20 text-[#fccd4d] border border-[#b38728]/40 px-3 py-1 rounded font-mono font-bold text-sm whitespace-nowrap flex-shrink-0 mt-0.5">
                          STEP {step.step}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#fccd4d] transition-colors leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      
                      <div className="relative z-10 leading-relaxed">
                        {step.content}
                        {step.images && step.images.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-4">
                            {step.images.map((imgSrc, imgIdx) => (
                              <div key={imgIdx} className="relative group rounded-lg border border-white/10 overflow-hidden shadow-lg hover:border-[#b38728]/50 transition bg-black/50">
                                <img 
                                  src={imgSrc} 
                                  alt={`Step ${step.step} image ${imgIdx + 1}`} 
                                  className="h-32 w-auto object-contain cursor-zoom-in group-hover:scale-105 transition-transform duration-300"
                                  onClick={() => window.open(imgSrc, '_blank')} 
                                />
                                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                  點擊放大
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. 職業介紹區塊 (已加大圖標) */}
            {activeCategory === '職業介紹' && (
              <div className="animate-fadeIn">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-8 border-l-4 border-[#b38728] pl-4">
                  七大職業深度解析
                </h2>
                {/* 恢復為整齊的 2 欄網格 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {classes.map((job) => (
                    <ClassCard 
                      key={job.name} 
                      job={job} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3. 地圖資訊 (保持不變) */}
            {activeCategory === '地圖資訊' && (
              <div className="animate-fadeIn flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-[#b38728] pl-4 w-full">
                  世界地圖 & 稀有裝備分佈
                </h2>
                <div className="w-full bg-black/40 border border-white/10 p-2 rounded-lg overflow-hidden group">
                  <img 
                    src="/world_map.png" 
                    alt="World Map" 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                    onClick={() => window.open('/world_map.png', '_blank')} 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="p-10 text-center text-red-500">找不到圖片！請確認 world_map.png 有放在 public 資料夾內。</div>';
                    }}
                  />
                </div>
                <p className="text-slate-500 text-sm mt-4 flex items-center gap-2">
                  <span className="bg-[#b38728] text-black text-[10px] px-2 py-0.5 rounded font-bold">TIP</span>
                  點擊地圖可開啟原始大圖檢視，右鍵可另存圖片。
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default GameGuide;