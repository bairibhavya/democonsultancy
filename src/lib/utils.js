export const normalize=(str)=>String(str||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLocaleLowerCase();
export function matchCountry(country,query){const q=normalize(query);if(!q)return true;return [country.name,country.city].some(x=>{const name=normalize(x);return name.startsWith(q)||name.split(/[\s-]+/).some(word=>word.startsWith(q))||(q.length>=3&&name.includes(q))})}
export const dateLabel=(d)=>d?new Intl.DateTimeFormat('en-IN',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(d)):'—';
export function getCountry(list,slug){return list.find(c=>c.id===slug)}
export const makeCountryId=(name)=>normalize(name).replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const shortName=s=>String(s||'').split(' ').map(x=>x[0]||'').slice(0,2).join('').toUpperCase();
