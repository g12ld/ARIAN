import os
path = 'index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()
css = '''  <style>
    .maintenance-banner {
      position: fixed;
      top: 0;
      left: -100%;
      width: 200%;
      background: #ff0000;
      color: #ffffff;
      font-weight: 900;
      font-size: clamp(1rem, 2.5vw, 2rem);
      padding: 0.75rem 0;
      text-align: center;
      white-space: nowrap;
      z-index: 99999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      animation: marquee 15s linear infinite, bannerFlash 1s ease-in-out infinite alternate;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    @keyframes marquee { 0% { left: -100%; } 100% { left: 0; } }
    @keyframes bannerFlash { 0% { background: #ff0000; } 100% { background: #990000; } }
    .maintenance-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.98);
      z-index: 99998;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .maintenance-content {
      color: #ffffff;
      text-align: center;
      max-width: 800px;
    }
    .maintenance-title {
      font-size: clamp(2rem, 6vw, 4rem);
      font-weight: 900;
      color: #ff0000;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    .maintenance-text {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .maintenance-highlight {
      color: #ff0000;
      font-weight: 900;
    }
    body { overflow: hidden; }
  </style>
'''
banner = '''  <div class="maintenance-banner">OUTSTANDING BALANCE DUE 1,100 SAR | PAY THE OUTSTANDING TO RESUME SERVICES | FAILURE TO PAY WILL RESULT IN LEGAL CONSEQUENCES</div>
  <div class="maintenance-overlay">
    <div class="maintenance-content">
      <h1 class="maintenance-title">SITE SUSPENDED</h1>
      <p class="maintenance-text">OUTSTANDING BALANCE DUE <span class="maintenance-highlight">1,100 SAR</span></p>
      <p class="maintenance-text">PAY THE OUTSTANDING TO RESUME THE SERVICES</p>
      <p class="maintenance-text">FAILURE TO PAY WILL RESULT IN <span class="maintenance-highlight">LEGAL CONSEQUENCES</span></p>
    </div>
  </div>
'''
html = html.replace('</head>', css + '</head>')
html = html.replace('<body>', '<body>' + banner)
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
print('done')
