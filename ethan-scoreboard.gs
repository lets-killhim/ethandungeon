// ethan dungeon scoreboard — Google Apps Script
// 1. sheets.new -> Extensions -> Apps Script -> paste this over everything -> save
// 2. Deploy -> New deployment -> type "Web app" -> Execute as: Me -> Who has access: Anyone -> Deploy
// 3. copy the web app URL into index.html:  const SCORE_URL='https://script.google.com/macros/s/.../exec';
function sheet(){ const ss=SpreadsheetApp.getActiveSpreadsheet(); let sh=ss.getSheetByName('scores'); if(!sh){ sh=ss.insertSheet('scores'); sh.appendRow(['at','name','wave','time','level','kills','skin','map','floor','escaped']); } return sh; }
function doGet(){ const sh=sheet(); const rows=sh.getDataRange().getValues().slice(1);
  const out=rows.map(r=>({at:r[0],name:String(r[1]),wave:Number(r[2]),time:Number(r[3]),level:Number(r[4]),kills:Number(r[5]),skin:String(r[6]),map:String(r[7]),floor:Number(r[8])||0,escaped:Number(r[9])||0}))
    .sort((a,b)=>(b.escaped-a.escaped)||(b.floor-a.floor)||(b.wave-a.wave)||(b.time-a.time)).slice(0,100);
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON); }
function doPost(e){ try{ const d=JSON.parse(e.postData.contents||'{}'); const name=String(d.name||'').slice(0,16).replace(/[<>]/g,''); if(!name)throw new Error('no name');
    const wave=Math.max(0,Math.min(999,Number(d.wave)||0)), time=Math.max(0,Math.min(99999,Number(d.time)||0));
    sheet().appendRow([new Date(),name,wave,time,Number(d.level)||0,Number(d.kills)||0,String(d.skin||'').slice(0,20),String(d.map||'').slice(0,20),Math.max(0,Math.min(9,Number(d.floor)||0)),d.escaped?1:0]);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  }catch(err){ return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON); } }
