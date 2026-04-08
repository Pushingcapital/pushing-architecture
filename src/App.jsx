import React from 'react';
import { Menu } from 'lucide-react';

const LiquidMenu = ({ title, items, statusLabel, statusValue, isRestricted, inputs, bgImage }) => {
  const N = items ? items.length : 1;
  
  return (
    <div className="liquid-menu">
      <div className="liquid-anchor">
        <h2 className={`liquid-title ${isRestricted ? 'restricted' : ''}`}>{title}</h2>
      </div>
      <div className="liquid-gap">
        {bgImage && <img src={bgImage} className="spawn-picture-bg" alt="spawn background" />}
        <svg className="liquid-svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
          {(items || [1]).map((_, i) => {
            const Y = ((i + 0.5) / N) * 100;
            return (
              <path 
                key={i} 
                d={`M 0,50 C 50,50 50,${Y} 100,${Y}`} 
                stroke="url(#mercuryGrad)" 
                strokeWidth="0.8" 
                strokeLinecap="round"
                fill="none" 
                vectorEffect="non-scaling-stroke"
                pathLength="100"
                className="liquid-path"
                style={{ 
                  transitionDelay: `${i * 0.1}s`,
                  transitionDuration: `${0.8 + (i * 0.25)}s`
                }}
              />
            );
          })}
        </svg>
      </div>
      <div className="liquid-items">
        {items ? items.map((item, i) => (
          <div className="liquid-item" key={i} style={{ transitionDelay: `${i * 0.05 + 0.1}s` }}>
             {typeof item === 'string' ? (
                <div className="liquid-card">{item}</div>
             ) : (
                <div className="liquid-card-complex">
                   <span className="lc-key">{item.k}</span>
                   <span className="lc-val">{item.v}</span>
                </div>
             )}
          </div>
        )) : (
           <div className="liquid-item" style={{ transitionDelay: '0.1s' }}>
              <div className="liquid-card-complex" style={{flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start'}}>
                 <div>
                     <span className="lc-key">{statusLabel}</span>
                     <span className="lc-val red" style={{marginLeft: '1rem'}}>{statusValue}</span>
                 </div>
                 {inputs && <input type="text" className="terminal-input" placeholder={inputs} style={{marginTop: '0.5rem', width: '300px'}} />}
              </div>
           </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="wireframe-root">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="mercuryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#dddddd" />
            <stop offset="70%" stopColor="#777777" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Navigation from v0 */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between px-8 lg:px-12 h-20">
          <a href="/" className="flex items-center">
            <span className="text-2xl tracking-tight font-black text-foreground">
              Pushing Capital
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {['Automotive', 'Finance', 'userOne', 'Deal Architect'].map((name) => (
              <a
                key={name}
                href={'#' + name.toLowerCase()}
                className="text-sm font-bold uppercase tracking-widest text-[#cccccc] hover:text-white transition-colors duration-300 relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>
      
      <div className="hero-section">
        <h1 className="hero-display">ABSOLUTE MARKET DOMINANCE.</h1>
        <p className="hero-sub">Pushing Capital is an algorithmic staging ground built to out-calculate, out-work, and out-negotiate humans in the physical logistics and automotive space.</p>
      </div>

      <div className="content-core">
        <LiquidMenu 
           title="CORE"
           items={['Home', 'Platform', 'Services', 'Contact']}
        />

        <LiquidMenu 
           title="AUTOMOTIVE"
           items={['Inspections', 'Parts', 'Transport', 'Vehicle Sales', 'Mobile Services', 'DMV']}
        />

        <LiquidMenu 
           title="FINANCE"
           items={['Readiness', 'Validation', 'Underwriting', 'Lender Match', 'Business Formation', 'Taxes']}
        />

        <LiquidMenu 
           title="PRODUCTS"
           items={['userOne', 'Deal Architect', 'Push P', 'PushingSecurity']}
        />

        <LiquidMenu 
           title="INTERNAL"
           items={['Internal Command']}
        />

        <LiquidMenu 
           title="APPLICATION TREE"
           items={['Pushing Capital Site', 'PushingSecurity', 'Push P', 'Automotive App', 'Finance App', 'userOne', 'Mobile Worker App', 'Internal Command']}
        />

        <LiquidMenu 
           title="HOMEPAGE SECTION ORDER"
           items={['Hero', 'Platform summary', 'Application suite', 'Automotive lane', 'Finance lane', 'userOne / Deal Architect', 'Support layers', 'Contact / start']}
        />

        <LiquidMenu 
           title="USERONE SECTION ORDER"
           items={['What userOne is', 'Professional path', 'Deal Architect entry', 'What we carry around the professional', 'Platform access', 'Next step']}
        />

        <LiquidMenu 
           title="DEAL ARCHITECT SECTION ORDER"
           items={['What the program is', 'How the deal moves', 'What gets unlocked', 'Operational support around it', 'Entry / apply']}
        />
      </div>
    </div>
  );
}

export default App;
