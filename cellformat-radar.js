(function(){var S=document.currentScript;if(!document.getElementById('gfa-shared-css')){var L=document.createElement('link');L.rel='stylesheet';L.href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Chivo+Mono:wght@400;500&display=swap";document.head.appendChild(L);var ST=document.createElement('style');ST.id='gfa-shared-css';ST.textContent=".gfa-root, .gfa-root * { box-sizing: border-box; }\n.gfa-root {\nfont-family: 'Inter', system-ui, sans-serif;\ncolor: #101920;\nbackground: transparent;\nmax-width: 1200px;\nmargin: 0 auto;\npadding: 24px 16px 32px 16px;\n-webkit-font-smoothing: antialiased;\ncontainer-type: inline-size;\n}\n.gfa-card {\nbackground: #FFFFFF;\nborder: 1px solid #E1E1E1;\nborder-radius: 8px;\noverflow: hidden;\n}\n.gfa-header {\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\ngap: 12px 16px;\npadding: 14px 20px;\nmin-height: 68px;\nborder-bottom: 1px solid #E1E1E1;\nbackground: #FFFFFF;\nflex-wrap: wrap;\n}\n.gfa-breadcrumb { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }\n.gfa-path {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 11px;\nletter-spacing: 0.08em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\n}\n.gfa-domain-tag {\ndisplay: inline-flex; align-items: center; gap: 8px;\npadding: 6px 12px;\nbackground: #F5F6F8;\nborder-radius: 999px;\nfont-family: 'Inter Tight', sans-serif;\nfont-size: 13px;\nfont-weight: 500;\ncolor: #101920;\n}\n.gfa-domain-tag .dot { width: 8px; height: 8px; border-radius: 50%; background: #4756FF; }\n.gfa-expand{margin-left:auto;appearance:none;border:0;background:#4756FF;color:#FFF;font-family:'Inter',sans-serif;font-size:12px;font-weight:600;padding:8px 16px;border-radius:999px;cursor:pointer;display:inline-flex;align-items:center;gap:7px;text-transform:none;letter-spacing:normal;transition:background .15s,transform .15s,box-shadow .15s;box-shadow:0 2px 8px rgba(71,86,255,.35);animation:gfa-expand-pulse 2.4s ease-out infinite}\n.gfa-expand:hover{background:#3645E6;transform:translateY(-1px)}\n.gfa-root.gfa-fullscreen .gfa-expand{animation:none;background:#101920;box-shadow:none}\n@keyframes gfa-expand-pulse{0%{box-shadow:0 2px 8px rgba(71,86,255,.35),0 0 0 0 rgba(71,86,255,.45)}70%{box-shadow:0 2px 8px rgba(71,86,255,.35),0 0 0 12px rgba(71,86,255,0)}100%{box-shadow:0 2px 8px rgba(71,86,255,.35),0 0 0 0 rgba(71,86,255,0)}}\n.gfa-root.gfa-fullscreen{position:fixed;inset:0;z-index:2147483000;max-width:none;margin:0;padding:24px;background:#FFF;overflow:auto;-webkit-overflow-scrolling:touch}\n.gfa-root.gfa-fullscreen .gfa-card{max-width:none}\n.gfa-root.gfa-fullscreen .gfa-chart-wrap{padding:0}\n.gfa-root.gfa-fullscreen .gfa-chart-wrap svg{width:100%;height:auto;max-width:100%;margin:0}\n.gfa-logo {\ndisplay: inline-flex;\nalign-items: center;\ntext-decoration: none;\nflex-shrink: 0;\nline-height: 0;\ntransition: opacity 0.15s;\n}\n.gfa-logo:hover { opacity: 0.7; }\n.gfa-logo svg, .gfa-logo img { height: 22px; width: auto; display: block; }\n.gfa-logo-divider {\nwidth: 1px;\nheight: 22px;\nbackground: #E1E1E1;\nflex-shrink: 0;\n}\n.gfa-pills { display: flex; gap: 6px; flex-wrap: wrap; }\n.gfa-pill {\nappearance: none;\nborder: 1px solid #E1E1E1;\nbackground: #FFFFFF;\ncolor: #101920;\nfont-family: 'Inter', sans-serif;\nfont-size: 12px;\nfont-weight: 500;\npadding: 7px 11px;\nborder-radius: 999px;\ncursor: pointer;\ntransition: background 0.15s, border-color 0.15s, color 0.15s;\ndisplay: inline-flex; align-items: center; gap: 7px;\nwhite-space: nowrap;\n}\n.gfa-pill .dot { width: 7px; height: 7px; border-radius: 50%; }\n.gfa-pill:hover { background: #F5F6F8; }\n.gfa-pill.is-active { background: #101920; color: #FFFFFF; border-color: #101920; }\n.gfa-pill.is-active .dot { box-shadow: 0 0 0 1.5px #FFFFFF; }\n.gfa-toolbar {\ndisplay: flex; align-items: center; gap: 10px;\npadding: 12px 20px;\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10.5px;\nletter-spacing: 0.08em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\nborder-bottom: 1px solid #F0F1F3;\n}\n.gfa-toolbar .sep { color: #C8CCD2; }\n.gfa-chart-wrap {\nposition: relative;\nbackground: #FFFFFF;\npadding: 8px 8px 0 8px;\n}\n.gfa-chart-wrap svg { display: block; width: 100%; height: auto; aspect-ratio: 1176 / 640; }\n.gfa-tooltip {\nposition: absolute;\npointer-events: none;\nbackground: #101920;\ncolor: #FFFFFF;\npadding: 10px 12px;\nborder-radius: 6px;\nfont-family: 'Inter', sans-serif;\nfont-size: 12px;\nline-height: 1.45;\nbox-shadow: 0 6px 22px rgba(16, 25, 32, 0.18);\nopacity: 0;\ntransition: opacity 0.12s;\nz-index: 10;\nmax-width: 260px;\n}\n.gfa-tooltip.is-visible { opacity: 1; }\n.gfa-tooltip .name { font-weight: 600; font-size: 13px; margin-bottom: 4px; }\n.gfa-tooltip .stats { font-family: 'Chivo Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em; color: #5DECFF; }\n.gfa-tooltip .hint { margin-top: 6px; font-size: 10.5px; color: #ADAEB0; font-family: 'Chivo Mono', monospace; letter-spacing: 0.06em; text-transform: uppercase; }\n.gfa-bubble { cursor: pointer; transition: opacity 0.2s; }\n.gfa-bubble circle.b-fill { transition: r 0.18s ease, filter 0.18s, stroke-width 0.12s, fill-opacity 0.12s; }\n.gfa-bubble:hover circle.b-fill { filter: drop-shadow(0 3px 10px rgba(16,25,32,0.22)); }\n.gfa-bubble.is-dim { opacity: 0.16; }\n.gfa-bubble.is-selected circle.b-fill { stroke-width: 3; }\n.gfa-bubble.is-active circle.b-fill { stroke-width: 2.75; filter: drop-shadow(0 3px 10px rgba(16,25,32,0.22)); }\n.gfa-bubble .b-pulse {\ntransform-box: fill-box;\ntransform-origin: center;\npointer-events: none;\n}\n.gfa-bubble.has-pulse .b-pulse {\nanimation: gfa-pulse-ring 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.gfa-bubble.has-pulse .b-pulse-2 { animation-delay: 0.9s; }\n.gfa-bubble.has-pulse circle.b-fill { stroke-width: 2.5; }\n@keyframes gfa-pulse-ring {\n0%   { transform: scale(1);   opacity: 0.55; }\n80%  { transform: scale(2.8); opacity: 0;    }\n100% { transform: scale(2.8); opacity: 0;    }\n}\n.gfa-bubble .b-label {\nfont-family: 'Inter', sans-serif;\nfont-size: 10.5px;\nfont-weight: 500;\nfill: #2A3544;\npointer-events: none;\nopacity: 0;\ntransition: opacity 0.18s;\npaint-order: stroke fill;\nstroke: #FFFFFF;\nstroke-width: 3;\nstroke-linejoin: round;\n}\n.gfa-root.has-filter .gfa-bubble:not(.is-dim) .b-label,\n.gfa-bubble.is-active .b-label,\n.gfa-bubble.is-selected .b-label {\nopacity: 1;\npointer-events: auto;\ncursor: pointer;\n}\n.gfa-bubble .b-lead { stroke: #C8CCD2; stroke-width: 1; pointer-events: none; }\n.gfa-bubble.is-active .b-label,\n.gfa-bubble.is-selected .b-label {\nfont-weight: 600;\n}\n.gfa-disambig {\nposition: absolute;\nbackground: #FFFFFF;\nborder: 1px solid #E1E1E1;\nborder-radius: 8px;\nbox-shadow: 0 12px 32px rgba(16, 25, 32, 0.14), 0 2px 6px rgba(16, 25, 32, 0.06);\npadding: 6px;\nmin-width: 260px;\nmax-width: 360px;\nz-index: 100;\nfont-family: 'Inter', sans-serif;\nopacity: 0;\ntransform: translateY(-2px);\npointer-events: none;\ntransition: opacity 0.12s ease, transform 0.12s ease;\n}\n.gfa-disambig.is-visible { opacity: 1; transform: translateY(0); pointer-events: auto; }\n.gfa-disambig-header {\npadding: 6px 10px 8px;\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10px;\nletter-spacing: 0.1em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\nborder-bottom: 1px solid #F0F0F2;\nmargin-bottom: 4px;\n}\n.gfa-disambig-item {\ndisplay: flex;\nalign-items: center;\ngap: 10px;\npadding: 8px 10px;\nborder-radius: 4px;\ncursor: pointer;\ntransition: background 0.1s;\n}\n.gfa-disambig-item:hover { background: #F5F6F8; }\n.gfa-disambig-item .dot {\nwidth: 8px; height: 8px;\nborder-radius: 50%;\nflex-shrink: 0;\nbox-shadow: 0 0 0 2px #FFFFFF;\n}\n.gfa-disambig-item .name {\nflex: 1;\nfont-size: 13px;\nfont-weight: 500;\ncolor: #101920;\nline-height: 1.3;\n}\n.gfa-disambig-item .stats {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10px;\ncolor: #6E7B8B;\nwhite-space: nowrap;\nflex-shrink: 0;\n}\n.gfa-legend {\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\ngap: 16px;\npadding: 16px 20px;\nborder-top: 1px solid #E1E1E1;\nbackground: #FAFBFC;\nflex-wrap: wrap;\n}\n.gfa-legend-items { display: flex; gap: 18px; flex-wrap: wrap; }\n.gfa-legend-item {\ndisplay: inline-flex; align-items: center; gap: 8px;\nfont-family: 'Inter', sans-serif;\nfont-size: 12px;\ncolor: #2A3544;\n}\n.gfa-legend-item .dot { width: 9px; height: 9px; border-radius: 50%; }\n.gfa-legend-meta {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10.5px;\nletter-spacing: 0.08em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\n}\n.gfa-detail {\nmargin-top: 12px;\nbackground: #FFFFFF;\nborder: 1px solid #E1E1E1;\nborder-radius: 8px;\noverflow: hidden;\nanimation: gfa-fade-in 0.22s ease;\n}\n@keyframes gfa-fade-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }\n.gfa-detail-header {\ndisplay: flex; align-items: flex-start; justify-content: space-between; gap: 16px;\npadding: 20px 24px 16px 24px;\nborder-bottom: 1px solid #F0F1F3;\n}\n.gfa-detail-title h2 {\nmargin: 0 0 8px 0;\nfont-family: 'Inter Tight', sans-serif;\nfont-weight: 600;\nfont-size: 22px;\nletter-spacing: -0.01em;\ncolor: #101920;\nline-height: 1.2;\n}\n.gfa-detail-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }\n.gfa-category-badge {\ndisplay: inline-flex; align-items: center; gap: 7px;\npadding: 4px 10px;\nborder-radius: 999px;\nfont-family: 'Inter', sans-serif;\nfont-size: 11.5px;\nfont-weight: 500;\nbackground: #F5F6F8;\ncolor: #2A3544;\n}\n.gfa-category-badge .dot { width: 7px; height: 7px; border-radius: 50%; }\n.gfa-detail-close {\nappearance: none;\nbackground: #FFFFFF;\nborder: 1px solid #E1E1E1;\nborder-radius: 6px;\npadding: 6px 10px;\ncursor: pointer;\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10.5px;\nletter-spacing: 0.08em;\ntext-transform: uppercase;\ncolor: #2A3544;\n}\n.gfa-detail-close:hover { background: #F5F6F8; }\n.gfa-stats {\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);\ngap: 0;\nborder-bottom: 1px solid #F0F1F3;\n}\n.gfa-stat {\npadding: 16px 24px;\nborder-right: 1px solid #F0F1F3;\n}\n.gfa-stat:last-child { border-right: none; }\n.gfa-stat-label {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10px;\nletter-spacing: 0.1em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\nmargin-bottom: 6px;\n}\n.gfa-stat-value {\nfont-family: 'Inter Tight', sans-serif;\nfont-weight: 600;\nfont-size: 24px;\ncolor: #101920;\nline-height: 1.1;\nletter-spacing: -0.01em;\n}\n.gfa-stat-value .unit { font-size: 14px; color: #6E7B8B; font-weight: 500; margin-left: 2px; }\n.gfa-stat-value.is-positive { color: #14B8A6; }\n.gfa-detail-charts {\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\nborder-bottom: 1px solid #F0F1F3;\n}\n.gfa-mini-chart {\npadding: 20px 24px;\nborder-right: 1px solid #F0F1F3;\n}\n.gfa-mini-chart:last-child { border-right: none; }\n.gfa-mini-chart-title {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10.5px;\nletter-spacing: 0.1em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\nmargin-bottom: 14px;\n}\n.gfa-mini-chart svg { display: block; width: 100%; height: auto; }\n.gfa-detail-lists {\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\n}\n.gfa-list-block {\npadding: 20px 24px;\nborder-right: 1px solid #F0F1F3;\n}\n.gfa-list-block:last-child { border-right: none; }\n.gfa-list-title {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 10.5px;\nletter-spacing: 0.1em;\ncolor: #6E7B8B;\ntext-transform: uppercase;\nmargin-bottom: 12px;\ndisplay: flex; align-items: center; justify-content: space-between;\n}\n.gfa-list-title .hint { color: #ADAEB0; font-size: 9.5px; text-transform: none; letter-spacing: 0.04em; }\n.gfa-list { list-style: none; margin: 0; padding: 0; }\n.gfa-list li {\ndisplay: flex; align-items: baseline; justify-content: space-between; gap: 12px;\npadding: 8px 0;\nborder-bottom: 1px solid #F5F6F8;\nfont-family: 'Inter', sans-serif;\nfont-size: 13px;\ncolor: #2A3544;\n}\n.gfa-list li:last-child { border-bottom: none; }\n.gfa-list .org { line-height: 1.35; }\n.gfa-list .count {\nfont-family: 'Chivo Mono', monospace;\nfont-size: 11.5px;\ncolor: #101920;\nfont-weight: 500;\nwhite-space: nowrap;\n}\n.gfa-detail-empty {\npadding: 28px 24px;\ntext-align: center;\nfont-family: 'Inter', sans-serif;\nfont-size: 13px;\ncolor: #6E7B8B;\n}\n.gfa-detail-empty strong { color: #101920; font-weight: 600; }\n@container (max-width: 920px) {\n.gfa-header { padding: 12px 16px; }\n.gfa-stats { grid-template-columns: repeat(2, 1fr); }\n.gfa-stat:nth-child(2) { border-right: none; }\n.gfa-stat:nth-child(1), .gfa-stat:nth-child(2) { border-bottom: 1px solid #F0F1F3; }\n.gfa-detail-charts { grid-template-columns: 1fr; }\n.gfa-mini-chart { border-right: none; border-bottom: 1px solid #F0F1F3; }\n.gfa-mini-chart:last-child { border-bottom: none; }\n.gfa-detail-lists { grid-template-columns: 1fr; }\n.gfa-list-block { border-right: none; border-bottom: 1px solid #F0F1F3; }\n.gfa-list-block:last-child { border-bottom: none; }\n}\n@container (max-width: 640px) {\n.gfa-header { padding: 12px 14px; gap: 10px 12px; }\n.gfa-breadcrumb { gap: 10px; }\n.gfa-path { font-size: 10px; }\n.gfa-domain-tag { font-size: 12px; padding: 5px 10px; }\n.gfa-pills { width: 100%; }\n.gfa-pill { font-size: 11.5px; padding: 6px 9px; }\n.gfa-toolbar { padding: 10px 14px; font-size: 10px; }\n.gfa-legend { padding: 14px; }\n.gfa-legend-items { gap: 12px; }\n.gfa-detail-header { padding: 16px 16px 14px; }\n.gfa-detail-title h2 { font-size: 18px; }\n.gfa-stat { padding: 12px 16px; }\n.gfa-stat-value { font-size: 20px; }\n.gfa-mini-chart, .gfa-list-block { padding: 16px; }\n}\n@media (max-width: 920px) {\n.gfa-stats { grid-template-columns: repeat(2, 1fr); }\n.gfa-detail-charts { grid-template-columns: 1fr; }\n.gfa-detail-lists { grid-template-columns: 1fr; }\n}";document.head.appendChild(ST);}var D=document.createElement('div');D.innerHTML="<div class=\"gfa-root\">\n  <div class=\"gfa-card\">\n\n    <!-- HEADER STRIP -->\n    <div class=\"gfa-header\">\n      <div class=\"gfa-breadcrumb\">\n        <a class=\"gfa-logo\" href=\"https://getfocus.eu\" target=\"_blank\" rel=\"noopener\" aria-label=\"GetFocus\"><img src=\"https://cdn.jsdelivr.net/gh/abafann/Automotive-Dashboards@main/Logomark_ColorVersion_01.svg\" alt=\"GetFocus\"></a>\n        <span class=\"gfa-logo-divider\" aria-hidden=\"true\"></span>\n        <span class=\"gfa-path\">Domain Monitoring / Technology Strategy Radar</span>\n        <span class=\"gfa-domain-tag\"><span class=\"dot\"></span>Cell Format, Pack Architecture & Vehicle Integration</span>\n      </div>\n      <div class=\"gfa-pills\" id=\"gfa-pills\">\n        <!-- populated by JS -->\n      </div>\n    </div>\n\n    <!-- TOOLBAR -->\n    <div class=\"gfa-toolbar\">\n      <span id=\"gfa-count\">33 technologies plotted</span>\n      <span class=\"sep\">\u00b7</span>\n      <span>Updated 17 May 2026</span>\n      <button class=\"gfa-expand\" id=\"gfa-expand\" type=\"button\" aria-label=\"Toggle full screen\">\u2922 Full screen</button>\n    </div>\n\n    <!-- CHART -->\n    <div class=\"gfa-chart-wrap\" id=\"gfa-chart-wrap\">\n      <div id=\"gfa-status\" style=\"padding:60px 20px;text-align:center;color:#6E7B8B;font-family:Inter,sans-serif;font-size:13px;\">Loading chart data\u2026</div>\n      <svg id=\"gfa-svg\" viewBox=\"0 0 1176 640\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Chart of cell format, pack architecture and vehicle integration technologies by Technology Readiness Level and Technology Improvement Rate\"></svg>\n      <div class=\"gfa-tooltip\" id=\"gfa-tooltip\"></div>\n      <div class=\"gfa-disambig\" id=\"gfa-disambig\"></div>\n    </div>\n\n    <!-- LEGEND -->\n    <div class=\"gfa-legend\">\n      <div class=\"gfa-legend-items\" id=\"gfa-legend-items\"></div>\n      <div class=\"gfa-legend-meta\">X = TRL \u00b7 Y = TIR (%/yr)</div>\n    </div>\n\n  </div>\n\n  <!-- DETAIL PANEL -->\n  <div class=\"gfa-detail\" id=\"gfa-detail\">\n    <div class=\"gfa-detail-empty\">\n      <strong>Click any bubble</strong> to see its improvement trajectory, new patent flow, and the organizations driving the field.\n    </div>\n  </div>\n</div>";var R=D.firstElementChild;S.parentNode.insertBefore(R,S);})();
(function(){/*gfa-iife*//*gfa-scoped*/
// Resolve THIS embed's own root so multiple instances on one page don't fight
// over shared element IDs. Pick the last .gfa-root that appears before this script.
const _gfaScript = document.currentScript;
let _root = null;
if (_gfaScript) {
  document.querySelectorAll('.gfa-root').forEach(el => {
    if (el.compareDocumentPosition(_gfaScript) & Node.DOCUMENT_POSITION_FOLLOWING) _root = el;
  });
}
_root = _root || document;
const _$  = (sel) => _root.querySelector(sel);
const _$$ = (sel) => _root.querySelectorAll(sel);
// CONFIGURE: URL of the radar data JSON (CORS-enabled host: jsDelivr/GitHub Pages/CDN).
const DATA_URL = 'https://cdn.jsdelivr.net/gh/abafann/Automotive-Dashboards@main/cellformat-radar-data.min.json';

// Tech to highlight with a pulsing halo. Must match a `name` field in the data exactly.
// Set to null to disable.
const HIGHLIGHT_NAME = 'Aluminum-polymer composite cathode current collectors';

let DATA = null;

const CATEGORIES = [
  { id: 'Thermal and safety integration',                short: 'Thermal & safety',  color: '#4756FF' },
  { id: 'Cell formats',                                  short: 'Cell formats',      color: '#5DECFF' },
  { id: 'Module and pack architecture',                  short: 'Module & pack',     color: '#14B8A6' },
  { id: 'Current collectors and internal architecture',  short: 'Current collectors',color: '#8B5CF6' },
  { id: 'Electrical architecture',                       short: 'Electrical',        color: '#F79009' },
];
const CAT_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

// Chart geometry
let W = 1176; const H = 640;            // W is widened in fullscreen, restored on exit
const PAD = { top: 50, right: 60, bottom: 70, left: 80 };
let plotW = W - PAD.left - PAD.right;
let plotH = H - PAD.top - PAD.bottom;

// Axis domains
const TRL_MIN = 0.5, TRL_MAX = 9.5;
let TIR_MIN = 30, TIR_MAX = 340; // recomputed from data by fitScale()

// Strategic midpoints
const TRL_MID = 5; // vertical quadrant divider fixed at TRL 5
const TIR_MID = 40; // strategic threshold lowered for this dataset (TIR range ~17-73%)

const toX = trl => PAD.left + ((trl - TRL_MIN) / (TRL_MAX - TRL_MIN)) * plotW;
// Piecewise Y-scale: TIR_MID is the visual midpoint; halves resolve MIN→MID and MID→MAX.
const toY = tir => {
  if (tir <= TIR_MID) {
    const t = (tir - TIR_MIN) / (TIR_MID - TIR_MIN);
    return PAD.top + plotH * 0.5 + (1 - t) * plotH * 0.5;
  }
  const t = (tir - TIR_MID) / (TIR_MAX - TIR_MID);
  return PAD.top + (1 - t) * plotH * 0.5;
};

// --- Data-fitted scale + label helpers ---
function niceStep(x){ const m=Math.pow(10,Math.floor(Math.log10(x||1))); const n=x/m; return (n<1.5?1:n<3?2:n<7?5:10)*m; }
function fitScale(){
  const ts=DATA.map(d=>d.tir), lo=Math.min(...ts), hi=Math.max(...ts);
  TIR_MIN=Math.min(30,Math.floor(lo/10)*10);
  const st=niceStep((hi-TIR_MID)/4)||25;
  TIR_MAX=TIR_MID+Math.max(st,Math.ceil((hi*1.05-TIR_MID)/st)*st);
}
function tirTicks(){
  const lo=[],hi=[];
  const ls=niceStep((TIR_MID-TIR_MIN)/2)||10;
  for(let v=Math.ceil((TIR_MIN+1)/ls)*ls; v<TIR_MID-1e-6; v+=ls) lo.push(Math.round(v));
  const us=niceStep((TIR_MAX-TIR_MID)/4)||50;
  for(let v=TIR_MID+us; v<=TIR_MAX+1e-6; v+=us) hi.push(Math.round(v));
  return {lo,hi};
}
function abbr(n){ n=n.replace(/\s*\/\s*hard-carbon\b/ig,'').replace(/\bsodium-ion\b/ig,'Na-ion').replace(/\blithium-ion\b/ig,'Li-ion').replace(/\blithium-metal\b/ig,'Li-metal').replace(/\blow-temperature\b/ig,'Low-temp').replace(/\bhigh-temperature\b/ig,'High-temp').replace(/\bhigh-concentration\b/ig,'High-conc').replace(/\bprussian blue analogue\b/ig,'PBA').replace(/\s+(cathode active materials?|cathode materials?|active materials?|electrolyte systems?|solid electrolytes?|electrolytes?|separators?|interphases?|coatings?|catholytes?|traction cells?|lithium-ion cells?|lithium-metal cells?|cells?|platforms?|cathodes?|anodes?|materials?|systems?)\s*$/ig,'').replace(/\s*\/\s*/g,'/').replace(/\s{2,}/g,' ').trim(); if(n.length>24){ const fam=(n.match(/\b(Na-ion|Li-ion|Li-metal)\b/)||[])[0]; n=n.split('/')[0].trim(); if(fam && n.indexOf(fam)<0) n=n+' '+fam; if(n.length>24) n=n.slice(0,23).trimEnd()+'…'; } return n; }

// All bubbles are the same size — patent count is conveyed via the tooltip and
// detail panel, not via radius. Single tunable constant.
const BUBBLE_R = 12;

let activeCategory = 'Current collectors and internal architecture';
let selectedTechIdx = null;

// =============== RENDER ===============

function renderPills() {
  const wrap = _$('#gfa-pills');
  const pills = [{ id: 'all', label: 'All technologies', color: null }]
    .concat(CATEGORIES.map(c => ({ id: c.id, label: c.short, color: c.color })));
  wrap.innerHTML = pills.map(p => `
    <button class="gfa-pill ${p.id === activeCategory ? 'is-active' : ''}" data-cat="${p.id}">
      ${p.color ? `<span class="dot" style="background:${p.color}"></span>` : ''}
      ${p.label}
    </button>
  `).join('');
  wrap.querySelectorAll('.gfa-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderPills();
      updateBubbleVisibility();
    });
  });
}

function renderLegend() {
  const wrap = _$('#gfa-legend-items');
  wrap.innerHTML = CATEGORIES.map(c => `
    <span class="gfa-legend-item"><span class="dot" style="background:${c.color}"></span>${c.short}</span>
  `).join('');
}

function renderSVG() {
  const svg = _$('#gfa-svg');
  plotW = W - PAD.left - PAD.right; plotH = H - PAD.top - PAD.bottom;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.style.aspectRatio = W + ' / ' + H;
  let s = '';

  // Quadrant tints
  const xMid = toX(TRL_MID), yMid = toY(TIR_MID);
  s += `<rect x="${xMid}"          y="${PAD.top}"        width="${W - PAD.right - xMid}"   height="${yMid - PAD.top}"            fill="#F9FAFF"/>`; // MATURE HIGH TIR (BUY) top-right
  s += `<rect x="${PAD.left}"      y="${PAD.top}"        width="${xMid - PAD.left}"        height="${yMid - PAD.top}"            fill="#F9F5FF"/>`; // IMMATURE HIGH TIR (MONITOR) top-left
  s += `<rect x="${xMid}"          y="${yMid}"           width="${W - PAD.right - xMid}"   height="${H - PAD.bottom - yMid}"     fill="#FCFCFC"/>`; // MATURE LOW TIR (PHASE OUT) bottom-right
  s += `<rect x="${PAD.left}"      y="${yMid}"           width="${xMid - PAD.left}"        height="${H - PAD.bottom - yMid}"     fill="#FEF9F8"/>`; // IMMATURE LOW TIR (IGNORE) bottom-left

  // Grid lines (TRL integers + TIR every 20%)
  for (let trl = 1; trl <= 9; trl++) {
    const x = toX(trl);
    s += `<line x1="${x}" y1="${PAD.top}" x2="${x}" y2="${H - PAD.bottom}" stroke="#EEEFF2" stroke-width="1"/>`;
  }
  const _tk = tirTicks();
  for (const tir of [..._tk.lo, ..._tk.hi]) {
    const y = toY(tir);
    s += `<line x1="${PAD.left}" y1="${y}" x2="${W - PAD.right}" y2="${y}" stroke="#EEEFF2" stroke-width="1"/>`;
  }

  // Midpoint dashed lines
  s += `<line x1="${xMid}" y1="${PAD.top}" x2="${xMid}" y2="${H - PAD.bottom}" stroke="#C8CCD2" stroke-width="1"/>`;
  s += `<line x1="${PAD.left}" y1="${yMid}" x2="${W - PAD.right}" y2="${yMid}" stroke="#C8CCD2" stroke-width="1"/>`;

  // Axis bounding box
  s += `<rect x="${PAD.left}" y="${PAD.top}" width="${plotW}" height="${plotH}" fill="none" stroke="#E1E1E1" stroke-width="1"/>`;

  // X-axis ticks + labels (TRL)
  const _stage = { 1:'Basic Research', 3:'Proof of Concept', 5:'Relevant Env.', 7:'Prototype', 9:'Proven' };
  for (let trl = 1; trl <= 9; trl++) {
    const x = toX(trl);
    s += `<line x1="${x}" y1="${H - PAD.bottom}" x2="${x}" y2="${H - PAD.bottom + 5}" stroke="#101920" stroke-width="1"/>`;
    s += `<text x="${x}" y="${H - PAD.bottom + 20}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#6E7B8B">${trl}</text>`;
    if (_stage[trl]) s += `<text x="${x}" y="${H - PAD.bottom + 33}" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#ADAEB0">${_stage[trl]}</text>`;
  }
  s += `<text x="${PAD.left + plotW / 2}" y="${H - 22}" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#101920" font-weight="500">TRL · Technology Readiness Level (1–9) →</text>`;

  // Y-axis ticks + labels (TIR)
  for (const tir of [TIR_MIN, ..._tk.lo, TIR_MID, ..._tk.hi]) {
    const y = toY(tir);
    s += `<line x1="${PAD.left - 5}" y1="${y}" x2="${PAD.left}" y2="${y}" stroke="#101920" stroke-width="1"/>`;
    s += `<text x="${PAD.left - 10}" y="${y + 4}" text-anchor="end" font-family="Inter, sans-serif" font-size="11" fill="#6E7B8B">${tir}%</text>`;
  }
  s += `<text x="${30}" y="${PAD.top + plotH / 2}" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#101920" font-weight="500" transform="rotate(-90 30 ${PAD.top + plotH / 2})">TIR · Improvement Rate (%/yr) ↑</text>`;

  // Quadrant labels (corners)
  s += `<text x="${xMid + 14}" y="${PAD.top + 18}" text-anchor="start" font-family="Inter Tight, sans-serif" font-size="11" letter-spacing="0.06em" fill="#14B8A6" font-weight="400">MATURE · HIGH TIR · BUY / LEVERAGE</text>`;
  s += `<text x="${PAD.left + 14}" y="${PAD.top + 18}" text-anchor="start" font-family="Inter Tight, sans-serif" font-size="11" letter-spacing="0.06em" fill="#8B5CF6" font-weight="400">IMMATURE · HIGH TIR · MONITOR CLOSELY</text>`;
  s += `<text x="${xMid + 14}" y="${yMid + 18}" text-anchor="start" font-family="Inter Tight, sans-serif" font-size="11" letter-spacing="0.06em" fill="#6E7B8B" font-weight="400">MATURE · LOW TIR · PHASE OUT</text>`;
  s += `<text x="${PAD.left + 14}" y="${yMid + 18}" text-anchor="start" font-family="Inter Tight, sans-serif" font-size="11" letter-spacing="0.06em" fill="#EF4444" font-weight="400">IMMATURE · LOW TIR · IGNORE</text>`;

  // Bubbles sit exactly on their integer TRL line (no x-jitter) and are all the
  // same radius. Render order is kept stable by data index.
  const renderOrder = [...DATA.keys()];
  renderOrder.forEach(i => {
    const d = DATA[i];
    const cat = CAT_BY_ID[d.category];
    const x = toX(d.trl);
    const y = toY(d.tir);
    const r = BUBBLE_R;
    const isHighlight = HIGHLIGHT_NAME && d.name === HIGHLIGHT_NAME;
    const pulseRings = isHighlight ? `
      <circle class="b-pulse"   cx="${x}" cy="${y}" r="${r}" fill="${cat.color}" fill-opacity="0.45"/>
      <circle class="b-pulse b-pulse-2" cx="${x}" cy="${y}" r="${r}" fill="${cat.color}" fill-opacity="0.45"/>` : '';
    // Label flips to the left side for high-TRL bubbles so it never runs off the right edge.
    const labelOnLeft = d.trl >= 9;
    const labelX = labelOnLeft ? x - r - 7 : x + r + 7;
    const labelAnchor = labelOnLeft ? 'end' : 'start';
    s += `<g class="gfa-bubble${isHighlight ? ' has-pulse' : ''}" data-idx="${i}" data-cat="${d.category}">
      ${pulseRings}
      <circle class="b-fill" cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF" fill-opacity="1" stroke="${cat.color}" stroke-width="1.75"/>
      <text class="b-label" x="${labelX}" y="${(y + 3.5).toFixed(1)}" text-anchor="${labelAnchor}">${abbr(d.name)}</text>
    </g>`;
  });

  svg.innerHTML = s;

  // Smart hit testing: closest-center hover + click disambiguation; labels are clickable too.
  const tooltip = _$('#gfa-tooltip');
  const disambig = _$('#gfa-disambig');
  const wrap = _$('#gfa-chart-wrap');

  // Geometry computed live so a fullscreen re-render at a new width stays correct
  function clientToSvg(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    return {
      x: (clientX - rect.left) / rect.width * W,
      y: (clientY - rect.top) / rect.height * H,
    };
  }

  // Find bubbles whose disk contains (svgX, svgY); returns sorted by distance
  function hitsAt(svgX, svgY, pad = 0) {
    const hits = [];
    DATA.forEach((d, idx) => {
      const node = svg.querySelector(`.gfa-bubble[data-idx="${idx}"]`);
      if (!node || node.classList.contains('is-dim')) return;
      const cx = toX(d.trl), cy = toY(d.tir), r = BUBBLE_R;
      const dist = Math.hypot(svgX - cx, svgY - cy);
      if (dist <= r + pad) hits.push({ idx, dist });
    });
    hits.sort((a, b) => a.dist - b.dist);
    return hits;
  }

  let activeIdx = null;

  function setActiveBubble(idx, clientX, clientY) {
    if (idx === activeIdx) {
      // Just reposition tooltip
      if (clientX != null) positionTooltip(clientX, clientY);
      return;
    }
    // Remove old active class
    if (activeIdx !== null) {
      const old = svg.querySelector(`.gfa-bubble[data-idx="${activeIdx}"]`);
      if (old) old.classList.remove('is-active');
    }
    activeIdx = idx;
    if (idx === null) {
      tooltip.classList.remove('is-visible');
      return;
    }
    const node = svg.querySelector(`.gfa-bubble[data-idx="${idx}"]`);
    if (node) {
      node.classList.add('is-active');
      // Raise to top of SVG so the user can see what they're targeting
      svg.appendChild(node);
    }
    const d = DATA[idx];
    tooltip.innerHTML = `
      <div class="name">${d.name}</div>
      <div class="stats">TRL ${d.trl} · TIR ${d.tir}% · ${d.patents.toLocaleString()} patents · ${d.yoy}</div>
      <div class="hint">${selectedTechIdx === idx ? 'Selected' : 'Click for details'}</div>
    `;
    tooltip.classList.add('is-visible');
    if (clientX != null) positionTooltip(clientX, clientY);
  }

  function positionTooltip(clientX, clientY) {
    const rect = wrap.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    let left = x + 14, top = y - th - 10;
    if (left + tw > rect.width - 8) left = x - tw - 14;
    if (top < 8) top = y + 18;
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  function idxFromEvt(e){
    const g = e.target.closest ? e.target.closest('.gfa-bubble') : null;
    if (g && e.target.classList && e.target.classList.contains('b-label') && !g.classList.contains('is-dim')) return +g.dataset.idx;
    return null;
  }

  function selectBubble(idx) {
    selectedTechIdx = (selectedTechIdx === idx) ? null : idx;
    svg.querySelectorAll('.gfa-bubble').forEach(b => b.classList.remove('is-selected'));
    if (selectedTechIdx !== null) {
      const node = svg.querySelector(`.gfa-bubble[data-idx="${selectedTechIdx}"]`);
      if (node) node.classList.add('is-selected');
    }
    renderDetail();
  }

  function showDisambig(clientX, clientY, hits) {
    const wrapRect = wrap.getBoundingClientRect();
    disambig.innerHTML = `
      <div class="gfa-disambig-header">${hits.length} bubbles here · pick one</div>
      ${hits.map(h => {
        const d = DATA[h.idx];
        const cat = CAT_BY_ID[d.category];
        return `<div class="gfa-disambig-item" data-idx="${h.idx}">
          <span class="dot" style="background:${cat.color}"></span>
          <span class="name">${d.name}</span>
          <span class="stats">TRL ${d.trl} · ${d.tir}%</span>
        </div>`;
      }).join('')}
    `;
    // Position near click, keep inside wrap
    disambig.classList.add('is-visible');
    const dw = disambig.offsetWidth, dh = disambig.offsetHeight;
    let left = clientX - wrapRect.left + 12;
    let top = clientY - wrapRect.top + 12;
    if (left + dw > wrapRect.width - 8) left = clientX - wrapRect.left - dw - 12;
    if (top + dh > wrapRect.height - 8) top = clientY - wrapRect.top - dh - 12;
    if (left < 8) left = 8;
    if (top < 8) top = 8;
    disambig.style.left = left + 'px';
    disambig.style.top = top + 'px';
    // Wire item clicks
    disambig.querySelectorAll('.gfa-disambig-item').forEach(item => {
      item.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const idx = parseInt(item.dataset.idx);
        hideDisambig();
        selectBubble(idx);
      });
    });
    // Hide tooltip while popover is open
    tooltip.classList.remove('is-visible');
    if (activeIdx !== null) {
      const old = svg.querySelector(`.gfa-bubble[data-idx="${activeIdx}"]`);
      if (old) old.classList.remove('is-active');
      activeIdx = null;
    }
  }

  function hideDisambig() {
    disambig.classList.remove('is-visible');
  }

  if (!svg.dataset.bound) {
    svg.dataset.bound = '1';
    wrap.addEventListener('mousemove', (e) => {
      if (disambig.classList.contains('is-visible')) return;
      const li = idxFromEvt(e);
      if (li != null) { setActiveBubble(li, e.clientX, e.clientY); return; }
      const { x, y } = clientToSvg(e.clientX, e.clientY);
      const hits = hitsAt(x, y);
      setActiveBubble(hits.length ? hits[0].idx : null, e.clientX, e.clientY);
    });
    wrap.addEventListener('mouseleave', () => {
      if (disambig.classList.contains('is-visible')) return;
      setActiveBubble(null);
    });
    svg.addEventListener('click', (e) => {
      const li = idxFromEvt(e);
      if (li != null) { hideDisambig(); selectBubble(li); return; }
      const { x, y } = clientToSvg(e.clientX, e.clientY);
      const hits = hitsAt(x, y);
      hideDisambig();
      if (hits.length === 0) return;
      if (hits.length === 1) { selectBubble(hits[0].idx); return; }
      showDisambig(e.clientX, e.clientY, hits);
    });
    document.addEventListener('click', (e) => {
      if (!disambig.classList.contains('is-visible')) return;
      if (disambig.contains(e.target) || svg.contains(e.target)) return;
      hideDisambig();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideDisambig();
    });
  }

  updateBubbleVisibility();
}

function layoutLabels(){
  const svg=_$('#gfa-svg'); if(!svg) return;
  const filtered=_root.classList && _root.classList.contains('has-filter');
  const LH=14, top=PAD.top+8, bot=H-PAD.bottom-6, sides={L:[],R:[]};
  svg.querySelectorAll('.gfa-bubble').forEach(g=>{
    const c=g.querySelector('.b-fill'), l=g.querySelector('.b-label'), ld=g.querySelector('.b-lead');
    if(!c||!l) return;
    const cy=+c.getAttribute('cy'), cx=+c.getAttribute('cx'), r=+c.getAttribute('r');
    const left=l.getAttribute('text-anchor')==='end', baseX=left?cx-r-7:cx+r+7;
    l.setAttribute('x',baseX.toFixed(1)); l.setAttribute('y',(cy+3.5).toFixed(1));
    if(ld) ld.style.display='none';
    if(!filtered || g.classList.contains('is-dim')) return;
    (left?sides.L:sides.R).push({g,l,cx,cy,r,left,baseX});
  });
  for(const k in sides){
    const arr=sides[k].sort((a,b)=>a.cy-b.cy);
    if(!arr.length) continue;
    let prev=-1e9; arr.forEach(o=>{ o.y=Math.max(o.cy,prev+LH); prev=o.y; });
    const over=arr[arr.length-1].y-bot;
    if(over>0){ arr.forEach(o=>o.y-=over); for(let i=arr.length-2;i>=0;i--) arr[i].y=Math.min(arr[i].y,arr[i+1].y-LH); }
    arr[0].y=Math.max(arr[0].y,top);
    arr.forEach(o=>{
      o.l.setAttribute('y',o.y.toFixed(1));
      if(Math.abs(o.y-o.cy)>3){
        let ld=o.g.querySelector('.b-lead');
        if(!ld){ ld=document.createElementNS('http://www.w3.org/2000/svg','line'); ld.setAttribute('class','b-lead'); o.g.insertBefore(ld,o.g.firstChild); }
        const ex=o.left?o.cx-o.r:o.cx+o.r, tx=o.left?o.baseX+4:o.baseX-4;
        ld.setAttribute('x1',ex); ld.setAttribute('y1',o.cy); ld.setAttribute('x2',tx); ld.setAttribute('y2',(o.y-3.5).toFixed(1)); ld.style.display='';
      }
    });
  }
}
function setupFullscreen(){
  const btn=_$('#gfa-expand'); if(!btn) return;
  const on=()=>_root.classList.contains('gfa-fullscreen');
  const fsW=()=>{ const aw=Math.max(900,window.innerWidth-48), ah=Math.max(360,window.innerHeight-200); let ar=Math.min(3.4,Math.max(1.84,aw/ah)); return Math.round(H*ar); };
  const reSel=()=>{ if(selectedTechIdx!=null){ const n=_$('#gfa-svg').querySelector('.gfa-bubble[data-idx=\"'+selectedTechIdx+'\"]'); if(n) n.classList.add('is-selected'); } };
  const set=v=>{ _root.classList.toggle('gfa-fullscreen',v); document.body.style.overflow=v?'hidden':''; btn.innerHTML=v?'✕ Exit full screen':'⤢ Full screen'; W=v?fsW():1176; renderSVG(); reSel(); };
  btn.addEventListener('click',()=>set(!on()));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&on()) set(false); });
  let rt; window.addEventListener('resize',()=>{ if(!on())return; clearTimeout(rt); rt=setTimeout(()=>{ W=fsW(); renderSVG(); reSel(); },180); });
}
function updateBubbleVisibility() {
  const svg = _$('#gfa-svg');
  // Labels only appear when a specific category is active (keeps the
  // all-44-techs view uncluttered). Toggled via .has-filter on the root.
  const root = _root;
  if (root) root.classList.toggle('has-filter', activeCategory !== 'all');
  let visible = 0;
  svg.querySelectorAll('.gfa-bubble').forEach(b => {
    const match = activeCategory === 'all' || b.dataset.cat === activeCategory;
    b.classList.toggle('is-dim', !match);
    if (match) visible++;
  });
  _$('#gfa-count').textContent =
    `${visible} ${visible === 1 ? 'technology' : 'technologies'} plotted` +
    (activeCategory === 'all' ? '' : ` · ${CAT_BY_ID[activeCategory].short}`);
  layoutLabels();
}

