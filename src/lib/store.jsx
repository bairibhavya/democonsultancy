import React,{createContext,useCallback,useContext,useMemo,useState,useEffect} from 'react';
import { countries, demoApplications, demoEnquiries, demoStudents, demoStories } from '../data/content';
const StoreContext=createContext(null);
const KEY='globalpath-demo-v1';
const seed=()=>({countries, enquiries:demoEnquiries, applications:demoApplications, students:demoStudents, stories:demoStories});
function read(){try{const j=JSON.parse(localStorage.getItem(KEY));if(j&&Array.isArray(j.countries)&&Array.isArray(j.enquiries))return {...seed(),...j};}catch{}return seed();}
export function StoreProvider({children}){
 const [data,setData]=useState(read);
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}},[data]);
 const createEnquiry=useCallback((payload)=>{const row={...payload,id:'q'+Date.now().toString(36),status:'New',source:'Website',createdAt:new Date().toISOString()};setData(d=>({...d,enquiries:[row,...d.enquiries]}));return row},[]);
 const changeEnquiry=useCallback((id,patch)=>setData(d=>({...d,enquiries:d.enquiries.map(x=>x.id===id?{...x,...patch}:x)})),[]);
 const createApplication=useCallback((payload)=>{const row={...payload,id:'a'+Date.now().toString(36),submittedAt:new Date().toISOString(),stage:'New'};setData(d=>({...d,applications:[row,...d.applications]}));return row},[]);
 const changeApplication=useCallback((id,patch)=>setData(d=>({...d,applications:d.applications.map(x=>x.id===id?{...x,...patch}:x)})),[]);
 const createCountry=useCallback((payload)=>setData(d=>({...d,countries:[...d.countries,{...countries[0],...payload}]})),[]);
 const changeCountry=useCallback((id,patch)=>setData(d=>({...d,countries:d.countries.map(x=>x.id===id?{...x,...patch}:x)})),[]);
 const removeCountry=useCallback(id=>setData(d=>({...d,countries:d.countries.filter(x=>x.id!==id)})),[]);
 const createStudent=useCallback((payload)=>setData(d=>({...d,students:[{...payload,id:'s'+Date.now().toString(36)},...d.students]})),[]);
 const changeStudent=useCallback((id,patch)=>setData(d=>({...d,students:d.students.map(x=>x.id===id?{...x,...patch}:x)})),[]);
 const removeStudent=useCallback(id=>setData(d=>({...d,students:d.students.filter(x=>x.id!==id)})),[]);
 const resetDemo=useCallback(()=>setData(seed()),[]);
 const value=useMemo(()=>({data,createEnquiry,changeEnquiry,createApplication,changeApplication,createCountry,changeCountry,removeCountry,createStudent,changeStudent,removeStudent,resetDemo}),[data,createEnquiry,changeEnquiry,createApplication,changeApplication,createCountry,changeCountry,removeCountry,createStudent,changeStudent,removeStudent,resetDemo]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export function useStore(){const v=useContext(StoreContext);if(!v)throw Error('Missing StoreProvider');return v}
export function exportCsv(filename,rows){if(!rows.length)return;const keys=[...new Set(rows.flatMap(x=>Object.keys(x)))];const escape=s=>'"'+String(s??'').replaceAll('"','""')+'"';const csv='\ufeff'+keys.map(escape).join(',')+'\r\n'+rows.map(x=>keys.map(k=>escape(x[k])).join(',')).join('\r\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');const url=URL.createObjectURL(blob);a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500)}
