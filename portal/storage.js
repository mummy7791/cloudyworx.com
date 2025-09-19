// Shared LocalStorage functions for Cloudy Worx portals
(function(global){
  const CAND_KEY = 'cw_candidates_v2';
  const NOTI_KEY = 'cw_notifications_v2';

  function read(key){ try{ return JSON.parse(localStorage.getItem(key)||'[]'); }catch(e){ return [] } }
  function write(key,val){ localStorage.setItem(key, JSON.stringify(val)); }

  function getCandidates(){ return read(CAND_KEY); }
  function setCandidates(list){ write(CAND_KEY,list); }
  function upsertCandidate(c){
    const list = getCandidates();
    const ix = list.findIndex(x=>x.id===c.id);
    if(ix>=0) list[ix]=c; else list.push(c);
    setCandidates(list);
  }
  function getCandidate(id){ return getCandidates().find(x=>x.id===id); }
  function deleteCandidate(id){ setCandidates(getCandidates().filter(x=>x.id!==id)); }

  function pushNotification(n){
    const list = read(NOTI_KEY);
    list.unshift(Object.assign({ts:Date.now(), for:'admin'}, n));
    write(NOTI_KEY,list);
  }
  function pullNotifications(){ return read(NOTI_KEY); }

  global.CWStore = { getCandidates,setCandidates,upsertCandidate,getCandidate,deleteCandidate,
                     pushNotification,pullNotifications };
})(window);