// =============== DETAIL PANEL ===============

function renderDetail() {
  const wrap = _$('#gfa-detail');
  if (selectedTechIdx === null) {
    wrap.innerHTML = `
      <div class="gfa-detail-empty">
        <strong>Click any bubble</strong> to see its improvement trajectory, new patent flow, and the organizations driving the field.
      </div>`;
    return;
  }
  const d = DATA[selectedTechIdx];
  const cat = CAT_BY_ID[d.category];
  const yoyNum = parseFloat(d.yoy);
  const yoyClass = yoyNum > 0 ? 'is-positive' : '';

  wrap.innerHTML = `
    <div class="gfa-detail-header">
      <div class="gfa-detail-title">
        <h2>${d.name}</h2>
        <div class="gfa-detail-meta">
          <span class="gfa-category-badge"><span class="dot" style="background:${cat.color}"></span>${d.category}</span>
          <span class="gfa-path">${classifyQuadrant(d.trl, d.tir)}</span>
        </div>
      </div>
      <button class="gfa-detail-close" id="gfa-close-detail">Close ×</button>
    </div>

    <div class="gfa-stats">
      <div class="gfa-stat">
        <div class="gfa-stat-label">TRL</div>
        <div class="gfa-stat-value">${d.trl}<span class="unit">/9</span></div>
      </div>
      <div class="gfa-stat">
        <div class="gfa-stat-label">Improvement Rate</div>
        <div class="gfa-stat-value">${d.tir}<span class="unit">%/yr</span></div>
      </div>
      <div class="gfa-stat">
        <div class="gfa-stat-label">Total Patents</div>
        <div class="gfa-stat-value">${d.patents.toLocaleString()}</div>
      </div>
      <div class="gfa-stat">
        <div class="gfa-stat-label">YoY Patent Growth</div>
        <div class="gfa-stat-value ${yoyClass}">${d.yoy}</div>
      </div>
    </div>

    <div class="gfa-detail-charts">
      <div class="gfa-mini-chart">
        <div class="gfa-mini-chart-title">Improvement Rate History (2017–2023)</div>
        ${renderLineChart(d.tirHistory.filter(p => p.year <= 2023), cat.color)}
      </div>
      <div class="gfa-mini-chart">
        <div class="gfa-mini-chart-title">New Patents per Year (2017–2024)</div>
        ${renderBarChart(d.newPatents.filter(p => p.year <= 2024), cat.color)}
      </div>
    </div>

    <div class="gfa-detail-lists">
      <div class="gfa-list-block">
        <div class="gfa-list-title">Top patent holders <span class="hint">cumulative</span></div>
        <ul class="gfa-list">
          ${d.holders.map(h => `<li><span class="org">${h.org}</span><span class="count">${h.patents}</span></li>`).join('')}
        </ul>
      </div>
      <div class="gfa-list-block">
        <div class="gfa-list-title">Top new filers <span class="hint">last 24 months</span></div>
        <ul class="gfa-list">
          ${d.newFilers.map(h => `<li><span class="org">${h.org}</span><span class="count">${h.patents}</span></li>`).join('')}
        </ul>
      </div>
      <div class="gfa-list-block">
        <div class="gfa-list-title">New entrants <span class="hint">first-time filers</span></div>
        <ul class="gfa-list">
          ${d.newEntrants.map(h => `<li><span class="org">${h.org}</span><span class="count">${h.patents}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  _$('#gfa-close-detail').addEventListener('click', () => {
    selectedTechIdx = null;
    _$$('.gfa-bubble').forEach(b => b.classList.remove('is-selected'));
    renderDetail();
  });
  // Scroll detail into view smoothly
  wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function classifyQuadrant(trl, tir) {
  if (trl >= TRL_MID && tir >= TIR_MID) return 'Mature · High TIR · Buy / Leverage';
  if (trl <  TRL_MID && tir >= TIR_MID) return 'Immature · High TIR · Monitor Closely';
  if (trl >= TRL_MID && tir <  TIR_MID) return 'Mature · Low TIR · Phase Out';
  return 'Immature · Low TIR · Ignore';
}

// =============== MINI CHARTS ===============

function renderLineChart(points, color) {
  const w = 480, h = 200, pad = { t: 16, r: 16, b: 28, l: 44 };
  const pw = w - pad.l - pad.r, ph = h - pad.t - pad.b;
  const xs = points.map(p => p.year);
  const ys = points.map(p => p.tir);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMin = Math.floor(Math.min(...ys) / 10) * 10;
  const yMax = Math.ceil(Math.max(...ys) / 10) * 10;
  const X = v => pad.l + ((v - xMin) / (xMax - xMin)) * pw;
  const Y = v => pad.t + (1 - (v - yMin) / (yMax - yMin || 1)) * ph;
  const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + X(p.year) + ',' + Y(p.tir)).join(' ');
  // Area underneath
  const area = `M${X(xs[0])},${pad.t + ph} L${points.map(p => X(p.year) + ',' + Y(p.tir)).join(' L')} L${X(xs[xs.length - 1])},${pad.t + ph} Z`;
  // Y-axis ticks
  const yTicks = 4;
  let gridY = '';
  for (let i = 0; i <= yTicks; i++) {
    const v = yMin + (yMax - yMin) * (i / yTicks);
    const y = Y(v);
    gridY += `<line x1="${pad.l}" y1="${y}" x2="${w - pad.r}" y2="${y}" stroke="#F0F1F3" stroke-width="1"/>`;
    gridY += `<text x="${pad.l - 6}" y="${y + 3.5}" text-anchor="end" font-family="Inter" font-size="10" fill="#8A95A4">${v.toFixed(0)}%</text>`;
  }
  let xLabels = '';
  xs.forEach(yr => {
    if (yr % 2 === 1 || yr === xMax) {
      xLabels += `<text x="${X(yr)}" y="${h - 8}" text-anchor="middle" font-family="Inter" font-size="10" fill="#8A95A4">${yr}</text>`;
    }
  });
  // Dots
  const dots = points.map(p => `<circle cx="${X(p.year)}" cy="${Y(p.tir)}" r="3" fill="${color}"/>`).join('');
  // Last value annotation
  const last = points[points.length - 1];
  const lastTxt = `<text x="${X(last.year) - 6}" y="${Y(last.tir) - 9}" text-anchor="end" font-family="Chivo Mono" font-size="10.5" font-weight="500" fill="${color}">${last.tir}%</text>`;

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    ${gridY}
    <path d="${area}" fill="${color}" fill-opacity="0.10"/>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2"/>
    ${dots}
    ${lastTxt}
    ${xLabels}
  </svg>`;
}

function renderBarChart(points, color) {
  const w = 480, h = 200, pad = { t: 16, r: 16, b: 28, l: 44 };
  const pw = w - pad.l - pad.r, ph = h - pad.t - pad.b;
  const counts = points.map(p => p.count);
  const yMax = Math.ceil(Math.max(...counts) * 1.1 / 50) * 50 || 100;
  const barW = pw / points.length * 0.7;
  const gap = pw / points.length * 0.3;
  let bars = '';
  points.forEach((p, i) => {
    const bh = (p.count / yMax) * ph;
    const x = pad.l + i * (pw / points.length) + gap / 2;
    const y = pad.t + ph - bh;
    bars += `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" fill="${color}" fill-opacity="0.85" rx="1.5"><title>${p.year}: ${p.count.toLocaleString()} new patents</title></rect>`;
  });
  // Y-axis ticks
  let gridY = '';
  for (let i = 0; i <= 4; i++) {
    const v = (yMax / 4) * i;
    const y = pad.t + ph - (v / yMax) * ph;
    gridY += `<line x1="${pad.l}" y1="${y}" x2="${w - pad.r}" y2="${y}" stroke="#F0F1F3" stroke-width="1"/>`;
    gridY += `<text x="${pad.l - 6}" y="${y + 3.5}" text-anchor="end" font-family="Inter" font-size="10" fill="#8A95A4">${Math.round(v)}</text>`;
  }
  let xLabels = '';
  points.forEach((p, i) => {
    const x = pad.l + i * (pw / points.length) + (pw / points.length) / 2;
    xLabels += `<text x="${x}" y="${h - 8}" text-anchor="middle" font-family="Inter" font-size="9.5" fill="#8A95A4">${p.year}</text>`;
  });
  // Last value
  const last = points[points.length - 1];
  const lastX = pad.l + (points.length - 1) * (pw / points.length) + (pw / points.length) / 2;
  const lastY = pad.t + ph - (last.count / yMax) * ph - 6;
  const lastTxt = `<text x="${lastX}" y="${lastY}" text-anchor="middle" font-family="Chivo Mono" font-size="10.5" font-weight="500" fill="${color}">${last.count}</text>`;

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    ${gridY}
    ${bars}
    ${lastTxt}
    ${xLabels}
  </svg>`;
}

// =============== INIT ===============
async function init() {
  const status = _$('#gfa-status');
  setupFullscreen();
  try {
    const res = await fetch(DATA_URL, { cache: 'force-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    DATA = await res.json();
    if (!Array.isArray(DATA) || DATA.length === 0) throw new Error('Empty or invalid data');
    if (status) status.remove();
    fitScale();
    renderPills();
    renderLegend();
    renderSVG();
  } catch (err) {
    console.error('Cell-format radar: failed to load data from', DATA_URL, err);
    if (status) {
      status.innerHTML = '<div style="padding:40px;text-align:center;color:#6E7B8B;font-family:Inter,sans-serif;font-size:13px;">Could not load chart data.<br><span style="font-family:Chivo Mono,monospace;font-size:11px;color:#A0A6B0;">' + (err.message || 'Network error') + '</span></div>';
    }
  }
}
init();
})();
