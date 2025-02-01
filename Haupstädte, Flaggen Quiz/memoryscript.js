const countries = {
    world: [
        { name: "Argentina", flag: "flags/ar.webp" },
        { name: "Bolivia", flag: "flags/bo.webp" },
        { name: "Brazil", flag: "flags/br.webp" },
        { name: "Chile", flag: "flags/cl.webp" },
        { name: "Colombia", flag: "flags/co.webp" },
        { name: "Ecuador", flag: "flags/ec.webp" },
        { name: "Guyana", flag: "flags/gy.webp" },
        { name: "Paraguay", flag: "flags/py.webp" },
        { name: "Peru", flag: "flags/pe.webp" },
        { name: "Suriname", flag: "flags/sr.webp" },
        { name: "Uruguay", flag: "flags/uy.webp" },
        { name: "Venezuela", flag: "flags/ve.webp" },
        { name: "Australia", flag: "flags/au.webp" },
        { name: "Fiji", flag: "flags/fj.webp" },
        { name: "Kiribati", flag: "flags/ki.webp" },
        { name: "Marshall Islands", flag: "flags/mh.webp" },
        { name: "Micronesia", flag: "flags/fm.webp" },
        { name: "Nauru", flag: "flags/nr.webp" },
        { name: "New Zealand", flag: "flags/nz.webp" },
        { name: "Palau", flag: "flags/pw.webp" },
        { name: "Papua New Guinea", flag: "flags/pg.webp" },
        { name: "Samoa", flag: "flags/ws.webp" },
        { name: "Solomon Islands", flag: "flags/sb.webp" },
        { name: "Tonga", flag: "flags/to.webp" },
        { name: "Tuvalu", flag: "flags/tv.webp" },
        { name: "Vanuatu", flag: "flags/vu.webp" },
        { name: "Afghanistan", flag: "flags/af.png" },
        { name: "Bahrain", flag: "flags/bh.webp" },
        { name: "Bangladesh", flag: "flags/bd.webp" },
        { name: "Bhutan", flag: "flags/bt.webp" },
        { name: "Brunei", flag: "flags/bn.webp" },
        { name: "Cambodia", flag: "flags/kh.webp" },
        { name: "China", flag: "flags/cn.webp" },
        { name: "Cyprus", flag: "flags/cy.webp" },
        { name: "Georgia", flag: "flags/ge.webp" },
        { name: "India", flag: "flags/in.webp" },
        { name: "Indonesia", flag: "flags/id.webp" },
        { name: "Iran", flag: "flags/ir.webp" },
        { name: "Iraq", flag: "flags/iq.webp" },
        { name: "Israel", flag: "flags/il.webp" },
        { name: "Japan", flag: "flags/jp.webp" },
        { name: "Jordan", flag: "flags/jo.webp" },
        { name: "Kazakhstan", flag: "flags/kz.webp" },
        { name: "Kuwait", flag: "flags/kw.webp" },
        { name: "Kyrgyzstan", flag: "flags/kg.webp" },
        { name: "Laos", flag: "flags/la.webp" },
        { name: "Lebanon", flag: "flags/lb.webp" },
        { name: "Malaysia", flag: "flags/my.webp" },
        { name: "Maldives", flag: "flags/mv.webp" },
        { name: "Mongolia", flag: "flags/mn.webp" },
        { name: "Myanmar", flag: "flags/mm.webp" },
        { name: "Nepal", flag: "flags/np.webp" },
        { name: "North Korea", flag: "flags/kp.webp" },
        { name: "Oman", flag: "flags/om.webp" },
        { name: "Pakistan", flag: "flags/pk.webp" },
        { name: "Palestine", flag: "flags/ps.webp" },
        { name: "Philippines", flag: "flags/ph.webp" },
        { name: "Qatar", flag: "flags/qa.webp" },
        { name: "Saudi Arabia", flag: "flags/sa.webp" },
        { name: "Singapore", flag: "flags/sg.webp" },
        { name: "South Korea", flag: "flags/kr.webp" },
        { name: "Sri Lanka", flag: "flags/lk.webp" },
        { name: "Syria", flag: "flags/sy.webp" },
        { name: "Tajikistan", flag: "flags/tj.webp" },
        { name: "Thailand", flag: "flags/th.webp" },
        { name: "Timor-Leste", flag: "flags/tl.webp" },
        { name: "Turkey", flag: "flags/tr.webp" },
        { name: "Turkmenistan", flag: "flags/tm.webp" },
        { name: "United Arab Emirates", flag: "flags/ae.webp" },
        { name: "Uzbekistan", flag: "flags/uz.webp" },
        { name: "Vietnam", flag: "flags/vn.webp" },
        { name: "Yemen", flag: "flags/ye.webp" },
        { name: "Antigua and Barbuda", flag: "flags/ag.webp" },
        { name: "Bahamas", flag: "flags/bs.webp" },
        { name: "Barbados", flag: "flags/bb.webp" },
        { name: "Belize", flag: "flags/bz.webp" },
        { name: "Canada", flag: "flags/ca.webp" },
        { name: "Costa Rica", flag: "flags/cr.webp" },
        { name: "Cuba", flag: "flags/cu.webp" },
        { name: "Dominica", flag: "flags/dm.webp" },
        { name: "Dominican Republic", flag: "flags/do.webp" },
        { name: "El Salvador", flag: "flags/sv.webp" },
        { name: "Grenada", flag: "flags/gd.webp" },
        { name: "Guatemala", flag: "flags/gt.webp" },
        { name: "Haiti", flag: "flags/ht.webp" },
        { name: "Honduras", flag: "flags/hn.webp" },
        { name: "Jamaica", flag: "flags/jm.webp" },
        { name: "Mexico", flag: "flags/mx.webp" },
        { name: "Nicaragua", flag: "flags/ni.webp" },
        { name: "Panama", flag: "flags/pa.webp" },
        { name: "Saint Kitts and Nevis", flag: "flags/kn.webp" },
        { name: "Saint Lucia", flag: "flags/lc.webp" },
        { name: "Saint Vincent and the Grenadines", flag: "flags/vc.webp" },
        { name: "Trinidad and Tobago", flag: "flags/tt.webp" },
        { name: "United States", flag: "flags/us.webp" },
        { name: "Algeria", flag: "flags/dz.webp" },
        { name: "Angola", flag: "flags/ao.webp" },
        { name: "Benin", flag: "flags/bj.webp" },
        { name: "Botswana", flag: "flags/bw.webp" },
        { name: "Burkina Faso", flag: "flags/bf.webp" },
        { name: "Burundi", flag: "flags/bi.webp" },
        { name: "Cabo Verde", flag: "flags/cv.webp" },
        { name: "Cameroon", flag: "flags/cm.webp" },
        { name: "Central African Republic", flag: "flags/cf.webp" },
        { name: "Chad", flag: "flags/td.webp" },
        { name: "Comoros", flag: "flags/km.webp" },
        { name: "Democratic Republic of the Congo", flag: "flags/cd.webp" },
        { name: "Djibouti", flag: "flags/dj.webp" },
        { name: "Egypt", flag: "flags/eg.webp" },
        { name: "Equatorial Guinea", flag: "flags/gq.webp" },
        { name: "Eritrea", flag: "flags/er.webp" },
        { name: "Eswatini", flag: "flags/sz.webp" },
        { name: "Ethiopia", flag: "flags/et.webp" },
        { name: "Gabon", flag: "flags/ga.webp" },
        { name: "Gambia", flag: "flags/gm.webp" },
        { name: "Ghana", flag: "flags/gh.webp" },
        { name: "Guinea", flag: "flags/gn.webp" },
        { name: "Guinea-Bissau", flag: "flags/gw.webp" },
        { name: "Ivory Coast", flag: "flags/ci.webp" },
        { name: "Kenya", flag: "flags/ke.webp" },
        { name: "Lesotho", flag: "flags/ls.webp" },
        { name: "Liberia", flag: "flags/lr.webp" },
        { name: "Libya", flag: "flags/ly.webp" },
        { name: "Madagascar", flag: "flags/mg.webp" },
        { name: "Malawi", flag: "flags/mw.webp" },
        { name: "Mali", flag: "flags/ml.webp" },
        { name: "Mauritania", flag: "flags/mr.webp" },
        { name: "Mauritius", flag: "flags/mu.webp" },
        { name: "Morocco", flag: "flags/ma.webp" },
        { name: "Mozambique", flag: "flags/mz.webp" },
        { name: "Namibia", flag: "flags/na.webp" },
        { name: "Niger", flag: "flags/ne.webp" },
        { name: "Nigeria", flag: "flags/ng.webp" },
        { name: "Republic of the Congo", flag: "flags/cg.webp" },
        { name: "Rwanda", flag: "flags/rw.webp" },
        { name: "São Tomé and Príncipe", flag: "flags/st.webp" },
        { name: "Senegal", flag: "flags/sn.webp" },
        { name: "Seychelles", flag: "flags/sc.webp" },
        { name: "Sierra Leone", flag: "flags/sl.webp" },
        { name: "Somalia", flag: "flags/so.webp" },
        { name: "South Africa", flag: "flags/za.webp" },
        { name: "South Sudan", flag: "flags/ss.webp" },
        { name: "Sudan", flag: "flags/sd.webp" },
        { name: "Tanzania", flag: "flags/tz.webp" },
        { name: "Togo", flag: "flags/tg.webp" },
        { name: "Tunisia", flag: "flags/tn.webp" },
        { name: "Uganda", flag: "flags/ug.webp" },
        { name: "Zambia", flag: "flags/zm.webp" },
        { name: "Zimbabwe", flag: "flags/zw.webp" },
        { name: "Albania", flag: "flags/al.webp" },
        { name: "Andorra", flag: "flags/ad.webp" },
        { name: "Armenia", flag: "flags/am.webp" },
        { name: "Austria", flag: "flags/at.webp" },
        { name: "Azerbaijan", flag: "flags/az.webp" },
        { name: "Belarus", flag: "flags/by.webp" },
        { name: "Belgium", flag: "flags/be.webp" },
        { name: "Bosnia and Herzegovina", flag: "flags/ba.webp" },
        { name: "Bulgaria", flag: "flags/bg.webp" },
        { name: "Croatia", flag: "flags/hr.webp" },
        { name: "Cyprus", flag: "flags/cy.webp" },
        { name: "Czech Republic", flag: "flags/cz.webp" },
        { name: "Denmark", flag: "flags/dk.webp" },
        { name: "Estonia", flag: "flags/ee.webp" },
        { name: "Finland", flag: "flags/fi.webp" },
        { name: "France", flag: "flags/fr.webp" },
        { name: "Georgia", flag: "flags/ge.webp" },
        { name: "Germany", flag: "flags/de.webp" },
        { name: "Greece", flag: "flags/gr.webp" },
        { name: "Hungary", flag: "flags/hu.webp" },
        { name: "Iceland", flag: "flags/is.webp" },
        { name: "Ireland", flag: "flags/ie.webp" },
        { name: "Italy", flag: "flags/it.webp" },
        { name: "Kosovo", flag: "flags/xk.webp" },
        { name: "Latvia", flag: "flags/lv.webp" },
        { name: "Liechtenstein", flag: "flags/li.webp" },
        { name: "Lithuania", flag: "flags/lt.webp" },
        { name: "Luxembourg", flag: "flags/lu.webp" },
        { name: "Malta", flag: "flags/mt.webp" },
        { name: "Moldova", flag: "flags/md.webp" },
        { name: "Monaco", flag: "flags/mc.webp" },
        { name: "Montenegro", flag: "flags/me.webp" },
        { name: "Netherlands", flag: "flags/nl.webp" },
        { name: "North Macedonia", flag: "flags/mk.webp" },
        { name: "Norway", flag: "flags/no.webp" },
        { name: "Poland", flag: "flags/pl.webp" },
        { name: "Portugal", flag: "flags/pt.webp" },
        { name: "Romania", flag: "flags/ro.webp" },
        { name: "Russia", flag: "flags/ru.webp" },
        { name: "San Marino", flag: "flags/sm.webp" },
        { name: "Serbia", flag: "flags/rs.webp" },
        { name: "Slovakia", flag: "flags/sk.webp" },
        { name: "Slovenia", flag: "flags/si.webp" },
        { name: "Spain", flag: "flags/es.webp" },
        { name: "Sweden", flag: "flags/se.webp" },
        { name: "Switzerland", flag: "flags/ch.webp" },
        { name: "Turkey", flag: "flags/tr.webp" },
        { name: "Ukraine", flag: "flags/ua.webp" },
        { name: "United Kingdom", flag: "flags/gb.webp" },
        { name: "Vatican City", flag: "flags/vt.webp" }
    ],
    europe: [
            { name: "Albania", flag: "flags/al.webp" },
            { name: "Andorra", flag: "flags/ad.webp" },
            { name: "Austria", flag: "flags/at.webp" },
            { name: "Belarus", flag: "flags/by.webp" },
            { name: "Belgium", flag: "flags/be.webp" },
            { name: "Bosnia and Herzegovina", flag: "flags/ba.webp" },
            { name: "Bulgaria", flag: "flags/bg.webp" },
            { name: "Croatia", flag: "flags/hr.webp" },
            { name: "Cyprus", flag: "flags/cy.webp" },
            { name: "Czech Republic", flag: "flags/cz.webp" },
            { name: "Denmark", flag: "flags/dk.webp" },
            { name: "Estonia", flag: "flags/ee.webp" },
            { name: "Finland", flag: "flags/fi.webp" },
            { name: "France", flag: "flags/fr.webp" },
            { name: "Georgia", flag: "flags/ge.webp" },
            { name: "Germany", flag: "flags/de.webp" },
            { name: "Greece", flag: "flags/gr.webp" },
            { name: "Hungary", flag: "flags/hu.webp" },
            { name: "Iceland", flag: "flags/is.webp" },
            { name: "Ireland", flag: "flags/ie.webp" },
            { name: "Italy", flag: "flags/it.webp" },
            { name: "Kosovo", flag: "flags/xk.webp" },
            { name: "Latvia", flag: "flags/lv.webp" },
            { name: "Liechtenstein", flag: "flags/li.webp" },
            { name: "Lithuania", flag: "flags/lt.webp" },
            { name: "Luxembourg", flag: "flags/lu.webp" },
            { name: "Malta", flag: "flags/mt.webp" },
            { name: "Moldova", flag: "flags/md.webp" },
            { name: "Monaco", flag: "flags/mc.webp" },
            { name: "Montenegro", flag: "flags/me.webp" },
            { name: "Netherlands", flag: "flags/nl.webp" },
            { name: "North Macedonia", flag: "flags/mk.webp" },
            { name: "Norway", flag: "flags/no.webp" },
            { name: "Poland", flag: "flags/pl.webp" },
            { name: "Portugal", flag: "flags/pt.webp" },
            { name: "Romania", flag: "flags/ro.webp" },
            { name: "Russia", flag: "flags/ru.webp" },
            { name: "San Marino", flag: "flags/sm.webp" },
            { name: "Serbia", flag: "flags/rs.webp" },
            { name: "Slovakia", flag: "flags/sk.webp" },
            { name: "Slovenia", flag: "flags/si.webp" },
            { name: "Spain", flag: "flags/es.webp" },
            { name: "Sweden", flag: "flags/se.webp" },
            { name: "Switzerland", flag: "flags/ch.webp" },
            { name: "Turkey", flag: "flags/tr.webp" },
            { name: "Ukraine", flag: "flags/ua.webp" },
            { name: "United Kingdom", flag: "flags/gb.webp" },
            { name: "Vatican City", flag: "flags/vt.webp" }
    ],
    africa: 
    [
        { name: "Algeria", flag: "flags/dz.webp" },
        { name: "Angola", flag: "flags/ao.webp" },
        { name: "Benin", flag: "flags/bj.webp" },
        { name: "Botswana", flag: "flags/bw.webp" },
        { name: "Burkina Faso", flag: "flags/bf.webp" },
        { name: "Burundi", flag: "flags/bi.webp" },
        { name: "Cabo Verde", flag: "flags/cv.webp" },
        { name: "Cameroon", flag: "flags/cm.webp" },
        { name: "Central African Republic", flag: "flags/cf.webp" },
        { name: "Chad", flag: "flags/td.webp" },
        { name: "Comoros", flag: "flags/km.webp" },
        { name: "Democratic Republic of the Congo", flag: "flags/cd.webp" },
        { name: "Djibouti", flag: "flags/dj.webp" },
        { name: "Egypt", flag: "flags/eg.webp" },
        { name: "Equatorial Guinea", flag: "flags/gq.webp" },
        { name: "Eritrea", flag: "flags/er.webp" },
        { name: "Eswatini", flag: "flags/sz.webp" },
        { name: "Ethiopia", flag: "flags/et.webp" },
        { name: "Gabon", flag: "flags/ga.webp" },
        { name: "Gambia", flag: "flags/gm.webp" },
        { name: "Ghana", flag: "flags/gh.webp" },
        { name: "Guinea", flag: "flags/gn.webp" },
        { name: "Guinea-Bissau", flag: "flags/gw.webp" },
        { name: "Ivory Coast", flag: "flags/ci.webp" },
        { name: "Kenya", flag: "flags/ke.webp" },
        { name: "Lesotho", flag: "flags/ls.webp" },
        { name: "Liberia", flag: "flags/lr.webp" },
        { name: "Libya", flag: "flags/ly.webp" },
        { name: "Madagascar", flag: "flags/mg.webp" },
        { name: "Malawi", flag: "flags/mw.webp" },
        { name: "Mali", flag: "flags/ml.webp" },
        { name: "Mauritania", flag: "flags/mr.webp" },
        { name: "Mauritius", flag: "flags/mu.webp" },
        { name: "Morocco", flag: "flags/ma.webp" },
        { name: "Mozambique", flag: "flags/mz.webp" },
        { name: "Namibia", flag: "flags/na.webp" },
        { name: "Niger", flag: "flags/ne.webp" },
        { name: "Nigeria", flag: "flags/ng.webp" },
        { name: "Republic of the Congo", flag: "flags/cg.webp" },
        { name: "Rwanda", flag: "flags/rw.webp" },
        { name: "São Tomé and Príncipe", flag: "flags/st.webp" },
        { name: "Senegal", flag: "flags/sn.webp" },
        { name: "Seychelles", flag: "flags/sc.webp" },
        { name: "Sierra Leone", flag: "flags/sl.webp" },
        { name: "Somalia", flag: "flags/so.webp" },
        { name: "South Africa", flag: "flags/za.webp" },
        { name: "South Sudan", flag: "flags/ss.webp" },
        { name: "Sudan", flag: "flags/sd.webp" },
        { name: "Tanzania", flag: "flags/tz.webp" },
        { name: "Togo", flag: "flags/tg.webp" },
        { name: "Tunisia", flag: "flags/tn.webp" },
        { name: "Uganda", flag: "flags/ug.webp" },
        { name: "Zambia", flag: "flags/zm.webp" },
        { name: "Zimbabwe", flag: "flags/zw.webp" }
    ],
    north_america: [
        { name: "Antigua and Barbuda", flag: "flags/ag.webp" },
        { name: "Bahamas", flag: "flags/bs.webp" },
        { name: "Barbados", flag: "flags/bb.webp" },
        { name: "Belize", flag: "flags/bz.webp" },
        { name: "Canada", flag: "flags/ca.webp" },
        { name: "Costa Rica", flag: "flags/cr.webp" },
        { name: "Cuba", flag: "flags/cu.webp" },
        { name: "Dominica", flag: "flags/dm.webp" },
        { name: "Dominican Republic", flag: "flags/do.webp" },
        { name: "El Salvador", flag: "flags/sv.webp" },
        { name: "Grenada", flag: "flags/gd.webp" },
        { name: "Guatemala", flag: "flags/gt.webp" },
        { name: "Haiti", flag: "flags/ht.webp" },
        { name: "Honduras", flag: "flags/hn.webp" },
        { name: "Jamaica", flag: "flags/jm.webp" },
        { name: "Mexico", flag: "flags/mx.webp" },
        { name: "Nicaragua", flag: "flags/ni.webp" },
        { name: "Panama", flag: "flags/pa.webp" },
        { name: "Saint Kitts and Nevis", flag: "flags/kn.webp" },
        { name: "Saint Lucia", flag: "flags/lc.webp" },
        { name: "Saint Vincent and the Grenadines", flag: "flags/vc.webp" },
        { name: "Trinidad and Tobago", flag: "flags/tt.webp" },
        { name: "United States", flag: "flags/us.webp" }
    ],
    asia: [
        { name: "Afghanistan", flag: "flags/af.png" },
        { name: "Armenia", flag: "flags/am.webp" },
        { name: "Azerbaijan", flag: "flags/az.webp" },
        { name: "Bahrain", flag: "flags/bh.webp" },
        { name: "Bangladesh", flag: "flags/bd.webp" },
        { name: "Bhutan", flag: "flags/bt.webp" },
        { name: "Brunei", flag: "flags/bn.webp" },
        { name: "Cambodia", flag: "flags/kh.webp" },
        { name: "China", flag: "flags/cn.webp" },
        { name: "Cyprus", flag: "flags/cy.webp" },
        { name: "Georgia", flag: "flags/ge.webp" },
        { name: "India", flag: "flags/in.webp" },
        { name: "Indonesia", flag: "flags/id.webp" },
        { name: "Iran", flag: "flags/ir.webp" },
        { name: "Iraq", flag: "flags/iq.webp" },
        { name: "Israel", flag: "flags/il.webp" },
        { name: "Japan", flag: "flags/jp.webp" },
        { name: "Jordan", flag: "flags/jo.webp" },
        { name: "Kazakhstan", flag: "flags/kz.webp" },
        { name: "Kuwait", flag: "flags/kw.webp" },
        { name: "Kyrgyzstan", flag: "flags/kg.webp" },
        { name: "Laos", flag: "flags/la.webp" },
        { name: "Lebanon", flag: "flags/lb.webp" },
        { name: "Malaysia", flag: "flags/my.webp" },
        { name: "Maldives", flag: "flags/mv.webp" },
        { name: "Mongolia", flag: "flags/mn.webp" },
        { name: "Myanmar", flag: "flags/mm.webp" },
        { name: "Nepal", flag: "flags/np.webp" },
        { name: "North Korea", flag: "flags/kp.webp" },
        { name: "Oman", flag: "flags/om.webp" },
        { name: "Pakistan", flag: "flags/pk.webp" },
        { name: "Palestine", flag: "flags/ps.webp" },
        { name: "Philippines", flag: "flags/ph.webp" },
        { name: "Qatar", flag: "flags/qa.webp" },
        { name: "Saudi Arabia", flag: "flags/sa.webp" },
        { name: "Singapore", flag: "flags/sg.webp" },
        { name: "South Korea", flag: "flags/kr.webp" },
        { name: "Sri Lanka", flag: "flags/lk.webp" },
        { name: "Syria", flag: "flags/sy.webp" },
        { name: "Tajikistan", flag: "flags/tj.webp" },
        { name: "Thailand", flag: "flags/th.webp" },
        { name: "Timor-Leste", flag: "flags/tl.webp" },
        { name: "Turkey", flag: "flags/tr.webp" },
        { name: "Turkmenistan", flag: "flags/tm.webp" },
        { name: "United Arab Emirates", flag: "flags/ae.webp" },
        { name: "Uzbekistan", flag: "flags/uz.webp" },
        { name: "Vietnam", flag: "flags/vn.webp" },
        { name: "Yemen", flag: "flags/ye.webp" }
    ],
    oceania: [
        { name: "Australia", flag: "flags/au.webp" },
        { name: "Fiji", flag: "flags/fj.webp" },
        { name: "Kiribati", flag: "flags/ki.webp" },
        { name: "Marshall Islands", flag: "flags/mh.webp" },
        { name: "Micronesia", flag: "flags/fm.webp" },
        { name: "Nauru", flag: "flags/nr.webp" },
        { name: "New Zealand", flag: "flags/nz.webp" },
        { name: "Palau", flag: "flags/pw.webp" },
        { name: "Papua New Guinea", flag: "flags/pg.webp" },
        { name: "Samoa", flag: "flags/ws.webp" },
        { name: "Solomon Islands", flag: "flags/sb.webp" },
        { name: "Tonga", flag: "flags/to.webp" },
        { name: "Tuvalu", flag: "flags/tv.webp" },
        { name: "Vanuatu", flag: "flags/vu.webp" }
    ],
    south_america: [
        { name: "Argentina", flag: "flags/ar.webp" },
        { name: "Bolivia", flag: "flags/bo.webp" },
        { name: "Brazil", flag: "flags/br.webp" },
        { name: "Chile", flag: "flags/cl.webp" },
        { name: "Colombia", flag: "flags/co.webp" },
        { name: "Ecuador", flag: "flags/ec.webp" },
        { name: "Guyana", flag: "flags/gy.webp" },
        { name: "Paraguay", flag: "flags/py.webp" },
        { name: "Peru", flag: "flags/pe.webp" },
        { name: "Suriname", flag: "flags/sr.webp" },
        { name: "Uruguay", flag: "flags/uy.webp" },
        { name: "Venezuela", flag: "flags/ve.webp" }
    ]
     
};
const MAX_PAIRS = 12;
let continent = localStorage.getItem('continent') || 'world';
let selectedCountries = shuffle(countries[continent]).slice(0, MAX_PAIRS);

