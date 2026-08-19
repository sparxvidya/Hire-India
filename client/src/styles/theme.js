export const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#0a0c14}::-webkit-scrollbar-thumb{background:#1e2133;border-radius:3px}
  .gb{background:linear-gradient(135deg,#6C63FF,#A855F7);border:none;color:#fff;padding:12px 26px;border-radius:50px;font-size:13.5px;font-weight:700;cursor:pointer;transition:all .3s;font-family:inherit}
  .gb:hover{transform:translateY(-2px);box-shadow:0 8px 26px rgba(108,99,255,.4)}
  .gb:disabled{opacity:.5;cursor:not-allowed;transform:none}
  .ob{background:transparent;border:1px solid #2A2D40;color:#9A9CB8;padding:9px 20px;border-radius:50px;font-size:13px;font-weight:600;cursor:pointer;transition:all .25s;font-family:inherit}
  .ob:hover{border-color:#6C63FF;color:#A0A8FF}
  .navlink{background:none;border:none;color:#6B6E8A;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;padding:4px 2px;transition:color .2s}
  .navlink:hover{color:#A0A8FF}
  .jc{background:#0E1118;border:1px solid #1E2133;border-radius:16px;padding:22px;transition:all .3s}
  .jc:hover{border-color:#6C63FF;transform:translateY(-3px);box-shadow:0 10px 32px rgba(108,99,255,.14)}
  .sc{background:#0E1118;border:1px solid #1E2133;border-radius:14px;padding:18px;transition:all .3s;text-decoration:none;display:block}
  .sc:hover{border-color:#A855F7;transform:translateY(-3px);box-shadow:0 8px 26px rgba(168,85,247,.12)}
  .cc{background:#0E1118;border:1px solid #1E2133;border-radius:12px;padding:13px 16px;transition:all .25s;text-decoration:none;display:flex;align-items:center;gap:12px}
  .cc:hover{border-color:#6C63FF;background:#0d0f1e}
  .inp{background:#0E1118;border:1.5px solid #2A2D40;color:#E8EAF0;padding:11px 16px;border-radius:12px;font-size:13.5px;outline:none;font-family:inherit;transition:all .3s;width:100%}
  .inp:focus{border-color:#6C63FF;box-shadow:0 0 0 3px rgba(108,99,255,.12)}
  .sel{background:#0E1118;border:1.5px solid #2A2D40;color:#E8EAF0;padding:11px 16px;border-radius:12px;font-size:13.5px;outline:none;font-family:inherit;width:100%;cursor:pointer}
  .cbu{background:linear-gradient(135deg,#6C63FF,#A855F7);color:#fff;padding:10px 14px;border-radius:18px 18px 4px 18px;font-size:13px;max-width:80%;align-self:flex-end;line-height:1.6}
  .cba{background:#1A1D2E;color:#C8CAD8;padding:10px 14px;border-radius:18px 18px 18px 4px;font-size:13px;max-width:85%;align-self:flex-start;line-height:1.7;border:1px solid #2A2D40;white-space:pre-wrap}
  .pill{background:#161828;border:1px solid #2A2D40;color:#9A9CB8;border-radius:50px;padding:3px 11px;font-size:11px;font-weight:600}
  .tag{background:#12142A;color:#8888FF;padding:3px 8px;border-radius:5px;font-size:11px;font-weight:700;letter-spacing:.4px}
  .fbadge{background:linear-gradient(135deg,#6C63FF22,#A855F722);border:1px solid #6C63FF44;color:#A0A8FF;padding:2px 9px;border-radius:50px;font-size:10.5px;font-weight:800}
  .catb{background:transparent;border:1px solid #1E2133;color:#6B6E8A;padding:6px 16px;border-radius:50px;font-size:12.5px;cursor:pointer;transition:all .25s;font-family:inherit}
  .catb.on{background:#6C63FF;border-color:#6C63FF;color:#fff;font-weight:700}
  .catb:hover:not(.on){border-color:#6C63FF;color:#A0A8FF}
  .tb{background:transparent;border:none;color:#6B6E8A;padding:10px 20px;font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;border-bottom:2px solid transparent;transition:all .25s}
  .tb.on{color:#A0A8FF;border-bottom-color:#6C63FF}
  .lbl{font-size:11px;font-weight:700;color:#6B6E8A;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px;display:block}
  .hi{background:#0E1118;border:1.5px solid #2A2D40;color:#E8EAF0;padding:14px 22px;border-radius:50px;font-size:14px;outline:none;font-family:inherit;transition:all .3s;flex:1;min-width:240px}
  .hi:focus{border-color:#6C63FF;box-shadow:0 0 0 4px rgba(108,99,255,.1)}
  .sl{color:#6C63FF;font-size:11px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:9px}
  .gt{background:linear-gradient(135deg,#A0A8FF,#E879F9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .ac{background:#0E1118;border:1px solid #1E2133;border-radius:12px;padding:16px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .db{background:#1A0A0A;border:1px solid #3A1A1A;color:#E24B4A;padding:6px 13px;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit}
  .fb2{background:#0A1A10;border:1px solid #1A4020;color:#4CAF50;padding:6px 13px;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit}
  .applyBtn{display:block;margin-top:12px;background:#6C63FF14;border:1px solid #6C63FF2E;color:#A0A8FF;padding:9px;border-radius:10px;text-align:center;text-decoration:none;font-size:12.5px;font-weight:700;transition:background .2s}
  .applyBtn:hover{background:#6C63FF28}
  .toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#1A1D2E;border:1px solid rgba(108,99,255,.3);color:#A0A8FF;padding:11px 22px;border-radius:50px;font-size:13.5px;font-weight:700;z-index:9999;box-shadow:0 8px 28px rgba(108,99,255,.25);animation:fu .3s ease}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
  @keyframes fu{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}
  @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
  .shim{background:linear-gradient(90deg,#1A1D2E 25%,#252840 50%,#1A1D2E 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:6px;height:12px;margin:6px 0}
  .chk{accent-color:#6C63FF;width:16px;height:16px;cursor:pointer}
  .grid2{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
  .gridP{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:13px}
  .gridC{display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:11px}
  .grid22{display:grid;grid-template-columns:1fr 1fr;gap:18px}
`;
