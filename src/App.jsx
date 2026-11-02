import React from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Navbar,Footer} from './components/UI';
import {Home,Destinations,CountryDetails,Services,ServiceDetail,Process,Stories,About,Immigration,Scholarships,Counselling,Contact,Privacy,NotFound} from './pages/Public';
import Admin from './pages/Admin';
function PublicLayout({children}){return <div className="public-site"><Navbar/><main id="main-content">{children}</main><Footer/></div>}
export default function App(){const {pathname}=useLocation();return <><a href="#main-content" className="skip-link">Skip to content</a><Routes>
 <Route path="/admin/*" element={<Admin/>}/>
 <Route path="/" element={<PublicLayout><Home/></PublicLayout>}/>
 <Route path="/destinations" element={<PublicLayout><Destinations/></PublicLayout>}/>
 <Route path="/destinations/:slug" element={<PublicLayout><CountryDetails/></PublicLayout>}/>
 <Route path="/services" element={<PublicLayout><Services/></PublicLayout>}/>
 <Route path="/services/:slug" element={<PublicLayout><ServiceDetail/></PublicLayout>}/>
 <Route path="/immigration" element={<PublicLayout><Immigration/></PublicLayout>}/>
 <Route path="/process" element={<PublicLayout><Process/></PublicLayout>}/>
 <Route path="/stories" element={<PublicLayout><Stories/></PublicLayout>}/>
 <Route path="/about" element={<PublicLayout><About/></PublicLayout>}/>
 <Route path="/scholarships" element={<PublicLayout><Scholarships/></PublicLayout>}/>
 <Route path="/counselling" element={<PublicLayout><Counselling/></PublicLayout>}/>
 <Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>}/>
 <Route path="/privacy" element={<PublicLayout><Privacy/></PublicLayout>}/>
 <Route path="*" element={<PublicLayout><NotFound/></PublicLayout>}/>
 </Routes></>}