// Create pairs (one card with the country name, one with the flag)
let pairs = [];
selectedCountries.forEach(item => {
    pairs.push({ type: "name", value: item.name });
    pairs.push({ type: "flag", value: item.flag });
});

pairs = shuffle(pairs);
let matchedPairs = 0;
let gameBoard = document.querySelector(".grid");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard() {
    gameBoard.innerHTML = "";
    document.getElementById("current-continent").textContent = 'Continent: ' + formatContinentName(continent);
    pairs.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    ${item.type === "name" ? item.value : `<img src="${item.value}" width="80%">`}
                </div>
                <div class="card-back"></div>
            </div>
        `;
        card.dataset.type = item.type;
        card.dataset.value = item.value;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}
function formatContinentName(continent) {
    return continent
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
function flipCard() {
    if (lockBoard || this.classList.contains("flipped")) return;
    
    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        lockBoard = true;

        // Check if the country name matches the corresponding flag
        if (
            (firstCard.dataset.type === "name" && secondCard.dataset.type === "flag" && firstCard.dataset.value === getCountryName(secondCard.dataset.value)) ||
            (firstCard.dataset.type === "flag" && secondCard.dataset.type === "name" && secondCard.dataset.value === getCountryName(firstCard.dataset.value))
        ) {
            glow([firstCard, secondCard]);
            disableCards();
            checkWin(); // Ensure checkWin is called here
        } else {
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetBoard();
            }, 800);
        }
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedPairs++; // Increment the matched pairs count

    resetBoard();
    checkWin(); // Ensure checkWin is called here
}

function checkWin() {
    if (matchedPairs === MAX_PAIRS) {
        document.querySelector(".modal").style.display = "block";
        createConfetti();
    }
}

function glow(cards) {
    cards.forEach(card => card.classList.add('glow-green'));

    setTimeout(() => {
        cards.forEach(card => card.classList.remove('glow-green'));
    }, 1000);
}
function getCountryName(flagSrc) {
    let country = selectedCountries.find(c => c.flag === flagSrc);
    return country ? country.name : "";
}
// Confetti animation function
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

    function createPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 20 + 'px';
        piece.style.height = Math.random() * 20 + 'px';
        piece.style.left = (Math.random() * window.innerWidth) + 'px';
        piece.style.top = '-20px';
        piece.style.animationDuration = '2s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    // Adjust the number of confetti pieces
    const totalPieces = 700;
    const interval = 5; // milliseconds

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
    }

function goBack() {
    window.location.href = "Memory.html";
}

function restartGame() {
    document.getElementById("win-modal").style.display = "none";
    matchedPairs = 0;
    createBoard();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

createBoard();
