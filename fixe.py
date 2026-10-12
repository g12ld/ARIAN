import os, re

path = r'C:\Users\ramzi\Documents\Default Project\ARIAN'
files = []
for root, dirs, filenames in os.walk(path):
    for f in filenames:
        if f.endswith('.html'):
            files.append(os.path.join(root, f))

js = '''  <script>
    (function(){
      var deadline = new Date('""" + (from datetime import datetime, timedelta; d=datetime.utcnow()+timedelta(hours=24); d.strftime('%Y-%m-%dT%H:%M:%SZ')) + """').getTime();
      function pad(n){ return n < 10 ? '0'+n : n; }
      function tick(){
        var now = new Date().getTime();
        var diff = deadline - now;
        if (diff <= 0){ diff = 0; }
        var h = Math.floor(diff / (1000*60*60));
        var m = Math.floor((diff % (1000*60*60)) / (1000*60));
        var s = Math.floor((diff % (1000*60)) / 1000);
        var t = pad(h)+':'+pad(m)+':'+pad(s);
        var els = document.querySelectorAll('.countdown, #cd, #countdown');
        for (var i=0;i<els.length;i++){ els[i].textContent = t; }
        if (diff > 0) setTimeout(tick, 1000);
      }
      tick();
    })();
  </script>
'''
# skip, easier write inline properly
